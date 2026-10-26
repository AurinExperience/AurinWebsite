import { defineSector } from './build';

/**
 * Mueblerías de diseño y showrooms — "página web mueblería de diseño".
 * Ángulo: piezas de ticket alto que se eligen por material, medida y acabado;
 * el sitio lleva al showroom o a la venta en línea y atiende a interioristas
 * y arquitectos (canal B2B). Distinto de `us-interior-designers`.
 */
export const mueblerias = defineSector({
  id: 'mueblerias',
  publishAt: '2026-10-31T00:00:00-06:00',
  slug: { es: 'para-muebles-de-diseno', en: 'for-furniture-showrooms' },
  name: { es: 'Muebles de diseño y showrooms', en: 'Furniture showrooms' },
  proof: ['ideograma', 'grupoEstrella', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web para Mueblerías de Diseño y Showrooms',
    seoDescription:
      'Sitios y tiendas para mueblerías de diseño: colecciones, acabados y medidas, citas en showroom, venta en línea y programa para interioristas.',
    keywords:
      'diseño web mueblería de diseño, página web showroom de muebles, tienda en línea de muebles, sitio web muebles de autor, ecommerce mobiliario',
    subtitle: 'Diseño web para muebles de diseño y showrooms',
    accent: 'Muebles de Diseño',
    target: 'mueblerías de diseño y showrooms',
    hero: 'Un sofá o una mesa de comedor de diseño se elige tocando el material, pero la decisión de visitar tu showroom se toma en tu sitio. El cliente quiere ver acabados, medidas y cómo luce la pieza en un espacio real. Si encuentra fotos de catálogo sin contexto, compra donde lo inspiran más. Diseñamos sitios que hacen sentir tus piezas y llevan al showroom o a la compra.',
    intro:
      'Diseñamos páginas web para showrooms de mobiliario, estudios de diseño de muebles, marcas de muebles de autor, iluminación y decoración, y fabricantes que venden directo.',
    items: [
      {
        title: 'Colecciones con contexto',
        description:
          'Piezas fotografiadas en espacios reales, con la historia del diseñador o el taller, que inspiran antes de vender.',
        bullets: ['Colecciones y diseñadores', 'Ambientes reales', 'Historia del taller'],
      },
      {
        title: 'Acabados y medidas',
        description:
          'Cada pieza con medidas, materiales, telas y acabados disponibles, y tiempos de fabricación que tú defines.',
        bullets: ['Medidas y ficha técnica', 'Piezas a la medida'],
        custom: ['Muestrario de acabados'],
      },
      {
        title: 'Showroom y tienda',
        description:
          'Solicitud de citas en showroom, cotización de proyectos y, a la medida, venta en línea de piezas listas para entregar.',
        bullets: ['Citas en showroom', 'Cotización de proyectos'],
        custom: ['Tienda en línea'],
      },
      {
        title: 'Programa para profesionales',
        description:
          'Una sección para interioristas, arquitectos y hoteles con fichas descargables, archivos 3D y condiciones comerciales.',
        bullets: ['Fichas y archivos 3D', 'Proyectos contract'],
        custom: ['Registro para profesionales'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus colecciones, tu showroom y cómo vendes hoy.',
    pages: 'colecciones, piezas, acabados, showroom, tienda, profesionales y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una mueblería de diseño?',
    costScope:
      'cuántas piezas y colecciones, si incluye tienda en línea y programa para profesionales y si también necesitas marca',
    faqs: [
      {
        question: '¿Conviene vender muebles en línea?',
        answer:
          'Las piezas de inventario y los accesorios se venden bien en línea; las piezas a la medida convierten mejor con una cita o una cotización. Podemos hacer ambas rutas en el mismo sitio.',
      },
      {
        question: '¿Podemos mostrar todos los acabados de cada pieza?',
        answer:
          'Sí, como desarrollo a la medida: diseñamos un muestrario de telas, maderas y acabados que se asigna a cada pieza, para no tener que fotografiar cada combinación.',
      },
      {
        question: '¿El sitio puede atender a interioristas y arquitectos?',
        answer:
          'Sí. Una sección para profesionales con registro, fichas técnicas y archivos 3D suele traer proyectos más grandes que la venta al público.',
      },
    ],
    aiSubject: 'mi mueblería',
    remoteWho: 'mueblerías de diseño',
    proofText:
      'Proyectos reales de identidad y sitios web en diseño de marca, construcción y recreación. Es el cuidado que pondríamos en tus colecciones.',
    howTo: 'el sitio web de una mueblería de diseño',
    lead: {
      heading: 'Hablemos de tus colecciones',
      description:
        'Cuéntanos qué piezas haces o representas y cómo vendes hoy. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un showroom de muebles de autor en Polanco y queremos vender en línea.',
    },
  },
  en: {
    seoTitle: 'Web Design for Furniture Showrooms and Design Brands',
    seoDescription:
      'Websites for furniture showrooms and design brands: collections, finishes and dimensions, showroom appointments, online sales, and a trade program.',
    keywords:
      'furniture showroom website design, furniture brand website, furniture ecommerce design, designer furniture website, furniture store web design',
    subtitle: 'Web design for furniture showrooms',
    accent: 'Furniture Showrooms',
    target: 'furniture showrooms and design brands',
    hero: 'A designer sofa or dining table is chosen by touching the material, but the decision to visit your showroom happens on your website. People want to see finishes, dimensions, and how the piece looks in a real space. If they find catalog photos with no context, they buy from whoever inspires them more. We design websites that let people feel your pieces and lead to the showroom or the sale.',
    intro:
      'We design websites for furniture showrooms, furniture design studios, designer furniture brands, lighting and decor brands, and manufacturers selling direct.',
    items: [
      {
        title: 'Collections in context',
        description:
          'Pieces photographed in real spaces, with the story of the designer or workshop, inspiring before selling.',
        bullets: ['Collections and designers', 'Real interiors', 'Workshop story'],
      },
      {
        title: 'Finishes and dimensions',
        description:
          'Each piece with dimensions, materials, fabrics, and available finishes, plus production times you define.',
        bullets: ['Dimensions and spec sheet', 'Custom pieces'],
        custom: ['Finish library'],
      },
      {
        title: 'Showroom and store',
        description:
          'Showroom appointment requests, project quotes, and, as a custom build, online sales of ready-to-ship pieces.',
        bullets: ['Showroom appointments', 'Project quotes'],
        custom: ['Online store'],
      },
      {
        title: 'Trade program',
        description:
          'A section for interior designers, architects, and hospitality projects with downloadable sheets, 3D files, and trade terms.',
        bullets: ['Sheets and 3D files', 'Contract projects'],
        custom: ['Trade registration'],
      },
    ],
    diagnosis: 'A call to learn about your collections, your showroom, and how you sell today.',
    pages: 'collections, pieces, finishes, showroom, store, trade, and contact',
    costQuestion: 'How much does a furniture showroom website cost?',
    costScope:
      'how many pieces and collections, whether it includes an online store and trade program, and whether you also need a brand',
    faqs: [
      {
        question: 'Should we sell furniture online?',
        answer:
          'In-stock pieces and accessories sell well online; custom pieces convert better through an appointment or quote. We can build both paths into the same site.',
      },
      {
        question: 'Can we show every finish for each piece?',
        answer:
          'Yes, as custom development: we design a library of fabrics, woods, and finishes assigned to each piece, so you do not have to photograph every combination.',
      },
      {
        question: 'Can the site serve interior designers and architects?',
        answer:
          'Yes. A trade section with registration, spec sheets, and 3D files often brings bigger projects than retail sales.',
      },
    ],
    aiSubject: 'my showroom',
    remoteWho: 'furniture showrooms',
    proofText:
      'Real identity and website work in brand design, construction, and recreation. It is the care we would bring to your collections.',
    howTo: 'a furniture showroom website',
    lead: {
      heading: 'Let’s talk about your collections',
      description:
        'Tell us what pieces you make or represent and how you sell today. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a designer furniture showroom in Mexico City and want to sell online.',
    },
  },
});
