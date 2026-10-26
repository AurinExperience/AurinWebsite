import { defineSector } from './build';

/**
 * Desarrolladoras inmobiliarias — "página web para desarrollo inmobiliario".
 * Ángulo: cada desarrollo en preventa necesita su propio sitio (avance de obra,
 * tipologías, disponibilidad), y la desarrolladora un sitio corporativo que dé
 * confianza a compradores e inversionistas. Distinto de `inmobiliarias`
 * (corredores que venden inventario de terceros).
 */
export const desarrolladoras = defineSector({
  id: 'desarrolladoras',
  publishAt: '2026-10-26T00:00:00-06:00',
  slug: { es: 'para-desarrolladoras-inmobiliarias', en: 'for-real-estate-developers' },
  name: { es: 'Desarrolladoras inmobiliarias', en: 'Real estate developers' },
  proof: ['grupoEstrella', 'ideograma', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web para Desarrolladoras Inmobiliarias',
    seoDescription:
      'Sitios para desarrolladoras y para cada desarrollo en preventa: tipologías, disponibilidad, avance de obra y citas, en español e inglés.',
    keywords:
      'diseño web para desarrolladoras inmobiliarias, página web desarrollo inmobiliario, sitio web preventa departamentos, landing desarrollo inmobiliario, diseño web proyecto residencial',
    subtitle: 'Diseño web para desarrolladoras inmobiliarias',
    accent: 'Desarrolladoras',
    target: 'desarrolladoras inmobiliarias',
    hero: 'Un departamento en preventa se compra antes de que exista, así que el sitio es lo más cercano que el comprador tiene a recorrerlo. Si las tipologías no se entienden o la disponibilidad está desactualizada, la cita no llega. Diseñamos el sitio corporativo de tu desarrolladora y un sitio propio para cada desarrollo, pensados para vender desde la preventa.',
    intro:
      'Diseñamos páginas web para desarrolladoras residenciales, de usos mixtos y de segunda vivienda. Cada proyecto se diseña con su propia marca, sin plantillas.',
    items: [
      {
        title: 'Un sitio por desarrollo',
        description:
          'Cada proyecto con su marca, su ubicación, sus amenidades y sus tipologías, listo para recibir el tráfico de tus campañas.',
        bullets: ['Marca y sitio por proyecto', 'Amenidades y ubicación', 'Landings para campañas'],
      },
      {
        title: 'Tipologías y disponibilidad',
        description:
          'Plantas, metros, vistas y precios por unidad o por tipología. La disponibilidad puede actualizarla tu equipo con un panel a la medida.',
        bullets: ['Plantas y renders', 'Disponibilidad por unidad'],
        custom: ['Cotizador'],
      },
      {
        title: 'Confianza para invertir',
        description:
          'Sitio corporativo con trayectoria, desarrollos entregados y avance de obra, que responde lo que pregunta un comprador o un inversionista antes de apartar.',
        bullets: ['Desarrollos entregados', 'Avance de obra', 'Sección para inversionistas'],
      },
      {
        title: 'Citas y seguimiento',
        description:
          'Formularios y WhatsApp que llegan a tu equipo de ventas con el desarrollo y la tipología que le interesa al cliente.',
        bullets: ['Solicitud de visita al showroom', 'Leads por desarrollo'],
        custom: ['Conexión con tu CRM'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu desarrolladora, tus proyectos y cómo vendes hoy.',
    pages: 'desarrollos, tipologías, amenidades, ubicación, avance de obra, nosotros y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un desarrollo inmobiliario?',
    costScope:
      'si es el sitio corporativo, un desarrollo o varios, cuántas tipologías y si incluye un panel para actualizar la disponibilidad',
    faqs: [
      {
        question: '¿Conviene un sitio por desarrollo o todo en el corporativo?',
        answer:
          'Para vender, casi siempre conviene un sitio o micrositio por desarrollo: tiene su propia marca, recibe el tráfico de las campañas y no distrae con otros proyectos. El corporativo da la confianza de quién está detrás.',
      },
      {
        question: '¿Pueden diseñar también la marca del desarrollo?',
        answer:
          'Sí. Diseñamos el nombre visual, el logo y la identidad del desarrollo junto con el sitio, para que se vean igual en la valla de obra, el showroom y la pantalla.',
      },
      {
        question: '¿Mi equipo puede actualizar la disponibilidad sin depender de ustedes?',
        answer:
          'Sí, con un panel a la medida donde tu equipo marca unidades como disponibles, apartadas o vendidas, cambia precios y sube fotos del avance de obra sin tocar código.',
      },
    ],
    aiSubject: 'mi desarrollo',
    remoteWho: 'desarrolladoras',
    proofText:
      'Proyectos reales de sitios web e identidad en construcción, turismo y diseño de marca. Es el estándar con el que trabajaríamos tus desarrollos.',
    howTo: 'el sitio web de un desarrollo inmobiliario',
    lead: {
      heading: 'Hablemos de tu desarrollo',
      description:
        'Cuéntanos qué desarrollo vas a lanzar y en qué etapa está. Te contactaremos para entender el proyecto y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Lanzamos la preventa de una torre de 80 departamentos y necesitamos marca y sitio.',
    },
  },
  en: {
    seoTitle: 'Web Design for Real Estate Developers and Developments',
    seoDescription:
      'Websites for developers and every pre-construction project: floor plans, availability, construction progress, and showings, in English and Spanish.',
    keywords:
      'web design for real estate developers, real estate development website, pre-construction condo website, new development website, residential project website design',
    subtitle: 'Web design for real estate developers',
    accent: 'Developers',
    target: 'real estate developers',
    hero: 'A pre-construction unit is bought before it exists, so the website is the closest a buyer gets to walking through it. If floor plans are confusing or availability is out of date, the showing never gets booked. We design your company website and a dedicated site for each development, built to sell from pre-launch onward.',
    intro:
      'We design websites for residential, mixed-use, and second-home developers. Every project gets its own brand, never a template.',
    items: [
      {
        title: 'A site for every development',
        description:
          'Each project with its own brand, location, amenities, and floor plans, ready for the traffic from your campaigns.',
        bullets: ['Brand and site per project', 'Amenities and location', 'Campaign landing pages'],
      },
      {
        title: 'Floor plans and availability',
        description:
          'Plans, square footage, views, and pricing by unit or floor plan. Availability can be updated by your team with a custom panel.',
        bullets: ['Plans and renderings', 'Unit availability'],
        custom: ['Price calculator'],
      },
      {
        title: 'Confidence to invest',
        description:
          'A company site with your track record, delivered projects, and construction progress that answers what buyers and investors ask before putting down a deposit.',
        bullets: ['Delivered projects', 'Construction progress', 'Investor section'],
      },
      {
        title: 'Showings and follow-up',
        description:
          'Forms and WhatsApp that reach your sales team with the development and floor plan each buyer is interested in.',
        bullets: ['Sales center visit requests', 'Leads by development'],
        custom: ['CRM integration'],
      },
    ],
    diagnosis: 'A call to learn about your company, your projects, and how you sell today.',
    pages: 'developments, floor plans, amenities, location, construction progress, about, and contact',
    costQuestion: 'How much does a real estate development website cost?',
    costScope:
      'whether it is the company site, one development, or several, how many floor plans, and whether it includes a panel to update availability',
    faqs: [
      {
        question: 'Should each development have its own site?',
        answer:
          'For sales, almost always: a dedicated site or microsite has its own brand, receives campaign traffic, and does not distract with other projects. The company site provides the trust of who is behind it.',
      },
      {
        question: 'Can you also design the development’s brand?',
        answer:
          'Yes. We design the logo and identity of the development together with the site, so it looks the same on the construction hoarding, in the sales center, and on screen.',
      },
      {
        question: 'Can my team update availability without relying on you?',
        answer:
          'Yes, with a custom panel where your team marks units as available, reserved, or sold, changes prices, and uploads construction progress photos without touching code.',
      },
    ],
    aiSubject: 'my development',
    remoteWho: 'real estate developers',
    proofText:
      'Real website and identity work in construction, tourism, and brand design. It is the standard we would bring to your developments.',
    howTo: 'a real estate development website',
    lead: {
      heading: 'Let’s talk about your development',
      description:
        'Tell us which development you are launching and what stage it is in. We will reach out to understand the project and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are launching pre-sales for an 80-unit tower and need a brand and a website.',
    },
  },
});
