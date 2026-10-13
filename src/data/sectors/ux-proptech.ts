import { defineSector } from './build';

/**
 * UX/UI para proptech — "diseño UX/UI para proptech" / "diseño de plataformas
 * inmobiliarias". Distinto de la landing web de inmobiliarias: aquí son
 * plataformas (marketplaces, administración de rentas, crowdfunding
 * inmobiliario). Prueba: Grupo Estrella y Bonanza, clientes reales.
 */
export const uxProptech = defineSector({
  id: 'ux-proptech',
  service: 'uxui',
  publishAt: '2026-10-18T00:00:00-06:00',
  slug: { es: 'para-proptech', en: 'for-proptech' },
  name: { es: 'UX/UI para proptech', en: 'UX/UI for proptech' },
  proof: ['grupoEstrella', 'bonanza', 'ancient'],
  es: {
    seoTitle: 'Diseño UX/UI para Proptech y Plataformas Inmobiliarias',
    seoDescription:
      'Diseño UX/UI para proptech: marketplaces de propiedades, administración de rentas y plataformas de inversión inmobiliaria fáciles de usar.',
    keywords:
      'diseño UX/UI para proptech, diseño plataforma inmobiliaria, UX bienes raíces, diseño marketplace de propiedades, diseño administración de rentas',
    subtitle: 'Diseño UX/UI para proptech y plataformas inmobiliarias',
    accent: 'Proptech',
    target: 'proptech y plataformas inmobiliarias',
    hero: 'Rentar, comprar o invertir en un inmueble son decisiones grandes, y la plataforma tiene que transmitir la misma seguridad que una firma ante notario. Diseñamos productos inmobiliarios que se recorren fácil, generan confianza y llevan al usuario a cerrar.',
    stat: { value: 'Construcción', label: 'ya trabajamos con empresas como Grupo Estrella' },
    intro:
      'Trabajamos con marketplaces de propiedades, plataformas de administración de rentas, crowdfunding inmobiliario y desarrolladores que digitalizan su venta. Cada proyecto parte de quién busca, quién publica y quién administra.',
    items: [
      {
        title: 'Búsqueda que encuentra',
        description:
          'Mapas, filtros y fichas de propiedad diseñados para que el usuario encuentre opciones reales para él en pocos minutos.',
        bullets: ['Búsqueda con mapa y filtros', 'Fichas con fotos y planos', 'Favoritos y alertas'],
      },
      {
        title: 'Del interés al cierre',
        description:
          'Solicitud de visita, documentos, contratos y pagos en un flujo claro, para que el trato avance sin perderse en correos.',
        bullets: ['Agenda de visitas', 'Carga de documentos', 'Firma y pagos en línea'],
      },
      {
        title: 'Paneles para propietarios y administradores',
        description:
          'Rentas, pagos, mantenimiento e inquilinos organizados para administrar muchas propiedades sin hojas de cálculo.',
        bullets: ['Panel de propiedades', 'Cobranza y reportes', 'Solicitudes de mantenimiento'],
      },
      {
        title: 'Sistema de diseño y marca',
        description:
          'Un sistema de componentes para crecer la plataforma en web y móvil, con una marca que transmita solidez.',
        bullets: ['Biblioteca de componentes', 'Web y app móvil', 'Identidad de marca según el alcance'],
      },
    ],
    research:
      'Entendemos a cada lado de tu plataforma —quien busca, quien publica y quien administra— con datos de uso, entrevistas y revisión de la experiencia actual.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una plataforma proptech?',
    costScope:
      'cuántos tipos de usuario y flujos, si incluye marketplace, administración o inversión y si es web, app o ambas',
    faqs: [
      {
        question: '¿Diseñan para ambos lados del marketplace?',
        answer:
          'Sí. Diseñamos la experiencia de quien busca y de quien publica o administra, porque una plataforma solo funciona si los dos lados la usan.',
      },
      {
        question: '¿Pueden diseñar también el sitio de un desarrollo?',
        answer:
          'Sí. Además de plataformas, diseñamos sitios y marcas para desarrollos inmobiliarios en preventa.',
      },
    ],
    remoteWho: 'plataformas inmobiliarias',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en construcción, finanzas y software. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu plataforma.',
    howTo: 'la experiencia y la interfaz de una plataforma proptech',
    lead: {
      heading: 'Hablemos de tu plataforma inmobiliaria',
      description:
        'Cuéntanos qué hace tu plataforma y quién la usa. Te contactamos para entenderla y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Administramos cientos de departamentos en renta y queremos una plataforma para propietarios e inquilinos.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Proptech and Real Estate Platforms',
    seoDescription:
      'UX/UI design for proptech: property marketplaces, rental management, and real estate investment platforms that are easy to use.',
    keywords:
      'UX/UI design for proptech, real estate platform design, real estate UX, property marketplace design, rental management design',
    subtitle: 'UX/UI design for proptech and real estate platforms',
    accent: 'Proptech',
    target: 'proptech and real estate platforms',
    hero: 'Renting, buying, or investing in property are big decisions, and the platform has to convey the same security as signing with a notary. We design real estate products that are easy to browse, build trust, and lead users to close.',
    stat: { value: 'Construction', label: 'we already work with companies like Grupo Estrella' },
    intro:
      'We work with property marketplaces, rental management platforms, real estate crowdfunding, and developers digitizing their sales. Every project starts from who searches, who lists, and who manages.',
    items: [
      {
        title: 'Search that finds',
        description:
          'Maps, filters, and property pages designed so users find options that actually fit them in a few minutes.',
        bullets: ['Map and filter search', 'Listings with photos and plans', 'Favorites and alerts'],
      },
      {
        title: 'From interest to closing',
        description:
          'Viewing requests, documents, contracts, and payments in one clear flow, so the deal moves forward without getting lost in email.',
        bullets: ['Viewing scheduling', 'Document upload', 'Online signing and payments'],
      },
      {
        title: 'Dashboards for owners and managers',
        description:
          'Rent, payments, maintenance, and tenants organized to manage many properties without spreadsheets.',
        bullets: ['Property dashboard', 'Collections and reports', 'Maintenance requests'],
      },
      {
        title: 'Design system and brand',
        description:
          'A component system to grow the platform on web and mobile, with a brand that conveys solidity.',
        bullets: ['Component library', 'Web and mobile app', 'Brand identity based on project scope'],
      },
    ],
    research:
      'We learn about each side of your platform —who searches, who lists, and who manages— through usage data, interviews, and a review of the current experience.',
    costQuestion: 'How much does UX/UI design for a proptech platform cost?',
    costScope:
      'how many user types and flows, whether it includes a marketplace, management, or investing, and whether it is web, mobile, or both',
    faqs: [
      {
        question: 'Do you design for both sides of the marketplace?',
        answer:
          'Yes. We design the experience for those who search and those who list or manage, because a platform only works if both sides use it.',
      },
      {
        question: 'Can you also design the website for a development?',
        answer:
          'Yes. Besides platforms, we design websites and brands for pre-sale real estate developments.',
      },
    ],
    remoteWho: 'real estate platforms',
    proofText:
      'Real identity, product, and website work in construction, finance, and software. The same care we put into every brand is what we would bring to your platform.',
    howTo: 'the experience and interface of a proptech platform',
    lead: {
      heading: 'Let’s talk about your real estate platform',
      description:
        'Tell us what your platform does and who uses it. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We manage hundreds of rental apartments and want a platform for owners and tenants.',
    },
  },
});
