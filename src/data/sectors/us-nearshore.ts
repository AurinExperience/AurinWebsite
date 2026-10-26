import { defineSector } from './build';

/**
 * Nearshore (EE. UU.) — "nearshore web design agency" / "web design agency in
 * Mexico for US companies". Ángulo: el comprador estadounidense que ya decidió
 * contratar fuera y busca un estudio confiable en su mismo horario. Premium,
 * nunca "barato": estándar de agencia de NY/LA con mejor valor.
 */
export const usNearshore = defineSector({
  id: 'us-nearshore',
  country: 'US',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'nearshore-para-empresas-de-estados-unidos', en: 'nearshore-for-us-companies' },
  name: { es: 'Empresas de EE. UU. (nearshore)', en: 'US companies (nearshore)' },
  proof: ['elite', 'mexicoPacific', 'fortrade'],
  es: {
    seoTitle: 'Agencia de Diseño Web Nearshore para Empresas de Estados Unidos',
    seoDescription:
      'Estudio de diseño web nearshore en México para empresas de Estados Unidos: mismo horario, equipo senior en inglés y estándar de agencia de Nueva York con mejor valor.',
    keywords:
      'agencia de diseño web nearshore, diseño web nearshore México, agencia de diseño web en México para Estados Unidos, outsourcing diseño web México',
    subtitle: 'Diseño web nearshore para empresas de Estados Unidos',
    accent: 'Empresas de EE. UU.',
    target: 'empresas de Estados Unidos',
    hero: 'Contratar una agencia en Nueva York o San Francisco cuesta lo que cuesta su renta. Contratar al otro lado del mundo significa juntas a medianoche y entregas que no se parecen a lo que pediste. Somos un estudio en México que trabaja en tu horario, en inglés y con el nivel de diseño de una agencia de primera.',
    intro:
      'Diseñamos para empresas de Estados Unidos que quieren un equipo de diseño senior y dedicado sin pagar la estructura de una agencia local: marcas en crecimiento, empresas de servicios de alto valor y equipos de marketing que necesitan más manos.',
    items: [
      {
        title: 'Sitios web de nivel agencia',
        description:
          'Estrategia, diseño y desarrollo de sitios que se ven y se sienten premium, rápidos y listos para posicionar en Google y en las búsquedas con IA.',
        bullets: ['Estrategia de contenido y estructura', 'Diseño a la medida, sin plantillas', 'Desarrollo rápido y medible'],
      },
      {
        title: 'Tu horario, tu idioma',
        description:
          'México comparte horario con Estados Unidos: juntas por videollamada en tus horas de trabajo y comunicación en inglés.',
        bullets: ['Juntas en horario de EE. UU.', 'Equipo que trabaja en inglés', 'Avances compartidos en cada etapa'],
      },
      {
        title: 'Extensión de tu equipo de marketing',
        description:
          'Landing pages, rediseños y piezas de campaña para tu equipo interno, con el mismo estándar visual en todo.',
        bullets: ['Landing pages para campañas', 'Rediseño por etapas', 'Mantenimiento mensual si lo necesitas'],
      },
      {
        title: 'Marca y sitio en un solo equipo',
        description:
          'Si tu marca también necesita trabajo, la identidad y el sitio salen del mismo estudio y se ven como una sola cosa.',
        bullets: ['Identidad y manual de marca', 'Sistema visual para web y redes', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para entender tu empresa, tu mercado y qué tiene que lograr el sitio.',
    pages: 'inicio, servicios, casos, nosotros, contacto y las landing pages que pida tu estrategia',
    costQuestion: '¿Cuánto cuesta contratar una agencia de diseño web nearshore?',
    costScope:
      'cuántas páginas y secciones, si incluye marca y si necesitas mantenimiento mensual',
    faqs: [
      {
        question: '¿Qué significa nearshore?',
        answer:
          'Que tu equipo está en un país cercano y en tu mismo horario, en lugar de al otro lado del mundo. Con México trabajas en tiempo real, sin esperar un día por cada respuesta.',
      },
      {
        question: '¿Cómo se ve el trabajo día a día?',
        answer:
          'Una persona del estudio es tu contacto directo. Nos reunimos por videollamada en cada etapa, compartimos avances en enlaces que puedes revisar con tu equipo y ajustamos según lo acordado en la cotización.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'empresas',
    proofText:
      'Proyectos reales de identidad y sitios web en salud, energía y finanzas internacionales. Es el estándar con el que trabajaríamos tu empresa.',
    howTo: 'el sitio web de una empresa de Estados Unidos con un estudio nearshore',
    lead: {
      heading: 'Hablemos de tu proyecto',
      description:
        'Cuéntanos qué necesita tu empresa. Te contactaremos lo antes posible en tu horario para entender el proyecto y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una empresa en Austin y queremos rediseñar el sitio con un equipo dedicado.',
    },
  },
  en: {
    seoTitle: 'Nearshore Web Design Agency for US Companies',
    seoDescription:
      'Nearshore web design studio in Mexico for US companies: your business hours, a senior English-speaking team, and New York agency standards with better value.',
    keywords:
      'nearshore web design agency, nearshore web design Mexico, web design agency in Mexico, outsource web design to Mexico, nearshore design studio',
    subtitle: 'Nearshore web design for US companies',
    accent: 'US Companies',
    target: 'US companies',
    hero: 'Hiring an agency in New York or San Francisco means paying for their rent. Hiring across the world means midnight meetings and deliverables that don’t look like what you asked for. We are a studio in Mexico that works your hours, in English, at the design level of a top-tier agency.',
    intro:
      'We design for US companies that want a dedicated senior design team without paying for a local agency’s overhead: growing brands, high-value service firms, and marketing teams that need more hands.',
    items: [
      {
        title: 'Agency-level websites',
        description:
          'Strategy, design, and development of sites that look and feel premium, load fast, and are ready to rank on Google and AI search.',
        bullets: ['Content strategy and structure', 'Custom design, no templates', 'Fast, measurable build'],
      },
      {
        title: 'Your hours, your language',
        description:
          'Mexico shares business hours with the US: video meetings during your workday and communication in English.',
        bullets: ['Meetings on US business hours', 'English-speaking team', 'Progress shared at every stage'],
      },
      {
        title: 'An extension of your marketing team',
        description:
          'Landing pages, redesigns, and campaign assets for your in-house team, with the same visual standard across everything.',
        bullets: ['Campaign landing pages', 'Phased redesigns', 'Monthly maintenance if you need it'],
      },
      {
        title: 'Brand and website from one team',
        description:
          'If your brand needs work too, the identity and the site come from the same studio and read as one thing.',
        bullets: ['Identity and brand guidelines', 'Visual system for web and social', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to understand your company, your market, and what the site needs to achieve.',
    pages: 'home, services, case studies, about, contact, and the landing pages your strategy calls for',
    costQuestion: 'How much does a nearshore web design agency cost?',
    costScope:
      'how many pages and sections, whether it includes branding, and whether you need monthly maintenance',
    faqs: [
      {
        question: 'What does nearshore mean?',
        answer:
          'Your team is in a nearby country on your business hours instead of across the world. With Mexico you work in real time, without waiting a day for every answer.',
      },
      {
        question: 'What does the day-to-day look like?',
        answer:
          'One person at the studio is your direct contact. We meet over video at each stage, share progress through links your team can review, and refine as agreed in the quote.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'companies',
    proofText:
      'Real identity and website work in healthcare, energy, and international finance. It is the standard we would bring to your company.',
    howTo: 'a US company website with a nearshore studio',
    lead: {
      heading: 'Let’s talk about your project',
      description:
        'Tell us what your company needs. We will reach out as soon as possible during your business hours to understand the project and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an Austin company and want to redesign our site with a dedicated team.',
    },
  },
});
