import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Oaxaca — palabra clave objetivo: "diseño web Oaxaca" / "branding mezcal".
 *
 * Ángulo propio: branding. Marcas de mezcal, chocolate, café y textiles que
 * quieren venderse fuera del estado y del país, más restaurantes y hoteles
 * boutique de la capital y la costa. Aquí la marca va primero y el sitio
 * después.
 */
export const oaxaca: Landing = {
  id: 'oaxaca',
  status: 'live',
  publishAt: '2026-09-28T00:00:00-06:00',
  slug: { es: 'oaxaca', en: 'oaxaca' },
  region: 'Oaxaca',
  geo: { latitude: 17.0732, longitude: -96.7266 },
  areas: ['Oaxaca de Juárez', 'Santiago Matatlán', 'Puerto Escondido', 'Huatulco', 'Teotitlán del Valle', 'Tlacolula'],
  phoneSample: '+52 951 123 4567',
  proof: ['ideograma', 'fruitAcademy', 'elRollo'],
  copy: {
    es: {
      seo: {
        title: 'Branding y Diseño Web en Oaxaca | Aurin',
        description:
          'Branding y diseño web en Oaxaca para marcas de mezcal, chocolate, café y textiles, restaurantes y hoteles boutique en la capital y la costa.',
        keywords:
          'diseño web Oaxaca, branding Oaxaca, diseño de marca de mezcal, etiqueta de mezcal, tienda en línea mezcal, páginas web Puerto Escondido',
      },
      hero: {
        subtitle: 'Branding y diseño web en Oaxaca',
        titleLead: 'Branding y Diseño Web en',
        titleAccent: 'Oaxaca',
        description:
          'Un buen mezcal, chocolate o textil oaxaqueño compite en un anaquel lleno de marcas que cuentan historias. Creamos la marca y el sitio para que la tuya se distinga y se pueda vender dentro y fuera del país.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de branding y diseño web en Oaxaca',
        intro:
          'Trabajamos con marcas y negocios de Oaxaca de Juárez, Santiago Matatlán, Teotitlán del Valle, Tlacolula, Puerto Escondido y Huatulco: mezcaleras, marcas de chocolate y café, talleres textiles, restaurantes y hoteles boutique.',
        items: [
          {
            title: 'Branding para mezcal y productos oaxaqueños',
            description:
              'La marca es lo primero que ve un comprador: el nombre, la etiqueta, la botella o el empaque. Creamos una identidad que cuente de dónde viene tu producto y por qué vale lo que cuesta.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio alineado con la marca',
            ],
          },
          {
            title: 'Tienda en línea',
            description:
              'Una tienda propia te deja vender directo, sin depender solo de distribuidores. La diseñamos para que tu producto luzca y comprar sea sencillo.',
            bullets: ['Catálogo por producto o colección', 'Pagos en línea', 'Historia y origen de cada producto'],
          },
          {
            title: 'Sitio bilingüe para distribuidores',
            description:
              'Si buscas distribuidores en otros estados o países, necesitas un sitio que presente tu marca y tus productos en inglés y en español, con una forma clara de contactarte.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Fichas de producto',
              'Formulario de contacto para distribuidores',
            ],
          },
          {
            title: 'Restaurantes y hoteles boutique',
            description:
              'Quien viaja a Oaxaca planea dónde comer y dormir desde antes de llegar. Presentamos tu lugar con buenas fotos y facilitamos que te reserven.',
            bullets: ['Galería o menú', 'Reservas en línea', 'Horario, ubicación y mapa'],
          },
        ],
      },
      process: {
        heading: c.processHeading,
        description: c.processDescription,
        steps: [
          {
            name: 'Conocer la marca',
            text: 'Empezamos por la historia: quién hace el producto, de dónde viene y qué lo hace distinto. Es la base de todo lo demás.',
          },
          {
            name: 'Marca y estructura',
            text: 'Trabajamos la identidad y después definimos el sitio o la tienda, y si va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre branding y diseño web en Oaxaca',
        description: 'Lo que nos preguntan las marcas y negocios de Oaxaca antes de contratar.',
        items: [
          c.faqCost('Oaxaca'),
          {
            question: '¿Diseñan la etiqueta de mi mezcal?',
            answer:
              'Sí, la etiqueta puede ser parte del proyecto de marca. El alcance exacto y las aplicaciones incluidas se definen en la cotización. Los requisitos regulatorios de la etiqueta los debe validar tu certificadora.',
          },
          {
            question: '¿Puedo vender mezcal en línea?',
            answer:
              'La tienda se puede construir, pero vender bebidas alcohólicas en línea tiene reglas de envío y de venta que dependen del destino. Antes lo revisamos contigo para armarla de acuerdo con lo que sí puedes cumplir.',
          },
          c.faqPayment,
          c.faqRemote('Oaxaca'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como diseño de marca, alimentos y turismo. Es el mismo estándar con el que trabajaríamos tu marca en Oaxaca.',
      },
      nearby: c.nearby,
      linkLabel: 'Branding y diseño web en Oaxaca',
      breadcrumb: 'Diseño Web Oaxaca',
      serviceName: 'Branding y Diseño Web en Oaxaca',
      howToDescription:
        'Proceso paso a paso para crear la marca y el sitio de un mezcal o producto oaxaqueño.',
    },
    en: {
      seo: {
        title: 'Branding & Web Design in Oaxaca | Aurin',
        description:
          'Branding and web design in Oaxaca for mezcal, chocolate, coffee, and textile brands, restaurants, and boutique hotels in the city and on the coast.',
        keywords:
          'mezcal branding, mezcal label design, branding agency Oaxaca, web design Oaxaca, mezcal brand website, web design Puerto Escondido',
      },
      hero: {
        subtitle: 'Branding and web design in Oaxaca',
        titleLead: 'Branding & Web Design in',
        titleAccent: 'Oaxaca',
        description:
          'A great Oaxacan mezcal, chocolate, or textile competes on a shelf full of brands that tell stories. We create the brand and the site so yours stands out and can sell in Mexico and abroad.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Branding and web design services in Oaxaca',
        intro:
          'We work with brands and businesses in Oaxaca City, Santiago Matatlán, Teotitlán del Valle, Tlacolula, Puerto Escondido, and Huatulco: mezcal producers, chocolate and coffee brands, textile workshops, restaurants, and boutique hotels.',
        items: [
          {
            title: 'Branding for mezcal and Oaxacan products',
            description:
              'The brand is the first thing a buyer sees: the name, the label, the bottle, or the package. We create an identity that tells where your product comes from and why it is worth what it costs.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
          },
          {
            title: 'Online store',
            description:
              'A store of your own lets you sell directly, without relying only on distributors. We design it so your product stands out and buying is simple.',
            bullets: ['Catalog by product or collection', 'Online payments', 'Story and origin of each product'],
          },
          {
            title: 'Bilingual site for distributors',
            description:
              'If you are looking for distributors in other states or countries, you need a site that presents your brand and products in English and Spanish with a clear way to reach you.',
            bullets: [
              'The same site available in Spanish and English',
              'Product sheets',
              'Contact form for distributors',
            ],
          },
          {
            title: 'Restaurants and boutique hotels',
            description:
              'People traveling to Oaxaca plan where to eat and stay before they arrive. We present your place with good photography and make booking easy.',
            bullets: ['Gallery or menu', 'Online reservations', 'Hours, location, and map'],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Learn the brand',
            text: 'We start with the story: who makes the product, where it comes from, and what makes it different. It is the foundation for everything else.',
          },
          {
            name: 'Brand and structure',
            text: 'We work on the identity, then define the site or store and whether it runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about branding and web design in Oaxaca',
        description: 'What Oaxacan brands and businesses ask us before signing.',
        items: [
          C.faqCost('Oaxaca'),
          {
            question: 'Do you design my mezcal label?',
            answer:
              'Yes, the label can be part of the brand project. The exact scope and included applications are defined in the quote. Regulatory label requirements must be validated by your certifying body.',
          },
          {
            question: 'Can I sell mezcal online?',
            answer:
              'The store can be built, but selling alcohol online has shipping and sales rules that depend on the destination. We review them with you first so the store is built around what you can actually deliver.',
          },
          C.faqPayment,
          C.faqRemote('Oaxaca'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like brand design, food, and tourism. It is the same standard we would bring to your brand in Oaxaca.',
      },
      nearby: C.nearby,
      linkLabel: 'Branding and web design in Oaxaca',
      breadcrumb: 'Web Design Oaxaca',
      serviceName: 'Branding and Web Design in Oaxaca',
      howToDescription:
        'Step-by-step process to create the brand and website for a mezcal or Oaxacan product.',
    },
  },
};
