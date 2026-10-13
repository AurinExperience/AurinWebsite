import { defineSector } from './build';

/**
 * UX/UI para banca digital — "diseño UX/UI para bancos" / "diseño de banca en
 * línea". Ángulo: migrar trámites de sucursal a la app sin perder a clientes
 * de todas las edades; seguridad visible sin fricción. Prueba: clientes reales
 * de finanzas (Monetix, Bonanza, Debiti). No se afirma qué regulación aplica.
 */
export const uxBanca = defineSector({
  id: 'ux-banca',
  service: 'uxui',
  publishAt: '2026-10-16T00:00:00-06:00',
  slug: { es: 'para-banca-digital', en: 'for-digital-banking' },
  name: { es: 'UX/UI para banca digital', en: 'UX/UI for digital banking' },
  proof: ['monetix', 'bonanza', 'debiti'],
  es: {
    seoTitle: 'Diseño UX/UI para Bancos y Banca Digital',
    seoDescription:
      'Diseño UX/UI para bancos, cajas y entidades financieras: banca en línea y apps que tus clientes usan sin ir a sucursal y sin miedo a equivocarse.',
    keywords:
      'diseño UX/UI para bancos, diseño banca digital, UX banca en línea, diseño app bancaria, experiencia de usuario bancaria, diseño de servicios financieros',
    subtitle: 'Diseño UX/UI para bancos y banca digital',
    accent: 'Banca Digital',
    target: 'bancos y entidades financieras',
    hero: 'Cada trámite que tu cliente no puede resolver en la app termina en una llamada o en una fila en sucursal. Diseñamos banca digital que cualquier cliente entiende, de 20 o de 70 años, con la seguridad a la vista y sin pasos de más.',
    stat: { value: 'Finanzas', label: 'ya trabajamos con marcas como Monetix, Bonanza y Debiti' },
    intro:
      'Trabajamos con bancos, cajas de ahorro, sofipos y entidades financieras que llevan sus servicios a web y móvil. Cada proyecto parte de los trámites que tus clientes más hacen y de dónde se atoran hoy.',
    items: [
      {
        title: 'Trámites que se resuelven solos',
        description:
          'Transferencias, pagos, aclaraciones y apertura de productos rediseñados para completarse sin ayuda. Menos llamadas al centro de atención, menos filas en sucursal.',
        bullets: ['Flujos de transferencia y pago', 'Apertura de cuentas y productos', 'Aclaraciones y seguimiento'],
      },
      {
        title: 'Seguridad que se ve, no que estorba',
        description:
          'Autenticación, confirmaciones y alertas diseñadas para que el cliente se sienta protegido sin que cada operación se vuelva un obstáculo.',
        bullets: ['Inicio de sesión y autenticación', 'Confirmaciones claras', 'Alertas y notificaciones'],
      },
      {
        title: 'Para clientes de todas las edades',
        description:
          'Lenguaje claro, textos legibles y flujos probados con usuarios reales, para que la app funcione igual para un joven que para un adulto mayor.',
        bullets: ['Criterios de accesibilidad', 'Lenguaje sin tecnicismos', 'Pruebas con usuarios reales'],
      },
      {
        title: 'Sistema de diseño para toda la operación',
        description:
          'Un sistema de componentes que unifica app, banca en línea y canales internos, para que cada equipo construya sin perder consistencia.',
        bullets: ['Biblioteca de componentes', 'Guías para los equipos de producto', 'Web, móvil y canales internos'],
      },
    ],
    research:
      'Entendemos a tus clientes y los trámites que más hacen: datos de uso, motivos de llamada al centro de atención, entrevistas y revisión de la experiencia actual.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una banca digital?',
    costScope:
      'cuántos flujos y productos, si es app, banca en línea o ambas y si necesitas sistema de diseño',
    faqs: [
      {
        question: '¿Pueden rediseñar por etapas sin detener la operación?',
        answer:
          'Sí. Priorizamos los flujos con más impacto, como los que más llamadas generan, y los entregamos por etapas para que tu equipo los implemente sin afectar la operación.',
      },
      {
        question: '¿Cómo se cuidan los requisitos regulatorios?',
        answer:
          'Diseñamos los flujos con los requisitos que tus áreas legal, de cumplimiento y de seguridad nos indiquen, y buscamos que cumplirlos no arruine la experiencia del cliente.',
      },
    ],
    remoteWho: 'entidades financieras',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu banca digital.',
    howTo: 'la experiencia y la interfaz de una banca digital',
    lead: {
      heading: 'Hablemos de tu banca digital',
      description:
        'Cuéntanos qué canales tienes y qué trámites quieres mejorar. Te contactamos para entender tu operación y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una caja de ahorro y queremos que nuestros socios hagan sus trámites desde la app.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Banks and Digital Banking',
    seoDescription:
      'UX/UI design for banks and financial institutions: online banking and apps customers use without a branch visit and without fear of mistakes.',
    keywords:
      'UX/UI design for banks, digital banking design, online banking UX, banking app design, banking customer experience, financial services design',
    subtitle: 'UX/UI design for banks and digital banking',
    accent: 'Digital Banking',
    target: 'banks and financial institutions',
    hero: 'Every task customers cannot finish in the app ends in a call or a line at the branch. We design digital banking any customer understands, whether they are 20 or 70, with security in plain sight and no extra steps.',
    stat: { value: 'Finance', label: 'we already work with brands like Monetix, Bonanza, and Debiti' },
    intro:
      'We work with banks, credit unions, and financial institutions taking their services to web and mobile. Every project starts from the tasks your customers do most and where they get stuck today.',
    items: [
      {
        title: 'Tasks customers finish on their own',
        description:
          'Transfers, payments, disputes, and account opening redesigned to be completed without help. Fewer calls to support, fewer lines at branches.',
        bullets: ['Transfer and payment flows', 'Account and product opening', 'Disputes and tracking'],
      },
      {
        title: 'Security people see, not stumble over',
        description:
          'Authentication, confirmations, and alerts designed so customers feel protected without every transaction becoming an obstacle.',
        bullets: ['Sign-in and authentication', 'Clear confirmations', 'Alerts and notifications'],
      },
      {
        title: 'For customers of every age',
        description:
          'Plain language, readable text, and flows tested with real users, so the app works just as well for a young customer as for an older adult.',
        bullets: ['Accessibility criteria', 'Jargon-free language', 'Testing with real users'],
      },
      {
        title: 'A design system for the whole operation',
        description:
          'A component system that unifies the app, online banking, and internal channels so every team can build without losing consistency.',
        bullets: ['Component library', 'Guidelines for product teams', 'Web, mobile, and internal channels'],
      },
    ],
    research:
      'We learn about your customers and the tasks they do most: usage data, reasons for support calls, interviews, and a review of the current experience.',
    costQuestion: 'How much does UX/UI design for digital banking cost?',
    costScope:
      'how many flows and products, whether it is an app, online banking, or both, and whether you need a design system',
    faqs: [
      {
        question: 'Can you redesign in stages without stopping operations?',
        answer:
          'Yes. We prioritize the flows with the most impact, such as those that generate the most calls, and deliver them in stages so your team can implement them without disrupting operations.',
      },
      {
        question: 'How are regulatory requirements handled?',
        answer:
          'We design the flows around the requirements your legal, compliance, and security teams give us, and make sure meeting them does not ruin the customer experience.',
      },
    ],
    remoteWho: 'financial institutions',
    proofText:
      'Real identity, product, and website work in finance. The same care we put into every brand is what we would bring to your digital banking.',
    howTo: 'the experience and interface of a digital banking product',
    lead: {
      heading: 'Let’s talk about your digital banking',
      description:
        'Tell us which channels you have and which tasks you want to improve. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a credit union and want our members to handle their banking from the app.',
    },
  },
});
