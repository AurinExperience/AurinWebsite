import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Zacatecas — palabra clave objetivo: "diseño web Zacatecas".
 *
 * Ángulo propio: turismo colonial (hoteles del centro histórico, bodas de
 * destino, recorridos) y empresas de servicios a la minería de Fresnillo.
 * Sonora comparte lo minero, pero allá el ángulo fuerte es otro.
 */
export const zacatecas: Landing = {
  id: 'zacatecas',
  status: 'live',
  publishAt: '2026-10-06T00:00:00-06:00',
  slug: { es: 'zacatecas', en: 'zacatecas' },
  region: 'Zacatecas',
  geo: { latitude: 22.7709, longitude: -102.5832 },
  areas: ['Zacatecas', 'Guadalupe', 'Fresnillo', 'Jerez', 'Sombrerete', 'Río Grande'],
  phoneSample: '+52 492 123 4567',
  proof: ['elRollo', 'mexicoPacific', 'sinfonica'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Zacatecas | Aurin',
        description:
          'Diseño web y branding en Zacatecas para hoteles del centro histórico, bodas de destino, recorridos turísticos y empresas de servicios a la minería.',
        keywords:
          'diseño web Zacatecas, páginas web Zacatecas, página web hotel Zacatecas, bodas de destino Zacatecas, diseño web Fresnillo',
      },
      hero: {
        subtitle: 'Diseño web y branding en Zacatecas',
        titleLead: 'Diseño Web en',
        titleAccent: 'Zacatecas',
        description:
          'El centro histórico de Zacatecas atrae viajeros y parejas que buscan una boda de destino, y todos eligen desde el celular. En Fresnillo, las empresas que dan servicio a la minería compiten por contratos exigentes. Diseñamos sitios para los dos.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Zacatecas',
        intro:
          'Trabajamos con negocios de Zacatecas, Guadalupe, Fresnillo, Jerez y Sombrerete: hoteles y hospedajes, recintos para bodas y eventos, operadores de recorridos, restaurantes y empresas de servicios a la minería.',
        items: [
          {
            title: 'Sitios para hoteles del centro histórico',
            description:
              'El viajero quiere ver habitaciones, ubicación y qué hay cerca antes de reservar. Un sitio propio le da esa información y te permite recibir reservas directas.',
            bullets: ['Galería de habitaciones y espacios', 'Reservas o solicitud de disponibilidad', 'Sitio en español y en inglés'],
          },
          {
            title: 'Bodas de destino y eventos',
            description:
              'Una pareja compara recintos y paquetes antes de agendar una visita. El sitio presenta tus espacios, capacidades y servicios con buenas fotos.',
            bullets: ['Galería por espacio y capacidades', 'Paquetes y servicios', 'Formulario para solicitar fecha o visita'],
          },
          {
            title: 'Servicios a la minería',
            description:
              'Una minera revisa experiencia, certificaciones y capacidad antes de invitarte a cotizar. Organizamos esa información para que tu empresa se vea a la altura.',
            bullets: ['Servicios y capacidades', 'Certificaciones y experiencia', 'Formulario para solicitudes de cotización'],
          },
          {
            title: 'Branding',
            description:
              'En un destino con tanta historia, la marca es lo que hace que te recuerden. Creamos una identidad que funcione en tu sitio, tus redes y tu fachada.',
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
            text: 'Una llamada para entender quién es tu cliente: viajeros, parejas que organizan su boda o empresas que te contratan.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Zacatecas',
        description: 'Lo que nos preguntan los negocios de Zacatecas antes de contratar.',
        items: [
          c.faqCost('Zacatecas'),
          {
            question: 'Organizamos bodas, ¿el sitio puede recibir solicitudes de fecha?',
            answer:
              'Sí. El sitio puede incluir un formulario para solicitar fecha o visita que te llega por correo.',
          },
          {
            question: 'Tengo un hotel pequeño, ¿vale la pena un sitio propio?',
            answer:
              'Sí. Las plataformas de reservas ayudan, pero un sitio propio te permite contar tu historia y recibir reservas directas.',
          },
          c.faqPayment,
          c.faqRemote('Zacatecas'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, energía y cultura. Es el mismo estándar con el que trabajaríamos tu negocio en Zacatecas.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Zacatecas',
      breadcrumb: 'Diseño Web Zacatecas',
      serviceName: 'Diseño Web y Branding en Zacatecas',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de un hotel, recinto de eventos o empresa de servicios en Zacatecas.',
    },
    en: {
      seo: {
        title: 'Web Design in Zacatecas | Aurin',
        description:
          'Web design and branding in Zacatecas for historic-center hotels, destination weddings, tours, and mining service companies.',
        keywords:
          'web design Zacatecas, hotel website Zacatecas, destination wedding venue website Mexico, mining supplier website, branding Zacatecas',
      },
      hero: {
        subtitle: 'Web design and branding in Zacatecas',
        titleLead: 'Web Design in',
        titleAccent: 'Zacatecas',
        description:
          'Zacatecas’s historic center draws travelers and couples planning destination weddings, and all of them choose on their phone. In Fresnillo, companies serving the mining industry compete for demanding contracts. We design websites for both.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Zacatecas',
        intro:
          'We work with businesses in Zacatecas, Guadalupe, Fresnillo, Jerez, and Sombrerete: hotels and lodging, wedding and event venues, tour operators, restaurants, and mining service companies.',
        items: [
          {
            title: 'Websites for historic-center hotels',
            description:
              'Travelers want to see rooms, location, and what is nearby before booking. Your own site gives them that and lets you receive direct bookings.',
            bullets: ['Room and space gallery', 'Bookings or availability requests', 'Site in Spanish and English'],
          },
          {
            title: 'Destination weddings and events',
            description:
              'Couples compare venues and packages before booking a visit. The site presents your spaces, capacities, and services with good photography.',
            bullets: ['Gallery by space and capacity', 'Packages and services', 'Form to request a date or visit'],
          },
          {
            title: 'Mining services',
            description:
              'A mining company reviews experience, certifications, and capacity before inviting you to bid. We organize that information so your company measures up.',
            bullets: ['Services and capabilities', 'Certifications and experience', 'Form for quote requests'],
          },
          {
            title: 'Branding',
            description:
              'In a destination with so much history, the brand is what makes people remember you. We create an identity that works on your site, social media, and storefront.',
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
            text: 'We learn who your customer is: travelers, couples planning a wedding, or companies that hire you.',
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
        heading: 'Frequently asked questions about web design in Zacatecas',
        description: 'What Zacatecas businesses ask us before signing.',
        items: [
          C.faqCost('Zacatecas'),
          {
            question: 'We host weddings. Can the site receive date requests?',
            answer: 'Yes. The site can include a form to request a date or visit that arrives by email.',
          },
          {
            question: 'I run a small hotel. Is a site of my own worth it?',
            answer:
              'Yes. Booking platforms help, but your own site lets you tell your story and receive direct bookings.',
          },
          C.faqPayment,
          C.faqRemote('Zacatecas'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, energy, and culture. It is the same standard we would bring to your business in Zacatecas.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Zacatecas',
      breadcrumb: 'Web Design Zacatecas',
      serviceName: 'Web Design and Branding in Zacatecas',
      howToDescription:
        'Step-by-step process to design a website for a hotel, event venue, or service company in Zacatecas.',
    },
  },
};
