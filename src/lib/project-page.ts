/**
 * Carga y SEO de la página de detalle de proyecto (ES/EN).
 *
 * El proyecto se resuelve en la página y no en ProjectSlugPage porque solo la
 * página puede fijar el status HTTP:
 * - slug inexistente → 404 real (antes caía en datos de ejemplo con 200: soft 404).
 * - Payload caído → 503 + Retry-After, para que Google reintente en vez de
 *   desindexar los proyectos por una caída temporal del CMS.
 *
 * El hermano en el otro idioma se empareja por `id`, igual que el sitemap:
 * el slug puede cambiar entre idiomas.
 */
import { SITE } from "@/config/site";
import {
  PayloadAPI,
  getImageUrl,
  renderRichText,
  renderRichTextBody,
  renderRichTextHeadings,
  type PayloadProject,
} from "@/lib/payload";

type Lang = "es" | "en";

export interface HreflangAlternate {
  hreflang: string;
  href: string;
}

export type ProjectPageResult =
  | "error"
  | "not-found"
  | { redirect: string }
  | { project: PayloadProject; sibling?: PayloadProject; alternateLinks: HreflangAlternate[] };

/** Ruta relativa, con el slug codificado (puede traer espacios o acentos). */
export function projectPageUrl(project: PayloadProject, lang: Lang): string {
  return `${lang === "es" ? "" : "/en"}/project/${encodeURIComponent(project.slug)}`;
}

/* ponytail: heurística por nombre de archivo. Los banners de Payload hoy son
   casi todos placeholders (800x600-…, Image-400x300-…); quitarla cuando el
   CMS tenga solo imágenes reales. */
export function isLikelyStockProjectImage(url: string): boolean {
  return /placeholder|\d{3,4}x\d{3,4}/i.test(url);
}

export function resolveProjectOgImage(project: PayloadProject): string {
  // La "Imagen al compartir" del CMS manda; si no hay, la imagen principal
  if (project.seo?.ogImage?.url) return getImageUrl(project.seo.ogImage.url);
  const url = project.hero?.bannerImage?.url;
  return url && !isLikelyStockProjectImage(url) ? getImageUrl(url) : SITE.ogImage;
}

export async function loadProjectBySlug(
  slug: string | undefined,
  lang: Lang
): Promise<ProjectPageResult> {
  const otherLang: Lang = lang === "es" ? "en" : "es";

  let projects: PayloadProject[];
  try {
    projects = await PayloadAPI.getProjects(lang);
  } catch (error) {
    console.error("Error fetching project:", error);
    return "error";
  }

  const otherProjects = PayloadAPI.getProjects(otherLang).catch(() => [] as PayloadProject[]);

  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    // El slug es por idioma: /en/project/{slug-en-español} (la URL vieja, de cuando
    // había un solo slug) responde 301 a la URL con el slug de este idioma.
    const match = (await otherProjects).find((p) => p.slug === slug);
    const target = match && projects.find((p) => p.id === match.id);
    return target ? { redirect: projectPageUrl(target, lang) } : "not-found";
  }

  // Sin hermano la página sigue sirviendo; solo pierde el hreflang cruzado.
  const sibling = (await otherProjects).find((p) => p.id === project.id);

  const byLang = { [lang]: project, [otherLang]: sibling } as Record<Lang, PayloadProject | undefined>;
  const esUrl = byLang.es && `${SITE.url}${projectPageUrl(byLang.es, "es")}`;
  const enUrl = byLang.en && `${SITE.url}${projectPageUrl(byLang.en, "en")}`;

  const alternateLinks: HreflangAlternate[] = [];
  if (esUrl) alternateLinks.push({ hreflang: "es", href: esUrl });
  if (enUrl) alternateLinks.push({ hreflang: "en", href: enUrl });
  alternateLinks.push({ hreflang: "x-default", href: (esUrl || enUrl)! });

  return { project, sibling, alternateLinks };
}

// Opciones del CMS ("md" = el tamaño de siempre)
const LOGO_SCALE = { sm: 0.7, md: 1, lg: 1.4, xl: 1.8 };
const HERO_SCALE = { sm: 0.75, md: 1, lg: 1.35, xl: 1.75 };
const GALLERY_HEIGHT = { sm: 280, md: 362, lg: 480, xl: 600 };

/** Proyecto de Payload → props de Template. Tolera campos vacíos: el live preview manda el formulario a medio llenar. */
export function toProjectData(project: PayloadProject) {
  return {
    projectTitle: project.title,
    projectCategories: project.hero?.services?.map((service) => service?.name).filter(Boolean) || [],
    projectDescription: renderRichText(project.hero?.description),
    descriptionHeading: renderRichTextHeadings(project.hero?.description),
    descriptionBody: renderRichTextBody(project.hero?.description),
    clientLogo: getImageUrl(project.client?.logo?.url),
    logoColor: project.client?.logoColor ?? "white",
    logoScale: LOGO_SCALE[project.client?.logoSize ?? "md"] ?? 1,
    // Sin elegir = slider, como estaban todos antes del mosaico
    galleryLayout: project.galleryLayout ?? "slider",
    galleryHeight: GALLERY_HEIGHT[project.galleryHeight ?? "md"] ?? 362,
    clientName: project.client?.name,
    clientIndustry: project.client?.industry,
    heroImage: getImageUrl(project.hero?.bannerImage?.url),
    heroScale: HERO_SCALE[project.hero?.bannerHeight ?? "md"] ?? 1,
    gallery: (project.gallery ?? [])
      // Una fila sin imagen (agregada en el admin y sin elegir archivo) pintaba un
      // slide vacío: con todas vacías quedaba un hueco del alto de la galería.
      .filter((item) => item?.image?.url)
      .map((item) => ({
        imgUrl: getImageUrl(item.image!.url),
        // El alt del proyecto es opcional; si no hay, el de la imagen en Archivos
        alt: item?.alt || item?.image?.alt || project.title,
        // Texto sobre la foto en la galería y al ampliarla ("Descripción" en el CMS)
        caption: item?.caption?.trim() || undefined,
        // Reservan el alto en el masonry antes de que cargue la imagen
        width: item.image!.width,
        height: item.image!.height,
      })),
  };
}

/* ponytail: caché en memoria por instancia del servidor; una imagen editada
   después de cargarla se ve vieja en el preview hasta que la instancia se recicla. */
const mediaCache = new Map<string, Promise<unknown>>();

function resolveMedia(value: unknown, cms?: string) {
  if (typeof value !== "string") return value;
  const key = `${cms}|${value}`;
  if (!mediaCache.has(key)) {
    mediaCache.set(
      key,
      PayloadAPI.getMedia(value, cms).catch(() => {
        mediaCache.delete(key);
        return undefined;
      })
    );
  }
  return mediaCache.get(key);
}

/* Un array vacío del formulario llega como su número de filas (`gallery: 0`), no
   como `[]`: sin esto el `.map` reventaba, el partial daba 500 y el preview dejaba
   de actualizarse en todo proyecto sin galería o sin servicios. */
const list = (value: unknown): any[] => (Array.isArray(value) ? value : []);

/** El formulario del admin trae las imágenes como IDs; las cambia por el documento de media del CMS `cms`. */
export async function populateLivePreviewMedia(data: any, cms?: string): Promise<PayloadProject> {
  const description = data?.hero?.description;
  const [bannerImage, logo, gallery, descriptionNodes] = await Promise.all([
    resolveMedia(data?.hero?.bannerImage, cms),
    resolveMedia(data?.client?.logo, cms),
    Promise.all(
      list(data?.gallery).map(async (item: any) => ({ ...item, image: await resolveMedia(item?.image, cms) }))
    ),
    // Imágenes dentro de "2 · Texto": el editor guarda solo el ID
    Promise.all(
      list(description?.root?.children).map(async (node: any) =>
        node?.type === "upload" ? { ...node, value: await resolveMedia(node.value, cms) } : node
      )
    ),
  ]);
  return {
    ...data,
    hero: {
      ...data?.hero,
      bannerImage,
      services: list(data?.hero?.services),
      description: description?.root ? { ...description, root: { ...description.root, children: descriptionNodes } } : description,
    },
    client: { ...data?.client, logo },
    gallery,
  };
}
