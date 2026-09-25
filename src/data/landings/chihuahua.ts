import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Chihuahua — palabra clave objetivo: "diseño web Chihuahua" / "diseño web
 * Ciudad Juárez".
 *
 * Ángulo propio: proveedores locales de la industria maquiladora en Juárez y
 * Chihuahua capital, y marcas agroalimentarias de la región (nuez, manzana,
 * productos de Cuauhtémoc). Distinto de Baja California, cuyo ángulo es
 * turismo médico y cliente estadounidense de consumo.
 */
export const chihuahua: Landing = {
  id: 'chihuahua',
  status: 'live',
  publishAt: '2026-09-28T00:00:00-06:00',
  slug: { es: 'chihuahua', en: 'chihuahua' },
  region: 'Chihuahua',
  geo: { latitude: 28.6353, longitude: -106.0889 },
  areas: ['Chihuahua', 'Ciudad Juárez', 'Cuauhtémoc', 'Delicias', 'Parral', 'Nuevo Casas Grandes'],
  phoneSample: '+52 614 123 4567',
  proof: ['grupoEstrella', 'fruitAcademy', 'fortrade'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Chihuahua y Ciudad Juárez | Aurin',
        description:
          'Diseño web y branding en Chihuahua y Ciudad Juárez para proveedores industriales, empresas de servicios y marcas agroalimentarias de la región.',
        keywords:
          'diseño web Chihuahua, páginas web Ciudad Juárez, diseño web Juárez, página web proveedor maquiladora, branding Chihuahua, diseño web Cuauhtémoc',
      },
      hero: {
        subtitle: 'Diseño web y branding en Chihuahua',
        titleLead: 'Diseño Web en',
        titleAccent: 'Chihuahua',
        description:
          'Si le das servicio a la industria de Juárez o de Chihuahua, tu próximo cliente revisa tu sitio antes de invitarte a cotizar. Si vendes nuez, manzana u otro producto de la región, tu comprador quiere ver una marca seria. Diseñamos sitios para los dos casos.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Chihuahua',
        intro:
          'Trabajamos con empresas de Chihuahua, Ciudad Juárez, Cuauhtémoc, Delicias y Parral: proveedores de la industria, talleres de maquinado, empresas de mantenimiento y servicios, y marcas agroalimentarias.',
        items: [
          {
            title: 'Sitio corporativo para proveedores industriales',
            description:
              'Un área de compras quiere saber rápido qué haces, con qué capacidades y qué certificaciones tienes. Organizamos esa información para que tu empresa se vea al nivel de los clientes que buscas.',
            bullets: [
              'Servicios y capacidades bien explicados',
              'Certificaciones y sectores que atiendes',
              'Formulario para solicitudes de cotización',
            ],
          },
          {
            title: 'Sitio en español y en inglés',
            description:
              'En la frontera muchos de tus contactos trabajan en inglés. El sitio puede quedar disponible en los dos idiomas con la misma información.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Selector de idioma fácil de encontrar',
              'Pensado primero para celular',
            ],
          },
          {
            title: 'Marcas agroalimentarias',
            description:
              'Nuez, manzana, lácteos: el producto de la región es bueno, pero sin una marca clara se vende como materia prima. Creamos una identidad y un sitio que presentan tu producto a distribuidores y compradores.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Catálogo de productos y presentaciones',
              'Formulario de contacto para distribuidores',
            ],
          },
          {
            title: 'Rediseño de sitio',
            description:
              'Si tu sitio tiene años sin actualizarse, da una imagen que tu empresa ya superó. Lo rediseñamos conservando lo que funciona.',
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
            text: 'Una llamada para entender a quién le vendes y qué revisa ese cliente antes de contratarte o comprarte.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Chihuahua',
        description: 'Lo que nos preguntan las empresas de Chihuahua y Juárez antes de contratar.',
        items: [
          c.faqCost('Chihuahua'),
          {
            question: 'Le vendo a la maquila, ¿qué debe tener mi sitio?',
            answer:
              'Lo que un área de compras busca antes de invitarte: quién eres, qué servicios das, qué capacidades y certificaciones tienes, a qué sectores atiendes y cómo contactarte. Presentado con orden y sin exagerar.',
          },
          {
            question: 'Tengo una marca de productos, ¿me pueden ayudar con la marca y el sitio?',
            answer:
              'Sí. Podemos trabajar primero la identidad y después el sitio, para que todo salga con la misma cara. El alcance lo definimos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote('Chihuahua'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como construcción, agroindustria y finanzas. Es el mismo estándar con el que trabajaríamos tu empresa en Chihuahua.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Chihuahua',
      breadcrumb: 'Diseño Web Chihuahua',
      serviceName: 'Diseño Web y Branding en Chihuahua',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de un proveedor industrial o una marca agroalimentaria en Chihuahua.',
    },
    en: {
      seo: {
        title: 'Web Design in Chihuahua & Ciudad Juárez | Aurin',
        description:
          'Web design and branding in Chihuahua and Ciudad Juárez for industrial suppliers, service companies, and regional food brands.',
        keywords:
          'web design Chihuahua, website design Ciudad Juárez, maquiladora supplier website, industrial supplier website Mexico, branding Chihuahua',
      },
      hero: {
        subtitle: 'Web design and branding in Chihuahua',
        titleLead: 'Web Design in',
        titleAccent: 'Chihuahua',
        description:
          'If you serve the industry in Juárez or Chihuahua, your next client reviews your site before inviting you to bid. If you sell pecans, apples, or another regional product, buyers want to see a serious brand. We design websites for both.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Chihuahua',
        intro:
          'We work with companies in Chihuahua, Ciudad Juárez, Cuauhtémoc, Delicias, and Parral: industrial suppliers, machine shops, maintenance and service companies, and food brands.',
        items: [
          {
            title: 'Corporate site for industrial suppliers',
            description:
              'A procurement team wants to know fast what you do, your capabilities, and your certifications. We organize that information so your company looks on par with the clients you want.',
            bullets: [
              'Services and capabilities clearly explained',
              'Certifications and sectors you serve',
              'Form for quote requests',
            ],
          },
          {
            title: 'Site in Spanish and English',
            description:
              'On the border many of your contacts work in English. The site can be available in both languages with the same information.',
            bullets: [
              'The same site available in Spanish and English',
              'Easy-to-find language switcher',
              'Mobile-first',
            ],
          },
          {
            title: 'Food and agricultural brands',
            description:
              'Pecans, apples, dairy: the region’s products are good, but without a clear brand they sell as commodities. We create an identity and a site that present your product to distributors and buyers.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Product and packaging catalog',
              'Contact form for distributors',
            ],
          },
          {
            title: 'Website redesign',
            description:
              'If your site has not been updated in years, it projects an image your company has outgrown. We redesign it and keep what works.',
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
            text: 'We learn who you sell to and what that client reviews before hiring or buying from you.',
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
        heading: 'Frequently asked questions about web design in Chihuahua',
        description: 'What companies in Chihuahua and Juárez ask us before signing.',
        items: [
          C.faqCost('Chihuahua'),
          {
            question: 'I supply maquiladoras. What should my site include?',
            answer:
              'What a procurement team looks for before inviting you: who you are, what services you provide, your capabilities and certifications, the sectors you serve, and how to reach you. Presented clearly and without exaggeration.',
          },
          {
            question: 'I have a product brand. Can you help with the brand and the site?',
            answer:
              'Yes. We can do the identity first and the site second, so everything comes out with the same face. The scope is defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote('Chihuahua'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like construction, agribusiness, and finance. It is the same standard we would bring to your company in Chihuahua.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Chihuahua',
      breadcrumb: 'Web Design Chihuahua',
      serviceName: 'Web Design and Branding in Chihuahua',
      howToDescription:
        'Step-by-step process to design a website for an industrial supplier or food brand in Chihuahua.',
    },
  },
};
