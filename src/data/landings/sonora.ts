import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Sonora — palabra clave objetivo: "diseño web Hermosillo" / "diseño web
 * Sonora".
 *
 * Ángulo propio: empresas de servicios a la minería y la industria en
 * Hermosillo, marcas regionales de alimentos (carne, coyotas, productos del
 * desierto) y rentas y restaurantes de Puerto Peñasco y San Carlos con
 * visitantes de Arizona. Hermosillo tiene mucha agencia local: la entrada es
 * por los nichos, no por "diseño web" genérico.
 */
export const sonora: Landing = {
  id: 'sonora',
  status: 'draft',
  slug: { es: 'sonora', en: 'sonora' },
  region: 'Sonora',
  geo: { latitude: 29.0729, longitude: -110.9559 },
  areas: ['Hermosillo', 'Ciudad Obregón', 'Nogales', 'Puerto Peñasco', 'San Carlos', 'Guaymas'],
  phoneSample: '+52 662 123 4567',
  proof: ['mexicoPacific', 'fruitAcademy', 'elRollo'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Hermosillo y Sonora | Aurin',
        description:
          'Diseño web y branding en Sonora para empresas de servicios a la minería, marcas regionales de alimentos y rentas y restaurantes en Puerto Peñasco y San Carlos.',
        keywords:
          'diseño web Hermosillo, páginas web Sonora, página web proveedor minero, diseño web Puerto Peñasco, branding Hermosillo, diseño web Ciudad Obregón',
      },
      hero: {
        subtitle: 'Diseño web y branding en Sonora',
        titleLead: 'Diseño Web en',
        titleAccent: 'Sonora',
        description:
          'En Hermosillo, las empresas que dan servicio a la minería compiten por contratos con clientes muy exigentes. En Puerto Peñasco y San Carlos, el visitante de Arizona busca en inglés. Diseñamos sitios para los dos, y marcas para los productos que hacen famosa a Sonora.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Sonora',
        intro:
          'Trabajamos con empresas de Hermosillo, Ciudad Obregón, Nogales, Guaymas, Puerto Peñasco y San Carlos: servicios a la minería y la industria, marcas de alimentos, rentas vacacionales, restaurantes y empresas de servicios.',
        items: [
          {
            title: 'Sitio corporativo para servicios a la minería',
            description:
              'Una minera revisa experiencia, certificaciones y capacidad antes de invitarte a cotizar. Organizamos esa información para que tu empresa se vea a la altura.',
            bullets: [
              'Servicios y capacidades bien explicados',
              'Certificaciones y experiencia a la vista',
              'Formulario para solicitudes de cotización',
            ],
          },
          {
            title: 'Marcas regionales de alimentos',
            description:
              'Carne, coyotas, productos del desierto: el sabor de Sonora se vende solo en la región si la marca no lo acompaña. Creamos identidades y sitios para llevarlo más lejos.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Catálogo de productos',
              'Tienda en línea o contacto para distribuidores',
            ],
          },
          {
            title: 'Rentas y restaurantes en Puerto Peñasco y San Carlos',
            description:
              'Muchos de tus visitantes vienen de Arizona y buscan en inglés. El sitio presenta tu lugar en los dos idiomas y facilita la reserva.',
            bullets: ['Galería o menú', 'Reservas o solicitud de disponibilidad', 'Sitio en inglés y en español'],
          },
          {
            title: 'Rediseño de sitio',
            description:
              'Si tu sitio tiene años sin tocarse, da una imagen que tu empresa ya superó. Lo rediseñamos conservando lo que funciona.',
            bullets: ['Revisión de lo que tienes hoy', 'Diseño pensado para celular', 'SEO técnico básico'],
          },
        ],
      },
      process: {
        heading: c.processHeading,
        description: c.processDescription,
        steps: [
          {
            name: 'Diagnóstico',
            text: 'Una llamada para entender a quién le vendes: industria, consumidores o visitantes de Estados Unidos.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Sonora',
        description: 'Lo que nos preguntan las empresas de Sonora antes de contratar.',
        items: [
          c.faqCost('Hermosillo'),
          {
            question: 'Damos servicio a mineras, ¿qué debe tener el sitio?',
            answer:
              'Lo que un área de compras revisa antes de invitarte: qué servicios das, dónde has trabajado, qué certificaciones tienes y cómo contactarte. Presentado con orden y sin exagerar.',
          },
          {
            question: 'Tengo una renta en Puerto Peñasco, ¿el sitio va en inglés?',
            answer:
              'Sí, y ahí casi siempre lo recomendamos. El sitio queda disponible en inglés y en español con la misma información.',
          },
          c.faqPayment,
          c.faqRemote,
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como energía, alimentos y turismo. Es el mismo estándar con el que trabajaríamos tu empresa en Sonora.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Sonora',
      breadcrumb: 'Diseño Web Sonora',
      serviceName: 'Diseño Web y Branding en Sonora',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de una empresa de servicios, una marca o una renta vacacional en Sonora.',
    },
    en: {
      seo: {
        title: 'Web Design in Hermosillo & Sonora | Aurin',
        description:
          'Web design and branding in Sonora for mining service companies, regional food brands, and rentals and restaurants in Puerto Peñasco and San Carlos.',
        keywords:
          'web design Hermosillo, website design Sonora, Puerto Peñasco rental website, mining supplier website Mexico, web design Rocky Point',
      },
      hero: {
        subtitle: 'Web design and branding in Sonora',
        titleLead: 'Web Design in',
        titleAccent: 'Sonora',
        description:
          'In Hermosillo, companies serving the mining industry compete for contracts with very demanding clients. In Puerto Peñasco and San Carlos, visitors from Arizona search in English. We design websites for both, and brands for the products Sonora is known for.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Sonora',
        intro:
          'We work with companies in Hermosillo, Ciudad Obregón, Nogales, Guaymas, Puerto Peñasco, and San Carlos: mining and industrial services, food brands, vacation rentals, restaurants, and service companies.',
        items: [
          {
            title: 'Corporate site for mining services',
            description:
              'A mining company reviews experience, certifications, and capacity before inviting you to bid. We organize that information so your company measures up.',
            bullets: [
              'Services and capabilities clearly explained',
              'Certifications and experience visible',
              'Form for quote requests',
            ],
          },
          {
            title: 'Regional food brands',
            description:
              'Beef, coyotas, desert products: Sonora’s flavors stay local if the brand does not carry them further. We create identities and websites to take them beyond the region.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Product catalog',
              'Online store or distributor contact',
            ],
          },
          {
            title: 'Rentals and restaurants in Puerto Peñasco and San Carlos',
            description:
              'Many of your visitors come from Arizona and search in English. The site presents your place in both languages and makes booking easy.',
            bullets: ['Gallery or menu', 'Bookings or availability requests', 'Site in English and Spanish'],
          },
          {
            title: 'Website redesign',
            description:
              'If your site has not been touched in years, it projects an image your company has outgrown. We redesign it and keep what works.',
            bullets: ['Review of what you have today', 'Mobile-first design', 'Basic technical SEO'],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn who you sell to: industry, consumers, or visitors from the U.S.',
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
        heading: 'Frequently asked questions about web design in Sonora',
        description: 'What Sonora companies ask us before signing.',
        items: [
          C.faqCost('Hermosillo'),
          {
            question: 'We serve mining companies. What should the site include?',
            answer:
              'What a procurement team reviews before inviting you: what services you provide, where you have worked, your certifications, and how to reach you. Presented clearly and without exaggeration.',
          },
          {
            question: 'I have a rental in Puerto Peñasco. Will the site be in English?',
            answer:
              'Yes, and there we almost always recommend it. The site is available in English and Spanish with the same information.',
          },
          C.faqPayment,
          C.faqRemote,
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like energy, food, and tourism. It is the same standard we would bring to your company in Sonora.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Sonora',
      breadcrumb: 'Web Design Sonora',
      serviceName: 'Web Design and Branding in Sonora',
      howToDescription:
        'Step-by-step process to design a website for a service company, brand, or vacation rental in Sonora.',
    },
  },
};
