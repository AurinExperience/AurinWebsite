import { defineSector } from './build';

/**
 * UX/UI para energía y utilities — "diseño UX/UI para energía" / "diseño de
 * plataformas para utilities". Ángulo: datos técnicos complejos para personas
 * no técnicas, monitoreo de activos y portales de clientes. Prueba: Mexico
 * Pacific, cliente real de energía.
 */
export const uxEnergia = defineSector({
  id: 'ux-energia',
  service: 'uxui',
  publishAt: '2026-10-18T00:00:00-06:00',
  slug: { es: 'para-energia', en: 'for-energy' },
  name: { es: 'UX/UI para energía', en: 'UX/UI for energy' },
  proof: ['mexicoPacific', 'grupoEstrella', 'ancient'],
  es: {
    seoTitle: 'Diseño UX/UI para Energía y Utilities',
    seoDescription:
      'Diseño UX/UI para empresas de energía y utilities: paneles de monitoreo claros, portales de clientes y datos técnicos que cualquiera entiende.',
    keywords:
      'diseño UX/UI para energía, UX utilities, diseño panel de monitoreo, diseño plataforma energética, portal de clientes energía, diseño SCADA',
    subtitle: 'Diseño UX/UI para energía y utilities',
    accent: 'Energía',
    target: 'empresas de energía',
    hero: 'Consumo, generación, alarmas y contratos: en energía los datos sobran, lo que falta es que se entiendan. Diseñamos paneles y portales donde operadores, directivos y clientes ven lo que importa y actúan a tiempo.',
    stat: { value: 'Energía', label: 'ya trabajamos con empresas como Mexico Pacific' },
    intro:
      'Diseñamos para generadoras, comercializadoras, empresas de energía renovable y utilities. Cada proyecto parte de quién consulta la información y qué decisión tiene que tomar con ella.',
    items: [
      {
        title: 'Paneles de monitoreo claros',
        description:
          'Activos, generación, consumo y alarmas organizados por prioridad, para ver lo crítico primero y no perderlo entre cientos de datos.',
        bullets: ['Dashboards por rol', 'Alarmas y excepciones', 'Gráficas e históricos'],
      },
      {
        title: 'Portal de clientes',
        description:
          'Consumo, facturas, contratos y reportes explicados para quien no es técnico, con autoservicio para lo más frecuente.',
        bullets: ['Consumo y facturación', 'Contratos y documentos', 'Solicitudes y seguimiento'],
      },
      {
        title: 'Datos técnicos que se entienden',
        description:
          'Visualizaciones y lenguaje claro para que un director o un cliente entienda en segundos lo que un ingeniero ve en tablas.',
        bullets: ['Visualización de datos', 'Reportes ejecutivos', 'Lenguaje claro'],
      },
      {
        title: 'Sistema de diseño industrial',
        description:
          'Un sistema de componentes para todas las herramientas internas y externas de la empresa, consistentes y fáciles de ampliar.',
        bullets: ['Biblioteca de componentes', 'Herramientas internas y externas', 'Web, escritorio y móvil'],
      },
    ],
    research:
      'Entendemos a cada usuario y la información que necesita: entrevistas con operación, dirección y clientes, y revisión de las herramientas actuales.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una plataforma de energía?',
    costScope:
      'cuántos tipos de usuario, paneles y flujos, si incluye portal de clientes y si necesitas sistema de diseño',
    faqs: [
      {
        question: '¿Pueden trabajar con datos de nuestros sistemas actuales?',
        answer:
          'Sí. Diseñamos sobre los datos que ya generan tus sistemas y coordinamos con tu equipo técnico cómo integrarlos en cada etapa.',
      },
      {
        question: '¿Diseñan también el sitio corporativo?',
        answer:
          'Sí. Podemos diseñar el sitio y la marca de la empresa junto con las plataformas, para que todo se vea y se sienta igual de sólido.',
      },
    ],
    remoteWho: 'empresas de energía',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en energía, construcción y software. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu empresa.',
    howTo: 'la experiencia y la interfaz de una plataforma de energía',
    lead: {
      heading: 'Hablemos de tu plataforma',
      description:
        'Cuéntanos qué información manejan y quién la usa. Te contactaremos lo antes posible para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un panel de monitoreo de plantas que solo entienden los ingenieros.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Energy and Utilities',
    seoDescription:
      'UX/UI design for energy companies and utilities: clear monitoring dashboards, customer portals, and technical data anyone can understand.',
    keywords:
      'UX/UI design for energy, utilities UX, monitoring dashboard design, energy platform design, energy customer portal, SCADA design',
    subtitle: 'UX/UI design for energy and utilities',
    accent: 'Energy',
    target: 'energy companies',
    hero: 'Consumption, generation, alarms, and contracts: in energy there is plenty of data, what is missing is understanding it. We design dashboards and portals where operators, executives, and customers see what matters and act in time.',
    stat: { value: 'Energy', label: 'we already work with companies like Mexico Pacific' },
    intro:
      'We design for generators, energy retailers, renewable energy companies, and utilities. Every project starts from who looks at the information and which decision they need to make with it.',
    items: [
      {
        title: 'Clear monitoring dashboards',
        description:
          'Assets, generation, consumption, and alarms organized by priority, so critical items come first and do not get lost among hundreds of data points.',
        bullets: ['Dashboards by role', 'Alarms and exceptions', 'Charts and history'],
      },
      {
        title: 'Customer portal',
        description:
          'Consumption, invoices, contracts, and reports explained for non-technical people, with self-service for common requests.',
        bullets: ['Consumption and billing', 'Contracts and documents', 'Requests and tracking'],
      },
      {
        title: 'Technical data people understand',
        description:
          'Visualizations and plain language so an executive or a customer understands in seconds what an engineer sees in tables.',
        bullets: ['Data visualization', 'Executive reports', 'Plain language'],
      },
      {
        title: 'An industrial design system',
        description:
          'A component system for all the company’s internal and external tools, consistent and easy to extend.',
        bullets: ['Component library', 'Internal and external tools', 'Web, desktop, and mobile'],
      },
    ],
    research:
      'We learn about each user and the information they need: interviews with operations, leadership, and customers, and a review of current tools.',
    costQuestion: 'How much does UX/UI design for an energy platform cost?',
    costScope:
      'how many user types, dashboards, and flows, whether it includes a customer portal, and whether you need a design system',
    faqs: [
      {
        question: 'Can you work with data from our current systems?',
        answer:
          'Yes. We design on top of the data your systems already produce and coordinate with your technical team how to integrate it at each stage.',
      },
      {
        question: 'Do you also design the corporate website?',
        answer:
          'Yes. We can design the company website and brand alongside the platforms, so everything looks and feels equally solid.',
      },
    ],
    remoteWho: 'energy companies',
    proofText:
      'Real identity, product, and website work in energy, construction, and software. The same care we put into every brand is what we would bring to your company.',
    howTo: 'the experience and interface of an energy platform',
    lead: {
      heading: 'Let’s talk about your platform',
      description:
        'Tell us what information you handle and who uses it. We will reach out as soon as possible to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a plant monitoring dashboard only our engineers understand.',
    },
  },
});
