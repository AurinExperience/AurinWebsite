import { defineSector } from './build';

/**
 * Aviación privada (EE. UU.) — "private jet charter website design" /
 * "aviation website design". Ángulo: chárter, gestión de aeronaves, FBOs y
 * membresías de jet; clientes de muy alto patrimonio que esperan inmediatez y
 * discreción. Cotización rápida como acción principal.
 */
export const usPrivateAviation = defineSector({
  id: 'us-private-aviation',
  country: 'US',
  publishAt: '2026-10-25T00:00:00-06:00',
  slug: { es: 'para-aviacion-privada', en: 'for-private-aviation' },
  name: { es: 'Aviación privada', en: 'Private aviation' },
  proof: ['fortrade', 'elRollo', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Aviación Privada y Vuelos Chárter',
    seoDescription:
      'Sitios web para empresas de aviación privada: vuelos chárter, gestión de aeronaves, FBOs y membresías de jet, con cotización rápida y la discreción que esperan tus clientes.',
    keywords:
      'diseño web aviación privada, sitio web vuelos chárter, página web jet privado, diseño web gestión de aeronaves, sitio web FBO',
    subtitle: 'Diseño web para aviación privada',
    accent: 'Aviación Privada',
    target: 'empresas de aviación privada',
    hero: 'Tu cliente está acostumbrado a que todo pase en minutos, y espera lo mismo al pedir una cotización. Si tu sitio es lento o se ve anticuado, piensa que tu servicio también lo es. Diseñamos sitios que transmiten seguridad, exclusividad e inmediatez desde el primer vistazo.',
    intro:
      'Trabajamos con operadores de vuelos chárter, empresas de gestión de aeronaves, FBOs, programas de membresía de jet y brokers de aeronaves en Estados Unidos.',
    items: [
      {
        title: 'Cotización en segundos',
        description:
          'Un formulario de cotización rápido y claro desde cualquier pantalla, con ruta, fechas y pasajeros, conectado a tu equipo.',
        bullets: ['Cotizador de vuelos', 'Solicitud desde el celular', 'Seguimiento inmediato'],
      },
      {
        title: 'Flota y seguridad',
        description:
          'Aeronaves, certificaciones y estándares de seguridad presentados con la claridad que tranquiliza a un cliente exigente.',
        bullets: ['Flota con fichas', 'Certificaciones de seguridad', 'Tripulación y servicio'],
      },
      {
        title: 'Membresías y gestión',
        description:
          'Programas de membresía, tarjetas de jet y gestión de aeronaves explicados para quien está comparando opciones.',
        bullets: ['Membresías y tarjetas', 'Gestión de aeronaves', 'Comparativas claras'],
      },
      {
        title: 'Marca de aviación',
        description:
          'Identidad que se ve igual de exclusiva en el sitio, la librea, la cabina y los materiales para clientes.',
        bullets: ['Identidad y manual', 'Aplicaciones en aeronaves según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu operación, tu flota y a tus clientes.',
    pages: 'chárter, flota, membresías, gestión de aeronaves, seguridad, nosotros y cotización',
    costQuestion: '¿Cuánto cuesta el sitio web de una empresa de aviación privada?',
    costScope:
      'cuántas aeronaves y servicios, si incluye cotizador conectado a tu sistema, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿El cotizador puede conectarse con nuestro sistema?',
        answer:
          'En muchos casos sí. Revisamos el software que usas en la llamada y lo incluimos en la cotización.',
      },
      {
        question: '¿Cómo se maneja la información de los clientes?',
        answer:
          'Pedimos solo los datos necesarios para cotizar y los enviamos directo a tu equipo, con la discreción que esperan tus clientes.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'empresas de aviación privada',
    proofText:
      'Proyectos reales de identidad y sitios web en finanzas internacionales, turismo y diseño de marca. Es el estándar con el que trabajaríamos tu empresa.',
    howTo: 'el sitio web de una empresa de aviación privada',
    lead: {
      heading: 'Hablemos de tu operación',
      description:
        'Cuéntanos qué servicios ofreces y a quién atiendes. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un operador chárter en Florida y queremos que las cotizaciones lleguen por el sitio.',
    },
  },
  en: {
    seoTitle: 'Private Aviation & Jet Charter Website Design',
    seoDescription:
      'Websites for private aviation companies: jet charter, aircraft management, FBOs, and jet memberships, with fast quoting and the discretion your clients expect.',
    keywords:
      'private aviation website design, jet charter website design, private jet website, aircraft management website, FBO website design',
    subtitle: 'Web design for private aviation',
    accent: 'Private Aviation',
    target: 'private aviation companies',
    hero: 'Your clients are used to things happening in minutes, and they expect the same when requesting a quote. If your site is slow or dated, they assume your service is too. We design websites that convey safety, exclusivity, and immediacy at first glance.',
    intro:
      'We work with charter operators, aircraft management companies, FBOs, jet membership programs, and aircraft brokers in the US.',
    items: [
      {
        title: 'Quotes in seconds',
        description:
          'A fast, clear quote form on any screen, with route, dates, and passengers, connected to your team.',
        bullets: ['Flight quote request', 'Mobile-first inquiry', 'Immediate follow-up'],
      },
      {
        title: 'Fleet and safety',
        description:
          'Aircraft, certifications, and safety standards presented with the clarity that reassures a demanding client.',
        bullets: ['Fleet pages', 'Safety certifications', 'Crew and service'],
      },
      {
        title: 'Memberships and management',
        description:
          'Membership programs, jet cards, and aircraft management explained for clients comparing options.',
        bullets: ['Memberships and jet cards', 'Aircraft management', 'Clear comparisons'],
      },
      {
        title: 'An aviation brand',
        description:
          'An identity that looks equally exclusive on the site, the livery, the cabin, and client materials.',
        bullets: ['Identity and guidelines', 'Aircraft applications based on scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your operation, your fleet, and your clients.',
    pages: 'charter, fleet, memberships, aircraft management, safety, about, and quote',
    costQuestion: 'How much does a private aviation website cost?',
    costScope:
      'how many aircraft and services, whether it includes a quote tool connected to your system, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Can the quote tool connect to our system?',
        answer: 'In many cases, yes. We review the software you use on the call and include it in the quote.',
      },
      {
        question: 'How is client information handled?',
        answer:
          'We ask only for the data needed to quote and send it straight to your team, with the discretion your clients expect.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'private aviation companies',
    proofText:
      'Real identity and website work in international finance, tourism, and brand design. It is the standard we would bring to your company.',
    howTo: 'a private aviation website',
    lead: {
      heading: 'Let’s talk about your operation',
      description:
        'Tell us which services you offer and who you serve. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a charter operator in Florida and want quote requests to come through the site.',
    },
  },
});
