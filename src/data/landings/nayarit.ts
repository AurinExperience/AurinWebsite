import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Nayarit — palabra clave objetivo: "diseño web Riviera Nayarit" / "diseño
 * web Nayarit".
 *
 * Ángulo propio: pueblos de playa (Sayulita, San Pancho, Bucerías, Nuevo
 * Vallarta): hoteles pequeños, escuelas de surf, retiros de yoga y wellness,
 * restaurantes y bienes raíces para extranjeros. Distinto de Baja California
 * Sur, que es lujo y pesca deportiva.
 */
export const nayarit: Landing = {
  id: 'nayarit',
  status: 'live',
  publishAt: '2026-09-28T00:00:00-06:00',
  slug: { es: 'nayarit', en: 'nayarit' },
  region: 'Nayarit',
  geo: { latitude: 20.8773, longitude: -105.4413 },
  areas: ['Nuevo Vallarta', 'Bucerías', 'Sayulita', 'San Pancho', 'Punta de Mita', 'Tepic'],
  phoneSample: '+52 322 123 4567',
  proof: ['elRollo', 'elite', 'ideograma'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Riviera Nayarit y Sayulita | Aurin',
        description:
          'Diseño web bilingüe y branding en Riviera Nayarit para hoteles pequeños, escuelas de surf, retiros de yoga, restaurantes y bienes raíces.',
        keywords:
          'diseño web Riviera Nayarit, diseño web Sayulita, páginas web Nuevo Vallarta, página web escuela de surf, página web retiro de yoga, diseño web Tepic',
      },
      hero: {
        subtitle: 'Diseño web bilingüe en Nayarit',
        titleLead: 'Diseño Web en',
        titleAccent: 'Riviera Nayarit',
        description:
          'En Sayulita, San Pancho o Bucerías tu cliente puede venir de Guadalajara, de California o de Canadá, y todos te buscan desde el celular. Diseñamos sitios bilingües para hoteles pequeños, escuelas de surf, retiros y restaurantes que transmiten lo que se vive ahí.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Nayarit',
        intro:
          'Trabajamos con negocios de Nuevo Vallarta, Bucerías, Sayulita, San Pancho, Punta de Mita y Tepic: hoteles pequeños y rentas, escuelas de surf, estudios de yoga y retiros, restaurantes y bienes raíces.',
        items: [
          {
            title: 'Sitios para hoteles pequeños y rentas',
            description:
              'Un huésped elige un lugar pequeño por su ambiente. El sitio lo muestra con buenas fotos y permite pedir disponibilidad o reservar directo.',
            bullets: ['Galería de espacios', 'Reservas o solicitud de disponibilidad', 'Sitio en español y en inglés'],
          },
          {
            title: 'Escuelas de surf, yoga y retiros',
            description:
              'Clases, paquetes y fechas de retiros: tu cliente quiere entender qué incluye y reservar su lugar sin mandar diez mensajes. Lo organizamos para que sea sencillo.',
            bullets: [
              'Página por clase, paquete o retiro',
              'Reservas en línea',
              'Contacto por WhatsApp o formulario',
            ],
          },
          {
            title: 'Bienes raíces para compradores extranjeros',
            description:
              'Tu comprador está lejos y quiere revisar las propiedades con calma. Presentamos cada una con fotos, ubicación y una forma clara de contactarte.',
            bullets: ['Página por propiedad o desarrollo', 'Fotos, planos y ubicación', 'Sitio en inglés y en español'],
          },
          {
            title: 'Branding',
            description:
              'En un pueblo de playa todo compite por verse auténtico. Creamos una identidad que refleje tu lugar y funcione en redes, en tu sitio y en tu letrero.',
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
            text: 'Una llamada para entender quién te visita, de dónde viene y qué necesita saber antes de reservar.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Nayarit',
        description: 'Lo que nos preguntan los negocios de Riviera Nayarit antes de contratar.',
        items: [
          c.faqCost('Riviera Nayarit'),
          {
            question: 'Organizo retiros, ¿el sitio puede recibir reservaciones?',
            answer:
              'Sí. El sitio puede incluir reservas o solicitudes por formulario. Cómo se conecta con tu forma de operar lo definimos en la cotización.',
          },
          {
            question: 'Muchos de mis clientes son extranjeros, ¿el sitio va en inglés?',
            answer:
              'Sí, y en Riviera Nayarit casi siempre lo recomendamos. El sitio queda disponible en inglés y en español con la misma información.',
          },
          c.faqPayment,
          c.faqRemote('Nayarit'),
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, salud y diseño de marca. Es el mismo estándar con el que trabajaríamos tu negocio en Nayarit.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Nayarit',
      breadcrumb: 'Diseño Web Nayarit',
      serviceName: 'Diseño Web y Branding en Nayarit',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio bilingüe de un hotel pequeño, escuela de surf o retiro en Nayarit.',
    },
    en: {
      seo: {
        title: 'Web Design in Riviera Nayarit & Sayulita | Aurin',
        description:
          'Bilingual web design and branding in Riviera Nayarit for small hotels, surf schools, yoga retreats, restaurants, and real estate.',
        keywords:
          'web design Riviera Nayarit, web design Sayulita, website design Nuevo Vallarta, surf school website, yoga retreat website Mexico',
      },
      hero: {
        subtitle: 'Bilingual web design in Nayarit',
        titleLead: 'Web Design in',
        titleAccent: 'Riviera Nayarit',
        description:
          'In Sayulita, San Pancho, or Bucerías your customer might come from Guadalajara, California, or Canada, and all of them find you on their phone. We design bilingual websites for small hotels, surf schools, retreats, and restaurants that convey what it feels like to be there.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Nayarit',
        intro:
          'We work with businesses in Nuevo Vallarta, Bucerías, Sayulita, San Pancho, Punta de Mita, and Tepic: small hotels and rentals, surf schools, yoga studios and retreats, restaurants, and real estate.',
        items: [
          {
            title: 'Websites for small hotels and rentals',
            description:
              'Guests choose a small place for its vibe. The site shows it with good photos and lets them ask for availability or book directly.',
            bullets: ['Space gallery', 'Bookings or availability requests', 'Site in Spanish and English'],
          },
          {
            title: 'Surf schools, yoga, and retreats',
            description:
              'Classes, packages, and retreat dates: customers want to understand what is included and save their spot without sending ten messages. We organize it to be simple.',
            bullets: ['A page per class, package, or retreat', 'Online bookings', 'Contact by WhatsApp or form'],
          },
          {
            title: 'Real estate for international buyers',
            description:
              'Your buyer is far away and wants to review properties calmly. We present each one with photos, location, and a clear way to contact you.',
            bullets: ['A page per property or development', 'Photos, floor plans, and location', 'Site in English and Spanish'],
          },
          {
            title: 'Branding',
            description:
              'In a beach town everything competes to look authentic. We create an identity that reflects your place and works on social media, your site, and your sign.',
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
            text: 'We learn who visits you, where they come from, and what they need to know before booking.',
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
        heading: 'Frequently asked questions about web design in Nayarit',
        description: 'What Riviera Nayarit businesses ask us before signing.',
        items: [
          C.faqCost('Riviera Nayarit'),
          {
            question: 'I organize retreats. Can the site take reservations?',
            answer:
              'Yes. The site can include bookings or requests by form. How it fits the way you operate is defined in the quote.',
          },
          {
            question: 'Many of my customers are foreigners. Will the site be in English?',
            answer:
              'Yes, and in Riviera Nayarit we almost always recommend it. The site is available in English and Spanish with the same information.',
          },
          C.faqPayment,
          C.faqRemote('Nayarit'),
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, healthcare, and brand design. It is the same standard we would bring to your business in Nayarit.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Nayarit',
      breadcrumb: 'Web Design Nayarit',
      serviceName: 'Web Design and Branding in Nayarit',
      howToDescription:
        'Step-by-step process to design a bilingual website for a small hotel, surf school, or retreat in Nayarit.',
    },
  },
};
