import { defineSector } from './build';

/**
 * Odontología estética e implantes (EE. UU.) — "cosmetic dentist website design".
 * Ángulo: casos de alto valor (carillas, implantes, arcada completa) que se
 * deciden por galería de antes y después, confianza en el doctor y opciones de
 * financiamiento. Distinto de `dentistas` (consultorio general en México).
 */
export const usCosmeticDentistry = defineSector({
  id: 'us-cosmetic-dentistry',
  country: 'US',
  publishAt: '2026-10-27T00:00:00-06:00',
  slug: { es: 'para-odontologia-estetica', en: 'for-cosmetic-dentists' },
  name: { es: 'Odontología estética e implantes', en: 'Cosmetic and implant dentistry' },
  proof: ['dentol', 'elite', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Odontología Estética en EE. UU.',
    seoDescription:
      'Sitios para odontología estética e implantes en Estados Unidos: antes y después, tratamientos, financiamiento y consultas para casos de alto valor.',
    keywords:
      'diseño web dentista estético Estados Unidos, sitio web carillas dentales, página web implantes dentales, marketing odontología estética, diseño web dental de lujo',
    subtitle: 'Diseño web para odontología estética e implantes',
    accent: 'Odontología Estética',
    target: 'consultorios de odontología estética',
    hero: 'Un paciente que considera carillas o una rehabilitación de arcada completa está por hacer una de las compras más grandes de su vida, y la decide viendo casos. Compara galerías, lee sobre el doctor y busca cómo pagarlo antes de llamar. Diseñamos sitios que muestran tu trabajo con la calidad que tiene y convierten a ese paciente en una consulta.',
    intro:
      'Diseñamos para consultorios de odontología estética, centros de implantes y prácticas de rehabilitación oral en Estados Unidos.',
    items: [
      {
        title: 'Antes y después',
        description:
          'Galerías organizadas por tratamiento, con fotografía consistente y el permiso de tus pacientes, que dejan ver el detalle de tu trabajo.',
        bullets: ['Galerías por tratamiento', 'Comparadores de antes y después', 'Testimonios en video'],
      },
      {
        title: 'Tratamientos de alto valor',
        description:
          'Carillas, implantes, arcada completa y diseño de sonrisa explicados con el proceso, la tecnología y lo que el paciente vive en cada cita.',
        bullets: ['Páginas por tratamiento', 'Tecnología del consultorio', 'Proceso y recuperación'],
      },
      {
        title: 'El doctor como marca',
        description:
          'Formación, acreditaciones y filosofía del doctor presentadas para que el paciente sepa en manos de quién se pone.',
        bullets: ['Perfil y formación', 'Acreditaciones', 'Prensa y conferencias'],
      },
      {
        title: 'Financiamiento y consulta',
        description:
          'Opciones de pago y financiamiento claras, y solicitud de consulta presencial o virtual; la agenda conectada con tu sistema se desarrolla a la medida.',
        bullets: ['Planes de financiamiento', 'Consulta virtual'],
        custom: ['Agenda conectada'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu consultorio, tus tratamientos y qué casos quieres atraer.',
    pages: 'tratamientos, galería, el doctor, tecnología, financiamiento, testimonios y agenda',
    costQuestion: '¿Cuánto cuesta el sitio web de un consultorio de odontología estética?',
    costScope:
      'cuántos tratamientos y casos de galería, si incluye agenda conectada con tu sistema y si también necesitas marca',
    faqs: [
      {
        question: '¿Cómo presentan las fotos de antes y después?',
        answer:
          'Con fotografía consistente, organizada por tratamiento y siempre con el consentimiento de tus pacientes. Te recomendamos cómo tomarlas para que la comparación sea justa y convincente.',
      },
      {
        question: '¿El sitio ayuda a atraer casos de implantes o arcada completa?',
        answer:
          'Lo diseñamos para esos casos: páginas dedicadas, explicación del proceso y del financiamiento, y una consulta fácil de agendar. Nadie puede garantizar resultados, pero sí un sitio a la altura de tu trabajo.',
      },
      {
        question: '¿Pueden hacer el sitio en español también?',
        answer:
          'Sí. Somos bilingües, así que podemos atender a pacientes hispanohablantes con una versión en español escrita por personas.',
      },
    ],
    aiSubject: 'mi consultorio',
    remoteWho: 'consultorios de odontología estética',
    proofText:
      'Proyectos reales de sitios web e identidad en salud dental, salud y diseño de marca. Es el estándar con el que trabajaríamos tu consultorio.',
    howTo: 'el sitio web de un consultorio de odontología estética',
    lead: {
      heading: 'Hablemos de tu consultorio',
      description:
        'Cuéntanos qué tratamientos quieres impulsar y dónde está tu consultorio. Te contactaremos para entenderlo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un consultorio de implantes en Scottsdale y queremos atraer más casos de arcada completa.',
    },
  },
  en: {
    seoTitle: 'Cosmetic Dentist Website Design',
    seoDescription:
      'Websites for cosmetic and implant dentists in the US: before-and-after galleries, treatments, financing, and consultations built for high-value cases.',
    keywords:
      'cosmetic dentist website design, implant dentist website, dental website design agency, veneers website, luxury dental practice website',
    subtitle: 'Web design for cosmetic and implant dentists',
    accent: 'Cosmetic Dentists',
    target: 'cosmetic dentists',
    hero: 'A patient considering veneers or a full-arch restoration is about to make one of the biggest purchases of their life, and they decide by looking at cases. They compare galleries, read about the dentist, and look for a way to pay before calling. We design websites that show your work at the quality it deserves and turn that patient into a consultation.',
    intro:
      'We design for cosmetic dental practices, implant centers, and full-mouth rehabilitation practices across the US.',
    items: [
      {
        title: 'Before and after',
        description:
          'Galleries organized by treatment, with consistent photography and patient consent, that let people see the detail of your work.',
        bullets: ['Galleries by treatment', 'Before-and-after sliders', 'Video testimonials'],
      },
      {
        title: 'High-value treatments',
        description:
          'Veneers, implants, full-arch, and smile design explained with the process, the technology, and what patients experience at each visit.',
        bullets: ['Treatment pages', 'Practice technology', 'Process and recovery'],
      },
      {
        title: 'The dentist as a brand',
        description:
          'Training, accreditations, and philosophy presented so patients know whose hands they are in.',
        bullets: ['Profile and training', 'Accreditations', 'Press and speaking'],
      },
      {
        title: 'Financing and consultation',
        description:
          'Clear payment and financing options, plus in-person or virtual consultation requests; scheduling connected to your system is a custom build.',
        bullets: ['Financing plans', 'Virtual consultations'],
        custom: ['Connected scheduling'],
      },
    ],
    diagnosis: 'A video call to learn about your practice, your treatments, and the cases you want to attract.',
    pages: 'treatments, gallery, the doctor, technology, financing, testimonials, and scheduling',
    costQuestion: 'How much does a cosmetic dentist website cost?',
    costScope:
      'how many treatments and gallery cases, whether it includes scheduling connected to your system, and whether you also need a brand',
    faqs: [
      {
        question: 'How do you present before-and-after photos?',
        answer:
          'With consistent photography, organized by treatment, and always with patient consent. We advise you on how to shoot them so the comparison is fair and convincing.',
      },
      {
        question: 'Will the site help attract implant and full-arch cases?',
        answer:
          'We design it for those cases: dedicated pages, clear process and financing information, and an easy consultation booking. No one can guarantee results, but your site can match the level of your work.',
      },
      {
        question: 'Can you build a Spanish version too?',
        answer:
          'Yes. We are bilingual, so we can serve Spanish-speaking patients with a version written by people, not machines.',
      },
    ],
    aiSubject: 'my practice',
    remoteWho: 'cosmetic dental practices',
    proofText:
      'Real website and identity work in dental care, healthcare, and brand design. It is the standard we would bring to your practice.',
    howTo: 'a cosmetic dentist website',
    lead: {
      heading: 'Let’s talk about your practice',
      description:
        'Tell us which treatments you want to grow and where your practice is. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an implant practice in Scottsdale and want more full-arch cases.',
    },
  },
});
