import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Tabasco — palabra clave objetivo: "diseño web Villahermosa" / "diseño web
 * Tabasco".
 *
 * Ángulo propio: marcas de chocolate y cacao de la Chontalpa que pueden
 * venderse fuera del estado, y despachos, clínicas y empresas de servicios de
 * Villahermosa. Lo petrolero queda en Campeche.
 */
export const tabasco: Landing = {
  id: 'tabasco',
  status: 'live',
  publishAt: '2026-10-12T00:00:00-06:00',
  slug: { es: 'tabasco', en: 'tabasco' },
  region: 'Tabasco',
  geo: { latitude: 17.9869, longitude: -92.9303 },
  areas: ['Villahermosa', 'Comalcalco', 'Cárdenas', 'Paraíso', 'Cunduacán', 'Tenosique'],
  phoneSample: '+52 993 123 4567',
  proof: ['fruitAcademy', 'galicia', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Villahermosa y Tabasco | Aurin',
        description:
          'Diseño web y branding en Tabasco para marcas de chocolate y cacao, despachos, clínicas y empresas de servicios en Villahermosa y la Chontalpa.',
        keywords:
          'diseño web Villahermosa, páginas web Tabasco, branding chocolate, tienda en línea chocolate, diseño web Comalcalco',
      },
      hero: {
        subtitle: 'Diseño web y branding en Tabasco',
        titleLead: 'Diseño Web en',
        titleAccent: 'Tabasco',
        description:
          'El cacao de Tabasco tiene historia de siglos, y muchas marcas de chocolate de la Chontalpa todavía se venden solo en la región. En Villahermosa, despachos y clínicas compiten por la confianza de la gente. Diseñamos marcas y sitios para los dos.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Tabasco',
        intro:
          'Trabajamos con empresas de Villahermosa, Comalcalco, Cárdenas, Paraíso y Cunduacán: marcas de chocolate y cacao, haciendas cacaoteras, despachos contables y legales, clínicas y empresas de servicios.',
        items: [
          {
            title: 'Branding para chocolate y cacao',
            description:
              'Un chocolate se compra por cómo se ve la envoltura y por la historia que cuenta. Creamos una marca que transmita el origen y la calidad de tu producto.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio alineado con la marca',
            ],
          },
          {
            title: 'Tienda en línea',
            description:
              'Una tienda propia te deja vender a clientes de todo el país sin depender solo de tiendas locales. La diseñamos para que tu producto luzca y comprar sea sencillo.',
            bullets: ['Catálogo por producto', 'Pagos en línea', 'Historia y origen del cacao'],
          },
          {
            title: 'Sitios para despachos y clínicas',
            description:
              'Un cliente o un paciente elige por confianza. El sitio presenta a tu equipo, tus servicios y cómo agendar, sin tecnicismos.',
            bullets: ['Equipo y especialidades', 'Citas en línea', 'Ubicación, horario y contacto'],
          },
          {
            title: 'Rediseño de sitio',
            description:
              'Si tu sitio tiene años sin tocarse o no se ve bien en el celular, estás perdiendo clientes que ya te buscaban. Lo rediseñamos conservando lo que funciona.',
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
            text: 'Una llamada para entender qué vendes, a quién y qué necesita ver ese cliente antes de decidir.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si hace falta, trabajamos primero la marca. Luego definimos las páginas o la tienda.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Tabasco',
        description: 'Lo que nos preguntan las empresas de Tabasco antes de contratar.',
        items: [
          c.faqCost('Villahermosa'),
          {
            question: 'Hago chocolate artesanal, ¿puedo venderlo en línea?',
            answer:
              'Sí. Antes revisamos contigo cómo vas a enviar y cobrar, sobre todo por el calor y el empaque, para armar la tienda de acuerdo con lo que sí puedes cumplir.',
          },
          {
            question: '¿Pueden diseñar el empaque de mi chocolate?',
            answer:
              'El empaque puede ser parte del proyecto de marca. El alcance exacto y las aplicaciones incluidas se definen en la cotización.',
          },
          c.faqPayment,
          c.faqRemote('Tabasco'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como alimentos, servicios legales y salud. Es el mismo estándar con el que trabajaríamos tu empresa en Tabasco.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Tabasco',
      breadcrumb: 'Diseño Web Tabasco',
      serviceName: 'Diseño Web y Branding en Tabasco',
      howToDescription:
        'Proceso paso a paso para crear la marca y el sitio de un chocolate o un despacho en Tabasco.',
    },
    en: {
      seo: {
        title: 'Web Design in Villahermosa & Tabasco | Aurin',
        description:
          'Web design and branding in Tabasco for chocolate and cacao brands, firms, clinics, and service companies in Villahermosa and the Chontalpa.',
        keywords:
          'web design Villahermosa, website design Tabasco, chocolate branding Mexico, chocolate online store, cacao brand design',
      },
      hero: {
        subtitle: 'Web design and branding in Tabasco',
        titleLead: 'Web Design in',
        titleAccent: 'Tabasco',
        description:
          'Tabasco cacao has centuries of history, and many Chontalpa chocolate brands still sell only in the region. In Villahermosa, firms and clinics compete for people’s trust. We design brands and websites for both.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Tabasco',
        intro:
          'We work with companies in Villahermosa, Comalcalco, Cárdenas, Paraíso, and Cunduacán: chocolate and cacao brands, cacao haciendas, accounting and law firms, clinics, and service companies.',
        items: [
          {
            title: 'Branding for chocolate and cacao',
            description:
              'Chocolate is bought on its wrapper and on the story it tells. We create a brand that conveys your product’s origin and quality.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
          },
          {
            title: 'Online store',
            description:
              'A store of your own lets you sell to customers across the country without relying only on local shops. We design it so your product stands out and buying is simple.',
            bullets: ['Catalog by product', 'Online payments', 'Story and origin of the cacao'],
          },
          {
            title: 'Websites for firms and clinics',
            description:
              'Clients and patients choose on trust. The site presents your team, your services, and how to book, without jargon.',
            bullets: ['Team and specialties', 'Online appointments', 'Location, hours, and contact'],
          },
          {
            title: 'Website redesign',
            description:
              'If your site has not been touched in years or breaks on a phone, you are losing customers who were already looking for you. We redesign it and keep what works.',
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
            text: 'We learn what you sell, to whom, and what that customer needs to see before deciding.',
          },
          {
            name: 'Brand and structure',
            text: 'When needed we work on the brand first. Then we define the pages or the store.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Tabasco',
        description: 'What Tabasco companies ask us before signing.',
        items: [
          C.faqCost('Villahermosa'),
          {
            question: 'I make artisan chocolate. Can I sell it online?',
            answer:
              'Yes. First we review with you how you will ship and get paid, especially given heat and packaging, so the store is built around what you can actually deliver.',
          },
          {
            question: 'Can you design my chocolate packaging?',
            answer:
              'Packaging can be part of the brand project. The exact scope and included applications are defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote('Tabasco'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like food, legal services, and healthcare. It is the same standard we would bring to your company in Tabasco.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Tabasco',
      breadcrumb: 'Web Design Tabasco',
      serviceName: 'Web Design and Branding in Tabasco',
      howToDescription:
        'Step-by-step process to create the brand and website for a chocolate maker or firm in Tabasco.',
    },
  },
};
