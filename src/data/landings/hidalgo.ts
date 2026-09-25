import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Hidalgo — palabra clave objetivo: "diseño web Pachuca" / "diseño web
 * Hidalgo".
 *
 * Ángulo propio: turismo de fin de semana (balnearios, pueblos mágicos,
 * cabañas) con reservas, y escuelas y servicios de Pachuca. Lo industrial de
 * Tula y Tepeji se menciona de pasada; ese terreno es del Estado de México.
 */
export const hidalgo: Landing = {
  id: 'hidalgo',
  status: 'draft',
  slug: { es: 'hidalgo', en: 'hidalgo' },
  region: 'Hidalgo',
  geo: { latitude: 20.1011, longitude: -98.7591 },
  areas: ['Pachuca', 'Mineral de la Reforma', 'Tulancingo', 'Tula', 'Huasca', 'Ixmiquilpan'],
  phoneSample: '+52 771 123 4567',
  proof: ['elRollo', 'inglesIndividual', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Pachuca e Hidalgo | Aurin',
        description:
          'Diseño web y branding en Pachuca e Hidalgo para balnearios, cabañas, pueblos mágicos, escuelas, clínicas y negocios de servicios.',
        keywords:
          'diseño web Pachuca, páginas web Hidalgo, página web balneario, diseño web cabañas Huasca, branding Pachuca',
      },
      hero: {
        subtitle: 'Diseño web y branding en Hidalgo',
        titleLead: 'Diseño Web en',
        titleAccent: 'Hidalgo',
        description:
          'Cada fin de semana miles de familias de la Ciudad de México buscan a dónde ir en Hidalgo: balnearios, cabañas, pueblos mágicos. Deciden desde el celular y reservan con quien se ve más confiable. Diseñamos sitios para que ese seas tú.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Hidalgo',
        intro:
          'Trabajamos con negocios de Pachuca, Mineral de la Reforma, Tulancingo, Tula, Huasca e Ixmiquilpan: balnearios y parques acuáticos, cabañas y hoteles, restaurantes, escuelas, clínicas y comercios.',
        items: [
          {
            title: 'Sitios para balnearios y parques',
            description:
              'Una familia quiere saber precios de entrada, horarios, qué incluye y cómo llegar antes de salir de casa. El sitio lo resuelve en un vistazo desde el celular.',
            bullets: ['Horarios, servicios y cómo llegar', 'Galería de instalaciones', 'Contacto por WhatsApp o formulario'],
          },
          {
            title: 'Cabañas y hoteles de fin de semana',
            description:
              'En Huasca, Real del Monte o Mineral del Chico, el viajero compara varias opciones antes de reservar. Presentamos tus espacios y facilitamos la reserva directa.',
            bullets: ['Galería por cabaña o habitación', 'Reservas o solicitud de disponibilidad', 'Pensado primero para celular'],
          },
          {
            title: 'Escuelas y servicios en Pachuca',
            description:
              'Escuelas, clínicas y despachos: tu cliente quiere saber qué ofreces y cómo contactarte. Un sitio claro con esa información trabaja por ti.',
            bullets: ['Servicios u oferta educativa', 'Citas o formulario de informes', 'Ubicación, horario y contacto'],
          },
          {
            title: 'Branding',
            description:
              'Tu marca va en la entrada, en las redes y en lo que tus visitantes comparten. Creamos una identidad que se reconozca y se recuerde.',
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
            text: 'Una llamada para entender quién te visita, desde dónde viene y qué pregunta antes de decidirse.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas y qué información va en cada una, pensando en quien la consulta desde el celular.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Hidalgo',
        description: 'Lo que nos preguntan los negocios de Hidalgo antes de contratar.',
        items: [
          c.faqCost('Pachuca'),
          {
            question: 'Tengo un balneario, ¿el sitio puede mostrar los precios de entrada?',
            answer:
              'Sí. Los precios, horarios y servicios pueden estar en el sitio, y si lo necesitas te explicamos cómo actualizarlos tú o nos encargamos con el plan de mantenimiento.',
          },
          {
            question: 'Tengo cabañas, ¿puedo recibir reservas en mi sitio?',
            answer:
              'Sí. El sitio puede incluir reservas o solicitud de disponibilidad. Cómo se conecta con tu forma de operar lo definimos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote('Hidalgo'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, educación y salud. Es el mismo estándar con el que trabajaríamos tu negocio en Hidalgo.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Hidalgo',
      breadcrumb: 'Diseño Web Hidalgo',
      serviceName: 'Diseño Web y Branding en Hidalgo',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de un balneario, cabañas o una escuela en Hidalgo.',
    },
    en: {
      seo: {
        title: 'Web Design in Pachuca & Hidalgo | Aurin',
        description:
          'Web design and branding in Pachuca and Hidalgo for water parks, cabins, magic towns, schools, clinics, and service businesses.',
        keywords:
          'web design Pachuca, website design Hidalgo Mexico, water park website, cabin rental website Mexico, branding Pachuca',
      },
      hero: {
        subtitle: 'Web design and branding in Hidalgo',
        titleLead: 'Web Design in',
        titleAccent: 'Hidalgo',
        description:
          'Every weekend thousands of families from Mexico City look for somewhere to go in Hidalgo: water parks, cabins, magic towns. They decide on their phone and book with whoever looks most reliable. We design websites so that is you.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Hidalgo',
        intro:
          'We work with businesses in Pachuca, Mineral de la Reforma, Tulancingo, Tula, Huasca, and Ixmiquilpan: water parks, cabins and hotels, restaurants, schools, clinics, and retail.',
        items: [
          {
            title: 'Websites for water parks',
            description:
              'Families want to know entry prices, hours, what is included, and how to get there before leaving home. The site answers it at a glance on a phone.',
            bullets: ['Hours, services, and directions', 'Facilities gallery', 'Contact by WhatsApp or form'],
          },
          {
            title: 'Weekend cabins and hotels',
            description:
              'In Huasca, Real del Monte, or Mineral del Chico, travelers compare several options before booking. We present your spaces and make direct booking easy.',
            bullets: ['Gallery by cabin or room', 'Bookings or availability requests', 'Mobile-first'],
          },
          {
            title: 'Schools and services in Pachuca',
            description:
              'Schools, clinics, and firms: people want to know what you offer and how to reach you. A clear site with that information works for you.',
            bullets: ['Services or programs', 'Appointments or information form', 'Location, hours, and contact'],
          },
          {
            title: 'Branding',
            description:
              'Your brand goes on the entrance, on social media, and on what visitors share. We create an identity that is recognized and remembered.',
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
            text: 'We learn who visits you, where they come from, and what they ask before deciding.',
          },
          {
            name: 'Structure',
            text: 'We define the pages and what information goes on each, thinking about someone checking it on a phone.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Hidalgo',
        description: 'What Hidalgo businesses ask us before signing.',
        items: [
          C.faqCost('Pachuca'),
          {
            question: 'I run a water park. Can the site show entry prices?',
            answer:
              'Yes. Prices, hours, and services can be on the site, and we can show you how to update them yourself or handle it with the maintenance plan.',
          },
          {
            question: 'I have cabins. Can I take bookings on my site?',
            answer:
              'Yes. The site can include bookings or availability requests. How it fits the way you operate is defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote('Hidalgo'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, education, and healthcare. It is the same standard we would bring to your business in Hidalgo.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Hidalgo',
      breadcrumb: 'Web Design Hidalgo',
      serviceName: 'Web Design and Branding in Hidalgo',
      howToDescription:
        'Step-by-step process to design a website for a water park, cabins, or a school in Hidalgo.',
    },
  },
};
