import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Hoteles y hospedaje — palabra clave: "diseño web para hoteles" / "página web
 * para hotel". Pareja comercial de la guía "qué debe tener la página web de
 * un hotel".
 *
 * Ángulo propio: cada reserva directa es una comisión que no se le paga a una
 * agencia en línea; motor de reservas, fotos y huésped internacional.
 * Prueba social: El Rollo, cliente real de turismo y recreación.
 */
export const hoteles: Sector = {
  id: 'hoteles',
  status: 'live',
  publishAt: '2026-10-15T00:00:00-06:00',
  slug: { es: 'para-hoteles', en: 'for-hotels' },
  name: { es: 'Hoteles y hospedaje', en: 'Hotels and lodging' },
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  lead: {
    es: {
      heading: 'Hablemos de tu hotel',
      description:
        'Cuéntanos cómo reciben hoy sus reservas y qué huésped quieren atraer. Te contactaremos lo antes posible para entender tu hotel y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un hotel boutique de 20 habitaciones y queremos más reservas directas.',
    },
    en: {
      heading: 'Let’s talk about your hotel',
      description:
        'Tell us how you take bookings today and which guests you want to attract. We will reach out as soon as possible to understand your hotel and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a 20-room boutique hotel and want more direct bookings.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Hoteles y Hospedaje | Aurin',
        description:
          'Páginas web para hoteles: más reservas directas, motor de reservas, sitio bilingüe y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para hoteles, página web para hotel, sitio web hotel boutique, reservas directas hotel, motor de reservas, marketing hotelero',
      },
      hero: {
        subtitle: 'Diseño web para hoteles y hospedaje',
        titleLead: 'Diseño Web para',
        titleAccent: 'Hoteles',
        description:
          'Casi todo huésped pasa por tu sitio antes de reservar, aunque al final reserve en una agencia en línea. Cada vez más también le pregunta a una IA dónde hospedarse. Diseñamos sitios que hacen lucir tu hotel y convierten esa visita en una reserva directa, sin comisión.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          c.stats[1],
          { value: 'Turismo', label: 'ya trabajamos con marcas de turismo y recreación como El Rollo' },
        ],
      },
      services: {
        heading: 'Diseño web para hoteles: lo que puede incluir tu sitio',
        intro:
          'Diseñamos páginas web para hoteles boutique, hoteles de ciudad, resorts y hospedajes. Cada página web para hotel se diseña a partir de tu huésped y de cómo quieres recibir tus reservas.',
        items: [
          {
            title: 'Reservas directas',
            description:
              'Integramos a la medida tu motor de reservas para que el huésped vea disponibilidad y confirme en unos pasos. Cada reserva directa es una comisión que te quedas tú.',
            bullets: ['Botón de reservar en cada pantalla', 'Contacto directo por WhatsApp'],
            custom: ['Motor de reservas integrado'],
          },
          {
            title: 'Fotos que venden la experiencia',
            description:
              'Habitaciones, áreas comunes y entorno con galerías grandes que cargan rápido aun con buena calidad. El huésped compra el lugar antes de llegar.',
            bullets: ['Galerías por tipo de habitación', 'Amenidades y servicios', 'El destino y lo que hay cerca'],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Los viajeros buscan en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google dónde hospedarse. Estructuramos tu sitio para que esas herramientas entiendan tu hotel y te puedan recomendar.',
            bullets: ['Datos estructurados de hotel', 'Sitio en español y en inglés', 'Contenido que la IA puede citar'],
          },
          {
            title: 'Branding para hoteles',
            description:
              'Una identidad cuidada hace que tu hotel se recuerde y se vea igual de especial en tu sitio, tus amenidades, tu señalética y tus redes.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Amenidades, señalética y papelería según el alcance',
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
            text: 'Una llamada para entender tu hotel, tu huésped y cómo reciben hoy sus reservas.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: habitaciones, experiencias, destino, reservas y aviso de privacidad. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para hoteles',
        description: 'Lo que nos preguntan hoteles y hospedajes antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de un hotel?',
            answer:
              'Depende del alcance: cuántas habitaciones y experiencias, la integración con tu motor de reservas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Ya vendo por Booking y Expedia, ¿necesito un sitio propio?',
            answer:
              'Las agencias en línea dan visibilidad, pero cobran comisión por cada reserva. Un sitio propio con buenas fotos y reserva directa te permite quedarte con una parte mayor de tus ventas. Lo ideal es usar los dos.',
          },
          {
            question: '¿Pueden conectar mi motor de reservas?',
            answer:
              'Sí, como desarrollo a la medida: integramos el motor de reservas o el channel manager que ya usas, o te ayudamos a elegir uno si todavía no tienes.',
          },
          s.faqAi('mi hotel'),
          c.faqPayment,
          s.faqRemote('hoteles'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en turismo, cultura y marca. El mismo cuidado que ponemos en cada proyecto es el que pondríamos en tu hotel.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para hoteles',
      breadcrumb: 'Diseño Web para Hoteles',
      serviceName: 'Diseño Web y Branding para Hoteles y Hospedaje',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un hotel o un hospedaje.',
    },
    en: {
      seo: {
        title: 'Web Design for Hotels and Lodging | Aurin',
        description:
          'Websites for hotels: more direct bookings, an integrated booking engine, a bilingual site, and visibility on Google and AI search tools.',
        keywords:
          'web design for hotels, hotel website, boutique hotel website, direct hotel bookings, booking engine, hotel marketing',
      },
      hero: {
        subtitle: 'Web design for hotels and lodging',
        titleLead: 'Web Design for',
        titleAccent: 'Hotels',
        description:
          'Almost every guest visits your website before booking, even if they end up booking through an online travel agency. More and more, they also ask an AI where to stay. We design websites that make your hotel shine and turn that visit into a commission-free direct booking.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          C.stats[1],
          { value: 'Tourism', label: 'we already work with tourism and leisure brands like El Rollo' },
        ],
      },
      services: {
        heading: 'Web design for hotels: what your site can include',
        intro:
          'We design websites for boutique hotels, city hotels, resorts, and lodging. Every hotel website is designed around your guests and how you want to take bookings.',
        items: [
          {
            title: 'Direct bookings',
            description:
              'As a custom build, we integrate your booking engine so guests see availability and confirm in a few steps. Every direct booking is a commission you keep.',
            bullets: ['Book button on every screen', 'Direct contact over WhatsApp'],
            custom: ['Integrated booking engine'],
          },
          {
            title: 'Photos that sell the experience',
            description:
              'Rooms, common areas, and surroundings in large galleries that still load fast. Guests buy the place before they arrive.',
            bullets: ['Galleries by room type', 'Amenities and services', 'The destination and what is nearby'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Travelers search on Google, but they also ask ChatGPT or Google’s AI answers where to stay. We structure your site so those tools understand your hotel and can recommend you.',
            bullets: ['Hotel structured data', 'Spanish and English site', 'Content AI tools can cite'],
          },
          {
            title: 'Branding for hotels',
            description:
              'A carefully crafted identity makes your hotel memorable and equally special on your site, amenities, signage, and social media.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Amenities, signage, and stationery based on project scope',
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
            text: 'We learn about your hotel, your guests, and how you take bookings today.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: rooms, experiences, destination, bookings, and the privacy notice. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for hotels',
        description: 'What hotels and lodging businesses ask us before signing.',
        items: [
          {
            question: 'How much does a hotel website cost?',
            answer:
              'It depends on scope: how many rooms and experiences, integration with your booking engine, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'I already sell through Booking and Expedia. Do I need my own site?',
            answer:
              'Online travel agencies give visibility, but they charge a commission on every booking. Your own site with great photos and direct booking lets you keep a larger share of your sales. Ideally you use both.',
          },
          {
            question: 'Can you connect my booking engine?',
            answer:
              'Yes, as custom development: we integrate the booking engine or channel manager you already use, or help you choose one if you do not have one yet.',
          },
          S.faqAi('my hotel'),
          C.faqPayment,
          S.faqRemote('hotels'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in tourism, culture, and branding. The same care we put into every project is what we would bring to your hotel.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for hotels',
      breadcrumb: 'Web Design for Hotels',
      serviceName: 'Web Design and Branding for Hotels and Lodging',
      howToDescription: 'Step-by-step process to design a website for a hotel or lodging business.',
    },
  },
};
