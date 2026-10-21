import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Constructoras e industria — palabra clave: "diseño web para constructoras" /
 * "página web para empresa constructora".
 *
 * Ángulo propio: venta B2B. Quien contrata (un desarrollador, una industria,
 * un área de compras) revisa capacidad, experiencia y certificaciones antes de
 * invitarte a cotizar. Obras como casos, solicitudes de cotización y
 * proveedores. Prueba social: Grupo Estrella y Mexico Pacific, clientes reales.
 */
export const constructoras: Sector = {
  id: 'constructoras',
  status: 'live',
  publishAt: '2026-10-15T00:00:00-06:00',
  slug: { es: 'para-constructoras', en: 'for-construction-companies' },
  name: { es: 'Constructoras e industria', en: 'Construction and industry' },
  proof: ['grupoEstrella', 'mexicoPacific', 'ancient'],
  lead: {
    es: {
      heading: 'Hablemos de tu constructora',
      description:
        'Cuéntanos qué tipo de obras haces y a quién le vendes. Te contactamos para entender tu empresa y te enviamos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Somos una constructora de naves industriales y queremos que nos inviten a más licitaciones.',
    },
    en: {
      heading: 'Let’s talk about your construction company',
      description:
        'Tell us what kind of projects you build and who you sell to. We will reach out to understand your company and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We build industrial warehouses and want to be invited to more tenders.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Constructoras e Industria | Aurin',
        description:
          'Páginas web para constructoras e industria: obras como casos, capacidad y certificaciones a la vista, y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para constructoras, página web para empresa constructora, sitio web constructora, página web industrial, marketing B2B construcción',
      },
      hero: {
        subtitle: 'Diseño web para constructoras y empresas industriales',
        titleLead: 'Diseño Web para',
        titleAccent: 'Constructoras',
        description:
          'Antes de invitarte a cotizar, tu cliente revisa tu sitio: obras terminadas, capacidad, certificaciones y experiencia. Cada vez más también le pregunta a una IA. Diseñamos sitios que muestran el tamaño real de tu empresa y te ponen en la lista de los que sí se toman en serio.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          c.stats[2],
          { value: 'Industria', label: 'ya trabajamos con empresas como Grupo Estrella y Mexico Pacific' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para constructoras',
        intro:
          'Diseñamos para constructoras, contratistas, empresas de ingeniería y proveedores industriales. Cada página web para empresa constructora se diseña a partir del tipo de obra que haces y de quién te contrata.',
        items: [
          {
            title: 'Obras que demuestran capacidad',
            description:
              'Cada obra se presenta como caso: tipo de proyecto, alcance, ubicación y fotos del proceso. Tu cliente ve de qué tamaño son los proyectos que ya resolviste.',
            bullets: ['Fichas de obra con alcance y ubicación', 'Fotografía de proceso y obra terminada', 'Filtros por tipo de proyecto'],
          },
          {
            title: 'Lo que revisa compras',
            description:
              'Capacidad, maquinaria, certificaciones, seguridad y experiencia, organizadas para que un área de compras o un desarrollador encuentre lo que necesita para invitarte.',
            bullets: ['Servicios y capacidades', 'Certificaciones y seguridad', 'Formulario de solicitud de cotización'],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Tus clientes buscan proveedores en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué construyes y te puedan recomendar.',
            bullets: ['Datos estructurados de tu empresa', 'Contenido que la IA puede citar', 'Páginas por servicio y sector'],
          },
          {
            title: 'Branding para constructoras',
            description:
              'Una identidad sólida hace que tu empresa se vea igual de seria en tu sitio, tus propuestas, tus unidades y tus lonas de obra.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Presentación corporativa y rotulación según el alcance',
              'Sitio alineado con la marca',
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
            text: 'Una llamada para entender qué construyes, quién te contrata y qué revisa antes de invitarte a cotizar.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: obras, servicios, capacidades, certificaciones y solicitud de cotización. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para constructoras',
        description: 'Lo que nos preguntan constructoras y empresas industriales antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de una constructora?',
            answer:
              'Depende del alcance: cuántas obras y servicios, si necesitas un administrador para subirlas, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Casi todos mis clientes llegan por recomendación, ¿para qué un sitio?',
            answer:
              'Porque quien recibe la recomendación igual te busca antes de llamarte. Un sitio que muestra tus obras y tu capacidad confirma esa recomendación; uno viejo o inexistente la debilita.',
          },
          {
            question: '¿Pueden presentar nuestra empresa también en inglés?',
            answer:
              'Sí. Si trabajas con corporativos o empresas extranjeras, el sitio puede estar en los dos idiomas con la misma información.',
          },
          s.faqAi('mi constructora'),
          c.faqPayment,
          s.faqRemote('constructoras'),
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en construcción, energía y tecnología. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu empresa.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para constructoras',
      breadcrumb: 'Diseño Web para Constructoras',
      serviceName: 'Diseño Web y Branding para Constructoras e Industria',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de una constructora o una empresa industrial.',
    },
    en: {
      seo: {
        title: 'Web Design for Construction and Industrial Companies | Aurin',
        description:
          'Websites for construction and industrial companies: projects as case studies, capacity and certifications up front, and visibility on Google and AI search.',
        keywords:
          'web design for construction companies, construction company website, contractor website, industrial company website, B2B construction marketing',
      },
      hero: {
        subtitle: 'Web design for construction and industrial companies',
        titleLead: 'Web Design for',
        titleAccent: 'Construction',
        description:
          'Before inviting you to bid, clients check your website: completed projects, capacity, certifications, and experience. More and more often they also ask an AI. We design websites that show the real size of your company and put you on the list of firms that get taken seriously.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          C.stats[2],
          { value: 'Industry', label: 'we already work with companies like Grupo Estrella and Mexico Pacific' },
        ],
      },
      services: {
        heading: 'Web design services for construction companies',
        intro:
          'We design for construction companies, contractors, engineering firms, and industrial suppliers. Every construction company website is designed around the work you build and who hires you.',
        items: [
          {
            title: 'Projects that prove capacity',
            description:
              'Each project is presented as a case: type, scope, location, and progress photos. Clients see the size of the projects you have already delivered.',
            bullets: ['Project pages with scope and location', 'Progress and completion photography', 'Filters by project type'],
          },
          {
            title: 'What procurement looks for',
            description:
              'Capacity, equipment, certifications, safety, and experience, organized so a procurement team or developer finds what they need to invite you.',
            bullets: ['Services and capabilities', 'Certifications and safety', 'Quote request form'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Clients search for suppliers on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you build and can recommend you.',
            bullets: ['Structured data about your company', 'Content AI tools can cite', 'Pages by service and industry'],
          },
          {
            title: 'Branding for construction companies',
            description:
              'A solid identity makes your company look equally serious on your site, proposals, vehicles, and site banners.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Corporate presentation and signage based on project scope',
              'Website aligned with the brand',
            ],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn what you build, who hires you, and what they check before inviting you to bid.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: projects, services, capabilities, certifications, and quote requests. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for construction companies',
        description: 'What construction and industrial companies ask us before signing.',
        items: [
          {
            question: 'How much does a construction company website cost?',
            answer:
              'It depends on scope: how many projects and services, whether you need an admin to upload them, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'Most of my clients come from referrals. Why do I need a website?',
            answer:
              'Because whoever gets the referral still looks you up before calling. A site that shows your projects and capacity confirms the referral; an outdated or missing one weakens it.',
          },
          {
            question: 'Can you present our company in English too?',
            answer:
              'Yes. If you work with corporations or foreign companies, the site can run in both languages with the same information.',
          },
          S.faqAi('my construction company'),
          C.faqPayment,
          S.faqRemote('construction companies'),
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in construction, energy, and technology. The same care we put into every brand is what we would bring to your company.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for construction companies',
      breadcrumb: 'Web Design for Construction',
      serviceName: 'Web Design and Branding for Construction and Industrial Companies',
      howToDescription: 'Step-by-step process to design a website for a construction or industrial company.',
    },
  },
};
