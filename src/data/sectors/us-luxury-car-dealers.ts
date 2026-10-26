import { defineSector } from './build';

/**
 * Autos de lujo y exóticos (EE. UU.) — "luxury car dealer website design".
 * Ángulo: concesionarios independientes de autos exóticos, clásicos y de
 * colección, y rentas de exóticos; el comprador decide por la presentación
 * de cada unidad, la reputación y la confianza para comprar a distancia.
 * Distinto de `concesionarias` (agencias de marca en México).
 */
export const usLuxuryCarDealers = defineSector({
  id: 'us-luxury-car-dealers',
  country: 'US',
  publishAt: '2026-10-31T00:00:00-06:00',
  slug: { es: 'para-autos-de-lujo', en: 'for-luxury-car-dealers' },
  name: { es: 'Autos de lujo y exóticos', en: 'Luxury and exotic car dealers' },
  proof: ['ideograma', 'fortrade', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web para Dealers de Autos de Lujo en EE. UU.',
    seoDescription:
      'Sitios para dealers de autos de lujo, exóticos y de colección en Estados Unidos: inventario como galería, compra a distancia y consignación.',
    keywords:
      'diseño web concesionario autos de lujo, sitio web autos exóticos, página web autos clásicos de colección, diseño web renta de autos exóticos, marketing dealer de lujo',
    subtitle: 'Diseño web para autos de lujo y exóticos',
    accent: 'Autos de Lujo',
    target: 'concesionarios de autos de lujo',
    hero: 'Quien compra un Ferrari, un Porsche de colección o un clásico restaurado suele hacerlo a distancia, y decide por cómo se presenta el auto. Revisa cada foto, el historial y la reputación del dealer antes de mandar un depósito a otro estado. Si tu sitio parece un portal de anuncios, el auto pierde valor. Diseñamos sitios que presentan cada unidad como pieza de colección.',
    intro:
      'Diseñamos páginas web para concesionarios independientes de autos exóticos y de lujo, dealers de clásicos y autos de colección, y empresas de renta de exóticos en Miami, Los Ángeles, Scottsdale, Dallas y Nueva York.',
    items: [
      {
        title: 'Inventario como galería',
        description:
          'Cada auto con fotografía de estudio, video, especificaciones, historial y opciones de fábrica, presentado como pieza única.',
        bullets: ['Fichas con galería y video', 'Historial y documentación'],
        custom: ['Conexión con tu inventario'],
      },
      {
        title: 'Compra a distancia',
        description:
          'Proceso de compra fuera del estado, inspección, financiamiento y envío explicados, para que el depósito se sienta seguro.',
        bullets: ['Compra fuera del estado', 'Financiamiento y trade-in', 'Envío cerrado'],
      },
      {
        title: 'Consignación y búsqueda',
        description:
          'Formularios para vender o consignar un auto y para pedir que busques un modelo específico, que traen inventario y clientes.',
        bullets: ['Consignación', 'Búsqueda de modelos', 'Valuación'],
      },
      {
        title: 'Reputación y experiencia',
        description:
          'Reseñas, entregas, eventos y la historia del dealer, que es lo que separa a un vendedor confiable de un anuncio.',
        bullets: ['Reseñas y entregas', 'Eventos y comunidad', 'Showroom y visitas'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu inventario, tus clientes y cómo vendes hoy.',
    pages: 'inventario, vendidos, consignación, financiamiento, envío, el dealer y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un concesionario de autos de lujo?',
    costScope:
      'cuántas unidades en inventario, si se conecta con tu sistema de inventario, si incluye consignación y renta y si también necesitas marca',
    faqs: [
      {
        question: '¿Se puede conectar con nuestro sistema de inventario?',
        answer:
          'En la mayoría de los casos sí, como desarrollo a la medida. Revisamos tu sistema y diseñamos las fichas para que cada auto se publique con su galería sin capturarlo dos veces.',
      },
      {
        question: '¿Conviene mostrar los autos vendidos?',
        answer:
          'Sí. Un archivo de autos vendidos es prueba de trayectoria y atrae a coleccionistas que buscan un modelo similar o quieren consignar el suyo.',
      },
      {
        question: '¿También sirve para renta de autos exóticos?',
        answer:
          'Sí. Diseñamos la flota con requisitos y depósitos, y desarrollamos a la medida la disponibilidad y las reservas en línea, con la misma presentación premium.',
      },
    ],
    aiSubject: 'mi concesionario',
    remoteWho: 'concesionarios de autos de lujo',
    proofText:
      'Proyectos reales de sitios web e identidad en diseño de marca, finanzas internacionales y recreación. Es el estándar con el que trabajaríamos tu concesionario.',
    howTo: 'el sitio web de un concesionario de autos de lujo',
    lead: {
      heading: 'Hablemos de tu inventario',
      description:
        'Cuéntanos qué tipo de autos vendes y cuántas unidades manejas. Te contactaremos para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Vendemos autos exóticos y de colección en Miami, con 40 unidades en inventario.',
    },
  },
  en: {
    seoTitle: 'Luxury and Exotic Car Dealer Website Design',
    seoDescription:
      'Websites for independent luxury, exotic, and collector car dealers in the US: inventory presented like a gallery, remote purchases, and consignment.',
    keywords:
      'luxury car dealer website design, exotic car dealer website, classic car dealer web design, exotic car rental website, collector car website',
    subtitle: 'Web design for luxury and exotic car dealers',
    accent: 'Luxury Car Dealers',
    target: 'luxury car dealers',
    hero: 'People who buy a Ferrari, a collectible Porsche, or a restored classic often do it remotely, and they decide by how the car is presented. They study every photo, the history, and the dealer’s reputation before wiring a deposit to another state. If your website looks like a classifieds portal, the car loses value. We design websites that present every car as a collector’s piece.',
    intro:
      'We design websites for independent exotic and luxury car dealers, classic and collector car dealers, and exotic car rental companies in Miami, Los Angeles, Scottsdale, Dallas, and New York.',
    items: [
      {
        title: 'Inventory as a gallery',
        description:
          'Each car with studio photography, video, specs, history, and factory options, presented as a one-of-a-kind piece.',
        bullets: ['Vehicle pages with gallery and video', 'History and documentation'],
        custom: ['Inventory system integration'],
      },
      {
        title: 'Remote purchase',
        description:
          'Out-of-state purchase, inspection, financing, and shipping explained, so the deposit feels safe.',
        bullets: ['Out-of-state buying', 'Financing and trade-in', 'Enclosed shipping'],
      },
      {
        title: 'Consignment and sourcing',
        description:
          'Forms to sell or consign a car and to request a specific model search, which bring both inventory and clients.',
        bullets: ['Consignment', 'Car sourcing', 'Appraisals'],
      },
      {
        title: 'Reputation and experience',
        description:
          'Reviews, deliveries, events, and the dealer’s story, which is what separates a trusted seller from a listing.',
        bullets: ['Reviews and deliveries', 'Events and community', 'Showroom visits'],
      },
    ],
    diagnosis: 'A video call to learn about your inventory, your clients, and how you sell today.',
    pages: 'inventory, sold, consignment, financing, shipping, the dealer, and contact',
    costQuestion: 'How much does a luxury car dealer website cost?',
    costScope:
      'how many cars in inventory, whether it connects to your inventory system, whether it includes consignment and rentals, and whether you also need a brand',
    faqs: [
      {
        question: 'Can it connect to our inventory system?',
        answer:
          'In most cases, yes, as custom development. We review your system and design the vehicle pages so each car is published with its gallery without entering it twice.',
      },
      {
        question: 'Should we show sold cars?',
        answer:
          'Yes. A sold archive proves your track record and attracts collectors looking for a similar model or wanting to consign theirs.',
      },
      {
        question: 'Does it work for exotic car rentals too?',
        answer:
          'Yes. We design the fleet with requirements and deposits, and custom-build availability and online booking, with the same premium presentation.',
      },
    ],
    aiSubject: 'my dealership',
    remoteWho: 'luxury car dealers',
    proofText:
      'Real website and identity work in brand design, international finance, and recreation. It is the standard we would bring to your dealership.',
    howTo: 'a luxury car dealer website',
    lead: {
      heading: 'Let’s talk about your inventory',
      description:
        'Tell us what kind of cars you sell and how many units you carry. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We sell exotic and collector cars in Miami, with 40 units in inventory.',
    },
  },
});
