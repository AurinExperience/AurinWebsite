import { defineSector } from './build';

/**
 * Wealthtech (EE. UU.) — "wealthtech UX design" / "UX design for wealth
 * management platforms". Ángulo: plataformas para asesores e inversionistas de
 * alto patrimonio donde la claridad de los datos es confianza. Distinta de
 * "for-investment-platforms" (México) por mercado y cliente.
 */
export const usUxWealthtech = defineSector({
  id: 'us-ux-wealthtech',
  service: 'uxui',
  country: 'US',
  publishAt: '2026-10-24T00:00:00-06:00',
  slug: { es: 'para-wealthtech', en: 'for-wealthtech' },
  name: { es: 'Wealthtech', en: 'Wealthtech' },
  proof: ['monetix', 'fortrade', 'debiti'],
  es: {
    seoTitle: 'Diseño UX/UI para Wealthtech y Plataformas de Gestión Patrimonial',
    seoDescription:
      'Diseño UX/UI para plataformas wealthtech en Estados Unidos: portales de inversionistas, herramientas para asesores y reportes que convierten datos complejos en decisiones claras.',
    keywords:
      'diseño UX wealthtech, diseño UX UI gestión patrimonial, diseño de plataformas para asesores financieros, UX portal de inversionistas, diseño de reportes financieros',
    subtitle: 'Diseño UX/UI para wealthtech',
    accent: 'Wealthtech',
    target: 'plataformas wealthtech',
    hero: 'Un inversionista de alto patrimonio no tolera un portal confuso, y un asesor no tiene tiempo para pelear con su herramienta. Cuando los datos no se entienden, la confianza se va con ellos. Diseñamos plataformas que convierten portafolios complejos en información clara para decidir.',
    intro:
      'Diseñamos para empresas wealthtech, plataformas para asesores e instituciones de gestión patrimonial en Estados Unidos que necesitan diseño de producto senior.',
    items: [
      {
        title: 'Portales de inversionistas',
        description:
          'Patrimonio, rendimiento y documentos presentados con claridad, en escritorio y en celular.',
        bullets: ['Vista del patrimonio', 'Documentos y estados de cuenta', 'Experiencia en celular'],
      },
      {
        title: 'Herramientas para asesores',
        description:
          'Flujos de trabajo para asesores: clientes, propuestas, rebalanceos y reportes, sin pasos de más.',
        bullets: ['Gestión de clientes', 'Propuestas y planes', 'Flujos sin fricción'],
      },
      {
        title: 'Visualización de datos',
        description:
          'Gráficas y reportes que se entienden a la primera, con el nivel de detalle que cada usuario necesita.',
        bullets: ['Gráficas legibles', 'Reportes para clientes', 'Detalle bajo demanda'],
      },
      {
        title: 'Design system financiero',
        description:
          'Componentes para tablas, cifras y estados que mantienen el producto consistente mientras crece.',
        bullets: ['Componentes de datos', 'Tokens y documentación', 'Listo para desarrollo'],
      },
    ],
    research:
      'Entrevistamos a asesores e inversionistas y revisamos tu producto para encontrar dónde se pierden y qué información necesitan primero.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una plataforma wealthtech?',
    costScope:
      'cuántos flujos y pantallas, si incluye investigación con usuarios, visualización de datos y design system, y si el trabajo es por proyecto o continuo',
    faqs: [
      {
        question: '¿Cómo manejan los requisitos regulatorios?',
        answer:
          'Diseñamos los flujos y avisos con los requisitos que tus equipos legal y de cumplimiento nos indiquen, sin que estorben la experiencia.',
      },
      {
        question: '¿Diseñan para asesores y para sus clientes a la vez?',
        answer:
          'Sí. Son dos experiencias distintas sobre los mismos datos, y diseñarlas juntas evita que el cliente vea algo que el asesor no puede explicar.',
      },
    ],
    remoteWho: 'empresas wealthtech',
    proofText:
      'Proyectos reales de productos digitales en finanzas y finanzas internacionales. Es el estándar con el que diseñaríamos tu plataforma.',
    howTo: 'una plataforma wealthtech',
    lead: {
      heading: 'Hablemos de tu plataforma',
      description:
        'Cuéntanos qué hace tu plataforma y quién la usa. Te contactaremos lo antes posible en tu horario y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una plataforma para RIAs y los asesores dicen que los reportes son difíciles de explicar.',
    },
  },
  en: {
    seoTitle: 'Wealthtech UX/UI Design',
    seoDescription:
      'UX/UI design for wealthtech platforms in the US: investor portals, advisor tools, and reporting that turns complex data into clear decisions.',
    keywords:
      'wealthtech UX design, wealth management platform design, financial advisor software UX, investor portal design, financial dashboard UX design',
    subtitle: 'UX/UI design for wealthtech',
    accent: 'Wealthtech',
    target: 'wealthtech platforms',
    hero: 'A high-net-worth investor won’t tolerate a confusing portal, and an advisor has no time to fight their tools. When the data doesn’t make sense, trust goes with it. We design platforms that turn complex portfolios into clear information for decisions.',
    intro:
      'We design for wealthtech companies, advisor platforms, and wealth management institutions in the US that need senior product design.',
    items: [
      {
        title: 'Investor portals',
        description: 'Net worth, performance, and documents presented clearly, on desktop and on mobile.',
        bullets: ['Net worth overview', 'Documents and statements', 'Mobile experience'],
      },
      {
        title: 'Advisor tools',
        description:
          'Advisor workflows: clients, proposals, rebalancing, and reports, without extra steps.',
        bullets: ['Client management', 'Proposals and plans', 'Frictionless workflows'],
      },
      {
        title: 'Data visualization',
        description:
          'Charts and reports people understand at first glance, with the level of detail each user needs.',
        bullets: ['Readable charts', 'Client reports', 'Detail on demand'],
      },
      {
        title: 'A financial design system',
        description:
          'Components for tables, figures, and states that keep the product consistent as it grows.',
        bullets: ['Data components', 'Tokens and documentation', 'Ready for engineering'],
      },
    ],
    research:
      'We interview advisors and investors and review your product to find where they get lost and what information they need first.',
    costQuestion: 'How much does wealthtech UX/UI design cost?',
    costScope:
      'how many flows and screens, whether it includes user research, data visualization, and a design system, and whether the work is a project or ongoing',
    faqs: [
      {
        question: 'How do you handle regulatory requirements?',
        answer:
          'We design flows and notices around the requirements your legal and compliance teams give us, without getting in the way of the experience.',
      },
      {
        question: 'Do you design for advisors and their clients at the same time?',
        answer:
          'Yes. They are two different experiences on the same data, and designing them together keeps clients from seeing something advisors can’t explain.',
      },
    ],
    remoteWho: 'wealthtech companies',
    proofText:
      'Real digital product work in finance and international finance. It is the standard we would bring to your platform.',
    howTo: 'a wealthtech platform',
    lead: {
      heading: 'Let’s talk about your platform',
      description:
        'Tell us what your platform does and who uses it. We will reach out as soon as possible during your business hours and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a platform for RIAs and advisors say the reports are hard to explain.',
    },
  },
});
