import { defineSector } from './build';

/**
 * Manufactura y exportadoras — "página web para empresa manufacturera".
 * Ángulo: el comprador de una empresa extranjera valida proveedores en línea;
 * capacidades, certificaciones, maquinaria e industrias atendidas, con un
 * formulario de cotización (RFQ) que acepta planos.
 */
export const manufactura = defineSector({
  id: 'manufactura',
  publishAt: '2026-10-27T00:00:00-06:00',
  slug: { es: 'para-manufactura-y-exportadoras', en: 'for-manufacturers-and-exporters' },
  name: { es: 'Manufactura y exportadoras', en: 'Manufacturers and exporters' },
  proof: ['mexicoPacific', 'grupoEstrella', 'fruitAcademy'],
  es: {
    seoTitle: 'Diseño Web para Empresas Manufactureras y Exportadoras',
    seoDescription:
      'Sitios para manufactureras y exportadoras: capacidades, maquinaria, certificaciones, industrias y cotización con planos, en español e inglés.',
    keywords:
      'diseño web para empresas manufactureras, página web para exportadoras, sitio web fábrica, página web proveedor industrial, diseño web maquila',
    subtitle: 'Diseño web para manufactureras y exportadoras',
    accent: 'Manufactureras',
    target: 'empresas manufactureras y exportadoras',
    hero: 'Un comprador que busca un nuevo proveedor en México revisa tu sitio antes de pedir una muestra. Busca procesos, tolerancias, certificaciones, capacidad instalada y clientes por industria. Si encuentra un sitio genérico con fotos de archivo, pasa al siguiente. Diseñamos sitios que demuestran lo que tu planta sabe hacer y convierten la visita en una solicitud de cotización.',
    intro:
      'Diseñamos páginas web para plantas de maquinado, inyección de plástico, metalmecánica, empaque, alimentos procesados y otras manufacturas que venden a otras empresas.',
    items: [
      {
        title: 'Capacidades en detalle',
        description:
          'Procesos, materiales, tolerancias, volúmenes y maquinaria organizados para que un ingeniero de compras confirme en minutos si puedes fabricar su pieza.',
        bullets: ['Procesos y materiales', 'Maquinaria y capacidad', 'Galería de piezas fabricadas'],
      },
      {
        title: 'Certificaciones y calidad',
        description:
          'ISO, IATF, AS9100 u otras certificaciones, control de calidad y metrología presentados con evidencia, no como logos sueltos.',
        bullets: ['Certificaciones vigentes', 'Sistema de calidad', 'Documentos descargables'],
      },
      {
        title: 'Industrias que atiendes',
        description:
          'Una página por industria (automotriz, médica, aeroespacial, consumo) con lo que fabricas para cada una y los requisitos que cumples.',
        bullets: ['Páginas por industria', 'Aplicaciones típicas', 'Casos si los puedes publicar'],
      },
      {
        title: 'Cotización con planos',
        description:
          'Un formulario de RFQ que recibe planos y archivos CAD, pide volumen y material, y llega completo a tu área comercial.',
        bullets: ['Carga de planos y CAD', 'Volumen, material y plazo', 'Sitio en inglés para compradores extranjeros'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu planta, tus procesos y a qué industrias quieres vender.',
    pages: 'capacidades, maquinaria, calidad y certificaciones, industrias, la empresa y cotización',
    costQuestion: '¿Cuánto cuesta la página web de una empresa manufacturera?',
    costScope:
      'cuántos procesos e industrias, si incluye formulario de cotización con archivos y si también necesitas actualizar la marca',
    faqs: [
      {
        question: '¿Qué busca un comprador extranjero en el sitio de un proveedor?',
        answer:
          'Capacidades concretas, certificaciones vigentes, maquinaria, ubicación logística y una forma sencilla de mandar un plano para cotizar. Diseñamos el sitio alrededor de esas preguntas.',
      },
      {
        question: '¿El formulario puede recibir planos y archivos CAD?',
        answer:
          'Sí. El formulario acepta planos y archivos de diseño, y llega a tu equipo con la información necesaria para cotizar sin ir y venir por correo.',
      },
      {
        question: '¿Pueden fotografiar la planta?',
        answer:
          'Se puede incluir en el alcance o te recomendamos cómo producirla. Fotos reales de tu planta y tus piezas convencen mucho más que imágenes de archivo.',
      },
    ],
    aiSubject: 'mi planta',
    remoteWho: 'manufactureras y exportadoras',
    proofText:
      'Proyectos reales de sitios web e identidad en energía, construcción y agroindustria. Es el estándar con el que trabajaríamos tu planta.',
    howTo: 'el sitio web de una empresa manufacturera',
    lead: {
      heading: 'Hablemos de tu planta',
      description:
        'Cuéntanos qué fabricas y a qué industrias quieres vender. Te contactaremos para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una planta de maquinado CNC en Querétaro y queremos vender a la industria aeroespacial.',
    },
  },
  en: {
    seoTitle: 'Web Design for Manufacturers and Exporters in Mexico',
    seoDescription:
      'Websites for Mexican manufacturers and exporters: capabilities, equipment, certifications, industries served, and RFQs with drawings.',
    keywords:
      'manufacturing website design, manufacturer website Mexico, industrial supplier website, contract manufacturer web design, B2B manufacturing website',
    subtitle: 'Web design for manufacturers and exporters',
    accent: 'Manufacturers',
    target: 'manufacturers and exporters',
    hero: 'A buyer looking for a new supplier in Mexico checks your website before requesting a sample. They look for processes, tolerances, certifications, installed capacity, and the industries you serve. If they find a generic site with stock photos, they move on. We design websites that prove what your plant can do and turn the visit into a request for quote.',
    intro:
      'We design websites for machining, plastic injection, metal fabrication, packaging, processed food, and other manufacturers that sell to other businesses.',
    items: [
      {
        title: 'Capabilities in detail',
        description:
          'Processes, materials, tolerances, volumes, and equipment organized so a sourcing engineer can confirm in minutes whether you can make their part.',
        bullets: ['Processes and materials', 'Equipment and capacity', 'Gallery of manufactured parts'],
      },
      {
        title: 'Certifications and quality',
        description:
          'ISO, IATF, AS9100, or other certifications, quality control, and metrology presented with evidence, not as loose logos.',
        bullets: ['Current certifications', 'Quality system', 'Downloadable documents'],
      },
      {
        title: 'Industries you serve',
        description:
          'A page per industry (automotive, medical, aerospace, consumer) with what you make for each and the requirements you meet.',
        bullets: ['Industry pages', 'Typical applications', 'Case studies if you can publish them'],
      },
      {
        title: 'RFQs with drawings',
        description:
          'An RFQ form that accepts drawings and CAD files, asks for volume and material, and reaches your sales team complete.',
        bullets: ['Drawing and CAD uploads', 'Volume, material, and lead time', 'English site for foreign buyers'],
      },
    ],
    diagnosis: 'A call to learn about your plant, your processes, and which industries you want to sell to.',
    pages: 'capabilities, equipment, quality and certifications, industries, company, and RFQ',
    costQuestion: 'How much does a manufacturing company website cost?',
    costScope:
      'how many processes and industries, whether it includes an RFQ form with file uploads, and whether you also need a brand refresh',
    faqs: [
      {
        question: 'What does a foreign buyer look for on a supplier’s website?',
        answer:
          'Concrete capabilities, current certifications, equipment, logistics location, and an easy way to send a drawing for a quote. We design the site around those questions.',
      },
      {
        question: 'Can the form receive drawings and CAD files?',
        answer:
          'Yes. The form accepts drawings and design files and reaches your team with what they need to quote, without back-and-forth emails.',
      },
      {
        question: 'Can you photograph the plant?',
        answer:
          'It can be included in the scope, or we can advise you on how to produce it. Real photos of your plant and parts are far more convincing than stock images.',
      },
    ],
    aiSubject: 'my plant',
    remoteWho: 'manufacturers and exporters',
    proofText:
      'Real website and identity work in energy, construction, and agribusiness. It is the standard we would bring to your plant.',
    howTo: 'a manufacturing company website',
    lead: {
      heading: 'Let’s talk about your plant',
      description:
        'Tell us what you manufacture and which industries you want to sell to. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a CNC machining plant in Querétaro and want to sell to aerospace.',
    },
  },
});
