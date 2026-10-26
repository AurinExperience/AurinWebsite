import { defineSector } from './build';

/**
 * Autopartes y proveedores automotrices — "página web proveedor automotriz".
 * Ángulo: dos negocios distintos en el mismo sector: proveedores Tier 1/2 que
 * venden a armadoras (capacidades, IATF, PPAP) y fabricantes o distribuidores
 * de refacciones de repuesto (catálogo por aplicación vehicular).
 */
export const autopartes = defineSector({
  id: 'autopartes',
  publishAt: '2026-11-03T00:00:00-06:00',
  slug: { es: 'para-autopartes', en: 'for-auto-parts-suppliers' },
  name: { es: 'Autopartes y proveedores automotrices', en: 'Auto parts suppliers' },
  proof: ['grupoEstrella', 'mexicoPacific', 'ancient'],
  es: {
    seoTitle: 'Diseño Web para Autopartes y Proveedores Automotrices',
    seoDescription:
      'Sitios para proveedores automotrices y autopartes: capacidades e IATF para armadoras, o catálogo por aplicación vehicular para repuesto.',
    keywords:
      'diseño web autopartes, página web proveedor automotriz, catálogo de autopartes en línea, sitio web Tier 1 Tier 2, página web refacciones automotrices',
    subtitle: 'Diseño web para autopartes y proveedores automotrices',
    accent: 'Autopartes',
    target: 'proveedores automotrices y de autopartes',
    hero: 'México es uno de los mayores fabricantes de autopartes del mundo, y los compradores de las armadoras y de los distribuidores comparan proveedores en línea antes de pedir una cotización. Unos buscan capacidades y certificaciones; otros, la pieza correcta para un modelo y año. Diseñamos sitios que responden a tu comprador, sea una armadora o un taller.',
    intro:
      'Diseñamos páginas web para proveedores Tier 1 y Tier 2, fabricantes de componentes, y fabricantes y distribuidores de refacciones para el mercado de repuesto.',
    items: [
      {
        title: 'Capacidades para armadoras',
        description:
          'Procesos, líneas de producción, capacidad instalada e ingeniería presentados para un comprador de compras automotrices.',
        bullets: ['Procesos y líneas', 'Ingeniería y validación', 'Plantas y capacidad'],
      },
      {
        title: 'Calidad y certificaciones',
        description:
          'IATF 16949, ISO 14001 y procesos de calidad presentados con evidencia, que son requisito para entrar a una lista de proveedores.',
        bullets: ['Certificaciones vigentes', 'Sistema de calidad', 'Documentación descargable'],
      },
      {
        title: 'Catálogo por aplicación',
        description:
          'Para refacciones: fichas técnicas y equivalencias por número de parte y, a la medida, búsqueda por marca, modelo y año.',
        bullets: ['Número de parte y equivalencias', 'Fichas técnicas'],
        custom: ['Búsqueda por vehículo'],
      },
      {
        title: 'Distribuidores y cotización',
        description:
          'Mapa de distribuidores, registro de nuevos y formularios de cotización con planos o listas de partes.',
        bullets: ['Registro de distribuidores', 'Cotización con archivos'],
        custom: ['Localizador de distribuidores'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu planta o tu catálogo y quién es tu comprador.',
    pages: 'capacidades, calidad, catálogo, aplicaciones, distribuidores, la empresa y cotización',
    costQuestion: '¿Cuánto cuesta el sitio web de un proveedor de autopartes?',
    costScope:
      'si es para armadoras, para repuesto o ambos, cuántas partes en el catálogo y si incluye búsqueda por vehículo',
    faqs: [
      {
        question: '¿Pueden cargar un catálogo de miles de partes?',
        answer:
          'Sí, como desarrollo a la medida: diseñamos el catálogo para importarse desde tu base de datos o tu hoja de cálculo, con búsqueda por vehículo y número de parte, y lo actualizas sin rehacer el sitio.',
      },
      {
        question: '¿El sitio sirve para entrar como proveedor de una armadora?',
        answer:
          'Ayuda a que el comprador encuentre tus capacidades y certificaciones y te tome en cuenta. El alta como proveedor sigue su proceso formal, pero llegar con un sitio serio pesa.',
      },
      {
        question: '¿Lo hacen en inglés?',
        answer:
          'Sí. La mayoría de los compradores automotrices trabajan en inglés, así que lo redactamos desde el principio en los dos idiomas.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'proveedores automotrices',
    proofText:
      'Proyectos reales de sitios web e identidad en construcción, energía y desarrollo de software. Es el estándar con el que trabajaríamos tu empresa.',
    howTo: 'el sitio web de un proveedor de autopartes',
    lead: {
      heading: 'Hablemos de tu empresa',
      description:
        'Cuéntanos qué fabricas o distribuyes y a quién le vendes. Te contactaremos para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos proveedor Tier 2 de estampados en Coahuila y queremos llegar a más armadoras.',
    },
  },
  en: {
    seoTitle: 'Web Design for Auto Parts Suppliers and Manufacturers',
    seoDescription:
      'Websites for automotive suppliers and auto parts manufacturers: capabilities and IATF for OEMs, or a catalog by vehicle application for the aftermarket.',
    keywords:
      'auto parts website design, automotive supplier website, auto parts catalog website, Tier 1 supplier web design, aftermarket parts website',
    subtitle: 'Web design for auto parts suppliers',
    accent: 'Auto Parts Suppliers',
    target: 'auto parts suppliers',
    hero: 'Mexico is one of the world’s largest auto parts producers, and buyers at OEMs and distributors compare suppliers online before requesting a quote. Some look for capabilities and certifications; others, the right part for a make and year. We design websites that answer your buyer, whether it is an automaker or a repair shop.',
    intro:
      'We design websites for Tier 1 and Tier 2 suppliers, component manufacturers, and aftermarket parts manufacturers and distributors.',
    items: [
      {
        title: 'Capabilities for OEMs',
        description:
          'Processes, production lines, installed capacity, and engineering presented for an automotive purchasing buyer.',
        bullets: ['Processes and lines', 'Engineering and validation', 'Plants and capacity'],
      },
      {
        title: 'Quality and certifications',
        description:
          'IATF 16949, ISO 14001, and quality processes presented with evidence, required to get on a supplier list.',
        bullets: ['Current certifications', 'Quality system', 'Downloadable documentation'],
      },
      {
        title: 'Catalog by application',
        description:
          'For aftermarket: spec sheets and cross-references by part number and, as a custom build, search by make, model, and year.',
        bullets: ['Part numbers and cross-references', 'Spec sheets'],
        custom: ['Vehicle lookup'],
      },
      {
        title: 'Distributors and quotes',
        description:
          'Distributor map, new distributor sign-up, and quote forms that accept drawings or part lists.',
        bullets: ['Distributor sign-up', 'Quotes with files'],
        custom: ['Distributor locator'],
      },
    ],
    diagnosis: 'A call to learn about your plant or catalog and who your buyer is.',
    pages: 'capabilities, quality, catalog, applications, distributors, company, and quotes',
    costQuestion: 'How much does an auto parts supplier website cost?',
    costScope:
      'whether it targets OEMs, the aftermarket, or both, how many parts in the catalog, and whether it includes vehicle lookup',
    faqs: [
      {
        question: 'Can you load a catalog with thousands of parts?',
        answer:
          'Yes, as custom development: we design the catalog to import from your database or spreadsheet, with vehicle and part number search, and you update it without rebuilding the site.',
      },
      {
        question: 'Will the site help us become an OEM supplier?',
        answer:
          'It helps buyers find your capabilities and certifications and consider you. Supplier onboarding follows its formal process, but arriving with a serious website matters.',
      },
      {
        question: 'Do you build it in English?',
        answer:
          'Yes. Most automotive buyers work in English, so we write it in both languages from the start.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'automotive suppliers',
    proofText:
      'Real website and identity work in construction, energy, and software development. It is the standard we would bring to your company.',
    howTo: 'an auto parts supplier website',
    lead: {
      heading: 'Let’s talk about your company',
      description:
        'Tell us what you manufacture or distribute and who you sell to. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a Tier 2 stamping supplier in Coahuila and want to reach more OEMs.',
    },
  },
});
