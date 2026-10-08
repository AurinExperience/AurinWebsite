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
import { PayloadAPI, getImageUrl, type PayloadProject } from "@/lib/payload";

type Lang = "es" | "en";

export interface HreflangAlternate {
  hreflang: string;
  href: string;
}

export type ProjectPageResult =
  | "error"
  | "not-found"
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

  const project = projects.find((p) => p.slug === slug);
  if (!project) return "not-found";

  // Sin hermano la página sigue sirviendo; solo pierde el hreflang cruzado.
  const sibling = await PayloadAPI.getProjects(otherLang)
    .then((list) => list.find((p) => p.id === project.id))
    .catch(() => undefined);

  const byLang = { [lang]: project, [otherLang]: sibling } as Record<Lang, PayloadProject | undefined>;
  const esUrl = byLang.es && `${SITE.url}${projectPageUrl(byLang.es, "es")}`;
  const enUrl = byLang.en && `${SITE.url}${projectPageUrl(byLang.en, "en")}`;

  const alternateLinks: HreflangAlternate[] = [];
  if (esUrl) alternateLinks.push({ hreflang: "es", href: esUrl });
  if (enUrl) alternateLinks.push({ hreflang: "en", href: enUrl });
  alternateLinks.push({ hreflang: "x-default", href: (esUrl || enUrl)! });

  return { project, sibling, alternateLinks };
}
