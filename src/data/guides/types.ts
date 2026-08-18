/**
 * Guías — el contenido de apoyo de las landings por estado.
 *
 * Existen por una razón de posicionamiento, no de contenido por contenido: una
 * landing sola compite en desventaja contra una landing igual de buena que
 * tiene seis artículos apuntándole. Cada guía responde una búsqueda
 * informacional (“cuánto cuesta…”, “cómo elegir…”) y enlaza a las landings
 * comerciales, que es la dirección en la que fluye la autoridad.
 *
 * Mismo patrón que src/data/landings: lista cerrada, un archivo por guía,
 * `status` para publicar de forma escalonada.
 */

export type Lang = 'es' | 'en';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideCopy {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  /** H1. Distinto del title de SEO a propósito. */
  title: string;
  /** Resumen para el índice y para el `description` del Article. */
  excerpt: string;
  /** Párrafos de entrada, antes del primer H2. */
  intro: string[];
  sections: GuideSection[];
  /** Cierre que empuja a la landing comercial correspondiente. */
  cta: {
    heading: string;
    text: string;
    label: string;
  };
  /** Etiqueta con la que otras páginas enlazan a esta guía. */
  linkLabel: string;
  breadcrumb: string;
}

export interface Guide {
  id: string;
  status: 'live' | 'draft';
  slug: Record<Lang, string>;
  /** ISO. Alimenta datePublished/dateModified del Article. */
  published: string;
  updated: string;
  /**
   * Ids de landings a las que enlaza el CTA final, en orden. La primera es la
   * que recibe el enlace principal.
   */
  relatedLandings: string[];
  copy: Record<Lang, GuideCopy>;
}
