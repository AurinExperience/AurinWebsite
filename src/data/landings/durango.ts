import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Durango — palabra clave objetivo: "diseño web Durango".
 *
 * Ángulo propio: fabricantes de muebles y productos de madera que quieren
 * vender fuera del estado, y comercios y servicios de la capital y de Gómez
 * Palacio. Mercado con poca oferta local de diseño con nivel de agencia.
 */
export const durango: Landing = {
  id: 'durango',
  status: 'draft',
  slug: { es: 'durango', en: 'durango' },
  region: 'Durango',
  geo: { latitude: 24.0277, longitude: -104.6532 },
  areas: ['Durango', 'Gómez Palacio', 'Lerdo', 'Santiago Papasquiaro', 'Canatlán'],
  phoneSample: '+52 618 123 4567',
  proof: ['grupoEstrella', 'ideograma', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y Branding en Durango | Aurin',
        description:
          'Diseño web, tiendas en línea y branding en Durango y Gómez Palacio para fabricantes de muebles, comercios, clínicas y negocios de servicios.',
        keywords:
          'diseño web Durango, páginas web Durango, diseño web Gómez Palacio, tienda en línea muebles, branding Durango',
      },
      hero: {
        subtitle: 'Diseño web y branding en Durango',
        titleLead: 'Diseño Web en',
        titleAccent: 'Durango',
        description:
          'Durango tiene fabricantes de muebles y productos de madera con muy buen trabajo, que casi siempre venden por recomendación o a distribuidores. Diseñamos la marca, el sitio y la tienda en línea para que ese trabajo llegue a clientes de todo el país.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Durango',
        intro:
          'Trabajamos con negocios de Durango, Gómez Palacio, Lerdo y Santiago Papasquiaro: fabricantes de muebles y carpintería, comercios, clínicas y consultorios, y empresas de servicios.',
        items: [
          {
            title: 'Tienda en línea para muebles y madera',
            description:
              'Un mueble se compra por cómo se ve y por la confianza en quien lo hace. La tienda presenta cada pieza con buenas fotos, medidas y materiales, y facilita el pedido.',
            bullets: [
              'Catálogo por línea o pieza',
              'Medidas, materiales y acabados',
              'Pagos en línea o solicitud de cotización',
            ],
          },
          {
            title: 'Catálogo para distribuidores',
            description:
              'Si vendes a mueblerías o a proyectos, tu cliente quiere ver el catálogo completo y pedir una cotización. Lo organizamos para que la decisión sea fácil.',
            bullets: [
              'Catálogo de productos',
              'Capacidades y tiempos que tú defines',
              'Formulario de cotización',
            ],
          },
          {
            title: 'Sitios para comercios y servicios',
            description:
              'Clínicas, despachos y comercios: tu cliente quiere saber qué haces, dónde estás y cómo contactarte. Un sitio claro con esa información trabaja por ti.',
            bullets: ['Servicios explicados con claridad', 'Ubicación, horario y mapa', 'Contacto por llamada, WhatsApp o formulario'],
          },
          {
            title: 'Branding',
            description:
              'Tu marca va en la pieza, en el empaque y en tus redes. Creamos una identidad que cuente el oficio detrás de tu producto y te ayude a cobrar lo que vale.',
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
            text: 'Una llamada para entender si vendes al público, a distribuidores o a los dos, y qué necesita ver cada uno.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si la marca necesita trabajo, empezamos por ahí. Luego definimos las páginas o el catálogo.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Durango',
        description: 'Lo que nos preguntan los negocios de Durango antes de contratar.',
        items: [
          c.faqCost('Durango'),
          {
            question: 'Hago muebles sobre pedido, ¿me sirve una tienda en línea?',
            answer:
              'Si tus piezas son sobre pedido, suele funcionar mejor un catálogo con solicitud de cotización que una tienda con carrito. Si también tienes piezas en existencia, se pueden combinar. Lo definimos contigo.',
          },
          {
            question: '¿Pueden ayudarme con las fotos de mis productos?',
            answer:
              'La fotografía no está incluida por defecto. Si la necesitas, lo platicamos en la cotización y te decimos qué opciones hay.',
          },
          c.faqPayment,
          c.faqRemote('Durango'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como construcción, diseño de marca y salud. Es el mismo estándar con el que trabajaríamos tu negocio en Durango.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Durango',
      breadcrumb: 'Diseño Web Durango',
      serviceName: 'Diseño Web y Branding en Durango',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio o la tienda en línea de un fabricante en Durango.',
    },
    en: {
      seo: {
        title: 'Web Design & Branding in Durango | Aurin',
        description:
          'Web design, online stores, and branding in Durango and Gómez Palacio for furniture makers, retailers, clinics, and service businesses.',
        keywords:
          'web design Durango, website design Durango Mexico, furniture online store Mexico, branding Durango, web design Gómez Palacio',
      },
      hero: {
        subtitle: 'Web design and branding in Durango',
        titleLead: 'Web Design in',
        titleAccent: 'Durango',
        description:
          'Durango has furniture and wood product makers doing excellent work that almost always sells by referral or through distributors. We design the brand, the site, and the online store so that work reaches customers across the country.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Durango',
        intro:
          'We work with businesses in Durango, Gómez Palacio, Lerdo, and Santiago Papasquiaro: furniture makers and woodworkers, retailers, clinics and practices, and service companies.',
        items: [
          {
            title: 'Online store for furniture and wood',
            description:
              'Furniture is bought on how it looks and on trust in who makes it. The store presents each piece with good photos, dimensions, and materials, and makes ordering easy.',
            bullets: [
              'Catalog by line or piece',
              'Dimensions, materials, and finishes',
              'Online payments or quote requests',
            ],
          },
          {
            title: 'Catalog for distributors',
            description:
              'If you sell to furniture stores or projects, buyers want to see the full catalog and request a quote. We organize it so the decision is easy.',
            bullets: ['Product catalog', 'Capabilities and lead times you define', 'Quote request form'],
          },
          {
            title: 'Websites for retailers and services',
            description:
              'Clinics, firms, and shops: customers want to know what you do, where you are, and how to reach you. A clear site with that information works for you.',
            bullets: ['Services clearly explained', 'Location, hours, and map', 'Contact by phone, WhatsApp, or form'],
          },
          {
            title: 'Branding',
            description:
              'Your brand goes on the piece, the packaging, and your social media. We create an identity that tells the craft behind your product and helps you charge what it is worth.',
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
            text: 'We learn whether you sell retail, to distributors, or both, and what each needs to see.',
          },
          {
            name: 'Brand and structure',
            text: 'If the brand needs work, we start there. Then we define the pages or catalog.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Durango',
        description: 'What Durango businesses ask us before signing.',
        items: [
          C.faqCost('Durango'),
          {
            question: 'I make furniture to order. Is an online store useful?',
            answer:
              'If your pieces are made to order, a catalog with quote requests usually works better than a cart. If you also have pieces in stock, both can be combined. We decide it with you.',
          },
          {
            question: 'Can you help with my product photos?',
            answer:
              'Photography is not included by default. If you need it, we discuss it in the quote and tell you what options there are.',
          },
          C.faqPayment,
          C.faqRemote('Durango'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like construction, brand design, and healthcare. It is the same standard we would bring to your business in Durango.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Durango',
      breadcrumb: 'Web Design Durango',
      serviceName: 'Web Design and Branding in Durango',
      howToDescription:
        'Step-by-step process to design the website or online store of a maker in Durango.',
    },
  },
};
