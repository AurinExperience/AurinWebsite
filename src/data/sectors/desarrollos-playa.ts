import { defineSector } from './build';

/**
 * Desarrollos residenciales de playa — "sitio web desarrollo en Los Cabos".
 * Ángulo: el comprador es de EE. UU. o Canadá y compra a distancia; necesita
 * entender cómo compra un extranjero en México (fideicomiso), el programa de
 * renta y el estilo de vida, en inglés. Distinto de `desarrolladoras`
 * (preventa urbana para compradores nacionales).
 */
export const desarrollosPlaya = defineSector({
  id: 'desarrollos-playa',
  publishAt: '2026-10-27T00:00:00-06:00',
  slug: { es: 'para-desarrollos-de-playa', en: 'for-beach-developments-in-mexico' },
  name: { es: 'Desarrollos de playa', en: 'Beach developments in Mexico' },
  proof: ['elRollo', 'grupoEstrella', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Desarrollos Residenciales de Playa',
    seoDescription:
      'Sitios para desarrollos en Los Cabos, Riviera Maya y Puerto Vallarta: estilo de vida, residencias, programa de renta y cómo compra un extranjero.',
    keywords:
      'diseño web desarrollo de playa, sitio web condominios Los Cabos, página web desarrollo Riviera Maya, sitio web residencias Puerto Vallarta, marketing inmobiliario compradores extranjeros',
    subtitle: 'Diseño web para desarrollos de playa',
    accent: 'Desarrollos de Playa',
    target: 'desarrollos de playa',
    hero: 'Tu comprador está en Texas, California u Ontario y va a decidir una segunda casa a miles de kilómetros. Antes de volar quiere sentir la vista, entender cómo compra un extranjero en México y saber cuánto puede rentarla cuando no está. Diseñamos sitios que venden el estilo de vida y resuelven las dudas de un comprador internacional, en su idioma.',
    intro:
      'Diseñamos para desarrollos residenciales, condominios y residencias de marca en Los Cabos, Riviera Maya, Puerto Vallarta, Nuevo Vallarta, Mazatlán y otros destinos de playa.',
    items: [
      {
        title: 'Estilo de vida',
        description:
          'Video y fotografía que transmiten la playa, el clima y la vida en el desarrollo antes de que el comprador viaje.',
        bullets: ['Video y fotografía', 'Amenidades y servicios', 'El destino y sus alrededores'],
      },
      {
        title: 'Residencias y disponibilidad',
        description:
          'Plantas, vistas, terminados y disponibilidad por unidad, en pies y metros cuadrados, con precios en dólares si los publicas.',
        bullets: ['Plantas y vistas por unidad', 'Pies y metros cuadrados', 'Precios en dólares'],
      },
      {
        title: 'Cómo compra un extranjero',
        description:
          'Fideicomiso, proceso de compra, financiamiento y costos de cierre explicados con claridad, que es la duda que más frena al comprador extranjero.',
        bullets: ['Guía de compra para extranjeros', 'Programa de renta', 'Preguntas frecuentes del comprador'],
      },
      {
        title: 'Agenda a distancia',
        description:
          'Videollamadas con tu equipo de ventas, solicitud de visita y formularios que llegan con el país y la residencia que interesa.',
        bullets: ['Videollamadas de venta', 'Solicitud de visita', 'Leads por país e idioma'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu desarrollo, el destino y de dónde vienen tus compradores.',
    pages: 'el desarrollo, residencias, amenidades, el destino, cómo comprar, programa de renta y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un desarrollo de playa?',
    costScope:
      'cuántas residencias y tipologías, si incluye un panel para actualizar la disponibilidad y si también necesitas la marca del desarrollo',
    faqs: [
      {
        question: '¿El sitio debe estar primero en inglés?',
        answer:
          'Si tus compradores son de Estados Unidos y Canadá, sí. Redactamos en inglés desde el principio, con medidas en pies cuadrados y precios en dólares, y dejamos la versión en español para compradores nacionales.',
      },
      {
        question: '¿Pueden explicar el fideicomiso sin que suene complicado?',
        answer:
          'Sí. Con la información de tu equipo legal y notarial redactamos una guía clara de cómo compra un extranjero, revisada por ellos antes de publicarse.',
      },
      {
        question: '¿Pueden mostrar el programa de renta?',
        answer:
          'Sí. Presentamos cómo funciona la administración y la renta vacacional del desarrollo, sin prometer rendimientos que tu equipo no pueda respaldar.',
      },
    ],
    aiSubject: 'mi desarrollo',
    remoteWho: 'desarrollos de playa',
    proofText:
      'Proyectos reales de sitios web e identidad en turismo, construcción y diseño de marca. Es el estándar con el que trabajaríamos tu desarrollo.',
    howTo: 'el sitio web de un desarrollo de playa',
    lead: {
      heading: 'Hablemos de tu desarrollo',
      description:
        'Cuéntanos en qué destino está, cuántas residencias tiene y de dónde vienen tus compradores. Te contactaremos para entenderlo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Desarrollamos 40 condominios frente al mar en Los Cabos para compradores de Estados Unidos.',
    },
  },
  en: {
    seoTitle: 'Website Design for Beach Developments in Mexico',
    seoDescription:
      'Websites for developments in Los Cabos, Riviera Maya, and Puerto Vallarta: lifestyle, residences, rental program, and how foreigners buy.',
    keywords:
      'Los Cabos condo development website, Riviera Maya real estate development website, Puerto Vallarta development website, Mexico beach property marketing, oceanfront development web design',
    subtitle: 'Web design for beach developments in Mexico',
    accent: 'Beach Developments',
    target: 'beach developments in Mexico',
    hero: 'Your buyer is in Texas, California, or Ontario, deciding on a second home thousands of miles away. Before flying down, they want to feel the view, understand how a foreigner buys property in Mexico, and know how much they could earn renting it while they are away. We design websites that sell the lifestyle and answer an international buyer’s questions in their language.',
    intro:
      'We design for residential developments, condominiums, and branded residences in Los Cabos, Riviera Maya, Puerto Vallarta, Nuevo Vallarta, Mazatlán, and other beach destinations.',
    items: [
      {
        title: 'Lifestyle',
        description:
          'Video and photography that convey the beach, the weather, and life in the development before buyers travel.',
        bullets: ['Video and photography', 'Amenities and services', 'The destination and surroundings'],
      },
      {
        title: 'Residences and availability',
        description:
          'Floor plans, views, finishes, and availability by unit, in square feet and meters, with USD pricing if you publish it.',
        bullets: ['Plans and views by unit', 'Square feet and meters', 'USD pricing'],
      },
      {
        title: 'How foreigners buy',
        description:
          'Bank trust (fideicomiso), purchase process, financing, and closing costs explained clearly, since it is the question that most often stalls foreign buyers.',
        bullets: ['Foreign buyer guide', 'Rental program', 'Buyer FAQs'],
      },
      {
        title: 'Remote sales',
        description:
          'Video calls with your sales team, site visit requests, and forms that arrive with the buyer’s country and the residence they want.',
        bullets: ['Sales video calls', 'Site visit requests', 'Leads by country and language'],
      },
    ],
    diagnosis: 'A call to learn about your development, the destination, and where your buyers come from.',
    pages: 'the development, residences, amenities, destination, how to buy, rental program, and contact',
    costQuestion: 'How much does a beach development website cost?',
    costScope:
      'how many residences and floor plans, whether it includes a panel to update availability, and whether you also need the development’s brand',
    faqs: [
      {
        question: 'Should the site be English-first?',
        answer:
          'If your buyers come from the US and Canada, yes. We write in English from the start, with square feet and USD pricing, and keep a Spanish version for Mexican buyers.',
      },
      {
        question: 'Can you explain the fideicomiso without making it sound complicated?',
        answer:
          'Yes. With input from your legal and notary team we write a clear guide on how foreigners buy, reviewed by them before it goes live.',
      },
      {
        question: 'Can you present the rental program?',
        answer:
          'Yes. We explain how the development’s management and vacation rental program work, without promising returns your team cannot back up.',
      },
    ],
    aiSubject: 'my development',
    remoteWho: 'beach developments',
    proofText:
      'Real website and identity work in tourism, construction, and brand design. It is the standard we would bring to your development.',
    howTo: 'a beach development website',
    lead: {
      heading: 'Let’s talk about your development',
      description:
        'Tell us which destination it is in, how many residences it has, and where your buyers come from. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are building 40 oceanfront condos in Los Cabos for US buyers.',
    },
  },
});
