import { defineSector } from './build';

/**
 * UX/UI para plataformas de inversión — "diseño UX/UI para plataformas de
 * inversión" / "diseño de app de inversiones". Ángulo: el primer depósito,
 * riesgo explicado sin asustar y portafolios que se entienden. Prueba: Fortrade
 * (finanzas internacionales) y Bonanza, clientes reales.
 */
export const uxInversiones = defineSector({
  id: 'ux-inversiones',
  service: 'uxui',
  publishAt: '2026-10-17T00:00:00-06:00',
  slug: { es: 'para-plataformas-de-inversion', en: 'for-investment-platforms' },
  name: { es: 'UX/UI para inversión', en: 'UX/UI for investing' },
  proof: ['fortrade', 'bonanza', 'monetix'],
  es: {
    seoTitle: 'Diseño UX/UI para Plataformas de Inversión',
    seoDescription:
      'Diseño UX/UI para plataformas de inversión, trading y gestión patrimonial: onboarding claro, riesgo bien explicado y portafolios que se entienden.',
    keywords:
      'diseño UX/UI para plataformas de inversión, diseño app de inversiones, UX trading, diseño gestión patrimonial, UX wealthtech, diseño broker en línea',
    subtitle: 'Diseño UX/UI para plataformas de inversión',
    accent: 'Inversión',
    target: 'plataformas de inversión',
    hero: 'Invertir da miedo si no se entiende. Entre abrir la cuenta y hacer el primer depósito se pierde la mayoría de los usuarios. Diseñamos plataformas que explican el riesgo sin asustar, llevan al usuario a su primera inversión y le muestran con claridad cómo va su dinero.',
    stat: { value: 'Inversión', label: 'ya trabajamos con marcas financieras como Fortrade y Bonanza' },
    intro:
      'Diseñamos para brokers, plataformas de trading, fondos y gestores patrimoniales. Cada proyecto parte del perfil de tu inversionista y de lo que necesita entender para decidir.',
    items: [
      {
        title: 'Del registro al primer depósito',
        description:
          'Apertura de cuenta, perfil de inversionista y primer depósito diseñados para completarse rápido y con confianza.',
        bullets: ['Apertura y verificación', 'Perfil de inversionista', 'Primer depósito sin fricción'],
      },
      {
        title: 'Riesgo que se entiende',
        description:
          'Productos, rendimientos y riesgos explicados con claridad y sin promesas, para que el usuario decida informado.',
        bullets: ['Fichas de producto claras', 'Riesgo y comisiones visibles', 'Simuladores y comparadores'],
      },
      {
        title: 'Portafolios y mercados legibles',
        description:
          'Gráficas, movimientos y posiciones organizados para que cualquier usuario sepa cómo va su dinero de un vistazo.',
        bullets: ['Dashboard de portafolio', 'Gráficas y datos de mercado', 'Órdenes y alertas'],
      },
      {
        title: 'Sistema de diseño y marca',
        description:
          'Un sistema de componentes para crecer la plataforma en web y móvil, y una marca que transmita solidez en cada pantalla.',
        bullets: ['Biblioteca de componentes', 'Web y app móvil', 'Identidad de marca según el alcance'],
      },
    ],
    research:
      'Entendemos a tus inversionistas: dónde abandonan la apertura, qué no entienden de tus productos, entrevistas y revisión de la experiencia actual.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una plataforma de inversión?',
    costScope:
      'cuántos productos y flujos, si incluye trading o solo inversión, si es web, app o ambas y si necesitas sistema de diseño',
    faqs: [
      {
        question: '¿Diseñan para inversionistas principiantes y avanzados?',
        answer:
          'Sí. Definimos en la investigación qué necesita cada perfil y diseñamos la plataforma para que el principiante no se pierda y el avanzado no se sienta limitado.',
      },
      {
        question: '¿Cómo se cuidan los requisitos regulatorios?',
        answer:
          'Diseñamos los flujos y avisos con los requisitos que tus áreas legal y de cumplimiento nos indiquen, como perfiles de riesgo o divulgaciones obligatorias, sin arruinar la experiencia.',
      },
    ],
    remoteWho: 'plataformas de inversión',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en finanzas e inversión. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu plataforma.',
    howTo: 'la experiencia y la interfaz de una plataforma de inversión',
    lead: {
      heading: 'Hablemos de tu plataforma de inversión',
      description:
        'Cuéntanos qué productos ofreces y en qué etapa está tu plataforma. Te contactaremos lo antes posible para entenderla y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Muchos usuarios abren cuenta pero nunca hacen su primer depósito.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Investment Platforms',
    seoDescription:
      'UX/UI design for investment, trading, and wealth management platforms: clear onboarding, risk explained well, and portfolios people understand.',
    keywords:
      'UX/UI design for investment platforms, investing app design, trading UX, wealth management design, wealthtech UX, online broker design',
    subtitle: 'UX/UI design for investment platforms',
    accent: 'Investing',
    target: 'investment platforms',
    hero: 'Investing is scary when you do not understand it. Most users are lost between opening an account and making a first deposit. We design platforms that explain risk without scaring people, lead them to their first investment, and show clearly how their money is doing.',
    stat: { value: 'Investing', label: 'we already work with financial brands like Fortrade and Bonanza' },
    intro:
      'We design for brokers, trading platforms, funds, and wealth managers. Every project starts from your investor profile and what they need to understand to decide.',
    items: [
      {
        title: 'From sign-up to first deposit',
        description:
          'Account opening, investor profile, and first deposit designed to be completed quickly and confidently.',
        bullets: ['Account opening and verification', 'Investor profile', 'Frictionless first deposit'],
      },
      {
        title: 'Risk people understand',
        description:
          'Products, returns, and risks explained clearly and without promises, so users decide informed.',
        bullets: ['Clear product pages', 'Visible risk and fees', 'Simulators and comparisons'],
      },
      {
        title: 'Readable portfolios and markets',
        description:
          'Charts, transactions, and positions organized so any user knows how their money is doing at a glance.',
        bullets: ['Portfolio dashboard', 'Charts and market data', 'Orders and alerts'],
      },
      {
        title: 'Design system and brand',
        description:
          'A component system to grow the platform on web and mobile, and a brand that conveys solidity on every screen.',
        bullets: ['Component library', 'Web and mobile app', 'Brand identity based on project scope'],
      },
    ],
    research:
      'We learn about your investors: where they abandon account opening, what they do not understand about your products, interviews, and a review of the current experience.',
    costQuestion: 'How much does UX/UI design for an investment platform cost?',
    costScope:
      'how many products and flows, whether it includes trading or only investing, whether it is web, mobile, or both, and whether you need a design system',
    faqs: [
      {
        question: 'Do you design for both beginner and advanced investors?',
        answer:
          'Yes. We define what each profile needs during research and design the platform so beginners do not get lost and advanced users do not feel limited.',
      },
      {
        question: 'How are regulatory requirements handled?',
        answer:
          'We design flows and notices around the requirements your legal and compliance teams give us, such as risk profiles or mandatory disclosures, without ruining the experience.',
      },
    ],
    remoteWho: 'investment platforms',
    proofText:
      'Real identity, product, and website work in finance and investing. The same care we put into every brand is what we would bring to your platform.',
    howTo: 'the experience and interface of an investment platform',
    lead: {
      heading: 'Let’s talk about your investment platform',
      description:
        'Tell us which products you offer and what stage your platform is in. We will reach out as soon as possible to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. Many users open an account but never make their first deposit.',
    },
  },
});
