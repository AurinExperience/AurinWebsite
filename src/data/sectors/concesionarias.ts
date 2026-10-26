import { defineSector } from './build';

/**
 * Concesionarias y agencias de autos — "diseño web para concesionarias" /
 * "página web para agencia de autos". Ángulo: inventario, prueba de manejo y
 * financiamiento como los tres pasos que el comprador hace en línea antes de
 * visitar. Sin cliente automotriz en el catálogo: datos genéricos.
 */
export const concesionarias = defineSector({
  id: 'concesionarias',
  publishAt: '2026-10-19T00:00:00-06:00',
  slug: { es: 'para-concesionarias', en: 'for-car-dealerships' },
  name: { es: 'Concesionarias de autos', en: 'Car dealerships' },
  proof: ['mexicoPacific', 'grupoEstrella', 'monetix'],
  es: {
    seoTitle: 'Diseño Web para Concesionarias y Agencias de Autos',
    seoDescription:
      'Páginas web para concesionarias y agencias de autos: inventario fácil de recorrer, pruebas de manejo en línea y presencia en Google y en la IA.',
    keywords:
      'diseño web para concesionarias, página web para agencia de autos, sitio web seminuevos, inventario de autos web, marketing automotriz',
    subtitle: 'Diseño web para concesionarias y agencias de autos',
    accent: 'Concesionarias',
    target: 'concesionarias',
    hero: 'El comprador llega a tu piso de ventas con el auto ya elegido: lo comparó en línea, revisó versiones, precios y financiamiento, y cada vez más le preguntó a una IA. Diseñamos sitios que hacen lucir tu inventario y convierten esa búsqueda en una prueba de manejo agendada.',
    intro:
      'Diseñamos para concesionarias, agencias de seminuevos y grupos automotrices. Cada página web para agencia de autos se diseña alrededor de tu inventario y de cómo prefieres recibir a tus prospectos.',
    items: [
      {
        title: 'Inventario que se antoja',
        description:
          'Cada auto con su ficha: fotos grandes, versión, equipamiento y precio. El comprador compara sin salir de tu sitio.',
        bullets: ['Fichas de auto con galería', 'Nuevos y seminuevos'],
        custom: ['Filtros por marca, modelo y precio'],
      },
      {
        title: 'Prueba de manejo y cotización',
        description:
          'Solicitar una prueba de manejo, una cotización o un financiamiento en un par de clics, y el prospecto te llega directo.',
        bullets: ['Solicitud de prueba de manejo', 'Solicitud de cotización y de crédito', 'Contacto directo por WhatsApp'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Tus compradores buscan modelos y agencias en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan tu inventario y te puedan recomendar.',
        bullets: ['Datos estructurados de vehículos', 'Páginas por modelo y sucursal', 'Contenido que la IA puede citar'],
      },
      {
        title: 'Administrador de inventario',
        description:
          'Un administrador a la medida para que tu equipo suba, edite y dé de baja autos sin depender de nadie, y el sitio siempre muestre lo que tienes en piso.',
        bullets: ['Servicio y refacciones'],
        custom: ['Alta y baja de vehículos', 'Promociones y destacados'],
      },
    ],
    diagnosis: 'Una llamada para entender tu inventario, tus sucursales y cómo llegan hoy tus prospectos.',
    pages: 'inventario, modelos, financiamiento, servicio, sucursales y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de una concesionaria?',
    costScope:
      'cuántos autos y sucursales, si necesitas administrador de inventario y si también necesitas marca',
    faqs: [
      {
        question: 'Ya publicamos en portales de autos, ¿necesitamos sitio propio?',
        answer:
          'Los portales dan visibilidad, pero ahí tu auto compite junto a cientos de anuncios. En tu sitio el comprador solo ve tu inventario y te contacta directo. Lo ideal es usar los dos.',
      },
      {
        question: '¿Podemos actualizar el inventario nosotros?',
        answer:
          'Sí, con un administrador a la medida para que tu equipo suba y quite autos, cambie precios y destaque promociones sin depender de nosotros.',
      },
    ],
    aiSubject: 'mi concesionaria',
    remoteWho: 'concesionarias',
    proofText:
      'Proyectos reales de identidad y sitios web para empresas de energía, construcción y finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu concesionaria.',
    howTo: 'el sitio web de una concesionaria',
    lead: {
      heading: 'Hablemos de tu concesionaria',
      description:
        'Cuéntanos qué vendes, cuántas sucursales tienes y cómo llegan hoy tus prospectos. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una agencia de seminuevos con dos sucursales y queremos más pruebas de manejo agendadas.',
    },
  },
  en: {
    seoTitle: 'Web Design for Car Dealerships',
    seoDescription:
      'Websites for car dealerships: inventory that is easy to browse, online test drive booking, and visibility on Google and AI search tools.',
    keywords:
      'web design for car dealerships, car dealership website, used car website, vehicle inventory website, automotive marketing',
    subtitle: 'Web design for car dealerships',
    accent: 'Car Dealerships',
    target: 'car dealerships',
    hero: 'Buyers walk onto your lot with the car already chosen: they compared it online, checked trims, prices, and financing, and more and more often they asked an AI. We design websites that make your inventory shine and turn that search into a booked test drive.',
    intro:
      'We design for dealerships, used car lots, and automotive groups. Every car dealership website is designed around your inventory and how you prefer to receive leads.',
    items: [
      {
        title: 'Inventory people want',
        description:
          'Every car with its own page: large photos, trim, features, and price. Buyers compare without leaving your site.',
        bullets: ['Vehicle pages with gallery', 'New and used'],
        custom: ['Filters by make, model, and price'],
      },
      {
        title: 'Test drives and quotes',
        description:
          'Requesting a test drive, a quote, or financing in a couple of clicks, and the lead reaches you directly.',
        bullets: ['Test drive requests', 'Quote and financing requests', 'Direct contact over WhatsApp'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Buyers search for models and dealers on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand your inventory and can recommend you.',
        bullets: ['Vehicle structured data', 'Pages by model and location', 'Content AI tools can cite'],
      },
      {
        title: 'Inventory admin',
        description:
          'A custom admin so your team adds, edits, and removes cars without depending on anyone, and the site always shows what is on the lot.',
        bullets: ['Service and parts'],
        custom: ['Add and remove vehicles', 'Promotions and highlights'],
      },
    ],
    diagnosis: 'We learn about your inventory, your locations, and how leads find you today.',
    pages: 'inventory, models, financing, service, locations, and the privacy notice',
    costQuestion: 'How much does a car dealership website cost?',
    costScope:
      'how many cars and locations, whether you need an inventory admin, and whether you also need a brand',
    faqs: [
      {
        question: 'We already list on car portals. Do we need our own site?',
        answer:
          'Portals give visibility, but there your car competes with hundreds of listings. On your site buyers only see your inventory and contact you directly. Ideally you use both.',
      },
      {
        question: 'Can we update the inventory ourselves?',
        answer:
          'Yes, with a custom admin so your team can add and remove cars, change prices, and highlight promotions without depending on us.',
      },
    ],
    aiSubject: 'my dealership',
    remoteWho: 'dealerships',
    proofText:
      'Real identity and website work for energy, construction, and finance companies. The same care we put into every brand is what we would bring to your dealership.',
    howTo: 'a car dealership website',
    lead: {
      heading: 'Let’s talk about your dealership',
      description:
        'Tell us what you sell, how many locations you have, and how leads find you today. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a used car dealer with two locations and want more booked test drives.',
    },
  },
});
