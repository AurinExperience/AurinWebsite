import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Aguascalientes — palabra clave objetivo: "diseño web Aguascalientes".
 *
 * Ángulo propio: la industria textil y de la confección (bordado, uniformes,
 * ropa) y los negocios que se profesionalizan. Nada de proveedores
 * automotrices B2B: ese terreno es de Coahuila y Guanajuato.
 */
export const aguascalientes: Landing = {
  id: 'aguascalientes',
  status: 'live',
  publishAt: '2026-10-09T00:00:00-06:00',
  slug: { es: 'aguascalientes', en: 'aguascalientes' },
  region: 'Aguascalientes',
  geo: { latitude: 21.8853, longitude: -102.2916 },
  areas: ['Aguascalientes', 'Jesús María', 'Calvillo', 'Rincón de Romos', 'Pabellón de Arteaga'],
  phoneSample: '+52 449 123 4567',
  proof: ['ideograma', 'inglesIndividual', 'pfi'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y Branding en Aguascalientes | Aurin',
        description:
          'Diseño web, tiendas en línea y branding en Aguascalientes para marcas de ropa, confección, uniformes y negocios que quieren crecer.',
        keywords:
          'diseño web Aguascalientes, páginas web Aguascalientes, tienda en línea Aguascalientes, branding Aguascalientes, diseño de marca de ropa',
      },
      hero: {
        subtitle: 'Diseño web y branding en Aguascalientes',
        titleLead: 'Diseño Web en',
        titleAccent: 'Aguascalientes',
        description:
          'Aguascalientes tiene tradición en confección, bordado y uniformes, y muchas de esas marcas todavía venden solo por mayoreo o por recomendación. Diseñamos la marca y el sitio para que tu producto se vea al nivel de su calidad y lo puedas vender también en línea.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Aguascalientes',
        intro:
          'Trabajamos con negocios de Aguascalientes, Jesús María, Calvillo y Rincón de Romos: marcas de ropa y confección, fabricantes de uniformes, talleres de bordado, comercios y empresas de servicios.',
        items: [
          {
            title: 'Tienda en línea para tu marca de ropa',
            description:
              'Si hoy vendes por WhatsApp o en tu local, una tienda en línea te abre clientes fuera de la ciudad. La diseñamos para que tus prendas luzcan y comprar sea sencillo desde el celular.',
            bullets: [
              'Catálogo por colección, talla y color',
              'Pagos en línea',
              'Pensada primero para celular',
            ],
          },
          {
            title: 'Sitio para uniformes y mayoreo',
            description:
              'Una empresa o una escuela que busca uniformes quiere ver qué haces, con qué calidad y cómo pedir una cotización. Organizamos tu catálogo y tus capacidades para que la decisión sea fácil.',
            bullets: [
              'Catálogo de productos y acabados',
              'Clientes y sectores que atiendes',
              'Formulario de cotización por volumen',
            ],
          },
          {
            title: 'Branding para marcas que quieren crecer',
            description:
              'Una marca de ropa se compra también por cómo se ve la etiqueta, la bolsa y el perfil de Instagram. Creamos una identidad que funcione en todo eso y que te deje competir con marcas más grandes.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio alineado con la marca',
            ],
          },
          {
            title: 'Rediseño de sitio',
            description:
              'Si tu sitio tiene años sin tocarse o no se ve bien en el celular, estás perdiendo clientes que ya te estaban buscando. Lo rediseñamos conservando lo que funciona.',
            bullets: [
              'Revisión de lo que tienes hoy',
              'Diseño pensado para celular',
              'SEO técnico básico',
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
            text: 'Una llamada para entender si vendes al público, por mayoreo o las dos cosas. Cada canal necesita cosas distintas del sitio.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si la marca necesita trabajo, empezamos por ahí. Luego definimos las páginas o el catálogo que necesitas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Aguascalientes',
        description: 'Lo que nos preguntan los negocios de Aguascalientes antes de contratar.',
        items: [
          c.faqCost('Aguascalientes'),
          {
            question: 'Vendo por mayoreo, ¿me sirve una tienda en línea?',
            answer:
              'Depende de cómo vendes. Si tus clientes de mayoreo piden cotización, suele funcionar mejor un catálogo con formulario. Si también vendes pieza por pieza, se puede sumar una tienda. Lo definimos contigo en la llamada.',
          },
          {
            question: '¿Pueden rediseñar el logo que ya tengo?',
            answer:
              'Sí. Si tu marca ya es conocida, normalmente conviene una evolución: conservar lo que tus clientes reconocen y mejorar lo que ya no funciona.',
          },
          c.faqPayment,
          c.faqRemote('Aguascalientes'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como diseño y marca, educación y productos de consumo. Es el mismo estándar con el que trabajaríamos tu negocio en Aguascalientes.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Aguascalientes',
      breadcrumb: 'Diseño Web Aguascalientes',
      serviceName: 'Diseño Web y Branding en Aguascalientes',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio o la tienda en línea de una marca en Aguascalientes.',
    },
    en: {
      seo: {
        title: 'Web Design & Branding in Aguascalientes | Aurin',
        description:
          'Web design, online stores, and branding in Aguascalientes for apparel brands, uniform makers, and businesses ready to grow.',
        keywords:
          'web design Aguascalientes, website Aguascalientes Mexico, online store Aguascalientes, branding Aguascalientes, apparel brand design Mexico',
      },
      hero: {
        subtitle: 'Web design and branding in Aguascalientes',
        titleLead: 'Web Design in',
        titleAccent: 'Aguascalientes',
        description:
          'Aguascalientes has a long tradition in apparel, embroidery, and uniforms, and many of those brands still sell only wholesale or by referral. We design the brand and the site so your product looks as good as it is made, and you can sell online too.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Aguascalientes',
        intro:
          'We work with businesses in Aguascalientes, Jesús María, Calvillo, and Rincón de Romos: apparel brands, uniform makers, embroidery shops, retailers, and service companies.',
        items: [
          {
            title: 'Online store for your apparel brand',
            description:
              'If you sell today over WhatsApp or in your shop, an online store opens customers outside the city. We design it so your garments stand out and buying is simple on a phone.',
            bullets: ['Catalog by collection, size, and color', 'Online payments', 'Mobile-first'],
          },
          {
            title: 'Site for uniforms and wholesale',
            description:
              'A company or school looking for uniforms wants to see what you make, at what quality, and how to request a quote. We organize your catalog and capabilities so the decision is easy.',
            bullets: [
              'Product and finish catalog',
              'Clients and sectors you serve',
              'Volume quote request form',
            ],
          },
          {
            title: 'Branding for brands ready to grow',
            description:
              'An apparel brand is also bought on its label, bag, and Instagram profile. We create an identity that works across all of it and lets you compete with bigger brands.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
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
            text: 'We learn whether you sell retail, wholesale, or both. Each channel needs different things from the site.',
          },
          {
            name: 'Brand and structure',
            text: 'If the brand needs work, we start there. Then we define the pages or catalog you need.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Aguascalientes',
        description: 'What Aguascalientes businesses ask us before signing.',
        items: [
          C.faqCost('Aguascalientes'),
          {
            question: 'I sell wholesale. Is an online store useful for me?',
            answer:
              'It depends on how you sell. If wholesale buyers request quotes, a catalog with a form usually works better. If you also sell single pieces, a store can be added. We decide it with you on the call.',
          },
          {
            question: 'Can you redesign the logo I already have?',
            answer:
              'Yes. If your brand is already known, an evolution usually makes more sense: keep what customers recognize and improve what no longer works.',
          },
          C.faqPayment,
          C.faqRemote('Aguascalientes'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like design and branding, education, and consumer products. It is the same standard we would bring to your Aguascalientes business.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Aguascalientes',
      breadcrumb: 'Web Design Aguascalientes',
      serviceName: 'Web Design and Branding in Aguascalientes',
      howToDescription:
        'Step-by-step process to design the website or online store of a brand in Aguascalientes.',
    },
  },
};
