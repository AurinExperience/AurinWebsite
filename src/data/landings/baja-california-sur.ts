import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Baja California Sur — palabra clave objetivo: "diseño web Los Cabos" /
 * "diseño web Baja California Sur".
 *
 * Ángulo propio: hospitalidad de alto nivel y bienes raíces para compradores
 * de Estados Unidos y Canadá (villas, rentas, restaurantes, pesca deportiva,
 * wellness). Distinto de Quintana Roo, que es turismo masivo, y de Nayarit,
 * que es surf y pueblos de playa.
 */
export const bajaCaliforniaSur: Landing = {
  id: 'baja-california-sur',
  status: 'live',
  publishAt: '2026-09-26T00:00:00-06:00',
  slug: { es: 'baja-california-sur', en: 'baja-california-sur' },
  region: 'Baja California Sur',
  geo: { latitude: 22.8905, longitude: -109.9167 },
  areas: ['Los Cabos', 'Cabo San Lucas', 'San José del Cabo', 'La Paz', 'Todos Santos', 'Loreto'],
  phoneSample: '+52 624 123 4567',
  proof: ['elRollo', 'elite', 'grupoEstrella'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Los Cabos y Baja California Sur | Aurin',
        description:
          'Diseño web bilingüe y branding en Los Cabos, La Paz y Todos Santos para villas, rentas vacacionales, restaurantes, bienes raíces y wellness.',
        keywords:
          'diseño web Los Cabos, diseño web Baja California Sur, páginas web Cabo San Lucas, diseño web La Paz, sitio bilingüe villas, página web bienes raíces Los Cabos',
      },
      hero: {
        subtitle: 'Diseño web bilingüe en Baja California Sur',
        titleLead: 'Diseño Web en',
        titleAccent: 'Los Cabos',
        description:
          'Tu huésped o tu comprador llega de Estados Unidos o Canadá y compara tu sitio con los mejores del mundo. Diseñamos sitios bilingües para villas, restaurantes, bienes raíces y experiencias en Los Cabos, La Paz y Todos Santos que se ven al nivel de lo que ofrecen.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Baja California Sur',
        intro:
          'Trabajamos con negocios de Cabo San Lucas, San José del Cabo, La Paz, Todos Santos y Loreto: villas y rentas vacacionales, restaurantes, inmobiliarias, tours y pesca deportiva, spas y centros de wellness.',
        items: [
          {
            title: 'Sitios para villas y rentas vacacionales',
            description:
              'Un huésped que va a pagar varias noches quiere ver cada espacio, entender qué incluye y resolver sus dudas antes de escribir. El sitio lo presenta con fotos grandes, información clara y una forma sencilla de pedir disponibilidad.',
            bullets: [
              'Galería por espacio y amenidades',
              'Solicitud de disponibilidad o reservas',
              'Sitio en inglés y en español',
            ],
          },
          {
            title: 'Sitios para bienes raíces',
            description:
              'Tu comprador está lejos y decide mucho antes de visitar. Organizamos tus desarrollos o propiedades para que pueda revisarlos con calma y contactarte cuando esté listo.',
            bullets: [
              'Página por desarrollo o propiedad',
              'Fotos, planos y ubicación',
              'Formulario de contacto en ambos idiomas',
            ],
          },
          {
            title: 'Restaurantes, tours y experiencias',
            description:
              'El visitante decide dónde comer o qué hacer desde el celular, muchas veces ya en el destino. Menú, horarios, ubicación y el botón para reservar tienen que estar a la mano.',
            bullets: [
              'Menú o catálogo de experiencias',
              'Reservas en línea',
              'Horario, ubicación y cómo llegar',
            ],
          },
          {
            title: 'Branding para hospitalidad',
            description:
              'En un destino donde todo compite por verse exclusivo, la marca es lo que te separa. Creamos identidades que funcionan en el sitio, en redes, en la señalética y en los detalles que el huésped se lleva.',
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
            text: 'Una llamada para entender quién es tu huésped o tu comprador, de dónde viene y qué necesita ver antes de decidir.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas, qué va en cada una y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Baja California Sur',
        description: 'Lo que nos preguntan los negocios de Los Cabos y La Paz antes de contratar.',
        items: [
          c.faqCost('Los Cabos'),
          {
            question: 'Mis clientes son de Estados Unidos, ¿el sitio va en inglés?',
            answer:
              'Sí, y en Baja California Sur casi siempre lo recomendamos. El sitio queda disponible en inglés y en español con la misma información, para tu cliente extranjero y para el nacional.',
          },
          {
            question: 'Ya estoy en plataformas de renta, ¿para qué quiero sitio propio?',
            answer:
              'Las plataformas ayudan, pero la marca y la relación con el huésped son de ellas. Un sitio propio te da un lugar para presentar tu propiedad a tu manera y recibir solicitudes directas.',
          },
          c.faqPayment,
          c.faqRemote('Baja California Sur'),
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, salud y construcción. Es el mismo estándar con el que trabajaríamos tu negocio en Baja California Sur.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Los Cabos',
      breadcrumb: 'Diseño Web Baja California Sur',
      serviceName: 'Diseño Web y Branding en Baja California Sur',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio bilingüe de una villa, restaurante o inmobiliaria en Baja California Sur.',
    },
    en: {
      seo: {
        title: 'Web Design in Los Cabos & Baja California Sur | Aurin',
        description:
          'Bilingual web design and branding in Los Cabos, La Paz, and Todos Santos for villas, vacation rentals, restaurants, real estate, and wellness.',
        keywords:
          'web design Los Cabos, web design Cabo San Lucas, website design Baja California Sur, villa website design, real estate website Los Cabos, web design La Paz Mexico',
      },
      hero: {
        subtitle: 'Bilingual web design in Baja California Sur',
        titleLead: 'Web Design in',
        titleAccent: 'Los Cabos',
        description:
          'Your guest or buyer flies in from the U.S. or Canada and compares your site with the best in the world. We design bilingual websites for villas, restaurants, real estate, and experiences in Los Cabos, La Paz, and Todos Santos that look as good as what they offer.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Baja California Sur',
        intro:
          'We work with businesses in Cabo San Lucas, San José del Cabo, La Paz, Todos Santos, and Loreto: villas and vacation rentals, restaurants, real estate agencies, tours and sport fishing, spas, and wellness centers.',
        items: [
          {
            title: 'Websites for villas and vacation rentals',
            description:
              'A guest about to book several nights wants to see every space, understand what is included, and clear up questions before writing. The site shows it with large photos, clear information, and a simple way to ask for availability.',
            bullets: [
              'Gallery by space and amenities',
              'Availability or booking requests',
              'Site in English and Spanish',
            ],
          },
          {
            title: 'Real estate websites',
            description:
              'Your buyer is far away and decides long before visiting. We organize your developments or listings so they can review them calmly and contact you when ready.',
            bullets: [
              'A page per development or property',
              'Photos, floor plans, and location',
              'Contact form in both languages',
            ],
          },
          {
            title: 'Restaurants, tours, and experiences',
            description:
              'Visitors decide where to eat or what to do on their phone, often once they have arrived. Menu, hours, location, and the button to book need to be within reach.',
            bullets: ['Menu or experience catalog', 'Online reservations', 'Hours, location, and directions'],
          },
          {
            title: 'Hospitality branding',
            description:
              'In a destination where everything competes to look exclusive, the brand is what sets you apart. We create identities that work on the site, on social media, on signage, and in the details guests take home.',
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
            text: 'We learn who your guest or buyer is, where they come from, and what they need to see before deciding.',
          },
          {
            name: 'Structure',
            text: 'We define the pages, what goes on each, and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Baja California Sur',
        description: 'What businesses in Los Cabos and La Paz ask us before signing.',
        items: [
          C.faqCost('Los Cabos'),
          {
            question: 'My clients are from the U.S. Will the site be in English?',
            answer:
              'Yes, and in Baja California Sur we almost always recommend it. The site is available in English and Spanish with the same information, for both international and domestic clients.',
          },
          {
            question: 'I am already on rental platforms. Why do I need my own site?',
            answer:
              'Platforms help, but the brand and the guest relationship belong to them. Your own site gives you a place to present your property your way and receive direct inquiries.',
          },
          C.faqPayment,
          C.faqRemote('Baja California Sur'),
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, healthcare, and construction. It is the same standard we would bring to your business in Baja California Sur.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Los Cabos',
      breadcrumb: 'Web Design Baja California Sur',
      serviceName: 'Web Design and Branding in Baja California Sur',
      howToDescription:
        'Step-by-step process to design a bilingual website for a villa, restaurant, or real estate business in Baja California Sur.',
    },
  },
};
