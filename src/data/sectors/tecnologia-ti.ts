import { defineSector } from './build';

/**
 * Empresas de tecnología y servicios de TI — "página web para empresa de TI".
 * Ángulo: venden servicios intangibles (desarrollo, nube, ciberseguridad,
 * soporte) a directores de TI y compras; el sitio tiene que traducir lo
 * técnico a resultados de negocio y probar experiencia con casos. Distinto
 * de `ux-saas` (diseño de producto para empresas de software).
 */
export const tecnologiaTi = defineSector({
  id: 'tecnologia-ti',
  publishAt: '2026-11-01T00:00:00-06:00',
  slug: { es: 'para-empresas-de-tecnologia', en: 'for-it-and-technology-companies' },
  name: { es: 'Empresas de tecnología y TI', en: 'IT and technology companies' },
  proof: ['ancient', 'monetix', 'debiti'],
  es: {
    seoTitle: 'Diseño Web para Empresas de Tecnología y Servicios de TI',
    seoDescription:
      'Sitios para empresas de TI, ciberseguridad, nube y software a la medida: servicios explicados en términos de negocio, casos y certificaciones.',
    keywords:
      'diseño web para empresas de tecnología, página web empresa de TI, sitio web ciberseguridad, página web integrador tecnológico, diseño web software a la medida',
    subtitle: 'Diseño web para empresas de tecnología y TI',
    accent: 'Empresas de Tecnología',
    target: 'empresas de tecnología y servicios de TI',
    hero: 'Una empresa de TI vende algo que el cliente no puede tocar, y muchas veces se lo vende a alguien que no es técnico. Si tu sitio está lleno de siglas y logos de proveedores, el director de finanzas no entiende por qué elegirte. Diseñamos sitios que traducen tu tecnología a resultados de negocio y demuestran experiencia con casos y certificaciones.',
    intro:
      'Diseñamos páginas web para integradores tecnológicos, empresas de ciberseguridad, servicios en la nube, soporte administrado, desarrollo de software a la medida y consultoras de TI.',
    items: [
      {
        title: 'Servicios en términos de negocio',
        description:
          'Cada servicio explicado por el problema que resuelve, para quién es y cómo se implementa, con el detalle técnico para quien lo busca.',
        bullets: ['Páginas por servicio', 'Problema, solución y resultado', 'Detalle técnico en segundo nivel'],
      },
      {
        title: 'Casos y credibilidad',
        description:
          'Casos de éxito, certificaciones de fabricantes y alianzas presentados como prueba, no como una pared de logos.',
        bullets: ['Casos por industria', 'Certificaciones y alianzas', 'Testimonios de clientes'],
      },
      {
        title: 'Industrias y soluciones',
        description:
          'Páginas por industria (manufactura, salud, finanzas, retail) con los retos de cada una y cómo los atiendes.',
        bullets: ['Páginas por industria', 'Soluciones empaquetadas', 'Contenido técnico y guías'],
      },
      {
        title: 'Contacto que califica',
        description:
          'Formularios por tipo de proyecto, agenda con un consultor a la medida y llamadas a la acción para evaluaciones o diagnósticos.',
        bullets: ['Solicitud de diagnóstico', 'Leads por servicio'],
        custom: ['Agenda con consultor'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus servicios, tus clientes ideales y cómo vendes hoy.',
    pages: 'servicios, industrias, casos, alianzas y certificaciones, la empresa, recursos y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una empresa de TI?',
    costScope:
      'cuántos servicios e industrias, cuántos casos de éxito, si incluye blog o centro de recursos y si también necesitas marca',
    faqs: [
      {
        question: '¿Cómo explicamos servicios técnicos a quien no es técnico?',
        answer:
          'Empezamos por el problema de negocio y el resultado, y dejamos el detalle técnico en un segundo nivel para el equipo de TI del cliente. Así el sitio convence a quien firma y a quien evalúa.',
      },
      {
        question: '¿Podemos mostrar casos si nuestros clientes piden confidencialidad?',
        answer:
          'Sí. Presentamos casos por industria y tamaño de empresa, con el reto y el resultado, sin nombrar al cliente si así lo pide.',
      },
      {
        question: '¿Nos ayudan a vender en Estados Unidos?',
        answer:
          'Sí. Hacemos la versión en inglés pensada para compradores estadounidenses, con el argumento nearshore bien planteado.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'empresas de tecnología',
    proofText:
      'Proyectos reales de sitios web y productos digitales en desarrollo de software y finanzas. Es el estándar con el que trabajaríamos tu empresa.',
    howTo: 'el sitio web de una empresa de TI',
    lead: {
      heading: 'Hablemos de tu empresa',
      description:
        'Cuéntanos qué servicios ofreces y a qué clientes quieres llegar. Te contactaremos para entenderlo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un integrador de ciberseguridad y queremos llegar a empresas medianas en México y Texas.',
    },
  },
  en: {
    seoTitle: 'Web Design for IT and Technology Companies',
    seoDescription:
      'Websites for IT firms, cybersecurity, cloud, and custom software companies: services explained in business terms, case studies, and certifications.',
    keywords:
      'IT company website design, technology company web design, cybersecurity website design, managed services website, systems integrator website',
    subtitle: 'Web design for IT and technology companies',
    accent: 'Technology Companies',
    target: 'IT and technology companies',
    hero: 'An IT company sells something clients cannot touch, often to someone who is not technical. If your website is full of acronyms and vendor logos, the CFO does not understand why to choose you. We design websites that translate your technology into business outcomes and prove experience with case studies and certifications.',
    intro:
      'We design websites for systems integrators, cybersecurity firms, cloud services, managed service providers, custom software developers, and IT consultancies.',
    items: [
      {
        title: 'Services in business terms',
        description:
          'Each service explained by the problem it solves, who it is for, and how it is delivered, with technical detail for those who want it.',
        bullets: ['Service pages', 'Problem, solution, and outcome', 'Technical detail one level down'],
      },
      {
        title: 'Cases and credibility',
        description:
          'Case studies, vendor certifications, and partnerships presented as proof, not as a wall of logos.',
        bullets: ['Cases by industry', 'Certifications and partnerships', 'Client testimonials'],
      },
      {
        title: 'Industries and solutions',
        description:
          'Industry pages (manufacturing, healthcare, finance, retail) with each one’s challenges and how you address them.',
        bullets: ['Industry pages', 'Packaged solutions', 'Technical content and guides'],
      },
      {
        title: 'Contact that qualifies',
        description:
          'Forms by project type, custom consultant booking, and calls to action for assessments.',
        bullets: ['Assessment requests', 'Leads by service'],
        custom: ['Consultant booking'],
      },
    ],
    diagnosis: 'A call to learn about your services, your ideal clients, and how you sell today.',
    pages: 'services, industries, case studies, partners and certifications, company, resources, and contact',
    costQuestion: 'How much does an IT company website cost?',
    costScope:
      'how many services and industries, how many case studies, whether it includes a blog or resource center, and whether you also need a brand',
    faqs: [
      {
        question: 'How do we explain technical services to non-technical buyers?',
        answer:
          'We start with the business problem and the outcome, and keep technical detail one level down for the client’s IT team. That way the site convinces both who signs and who evaluates.',
      },
      {
        question: 'Can we show cases if our clients require confidentiality?',
        answer:
          'Yes. We present cases by industry and company size, with the challenge and result, without naming the client if they ask.',
      },
      {
        question: 'Can you help us sell in the US?',
        answer:
          'Yes. We build the English version for US buyers, with a well-made nearshore case.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'technology companies',
    proofText:
      'Real website and digital product work in software development and finance. It is the standard we would bring to your company.',
    howTo: 'an IT company website',
    lead: {
      heading: 'Let’s talk about your company',
      description:
        'Tell us which services you offer and which clients you want to reach. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a cybersecurity integrator targeting mid-size companies in Mexico and Texas.',
    },
  },
});
