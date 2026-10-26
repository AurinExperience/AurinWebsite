import { defineSector } from './build';

/**
 * Startups de IA (EE. UU.) — "UX design for AI products" / "AI product design
 * agency". Ángulo: productos de IA con mucha capacidad y poca claridad; el
 * diseño convierte un modelo potente en algo que la gente entiende y en lo que
 * confía. Presupuestos altos y demanda creciente.
 */
export const usUxAiStartups = defineSector({
  id: 'us-ux-ai-startups',
  service: 'uxui',
  country: 'US',
  publishAt: '2026-10-22T00:00:00-06:00',
  slug: { es: 'para-productos-de-ia', en: 'for-ai-products' },
  name: { es: 'Productos de IA', en: 'AI products' },
  proof: ['ancient', 'monetix', 'debiti'],
  es: {
    seoTitle: 'Diseño UX/UI para Productos y Startups de Inteligencia Artificial',
    seoDescription:
      'Diseño UX/UI para productos de IA: interfaces de chat y agentes, flujos que generan confianza y design systems para startups de IA en Estados Unidos.',
    keywords:
      'diseño UX para productos de IA, diseño UX UI inteligencia artificial, agencia de diseño para startups de IA, diseño de interfaces de IA, UX para agentes de IA',
    subtitle: 'Diseño UX/UI para productos de IA',
    accent: 'Productos de IA',
    target: 'productos de IA',
    hero: 'Tu modelo puede hacer muchísimo, pero si el usuario no entiende qué pedirle ni puede confiar en lo que responde, no lo vuelve a abrir. Diseñamos la experiencia que convierte un modelo potente en un producto que la gente entiende, usa y recomienda.',
    intro:
      'Hacemos el diseño UX/UI de productos con IA —copilotos, agentes y herramientas— para startups de IA y equipos de producto en Estados Unidos que los llevan a usuarios reales.',
    items: [
      {
        title: 'Interfaces de chat y agentes',
        description:
          'Conversaciones, sugerencias y estados de espera diseñados para que el usuario sepa qué pedir y qué está haciendo el sistema.',
        bullets: ['Diseño conversacional', 'Estados de carga y progreso', 'Sugerencias y atajos'],
      },
      {
        title: 'Confianza y control',
        description:
          'Fuentes, confirmaciones, edición y deshacer: los patrones que hacen que un usuario confíe en lo que la IA propone.',
        bullets: ['Fuentes y explicaciones', 'Confirmar antes de actuar', 'Edición y deshacer'],
      },
      {
        title: 'Onboarding que enseña',
        description:
          'El primer uso es donde se gana o se pierde a un usuario de IA. Diseñamos onboarding que muestra el valor en minutos.',
        bullets: ['Primer uso guiado', 'Ejemplos y plantillas', 'Activación medible'],
      },
      {
        title: 'Design system para crecer',
        description:
          'Componentes y documentación para que tu equipo lance funciones nuevas cada semana sin perder consistencia.',
        bullets: ['Librería de componentes', 'Patrones de IA documentados', 'Listo para desarrollo'],
      },
    ],
    research:
      'Revisamos tu producto, tus métricas y cómo lo usan hoy tus usuarios para encontrar dónde se pierden y en qué no confían.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de un producto de IA?',
    costScope:
      'cuántos flujos y pantallas, si incluye investigación con usuarios y design system, y si el trabajo es por proyecto o continuo dentro de tu equipo',
    faqs: [
      {
        question: '¿Qué tiene de distinto diseñar un producto de IA?',
        answer:
          'Que la respuesta no siempre es la misma ni siempre es correcta. El diseño tiene que ayudar al usuario a pedir bien, entender qué hizo el sistema y corregirlo fácil cuando se equivoca.',
      },
      {
        question: '¿Trabajan con nuestro equipo de ingeniería e investigación?',
        answer:
          'Sí. Diseñamos de la mano con quienes construyen el modelo y el producto para que lo que se diseña sea posible y se entregue rápido.',
      },
    ],
    remoteWho: 'startups de IA',
    proofText:
      'Proyectos reales de productos digitales en desarrollo de software y finanzas. Es el estándar con el que diseñaríamos tu producto.',
    howTo: 'la experiencia de un producto de inteligencia artificial',
    lead: {
      heading: 'Hablemos de tu producto de IA',
      description:
        'Cuéntanos qué hace tu producto y dónde se atoran tus usuarios. Te contactaremos lo antes posible en tu horario y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un copiloto para equipos de ventas y los usuarios no pasan del primer uso.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for AI Products and Startups',
    seoDescription:
      'UX/UI design for AI products: chat and agent interfaces, flows that build trust, and design systems for US AI startups, from a senior nearshore team.',
    keywords:
      'AI product design agency, UX design for AI products, AI UX design, UI design for AI startups, AI agent interface design',
    subtitle: 'UX/UI design for AI products',
    accent: 'AI Products',
    target: 'AI products',
    hero: 'Your model can do a lot, but if users don’t know what to ask or can’t trust what it returns, they won’t open it again. We design the experience that turns a powerful model into a product people understand, use, and recommend.',
    intro:
      'We design the UX/UI of AI products —copilots, agents, and tools— for AI startups and product teams in the US bringing them to real users.',
    items: [
      {
        title: 'Chat and agent interfaces',
        description:
          'Conversations, suggestions, and waiting states designed so users know what to ask and what the system is doing.',
        bullets: ['Conversational design', 'Loading and progress states', 'Suggestions and shortcuts'],
      },
      {
        title: 'Trust and control',
        description:
          'Sources, confirmations, editing, and undo: the patterns that make users trust what the AI proposes.',
        bullets: ['Sources and explanations', 'Confirm before acting', 'Edit and undo'],
      },
      {
        title: 'Onboarding that teaches',
        description:
          'First use is where an AI product wins or loses a user. We design onboarding that shows value in minutes.',
        bullets: ['Guided first use', 'Examples and templates', 'Measurable activation'],
      },
      {
        title: 'A design system built to scale',
        description:
          'Components and documentation so your team ships new features every week without losing consistency.',
        bullets: ['Component library', 'Documented AI patterns', 'Ready for engineering'],
      },
    ],
    research:
      'We review your product, your metrics, and how users use it today to find where they get lost and what they don’t trust.',
    costQuestion: 'How much does UX/UI design for an AI product cost?',
    costScope:
      'how many flows and screens, whether it includes user research and a design system, and whether the work is a project or ongoing inside your team',
    faqs: [
      {
        question: 'What is different about designing an AI product?',
        answer:
          'The answer is not always the same or always right. Design has to help users ask well, understand what the system did, and correct it easily when it gets it wrong.',
      },
      {
        question: 'Do you work with our engineering and research teams?',
        answer:
          'Yes. We design alongside the people building the model and the product so what we design is feasible and ships fast.',
      },
    ],
    remoteWho: 'AI startups',
    proofText:
      'Real digital product work in software development and finance. It is the standard we would bring to your product.',
    howTo: 'the experience of an artificial intelligence product',
    lead: {
      heading: 'Let’s talk about your AI product',
      description:
        'Tell us what your product does and where users get stuck. We will reach out as soon as possible during your business hours and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We built a copilot for sales teams and users drop off after the first session.',
    },
  },
});
