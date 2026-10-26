import { defineSector } from './build';

/**
 * Cerveceras artesanales y destilerías — "página web cervecería artesanal".
 * Ángulo: estilos y lanzamientos de temporada, taproom o destilería como
 * destino (visitas, eventos) y distribución a bares y tiendas. Distinto de
 * `tequileras` (destilados de agave con enfoque de exportación).
 */
export const cerveceras = defineSector({
  id: 'cerveceras',
  publishAt: '2026-11-03T00:00:00-06:00',
  slug: { es: 'para-cerveceras-y-destilerias', en: 'for-breweries-and-distilleries' },
  name: { es: 'Cerveceras y destilerías', en: 'Breweries and distilleries' },
  proof: ['fruitAcademy', 'elRollo', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Cerveceras Artesanales y Destilerías',
    seoDescription:
      'Sitios para cerveceras artesanales y destilerías: estilos y lanzamientos, taproom y visitas, eventos, tienda y sección para bares y distribuidores.',
    keywords:
      'diseño web cervecería artesanal, página web cerveza artesanal, sitio web destilería, branding cervecería, página web gin mexicano',
    subtitle: 'Diseño web para cerveceras y destilerías',
    accent: 'Cerveceras y Destilerías',
    target: 'cerveceras y destilerías',
    hero: 'Tu cerveza o tu destilado compite en un refrigerador lleno de etiquetas y en una carta con veinte opciones. Lo que hace que alguien lo pida es la marca, la historia y las ganas de visitar el lugar donde se hace. Diseñamos sitios con personalidad que presentan cada estilo, llevan gente a tu taproom o destilería y abren puertas con bares y tiendas.',
    intro:
      'Diseñamos páginas web para cerveceras artesanales, brewpubs, destilerías de gin, whisky, ron y licores, y marcas de bebidas espirituosas independientes.',
    items: [
      {
        title: 'Estilos y lanzamientos',
        description:
          'Cada estilo o etiqueta con notas, ABV, maridajes y disponibilidad, más páginas para ediciones de temporada.',
        bullets: ['Fichas por estilo', 'Ediciones de temporada', 'Notas y maridajes'],
      },
      {
        title: 'Taproom y visitas',
        description:
          'Horarios, menú, recorridos por la planta, catas y solicitudes de reserva, para que tu espacio se vuelva destino.',
        bullets: ['Horarios y menú', 'Recorridos y catas', 'Solicitud de reserva para grupos'],
      },
      {
        title: 'Eventos y comunidad',
        description:
          'Calendario de eventos, colaboraciones, club de miembros y lista de correo para los lanzamientos.',
        bullets: ['Calendario de eventos', 'Club o membresía', 'Avisos de lanzamientos'],
      },
      {
        title: 'Bares y distribución',
        description:
          'Dónde encontrar tu cerveza o destilado, y una sección para bares, restaurantes y tiendas que quieren venderlo.',
        bullets: ['Formulario para bares y tiendas'],
        custom: ['Localizador de puntos de venta', 'Verificación de edad'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus estilos, tu espacio y dónde vendes hoy.',
    pages: 'cervezas o destilados, lanzamientos, taproom, visitas, eventos, dónde comprar y distribuidores',
    costQuestion: '¿Cuánto cuesta el sitio web de una cervecería o destilería?',
    costScope:
      'cuántos estilos o etiquetas, si incluye reservas, tienda en línea y localizador y si también necesitas marca o etiquetas',
    faqs: [
      {
        question: '¿Podemos publicar lanzamientos de temporada nosotros mismos?',
        answer:
          'Sí, con un panel a la medida para crear cada nuevo estilo o edición con su etiqueta, notas y disponibilidad, sin depender de nosotros.',
      },
      {
        question: '¿Diseñan etiquetas?',
        answer:
          'Sí. Diseñamos la identidad de la marca y un sistema de etiquetas que se puede extender a cada nuevo estilo sin perder coherencia.',
      },
      {
        question: '¿Podemos vender en línea?',
        answer:
          'En México sí, con una tienda a la medida, verificación de edad y una paquetería que acepte bebidas alcohólicas. También podemos llevar al cliente a tus tiendas y bares aliados.',
      },
    ],
    aiSubject: 'mi cervecería',
    remoteWho: 'cerveceras y destilerías',
    proofText:
      'Proyectos reales de identidad y sitios web en alimentos, turismo y recreación y diseño de marca. Es el cuidado que pondríamos en tu marca.',
    howTo: 'el sitio web de una cervecería o destilería',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué produces y dónde se vende. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una cervecería artesanal en Ensenada con taproom y queremos llegar a más bares.',
    },
  },
  en: {
    seoTitle: 'Web Design for Craft Breweries and Distilleries',
    seoDescription:
      'Websites for craft breweries and distilleries: styles and releases, taproom and tours, events, shop, and a section for bars and distributors.',
    keywords:
      'brewery website design, craft brewery web design, distillery website design, brewery branding agency, craft spirits website',
    subtitle: 'Web design for breweries and distilleries',
    accent: 'Breweries & Distilleries',
    target: 'breweries and distilleries',
    hero: 'Your beer or spirit competes in a fridge full of labels and on a menu with twenty options. What makes someone order it is the brand, the story, and the urge to visit the place where it is made. We design websites with personality that present every style, bring people to your taproom or distillery, and open doors with bars and retailers.',
    intro:
      'We design websites for craft breweries, brewpubs, gin, whiskey, rum, and liqueur distilleries, and independent spirits brands.',
    items: [
      {
        title: 'Styles and releases',
        description:
          'Each style or label with notes, ABV, pairings, and availability, plus seasonal release pages.',
        bullets: ['Pages by style', 'Seasonal releases', 'Notes and pairings'],
      },
      {
        title: 'Taproom and tours',
        description:
          'Hours, menu, facility tours, tastings, and reservation requests, so your space becomes a destination.',
        bullets: ['Hours and menu', 'Tours and tastings', 'Group reservation requests'],
      },
      {
        title: 'Events and community',
        description:
          'Event calendar, collaborations, member club, and a mailing list for releases.',
        bullets: ['Event calendar', 'Club or membership', 'Release alerts'],
      },
      {
        title: 'Bars and distribution',
        description:
          'Where to find your beer or spirit, and a section for bars, restaurants, and stores that want to carry it.',
        bullets: ['Trade inquiry form'],
        custom: ['Where-to-buy locator', 'Age verification'],
      },
    ],
    diagnosis: 'A call to learn about your styles, your space, and where you sell today.',
    pages: 'beers or spirits, releases, taproom, tours, events, where to buy, and trade',
    costQuestion: 'How much does a brewery or distillery website cost?',
    costScope:
      'how many styles or labels, whether it includes reservations, an online shop, and a locator, and whether you also need a brand or labels',
    faqs: [
      {
        question: 'Can we publish seasonal releases ourselves?',
        answer:
          'Yes, with a custom panel to create each new style or edition with its label, notes, and availability, without relying on us.',
      },
      {
        question: 'Do you design labels?',
        answer:
          'Yes. We design the brand identity and a label system that extends to every new style without losing consistency.',
      },
      {
        question: 'Can we sell online?',
        answer:
          'Where the law allows it, yes, with a custom store, age verification, and an alcohol-approved carrier. We can also send customers to your partner stores and bars.',
      },
    ],
    aiSubject: 'my brewery',
    remoteWho: 'breweries and distilleries',
    proofText:
      'Real identity and website work in food, tourism and recreation, and brand design. It is the care we would bring to your brand.',
    howTo: 'a brewery or distillery website',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what you produce and where it is sold. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a craft brewery in Ensenada with a taproom and want to reach more bars.',
    },
  },
});
