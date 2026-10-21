import { defineSector } from './build';

/**
 * Medicina concierge (EE. UU.) — "concierge medicine website design". Ángulo:
 * prácticas por membresía (concierge, direct primary care de alto nivel) que
 * venden acceso y atención personal a pacientes de alto patrimonio.
 */
export const usConciergeMedicine = defineSector({
  id: 'us-concierge-medicine',
  country: 'US',
  publishAt: '2026-10-23T00:00:00-06:00',
  slug: { es: 'para-medicina-concierge', en: 'for-concierge-medicine' },
  name: { es: 'Medicina concierge', en: 'Concierge medicine' },
  proof: ['elite', 'dentol', 'ceiich'],
  es: {
    seoTitle: 'Diseño Web para Prácticas de Medicina Concierge',
    seoDescription:
      'Sitios web para prácticas de medicina concierge y por membresía: el valor de la membresía explicado con claridad, médicos que inspiran confianza y solicitudes de pacientes calificados.',
    keywords:
      'diseño web medicina concierge, sitio web medicina por membresía, página web concierge doctor, diseño web práctica médica privada',
    subtitle: 'Diseño web para medicina concierge',
    accent: 'Medicina Concierge',
    target: 'prácticas de medicina concierge',
    hero: 'Un paciente que paga una membresía anual no está comprando consultas, está comprando acceso, tiempo y tranquilidad. Si tu sitio no lo explica en segundos, se queda con la duda y no llama. Diseñamos sitios que hacen evidente el valor de tu membresía y transmiten la atención personal que ofreces.',
    intro:
      'Diseñamos para prácticas de medicina concierge, medicina ejecutiva y atención primaria por membresía en mercados como Manhattan, Palm Beach, Beverly Hills, Greenwich y Scottsdale.',
    items: [
      {
        title: 'La membresía, clara',
        description:
          'Qué incluye, cómo funciona el acceso y en qué se distingue de la consulta tradicional, explicado sin rodeos.',
        bullets: ['Qué incluye la membresía', 'Comparativa con la consulta tradicional', 'Preguntas frecuentes'],
      },
      {
        title: 'Médicos que inspiran confianza',
        description:
          'Perfiles con formación, enfoque y la forma en que cada médico acompaña a sus pacientes.',
        bullets: ['Perfiles médicos', 'Formación y certificaciones', 'Filosofía de atención'],
      },
      {
        title: 'Solicitud de membresía',
        description:
          'Un proceso de solicitud discreto, con llamada introductoria y los datos justos para tu equipo.',
        bullets: ['Solicitud en línea', 'Llamada introductoria', 'Seguimiento en tu CRM'],
      },
      {
        title: 'Experiencia del paciente',
        description:
          'Diseñamos el acceso de pacientes y la comunicación para que se sientan igual de cuidados que en consulta.',
        bullets: ['Acceso de pacientes', 'Comunicación por etapas', 'Experiencia en celular'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu práctica, tu membresía y a tus pacientes.',
    pages: 'membresía, servicios, médicos, la práctica, preguntas frecuentes y solicitud',
    costQuestion: '¿Cuánto cuesta el sitio web de una práctica de medicina concierge?',
    costScope:
      'cuántos médicos y servicios, si incluye el diseño del acceso de pacientes, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿El sitio cumple con las reglas de privacidad de salud?',
        answer:
          'Diseñamos los formularios con los requisitos que tu equipo de cumplimiento nos indique y pedimos solo la información necesaria en cada paso.',
      },
      {
        question: '¿Pueden ayudarnos a explicar el precio de la membresía?',
        answer:
          'Sí. Diseñamos cómo presentarla para que el paciente entienda lo que recibe; la decisión de mostrar o no el precio es tuya.',
      },
    ],
    aiSubject: 'mi práctica',
    remoteWho: 'prácticas de medicina concierge',
    proofText:
      'Proyectos reales de identidad y sitios web en salud, salud dental e investigación. Es el estándar con el que trabajaríamos tu práctica.',
    howTo: 'el sitio web de una práctica de medicina concierge',
    lead: {
      heading: 'Hablemos de tu práctica',
      description:
        'Cuéntanos cómo funciona tu membresía y a quién atiendes. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una práctica concierge en Manhattan y queremos explicar mejor nuestra membresía.',
    },
  },
  en: {
    seoTitle: 'Concierge Medicine Website Design',
    seoDescription:
      'Websites for concierge and membership medicine practices: the membership value explained clearly, physicians who inspire trust, and inquiries from qualified patients.',
    keywords:
      'concierge medicine website design, concierge doctor website, membership medicine website, direct primary care website design, private practice web design',
    subtitle: 'Web design for concierge medicine',
    accent: 'Concierge Medicine',
    target: 'concierge medicine practices',
    hero: 'A patient paying an annual membership isn’t buying appointments; they are buying access, time, and peace of mind. If your site doesn’t explain that in seconds, they are left wondering and don’t call. We design websites that make your membership’s value obvious and convey the personal care you provide.',
    intro:
      'We design for concierge medicine, executive health, and membership-based primary care practices in markets like Manhattan, Palm Beach, Beverly Hills, Greenwich, and Scottsdale.',
    items: [
      {
        title: 'The membership, made clear',
        description:
          'What it includes, how access works, and how it differs from traditional care, explained plainly.',
        bullets: ['What membership includes', 'Comparison with traditional care', 'Frequently asked questions'],
      },
      {
        title: 'Physicians who inspire trust',
        description: 'Profiles with training, focus, and how each physician cares for patients.',
        bullets: ['Physician profiles', 'Training and board certifications', 'Philosophy of care'],
      },
      {
        title: 'Membership inquiries',
        description:
          'A discreet application process with an introductory call and just the information your team needs.',
        bullets: ['Online inquiry', 'Introductory call', 'Follow-up in your CRM'],
      },
      {
        title: 'Patient experience',
        description:
          'We design the patient login and communication so patients feel as cared for online as in the office.',
        bullets: ['Patient login', 'Staged communication', 'Mobile experience'],
      },
    ],
    diagnosis: 'A video call to learn about your practice, your membership, and your patients.',
    pages: 'membership, services, physicians, the practice, FAQ, and inquiry',
    costQuestion: 'How much does a concierge medicine website cost?',
    costScope:
      'how many physicians and services, whether it includes the patient login design, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Does the site follow health privacy rules?',
        answer:
          'We design the forms around the requirements your compliance team gives us and ask only for the information each step needs.',
      },
      {
        question: 'Can you help us explain the membership fee?',
        answer:
          'Yes. We design how to present it so patients understand what they get; whether to show the fee is your call.',
      },
    ],
    aiSubject: 'my practice',
    remoteWho: 'concierge medicine practices',
    proofText:
      'Real identity and website work in healthcare, dental care, and research. It is the standard we would bring to your practice.',
    howTo: 'a concierge medicine practice website',
    lead: {
      heading: 'Let’s talk about your practice',
      description:
        'Tell us how your membership works and who you serve. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a concierge practice in Manhattan and want to explain our membership better.',
    },
  },
});
