import { defineSector } from './build';

/**
 * Grupos restauranteros — "página web para grupo restaurantero".
 * Ángulo: cada concepto es una marca con su propio sitio (menú, reservas,
 * eventos privados), y el grupo necesita un sitio corporativo que los reúna
 * para inversionistas, talento y franquicias.
 */
export const gruposRestauranteros = defineSector({
  id: 'grupos-restauranteros',
  publishAt: '2026-10-28T00:00:00-06:00',
  slug: { es: 'para-grupos-restauranteros', en: 'for-restaurant-groups' },
  name: { es: 'Grupos restauranteros', en: 'Restaurant groups' },
  proof: ['fruitAcademy', 'elRollo', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web y Branding para Grupos Restauranteros',
    seoDescription:
      'Sitios para grupos restauranteros y cada concepto: menús que tu equipo actualiza, reservas, eventos privados y un sitio que reúne tus marcas.',
    keywords:
      'diseño web para restaurantes, página web grupo restaurantero, sitio web restaurante con reservas, branding restaurante, diseño web concepto gastronómico',
    subtitle: 'Diseño web y branding para grupos restauranteros',
    accent: 'Grupos Restauranteros',
    target: 'grupos restauranteros',
    hero: 'Cada concepto que abres es una marca nueva con su propio público, su menú y su ambiente. Cuando alguien busca dónde cenar, compara fotos, menú y disponibilidad en segundos, y un sitio lento o con un PDF borroso le quita la mesa a tu restaurante. Diseñamos el sitio de cada concepto y el del grupo, con la identidad de cada uno y una base que reutilizas en cada apertura.',
    intro:
      'Diseñamos páginas web para grupos restauranteros, chefs con varios conceptos y marcas de restaurantes con varias sucursales.',
    items: [
      {
        title: 'Un sitio por concepto',
        description:
          'Cada restaurante con su identidad, su fotografía y su tono, sin que todos parezcan el mismo sitio con otro logo.',
        bullets: ['Identidad por concepto', 'Fotografía y ambiente', 'Base reutilizable para nuevas aperturas'],
      },
      {
        title: 'Menús vivos',
        description:
          'Menús en texto, no en PDF, que Google puede leer y que, con un panel a la medida, tu equipo actualiza al cambiar platillos o precios.',
        bullets: ['Alérgenos y opciones', 'Menú en dos idiomas'],
        custom: ['Menú editable'],
      },
      {
        title: 'Reservas y eventos privados',
        description:
          'Botón a tu plataforma de reservas o, a la medida, integración con ella, y una sección para eventos privados y grupos, que suele ser la venta más grande.',
        bullets: ['Eventos privados y grupos'],
        custom: ['Conexión con tu plataforma de reservas', 'Tarjetas de regalo'],
      },
      {
        title: 'El grupo detrás',
        description:
          'Un sitio corporativo que presenta a tus conceptos, tu historia y tu chef, y atiende a inversionistas, talento y franquicias.',
        bullets: ['Portafolio de conceptos', 'Bolsa de trabajo', 'Franquicias e inversionistas'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus conceptos, tus sucursales y cómo reciben reservas hoy.',
    pages: 'conceptos, menús, sucursales, reservas, eventos privados, el grupo y bolsa de trabajo',
    costQuestion: '¿Cuánto cuesta el sitio web de un restaurante o grupo restaurantero?',
    costScope:
      'cuántos conceptos y sucursales, si se conecta con tu plataforma de reservas y si también necesitas la marca de un concepto nuevo',
    faqs: [
      {
        question: '¿Conviene un sitio por restaurante o uno solo del grupo?',
        answer:
          'Si los conceptos son distintos, conviene uno por concepto con su propia identidad, y un sitio del grupo que los reúna. Diseñamos una base común para que abrir un concepto nuevo no signifique empezar de cero.',
      },
      {
        question: '¿Por qué no subir el menú en PDF?',
        answer:
          'Porque en celular se lee mal, tarda en cargar y Google no lo entiende igual. Un menú en texto se actualiza más fácil y ayuda a que te encuentren por platillo.',
      },
      {
        question: '¿Diseñan la marca de un restaurante nuevo?',
        answer:
          'Sí. Diseñamos nombre visual, logo, menú impreso y aplicaciones junto con el sitio, para que el concepto abra con una identidad completa.',
      },
    ],
    aiSubject: 'mi restaurante',
    remoteWho: 'grupos restauranteros',
    proofText:
      'Proyectos reales de sitios web e identidad en alimentos, turismo y recreación y diseño de marca. Es el estándar con el que trabajaríamos tus conceptos.',
    howTo: 'el sitio web de un grupo restaurantero',
    lead: {
      heading: 'Hablemos de tus restaurantes',
      description:
        'Cuéntanos cuántos conceptos tienes y si viene una apertura. Te contactaremos para conocerlos y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos tres conceptos en Guadalajara y abrimos uno nuevo el próximo año.',
    },
  },
  en: {
    seoTitle: 'Web Design and Branding for Restaurant Groups',
    seoDescription:
      'Websites for restaurant groups and each concept: menus your team updates, reservations, private events, and a site that ties your brands together.',
    keywords:
      'restaurant group website design, restaurant website design, restaurant branding agency, restaurant website with reservations, hospitality group website',
    subtitle: 'Web design and branding for restaurant groups',
    accent: 'Restaurant Groups',
    target: 'restaurant groups',
    hero: 'Every concept you open is a new brand with its own crowd, menu, and atmosphere. When someone is choosing where to eat, they compare photos, menu, and availability in seconds, and a slow site or a blurry PDF costs your restaurant the table. We design each concept’s website and the group’s, with each one’s identity and a base you reuse at every opening.',
    intro:
      'We design websites for restaurant groups, chefs with multiple concepts, and multi-location restaurant brands.',
    items: [
      {
        title: 'A site per concept',
        description:
          'Each restaurant with its own identity, photography, and tone, so they do not all look like the same site with a different logo.',
        bullets: ['Identity per concept', 'Photography and atmosphere', 'Reusable base for new openings'],
      },
      {
        title: 'Living menus',
        description:
          'Menus in text, not PDF, that Google can read and that, with a custom panel, your team updates when dishes or prices change.',
        bullets: ['Allergens and options', 'Bilingual menu'],
        custom: ['Editable menu'],
      },
      {
        title: 'Reservations and private events',
        description:
          'A button to your reservation platform or, as a custom build, integration with it, and a section for private dining and groups, which is often the biggest ticket.',
        bullets: ['Private dining and groups'],
        custom: ['Reservation platform integration', 'Gift cards'],
      },
      {
        title: 'The group behind it',
        description:
          'A company site that presents your concepts, your story, and your chef, and serves investors, talent, and franchise inquiries.',
        bullets: ['Concept portfolio', 'Careers', 'Franchising and investors'],
      },
    ],
    diagnosis: 'A call to learn about your concepts, your locations, and how you take reservations today.',
    pages: 'concepts, menus, locations, reservations, private events, the group, and careers',
    costQuestion: 'How much does a restaurant or restaurant group website cost?',
    costScope:
      'how many concepts and locations, whether it connects to your reservation platform, and whether you also need a brand for a new concept',
    faqs: [
      {
        question: 'Should each restaurant have its own site?',
        answer:
          'If the concepts are different, yes: one per concept with its own identity, plus a group site that ties them together. We build a shared base so opening a new concept does not mean starting from scratch.',
      },
      {
        question: 'Why not upload the menu as a PDF?',
        answer:
          'Because it reads poorly on phones, loads slowly, and Google does not understand it as well. A text menu is easier to update and helps people find you by dish.',
      },
      {
        question: 'Do you design the brand for a new restaurant?',
        answer:
          'Yes. We design the logo, printed menu, and applications together with the site, so the concept opens with a complete identity.',
      },
    ],
    aiSubject: 'my restaurant',
    remoteWho: 'restaurant groups',
    proofText:
      'Real website and identity work in food, tourism and recreation, and brand design. It is the standard we would bring to your concepts.',
    howTo: 'a restaurant group website',
    lead: {
      heading: 'Let’s talk about your restaurants',
      description:
        'Tell us how many concepts you have and whether an opening is coming up. We will reach out to learn about them and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run three concepts in Guadalajara and are opening a new one next year.',
    },
  },
});
