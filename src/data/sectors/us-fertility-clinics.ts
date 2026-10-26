import { defineSector } from './build';

/**
 * Clínicas de fertilidad (EE. UU.) — "fertility clinic website design".
 * Ángulo: el paciente investiga durante meses y compara clínicas por confianza,
 * claridad del tratamiento y opciones de financiamiento; el sitio tiene que
 * acompañar una decisión emocional y cara. Sin prometer tasas de éxito.
 */
export const usFertilityClinics = defineSector({
  id: 'us-fertility-clinics',
  country: 'US',
  publishAt: '2026-10-26T00:00:00-06:00',
  slug: { es: 'para-centros-de-reproduccion-asistida', en: 'for-fertility-clinics' },
  name: { es: 'Centros de reproducción asistida', en: 'Fertility clinics' },
  proof: ['elite', 'dentol', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Clínicas de Fertilidad en EE. UU.',
    seoDescription:
      'Sitios para clínicas de fertilidad en Estados Unidos: tratamientos explicados con claridad, médicos, financiamiento y consultas en línea.',
    keywords:
      'diseño web clínica de fertilidad Estados Unidos, sitio web FIV, página web reproducción asistida, marketing clínica de fertilidad, diseño web IVF',
    subtitle: 'Diseño web para centros de reproducción asistida',
    accent: 'Clínicas de Fertilidad',
    target: 'clínicas de fertilidad',
    hero: 'Quien busca una clínica de fertilidad lleva meses leyendo, comparando y, muchas veces, desanimándose. Llega a tu sitio con preguntas sobre tratamientos, costos y probabilidades, y decide si agenda según cómo le respondes. Diseñamos sitios que explican con calidez y claridad, presentan a tu equipo médico y facilitan dar el primer paso.',
    intro:
      'Diseñamos páginas web para clínicas de FIV, centros de preservación de fertilidad y redes de clínicas en Estados Unidos, con una experiencia pensada para pacientes en una etapa delicada.',
    items: [
      {
        title: 'Tratamientos sin jerga',
        description:
          'FIV, inseminación, preservación de óvulos y donación explicados paso a paso, con lo que el paciente puede esperar en cada etapa.',
        bullets: ['Rutas de tratamiento', 'Qué esperar en cada etapa', 'Glosario y preguntas frecuentes'],
      },
      {
        title: 'Equipo y confianza',
        description:
          'Perfiles de médicos y embriólogos, laboratorio, certificaciones y, si los publicas, resultados presentados con el contexto que exigen las guías del sector.',
        bullets: ['Perfiles del equipo médico', 'Laboratorio y certificaciones', 'Resultados con contexto'],
      },
      {
        title: 'Costos y financiamiento',
        description:
          'Paquetes, cobertura de seguros, planes de pago y programas de financiamiento presentados de forma transparente, que es lo primero que el paciente busca.',
        bullets: ['Paquetes y precios si los publicas', 'Seguros y financiamiento'],
        custom: ['Calculadora de costos'],
      },
      {
        title: 'Primera consulta',
        description:
          'Solicitud de consulta presencial o virtual y formularios de admisión; la agenda en línea y la conexión con tu sistema se desarrollan a la medida.',
        bullets: ['Solicitud de consulta virtual', 'Formularios de admisión', 'Accesibilidad y privacidad del paciente'],
        custom: ['Agenda en línea'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu clínica, tus tratamientos y cómo llegan hoy tus pacientes.',
    pages: 'tratamientos, equipo, laboratorio, costos y financiamiento, recursos para pacientes, ubicaciones y agenda',
    costQuestion: '¿Cuánto cuesta el sitio web de una clínica de fertilidad?',
    costScope:
      'cuántos tratamientos y ubicaciones, si incluye agenda y formularios conectados con tu sistema y si también necesitas marca',
    faqs: [
      {
        question: '¿Pueden publicar nuestras tasas de éxito?',
        answer:
          'Si decides publicarlas, las presentamos con su fuente, su periodo y el contexto que piden las guías del sector, revisadas por tu equipo. Nunca las mostramos como promesa.',
      },
      {
        question: '¿El sitio cuida la privacidad de los pacientes?',
        answer:
          'Sí. Los formularios piden solo lo necesario, evitamos rastreadores que expongan datos sensibles y, a la medida, los conectamos con las herramientas que tu clínica ya usa para información de salud.',
      },
      {
        question: '¿Pueden hacer una versión en español?',
        answer:
          'Sí. Somos un equipo bilingüe, así que el sitio puede atender en inglés y en español a pacientes hispanohablantes sin traducciones automáticas.',
      },
    ],
    aiSubject: 'mi clínica de fertilidad',
    remoteWho: 'clínicas de fertilidad',
    proofText:
      'Proyectos reales de sitios web e identidad en salud, salud dental y diseño de marca. Es el estándar con el que trabajaríamos tu clínica.',
    howTo: 'el sitio web de una clínica de fertilidad',
    lead: {
      heading: 'Hablemos de tu clínica',
      description:
        'Cuéntanos qué tratamientos ofreces y cuántas ubicaciones tienes. Te contactaremos para entender tu clínica y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un centro de FIV con tres ubicaciones en Texas y queremos rediseñar el sitio.',
    },
  },
  en: {
    seoTitle: 'Fertility Clinic Website Design',
    seoDescription:
      'Websites for US fertility clinics: treatments explained clearly, physicians, financing, and online consultations, with the tone the decision deserves.',
    keywords:
      'fertility clinic website design, IVF clinic website, fertility center web design, reproductive medicine website, fertility marketing agency',
    subtitle: 'Web design for fertility clinics',
    accent: 'Fertility Clinics',
    target: 'fertility clinics',
    hero: 'People looking for a fertility clinic have spent months reading, comparing, and often losing hope. They arrive at your site with questions about treatments, costs, and odds, and whether they book depends on how you answer. We design websites that explain with warmth and clarity, introduce your care team, and make the first step easy.',
    intro:
      'We design websites for IVF clinics, fertility preservation centers, and multi-location fertility networks across the US, with an experience built for patients at a delicate moment.',
    items: [
      {
        title: 'Treatments without jargon',
        description:
          'IVF, IUI, egg freezing, and donor programs explained step by step, with what patients can expect at each stage.',
        bullets: ['Treatment paths', 'What to expect at each stage', 'Glossary and FAQs'],
      },
      {
        title: 'Care team and trust',
        description:
          'Physician and embryologist profiles, lab, accreditations and, if you publish them, outcomes presented with the context industry guidelines require.',
        bullets: ['Physician profiles', 'Lab and accreditations', 'Outcomes with context'],
      },
      {
        title: 'Costs and financing',
        description:
          'Packages, insurance coverage, payment plans, and financing presented transparently, since it is the first thing patients look for.',
        bullets: ['Packages and pricing if you publish them', 'Insurance and financing'],
        custom: ['Cost estimator'],
      },
      {
        title: 'First consultation',
        description:
          'In-person or virtual consult requests and intake forms; online scheduling and connection to your systems are custom builds.',
        bullets: ['Virtual consult requests', 'Intake forms', 'Accessibility and patient privacy'],
        custom: ['Online scheduling'],
      },
    ],
    diagnosis: 'A video call to learn about your clinic, your treatments, and how patients find you today.',
    pages: 'treatments, care team, lab, costs and financing, patient resources, locations, and scheduling',
    costQuestion: 'How much does a fertility clinic website cost?',
    costScope:
      'how many treatments and locations, whether it includes scheduling and forms connected to your systems, and whether you also need a brand',
    faqs: [
      {
        question: 'Can you publish our success rates?',
        answer:
          'If you choose to publish them, we present them with their source, time period, and the context industry guidelines call for, reviewed by your team. We never show them as a promise.',
      },
      {
        question: 'Does the site protect patient privacy?',
        answer:
          'Yes. Forms ask only for what is needed, we avoid trackers that could expose sensitive data, and, as a custom build, we connect them to the tools your clinic already uses for health information.',
      },
      {
        question: 'Can you build a Spanish version?',
        answer:
          'Yes. We are a bilingual team, so the site can serve Spanish-speaking patients in their language without machine translation.',
      },
    ],
    aiSubject: 'my fertility clinic',
    remoteWho: 'fertility clinics',
    proofText:
      'Real website and identity work in healthcare, dental care, and brand design. It is the standard we would bring to your clinic.',
    howTo: 'a fertility clinic website',
    lead: {
      heading: 'Let’s talk about your clinic',
      description:
        'Tell us which treatments you offer and how many locations you have. We will reach out to understand your clinic and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an IVF center with three locations in Texas and want to redesign our website.',
    },
  },
});
