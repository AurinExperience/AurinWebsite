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
  mainEntity: OrganizationStructuredData;
}

export interface ContactPageStructuredData {
  "@context": "https://schema.org";
  "@type": "ContactPage";
  mainEntity: OrganizationStructuredData;
}

export interface WebPageStructuredData {
  "@context": "https://schema.org";
  "@type": "WebPage";
  name: string;
  description: string;
  url: string;
  provider?: OrganizationStructuredData;
}

export interface LocalBusinessStructuredData extends OrganizationStructuredData {
  "@type": "LocalBusiness";
  image?: string;
  priceRange?: string;
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
  mainEntity: {
    "@type": "Organization";
    name: string;
    url: string;
    logo: string;
    hasOfferCatalog?: {
      "@type": "OfferCatalog";
      name: string;
      itemListElement: {
        "@type": "CreativeWork";
        name: string;
        description: string;
        creator: {
          "@type": "Organization";
          name: string;
        };
        keywords: string[];
      }[];
    };
  };
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
