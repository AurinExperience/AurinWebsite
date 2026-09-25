import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Guerrero — palabra clave objetivo: "diseño web Acapulco" / "diseño web
 * Guerrero".
 *
 * Ángulo propio: hoteles y restaurantes de Acapulco que están renovando su
 * imagen, turismo boutique en Zihuatanejo y la platería de Taxco, que puede
 * vender en línea. Estado vecino de Morelos.
 */
export const guerrero: Landing = {
  id: 'guerrero',
  status: 'live',
  publishAt: '2026-09-27T00:00:00-06:00',
  slug: { es: 'guerrero', en: 'guerrero' },
  region: 'Guerrero',
  geo: { latitude: 16.8531, longitude: -99.8237 },
  areas: ['Acapulco', 'Zihuatanejo', 'Ixtapa', 'Taxco', 'Chilpancingo', 'Iguala'],
  phoneSample: '+52 744 123 4567',
  proof: ['elRollo', 'ideograma', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Acapulco, Taxco y Guerrero | Aurin',
        description:
          'Diseño web y branding en Guerrero para hoteles y restaurantes de Acapulco, turismo en Zihuatanejo y platerías de Taxco que quieren vender en línea.',
        keywords:
          'diseño web Acapulco, páginas web Guerrero, diseño web Zihuatanejo, tienda en línea plata Taxco, diseño web hotel Acapulco',
      },
      hero: {
        subtitle: 'Diseño web y branding en Guerrero',
        titleLead: 'Diseño Web en',
        titleAccent: 'Guerrero',
        description:
          'Muchos hoteles y restaurantes de Acapulco están renovándose, y la imagen en línea es parte de esa renovación. En Zihuatanejo el viajero busca algo más boutique, y en Taxco la plata puede venderse a todo el país. Diseñamos sitios para cada caso.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Guerrero',
        intro:
          'Trabajamos con negocios de Acapulco, Zihuatanejo, Ixtapa, Taxco, Chilpancingo e Iguala: hoteles, restaurantes, operadores de tours, platerías y talleres, y comercios y servicios.',
        items: [
          {
            title: 'Sitios para hoteles y restaurantes',
            description:
              'Si tu negocio se renovó, tu sitio tiene que mostrarlo. Presentamos tus espacios con buenas fotos y facilitamos que te reserven directo.',
            bullets: [
              'Galería de habitaciones, espacios o menú',
              'Reservas en línea',
              'Sitio en español y en inglés',
            ],
          },
          {
            title: 'Tienda en línea para platería',
            description:
              'La plata de Taxco se vende a turistas, pero también podría venderse a clientes de todo el país. Diseñamos una tienda que muestre el trabajo del taller y facilite la compra.',
            bullets: [
              'Catálogo por colección o pieza',
              'Pagos en línea',
              'Historia del taller y del oficio',
            ],
          },
          {
            title: 'Turismo boutique en Zihuatanejo',
            description:
              'El viajero que elige Zihuatanejo busca algo tranquilo y auténtico. El sitio tiene que transmitir eso desde la primera foto.',
            bullets: ['Diseño que cuenta la experiencia', 'Reservas o solicitud de disponibilidad', 'Pensado primero para celular'],
          },
          {
            title: 'Branding',
            description:
              'Una renovación es buen momento para revisar la marca. Creamos o actualizamos tu identidad para que acompañe la nueva etapa de tu negocio.',
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
            text: 'Una llamada para entender qué cambió en tu negocio, a quién quieres atraer y qué necesita ver antes de reservar o comprar.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si hace falta, trabajamos primero la marca. Luego definimos las páginas y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Guerrero',
        description: 'Lo que nos preguntan los negocios de Guerrero antes de contratar.',
        items: [
          c.faqCost('Acapulco'),
          {
            question: 'Mi hotel se remodeló, ¿conviene rediseñar el sitio?',
            answer:
              'Casi siempre. Si el sitio sigue mostrando el hotel de antes, el huésped no ve la inversión que hiciste. Un rediseño con fotos nuevas y reservas directas ayuda a comunicarla.',
          },
          {
            question: 'Tengo un taller de plata, ¿puedo vender en línea a todo el país?',
            answer:
              'Sí. La tienda puede recibir pedidos de todo el país. Antes revisamos contigo cómo vas a enviar y cobrar, para armarla de acuerdo con lo que sí puedes cumplir.',
          },
          c.faqPayment,
          c.faqRemote('Guerrero'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, diseño de marca y salud. Es el mismo estándar con el que trabajaríamos tu negocio en Guerrero.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Guerrero',
      breadcrumb: 'Diseño Web Guerrero',
      serviceName: 'Diseño Web y Branding en Guerrero',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de un hotel, restaurante o platería en Guerrero.',
    },
    en: {
      seo: {
        title: 'Web Design in Acapulco, Taxco & Guerrero | Aurin',
        description:
          'Web design and branding in Guerrero for hotels and restaurants in Acapulco, tourism in Zihuatanejo, and Taxco silver workshops ready to sell online.',
        keywords:
          'web design Acapulco, website design Zihuatanejo, Taxco silver online store, hotel website Acapulco, branding Guerrero Mexico',
      },
      hero: {
        subtitle: 'Web design and branding in Guerrero',
        titleLead: 'Web Design in',
        titleAccent: 'Guerrero',
        description:
          'Many hotels and restaurants in Acapulco are renovating, and their online image is part of that. In Zihuatanejo travelers look for something more boutique, and Taxco silver can sell across the country. We design websites for each case.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Guerrero',
        intro:
          'We work with businesses in Acapulco, Zihuatanejo, Ixtapa, Taxco, Chilpancingo, and Iguala: hotels, restaurants, tour operators, silver workshops, and local retail and services.',
        items: [
          {
            title: 'Websites for hotels and restaurants',
            description:
              'If your business was renovated, your site has to show it. We present your spaces with good photography and make direct booking easy.',
            bullets: [
              'Gallery of rooms, spaces, or menu',
              'Online reservations',
              'Site in Spanish and English',
            ],
          },
          {
            title: 'Online store for silverwork',
            description:
              'Taxco silver sells to tourists, but it could also sell to customers across the country. We design a store that shows the workshop’s craft and makes buying easy.',
            bullets: ['Catalog by collection or piece', 'Online payments', 'Story of the workshop and the craft'],
          },
          {
            title: 'Boutique tourism in Zihuatanejo',
            description:
              'Travelers who choose Zihuatanejo want something calm and authentic. The site needs to convey that from the first photo.',
            bullets: ['Design that tells the experience', 'Bookings or availability requests', 'Mobile-first'],
          },
          {
            title: 'Branding',
            description:
              'A renovation is a good moment to revisit the brand. We create or update your identity to go with your business’s new stage.',
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
            text: 'We learn what changed in your business, who you want to attract, and what they need to see before booking or buying.',
          },
          {
            name: 'Brand and structure',
            text: 'When needed we work on the brand first. Then we define the pages and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Guerrero',
        description: 'What Guerrero businesses ask us before signing.',
        items: [
          C.faqCost('Acapulco'),
          {
            question: 'My hotel was remodeled. Should I redesign the site?',
            answer:
              'Almost always. If the site still shows the old hotel, guests do not see the investment you made. A redesign with new photos and direct booking helps communicate it.',
          },
          {
            question: 'I have a silver workshop. Can I sell online across the country?',
            answer:
              'Yes. The store can take orders nationwide. First we review with you how you will ship and get paid, so it is built around what you can actually deliver.',
          },
          C.faqPayment,
          C.faqRemote('Guerrero'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, brand design, and healthcare. It is the same standard we would bring to your business in Guerrero.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Guerrero',
      breadcrumb: 'Web Design Guerrero',
      serviceName: 'Web Design and Branding in Guerrero',
      howToDescription:
        'Step-by-step process to design a website for a hotel, restaurant, or silver workshop in Guerrero.',
    },
  },
};
