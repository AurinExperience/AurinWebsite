import { defineSector } from './build';

/**
 * UX/UI para gobierno — "diseño UX/UI para gobierno" / "diseño de trámites en
 * línea". Ángulo: el ciudadano no eligió usar el servicio y no tiene paciencia;
 * trámites claros, accesibilidad y lenguaje ciudadano. Prueba: instituciones
 * académicas y culturales reales (CEIICH-UNAM, Sinfónica de Minería). No se
 * afirma haber trabajado con gobiernos.
 */
export const uxGobierno = defineSector({
  id: 'ux-gobierno',
  service: 'uxui',
  publishAt: '2026-10-17T00:00:00-06:00',
  slug: { es: 'para-gobierno', en: 'for-government' },
  name: { es: 'UX/UI para gobierno', en: 'UX/UI for government' },
  proof: ['ceiich', 'sinfonica', 'ancient'],
  es: {
    seoTitle: 'Diseño UX/UI para Gobierno y Trámites en Línea',
    seoDescription:
      'Diseño UX/UI para gobierno e instituciones públicas: trámites en línea claros, portales accesibles y servicios digitales que el ciudadano completa solo.',
    keywords:
      'diseño UX/UI para gobierno, gobierno digital, diseño de trámites en línea, UX sector público, portal ciudadano, accesibilidad gobierno',
    subtitle: 'Diseño UX/UI para gobierno e instituciones públicas',
    accent: 'Gobierno',
    target: 'gobierno e instituciones públicas',
    hero: 'El ciudadano no eligió hacer el trámite: lo necesita, y si el portal lo confunde termina en una ventanilla o en una queja. Diseñamos servicios digitales públicos que cualquier persona completa sola, en lenguaje claro y accesibles para todos.',
    stat: { value: 'Instituciones', label: 'ya trabajamos con instituciones como CEIICH-UNAM' },
    intro:
      'Trabajamos con dependencias, organismos e instituciones públicas que llevan sus servicios a línea. Cada proyecto parte de los trámites que más hace la ciudadanía y de dónde se atora hoy.',
    items: [
      {
        title: 'Trámites que se completan en línea',
        description:
          'Requisitos claros desde el inicio, formularios por pasos y seguimiento del estado, para que el ciudadano termine sin ir a ventanilla.',
        bullets: ['Requisitos y pasos claros', 'Formularios por etapas', 'Seguimiento y notificaciones'],
      },
      {
        title: 'Accesible para todas las personas',
        description:
          'Diseño con criterios de accesibilidad para personas mayores, con discapacidad o con poca experiencia digital, en cualquier dispositivo.',
        bullets: ['Criterios de accesibilidad', 'Funciona en celulares de gama baja', 'Pruebas con usuarios reales'],
      },
      {
        title: 'Lenguaje ciudadano',
        description:
          'Reescribimos la información en lenguaje claro: qué necesitas, cuánto tarda y qué sigue, sin términos legales innecesarios.',
        bullets: ['Contenido en lenguaje claro', 'Preguntas frecuentes por trámite', 'Mensajes de error que orientan'],
      },
      {
        title: 'Sistema de diseño institucional',
        description:
          'Un sistema de componentes para que todos los portales y equipos de la institución se vean y funcionen igual.',
        bullets: ['Biblioteca de componentes', 'Guías para proveedores y equipos', 'Portales y sistemas internos'],
      },
    ],
    research:
      'Entendemos los trámites y a quienes los usan: datos de uso, motivos de queja, entrevistas con ciudadanía y personal, y revisión de la experiencia actual.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de un portal de gobierno?',
    costScope:
      'cuántos trámites y flujos, si incluye sistema de diseño y si es web, app o ambos',
    faqs: [
      {
        question: '¿Pueden trabajar dentro de un proceso de contratación pública?',
        answer:
          'Sí. Preparamos una propuesta con alcance, entregables y fechas por etapa para que tu área pueda integrarla al proceso que corresponda.',
      },
      {
        question: '¿Cómo se asegura la accesibilidad?',
        answer:
          'Diseñamos con criterios de accesibilidad reconocidos, revisamos contraste, tamaños y navegación con teclado, y probamos los flujos principales con personas usuarias.',
      },
    ],
    remoteWho: 'instituciones públicas',
    proofText:
      'Proyectos reales de identidad, producto y sitios web para instituciones académicas, culturales y de tecnología. El mismo cuidado que ponemos en cada proyecto es el que pondríamos en tus servicios digitales.',
    howTo: 'la experiencia y la interfaz de un servicio digital de gobierno',
    lead: {
      heading: 'Hablemos de tus servicios digitales',
      description:
        'Cuéntanos qué trámites o portales quieres mejorar. Te contactamos para entender tu proyecto y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Queremos que la ciudadanía pueda solicitar y dar seguimiento a un permiso desde el celular.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Government and Online Services',
    seoDescription:
      'UX/UI design for government and public institutions: clear online services, accessible portals, and digital services citizens complete on their own.',
    keywords:
      'UX/UI design for government, digital government, online public services design, public sector UX, citizen portal, government accessibility',
    subtitle: 'UX/UI design for government and public institutions',
    accent: 'Government',
    target: 'government and public institutions',
    hero: 'Citizens did not choose to file the request: they need it, and if the portal confuses them they end up at a counter or filing a complaint. We design public digital services anyone can complete on their own, in plain language and accessible to all.',
    stat: { value: 'Institutions', label: 'we already work with institutions like CEIICH-UNAM' },
    intro:
      'We work with agencies, public bodies, and institutions taking their services online. Every project starts from the services citizens use most and where they get stuck today.',
    items: [
      {
        title: 'Services completed online',
        description:
          'Clear requirements up front, step-by-step forms, and status tracking, so citizens finish without going to a counter.',
        bullets: ['Clear requirements and steps', 'Multi-step forms', 'Tracking and notifications'],
      },
      {
        title: 'Accessible to everyone',
        description:
          'Designed with accessibility criteria for older adults, people with disabilities, or little digital experience, on any device.',
        bullets: ['Accessibility criteria', 'Works on low-end phones', 'Testing with real users'],
      },
      {
        title: 'Plain language',
        description:
          'We rewrite information in plain language: what you need, how long it takes, and what comes next, without unnecessary legal terms.',
        bullets: ['Plain-language content', 'FAQs for each service', 'Error messages that guide'],
      },
      {
        title: 'An institutional design system',
        description:
          'A component system so every portal and team in the institution looks and works the same.',
        bullets: ['Component library', 'Guidelines for vendors and teams', 'Portals and internal systems'],
      },
    ],
    research:
      'We learn about the services and the people who use them: usage data, complaint reasons, interviews with citizens and staff, and a review of the current experience.',
    costQuestion: 'How much does UX/UI design for a government portal cost?',
    costScope:
      'how many services and flows, whether it includes a design system, and whether it is web, mobile, or both',
    faqs: [
      {
        question: 'Can you work within a public procurement process?',
        answer:
          'Yes. We prepare a proposal with scope, deliverables, and dates per stage so your team can bring it into the applicable process.',
      },
      {
        question: 'How is accessibility ensured?',
        answer:
          'We design with recognized accessibility criteria, review contrast, sizing, and keyboard navigation, and test the main flows with real users.',
      },
    ],
    remoteWho: 'public institutions',
    proofText:
      'Real identity, product, and website work for academic, cultural, and technology organizations. The same care we put into every project is what we would bring to your digital services.',
    howTo: 'the experience and interface of a government digital service',
    lead: {
      heading: 'Let’s talk about your digital services',
      description:
        'Tell us which services or portals you want to improve. We will reach out to understand your project and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We want citizens to apply for and track a permit from their phone.',
    },
  },
});
