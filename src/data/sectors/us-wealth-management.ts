import { defineSector } from './build';

/**
 * Wealth management (EE. UU.) — "wealth management website design" /
 * "financial advisor website design". Ángulo: RIAs y firmas de patrimonio que
 * venden confianza a clientes de alto patrimonio; sitio sobrio, claro y con
 * portal de clientes. Combina web + UX (portal). Sin prometer rendimientos.
 */
export const usWealthManagement = defineSector({
  id: 'us-wealth-management',
  country: 'US',
  publishAt: '2026-10-22T00:00:00-06:00',
  slug: { es: 'para-gestion-patrimonial', en: 'for-wealth-management-firms' },
  name: { es: 'Gestión patrimonial', en: 'Wealth management firms' },
  proof: ['fortrade', 'monetix', 'bonanza'],
  es: {
    seoTitle: 'Diseño Web para Firmas de Gestión Patrimonial y Asesores Financieros',
    seoDescription:
      'Diseño web para firmas de gestión patrimonial y RIAs en EE. UU.: confianza a primera vista, filosofía de inversión clara y portal de clientes a la medida.',
    keywords:
      'diseño web gestión patrimonial, sitio web asesor financiero, diseño web wealth management, página web RIA, portal de clientes asesor financiero',
    subtitle: 'Diseño web para gestión patrimonial',
    accent: 'Gestión Patrimonial',
    target: 'firmas de gestión patrimonial',
    hero: 'Una familia con patrimonio importante no le entrega su dinero a quien no le transmite confianza en el primer minuto. Si tu sitio se ve genérico o anticuado, pierdes la conversación antes de tenerla. Diseñamos sitios sobrios y claros que reflejan el criterio con el que cuidas el patrimonio de tus clientes.',
    intro:
      'Diseñamos páginas web para firmas de gestión patrimonial, RIAs independientes y equipos de asesores en mercados como Nueva York, Greenwich, Boston, Dallas y Palm Beach.',
    items: [
      {
        title: 'Confianza a primera vista',
        description:
          'Un diseño sobrio, actual y cuidado que se ve a la altura de los clientes que atiendes, en escritorio y en celular.',
        bullets: ['Diseño institucional propio', 'Equipo y credenciales', 'Divulgaciones a la vista'],
      },
      {
        title: 'Tu filosofía, explicada',
        description:
          'Cómo inviertes, a quién atiendes y cómo cobras, explicado con claridad para que el cliente correcto se identifique.',
        bullets: ['Filosofía de inversión', 'Clientes que atiendes', 'Proceso de trabajo'],
      },
      {
        title: 'Portal de clientes',
        description:
          'Diseñamos y desarrollamos a la medida el acceso de clientes, y diseñamos los reportes para que se vean tan cuidados como el sitio.',
        bullets: ['Diseño de reportes', 'Experiencia en celular'],
        custom: ['Acceso de clientes'],
      },
      {
        title: 'Contenido que posiciona',
        description:
          'Artículos y perspectivas de mercado estructurados para Google y para las búsquedas con IA, con la revisión de tu equipo de cumplimiento.',
        bullets: ['Blog y perspectivas', 'Estructura para IA y Google', 'Flujo de revisión de cumplimiento'],
      },
    ],
    diagnosis: 'Una videollamada para entender a quién atiendes, cómo trabajas y qué tiene que transmitir el sitio.',
    pages: 'filosofía, servicios, equipo, perspectivas, acceso de clientes, divulgaciones y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una firma de gestión patrimonial?',
    costScope:
      'cuántas páginas y perfiles, si incluye el portal de clientes, si lleva blog y si también necesitas marca',
    faqs: [
      {
        question: '¿Cómo manejan las reglas de cumplimiento?',
        answer:
          'Diseñamos el sitio y los textos con los requisitos que tu equipo de cumplimiento nos indique, y dejamos un flujo para que lo revisen antes de publicar.',
      },
      {
        question: '¿Pueden rediseñar el portal que ya tenemos?',
        answer:
          'Sí. Diseñamos la experiencia del portal y la desarrollamos a la medida, o la entregamos lista para que tu proveedor de tecnología la implemente.',
      },
    ],
    aiSubject: 'mi firma',
    remoteWho: 'firmas de gestión patrimonial',
    proofText:
      'Proyectos reales de identidad, sitios y productos digitales en finanzas y finanzas internacionales. Es el estándar con el que trabajaríamos tu firma.',
    howTo: 'el sitio web de una firma de gestión patrimonial',
    lead: {
      heading: 'Hablemos de tu firma',
      description:
        'Cuéntanos a quién atiendes y qué necesita transmitir tu sitio. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una RIA en Greenwich y nuestro sitio ya no refleja a la firma que somos hoy.',
    },
  },
  en: {
    seoTitle: 'Wealth Management & Financial Advisor Website Design',
    seoDescription:
      'Websites for wealth management firms, RIAs, and advisors in the US: trust at first sight, a clear investment philosophy, and a custom client portal.',
    keywords:
      'wealth management website design, financial advisor website design, RIA website design, wealth management web design agency, financial advisor web design',
    subtitle: 'Web design for wealth management',
    accent: 'Wealth Management',
    target: 'wealth management firms',
    hero: 'A family with significant wealth won’t hand it to someone who doesn’t earn their trust in the first minute. If your site looks generic or dated, you lose the conversation before it starts. We design sober, clear websites that reflect the judgment you bring to your clients’ wealth.',
    intro:
      'We design websites for wealth management firms, independent RIAs, and advisor teams in markets like New York, Greenwich, Boston, Dallas, and Palm Beach.',
    items: [
      {
        title: 'Trust at first sight',
        description:
          'A sober, modern, carefully crafted design that matches the clients you serve, on desktop and on mobile.',
        bullets: ['Original institutional design', 'Team and credentials', 'Disclosures in plain sight'],
      },
      {
        title: 'Your philosophy, explained',
        description:
          'How you invest, who you serve, and how you charge, explained clearly so the right client recognizes themselves.',
        bullets: ['Investment philosophy', 'Who you serve', 'How you work'],
      },
      {
        title: 'Client portal',
        description:
          'We design and custom-build the client login, and design the reports so they look as polished as the site.',
        bullets: ['Report design', 'Mobile experience'],
        custom: ['Client login'],
      },
      {
        title: 'Content that ranks',
        description:
          'Articles and market insights structured for Google and AI search, with a review step for your compliance team.',
        bullets: ['Blog and insights', 'Structure for AI and Google', 'Compliance review workflow'],
      },
    ],
    diagnosis: 'A video call to understand who you serve, how you work, and what the site needs to convey.',
    pages: 'philosophy, services, team, insights, client login, disclosures, and contact',
    costQuestion: 'How much does a wealth management website cost?',
    costScope:
      'how many pages and profiles, whether it includes the client portal, whether it has a blog, and whether you also need a brand',
    faqs: [
      {
        question: 'How do you handle compliance rules?',
        answer:
          'We design the site and copy around the requirements your compliance team gives us, and set up a step for them to review before anything goes live.',
      },
      {
        question: 'Can you redesign the portal we already have?',
        answer:
          'Yes. We design the portal experience and custom-build it, or hand it off ready for your technology provider to implement.',
      },
    ],
    aiSubject: 'my firm',
    remoteWho: 'wealth management firms',
    proofText:
      'Real identity, website, and digital product work in finance and international finance. It is the standard we would bring to your firm.',
    howTo: 'a wealth management firm website',
    lead: {
      heading: 'Let’s talk about your firm',
      description:
        'Tell us who you serve and what your site needs to convey. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an RIA in Greenwich and our site no longer reflects the firm we are today.',
    },
  },
});
