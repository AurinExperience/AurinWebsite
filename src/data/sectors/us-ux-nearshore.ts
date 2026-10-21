import { defineSector } from './build';

/**
 * Nearshore UX/UI (EE. UU.) — "nearshore UX design agency" / "UX UI design
 * team in Mexico". Ángulo: startups y empresas de software con inversión que
 * necesitan diseño de producto senior en su horario. Sin apps móviles: Aurin
 * diseña y entrega a desarrollo (ver SECTOR_COMMON.ux).
 */
export const usUxNearshore = defineSector({
  id: 'us-ux-nearshore',
  service: 'uxui',
  country: 'US',
  publishAt: '2026-10-22T00:00:00-06:00',
  slug: { es: 'nearshore-para-startups-de-estados-unidos', en: 'nearshore-for-us-startups' },
  name: { es: 'Startups de EE. UU. (nearshore)', en: 'US startups (nearshore)' },
  proof: ['ancient', 'monetix', 'debiti'],
  es: {
    seoTitle: 'Diseño UX/UI Nearshore para Startups de Estados Unidos',
    seoDescription:
      'Equipo de diseño UX/UI nearshore en México para startups y empresas de software de Estados Unidos: investigación, flujos, interfaces y design systems en tu horario.',
    keywords:
      'agencia UX nearshore, diseño UX UI nearshore, diseño de producto México, equipo de diseño UX en México, diseño UX para startups',
    subtitle: 'Diseño UX/UI nearshore para startups de Estados Unidos',
    accent: 'Startups de EE. UU.',
    target: 'startups de Estados Unidos',
    hero: 'Tu roadmap no espera a que contrates un diseñador senior en San Francisco. Somos un equipo de diseño de producto en México, en tu horario y en inglés, que se integra a tu equipo para diseñar las pantallas que tus usuarios entienden a la primera.',
    intro:
      'Trabajamos con startups con inversión y empresas de software de Estados Unidos que necesitan diseño de producto senior: desde validar un MVP hasta ordenar un producto que creció sin sistema.',
    items: [
      {
        title: 'Investigación con usuarios',
        description:
          'Entrevistas, pruebas de usabilidad y análisis de tu producto actual para decidir con datos qué diseñar primero.',
        bullets: ['Entrevistas y pruebas de usabilidad', 'Auditoría de UX', 'Mapa de oportunidades'],
      },
      {
        title: 'Flujos y prototipos',
        description:
          'Onboarding, activación y los flujos que más mueven tus métricas, en prototipos navegables que validas antes de programar.',
        bullets: ['Onboarding y activación', 'Prototipos navegables', 'Validación con usuarios'],
      },
      {
        title: 'Design system',
        description:
          'Componentes, estilos y documentación para que tu equipo diseñe y programe más rápido y el producto se vea consistente.',
        bullets: ['Librería de componentes', 'Tokens y documentación', 'Listo para tu equipo de desarrollo'],
      },
      {
        title: 'Diseño embebido en tu equipo',
        description:
          'Trabajamos dentro de tus rituales: sprints, revisiones y canales de tu equipo, en horario de Estados Unidos.',
        bullets: ['Participación en sprints', 'Revisiones con producto e ingeniería', 'Comunicación en tus canales'],
      },
    ],
    research:
      'Revisamos tu producto, tus métricas y a tus usuarios para encontrar dónde se atoran y qué conviene diseñar primero.',
    costQuestion: '¿Cuánto cuesta un equipo de diseño UX/UI nearshore?',
    costScope:
      'cuántos flujos y pantallas, si incluye investigación con usuarios y design system, y si el trabajo es por proyecto o continuo dentro de tu equipo',
    faqs: [
      {
        question: '¿Trabajan por proyecto o de forma continua?',
        answer:
          'De las dos formas. Podemos diseñar un flujo o un MVP con alcance cerrado, o integrarnos a tu equipo de forma continua según lo que se acuerde en la cotización.',
      },
      {
        question: '¿Qué herramientas usan?',
        answer:
          'Diseñamos en Figma y nos adaptamos a las herramientas de tu equipo para tareas, documentación y comunicación.',
      },
    ],
    remoteWho: 'startups',
    proofText:
      'Proyectos reales de productos digitales en desarrollo de software y finanzas. Es el estándar con el que diseñaríamos tu producto.',
    howTo: 'un producto digital con un equipo de diseño nearshore',
    lead: {
      heading: 'Hablemos de tu producto',
      description:
        'Cuéntanos en qué etapa está tu producto y qué necesitas diseñar. Te contactamos en tu horario y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una startup SaaS en San Francisco y necesitamos rediseñar el onboarding.',
    },
  },
  en: {
    seoTitle: 'Nearshore UX/UI Design for US Startups',
    seoDescription:
      'Nearshore UX/UI design team in Mexico for US startups and software companies: research, flows, interfaces, and design systems on your business hours.',
    keywords:
      'nearshore UX design agency, nearshore UI UX design, product design team Mexico, UX design agency Mexico, UX design for startups',
    subtitle: 'Nearshore UX/UI design for US startups',
    accent: 'US Startups',
    target: 'US startups',
    hero: 'Your roadmap won’t wait for you to hire a senior designer in San Francisco. We are a product design team in Mexico, on your hours and in English, that plugs into your team to design screens your users get on the first try.',
    intro:
      'We work with venture-backed startups and US software companies that need senior product design: from validating an MVP to bringing order to a product that grew without a system.',
    items: [
      {
        title: 'User research',
        description:
          'Interviews, usability tests, and analysis of your current product to decide with data what to design first.',
        bullets: ['Interviews and usability testing', 'UX audit', 'Opportunity map'],
      },
      {
        title: 'Flows and prototypes',
        description:
          'Onboarding, activation, and the flows that move your metrics most, in clickable prototypes you validate before writing code.',
        bullets: ['Onboarding and activation', 'Clickable prototypes', 'User validation'],
      },
      {
        title: 'Design system',
        description:
          'Components, styles, and documentation so your team designs and ships faster and the product looks consistent.',
        bullets: ['Component library', 'Tokens and documentation', 'Ready for your engineers'],
      },
      {
        title: 'Design embedded in your team',
        description:
          'We work inside your rituals: sprints, reviews, and your team’s channels, on US business hours.',
        bullets: ['Sprint participation', 'Reviews with product and engineering', 'Communication in your channels'],
      },
    ],
    research:
      'We review your product, your metrics, and your users to find where they get stuck and what to design first.',
    costQuestion: 'How much does a nearshore UX/UI design team cost?',
    costScope:
      'how many flows and screens, whether it includes user research and a design system, and whether the work is a project or ongoing inside your team',
    faqs: [
      {
        question: 'Do you work per project or on an ongoing basis?',
        answer:
          'Both. We can design a flow or an MVP with a fixed scope, or join your team on an ongoing basis as agreed in the quote.',
      },
      {
        question: 'What tools do you use?',
        answer: 'We design in Figma and adapt to your team’s tools for tasks, documentation, and communication.',
      },
    ],
    remoteWho: 'startups',
    proofText:
      'Real digital product work in software development and finance. It is the standard we would bring to your product.',
    howTo: 'a digital product with a nearshore design team',
    lead: {
      heading: 'Let’s talk about your product',
      description:
        'Tell us what stage your product is in and what you need designed. We will reach out during your business hours and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a SaaS startup in San Francisco and need to redesign our onboarding.',
    },
  },
});
