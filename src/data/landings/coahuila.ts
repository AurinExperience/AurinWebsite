import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Coahuila — palabra clave objetivo: "diseño web Saltillo" / "diseño web
 * Coahuila" / "diseño web Torreón".
 *
 * Ángulo propio: dos ciudades con perfiles distintos. Saltillo, con empresas
 * de servicios alrededor de la industria automotriz (mantenimiento,
 * ingeniería, capacitación, seguridad industrial); y Torreón y La Laguna, con
 * comercio, salud privada y empresas de servicios. Sin catálogos B2B con acceso
 * privado: eso es de Guanajuato.
 */
export const coahuila: Landing = {
  id: 'coahuila',
  status: 'live',
  publishAt: '2026-10-04T00:00:00-06:00',
  slug: { es: 'coahuila', en: 'coahuila' },
  region: 'Coahuila',
  geo: { latitude: 25.4232, longitude: -101.0053 },
  areas: ['Saltillo', 'Ramos Arizpe', 'Torreón', 'Monclova', 'Piedras Negras', 'Acuña'],
  phoneSample: '+52 844 123 4567',
  proof: ['grupoEstrella', 'elite', 'ceiich'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Saltillo, Torreón y Coahuila | Aurin',
        description:
          'Diseño web y branding en Saltillo, Torreón y Coahuila para empresas de servicios industriales, salud privada, comercio y empresas de servicios.',
        keywords:
          'diseño web Saltillo, diseño web Torreón, páginas web Coahuila, página web empresa de mantenimiento industrial, branding Saltillo, diseño web Ramos Arizpe',
      },
      hero: {
        subtitle: 'Diseño web y branding en Coahuila',
        titleLead: 'Diseño Web en',
        titleAccent: 'Coahuila',
        description:
          'En Saltillo y Ramos Arizpe, las empresas que dan servicio a la industria compiten por contratos con clientes muy exigentes. En Torreón, clínicas y comercios compiten por la confianza de la gente. En los dos casos, el sitio es la primera impresión. Lo diseñamos para que sea buena.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Coahuila',
        intro:
          'Trabajamos con empresas de Saltillo, Ramos Arizpe, Torreón, Monclova y Piedras Negras: mantenimiento e ingeniería industrial, seguridad y capacitación, clínicas y consultorios, comercios y empresas de servicios.',
        items: [
          {
            title: 'Sitios para empresas de servicios industriales',
            description:
              'Mantenimiento, ingeniería, capacitación, seguridad industrial: tu cliente quiere ver experiencia, certificaciones y cómo trabajas antes de invitarte a cotizar.',
            bullets: [
              'Servicios y capacidades bien explicados',
              'Certificaciones y sectores que atiendes',
              'Formulario para solicitudes de cotización',
            ],
          },
          {
            title: 'Sitios para clínicas y consultorios',
            description:
              'Un paciente elige médico por confianza. El sitio presenta a tu equipo, tus especialidades y cómo agendar, con información clara y sin tecnicismos.',
            bullets: [
              'Equipo médico y especialidades',
              'Citas en línea',
              'Ubicación, horario y contacto',
            ],
          },
          {
            title: 'Branding para empresas que crecieron',
            description:
              'Muchas empresas de La Laguna y de Saltillo crecieron con una imagen que ya no las representa. Renovamos la identidad sin perder lo que tus clientes reconocen.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio alineado con la marca',
            ],
          },
          {
            title: 'Landing pages para campañas',
            description:
              'Si inviertes en anuncios, mandar el tráfico a tu página de inicio desperdicia presupuesto. Diseñamos páginas por campaña, pensadas para que el visitante te contacte.',
            bullets: [
              'Una página por campaña',
              'Mensaje alineado con el anuncio',
              'Medición básica de contactos',
            ],
          },
        ],
      },
      process: {
        heading: c.processHeading,
        description: c.processDescription,
        steps: [
          {
            name: 'Diagnóstico',
            text: 'Una llamada para entender a quién le vendes y qué necesita ver ese cliente antes de contratarte.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: servicios, experiencia, equipo y contacto, y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Coahuila',
        description: 'Lo que nos preguntan las empresas de Saltillo y Torreón antes de contratar.',
        items: [
          c.faqCost('Saltillo o Torreón'),
          {
            question: 'Mi empresa da servicio a la industria automotriz, ¿qué debe tener el sitio?',
            answer:
              'Lo que un cliente industrial revisa antes de invitarte: qué servicios das, en qué procesos tienes experiencia, qué certificaciones tienes y cómo contactarte. Presentado con orden y sin exagerar.',
          },
          {
            question: '¿Pueden hacer el sitio de mi clínica con citas en línea?',
            answer:
              'Sí. El sitio puede incluir una forma de agendar citas en línea. Cómo se conecta con tu agenda lo definimos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote('Coahuila'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como construcción, salud y educación. Es el mismo estándar con el que trabajaríamos tu empresa en Coahuila.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Coahuila',
      breadcrumb: 'Diseño Web Coahuila',
      serviceName: 'Diseño Web y Branding en Coahuila',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de una empresa de servicios o una clínica en Coahuila.',
    },
    en: {
      seo: {
        title: 'Web Design in Saltillo, Torreón & Coahuila | Aurin',
        description:
          'Web design and branding in Saltillo, Torreón, and Coahuila for industrial service companies, private healthcare, retail, and service businesses.',
        keywords:
          'web design Saltillo, web design Torreón, website design Coahuila, industrial services website Mexico, branding Saltillo',
      },
      hero: {
        subtitle: 'Web design and branding in Coahuila',
        titleLead: 'Web Design in',
        titleAccent: 'Coahuila',
        description:
          'In Saltillo and Ramos Arizpe, companies serving the industry compete for contracts with very demanding clients. In Torreón, clinics and retailers compete for people’s trust. Either way, the site is the first impression. We design it to be a good one.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Coahuila',
        intro:
          'We work with companies in Saltillo, Ramos Arizpe, Torreón, Monclova, and Piedras Negras: industrial maintenance and engineering, safety and training, clinics and practices, retailers, and service companies.',
        items: [
          {
            title: 'Websites for industrial service companies',
            description:
              'Maintenance, engineering, training, industrial safety: clients want to see experience, certifications, and how you work before inviting you to bid.',
            bullets: [
              'Services and capabilities clearly explained',
              'Certifications and sectors you serve',
              'Form for quote requests',
            ],
          },
          {
            title: 'Websites for clinics and practices',
            description:
              'Patients choose a doctor on trust. The site presents your team, your specialties, and how to book, with clear information and no jargon.',
            bullets: ['Medical team and specialties', 'Online appointments', 'Location, hours, and contact'],
          },
          {
            title: 'Branding for companies that have grown',
            description:
              'Many companies in La Laguna and Saltillo grew with an image that no longer represents them. We refresh the identity without losing what customers recognize.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
          },
          {
            title: 'Campaign landing pages',
            description:
              'If you run ads, sending traffic to your homepage wastes budget. We design pages per campaign, built to get visitors to contact you.',
            bullets: ['One page per campaign', 'Message matched to the ad', 'Basic measurement of inquiries'],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn who you sell to and what that client needs to see before hiring you.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: services, experience, team, and contact, and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Coahuila',
        description: 'What companies in Saltillo and Torreón ask us before signing.',
        items: [
          C.faqCost('Saltillo or Torreón'),
          {
            question: 'My company serves the automotive industry. What should the site include?',
            answer:
              'What an industrial client reviews before inviting you: what services you provide, which processes you have experience in, your certifications, and how to reach you. Presented clearly and without exaggeration.',
          },
          {
            question: 'Can you build my clinic’s site with online appointments?',
            answer:
              'Yes. The site can include a way to book appointments online. How it connects to your calendar is defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote('Coahuila'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like construction, healthcare, and education. It is the same standard we would bring to your company in Coahuila.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Coahuila',
      breadcrumb: 'Web Design Coahuila',
      serviceName: 'Web Design and Branding in Coahuila',
      howToDescription:
        'Step-by-step process to design a website for a service company or clinic in Coahuila.',
    },
  },
};
