import { defineSector } from './build';

/**
 * UX/UI para hospitales y healthcare — "diseño UX/UI para hospitales" /
 * "diseño de portal de pacientes hospital". Distinto de healthtech (startups):
 * aquí son hospitales, redes de clínicas y aseguradoras de salud con sistemas
 * grandes y muchos tipos de usuario. Prueba: Elite Home Health y Dentol.
 */
export const uxHealthcare = defineSector({
  id: 'ux-healthcare',
  service: 'uxui',
  publishAt: '2026-10-17T00:00:00-06:00',
  slug: { es: 'para-hospitales-y-healthcare', en: 'for-hospitals-and-healthcare' },
  name: { es: 'UX/UI para hospitales', en: 'UX/UI for hospitals' },
  proof: ['elite', 'dentol', 'ceiich'],
  es: {
    seoTitle: 'Diseño UX/UI para Hospitales y Sistemas de Salud',
    seoDescription:
      'Diseño UX/UI para hospitales, redes de clínicas y aseguradoras de salud: portales de pacientes, citas y sistemas internos claros para todos.',
    keywords:
      'diseño UX/UI para hospitales, UX healthcare, diseño portal de pacientes, diseño sistema hospitalario, experiencia del paciente digital, diseño app hospital',
    subtitle: 'Diseño UX/UI para hospitales y sistemas de salud',
    accent: 'Hospitales',
    target: 'hospitales y sistemas de salud',
    hero: 'En un hospital conviven pacientes, familiares, médicos, enfermería y administración, y cada uno necesita algo distinto con prisa. Diseñamos portales, apps y sistemas internos que cada uno entiende a la primera, para que la experiencia digital esté a la altura de la atención.',
    stat: { value: 'Salud', label: 'ya trabajamos con marcas como Elite Home Health y Dentol' },
    intro:
      'Diseñamos para hospitales, redes de clínicas, laboratorios y aseguradoras de salud. Cada proyecto parte de los distintos usuarios de tu sistema y del momento en que lo usan.',
    items: [
      {
        title: 'Portal y app de pacientes',
        description:
          'Citas, resultados, pagos y seguimiento en un solo lugar, con flujos que un paciente o un familiar completa sin llamar.',
        bullets: ['Agenda y recordatorios', 'Resultados y documentos', 'Pagos y facturación'],
      },
      {
        title: 'Sistemas internos que ahorran tiempo',
        description:
          'Pantallas para médicos, enfermería y administración organizadas para encontrar la información correcta en segundos y equivocarse menos.',
        bullets: ['Paneles por rol', 'Formularios clínicos y administrativos', 'Roles y permisos'],
      },
      {
        title: 'Accesible para todos',
        description:
          'Textos legibles, contrastes correctos y lenguaje claro, pensados para pacientes de todas las edades y para momentos de estrés.',
        bullets: ['Criterios de accesibilidad', 'Lenguaje claro', 'Pruebas con usuarios reales'],
      },
      {
        title: 'Datos sensibles bien cuidados',
        description:
          'Consentimientos, avisos y permisos diseñados dentro de la experiencia, para que el paciente sepa qué comparte y por qué.',
        bullets: ['Consentimientos claros', 'Avisos de privacidad en contexto', 'Sistema de diseño escalable'],
      },
    ],
    research:
      'Entendemos a cada tipo de usuario —pacientes, familiares y personal— con datos de uso, entrevistas y observación de los procesos actuales.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de un portal hospitalario?',
    costScope:
      'cuántos tipos de usuario y flujos, si incluye portal de pacientes y sistemas internos y si es web, app o ambos',
    faqs: [
      {
        question: '¿Pueden trabajar sobre los sistemas que ya tenemos?',
        answer:
          'Sí. Diseñamos la capa de experiencia sobre tus sistemas actuales y coordinamos con tu equipo técnico lo que es posible integrar en cada etapa.',
      },
      {
        question: '¿Cómo se manejan los datos de salud en el diseño?',
        answer:
          'Los datos de salud son datos sensibles. Diseñamos consentimientos, avisos y permisos con los requisitos que tu equipo legal nos indique y pedimos solo la información necesaria en cada paso.',
      },
    ],
    remoteWho: 'hospitales y redes de clínicas',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en salud, salud dental e investigación. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu hospital.',
    howTo: 'la experiencia y la interfaz de un portal hospitalario',
    lead: {
      heading: 'Hablemos de tu hospital',
      description:
        'Cuéntanos qué sistemas tienes y qué experiencia quieres mejorar. Te contactamos para entender tu operación y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una red de clínicas y queremos un portal donde los pacientes vean resultados y agenden.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Hospitals and Health Systems',
    seoDescription:
      'UX/UI design for hospitals, clinic networks, and health insurers: patient portals, booking, and internal systems that are clear for everyone.',
    keywords:
      'UX/UI design for hospitals, healthcare UX, patient portal design, hospital system design, digital patient experience, hospital app design',
    subtitle: 'UX/UI design for hospitals and health systems',
    accent: 'Hospitals',
    target: 'hospitals and health systems',
    hero: 'A hospital brings together patients, families, doctors, nurses, and administrators, and each needs something different, in a hurry. We design portals, apps, and internal systems each of them understands the first time, so the digital experience matches the quality of care.',
    stat: { value: 'Health', label: 'we already work with brands like Elite Home Health and Dentol' },
    intro:
      'We design for hospitals, clinic networks, laboratories, and health insurers. Every project starts from the different users of your system and the moment they use it.',
    items: [
      {
        title: 'Patient portal and app',
        description:
          'Appointments, results, payments, and follow-up in one place, with flows a patient or family member completes without calling.',
        bullets: ['Booking and reminders', 'Results and documents', 'Payments and billing'],
      },
      {
        title: 'Internal systems that save time',
        description:
          'Screens for doctors, nurses, and administration organized to find the right information in seconds and make fewer mistakes.',
        bullets: ['Dashboards by role', 'Clinical and administrative forms', 'Roles and permissions'],
      },
      {
        title: 'Accessible to everyone',
        description:
          'Readable text, proper contrast, and plain language, designed for patients of every age and for stressful moments.',
        bullets: ['Accessibility criteria', 'Plain language', 'Testing with real users'],
      },
      {
        title: 'Sensitive data handled with care',
        description:
          'Consents, notices, and permissions designed into the experience, so patients know what they share and why.',
        bullets: ['Clear consents', 'In-context privacy notices', 'Scalable design system'],
      },
    ],
    research:
      'We learn about each type of user —patients, families, and staff— through usage data, interviews, and observation of current processes.',
    costQuestion: 'How much does UX/UI design for a hospital portal cost?',
    costScope:
      'how many user types and flows, whether it includes a patient portal and internal systems, and whether it is web, mobile, or both',
    faqs: [
      {
        question: 'Can you work on top of the systems we already have?',
        answer:
          'Yes. We design the experience layer on top of your current systems and coordinate with your technical team what can be integrated at each stage.',
      },
      {
        question: 'How is health data handled in the design?',
        answer:
          'Health data is sensitive personal data. We design consents, notices, and permissions around the requirements your legal team gives us and ask only for what each step needs.',
      },
    ],
    remoteWho: 'hospitals and clinic networks',
    proofText:
      'Real identity, product, and website work in healthcare, dental care, and research. The same care we put into every brand is what we would bring to your hospital.',
    howTo: 'the experience and interface of a hospital portal',
    lead: {
      heading: 'Let’s talk about your hospital',
      description:
        'Tell us which systems you have and which experience you want to improve. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a clinic network and want a portal where patients see results and book visits.',
    },
  },
});
