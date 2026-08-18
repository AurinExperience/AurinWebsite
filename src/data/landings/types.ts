import type { ProofProjectId } from './projects';

/**
 * Tipos de las landings geolocalizadas de diseño web.
 *
 * El copy vive aquí y NO en `i18n/translations.ts` a propósito: translations.ts
 * guarda lo que se repite en todo el sitio (labels de formulario, botones), y
 * estas landings necesitan justo lo contrario — texto único por ciudad. Si el
 * copy fuera compartido, las tres páginas serían casi-duplicados y Google no
 * rankearía ninguna.
 */

export type Lang = 'es' | 'en';

export interface LandingCopy {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    subtitle: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    cta: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    heading: string;
    intro: string;
    items: { title: string; description: string; bullets: string[] }[];
  };
  process: {
    heading: string;
    description: string;
    steps: { name: string; text: string }[];
  };
  faq: {
    heading: string;
    description: string;
    items: { question: string; answer: string }[];
  };
  socialProof: {
    heading: string;
    description: string;
  };
  /** Bloque de enlaces a las landings hermanas (evita páginas huérfanas). */
  nearby: {
    heading: string;
    description: string;
  };
  /** Etiqueta con la que las OTRAS landings enlazan a esta. Anchor text único. */
  linkLabel: string;
  /** Nombre de la página en el breadcrumb. */
  breadcrumb: string;
  /** Nombre del servicio en el schema Service. */
  serviceName: string;
  /** Descripción del HowTo. */
  howToDescription: string;
}

export interface Landing {
  /** Clave interna. También es el valor de `source` que llega al correo. */
  id: string;
  /**
   * `draft` = la ciudad existe en código pero NO se publica: la URL redirige al
   * home, no entra al sitemap, no aparece en el footer ni en los enlaces entre
   * landings. Es el freno que permite escribir ciudades sin publicarlas todas de
   * golpe — soltar veinte landings el mismo día es la huella programática que
   * Google lee como doorway pages, y ahí la penalización es de sitio, no de
   * página. Se pasa a `live` cuando su copy está listo y con semanas de por
   * medio entre una y otra.
   */
  status: 'live' | 'draft';
  /**
   * Solo para la ciudad donde Aurin tiene domicilio real. Agrega el nodo
   * LocalBusiness con el NAP verdadero. En cualquier otra ciudad sería una
   * dirección inventada: eso sí es motivo de penalización y de suspensión de la
   * ficha de Google Business Profile.
   */
  localBusiness?: boolean;
  /** Segmento de URL por idioma. ES: /diseno-web-<slug>. EN: /en/web-design-<slug>. */
  slug: Record<Lang, string>;
  /** Estado / entidad federativa, para el schema `areaServed`. */
  region: string;
  /** Centro geográfico de la zona atendida. */
  geo: { latitude: number; longitude: number };
  /** Municipios o alcaldías dentro del área de servicio. */
  areas: string[];
  /** Lada local en el placeholder del teléfono — señal de localización real. */
  phoneSample: string;
  /**
   * Tres proyectos reales del CMS, elegidos por afinidad de SECTOR con lo que
   * se vende en este estado. Es lo que hace que la prueba social diga algo
   * distinto en cada landing en lugar de repetir las mismas tres capturas.
   */
  proof: ProofProjectId[];
  copy: Record<Lang, LandingCopy>;
}
