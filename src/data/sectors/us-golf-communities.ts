import { defineSector } from './build';

/**
 * Comunidades de golf y resorts (EE. UU.) — "golf community website design".
 * Ángulo: desarrollos residenciales con campo de golf y resorts de golf que
 * venden un estilo de vida a compradores de alto patrimonio (muchos jubilados
 * o con segunda casa): residencias, membresías y el campo. Distinto de
 * `us-private-clubs` (clubes de membresía sin componente inmobiliario).
 */
export const usGolfCommunities = defineSector({
  id: 'us-golf-communities',
  country: 'US',
  publishAt: '2026-11-04T00:00:00-06:00',
  slug: { es: 'para-comunidades-de-golf', en: 'for-golf-communities' },
  name: { es: 'Comunidades de golf y resorts', en: 'Golf communities and resorts' },
  proof: ['elRollo', 'grupoEstrella', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Comunidades de Golf y Resorts en EE. UU.',
    seoDescription:
      'Sitios para comunidades de golf y resorts en Estados Unidos: el campo, residencias y lotes, membresías, amenidades y estilo de vida.',
    keywords:
      'diseño web comunidad de golf, sitio web resort de golf, página web desarrollo residencial con golf, marketing comunidad de golf, diseño web club de golf residencial',
    subtitle: 'Diseño web para comunidades de golf y resorts',
    accent: 'Comunidades de Golf',
    target: 'comunidades de golf y resorts',
    hero: 'Quien compra en una comunidad de golf no compra solo una casa: compra sus mañanas en el campo, las cenas en el club y la comunidad con la que va a convivir. Antes de visitarla, recorre tu sitio para imaginar esa vida y comparar residencias y membresías. Diseñamos sitios que transmiten el estilo de vida de tu comunidad y llevan a la visita.',
    intro:
      'Diseñamos páginas web para comunidades residenciales con campo de golf, resorts de golf y desarrollos de segunda casa en Scottsdale, Palm Springs, Naples, Hilton Head, Pinehurst, Austin y otros destinos.',
    items: [
      {
        title: 'El campo',
        description:
          'Recorrido hoyo por hoyo con fotografía y video aéreo, el diseñador del campo y las instalaciones de práctica.',
        bullets: ['Recorrido por hoyos', 'Video aéreo', 'Instalaciones de práctica'],
      },
      {
        title: 'Residencias y lotes',
        description:
          'Casas, villas y lotes disponibles con plantas, vistas al campo y precios si los publicas, conectados con tu equipo de ventas.',
        bullets: ['Inventario de residencias', 'Plano maestro', 'Solicitud de visita'],
      },
      {
        title: 'Membresías y club',
        description:
          'Niveles de membresía, privilegios, clubhouse, restaurantes, spa y actividades, explicados con claridad.',
        bullets: ['Niveles de membresía', 'Clubhouse y restaurantes', 'Spa y actividades'],
      },
      {
        title: 'Estilo de vida',
        description:
          'Eventos, comunidad, ubicación y vida diaria contados para que el comprador se imagine viviendo ahí.',
        bullets: ['Calendario de eventos', 'Vida en la comunidad', 'Ubicación y alrededores'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu comunidad, tu inventario y a qué compradores quieres atraer.',
    pages: 'el campo, residencias, plano maestro, membresías, amenidades, estilo de vida y visitas',
    costQuestion: '¿Cuánto cuesta el sitio web de una comunidad de golf?',
    costScope:
      'cuántas residencias y lotes, si incluye recorrido del campo, si hay sección privada para socios y si también necesitas marca',
    faqs: [
      {
        question: '¿Pueden separar la venta inmobiliaria de las membresías?',
        answer:
          'Sí. Diseñamos rutas distintas para quien quiere comprar una residencia y para quien solo busca membresía, con formularios que llegan al equipo correcto.',
      },
      {
        question: '¿Pueden incluir un área privada para socios?',
        answer:
          'Sí, como desarrollo a la medida: diseñamos y desarrollamos una sección para residentes y socios con reservas de tee times, eventos y noticias, o la conectamos con el sistema de tu club.',
      },
      {
        question: '¿Pueden mostrar el campo hoyo por hoyo?',
        answer:
          'Sí. Con tu material de video y fotografía diseñamos un recorrido por cada hoyo que suele ser de las secciones más visitadas.',
      },
    ],
    aiSubject: 'mi comunidad',
    remoteWho: 'comunidades de golf',
    proofText:
      'Proyectos reales de sitios web e identidad en turismo y recreación, construcción y diseño de marca. Es el estándar con el que trabajaríamos tu comunidad.',
    howTo: 'el sitio web de una comunidad de golf',
    lead: {
      heading: 'Hablemos de tu comunidad',
      description:
        'Cuéntanos dónde está tu comunidad y qué ofreces a compradores y socios. Te contactaremos para entenderla y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una comunidad de golf en Scottsdale con 300 lotes y un club privado.',
    },
  },
  en: {
    seoTitle: 'Golf Community and Resort Website Design',
    seoDescription:
      'Websites for golf communities and resorts in the US: the course, homes and homesites, memberships, amenities, and the lifestyle buyers want.',
    keywords:
      'golf community website design, golf resort website, golf course community marketing, master-planned golf community website, golf real estate website',
    subtitle: 'Web design for golf communities and resorts',
    accent: 'Golf Communities',
    target: 'golf communities and resorts',
    hero: 'Buyers in a golf community are not just buying a home: they are buying mornings on the course, dinners at the club, and the neighbors they will share it with. Before visiting, they explore your website to picture that life and compare homes and memberships. We design websites that convey your community’s lifestyle and lead to a visit.',
    intro:
      'We design websites for residential golf communities, golf resorts, and second-home developments in Scottsdale, Palm Springs, Naples, Hilton Head, Pinehurst, Austin, and other destinations.',
    items: [
      {
        title: 'The course',
        description:
          'A hole-by-hole tour with photography and aerial video, the course architect, and practice facilities.',
        bullets: ['Hole-by-hole tour', 'Aerial video', 'Practice facilities'],
      },
      {
        title: 'Homes and homesites',
        description:
          'Available homes, villas, and homesites with floor plans, course views, and pricing if you publish it, connected to your sales team.',
        bullets: ['Home inventory', 'Master plan', 'Tour requests'],
      },
      {
        title: 'Memberships and club',
        description:
          'Membership tiers, privileges, clubhouse, dining, spa, and activities explained clearly.',
        bullets: ['Membership tiers', 'Clubhouse and dining', 'Spa and activities'],
      },
      {
        title: 'Lifestyle',
        description:
          'Events, community, location, and everyday life told so buyers can picture living there.',
        bullets: ['Event calendar', 'Community life', 'Location and surroundings'],
      },
    ],
    diagnosis: 'A video call to learn about your community, your inventory, and the buyers you want to attract.',
    pages: 'the course, homes, master plan, memberships, amenities, lifestyle, and tours',
    costQuestion: 'How much does a golf community website cost?',
    costScope:
      'how many homes and homesites, whether it includes a course tour, whether there is a private member section, and whether you also need a brand',
    faqs: [
      {
        question: 'Can you separate real estate sales from memberships?',
        answer:
          'Yes. We design separate paths for buyers looking for a home and for those seeking only a membership, with forms that reach the right team.',
      },
      {
        question: 'Can you include a private member area?',
        answer:
          'Yes, as custom development: we design and build a section for residents and members with tee time booking, events, and news, or connect it to your club’s system.',
      },
      {
        question: 'Can you show the course hole by hole?',
        answer:
          'Yes. With your video and photography we design a tour of every hole, which is usually one of the most visited sections.',
      },
    ],
    aiSubject: 'my community',
    remoteWho: 'golf communities',
    proofText:
      'Real website and identity work in tourism and recreation, construction, and brand design. It is the standard we would bring to your community.',
    howTo: 'a golf community website',
    lead: {
      heading: 'Let’s talk about your community',
      description:
        'Tell us where your community is and what you offer buyers and members. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a golf community in Scottsdale with 300 homesites and a private club.',
    },
  },
});
