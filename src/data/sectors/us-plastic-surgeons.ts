import { defineSector } from './build';

/**
 * Cirujanos plásticos (EE. UU.) — "plastic surgery website design". Ángulo:
 * procedimientos de ticket alto que se deciden por confianza en el cirujano y
 * por resultados (antes y después). Mercados: Beverly Hills, Manhattan, Miami,
 * Scottsdale, Dallas. Sin prometer resultados médicos ni de posicionamiento.
 */
export const usPlasticSurgeons = defineSector({
  id: 'us-plastic-surgeons',
  country: 'US',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'para-cirujanos-plasticos', en: 'for-plastic-surgeons' },
  name: { es: 'Cirujanos plásticos', en: 'Plastic surgeons' },
  proof: ['dentol', 'elite', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Cirujanos Plásticos en Estados Unidos',
    seoDescription:
      'Sitios web para cirujanos plásticos y prácticas de cirugía estética: el cirujano como marca, procedimientos explicados con claridad, galerías de antes y después y consultas en línea.',
    keywords:
      'diseño web para cirujanos plásticos, sitio web cirugía plástica, página web cirujano estético, marketing digital cirugía plástica',
    subtitle: 'Diseño web para cirujanos plásticos',
    accent: 'Cirujanos Plásticos',
    target: 'cirujanos plásticos',
    hero: 'Un paciente compara a tres o cuatro cirujanos antes de pedir una consulta, y casi siempre empieza por su sitio. Si se ve igual que el de cualquier clínica, decide por precio. Diseñamos sitios que transmiten tu criterio, tu técnica y tus resultados para que te elijan por quién eres.',
    intro:
      'Diseñamos para cirujanos plásticos y prácticas de cirugía estética en mercados como Beverly Hills, Manhattan, Miami, Scottsdale y Dallas.',
    items: [
      {
        title: 'El cirujano como marca',
        description:
          'Tu formación, certificaciones, filosofía y estilo, presentados con la seriedad que un paciente busca antes de operarse.',
        bullets: ['Perfil y certificaciones', 'Filosofía y enfoque', 'Prensa y publicaciones'],
      },
      {
        title: 'Procedimientos explicados con claridad',
        description:
          'Una página por procedimiento con candidatos, proceso y recuperación, escrita para responder las dudas reales de los pacientes.',
        bullets: ['Páginas por procedimiento', 'Preguntas frecuentes', 'Recuperación paso a paso'],
      },
      {
        title: 'Galerías de antes y después',
        description:
          'Galerías ordenadas por procedimiento, con aviso de contenido y respetando los consentimientos que tu práctica obtenga.',
        bullets: ['Filtros por procedimiento', 'Aviso de contenido sensible', 'Carga rápida y discreta'],
      },
      {
        title: 'Consultas en línea',
        description:
          'Solicitud de consulta, consulta virtual y formularios pensados para pacientes que valoran la discreción.',
        bullets: ['Solicitud de consulta', 'Consulta virtual', 'Seguimiento en tu CRM'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu práctica, tus procedimientos principales y a tus pacientes.',
    pages: 'procedimientos, antes y después, el cirujano, la práctica, testimonios y consulta',
    costQuestion: '¿Cuánto cuesta el sitio web de un cirujano plástico?',
    costScope:
      'cuántos procedimientos y galerías, si incluye consulta virtual, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Pueden mostrar fotos de antes y después?',
        answer:
          'Sí. Diseñamos las galerías y la forma de mostrarlas; las fotos y los consentimientos de los pacientes los proporciona tu práctica según sus políticas.',
      },
      {
        question: '¿El sitio cumple con las reglas de privacidad de salud?',
        answer:
          'Diseñamos los formularios con los requisitos que tu equipo de cumplimiento nos indique y pedimos solo la información necesaria en cada paso.',
      },
    ],
    aiSubject: 'mi práctica',
    remoteWho: 'cirujanos plásticos',
    proofText:
      'Proyectos reales de identidad y sitios web en salud dental, salud y diseño de marca. Es el estándar con el que trabajaríamos tu práctica.',
    howTo: 'el sitio web de un cirujano plástico',
    lead: {
      heading: 'Hablemos de tu práctica',
      description:
        'Cuéntanos qué procedimientos quieres impulsar. Te contactamos para entender tu práctica y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una práctica de cirugía plástica en Scottsdale y queremos rediseñar el sitio.',
    },
  },
  en: {
    seoTitle: 'Plastic Surgery Website Design',
    seoDescription:
      'Websites for plastic surgeons and aesthetic surgery practices: the surgeon as a brand, procedures explained clearly, before-and-after galleries, and online consultations.',
    keywords:
      'plastic surgery website design, plastic surgeon website, cosmetic surgery website design, plastic surgery web design agency',
    subtitle: 'Web design for plastic surgeons',
    accent: 'Plastic Surgeons',
    target: 'plastic surgeons',
    hero: 'Patients compare three or four surgeons before booking a consultation, and they almost always start with the website. If yours looks like any clinic’s, they decide on price. We design websites that convey your judgment, your technique, and your results so patients choose you for who you are.',
    intro:
      'We design for plastic surgeons and aesthetic surgery practices in markets like Beverly Hills, Manhattan, Miami, Scottsdale, and Dallas.',
    items: [
      {
        title: 'The surgeon as a brand',
        description:
          'Your training, board certifications, philosophy, and style, presented with the seriousness patients look for before surgery.',
        bullets: ['Profile and certifications', 'Philosophy and approach', 'Press and publications'],
      },
      {
        title: 'Procedures explained clearly',
        description:
          'One page per procedure covering candidates, process, and recovery, written to answer patients’ real questions.',
        bullets: ['Procedure pages', 'Frequently asked questions', 'Step-by-step recovery'],
      },
      {
        title: 'Before-and-after galleries',
        description:
          'Galleries organized by procedure, with content warnings and in line with the consents your practice obtains.',
        bullets: ['Filters by procedure', 'Sensitive content notice', 'Fast, discreet loading'],
      },
      {
        title: 'Online consultations',
        description:
          'Consultation requests, virtual consultations, and forms designed for patients who value discretion.',
        bullets: ['Consultation requests', 'Virtual consultations', 'Follow-up in your CRM'],
      },
    ],
    diagnosis: 'A video call to learn about your practice, your key procedures, and your patients.',
    pages: 'procedures, before and after, the surgeon, the practice, testimonials, and consultation',
    costQuestion: 'How much does a plastic surgeon website cost?',
    costScope:
      'how many procedures and galleries, whether it includes virtual consultations, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Can you show before-and-after photos?',
        answer:
          'Yes. We design the galleries and how they are shown; the photos and patient consents come from your practice under its own policies.',
      },
      {
        question: 'Does the site follow health privacy rules?',
        answer:
          'We design the forms around the requirements your compliance team gives us and ask only for the information each step needs.',
      },
    ],
    aiSubject: 'my practice',
    remoteWho: 'plastic surgeons',
    proofText:
      'Real identity and website work in dental care, healthcare, and brand design. It is the standard we would bring to your practice.',
    howTo: 'a plastic surgeon website',
    lead: {
      heading: 'Let’s talk about your practice',
      description:
        'Tell us which procedures you want to grow. We will reach out to understand your practice and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a plastic surgery practice in Scottsdale and want to redesign our site.',
    },
  },
});
