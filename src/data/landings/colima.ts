import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Colima — palabra clave objetivo: "diseño web Colima" / "diseño web
 * Manzanillo".
 *
 * Ángulo propio: empresas de servicios alrededor del puerto de Manzanillo
 * (agencias aduanales, despachos, servicios a navieras) con sitios
 * corporativos sencillos —sin sistemas de rastreo ni portales—, y turismo de
 * playa en Manzanillo.
 */
export const colima: Landing = {
  id: 'colima',
  status: 'draft',
  slug: { es: 'colima', en: 'colima' },
  region: 'Colima',
  geo: { latitude: 19.1138, longitude: -104.3385 },
  areas: ['Manzanillo', 'Colima', 'Villa de Álvarez', 'Tecomán', 'Comala'],
  phoneSample: '+52 314 123 4567',
  proof: ['fortrade', 'galicia', 'elRollo'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Colima y Manzanillo | Aurin',
        description:
          'Diseño web y branding en Colima y Manzanillo para agencias aduanales, despachos, empresas de servicios del puerto, hoteles y restaurantes.',
        keywords:
          'diseño web Colima, diseño web Manzanillo, página web agencia aduanal, páginas web Colima, branding Manzanillo',
      },
      hero: {
        subtitle: 'Diseño web y branding en Colima',
        titleLead: 'Diseño Web en',
        titleAccent: 'Colima',
        description:
          'Alrededor del puerto de Manzanillo hay cientos de empresas que compiten por la confianza de importadores y exportadores de todo el país. Diseñamos sitios corporativos claros para que tu empresa se vea tan formal como el trabajo que hace.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Colima',
        intro:
          'Trabajamos con empresas de Manzanillo, Colima, Villa de Álvarez y Tecomán: agencias aduanales, despachos contables y legales, empresas de servicios del puerto, hoteles y restaurantes.',
        items: [
          {
            title: 'Sitio corporativo para agencias aduanales',
            description:
              'Un importador que no te conoce quiere saber qué servicios das, en qué operaciones tienes experiencia y cómo contactarte. El sitio lo explica con orden y sin tecnicismos de más.',
            bullets: [
              'Servicios explicados con claridad',
              'Experiencia y sectores que atiendes',
              'Formulario para solicitudes de cotización',
            ],
          },
          {
            title: 'Sitio en español y en inglés',
            description:
              'Si trabajas con clientes o socios del extranjero, el sitio puede quedar disponible en los dos idiomas con la misma información.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Selector de idioma fácil de encontrar',
              'Pensado primero para celular',
            ],
          },
          {
            title: 'Hoteles y restaurantes de Manzanillo',
            description:
              'El turista compara desde el celular y decide rápido. Menú o habitaciones, ubicación y el botón para reservar tienen que estar a la mano.',
            bullets: ['Galería o menú', 'Reservas en línea', 'Horario, ubicación y mapa'],
          },
          {
            title: 'Branding',
            description:
              'En un sector donde muchas empresas se ven iguales, una identidad clara te hace recordable. Creamos una marca que funcione en tu sitio, tus propuestas y tus redes.',
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
            text: 'Una llamada para entender qué servicios das, a quién y qué pregunta ese cliente antes de contratarte.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Colima',
        description: 'Lo que nos preguntan las empresas de Colima y Manzanillo antes de contratar.',
        items: [
          c.faqCost('Manzanillo'),
          {
            question: '¿El sitio puede mostrar el estatus de las operaciones de mis clientes?',
            answer:
              'Eso ya sería un sistema a la medida y no es lo que ofrecemos. Lo que hacemos es un sitio corporativo que presenta tu empresa, tus servicios y cómo contactarte.',
          },
          {
            question: 'Tengo un hotel en Manzanillo, ¿puedo recibir reservas en mi sitio?',
            answer:
              'Sí. El sitio puede incluir reservas o solicitud de disponibilidad. Cómo se conecta con tu forma de operar lo definimos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote,
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como finanzas internacionales, servicios legales y turismo. Es el mismo estándar con el que trabajaríamos tu empresa en Colima.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Colima',
      breadcrumb: 'Diseño Web Colima',
      serviceName: 'Diseño Web y Branding en Colima',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio corporativo de una agencia aduanal o un hotel en Colima.',
    },
    en: {
      seo: {
        title: 'Web Design in Colima & Manzanillo | Aurin',
        description:
          'Web design and branding in Colima and Manzanillo for customs brokers, professional firms, port service companies, hotels, and restaurants.',
        keywords:
          'web design Manzanillo, web design Colima, customs broker website Mexico, port services website, branding Manzanillo',
      },
      hero: {
        subtitle: 'Web design and branding in Colima',
        titleLead: 'Web Design in',
        titleAccent: 'Colima',
        description:
          'Around the port of Manzanillo, hundreds of companies compete for the trust of importers and exporters from across the country. We design clear corporate websites so your company looks as professional as the work it does.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Colima',
        intro:
          'We work with companies in Manzanillo, Colima, Villa de Álvarez, and Tecomán: customs brokers, accounting and law firms, port service companies, hotels, and restaurants.',
        items: [
          {
            title: 'Corporate site for customs brokers',
            description:
              'An importer who does not know you wants to understand what services you provide, which operations you have experience in, and how to reach you. The site explains it clearly without excess jargon.',
            bullets: [
              'Services clearly explained',
              'Experience and sectors you serve',
              'Form for quote requests',
            ],
          },
          {
            title: 'Site in Spanish and English',
            description:
              'If you work with clients or partners abroad, the site can be available in both languages with the same information.',
            bullets: [
              'The same site available in Spanish and English',
              'Easy-to-find language switcher',
              'Mobile-first',
            ],
          },
          {
            title: 'Hotels and restaurants in Manzanillo',
            description:
              'Tourists compare on their phones and decide fast. Menu or rooms, location, and the booking button need to be within reach.',
            bullets: ['Gallery or menu', 'Online reservations', 'Hours, location, and map'],
          },
          {
            title: 'Branding',
            description:
              'In a sector where many companies look the same, a clear identity makes you memorable. We create a brand that works on your site, proposals, and social media.',
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
            text: 'We learn what services you provide, to whom, and what that client asks before hiring you.',
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
        heading: 'Frequently asked questions about web design in Colima',
        description: 'What companies in Colima and Manzanillo ask us before signing.',
        items: [
          C.faqCost('Manzanillo'),
          {
            question: 'Can the site show the status of my clients’ operations?',
            answer:
              'That would be a custom system, and it is not what we offer. What we build is a corporate website that presents your company, your services, and how to reach you.',
          },
          {
            question: 'I run a hotel in Manzanillo. Can I take bookings on my site?',
            answer:
              'Yes. The site can include bookings or availability requests. How it fits the way you operate is defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote,
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like international finance, legal services, and tourism. It is the same standard we would bring to your company in Colima.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Colima',
      breadcrumb: 'Web Design Colima',
      serviceName: 'Web Design and Branding in Colima',
      howToDescription:
        'Step-by-step process to design a corporate website for a customs broker or hotel in Colima.',
    },
  },
};
