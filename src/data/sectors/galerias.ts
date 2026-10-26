import { defineSector } from './build';

/**
 * Galerías de arte y casas de subastas en México — "página web galería de arte".
 * Ángulo: la escena de CDMX, Monterrey, Guadalajara y Oaxaca atrae a
 * coleccionistas nacionales y extranjeros (ferias como Zona Maco); galerías
 * y casas de subastas necesitan catálogo, exposiciones y un sitio bilingüe.
 * Distinto de `us-art-galleries` (galerías en EE. UU.).
 */
export const galerias = defineSector({
  id: 'galerias',
  publishAt: '2026-11-02T00:00:00-06:00',
  slug: { es: 'para-galerias-de-arte', en: 'for-art-galleries-in-mexico' },
  name: { es: 'Galerías de arte y subastas', en: 'Art galleries and auction houses in Mexico' },
  proof: ['sinfonica', 'ideograma', 'ceiich'],
  es: {
    seoTitle: 'Diseño Web para Galerías de Arte y Casas de Subastas',
    seoDescription:
      'Sitios para galerías de arte y casas de subastas en México: exposiciones, artistas, catálogos de subasta y versión en inglés para coleccionistas.',
    keywords:
      'diseño web para galerías de arte, página web galería CDMX, sitio web casa de subastas, catálogo de subasta en línea, página web arte contemporáneo México',
    subtitle: 'Diseño web para galerías de arte y subastas',
    accent: 'Galerías de Arte',
    target: 'galerías de arte y casas de subastas',
    hero: 'El arte mexicano tiene coleccionistas en todo el mundo, y muchos conocen tu galería primero por su sitio, antes de una feria o de un viaje a la Ciudad de México. Si el sitio solo está en español, se ve descuidado o no deja ver bien la obra, esa conversación no empieza. Diseñamos sitios que presentan tu programa con la calidad de tus muros, en español y en inglés.',
    intro:
      'Diseñamos para galerías de arte contemporáneo y moderno, casas de subastas, espacios independientes y talleres de gráfica en Ciudad de México, Monterrey, Guadalajara, Oaxaca y Mérida.',
    items: [
      {
        title: 'Exposiciones y archivo',
        description:
          'Exposiciones actuales y pasadas con vistas de sala, textos y lista de obra, que se convierten en el archivo de tu galería.',
        bullets: ['Vistas de sala', 'Textos de sala', 'Archivo de exposiciones'],
      },
      {
        title: 'Artistas',
        description:
          'Una página por artista con obra, biografía, exposiciones y prensa, útil también para curadores e instituciones.',
        bullets: ['Páginas de artista', 'Biografía y CV', 'Prensa y publicaciones'],
      },
      {
        title: 'Subastas y catálogos',
        description:
          'Catálogos de subasta por lote con estimados, condiciones, fechas y registro de postores para cada venta.',
        bullets: ['Catálogo por lote', 'Calendario de subastas', 'Registro de postores'],
      },
      {
        title: 'Coleccionistas extranjeros',
        description:
          'Versión en inglés, consulta de obra, ferias y envío internacional explicados, para atender a quien compra desde fuera.',
        bullets: ['Sitio bilingüe', 'Consulta de obra', 'Ferias y envíos'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu programa, tus artistas o tus subastas y quiénes son tus coleccionistas.',
    pages: 'exposiciones, artistas, obra disponible, subastas, ferias, publicaciones y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una galería o casa de subastas?',
    costScope:
      'cuántos artistas y exposiciones de archivo, si incluye catálogos de subasta y si también necesitas identidad',
    faqs: [
      {
        question: '¿Pueden publicar catálogos de subasta en línea?',
        answer:
          'Sí. Diseñamos catálogos por lote con imagen, ficha, estimado y condiciones, y un formulario de registro de postores; la conexión con tu plataforma de pujas se desarrolla a la medida.',
      },
      {
        question: '¿El sitio debe estar en inglés?',
        answer:
          'Si vendes a coleccionistas extranjeros o participas en ferias internacionales, sí. Lo redactamos con el lenguaje del mundo del arte, no con traducción automática.',
      },
      {
        question: '¿El diseño respeta la obra?',
        answer:
          'Ese es el punto de partida. Diseñamos un sitio sobrio, con espacio y tipografía cuidada, donde la obra es la que habla.',
      },
    ],
    aiSubject: 'mi galería',
    remoteWho: 'galerías y casas de subastas',
    proofText:
      'Proyectos reales de sitios web e identidad en cultura y música, diseño de marca e investigación. Es el estándar con el que trabajaríamos tu galería.',
    howTo: 'el sitio web de una galería de arte',
    lead: {
      heading: 'Hablemos de tu galería',
      description:
        'Cuéntanos sobre tu programa, tus artistas o tus subastas. Te contactaremos para conocer tu galería y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una galería en la Roma con 10 artistas y participamos en Zona Maco.',
    },
  },
  en: {
    seoTitle: 'Web Design for Art Galleries and Auction Houses, Mexico',
    seoDescription:
      'Websites for art galleries and auction houses in Mexico: exhibitions, artists, auction catalogs, and an English experience for collectors.',
    keywords:
      'Mexico City art gallery website, Mexican art gallery web design, auction house website design, online auction catalog design, contemporary art Mexico website',
    subtitle: 'Web design for art galleries and auction houses in Mexico',
    accent: 'Galleries in Mexico',
    target: 'art galleries and auction houses in Mexico',
    hero: 'Mexican art has collectors around the world, and many discover your gallery through its website before a fair or a trip to Mexico City. If the site is only in Spanish, looks neglected, or does not show the work well, that conversation never starts. We design websites that present your program with the quality of your walls, in English and Spanish.',
    intro:
      'We design for contemporary and modern art galleries, auction houses, independent spaces, and print studios in Mexico City, Monterrey, Guadalajara, Oaxaca, and Mérida.',
    items: [
      {
        title: 'Exhibitions and archive',
        description:
          'Current and past exhibitions with installation views, texts, and checklists, becoming your gallery’s archive.',
        bullets: ['Installation views', 'Exhibition texts', 'Exhibition archive'],
      },
      {
        title: 'Artists',
        description:
          'A page per artist with works, biography, exhibitions, and press, also useful for curators and institutions.',
        bullets: ['Artist pages', 'Biography and CV', 'Press and publications'],
      },
      {
        title: 'Auctions and catalogs',
        description:
          'Auction catalogs by lot with estimates, conditions, dates, and bidder registration for every sale.',
        bullets: ['Catalog by lot', 'Auction calendar', 'Bidder registration'],
      },
      {
        title: 'International collectors',
        description:
          'An English version, artwork inquiries, fairs, and international shipping explained for buyers abroad.',
        bullets: ['Bilingual site', 'Artwork inquiries', 'Fairs and shipping'],
      },
    ],
    diagnosis: 'A call to learn about your program, your artists or auctions, and who your collectors are.',
    pages: 'exhibitions, artists, available works, auctions, fairs, publications, and contact',
    costQuestion: 'How much does a gallery or auction house website cost?',
    costScope:
      'how many artists and archived exhibitions, whether it includes auction catalogs, and whether you also need an identity',
    faqs: [
      {
        question: 'Can you publish auction catalogs online?',
        answer:
          'Yes. We design catalogs by lot with image, details, estimate, and conditions, plus a bidder registration form; connecting them to your bidding platform is custom development.',
      },
      {
        question: 'Should the site be in English?',
        answer:
          'If you sell to international collectors or show at international fairs, yes. We write it in the language of the art world, not with machine translation.',
      },
      {
        question: 'Does the design respect the work?',
        answer:
          'That is the starting point. We design a restrained site with space and careful typography, where the work speaks.',
      },
    ],
    aiSubject: 'my gallery',
    remoteWho: 'galleries and auction houses',
    proofText:
      'Real website and identity work in culture and music, brand design, and research. It is the standard we would bring to your gallery.',
    howTo: 'an art gallery website in Mexico',
    lead: {
      heading: 'Let’s talk about your gallery',
      description:
        'Tell us about your program, your artists, or your auctions. We will reach out to learn about your gallery and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a gallery in Roma Norte with 10 artists and show at Zona Maco.',
    },
  },
});
