import { defineSector } from './build';

/**
 * Galerías y asesores de arte (EE. UU.) — "art gallery website design".
 * Ángulo: el sitio es la extensión de la galería: exposiciones que cambian,
 * artistas representados, obra disponible bajo consulta (sin carrito) y
 * coleccionistas que esperan discreción. Distinto de `galerias` (México).
 */
export const usArtGalleries = defineSector({
  id: 'us-art-galleries',
  country: 'US',
  publishAt: '2026-10-29T00:00:00-06:00',
  slug: { es: 'para-galerias-y-asesores-de-arte', en: 'for-art-galleries-and-advisors' },
  name: { es: 'Galerías y asesores de arte', en: 'Art galleries and advisors' },
  proof: ['sinfonica', 'ideograma', 'ceiich'],
  es: {
    seoTitle: 'Diseño Web para Galerías y Asesores de Arte en EE. UU.',
    seoDescription:
      'Sitios para galerías y asesores de arte en Estados Unidos: exposiciones, artistas, obra bajo consulta y una experiencia discreta para coleccionistas.',
    keywords:
      'diseño web galería de arte Estados Unidos, sitio web galería contemporánea, página web asesor de arte, diseño web para artistas representados, sitio web coleccionistas',
    subtitle: 'Diseño web para galerías y asesores de arte',
    accent: 'Galerías de Arte',
    target: 'galerías y asesores de arte',
    hero: 'Para un coleccionista, el sitio de tu galería es la primera sala que recorre, y muchas veces desde otra ciudad. Ahí decide si vale la pena pedir el PDF de disponibilidad, visitar la exposición o llamar a tu director. Un sitio saturado o una plantilla genérica le restan valor a la obra. Diseñamos sitios que dan a cada pieza el espacio que tiene en tus muros.',
    intro:
      'Diseñamos para galerías de arte contemporáneo, galerías de arte moderno, espacios de proyecto y asesores de arte en Nueva York, Los Ángeles, Miami, Chicago y otras ciudades.',
    items: [
      {
        title: 'Exposiciones',
        description:
          'Exposiciones actuales, próximas y pasadas con vistas de sala, textos curatoriales y lista de obra para cada inauguración.',
        bullets: ['Vistas de sala', 'Textos curatoriales', 'Archivo de exposiciones'],
      },
      {
        title: 'Artistas representados',
        description:
          'Una página por artista con obra seleccionada, CV, prensa y exposiciones, que sirve también a curadores y periodistas.',
        bullets: ['Páginas de artista', 'CV y prensa', 'Obra seleccionada'],
      },
      {
        title: 'Obra bajo consulta',
        description:
          'Obra disponible con detalles, dimensiones y un botón de consulta en lugar de carrito, para que la venta pase por tu equipo.',
        bullets: ['Fichas de obra', 'Consulta de disponibilidad'],
        custom: ['Viewing rooms en línea'],
      },
      {
        title: 'Ferias y coleccionistas',
        description:
          'Presencia en ferias, publicaciones y un registro de coleccionistas para avisar de nuevas obras con discreción.',
        bullets: ['Ferias de arte', 'Publicaciones', 'Lista de coleccionistas'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu programa, tus artistas y cómo vendes hoy.',
    pages: 'exposiciones, artistas, obra disponible, viewing rooms, ferias, publicaciones y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una galería de arte?',
    costScope:
      'cuántos artistas y exposiciones de archivo, si incluye viewing rooms en línea, si se conecta con tu sistema de inventario y si también necesitas identidad',
    faqs: [
      {
        question: '¿Debemos mostrar precios en el sitio?',
        answer:
          'Depende de tu programa. Muchas galerías prefieren la consulta para cuidar la relación con el coleccionista; otras muestran precios en viewing rooms. Diseñamos el sitio para cualquiera de los dos caminos.',
      },
      {
        question: '¿Se puede conectar con nuestro sistema de inventario?',
        answer:
          'En muchos casos sí, como desarrollo a la medida. Revisamos el sistema que usas y definimos qué información se publica automáticamente y cuál se queda privada.',
      },
      {
        question: '¿El diseño compite con la obra?',
        answer:
          'No debe. Diseñamos un sitio sobrio, con tipografía cuidada y mucho espacio, donde la obra es la protagonista y la interfaz casi no se nota.',
      },
    ],
    aiSubject: 'mi galería',
    remoteWho: 'galerías y asesores de arte',
    proofText:
      'Proyectos reales de sitios web e identidad en cultura y música, diseño de marca e investigación. Es el estándar con el que trabajaríamos tu galería.',
    howTo: 'el sitio web de una galería de arte',
    lead: {
      heading: 'Hablemos de tu galería',
      description:
        'Cuéntanos sobre tu programa y tus artistas. Te contactaremos para conocer tu galería y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una galería contemporánea en Los Ángeles con 14 artistas representados.',
    },
  },
  en: {
    seoTitle: 'Art Gallery Website Design',
    seoDescription:
      'Websites for US art galleries and art advisors: exhibitions, represented artists, works available on inquiry, and a discreet experience for collectors.',
    keywords:
      'art gallery website design, contemporary gallery website, art advisor website, gallery web design agency, artist representation website',
    subtitle: 'Web design for art galleries and advisors',
    accent: 'Art Galleries',
    target: 'art galleries and advisors',
    hero: 'For a collector, your gallery’s website is the first room they walk through, often from another city. That is where they decide whether to request the availability PDF, visit the show, or call your director. A cluttered site or a generic template takes value away from the work. We design websites that give every piece the space it has on your walls.',
    intro:
      'We design for contemporary and modern art galleries, project spaces, and art advisors in New York, Los Angeles, Miami, Chicago, and beyond.',
    items: [
      {
        title: 'Exhibitions',
        description:
          'Current, upcoming, and past exhibitions with installation views, curatorial texts, and checklists for every opening.',
        bullets: ['Installation views', 'Curatorial texts', 'Exhibition archive'],
      },
      {
        title: 'Represented artists',
        description:
          'A page per artist with selected works, CV, press, and exhibitions, also serving curators and journalists.',
        bullets: ['Artist pages', 'CV and press', 'Selected works'],
      },
      {
        title: 'Works on inquiry',
        description:
          'Available works with details, dimensions, and an inquiry button instead of a cart, so the sale goes through your team.',
        bullets: ['Artwork pages', 'Availability inquiries'],
        custom: ['Online viewing rooms'],
      },
      {
        title: 'Fairs and collectors',
        description:
          'Art fair presence, publications, and a collector list to share new works with discretion.',
        bullets: ['Art fairs', 'Publications', 'Collector list'],
      },
    ],
    diagnosis: 'A video call to learn about your program, your artists, and how you sell today.',
    pages: 'exhibitions, artists, available works, viewing rooms, fairs, publications, and contact',
    costQuestion: 'How much does an art gallery website cost?',
    costScope:
      'how many artists and archived exhibitions, whether it includes online viewing rooms, whether it connects to your inventory system, and whether you also need an identity',
    faqs: [
      {
        question: 'Should we show prices on the site?',
        answer:
          'It depends on your program. Many galleries prefer inquiries to protect the collector relationship; others show prices in viewing rooms. We design the site for either path.',
      },
      {
        question: 'Can it connect to our inventory system?',
        answer:
          'In many cases, yes, as custom development. We review the system you use and define which information is published automatically and which stays private.',
      },
      {
        question: 'Will the design compete with the art?',
        answer:
          'It should not. We design a restrained site with careful typography and generous space, where the work is the focus and the interface barely shows.',
      },
    ],
    aiSubject: 'my gallery',
    remoteWho: 'art galleries and advisors',
    proofText:
      'Real website and identity work in culture and music, brand design, and research. It is the standard we would bring to your gallery.',
    howTo: 'an art gallery website',
    lead: {
      heading: 'Let’s talk about your gallery',
      description:
        'Tell us about your program and your artists. We will reach out to learn about your gallery and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a contemporary gallery in Los Angeles representing 14 artists.',
    },
  },
});
