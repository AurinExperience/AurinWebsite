import { defineSector } from './build';

/**
 * Farmacéuticas — "diseño web para laboratorio farmacéutico".
 * Ángulo: dos públicos que no deben mezclarse (pacientes y profesionales de la
 * salud), información por producto y todo revisado por el área regulatoria.
 * Nunca afirmar cumplimiento normativo: lo valida el cliente.
 */
export const farmaceuticas = defineSector({
  id: 'farmaceuticas',
  publishAt: '2026-10-28T00:00:00-06:00',
  slug: { es: 'para-farmaceuticas', en: 'for-pharmaceutical-companies' },
  name: { es: 'Farmacéuticas', en: 'Pharmaceutical companies' },
  proof: ['elite', 'dentol', 'ceiich'],
  es: {
    seoTitle: 'Diseño Web para Farmacéuticas y Laboratorios',
    seoDescription:
      'Sitios para farmacéuticas: portafolio por producto, secciones para pacientes y profesionales de la salud, farmacovigilancia y revisión regulatoria.',
    keywords:
      'diseño web para farmacéuticas, página web laboratorio farmacéutico, sitio web para profesionales de la salud, portal médico farmacéutica, diseño web industria farmacéutica',
    subtitle: 'Diseño web para farmacéuticas',
    accent: 'Farmacéuticas',
    target: 'farmacéuticas',
    hero: 'El sitio de una farmacéutica habla con públicos que no pueden recibir el mismo mensaje: pacientes, médicos, farmacias, socios e inversionistas. Si todo se mezcla, el médico no encuentra la información técnica y el paciente ve lo que no debería. Diseñamos sitios que separan cada público con claridad y facilitan el trabajo de tu área regulatoria.',
    intro:
      'Diseñamos para laboratorios farmacéuticos, fabricantes de genéricos, empresas de dispositivos médicos y divisiones de salud de empresas de consumo.',
    items: [
      {
        title: 'Portafolio por producto',
        description:
          'Una ficha por producto o línea terapéutica con la información que tu área regulatoria aprueba, organizada para encontrarse rápido.',
        bullets: ['Fichas por producto', 'Líneas terapéuticas', 'Documentos descargables'],
      },
      {
        title: 'Pacientes y profesionales separados',
        description:
          'Una sección para pacientes con lenguaje claro y otra para profesionales de la salud con información técnica; el acceso controlado se desarrolla a la medida.',
        bullets: ['Contenido para pacientes'],
        custom: ['Portal para profesionales de la salud', 'Acceso por confirmación profesional'],
      },
      {
        title: 'Farmacovigilancia y contacto',
        description:
          'Formularios de farmacovigilancia, información médica y contacto comercial que llegan al área correcta.',
        bullets: ['Reporte de eventos adversos', 'Información médica', 'Contacto comercial y de socios'],
      },
      {
        title: 'Marca corporativa',
        description:
          'Historia, planta, investigación, responsabilidad social y bolsa de trabajo presentadas con la seriedad que espera un socio o un inversionista.',
        bullets: ['Investigación y desarrollo', 'Plantas y certificaciones', 'Bolsa de trabajo'],
      },
    ],
    diagnosis: 'Una llamada con tu equipo de marketing y regulatorio para entender tus públicos y tu proceso de aprobación.',
    pages: 'la empresa, productos, pacientes, profesionales de la salud, investigación, farmacovigilancia y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una farmacéutica?',
    costScope:
      'cuántos productos y líneas, si incluye portal para profesionales con acceso controlado, si va en uno o varios idiomas y cuántas rondas de revisión regulatoria hay',
    faqs: [
      {
        question: '¿El sitio cumple con la regulación sanitaria?',
        answer:
          'El cumplimiento lo valida tu área regulatoria, porque conoce los permisos de cada producto. Nosotros diseñamos el sitio para facilitarlo: separamos públicos, dejamos espacio para leyendas y avisos y ajustamos el contenido en cada ronda de revisión.',
      },
      {
        question: '¿Pueden hacer un portal solo para médicos?',
        answer:
          'Sí, como desarrollo a la medida: una sección para profesionales de la salud con acceso controlado, donde publicas información técnica que no debe estar abierta al público general.',
      },
      {
        question: '¿Pueden hacer sitios para lanzamientos de producto?',
        answer:
          'Sí. Además del corporativo, diseñamos micrositios por producto o campaña con la misma base, para que cada lanzamiento tenga su espacio sin rehacer todo.',
      },
    ],
    aiSubject: 'mi farmacéutica',
    remoteWho: 'farmacéuticas',
    proofText:
      'Proyectos reales de sitios web e identidad en salud, salud dental e investigación. Es el estándar con el que trabajaríamos tu farmacéutica.',
    howTo: 'el sitio web de una farmacéutica',
    lead: {
      heading: 'Hablemos de tu farmacéutica',
      description:
        'Cuéntanos qué productos manejas y a qué públicos quieres llegar. Te contactaremos para entender tu proyecto y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un laboratorio de genéricos y necesitamos un sitio con portal para médicos.',
    },
  },
  en: {
    seoTitle: 'Web Design for Pharmaceutical Companies',
    seoDescription:
      'Websites for pharmaceutical companies: product portfolio, separate patient and HCP sections, pharmacovigilance, and regulatory-reviewed content.',
    keywords:
      'pharmaceutical website design, pharma web design agency, HCP portal design, pharmaceutical company website, life sciences website design',
    subtitle: 'Web design for pharmaceutical companies',
    accent: 'Pharmaceutical Companies',
    target: 'pharmaceutical companies',
    hero: 'A pharmaceutical website speaks to audiences that cannot receive the same message: patients, physicians, pharmacies, partners, and investors. When everything is mixed, physicians cannot find technical information and patients see what they should not. We design websites that separate each audience clearly and make your regulatory team’s job easier.',
    intro:
      'We design for pharmaceutical laboratories, generics manufacturers, medical device companies, and health divisions of consumer companies.',
    items: [
      {
        title: 'Product portfolio',
        description:
          'A page per product or therapeutic area with the information your regulatory team approves, organized to be found quickly.',
        bullets: ['Product pages', 'Therapeutic areas', 'Downloadable documents'],
      },
      {
        title: 'Patients and HCPs kept apart',
        description:
          'A patient section in plain language and a healthcare professional section with technical information; controlled access is a custom build.',
        bullets: ['Patient content'],
        custom: ['HCP portal', 'Professional confirmation gate'],
      },
      {
        title: 'Pharmacovigilance and contact',
        description:
          'Pharmacovigilance forms, medical information requests, and business inquiries that reach the right team.',
        bullets: ['Adverse event reporting', 'Medical information', 'Business and partner inquiries'],
      },
      {
        title: 'Corporate brand',
        description:
          'History, manufacturing, research, social responsibility, and careers presented with the seriousness partners and investors expect.',
        bullets: ['Research and development', 'Plants and certifications', 'Careers'],
      },
    ],
    diagnosis: 'A call with your marketing and regulatory teams to understand your audiences and approval process.',
    pages: 'company, products, patients, healthcare professionals, research, pharmacovigilance, and contact',
    costQuestion: 'How much does a pharmaceutical company website cost?',
    costScope:
      'how many products and therapeutic areas, whether it includes a controlled-access HCP portal, how many languages it runs in, and how many regulatory review rounds there are',
    faqs: [
      {
        question: 'Will the site comply with health regulations?',
        answer:
          'Compliance is validated by your regulatory team, since they know each product’s approvals. We design the site to make it easier: separated audiences, room for required statements and notices, and content adjustments in every review round.',
      },
      {
        question: 'Can you build a physicians-only portal?',
        answer:
          'Yes, as custom development: a healthcare professional section with controlled access, where you publish technical information that should not be open to the general public.',
      },
      {
        question: 'Can you build sites for product launches?',
        answer:
          'Yes. Beyond the corporate site, we design product or campaign microsites on the same base, so every launch gets its own space without rebuilding everything.',
      },
    ],
    aiSubject: 'my pharmaceutical company',
    remoteWho: 'pharmaceutical companies',
    proofText:
      'Real website and identity work in healthcare, dental care, and research. It is the standard we would bring to your company.',
    howTo: 'a pharmaceutical company website',
    lead: {
      heading: 'Let’s talk about your company',
      description:
        'Tell us which products you manage and which audiences you want to reach. We will reach out to understand your project and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a generics laboratory and need a website with a physicians portal.',
    },
  },
});
