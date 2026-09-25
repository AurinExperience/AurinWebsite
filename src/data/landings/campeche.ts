import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Campeche — palabra clave objetivo: "diseño web Campeche".
 *
 * Ángulo propio: dos economías distintas en un estado. Ciudad del Carmen, con
 * empresas que dan servicios a la industria petrolera y necesitan verse
 * formales ante clientes grandes; y la ciudad de Campeche, con turismo
 * cultural, hoteles en el centro histórico y gastronomía.
 */
export const campeche: Landing = {
  id: 'campeche',
  status: 'live',
  publishAt: '2026-10-06T00:00:00-06:00',
  slug: { es: 'campeche', en: 'campeche' },
  region: 'Campeche',
  geo: { latitude: 19.8454, longitude: -90.5237 },
  areas: ['Campeche', 'Ciudad del Carmen', 'Champotón', 'Escárcega', 'Calkiní'],
  phoneSample: '+52 981 123 4567',
  proof: ['mexicoPacific', 'grupoEstrella', 'elRollo'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Campeche y Ciudad del Carmen | Aurin',
        description:
          'Diseño web y branding en Campeche y Ciudad del Carmen para empresas de servicios industriales, hoteles del centro histórico, restaurantes y turismo.',
        keywords:
          'diseño web Campeche, páginas web Ciudad del Carmen, diseño web Carmen, página web empresa de servicios petroleros, diseño web hotel Campeche',
      },
      hero: {
        subtitle: 'Diseño web y branding en Campeche',
        titleLead: 'Diseño Web en',
        titleAccent: 'Campeche',
        description:
          'En Ciudad del Carmen tu cliente es una empresa grande que revisa tu sitio antes de invitarte a cotizar. En el centro histórico de Campeche es un viajero que compara hoteles y restaurantes desde el celular. Diseñamos sitios para los dos.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Campeche',
        intro:
          'Trabajamos con empresas de Campeche, Ciudad del Carmen, Champotón y Escárcega: proveedores de servicios industriales, contratistas, hoteles, restaurantes y operadores de turismo.',
        items: [
          {
            title: 'Sitio corporativo para empresas de servicios',
            description:
              'Una empresa que te va a contratar revisa quién eres, qué has hecho y qué certificaciones tienes. Organizamos esa información para que tu empresa se vea tan formal como tus clientes esperan.',
            bullets: [
              'Servicios y capacidades bien explicados',
              'Certificaciones y experiencia a la vista',
              'Formulario de contacto para cotizaciones',
            ],
          },
          {
            title: 'Sitios para hoteles del centro histórico',
            description:
              'El viajero quiere ver las habitaciones, la ubicación y qué hay cerca antes de reservar. Un sitio propio le da esa información y te permite recibir reservas directas.',
            bullets: [
              'Galería de habitaciones y espacios',
              'Reservas o solicitud de disponibilidad',
              'Sitio en español y en inglés',
            ],
          },
          {
            title: 'Restaurantes y turismo',
            description:
              'La gastronomía campechana es un motivo de viaje por sí misma. El sitio muestra tu menú, tu historia y cómo llegar, y facilita que te reserven.',
            bullets: ['Menú fácil de actualizar', 'Reservas en línea', 'Horario, ubicación y mapa'],
          },
          {
            title: 'Branding',
            description:
              'Tu marca va en propuestas, uniformes, fachadas y redes. Creamos una identidad que se vea consistente en todo y que sostenga el nivel de tu empresa.',
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
            text: 'Una llamada para entender a quién le vendes: a empresas, a viajeros o a los dos. De eso depende qué necesita el sitio.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Campeche',
        description: 'Lo que nos preguntan las empresas de Campeche y Ciudad del Carmen antes de contratar.',
        items: [
          c.faqCost('Campeche'),
          {
            question: 'Mis clientes son empresas grandes, ¿qué debe tener mi sitio?',
            answer:
              'Lo que un área de compras busca antes de invitarte: quién eres, qué servicios das, dónde has trabajado, qué certificaciones tienes y cómo contactarte. Presentado con orden y sin exagerar.',
          },
          {
            question: 'Tengo un hotel pequeño, ¿vale la pena un sitio propio?',
            answer:
              'Sí. Las plataformas de reservas ayudan, pero un sitio propio te permite contar tu historia, mostrar lo que te hace distinto y recibir reservas directas.',
          },
          c.faqPayment,
          c.faqRemote('Campeche'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como energía, construcción y turismo. Es el mismo estándar con el que trabajaríamos tu empresa en Campeche.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Campeche',
      breadcrumb: 'Diseño Web Campeche',
      serviceName: 'Diseño Web y Branding en Campeche',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de una empresa de servicios o un hotel en Campeche.',
    },
    en: {
      seo: {
        title: 'Web Design in Campeche & Ciudad del Carmen | Aurin',
        description:
          'Web design and branding in Campeche and Ciudad del Carmen for industrial service companies, historic-center hotels, restaurants, and tourism.',
        keywords:
          'web design Campeche, website design Ciudad del Carmen, oil and gas service company website, hotel website Campeche, branding Campeche',
      },
      hero: {
        subtitle: 'Web design and branding in Campeche',
        titleLead: 'Web Design in',
        titleAccent: 'Campeche',
        description:
          'In Ciudad del Carmen your client is a large company that reviews your site before inviting you to bid. In Campeche’s historic center it is a traveler comparing hotels and restaurants on a phone. We design websites for both.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Campeche',
        intro:
          'We work with companies in Campeche, Ciudad del Carmen, Champotón, and Escárcega: industrial service providers, contractors, hotels, restaurants, and tour operators.',
        items: [
          {
            title: 'Corporate site for service companies',
            description:
              'A company about to hire you reviews who you are, what you have done, and which certifications you hold. We organize that information so your company looks as formal as your clients expect.',
            bullets: [
              'Services and capabilities clearly explained',
              'Certifications and experience visible',
              'Contact form for quote requests',
            ],
          },
          {
            title: 'Websites for historic-center hotels',
            description:
              'Travelers want to see the rooms, the location, and what is nearby before booking. Your own site gives them that and lets you receive direct bookings.',
            bullets: [
              'Room and space gallery',
              'Bookings or availability requests',
              'Site in Spanish and English',
            ],
          },
          {
            title: 'Restaurants and tourism',
            description:
              'Campeche’s food is a reason to travel on its own. The site shows your menu, your story, and how to get there, and makes it easy to book a table.',
            bullets: ['Easy-to-update menu', 'Online reservations', 'Hours, location, and map'],
          },
          {
            title: 'Branding',
            description:
              'Your brand goes on proposals, uniforms, storefronts, and social media. We create an identity that looks consistent everywhere and holds up to your company’s level.',
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
            text: 'We learn who you sell to: companies, travelers, or both. That decides what the site needs.',
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
        heading: 'Frequently asked questions about web design in Campeche',
        description: 'What companies in Campeche and Ciudad del Carmen ask us before signing.',
        items: [
          C.faqCost('Campeche'),
          {
            question: 'My clients are large companies. What should my site include?',
            answer:
              'What a procurement team looks for before inviting you: who you are, what services you provide, where you have worked, which certifications you hold, and how to reach you. Presented clearly and without exaggeration.',
          },
          {
            question: 'I run a small hotel. Is a site of my own worth it?',
            answer:
              'Yes. Booking platforms help, but your own site lets you tell your story, show what makes you different, and receive direct bookings.',
          },
          C.faqPayment,
          C.faqRemote('Campeche'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like energy, construction, and tourism. It is the same standard we would bring to your company in Campeche.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Campeche',
      breadcrumb: 'Web Design Campeche',
      serviceName: 'Web Design and Branding in Campeche',
      howToDescription:
        'Step-by-step process to design a website for a service company or hotel in Campeche.',
    },
  },
};
