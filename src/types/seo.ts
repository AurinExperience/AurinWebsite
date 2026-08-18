/** Referencia a un nodo ya declarado en el @graph global (GlobalSchema.astro). */
export interface NodeReference {
  "@id": string;
}

export interface PostalAddress {
  "@type": "PostalAddress";
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  streetAddress?: string;
  addressCountry?: string;
}

export interface ContactPoint {
  "@type": "ContactPoint";
  telephone?: string;
  email?: string;
  contactType?: string;
}

export interface OrganizationStructuredData {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description?: string;
  foundingDate?: string;
  address?: PostalAddress;
  contactPoint?: ContactPoint | ContactPoint[];
  sameAs?: string[];
  areaServed?: string | string[];
  knowsAbout?: string | string[];
}

export interface AboutPageStructuredData {
  "@context": "https://schema.org";
  "@type": "AboutPage";
  name?: string;
  url?: string;
  mainEntity: OrganizationStructuredData | NodeReference;
}

export interface ContactPageStructuredData {
  "@context": "https://schema.org";
  "@type": "ContactPage";
  name?: string;
  url?: string;
  mainEntity: OrganizationStructuredData | NodeReference;
}

export interface WebPageStructuredData {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  provider?: OrganizationStructuredData | NodeReference;
}

export interface LocalBusinessStructuredData extends OrganizationStructuredData {
  "@type": "LocalBusiness";
  image?: string;
  priceRange?: string;
  /* NAP: el teléfono y las coordenadas tienen que coincidir con la ficha de
     Google Business Profile o cuentan como dos negocios distintos. */
  telephone?: string;
  geo?: GeoCoordinates;
}

export interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: number;
  longitude: number;
}

export interface AdministrativeArea {
  "@type": "AdministrativeArea";
  name: string;
  geo?: GeoCoordinates;
}

export interface City {
  "@type": "City";
  name: string;
}

export interface ServiceStructuredData {
  "@context": "https://schema.org";
  "@type": "Service";
  name?: string;
  description?: string;
  url?: string;
  serviceType: string;
  provider: OrganizationStructuredData | { "@id": string };
  areaServed?: string | AdministrativeArea | (AdministrativeArea | City)[];
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: {
      "@type": "Offer";
      itemOffered: {
        "@type": "Service";
        name: string;
        description: string;
      };
    }[];
  };
}

export interface FAQQuestion {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface FAQPageStructuredData {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: FAQQuestion[];
}

export interface HowToStep {
  "@type": "HowToStep";
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToStructuredData {
  "@context": "https://schema.org";
  "@type": "HowTo";
  name: string;
  description?: string;
  step: HowToStep[];
}

export interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListStructuredData {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbListItem[];
}

export interface CollectionPageStructuredData {
  "@context": "https://schema.org";
  "@type": "CollectionPage";
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  mainEntity: OrganizationStructuredData | NodeReference;
}

export type StructuredData =
  | OrganizationStructuredData
  | AboutPageStructuredData
  | ContactPageStructuredData
  | WebPageStructuredData
  | LocalBusinessStructuredData
  | ServiceStructuredData
  | CollectionPageStructuredData
  | FAQPageStructuredData
  | HowToStructuredData
  | BreadcrumbListStructuredData;

/**
 * Article — datos estructurados de las guías. El autor apunta al nodo
 * Organization del @graph global en lugar de a una Person: declarar un autor
 * humano exigiría un nombre real y una página de autor que hoy no existen, y
 * un autor inventado es peor señal de E-E-A-T que ninguno.
 */
export interface ArticleStructuredData {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  inLanguage: string;
  author: NodeReference;
  publisher: NodeReference;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
  about?: string[];
  image?: string;
}
