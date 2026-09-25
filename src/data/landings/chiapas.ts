import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Chiapas — palabra clave objetivo: "diseño web Chiapas" / "diseño web Tuxtla".
 *
 * Ángulo propio: turismo de San Cristóbal y Palenque (hoteles boutique, tours,
 * restaurantes) y artesanía y ámbar que se venden fuera del estado. El café
 * aparece de pasada; su terreno fuerte es Veracruz.
 */
export const chiapas: Landing = {
  id: 'chiapas',
  status: 'draft',
  slug: { es: 'chiapas', en: 'chiapas' },
  region: 'Chiapas',
  geo: { latitude: 16.7531, longitude: -93.1156 },
  areas: ['Tuxtla Gutiérrez', 'San Cristóbal de las Casas', 'Tapachula', 'Palenque', 'Comitán', 'Chiapa de Corzo'],
  phoneSample: '+52 961 123 4567',
  proof: ['elRollo', 'fruitAcademy', 'ideograma'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Chiapas: Tuxtla y San Cristóbal | Aurin',
        description:
          'Diseño web y branding en Chiapas para hoteles boutique, tours, restaurantes y marcas de artesanía, ámbar y café en Tuxtla, San Cristóbal y Palenque.',
        keywords:
          'diseño web Chiapas, páginas web Tuxtla Gutiérrez, diseño web San Cristóbal de las Casas, página web hotel boutique, tienda en línea artesanía',
      },
      hero: {
        subtitle: 'Diseño web y branding en Chiapas',
        titleLead: 'Diseño Web en',
        titleAccent: 'Chiapas',
        description:
          'Quien viaja a San Cristóbal o a Palenque elige hotel y tour desde el celular, y quien compra artesanía chiapaneca muchas veces está en otro estado o en otro país. Diseñamos sitios que presentan lo que haces con el cuidado que merece y te ayudan a vender directo.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Chiapas',
        intro:
          'Trabajamos con negocios de Tuxtla Gutiérrez, San Cristóbal de las Casas, Palenque, Comitán, Tapachula y Chiapa de Corzo: hoteles boutique, operadores de tours, restaurantes y cafeterías, y marcas de artesanía, textiles, ámbar y café.',
        items: [
          {
            title: 'Sitios para hoteles boutique',
            description:
              'Un hotel boutique vende una experiencia, no solo una habitación. El sitio cuenta esa historia con buenas fotos y permite pedir disponibilidad o reservar sin depender solo de las plataformas.',
            bullets: [
              'Galería de habitaciones y espacios',
              'Reservas o solicitud de disponibilidad',
              'Sitio en español y en inglés',
            ],
          },
          {
            title: 'Tours y experiencias',
            description:
              'Cascadas, zonas arqueológicas, pueblos: el viajero compara opciones y elige la que le da más confianza. Presentamos tus recorridos con claridad y un camino corto para reservar.',
            bullets: [
              'Página por recorrido con itinerario',
              'Reservas o solicitud por formulario o WhatsApp',
              'Fotos y reseñas de tus clientes',
            ],
          },
          {
            title: 'Tienda en línea para artesanía y ámbar',
            description:
              'Si vendes textiles, ámbar o artesanía, una tienda en línea te abre clientes que nunca van a pasar por tu local. La diseñamos para que el trabajo artesanal se vea como lo que es.',
            bullets: ['Catálogo por pieza o colección', 'Pagos en línea', 'Historia y origen de cada producto'],
          },
          {
            title: 'Branding para productos chiapanecos',
            description:
              'Café, cacao, textiles: el producto es bueno, pero sin una marca clara compite solo por precio. Creamos una identidad que cuente de dónde viene y por qué vale lo que cuesta.',
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
            text: 'Una llamada para entender qué vendes, a quién y desde dónde te buscan: viajeros, compradores de otros estados o clientes de fuera del país.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si hace falta, trabajamos primero la marca. Luego definimos las páginas, el catálogo y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Chiapas',
        description: 'Lo que nos preguntan los negocios de Chiapas antes de contratar.',
        items: [
          c.faqCost('Chiapas'),
          {
            question: 'Vendo artesanía, ¿puedo vender a otros países?',
            answer:
              'La tienda en línea puede recibir pedidos de fuera del país. Lo que hay que resolver antes es cómo vas a enviar y cobrar, y eso lo revisamos contigo en la llamada para que la tienda se arme de acuerdo con lo que sí puedes cumplir.',
          },
          {
            question: 'Mi hotel ya está en plataformas, ¿para qué quiero sitio propio?',
            answer:
              'Las plataformas te traen huéspedes, pero la relación es de ellas. Un sitio propio te da un lugar para contar tu historia y recibir reservas directas.',
          },
          c.faqPayment,
          c.faqRemote('Chiapas'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, alimentos y diseño de marca. Es el mismo estándar con el que trabajaríamos tu negocio en Chiapas.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Chiapas',
      breadcrumb: 'Diseño Web Chiapas',
      serviceName: 'Diseño Web y Branding en Chiapas',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de un hotel, tour o marca de artesanía en Chiapas.',
    },
    en: {
      seo: {
        title: 'Web Design in Chiapas: Tuxtla & San Cristóbal | Aurin',
        description:
          'Web design and branding in Chiapas for boutique hotels, tours, restaurants, and craft, amber, and coffee brands in Tuxtla, San Cristóbal, and Palenque.',
        keywords:
          'web design Chiapas, website design San Cristóbal de las Casas, boutique hotel website Mexico, tour operator website Chiapas, handicraft online store Mexico',
      },
      hero: {
        subtitle: 'Web design and branding in Chiapas',
        titleLead: 'Web Design in',
        titleAccent: 'Chiapas',
        description:
          'Travelers heading to San Cristóbal or Palenque choose a hotel and a tour on their phone, and people buying Chiapas crafts are often in another state or country. We design websites that present what you do with the care it deserves and help you sell directly.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Chiapas',
        intro:
          'We work with businesses in Tuxtla Gutiérrez, San Cristóbal de las Casas, Palenque, Comitán, Tapachula, and Chiapa de Corzo: boutique hotels, tour operators, restaurants and cafés, and craft, textile, amber, and coffee brands.',
        items: [
          {
            title: 'Websites for boutique hotels',
            description:
              'A boutique hotel sells an experience, not just a room. The site tells that story with good photography and lets guests ask for availability or book without relying only on platforms.',
            bullets: [
              'Room and space gallery',
              'Bookings or availability requests',
              'Site in Spanish and English',
            ],
          },
          {
            title: 'Tours and experiences',
            description:
              'Waterfalls, archaeological sites, villages: travelers compare options and pick the one that feels most trustworthy. We present your tours clearly with a short path to booking.',
            bullets: [
              'A page per tour with itinerary',
              'Bookings or requests via form or WhatsApp',
              'Photos and customer reviews',
            ],
          },
          {
            title: 'Online store for crafts and amber',
            description:
              'If you sell textiles, amber, or crafts, an online store opens customers who will never walk past your shop. We design it so handmade work looks like what it is.',
            bullets: ['Catalog by piece or collection', 'Online payments', 'Story and origin of each product'],
          },
          {
            title: 'Branding for Chiapas products',
            description:
              'Coffee, cacao, textiles: the product is good, but without a clear brand it competes on price alone. We create an identity that tells where it comes from and why it is worth what it costs.',
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
            text: 'We learn what you sell, to whom, and where they find you from: travelers, buyers in other states, or customers abroad.',
          },
          {
            name: 'Brand and structure',
            text: 'When needed we work on the brand first. Then we define the pages, the catalog, and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Chiapas',
        description: 'What Chiapas businesses ask us before signing.',
        items: [
          C.faqCost('Chiapas'),
          {
            question: 'I sell crafts. Can I sell to other countries?',
            answer:
              'The online store can take orders from abroad. What needs solving first is how you will ship and get paid, and we review that with you on the call so the store is built around what you can actually deliver.',
          },
          {
            question: 'My hotel is already on platforms. Why do I need my own site?',
            answer:
              'Platforms bring you guests, but the relationship belongs to them. Your own site gives you a place to tell your story and receive direct bookings.',
          },
          C.faqPayment,
          C.faqRemote('Chiapas'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, food, and brand design. It is the same standard we would bring to your business in Chiapas.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Chiapas',
      breadcrumb: 'Web Design Chiapas',
      serviceName: 'Web Design and Branding in Chiapas',
      howToDescription:
        'Step-by-step process to design a website for a hotel, tour, or craft brand in Chiapas.',
    },
  },
};
