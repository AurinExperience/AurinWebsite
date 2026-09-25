import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Tlaxcala — palabra clave objetivo: "diseño web Tlaxcala".
 *
 * Ángulo propio: haciendas y jardines para bodas y eventos, turismo de
 * temporada (santuario de las luciérnagas, Huamantla) y pequeñas empresas
 * textiles. Mercado chico junto a Puebla: la entrada es por eventos y
 * turismo, que Puebla no toca.
 */
export const tlaxcala: Landing = {
  id: 'tlaxcala',
  status: 'draft',
  slug: { es: 'tlaxcala', en: 'tlaxcala' },
  region: 'Tlaxcala',
  geo: { latitude: 19.3182, longitude: -98.2375 },
  areas: ['Tlaxcala', 'Apizaco', 'Huamantla', 'Nanacamilpa', 'Chiautempan', 'Calpulalpan'],
  phoneSample: '+52 246 123 4567',
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Tlaxcala para Haciendas y Eventos | Aurin',
        description:
          'Diseño web y branding en Tlaxcala para haciendas y jardines de eventos, turismo de temporada, hospedaje y pequeñas empresas textiles.',
        keywords:
          'diseño web Tlaxcala, página web hacienda para bodas, página web jardín de eventos, diseño web Huamantla, páginas web Apizaco',
      },
      hero: {
        subtitle: 'Diseño web y branding en Tlaxcala',
        titleLead: 'Diseño Web en',
        titleAccent: 'Tlaxcala',
        description:
          'Una pareja que busca hacienda para su boda compara decenas de opciones antes de agendar una visita, y el viajero que viene a ver las luciérnagas reserva desde el celular. Diseñamos sitios que presentan tu lugar como se vive en persona.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Tlaxcala',
        intro:
          'Trabajamos con negocios de Tlaxcala, Apizaco, Huamantla, Nanacamilpa, Chiautempan y Calpulalpan: haciendas y jardines de eventos, cabañas y hoteles, operadores turísticos, restaurantes y empresas textiles.',
        items: [
          {
            title: 'Sitios para haciendas y jardines de eventos',
            description:
              'Quien organiza una boda o un evento quiere ver los espacios, saber capacidades y qué incluye cada paquete antes de visitar. El sitio lo presenta con buenas fotos y una forma clara de pedir información.',
            bullets: [
              'Galería por espacio y capacidades',
              'Paquetes y servicios',
              'Formulario para solicitar fecha o visita',
            ],
          },
          {
            title: 'Turismo de temporada',
            description:
              'En temporada de luciérnagas o de la Noche que Nadie Duerme, el visitante decide rápido. Presentamos tus recorridos u hospedaje y facilitamos la reserva.',
            bullets: ['Página por recorrido o hospedaje', 'Reservas en línea', 'Pensado primero para celular'],
          },
          {
            title: 'Empresas textiles',
            description:
              'Si fabricas textiles o prendas, un sitio con tu catálogo y tus capacidades te abre clientes fuera del estado.',
            bullets: ['Catálogo de productos', 'Capacidades y acabados', 'Formulario de cotización'],
          },
          {
            title: 'Branding',
            description:
              'En eventos, la marca se ve en la invitación, en la entrada y en las fotos que se comparten. Creamos una identidad que se recuerde.',
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
            text: 'Una llamada para entender qué tipo de eventos o visitantes recibes y qué preguntan antes de decidirse.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: espacios, paquetes, galería y contacto, pensando en quien la consulta desde el celular.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Tlaxcala',
        description: 'Lo que nos preguntan los negocios de Tlaxcala antes de contratar.',
        items: [
          c.faqCost('Tlaxcala'),
          {
            question: 'Tengo una hacienda para eventos, ¿el sitio puede mostrar fechas disponibles?',
            answer:
              'El sitio puede incluir un formulario para solicitar fecha o visita. Mostrar disponibilidad en tiempo real depende de cómo manejas tu agenda, y eso lo revisamos en la cotización.',
          },
          {
            question: '¿Pueden hacer la galería con las fotos de eventos que ya tengo?',
            answer:
              'Sí. Trabajamos con tus fotos y las organizamos para que cada espacio se vea en su mejor momento. Si necesitas fotos nuevas, lo platicamos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote,
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, cultura y diseño de marca. Es el mismo estándar con el que trabajaríamos tu negocio en Tlaxcala.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Tlaxcala',
      breadcrumb: 'Diseño Web Tlaxcala',
      serviceName: 'Diseño Web y Branding en Tlaxcala',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de una hacienda de eventos o un negocio turístico en Tlaxcala.',
    },
    en: {
      seo: {
        title: 'Web Design in Tlaxcala for Haciendas & Events | Aurin',
        description:
          'Web design and branding in Tlaxcala for event haciendas and gardens, seasonal tourism, lodging, and small textile companies.',
        keywords:
          'web design Tlaxcala, wedding hacienda website Mexico, event venue website, website design Huamantla, branding Tlaxcala',
      },
      hero: {
        subtitle: 'Web design and branding in Tlaxcala',
        titleLead: 'Web Design in',
        titleAccent: 'Tlaxcala',
        description:
          'A couple looking for a wedding hacienda compares dozens of options before booking a visit, and travelers coming to see the fireflies book on their phone. We design websites that present your place the way it feels in person.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Tlaxcala',
        intro:
          'We work with businesses in Tlaxcala, Apizaco, Huamantla, Nanacamilpa, Chiautempan, and Calpulalpan: event haciendas and gardens, cabins and hotels, tour operators, restaurants, and textile companies.',
        items: [
          {
            title: 'Websites for event haciendas and gardens',
            description:
              'Anyone planning a wedding or event wants to see the spaces, capacities, and what each package includes before visiting. The site presents it with good photos and a clear way to ask for information.',
            bullets: ['Gallery by space and capacity', 'Packages and services', 'Form to request a date or visit'],
          },
          {
            title: 'Seasonal tourism',
            description:
              'During firefly season or Huamantla’s festival, visitors decide fast. We present your tours or lodging and make booking easy.',
            bullets: ['A page per tour or lodging', 'Online bookings', 'Mobile-first'],
          },
          {
            title: 'Textile companies',
            description:
              'If you make textiles or garments, a site with your catalog and capabilities opens customers outside the state.',
            bullets: ['Product catalog', 'Capabilities and finishes', 'Quote request form'],
          },
          {
            title: 'Branding',
            description:
              'For events, the brand shows up on the invitation, at the entrance, and in the photos people share. We create an identity that is remembered.',
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
            text: 'We learn what kind of events or visitors you host and what they ask before deciding.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: spaces, packages, gallery, and contact, thinking about someone checking it on a phone.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Tlaxcala',
        description: 'What Tlaxcala businesses ask us before signing.',
        items: [
          C.faqCost('Tlaxcala'),
          {
            question: 'I run an event hacienda. Can the site show available dates?',
            answer:
              'The site can include a form to request a date or visit. Showing live availability depends on how you manage your calendar, and we review that in the quote.',
          },
          {
            question: 'Can you build the gallery with event photos I already have?',
            answer:
              'Yes. We work with your photos and organize them so each space looks its best. If you need new photos, we discuss it in the quote.',
          },
          C.faqPayment,
          C.faqRemote,
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, culture, and brand design. It is the same standard we would bring to your business in Tlaxcala.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Tlaxcala',
      breadcrumb: 'Web Design Tlaxcala',
      serviceName: 'Web Design and Branding in Tlaxcala',
      howToDescription:
        'Step-by-step process to design a website for an event hacienda or tourism business in Tlaxcala.',
    },
  },
};
