import { defineSector } from './build';

/**
 * Distribuidores de maquinaria y equipo industrial — "página web distribuidor
 * de maquinaria". Ángulo: catálogos grandes con varias marcas y modelos;
 * el cliente compara especificaciones, pide cotización, refacciones y
 * servicio técnico. Venta, renta y posventa en el mismo sitio.
 */
export const maquinaria = defineSector({
  id: 'maquinaria',
  publishAt: '2026-10-30T00:00:00-06:00',
  slug: { es: 'para-distribuidores-de-maquinaria', en: 'for-machinery-distributors' },
  name: { es: 'Distribuidores de maquinaria', en: 'Machinery distributors' },
  proof: ['grupoEstrella', 'mexicoPacific', 'ancient'],
  es: {
    seoTitle: 'Diseño Web para Distribuidores de Maquinaria',
    seoDescription:
      'Sitios para distribuidores de maquinaria: catálogo por marca y modelo con especificaciones, cotización, renta, refacciones y servicio técnico.',
    keywords:
      'diseño web distribuidor de maquinaria, página web maquinaria industrial, catálogo en línea de equipo industrial, sitio web renta de maquinaria, página web refacciones industriales',
    subtitle: 'Diseño web para distribuidores de maquinaria',
    accent: 'Distribuidores de Maquinaria',
    target: 'distribuidores de maquinaria',
    hero: 'Quien compra una máquina compara modelos, capacidades y tiempos de entrega con tres distribuidores antes de pedir cotización. Si tu catálogo es un PDF de 80 páginas o no tiene las especificaciones, la llamada va a quien sí las tiene. Diseñamos sitios con catálogos organizados como lo piensa tu cliente y que llevan cada visita a una cotización, una renta o una orden de servicio.',
    intro:
      'Diseñamos páginas web para distribuidores de maquinaria de construcción, equipo agrícola, montacargas, maquinaria para manufactura, plantas de energía y equipo de procesamiento.',
    items: [
      {
        title: 'Catálogo con especificaciones',
        description:
          'Marcas, líneas y modelos con fichas técnicas y fotos; los filtros por capacidad, potencia o aplicación y el panel para que tu equipo lo actualice se desarrollan a la medida.',
        bullets: ['Fichas técnicas descargables'],
        custom: ['Filtros por especificación', 'Comparador'],
      },
      {
        title: 'Venta, renta y seminuevos',
        description:
          'Cada equipo indica si está en venta, en renta o es seminuevo, con su propia ruta de cotización.',
        bullets: ['Cotización por modelo', 'Renta por día, semana o mes', 'Inventario de seminuevos'],
      },
      {
        title: 'Refacciones y servicio',
        description:
          'Solicitud de refacciones por número de parte y órdenes de servicio técnico, que suelen ser la venta más constante.',
        bullets: ['Solicitud de servicio', 'Pólizas de mantenimiento'],
        custom: ['Búsqueda por número de parte'],
      },
      {
        title: 'Sucursales y cobertura',
        description:
          'Sucursales, cobertura y vendedores por zona, para que cada solicitud llegue a quien atiende esa región.',
        bullets: ['Mapa de sucursales', 'Vendedor por zona', 'Contacto por WhatsApp'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus marcas, tu catálogo y cómo cotizas hoy.',
    pages: 'catálogo, marcas, renta, seminuevos, refacciones, servicio, sucursales y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un distribuidor de maquinaria?',
    costScope:
      'cuántas marcas y modelos, si incluye renta, seminuevos y refacciones y si se conecta con tu inventario',
    faqs: [
      {
        question: '¿Podemos cargar cientos de modelos sin rehacer el sitio?',
        answer:
          'Sí. Diseñamos el catálogo para crecer y, a la medida, sumamos un panel para que tu equipo agregue modelos con sus especificaciones o los importamos desde tu inventario si lo tienes en una hoja o un sistema.',
      },
      {
        question: '¿Pueden usar el material de las marcas que distribuimos?',
        answer:
          'Sí, respetando los lineamientos de cada marca. Organizamos su material dentro de tu sitio para que se vea como un solo catálogo y no como una colección de PDFs.',
      },
      {
        question: '¿El sitio puede recibir órdenes de servicio?',
        answer:
          'Sí. Diseñamos un formulario de servicio que pide equipo, número de serie y falla, y llega directo a tu área técnica.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'distribuidores de maquinaria',
    proofText:
      'Proyectos reales de sitios web e identidad en construcción, energía y desarrollo de software. Es el estándar con el que trabajaríamos tu catálogo.',
    howTo: 'el sitio web de un distribuidor de maquinaria',
    lead: {
      heading: 'Hablemos de tu catálogo',
      description:
        'Cuéntanos qué marcas distribuyes y cuántos modelos manejas. Te contactaremos para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Distribuimos maquinaria de construcción de tres marcas en el norte del país.',
    },
  },
  en: {
    seoTitle: 'Web Design for Machinery and Equipment Distributors',
    seoDescription:
      'Websites for machinery distributors: catalog by brand and model with specs, quotes, rentals, parts, and service, organized to be found quickly.',
    keywords:
      'machinery dealer website design, equipment distributor website, industrial equipment catalog website, equipment rental website design, heavy equipment dealer web design',
    subtitle: 'Web design for machinery distributors',
    accent: 'Machinery Distributors',
    target: 'machinery distributors',
    hero: 'A buyer compares models, capacities, and lead times with three distributors before requesting a quote. If your catalog is an 80-page PDF or lacks specs, the call goes to whoever has them. We design websites with catalogs organized the way your customer thinks and turn every visit into a quote, a rental, or a service order.',
    intro:
      'We design websites for distributors of construction equipment, agricultural machinery, forklifts, manufacturing machinery, power generation, and processing equipment.',
    items: [
      {
        title: 'Catalog with specs',
        description:
          'Brands, lines, and models with spec sheets and photos; filters by capacity, power, or application and a panel for your team to update it are custom builds.',
        bullets: ['Downloadable spec sheets'],
        custom: ['Spec filters', 'Comparison tool'],
      },
      {
        title: 'Sales, rentals, and used',
        description:
          'Each unit shows whether it is for sale, for rent, or used, with its own quote path.',
        bullets: ['Quotes by model', 'Daily, weekly, or monthly rental', 'Used inventory'],
      },
      {
        title: 'Parts and service',
        description:
          'Parts requests by part number and service orders, which are usually the steadiest revenue.',
        bullets: ['Service requests', 'Maintenance plans'],
        custom: ['Part number search'],
      },
      {
        title: 'Branches and coverage',
        description:
          'Branches, coverage, and sales reps by territory, so every request reaches whoever serves that region.',
        bullets: ['Branch map', 'Rep by territory', 'WhatsApp contact'],
      },
    ],
    diagnosis: 'A call to learn about your brands, your catalog, and how you quote today.',
    pages: 'catalog, brands, rentals, used equipment, parts, service, branches, and contact',
    costQuestion: 'How much does a machinery distributor website cost?',
    costScope:
      'how many brands and models, whether it includes rentals, used equipment, and parts, and whether it connects to your inventory',
    faqs: [
      {
        question: 'Can we load hundreds of models without rebuilding the site?',
        answer:
          'Yes. We design the catalog to grow and, as a custom build, add a panel for your team to add models with specs, or we import them from your inventory spreadsheet or system.',
      },
      {
        question: 'Can you use material from the brands we distribute?',
        answer:
          'Yes, following each brand’s guidelines. We organize their material inside your site so it feels like one catalog, not a collection of PDFs.',
      },
      {
        question: 'Can the site take service orders?',
        answer:
          'Yes. We design a service form that asks for the unit, serial number, and issue, and goes straight to your technical team.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'machinery distributors',
    proofText:
      'Real website and identity work in construction, energy, and software development. It is the standard we would bring to your catalog.',
    howTo: 'a machinery distributor website',
    lead: {
      heading: 'Let’s talk about your catalog',
      description:
        'Tell us which brands you distribute and how many models you carry. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We distribute construction equipment from three brands in northern Mexico.',
    },
  },
});
