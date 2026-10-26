import { defineSector } from './build';

/**
 * Interioristas (EE. UU.) — "interior designer website design". Ángulo: el
 * estudio vende un gusto; el sitio es su portafolio y su filtro de clientes.
 * Mercados: Manhattan, Los Ángeles, Palm Beach, los Hamptons, Aspen.
 */
export const usInteriorDesigners = defineSector({
  id: 'us-interior-designers',
  country: 'US',
  publishAt: '2026-10-23T00:00:00-06:00',
  slug: { es: 'para-disenadores-de-interiores', en: 'for-interior-designers' },
  name: { es: 'Diseñadores de interiores', en: 'Interior designers' },
  proof: ['ideograma', 'grupoEstrella', 'sinfonica'],
  es: {
    seoTitle: 'Diseño Web para Diseñadores de Interiores y Estudios de Interiorismo',
    seoDescription:
      'Sitios web para diseñadores de interiores y estudios de interiorismo de alto nivel: un portafolio editorial, tu estilo inconfundible y solicitudes de clientes que encajan contigo.',
    keywords:
      'diseño web para diseñadores de interiores, sitio web interiorismo, portafolio diseñador de interiores, página web estudio de interiorismo de lujo',
    subtitle: 'Diseño web para diseñadores de interiores',
    accent: 'Interioristas',
    target: 'diseñadores de interiores',
    hero: 'Un cliente de alto nivel te contrata por tu mirada, y la primera vez que la ve es en tu sitio. Si el portafolio se ve como una galería de Instagram, tu trabajo pierde todo lo que lo hace único. Diseñamos sitios editoriales que se sienten como hojear una revista de tu propio estudio.',
    intro:
      'Diseñamos para diseñadores de interiores y estudios de interiorismo residencial y de hospitalidad en mercados como Manhattan, Los Ángeles, Palm Beach, los Hamptons y Aspen.',
    items: [
      {
        title: 'Portafolio editorial',
        description:
          'Cada proyecto contado como un artículo de revista: fotografía protagonista, detalles, materiales y el concepto detrás.',
        bullets: ['Proyectos como historias', 'Fotografía a pantalla completa', 'Detalles y materiales'],
      },
      {
        title: 'Tu estilo, inconfundible',
        description:
          'Tipografía, ritmo y composición pensados para tu estudio, no una plantilla que usan cien diseñadores más.',
        bullets: ['Diseño propio', 'Tono y textos con tu voz', 'Prensa y publicaciones'],
      },
      {
        title: 'El cliente correcto',
        description:
          'Un proceso de trabajo explicado y un formulario que pregunta tipo de proyecto, ubicación y alcance antes de la primera llamada.',
        bullets: ['Proceso de trabajo', 'Solicitud de proyecto', 'Preguntas de calificación'],
      },
      {
        title: 'Marca de estudio',
        description:
          'Identidad para tu estudio que se ve igual de cuidada en el sitio, en tus presentaciones y en tus redes.',
        bullets: ['Identidad y manual', 'Presentaciones para clientes', 'Plantillas para redes'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu estudio, tu estilo y los proyectos que quieres atraer.',
    pages: 'portafolio, estudio, servicios, prensa, proceso y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un diseñador de interiores?',
    costScope:
      'cuántos proyectos en el portafolio, si incluye tienda o colecciones propias y si también necesitas marca',
    faqs: [
      {
        question: '¿Puedo actualizar el portafolio yo misma?',
        answer:
          'Sí, con un panel a la medida para que agregues proyectos nuevos sin romper el diseño, y te explicamos cómo usarlo en una sesión.',
      },
      {
        question: '¿Pueden incluir mi línea de mobiliario o accesorios?',
        answer:
          'Sí. Podemos sumar una sección de colecciones o, a la medida, una tienda en línea, según cómo vendas tus piezas.',
      },
    ],
    aiSubject: 'mi estudio',
    remoteWho: 'diseñadores de interiores',
    proofText:
      'Proyectos reales de identidad y sitios web en diseño de marca, construcción y cultura. Es el estándar con el que trabajaríamos tu estudio.',
    howTo: 'el sitio web de un diseñador de interiores',
    lead: {
      heading: 'Hablemos de tu estudio',
      description:
        'Cuéntanos qué proyectos haces y qué clientes buscas. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un estudio de interiorismo residencial en Palm Beach y queremos un portafolio editorial.',
    },
  },
  en: {
    seoTitle: 'Interior Designer Website Design',
    seoDescription:
      'Websites for interior designers and high-end interior design studios: an editorial portfolio, your unmistakable style, and inquiries from clients who fit you.',
    keywords:
      'interior designer website design, interior design website, interior design portfolio website, luxury interior designer web design',
    subtitle: 'Web design for interior designers',
    accent: 'Interior Designers',
    target: 'interior designers',
    hero: 'High-end clients hire you for your eye, and the first time they see it is on your website. If your portfolio looks like an Instagram grid, your work loses everything that makes it unique. We design editorial websites that feel like leafing through a magazine about your studio.',
    intro:
      'We design for interior designers and residential and hospitality interior design studios in markets like Manhattan, Los Angeles, Palm Beach, the Hamptons, and Aspen.',
    items: [
      {
        title: 'An editorial portfolio',
        description:
          'Every project told like a magazine feature: hero photography, details, materials, and the concept behind it.',
        bullets: ['Projects as stories', 'Full-screen photography', 'Details and materials'],
      },
      {
        title: 'Your style, unmistakable',
        description:
          'Typography, rhythm, and composition designed for your studio, not a template a hundred other designers use.',
        bullets: ['Original design', 'Copy in your voice', 'Press and publications'],
      },
      {
        title: 'The right client',
        description:
          'Your process explained and a form that asks project type, location, and scope before the first call.',
        bullets: ['How you work', 'Project inquiry', 'Qualifying questions'],
      },
      {
        title: 'A studio brand',
        description:
          'An identity for your studio that looks equally polished on the site, in your presentations, and on social.',
        bullets: ['Identity and guidelines', 'Client presentations', 'Social templates'],
      },
    ],
    diagnosis: 'A video call to learn about your studio, your style, and the projects you want to attract.',
    pages: 'portfolio, studio, services, press, process, and contact',
    costQuestion: 'How much does an interior designer website cost?',
    costScope:
      'how many projects in the portfolio, whether it includes a shop or your own collections, and whether you also need a brand',
    faqs: [
      {
        question: 'Can I update the portfolio myself?',
        answer:
          'Yes, with a custom panel so you can add new projects without breaking the design, and we walk you through it in one session.',
      },
      {
        question: 'Can you include my furniture or decor line?',
        answer: 'Yes. We can add a collections section or, as a custom build, an online shop, depending on how you sell your pieces.',
      },
    ],
    aiSubject: 'my studio',
    remoteWho: 'interior designers',
    proofText:
      'Real identity and website work in brand design, construction, and culture. It is the standard we would bring to your studio.',
    howTo: 'an interior designer website',
    lead: {
      heading: 'Let’s talk about your studio',
      description:
        'Tell us what projects you do and which clients you want. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a residential interior design studio in Palm Beach and want an editorial portfolio.',
    },
  },
});
