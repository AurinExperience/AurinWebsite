import { defineSector } from './build';

/**
 * Distribuidores de equipo médico — "página web distribuidor de equipo médico".
 * Ángulo: compradores institucionales (hospitales, clínicas, licitaciones) que
 * piden fichas técnicas, registros sanitarios y soporte; catálogo por
 * especialidad y capacitación. Sin afirmar registros: los aporta el cliente.
 */
export const equipoMedico = defineSector({
  id: 'equipo-medico',
  publishAt: '2026-10-30T00:00:00-06:00',
  slug: { es: 'para-distribuidores-de-equipo-medico', en: 'for-medical-equipment-distributors' },
  name: { es: 'Distribuidores de equipo médico', en: 'Medical equipment distributors' },
  proof: ['elite', 'dentol', 'ancient'],
  es: {
    seoTitle: 'Diseño Web para Distribuidores de Equipo Médico',
    seoDescription:
      'Sitios para distribuidores de equipo médico: catálogo por especialidad, fichas técnicas, documentación para compras, servicio y capacitación.',
    keywords:
      'diseño web distribuidor de equipo médico, página web equipo médico, catálogo en línea de equipo hospitalario, sitio web insumos médicos, diseño web dispositivos médicos',
    subtitle: 'Diseño web para distribuidores de equipo médico',
    accent: 'Equipo Médico',
    target: 'distribuidores de equipo médico',
    hero: 'Un jefe de compras de un hospital no compra por impulso: revisa fichas técnicas, registros, garantías y quién da el servicio después de la instalación. Si tu sitio no tiene esa documentación ordenada, tu propuesta pierde puntos antes de presentarse. Diseñamos sitios que presentan tu catálogo con la seriedad técnica que piden hospitales, clínicas y licitaciones.',
    intro:
      'Diseñamos páginas web para distribuidores de equipo hospitalario, imagenología, laboratorio, equipo dental, rehabilitación e insumos médicos.',
    items: [
      {
        title: 'Catálogo por especialidad',
        description:
          'Equipos organizados por especialidad, área hospitalaria y marca y, a la medida, con filtros que usan los compradores y los médicos.',
        bullets: ['Marcas representadas', 'Equipos destacados'],
        custom: ['Filtros por especialidad'],
      },
      {
        title: 'Documentación técnica',
        description:
          'Fichas técnicas, registros sanitarios y certificados que proporcionas, listos para descargar en un proceso de compra o licitación.',
        bullets: ['Fichas descargables', 'Registros y certificados', 'Manuales y garantías'],
      },
      {
        title: 'Servicio y capacitación',
        description:
          'Instalación, mantenimiento preventivo, servicio técnico y capacitación al personal, que es lo que diferencia a un distribuidor de otro.',
        bullets: ['Solicitud de servicio', 'Mantenimiento preventivo', 'Capacitación clínica'],
      },
      {
        title: 'Cotización institucional',
        description:
          'Solicitudes de cotización para hospitales, clínicas y gobierno, que llegan al ejecutivo correcto con el equipo y la cantidad.',
        bullets: ['Cotización por equipo', 'Atención a licitaciones', 'Ejecutivo por zona'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu catálogo, tus marcas y a qué instituciones vendes.',
    pages: 'catálogo, especialidades, marcas, documentación, servicio técnico, capacitación y cotización',
    costQuestion: '¿Cuánto cuesta el sitio web de un distribuidor de equipo médico?',
    costScope:
      'cuántos equipos y marcas, si incluye documentación descargable y solicitudes de servicio y si también necesitas actualizar la marca',
    faqs: [
      {
        question: '¿Podemos publicar los registros sanitarios de los equipos?',
        answer:
          'Sí. Tú nos das los documentos vigentes y los organizamos por equipo para descargarlos. La vigencia y el contenido de cada registro los valida tu área regulatoria.',
      },
      {
        question: '¿El sitio ayuda en licitaciones?',
        answer:
          'Ayuda a que el comprador tenga la información técnica a la mano y a que tu empresa se vea seria y documentada. La licitación en sí se gestiona por sus canales oficiales.',
      },
      {
        question: '¿Podemos mostrar precios?',
        answer:
          'En equipo médico casi siempre se cotiza, pero si manejas insumos con precio fijo podemos desarrollar a la medida una tienda para esos productos.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'distribuidores de equipo médico',
    proofText:
      'Proyectos reales de sitios web e identidad en salud, salud dental y desarrollo de software. Es el estándar con el que trabajaríamos tu catálogo.',
    howTo: 'el sitio web de un distribuidor de equipo médico',
    lead: {
      heading: 'Hablemos de tu catálogo',
      description:
        'Cuéntanos qué equipos distribuyes y a qué instituciones vendes. Te contactaremos para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Distribuimos equipo de imagenología a hospitales privados en el centro del país.',
    },
  },
  en: {
    seoTitle: 'Web Design for Medical Equipment Distributors',
    seoDescription:
      'Websites for medical equipment distributors: catalog by specialty, spec sheets, documentation for institutional buyers, technical service, and training.',
    keywords:
      'medical equipment distributor website, medical device distributor web design, hospital equipment catalog website, medical supply website design, healthcare B2B website',
    subtitle: 'Web design for medical equipment distributors',
    accent: 'Medical Equipment',
    target: 'medical equipment distributors',
    hero: 'A hospital purchasing manager does not buy on impulse: they review spec sheets, registrations, warranties, and who services the equipment after installation. If your website does not have that documentation organized, your proposal loses points before it is presented. We design websites that present your catalog with the technical rigor hospitals, clinics, and tenders require.',
    intro:
      'We design websites for distributors of hospital equipment, imaging, laboratory, dental, rehabilitation, and medical supplies.',
    items: [
      {
        title: 'Catalog by specialty',
        description:
          'Equipment organized by specialty, hospital area, and brand and, as a custom build, with filters buyers and physicians actually use.',
        bullets: ['Represented brands', 'Featured equipment'],
        custom: ['Specialty filters'],
      },
      {
        title: 'Technical documentation',
        description:
          'Spec sheets, health registrations, and certificates you provide, ready to download during a purchase or tender.',
        bullets: ['Downloadable sheets', 'Registrations and certificates', 'Manuals and warranties'],
      },
      {
        title: 'Service and training',
        description:
          'Installation, preventive maintenance, technical service, and staff training, which is what sets one distributor apart from another.',
        bullets: ['Service requests', 'Preventive maintenance', 'Clinical training'],
      },
      {
        title: 'Institutional quotes',
        description:
          'Quote requests for hospitals, clinics, and government that reach the right account executive with the equipment and quantity.',
        bullets: ['Quotes by equipment', 'Tender support', 'Rep by territory'],
      },
    ],
    diagnosis: 'A call to learn about your catalog, your brands, and which institutions you sell to.',
    pages: 'catalog, specialties, brands, documentation, technical service, training, and quotes',
    costQuestion: 'How much does a medical equipment distributor website cost?',
    costScope:
      'how many products and brands, whether it includes downloadable documentation and service requests, and whether you also need a brand refresh',
    faqs: [
      {
        question: 'Can we publish each device’s health registration?',
        answer:
          'Yes. You provide the current documents and we organize them by product for download. The validity and content of each registration is confirmed by your regulatory team.',
      },
      {
        question: 'Does the site help with tenders?',
        answer:
          'It helps buyers have the technical information at hand and makes your company look serious and well documented. The tender itself runs through its official channels.',
      },
      {
        question: 'Can we show prices?',
        answer:
          'Medical equipment is almost always quoted, but if you sell supplies at fixed prices we can build a custom store for those products.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'medical equipment distributors',
    proofText:
      'Real website and identity work in healthcare, dental care, and software development. It is the standard we would bring to your catalog.',
    howTo: 'a medical equipment distributor website',
    lead: {
      heading: 'Let’s talk about your catalog',
      description:
        'Tell us which equipment you distribute and which institutions you sell to. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We distribute imaging equipment to private hospitals in central Mexico.',
    },
  },
});
