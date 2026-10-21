import { defineSector } from './build';

/**
 * Bienes raíces de lujo (EE. UU.) — "luxury real estate website design".
 * Ángulo: agentes top, brokerages boutique y desarrollos de lujo en Miami,
 * Manhattan, Los Ángeles, Palm Beach y Aspen; la propiedad se vende por cómo se
 * presenta y el agente por su marca personal. Distinta de "for-real-estate"
 * (inmobiliarias en México).
 */
export const usLuxuryRealEstate = defineSector({
  id: 'us-luxury-real-estate',
  country: 'US',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'para-bienes-raices-de-lujo', en: 'for-luxury-real-estate' },
  name: { es: 'Bienes raíces de lujo', en: 'Luxury real estate' },
  proof: ['grupoEstrella', 'ideograma', 'fortrade'],
  es: {
    seoTitle: 'Diseño Web para Bienes Raíces de Lujo en Estados Unidos',
    seoDescription:
      'Sitios web para agentes de lujo, brokerages boutique y desarrollos residenciales en Miami, Nueva York, Los Ángeles y Palm Beach: propiedades que se presentan como merecen.',
    keywords:
      'diseño web bienes raíces de lujo, sitio web agente inmobiliario de lujo, página web desarrollo residencial de lujo, diseño web real estate Miami',
    subtitle: 'Diseño web para bienes raíces de lujo',
    accent: 'Bienes Raíces de Lujo',
    target: 'bienes raíces de lujo',
    hero: 'Un comprador de una propiedad de varios millones decide en segundos si el agente está a su nivel. Si tu sitio se ve como el de cualquier franquicia, pierdes la cita antes de tenerla. Diseñamos sitios que presentan cada propiedad como una pieza única y a ti como el agente que la merece.',
    intro:
      'Trabajamos con agentes y equipos de lujo, brokerages boutique y desarrolladores residenciales en mercados como Miami, Manhattan, Los Ángeles, Palm Beach y Aspen.',
    items: [
      {
        title: 'Propiedades presentadas como piezas únicas',
        description:
          'Fichas con fotografía y video a pantalla completa, planos, amenidades y la historia de la propiedad, rápidas aun con imágenes pesadas.',
        bullets: ['Galerías y video a pantalla completa', 'Planos y amenidades', 'Integración con tus listados'],
      },
      {
        title: 'Tu marca personal',
        description:
          'En lujo, el cliente compra al agente antes que a la casa. Tu trayectoria, tus ventas y tu estilo, contados con elegancia.',
        bullets: ['Biografía y trayectoria', 'Ventas destacadas', 'Prensa y reconocimientos'],
      },
      {
        title: 'Sitios para desarrollos',
        description:
          'Un sitio propio para cada desarrollo residencial: concepto, residencias, disponibilidad y registro de interesados.',
        bullets: ['Concepto y renders', 'Residencias y disponibilidad', 'Registro de compradores'],
      },
      {
        title: 'Contacto discreto',
        description:
          'Formularios de cita privada y contacto directo, pensados para compradores que no quieren llenar diez campos.',
        bullets: ['Solicitud de visita privada', 'Contacto directo con el agente', 'Seguimiento en tu CRM'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu mercado, tus propiedades y a tu comprador.',
    pages: 'propiedades, desarrollos, vecindarios, trayectoria, prensa y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un agente o brokerage de lujo?',
    costScope:
      'cuántas propiedades y desarrollos, si se conecta a tus listados, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Pueden conectar el sitio con mis listados?',
        answer:
          'Sí, según el proveedor de listados que uses. Lo revisamos en la llamada y lo incluimos en la cotización.',
      },
      {
        question: '¿Hacen sitios para un solo desarrollo?',
        answer:
          'Sí. Un desarrollo de lujo suele necesitar su propio sitio, con su concepto y su marca, además del sitio del brokerage.',
      },
    ],
    aiSubject: 'mi brokerage',
    remoteWho: 'agentes y brokerages de lujo',
    proofText:
      'Proyectos reales de identidad y sitios web en construcción, diseño de marca y finanzas internacionales. Es el estándar con el que trabajaríamos tu marca.',
    howTo: 'el sitio web de un agente o brokerage de lujo',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué mercado atiendes y qué propiedades vendes. Te contactamos para entender tu marca y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un equipo de lujo en Miami Beach y queremos un sitio a la altura de nuestras propiedades.',
    },
  },
  en: {
    seoTitle: 'Luxury Real Estate Website Design',
    seoDescription:
      'Websites for luxury agents, boutique brokerages, and residential developments in Miami, New York, Los Angeles, and Palm Beach: properties presented the way they deserve.',
    keywords:
      'luxury real estate website design, luxury realtor website, luxury real estate web design, real estate development website, luxury real estate website Miami',
    subtitle: 'Web design for luxury real estate',
    accent: 'Luxury Real Estate',
    target: 'luxury real estate',
    hero: 'A buyer for a multimillion-dollar property decides in seconds whether the agent is at their level. If your site looks like any franchise template, you lose the showing before you get it. We design websites that present every property as a one-of-a-kind piece and you as the agent who deserves it.',
    intro:
      'We work with luxury agents and teams, boutique brokerages, and residential developers in markets like Miami, Manhattan, Los Angeles, Palm Beach, and Aspen.',
    items: [
      {
        title: 'Properties presented as one-of-a-kind pieces',
        description:
          'Listings with full-screen photography and video, floor plans, amenities, and the property’s story, fast even with heavy imagery.',
        bullets: ['Full-screen galleries and video', 'Floor plans and amenities', 'Integration with your listings'],
      },
      {
        title: 'Your personal brand',
        description:
          'In luxury, clients buy the agent before the home. Your track record, your sales, and your style, told with elegance.',
        bullets: ['Bio and track record', 'Notable sales', 'Press and recognition'],
      },
      {
        title: 'Development websites',
        description:
          'A dedicated site for each residential development: concept, residences, availability, and buyer registration.',
        bullets: ['Concept and renderings', 'Residences and availability', 'Buyer registration'],
      },
      {
        title: 'Discreet contact',
        description:
          'Private showing requests and direct contact, designed for buyers who will not fill out ten fields.',
        bullets: ['Private showing requests', 'Direct contact with the agent', 'Follow-up in your CRM'],
      },
    ],
    diagnosis: 'A video call to learn about your market, your properties, and your buyer.',
    pages: 'properties, developments, neighborhoods, track record, press, and contact',
    costQuestion: 'How much does a luxury real estate website cost?',
    costScope:
      'how many properties and developments, whether it connects to your listings, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Can you connect the site to my listings?',
        answer:
          'Yes, depending on the listings provider you use. We review it on the call and include it in the quote.',
      },
      {
        question: 'Do you build sites for a single development?',
        answer:
          'Yes. A luxury development usually needs its own site, with its own concept and brand, in addition to the brokerage site.',
      },
    ],
    aiSubject: 'my brokerage',
    remoteWho: 'luxury agents and brokerages',
    proofText:
      'Real identity and website work in construction, brand design, and international finance. It is the standard we would bring to your brand.',
    howTo: 'a luxury real estate website',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us which market you serve and what properties you sell. We will reach out to understand your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a luxury team in Miami Beach and want a site that matches our listings.',
    },
  },
});
