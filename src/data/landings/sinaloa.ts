import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Sinaloa — palabra clave objetivo: "diseño web Culiacán" / "diseño web
 * Mazatlán".
 *
 * Ángulo propio: agroindustria de hortalizas y mariscos que vende a
 * compradores de otros países (sitio bilingüe corporativo), y hotelería y
 * restaurantes de Mazatlán. Distinto de Michoacán (aguacate y artesanía).
 */
export const sinaloa: Landing = {
  id: 'sinaloa',
  status: 'draft',
  slug: { es: 'sinaloa', en: 'sinaloa' },
  region: 'Sinaloa',
  geo: { latitude: 24.8091, longitude: -107.394 },
  areas: ['Culiacán', 'Mazatlán', 'Los Mochis', 'Guasave', 'Navolato'],
  phoneSample: '+52 667 123 4567',
  proof: ['fruitAcademy', 'monetix', 'elRollo'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Culiacán, Mazatlán y Sinaloa | Aurin',
        description:
          'Diseño web bilingüe y branding en Sinaloa para agroindustria y productores de hortalizas y mariscos, hoteles y restaurantes de Mazatlán y servicios en Culiacán.',
        keywords:
          'diseño web Culiacán, diseño web Mazatlán, páginas web Sinaloa, página web agroexportadora, diseño web Los Mochis, branding Culiacán',
      },
      hero: {
        subtitle: 'Diseño web y branding en Sinaloa',
        titleLead: 'Diseño Web en',
        titleAccent: 'Sinaloa',
        description:
          'Las hortalizas y los mariscos de Sinaloa llegan a mesas de todo el mundo, y el comprador extranjero revisa tu sitio antes de responder. En Mazatlán, el turista elige hotel y restaurante desde el celular. Diseñamos sitios para los dos.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Sinaloa',
        intro:
          'Trabajamos con empresas de Culiacán, Mazatlán, Los Mochis, Guasave y Navolato: agroindustria y productores, empacadoras de mariscos, hoteles, restaurantes, clínicas y empresas de servicios.',
        items: [
          {
            title: 'Sitio bilingüe para agroindustria',
            description:
              'Un comprador de otro país quiere saber qué produces, en qué temporadas, con qué certificaciones y cómo contactarte. El sitio lo presenta en inglés y en español con la misma información.',
            bullets: [
              'Productos, temporadas y presentaciones',
              'Certificaciones a la vista',
              'Formulario de contacto para compradores',
            ],
          },
          {
            title: 'Hoteles y restaurantes de Mazatlán',
            description:
              'El turista compara desde el celular y decide rápido. Galería, menú, ubicación y el botón para reservar tienen que estar a la mano.',
            bullets: ['Galería o menú', 'Reservas en línea', 'Sitio en español y en inglés'],
          },
          {
            title: 'Sitios para empresas de servicios',
            description:
              'Clínicas, despachos y empresas de Culiacán: tu cliente quiere saber quién eres y cómo contactarte. Lo presentamos con claridad.',
            bullets: ['Servicios explicados con claridad', 'Equipo y experiencia', 'Citas o formulario de contacto'],
          },
          {
            title: 'Branding',
            description:
              'Una marca clara distingue tu producto en la caja, en el anaquel y en tu presentación comercial. Creamos identidades que funcionan en todo eso.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
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
            text: 'Una llamada para entender a quién le vendes: compradores de otros países, clientes nacionales o turistas.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas, qué información va en cada una y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Sinaloa',
        description: 'Lo que nos preguntan las empresas de Culiacán y Mazatlán antes de contratar.',
        items: [
          c.faqCost('Culiacán o Mazatlán'),
          {
            question: 'Exportamos hortalizas, ¿qué debe tener nuestro sitio?',
            answer:
              'Lo que un comprador de otro país revisa antes de responderte: quién eres, qué produces, en qué temporadas, qué certificaciones tienes y cómo contactarte. En inglés y en español.',
          },
          {
            question: 'Tengo un restaurante en Mazatlán, ¿puedo recibir reservaciones?',
            answer:
              'Sí. El sitio puede incluir reservas en línea. Cómo se conecta con tu forma de operar lo definimos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote,
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como agroindustria, finanzas y turismo. Es el mismo estándar con el que trabajaríamos tu empresa en Sinaloa.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Sinaloa',
      breadcrumb: 'Diseño Web Sinaloa',
      serviceName: 'Diseño Web y Branding en Sinaloa',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio bilingüe de una agroindustria o un hotel en Sinaloa.',
    },
    en: {
      seo: {
        title: 'Web Design in Culiacán, Mazatlán & Sinaloa | Aurin',
        description:
          'Bilingual web design and branding in Sinaloa for produce and seafood companies, hotels and restaurants in Mazatlán, and services in Culiacán.',
        keywords:
          'web design Mazatlán, web design Culiacán, produce exporter website Mexico, seafood company website, branding Sinaloa',
      },
      hero: {
        subtitle: 'Web design and branding in Sinaloa',
        titleLead: 'Web Design in',
        titleAccent: 'Sinaloa',
        description:
          'Sinaloa produce and seafood reach tables around the world, and foreign buyers review your site before replying. In Mazatlán, tourists choose hotels and restaurants on their phone. We design websites for both.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Sinaloa',
        intro:
          'We work with companies in Culiacán, Mazatlán, Los Mochis, Guasave, and Navolato: agribusiness and growers, seafood packers, hotels, restaurants, clinics, and service companies.',
        items: [
          {
            title: 'Bilingual site for agribusiness',
            description:
              'A buyer abroad wants to know what you grow, in which seasons, with which certifications, and how to reach you. The site presents it in English and Spanish with the same information.',
            bullets: ['Products, seasons, and packs', 'Certifications visible', 'Contact form for buyers'],
          },
          {
            title: 'Hotels and restaurants in Mazatlán',
            description:
              'Tourists compare on their phone and decide fast. Gallery, menu, location, and the booking button need to be within reach.',
            bullets: ['Gallery or menu', 'Online reservations', 'Site in Spanish and English'],
          },
          {
            title: 'Websites for service companies',
            description:
              'Clinics, firms, and companies in Culiacán: people want to know who you are and how to reach you. We present it clearly.',
            bullets: ['Services clearly explained', 'Team and experience', 'Appointments or contact form'],
          },
          {
            title: 'Branding',
            description:
              'A clear brand sets your product apart on the box, the shelf, and in your sales presentation. We create identities that work across all of it.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
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
            text: 'We learn who you sell to: buyers abroad, national clients, or tourists.',
          },
          {
            name: 'Structure',
            text: 'We define the pages, what information goes on each, and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Sinaloa',
        description: 'What companies in Culiacán and Mazatlán ask us before signing.',
        items: [
          C.faqCost('Culiacán or Mazatlán'),
          {
            question: 'We export produce. What should our site include?',
            answer:
              'What a buyer abroad reviews before replying: who you are, what you grow, in which seasons, your certifications, and how to reach you. In English and Spanish.',
          },
          {
            question: 'I have a restaurant in Mazatlán. Can I take reservations?',
            answer:
              'Yes. The site can include online reservations. How it fits the way you operate is defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote,
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like agribusiness, finance, and tourism. It is the same standard we would bring to your company in Sinaloa.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Sinaloa',
      breadcrumb: 'Web Design Sinaloa',
      serviceName: 'Web Design and Branding in Sinaloa',
      howToDescription:
        'Step-by-step process to design a bilingual website for an agribusiness or hotel in Sinaloa.',
    },
  },
};
