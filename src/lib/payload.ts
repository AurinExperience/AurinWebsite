// Payload CMS API Helper for Astro
const PAYLOAD_API_URL = import.meta.env.PAYLOAD_API_URL || 'https://aurin-payload-cms.vercel.app/api';
const PAYLOAD_SERVER_URL = import.meta.env.PAYLOAD_SERVER_URL || 'https://aurin-payload-cms.vercel.app';

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
  projectFilters: Array<'diseno-ux-ui' | 'desarrollo-web-movil' | 'desarrollo-branding' | 'marketing-digital' | 'pruebas-usabilidad'>;
  hero: {
    description: string;
    bannerImage: {
      id: string;
      url: string;
      alt: string;
      width: number;
      height: number;
    };
    services: Array<{
      name: string;
    }>;
  };
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
  };
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
  description?: string;
  color: string;
}

export interface PayloadTag {
  id: string;
  name: string;
  slug: string;
}

export interface ProjectFilter {
  value: string;
  label: string;
}

// Definición de filtros predefinidos
export const PROJECT_FILTERS: ProjectFilter[] = [
  { value: 'all', label: 'All' },
  { value: 'diseno-ux-ui', label: 'Diseño UX/UI' },
  { value: 'desarrollo-web-movil', label: 'Desarrollo web y de aplicaciones móviles' },
  { value: 'desarrollo-branding', label: 'Desarrollo de branding' },
];

// API Functions
export class PayloadAPI {
  private static async fetchAPI(endpoint: string, locale?: string) {
    const url = new URL(`${PAYLOAD_API_URL}${endpoint}`);
    
    if (locale) {
      url.searchParams.set('locale', locale);
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

  // Get projects by filter (single or multiple)
  static async getProjectsByFilter(filters: string[], locale: string = 'es'): Promise<PayloadProject[]> {
    if (filters.length === 0 || filters.includes('all')) {
      return this.getProjects(locale);
    }

    // Build query for multiple filters (OR condition)
    const filterQueries = filters.map((filter, index) =>
      `where[or][${index}][projectFilters][contains]=${filter}`
    ).join('&');

    const data = await this.fetchAPI(`/projects?${filterQueries}&where[status][equals]=published&sort=-publishDate&limit=100`, locale);
    return data.docs || [];
  }

  // Get projects by tag
  static async getProjectsByTag(tagSlug: string, locale: string = 'es'): Promise<PayloadProject[]> {
    const data = await this.fetchAPI(`/projects?where[tags.slug][contains]=${tagSlug}&where[status][equals]=published&sort=-publishDate&limit=100`, locale);
    return data.docs || [];
  }

  // Get all categories
  static async getCategories(locale: string = 'es'): Promise<PayloadCategory[]> {
    const data = await this.fetchAPI('/categories?limit=100', locale);
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
export function getImageUrl(imageUrl: string | undefined): string {
  if (!imageUrl) return '';
  if (imageUrl.startsWith('http')) return imageUrl;
  
  // Fallback for missing placeholder images from Payload CMS
  if (imageUrl.includes('placeholder-2.jpg') || imageUrl.includes('placeholder')) {
    return 'https://placehold.co/800x600?text=Proyecto+Aurin';
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
        const url = node.url || '#';
        return `<a href="${url}" target="${node.newTab ? '_blank' : '_self'}" rel="${node.newTab ? 'noopener noreferrer' : ''}">${children}</a>`;
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
      return `<h2><span>${firstLine}</span>${secondLine}</h2>`;
    }

    if (headingNodes.length === 1) {
      const text = headingNodes[0].children?.map(serializeText).join('') || '';
      return `<h2>${text}</h2>`;
    }

    // Case 2: First paragraph with bold text (format & 1)
    const firstNode = content.root.children[0];
    if (firstNode?.type === 'paragraph') {
      const firstTextNode = firstNode.children?.[0];
      const isBold = firstTextNode?.format && (firstTextNode.format & 1);

      if (isBold && firstTextNode?.text) {
        const fullText = firstTextNode.text.trim();

        // Try to split at a natural word boundary near the middle
        const words = fullText.split(' ');
        if (words.length >= 3) {
          // Find a split point around the middle
          const midIndex = Math.ceil(words.length / 2);
          const firstLine = words.slice(0, midIndex).join(' ');
          const secondLine = words.slice(midIndex).join(' ');
          return `<h2><span>${firstLine}</span>${secondLine}</h2>`;
        }

        // Short text — render as single h2
        return `<h2>${fullText}</h2>`;
      }
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
      // Check if first paragraph is bold (used as heading)
      const firstNode = content.root.children[0];
      const firstTextNode = firstNode?.children?.[0];
      const isBoldFirstParagraph =
        firstNode?.type === 'paragraph' &&
        firstTextNode?.format &&
        (firstTextNode.format & 1);

      if (isBoldFirstParagraph) {
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
        const url = node.url || '#';
        return `<a href="${url}">${children}</a>`;
      }
      if (node.type === 'linebreak') return '<br>';
      if (node.children) return node.children.map(serializeNode).join('');
      return '';
    };

    return bodyNodes.map(serializeNode).join('');
  } catch {
    return '';
  }
}
