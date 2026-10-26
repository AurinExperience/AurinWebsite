import { defineSector } from './build';

/**
 * Agroindustria y exportadoras — "diseño web para agroindustria" / "página web
 * para empresa exportadora". Ángulo: compradores internacionales que evalúan
 * certificaciones, capacidad y trazabilidad antes de pedir muestra; sitio
 * bilingüe. Prueba: Fruit Academy, cliente real de agroindustria y alimentos.
 */
export const agroindustria = defineSector({
  id: 'agroindustria',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'para-agroindustria', en: 'for-agribusiness' },
  name: { es: 'Agroindustria y exportación', en: 'Agribusiness and exporters' },
  proof: ['fruitAcademy', 'mexicoPacific', 'grupoEstrella'],
  es: {
    seoTitle: 'Diseño Web para Agroindustria y Empresas Exportadoras',
    seoDescription:
      'Páginas web para agroindustria y exportadoras: productos, certificaciones y capacidad para compradores internacionales, en español e inglés.',
    keywords:
      'diseño web para agroindustria, página web empresa exportadora, sitio web exportador de alimentos, página web agrícola, marketing agroindustrial',
    subtitle: 'Diseño web para agroindustria y empresas exportadoras',
    accent: 'Agroindustria',
    target: 'agroindustrias y exportadoras',
    hero: 'Un comprador internacional te evalúa antes de pedir una muestra: productos, temporadas, certificaciones, capacidad y trazabilidad, en su idioma. Si tu sitio no responde eso, pasa al siguiente proveedor. Diseñamos sitios que presentan tu operación al nivel de los mercados a los que quieres vender.',
    stat: { value: 'Agro', label: 'ya trabajamos con marcas de agroindustria como Fruit Academy' },
    intro:
      'Diseñamos para productores, empacadoras, procesadoras y exportadoras de alimentos. Cada página web para empresa exportadora se diseña para el comprador que quieres conseguir.',
    items: [
      {
        title: 'Productos y temporadas',
        description:
          'Fichas por producto con variedades, presentaciones, temporadas y capacidad, para que el comprador sepa qué y cuándo puedes surtir.',
        bullets: ['Fichas de producto', 'Calendario de temporadas', 'Presentaciones y empaque'],
      },
      {
        title: 'Certificaciones y trazabilidad',
        description:
          'Certificaciones, procesos, inocuidad e instalaciones presentados con claridad. Es lo primero que revisa un comprador serio.',
        bullets: ['Certificaciones a la vista', 'Procesos e instalaciones', 'Trazabilidad e inocuidad'],
      },
      {
        title: 'Sitio bilingüe para exportar',
        description:
          'El sitio completo en español y en inglés con sus propias URLs, para que tus compradores te encuentren y te lean en su idioma.',
        bullets: ['Español e inglés', 'Solicitud de muestras y cotización', 'Contacto comercial directo'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Los compradores buscan proveedores en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué produces y te recomienden.',
        bullets: ['Datos estructurados de tu empresa', 'Contenido que la IA puede citar', 'Identidad de marca según el alcance'],
      },
    ],
    diagnosis: 'Una llamada para entender tus productos, tus mercados y el comprador que quieres conseguir.',
    pages: 'productos, temporadas, certificaciones, instalaciones, cotización y contacto comercial',
    costQuestion: '¿Cuánto cuesta la página web de una empresa exportadora?',
    costScope:
      'cuántos productos, si necesitas más idiomas que español e inglés, si incluye administrador, y si también necesitas marca',
    faqs: [
      {
        question: '¿El sitio puede estar en más idiomas que inglés?',
        answer:
          'Sí. Diseñamos la estructura para agregar los idiomas de tus mercados, cada uno con sus propias URLs para que Google lo muestre correctamente.',
      },
      {
        question: '¿Pueden diseñar también nuestro empaque y fichas técnicas?',
        answer:
          'Sí, como parte del alcance de marca: etiquetas, empaque, fichas técnicas y presentación comercial alineados con el sitio.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'agroindustrias',
    proofText:
      'Proyectos reales de identidad y sitios web en agroindustria, energía y construcción. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu empresa.',
    howTo: 'el sitio web de una agroindustria o empresa exportadora',
    lead: {
      heading: 'Hablemos de tu empresa',
      description:
        'Cuéntanos qué produces y a qué mercados quieres vender. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos empacadores de aguacate y queremos llegar a compradores en Estados Unidos y Asia.',
    },
  },
  en: {
    seoTitle: 'Web Design for Agribusiness and Exporters',
    seoDescription:
      'Websites for agribusiness and exporters: products, certifications, and capacity for international buyers, in Spanish and English.',
    keywords:
      'web design for agribusiness, exporter website, food exporter website, agricultural company website, agribusiness marketing',
    subtitle: 'Web design for agribusiness and exporters',
    accent: 'Agribusiness',
    target: 'agribusiness companies and exporters',
    hero: 'International buyers evaluate you before requesting a sample: products, seasons, certifications, capacity, and traceability, in their language. If your site does not answer that, they move on to the next supplier. We design websites that present your operation at the level of the markets you want to sell to.',
    stat: { value: 'Agro', label: 'we already work with agribusiness brands like Fruit Academy' },
    intro:
      'We design for growers, packers, processors, and food exporters. Every exporter website is designed for the buyer you want to win.',
    items: [
      {
        title: 'Products and seasons',
        description:
          'Product pages with varieties, packaging, seasons, and capacity, so buyers know what you can supply and when.',
        bullets: ['Product pages', 'Season calendar', 'Formats and packaging'],
      },
      {
        title: 'Certifications and traceability',
        description:
          'Certifications, processes, food safety, and facilities presented clearly. It is the first thing a serious buyer checks.',
        bullets: ['Certifications in plain sight', 'Processes and facilities', 'Traceability and food safety'],
      },
      {
        title: 'A bilingual site for export',
        description:
          'The full site in Spanish and English with its own URLs, so buyers find you and read you in their language.',
        bullets: ['Spanish and English', 'Sample and quote requests', 'Direct sales contact'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Buyers search for suppliers on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you produce and recommend you.',
        bullets: ['Structured data about your company', 'Content AI tools can cite', 'Brand identity based on project scope'],
      },
    ],
    diagnosis: 'We learn about your products, your markets, and the buyer you want to win.',
    pages: 'products, seasons, certifications, facilities, quotes, and sales contact',
    costQuestion: 'How much does an exporter website cost?',
    costScope:
      'how many products, whether you need languages beyond English and Spanish, whether it includes an admin panel, and whether you also need a brand',
    faqs: [
      {
        question: 'Can the site be in more languages than English?',
        answer:
          'Yes. We design the structure to add the languages of your markets, each with its own URLs so Google shows it correctly.',
      },
      {
        question: 'Can you also design our packaging and spec sheets?',
        answer:
          'Yes, as part of the brand scope: labels, packaging, spec sheets, and sales presentation aligned with the website.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'agribusiness companies',
    proofText:
      'Real identity and website work in agribusiness, energy, and construction. The same care we put into every brand is what we would bring to your company.',
    howTo: 'a website for an agribusiness or exporter',
    lead: {
      heading: 'Let’s talk about your company',
      description:
        'Tell us what you produce and which markets you want to sell to. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We pack avocados and want to reach buyers in the United States and Asia.',
    },
  },
});
