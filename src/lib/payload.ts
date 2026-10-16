// Payload CMS API Helper for Astro
const PAYLOAD_API_URL = import.meta.env.PAYLOAD_API_URL || 'https://aurin-payload-cms.vercel.app/api';
export const PAYLOAD_SERVER_URL = import.meta.env.PAYLOAD_SERVER_URL || 'https://aurin-payload-cms.vercel.app';

export type SizeOption = 'sm' | 'md' | 'lg' | 'xl';

export interface PayloadProject {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  publishDate: string;
  website?: string;
  keywords?: Array<{
    keyword: string;
  }>;
  category?: {
    id: string;
    name: string;
    slug: string;
    color: string;
  };
  /** "Categorías (filtros)" del CMS; con depth por defecto llegan pobladas */
  categories?: Array<PayloadCategory | string> | null;
  hero: {
    description: string;
    bannerImage: {
      id: string;
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    bannerHeight?: SizeOption | null;
    services: Array<{
      name: string;
    }>;
  };
  /** Texto de la tarjeta (sección 4 del CMS): si tiene texto, se muestra en vez de la miniatura */
  cardText?: {
    text?: any;
    font?: 'display' | 'body' | null;
    weight?: '400' | '600' | '700' | null;
    size?: 'sm' | 'md' | 'lg' | 'xl' | null;
    background?: string | null;
    color?: string | null;
  } | null;
  /** Miniatura cuadrada para las tarjetas; vacía = se recorta la imagen principal */
  thumbnail?: {
    id: string;
    url: string;
    alt: string;
    width: number;
    height: number;
  } | null;
  gallery: Array<{
    image: {
      id: string;
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    alt: string;
    caption?: string;
  }>;
  learnings?: {
    title: string;
    content: any; // Rich text content
  };
  client: {
    name: string;
    industry?: string;
    logo?: {
      id: string;
      url: string;
      alt: string;
    };
    logoSize?: SizeOption | null;
    logoColor?: 'white' | 'original' | null;
  };
  galleryHeight?: SizeOption | null;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: {
      id: string;
      url: string;
      alt: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}

export interface PayloadCategory {
  id: string;
  name: string;
  slug: string;
}

export interface PayloadTag {
  id: string;
  name: string;
  slug: string;
}

/** Slugs de las categorías del proyecto: los usa el filtro del listado */
export function getCategorySlugs(project: PayloadProject): string[] {
  return (project.categories || []).flatMap((c) => (typeof c === 'object' && c?.slug ? [c.slug] : []));
}

/**
 * Botones del filtro: "Todos" + las categorías que tiene al menos un proyecto de la lista,
 * por nombre. Una categoría sin proyectos no sale, así ningún filtro deja la rejilla vacía.
 */
export function getProjectFilters(projects: PayloadProject[], allLabel: string): Array<{ value: string; label: string }> {
  const bySlug = new Map<string, string>();
  for (const p of projects) {
    for (const c of p.categories || []) {
      if (typeof c === 'object' && c?.slug) bySlug.set(c.slug, c.name || c.slug);
    }
  }
  const categories = [...bySlug].map(([value, label]) => ({ value, label }));
  return [{ value: 'all', label: allLabel }, ...categories.sort((a, b) => a.label.localeCompare(b.label))];
}

// API Functions
export class PayloadAPI {
  private static async fetchAPI(endpoint: string, locale?: string) {
    const url = new URL(`${PAYLOAD_API_URL}${endpoint}`);
    
    if (locale) {
      url.searchParams.set('locale', locale);
      // Campo vacío en este idioma = se usa el del otro. Payload solo cae al español
      // (default); sin esto, un texto capturado con el admin en English no salía en /projects.
      url.searchParams.set('fallback-locale', locale === 'es' ? 'en' : 'es');
    }

    try {
      const response = await fetch(url.toString());
      
      if (!response.ok) {
        throw new Error(`Payload API error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Payload API fetch error:', error);
      throw error;
    }
  }

  // Cualquier estado: lo usa el live preview del admin, que también muestra borradores
  static async getProjectById(id: string, locale: string = 'es'): Promise<PayloadProject> {
    return this.fetchAPI(`/projects/${encodeURIComponent(id)}`, locale);
  }

  static async getMedia(id: string) {
    return this.fetchAPI(`/media/${encodeURIComponent(id)}?depth=0`);
  }

  // Get all published projects
  static async getProjects(locale: string = 'es'): Promise<PayloadProject[]> {
    const data = await this.fetchAPI('/projects?where[status][equals]=published&sort=-publishDate&limit=100', locale);
    return data.docs || [];
  }

  // Get featured projects
  static async getFeaturedProjects(locale: string = 'es'): Promise<PayloadProject[]> {
    const data = await this.fetchAPI('/projects?where[status][equals]=published&where[featured][equals]=true&sort=-publishDate&limit=100', locale);
    return data.docs || [];
  }

  // Get project by slug
  static async getProjectBySlug(slug: string, locale: string = 'es'): Promise<PayloadProject | null> {
    try {
      const data = await this.fetchAPI(`/projects?where[slug][equals]=${slug}&where[status][equals]=published`, locale);
      return data.docs?.[0] || null;
    } catch (error) {
      console.error(`Error fetching project with slug ${slug}:`, error);
      return null;
    }
  }

  // Get projects by tag
  static async getProjectsByTag(tagSlug: string, locale: string = 'es'): Promise<PayloadProject[]> {
    const data = await this.fetchAPI(`/projects?where[tags.slug][contains]=${tagSlug}&where[status][equals]=published&sort=-publishDate&limit=100`, locale);
    return data.docs || [];
  }

  // Get all tags
  static async getTags(locale: string = 'es'): Promise<PayloadTag[]> {
    const data = await this.fetchAPI('/tags?limit=100', locale);
    return data.docs || [];
  }

  // Search projects
  static async searchProjects(query: string, locale: string = 'es'): Promise<PayloadProject[]> {
    const data = await this.fetchAPI(`/projects?where[or][0][title][contains]=${encodeURIComponent(query)}&where[or][1][hero.description][contains]=${encodeURIComponent(query)}&where[status][equals]=published&limit=100`, locale);
    return data.docs || [];
  }
}

// Helper function to get full image URL
/** Imagen de las tarjetas de proyecto: la miniatura del CMS o, si no hay, la imagen principal */
export function getCardImage(project: PayloadProject) {
  return project.thumbnail?.url ? project.thumbnail : project.hero?.bannerImage;
}

/**
 * La imagen de la tarjeta solo si de verdad es del proyecto. Descarta rellenos
 * ("placeholder-2.jpg", "Image-400x300-…") y la foto de otro proyecto reciclada:
 * en Payload 13 proyectos traen como banner `elite_banner.jpg`. Una imagen
 * repetida se queda solo con el proyecto que nombra su alt ("Elite Home Health
 * Website"); los demás muestran NO_PHOTO_IMAGE hasta que tengan su miniatura.
 */
export function ownCardImage(project: PayloadProject, all: PayloadProject[]) {
  const image = getCardImage(project);
  if (!image?.url || /placeholder|Image-\d+x\d+/i.test(image.url)) return undefined;
  const shared = all.some((p) => p.id !== project.id && getCardImage(p)?.url === image.url);
  if (shared && !image.alt?.toLowerCase().includes(project.title.toLowerCase())) return undefined;
  return image;
}

export interface CardCover {
  html: string;
  font: 'display' | 'body';
  weight: '400' | '600' | '700';
  size: 'sm' | 'md' | 'lg' | 'xl';
  background: string;
  color: string;
}

// Los colores van directo al CSS de la tarjeta: solo hex de 6 dígitos
const HEX_COLOR = /^#[0-9a-f]{6}$/i;

/** El texto de la tarjeta listo para pintar, o undefined si el proyecto no tiene (usa la imagen). */
export function getCardCover(project: PayloadProject): CardCover | undefined {
  const card = project.cardText;
  const html = renderRichText(card?.text);
  if (!html.replace(/<[^>]*>/g, '').trim()) return undefined;
  return {
    html,
    font: card?.font === 'body' ? 'body' : 'display',
    weight: card?.weight === '400' || card?.weight === '700' ? card.weight : '600',
    size: card?.size === 'sm' || card?.size === 'lg' || card?.size === 'xl' ? card.size : 'md',
    background: HEX_COLOR.test(card?.background ?? '') ? card!.background! : '#D0DF00',
    color: HEX_COLOR.test(card?.color ?? '') ? card!.color! : '#0A0A0A',
  };
}

/** Lo que muestra una tarjeta cuando el proyecto aún no tiene fotos propias. */
export const NO_PHOTO_IMAGE = 'https://placehold.co/800x600?text=Proyecto+Aurin';

export function getImageUrl(imageUrl: string | undefined): string {
  if (!imageUrl) return '';
  if (imageUrl.startsWith('http')) return imageUrl;
  
  // Fallback for missing placeholder images from Payload CMS
  if (imageUrl.includes('placeholder-2.jpg') || imageUrl.includes('placeholder')) {
    return NO_PHOTO_IMAGE;
  }
  
  return `${PAYLOAD_SERVER_URL}${imageUrl}`;
}

// Helper functions for Astro components
export function getProjectUrl(project: PayloadProject, locale: string = 'es'): string {
  const prefix = locale === 'es' ? '' : `/${locale}`;
  return `${prefix}/project/${project.slug}`;
}

export function getTagUrl(tag: PayloadTag, locale: string = 'es'): string {
  const prefix = locale === 'es' ? '' : `/${locale}`;
  return `${prefix}/projects/etiqueta/${tag.slug}`;
}

export function formatDate(dateString: string, locale: string = 'es'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Rich text renderer helper - converts Lexical JSON to HTML
export function renderRichText(content: any): string {
  if (!content) return '';
  if (typeof content === 'string') return content;

  try {
    if (!content.root || !content.root.children) return '';

    const serializeNode = (node: any): string => {
      // Handle text nodes
      if (node.type === 'text') {
        let text = node.text || '';

        // Apply formatting
        if (node.format) {
          if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
          if (node.format & 2) text = `<em>${text}</em>`; // Italic
          if (node.format & 8) text = `<u>${text}</u>`; // Underline
          if (node.format & 16) text = `<code>${text}</code>`; // Code
        }

        // Apply special text types
        if (node.type === 'text' && text) {
          const style = node.style || '';
          if (style.includes('strikethrough')) text = `<s>${text}</s>`;
        }

        return text;
      }

      // Handle paragraph nodes
      if (node.type === 'paragraph') {
        const children = node.children?.map(serializeNode).join('') || '';
        const textAlign = node.format ? `style="text-align: ${node.format};"` : '';
        return `<p ${textAlign}>${children}</p>`;
      }

      // Handle heading nodes
      if (node.type === 'heading') {
        const tag = node.tag || 'h2';
        const children = node.children?.map(serializeNode).join('') || '';
        const textAlign = node.format ? `style="text-align: ${node.format};"` : '';
        return `<${tag} ${textAlign}>${children}</${tag}>`;
      }

      // Handle list nodes
      if (node.type === 'list') {
        const tag = node.listType === 'number' ? 'ol' : 'ul';
        const children = node.children?.map(serializeNode).join('') || '';
        return `<${tag}>${children}</${tag}>`;
      }

      if (node.type === 'listitem') {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<li>${children}</li>`;
      }

      // Handle quote nodes
      if (node.type === 'quote') {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<blockquote>${children}</blockquote>`;
      }

      // Handle code block nodes
      if (node.type === 'code') {
        const children = node.children?.map((child: any) => child.text || '').join('') || '';
        return `<pre><code>${children}</code></pre>`;
      }

      // Handle link nodes
      if (node.type === 'link' || node.type === 'autolink') {
        const children = node.children?.map(serializeNode).join('') || '';
        // Payload 3 guarda el enlace en node.fields; node.url/newTab era el formato de Payload 2
        const url = node.fields?.url || node.url || '#';
        const newTab = node.fields?.newTab ?? node.newTab;
        return `<a href="${url}" target="${newTab ? '_blank' : '_self'}" rel="${newTab ? 'noopener noreferrer' : ''}">${children}</a>`;
      }

      // Handle line break
      if (node.type === 'linebreak') {
        return '<br>';
      }

      // Default: try to render children if they exist
      if (node.children) {
        return node.children.map(serializeNode).join('');
      }

      return '';
    };

    return content.root.children.map(serializeNode).join('');
  } catch (error) {
    console.error('Error rendering rich text:', error);
    // Fallback: extract plain text
    if (content.root && content.root.children) {
      return content.root.children
        .map((node: any) => {
          if (node.children) {
            return node.children.map((child: any) => child.text || '').join('');
          }
          return node.text || '';
        })
        .join('\n\n');
    }
    return '';
  }
}

// Splits rich text into heading-only HTML.
// Handles two cases:
// 1. Actual heading nodes in the Lexical JSON
// 2. First bold paragraph (common pattern in Payload CMS)
// Output uses the h2 > span pattern from base.css:
//   span = first line (white, 32px)
//   h2 text = second line (yellow, 48px)
/**
 * Une con espacios fijos las últimas palabras de cada bloque (párrafo, viñeta,
 * cita) para que el último renglón nunca quede con una o dos palabras sueltas:
 * se lleva 3 si caben en `maxChars`, si no 2. El tope evita un bloque irrompible
 * más ancho que la pantalla en celular. Funciona en todos los navegadores, a
 * diferencia de `text-wrap: pretty`. En los encabezados no se usa: a 36–40 px
 * un bloque de 3 palabras ya no cabe en un celular; ahí manda `text-wrap: balance`.
 */
export function tieLastWords(html: string, maxChars: number): string {
  return html.replace(/([^<>]+)(<\/(?:p|h[1-6]|li|blockquote)>)/g, (_, text: string, close: string) => {
    const words = text.split(' ');
    for (const n of [3, 2]) {
      const tail = words.slice(-n);
      if (words.length > n && tail.join(' ').length <= maxChars) {
        return `${words.slice(0, -n).join(' ')} ${tail.join('\u00a0')}${close}`;
      }
    }
    return text + close;
  });
}

// Un párrafo cuenta como título solo si TODO su texto va en negritas. Antes bastaba
// con que la primera palabra lo estuviera, y negritas puestas a propósito al inicio
// de un párrafo lo volvían título (y se perdía el resto del texto).
function isBoldHeadingParagraph(node: any): boolean {
  if (node?.type !== 'paragraph') return false;
  const children = node.children || [];
  return children.length > 0 && children.every((n: any) => n.type === 'text' && n.format & 1);
}

export function renderRichTextHeadings(content: any): string {
  if (!content) return '';
  if (typeof content === 'string') return '';

  try {
    if (!content.root || !content.root.children) return '';

    const serializeText = (node: any): string => {
      if (node.type === 'text') return node.text || '';
      if (node.children) return node.children.map(serializeText).join('');
      return '';
    };

    // Case 1: Look for actual heading nodes
    const headingNodes = content.root.children.filter(
      (node: any) => node.type === 'heading'
    );

    if (headingNodes.length >= 2) {
      const firstLine = headingNodes[0].children?.map(serializeText).join('') || '';
      const secondLine = headingNodes[1].children?.map(serializeText).join('') || '';
      return `<h2><span>${firstLine}</span> ${secondLine}</h2>`;
    }

    if (headingNodes.length === 1) {
      const text = headingNodes[0].children?.map(serializeText).join('') || '';
      return `<h2>${text}</h2>`;
    }

    // Case 2: First paragraph entirely in bold
    const firstNode = content.root.children[0];
    if (isBoldHeadingParagraph(firstNode)) {
      const fullText = firstNode.children.map(serializeText).join('').trim();

      // Try to split at a natural word boundary near the middle
      const words = fullText.split(' ');
      if (words.length >= 3) {
        // Find a split point around the middle
        const midIndex = Math.ceil(words.length / 2);
        const firstLine = words.slice(0, midIndex).join(' ');
        const secondLine = words.slice(midIndex).join(' ');
        return `<h2><span>${firstLine}</span> ${secondLine}</h2>`;
      }

      // Short text — render as single h2
      return `<h2>${fullText}</h2>`;
    }

    return '';
  } catch {
    return '';
  }
}

// Splits rich text into body-only HTML (paragraphs, lists, etc.)
// Excludes heading nodes AND the first bold paragraph (used as heading).
export function renderRichTextBody(content: any): string {
  if (!content) return '';
  if (typeof content === 'string') return content;

  try {
    if (!content.root || !content.root.children) return '';

    // Determine which nodes to skip
    const hasHeadings = content.root.children.some(
      (node: any) => node.type === 'heading'
    );

    let bodyNodes;
    if (hasHeadings) {
      // Skip heading nodes
      bodyNodes = content.root.children.filter(
        (node: any) => node.type !== 'heading'
      );
    } else {
      // Skip the first paragraph if it's the heading (entirely bold)
      if (isBoldHeadingParagraph(content.root.children[0])) {
        // Skip the first paragraph (it's the heading)
        bodyNodes = content.root.children.slice(1);
      } else {
        bodyNodes = content.root.children;
      }
    }

    if (bodyNodes.length === 0) return '';

    const serializeNode = (node: any): string => {
      if (node.type === 'text') {
        let text = node.text || '';
        if (node.format) {
          if (node.format & 1) text = `<strong>${text}</strong>`;
          if (node.format & 2) text = `<em>${text}</em>`;
          if (node.format & 8) text = `<u>${text}</u>`;
          if (node.format & 16) text = `<code>${text}</code>`;
        }
        return text;
      }
      if (node.type === 'paragraph') {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<p>${children}</p>`;
      }
      if (node.type === 'list') {
        const tag = node.listType === 'number' ? 'ol' : 'ul';
        const children = node.children?.map(serializeNode).join('') || '';
        return `<${tag}>${children}</${tag}>`;
      }
      if (node.type === 'listitem') {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<li>${children}</li>`;
      }
      if (node.type === 'quote') {
        const children = node.children?.map(serializeNode).join('') || '';
        return `<blockquote>${children}</blockquote>`;
      }
      if (node.type === 'link' || node.type === 'autolink') {
        const children = node.children?.map(serializeNode).join('') || '';
        const url = node.fields?.url || node.url || '#';
        const newTab = node.fields?.newTab ?? node.newTab;
        return newTab
          ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${children}</a>`
          : `<a href="${url}">${children}</a>`;
      }
      if (node.type === 'linebreak') return '<br>';
      if (node.children) return node.children.map(serializeNode).join('');
      return '';
    };

    return tieLastWords(bodyNodes.map(serializeNode).join(''), 30);
  } catch {
    return '';
  }
}
