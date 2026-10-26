import { defineSector } from './build';

/**
 * Marcas de suplementos y nutrición — "tienda en línea de suplementos".
 * Ángulo: compra recurrente (suscripciones), confianza en ingredientes y
 * calidad, y un terreno regulado: nada de prometer curas ni beneficios que el
 * cliente no tenga aprobados.
 */
export const suplementos = defineSector({
  id: 'suplementos',
  publishAt: '2026-11-03T00:00:00-06:00',
  slug: { es: 'para-marcas-de-suplementos', en: 'for-supplement-brands' },
  name: { es: 'Marcas de suplementos y nutrición', en: 'Supplement and nutrition brands' },
  proof: ['fruitAcademy', 'elite', 'pfi'],
  es: {
    seoTitle: 'Diseño Web para Marcas de Suplementos',
    seoDescription:
      'Diseño web y tiendas en línea a la medida para marcas de suplementos: ingredientes y calidad explicados, suscripciones, kits y una marca confiable.',
    keywords:
      'diseño web marcas de suplementos, tienda en línea de suplementos, página web proteína, ecommerce nutrición deportiva, branding suplementos',
    subtitle: 'Diseño web para marcas de suplementos y nutrición',
    accent: 'Suplementos',
    target: 'marcas de suplementos y nutrición',
    hero: 'En suplementos el cliente desconfía, y con razón: hay demasiadas promesas. Compra la marca que le explica qué contiene cada producto, de dónde vienen los ingredientes y cómo se fabrica, y vuelve cada mes si comprar es sencillo. Diseñamos tiendas que construyen confianza con transparencia y convierten a un cliente en suscriptor.',
    intro:
      'Diseñamos páginas web para marcas de suplementos alimenticios, nutrición deportiva, proteínas, vitaminas y productos funcionales.',
    items: [
      {
        title: 'Ingredientes transparentes',
        description:
          'Cada producto con su fórmula, porciones, origen de ingredientes y análisis de calidad, presentados con claridad.',
        bullets: ['Fórmula y porciones', 'Origen de ingredientes', 'Análisis y certificaciones'],
      },
      {
        title: 'Suscripciones',
        description:
          'Desarrollamos a la medida la compra recurrente con descuento, cambio de fecha y cancelación sencilla, que es el modelo más rentable del sector.',
        bullets: [],
        custom: ['Suscripción y ahorro', 'Gestión desde la cuenta', 'Recordatorios'],
      },
      {
        title: 'Guía para elegir',
        description:
          'Una guía o, a la medida, un cuestionario que recomienda productos según la meta del cliente, sin prometer resultados.',
        bullets: ['Kits por objetivo', 'Contenido educativo'],
        custom: ['Cuestionario de recomendación'],
      },
      {
        title: 'Marca confiable',
        description:
          'Identidad, empaque y un sitio que se ven serios y premium, alejados de la estética de promesa milagrosa.',
        bullets: ['Identidad y empaque', 'Sección para distribuidores'],
        custom: ['Reseñas verificadas'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus productos, tu proceso de fabricación y cómo vendes hoy.',
    pages: 'productos, ingredientes, calidad, kits, suscripciones, la marca y distribuidores',
    costQuestion: '¿Cuánto cuesta la tienda en línea de una marca de suplementos?',
    costScope:
      'cuántos productos, si incluye suscripciones y cuestionario de recomendación, si se construye sobre tu plataforma actual y si también necesitas marca o empaque',
    faqs: [
      {
        question: '¿Cómo manejan lo que se puede decir de cada producto?',
        answer:
          'Los beneficios y leyendas los aprueba tu área regulatoria o tu asesor, porque dependen del registro de cada producto. Nosotros los presentamos con claridad y nunca agregamos promesas.',
      },
      {
        question: '¿Pueden integrar suscripciones?',
        answer:
          'Sí, como desarrollo a la medida. Conectamos una solución de suscripciones con tu tienda para que el cliente compre cada mes, cambie fechas y administre su pedido desde su cuenta.',
      },
      {
        question: '¿Pueden vender también en Estados Unidos?',
        answer:
          'Podemos hacer la tienda en inglés y con envíos internacionales. Las reglas de etiquetado y venta allá son distintas, así que tu equipo regulatorio define qué se publica.',
      },
    ],
    aiSubject: 'mi marca de suplementos',
    remoteWho: 'marcas de suplementos',
    proofText:
      'Proyectos reales de sitios web e identidad en alimentos, salud y productos de consumo. Es el cuidado que pondríamos en tu marca.',
    howTo: 'la tienda en línea de una marca de suplementos',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué productos tienes y cómo vendes hoy. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una línea de proteínas vegetales y queremos vender por suscripción.',
    },
  },
  en: {
    seoTitle: 'Web Design for Supplement and Nutrition Brands',
    seoDescription:
      'Web design and custom online stores for supplement brands: ingredients and quality explained, subscriptions, bundles, and a brand people trust.',
    keywords:
      'supplement brand website design, supplement ecommerce design, protein brand website, nutrition brand web design, supplement branding agency',
    subtitle: 'Web design for supplement and nutrition brands',
    accent: 'Supplement Brands',
    target: 'supplement and nutrition brands',
    hero: 'Supplement shoppers are skeptical, and with reason: there are too many promises. They buy the brand that explains what each product contains, where the ingredients come from, and how it is made, and they come back every month if buying is easy. We design stores that build trust through transparency and turn customers into subscribers.',
    intro:
      'We design websites for dietary supplement, sports nutrition, protein, vitamin, and functional product brands.',
    items: [
      {
        title: 'Transparent ingredients',
        description:
          'Each product with its formula, servings, ingredient sourcing, and quality testing, presented clearly.',
        bullets: ['Formula and servings', 'Ingredient sourcing', 'Testing and certifications'],
      },
      {
        title: 'Subscriptions',
        description:
          'We build custom recurring orders with savings, easy date changes, and simple cancellation, the most profitable model in the category.',
        bullets: [],
        custom: ['Subscribe and save', 'Account management', 'Reminders'],
      },
      {
        title: 'Help choosing',
        description:
          'A guide or, as a custom build, a quiz that recommends products based on the customer’s goal, without promising outcomes.',
        bullets: ['Bundles by goal', 'Educational content'],
        custom: ['Recommendation quiz'],
      },
      {
        title: 'A trustworthy brand',
        description:
          'Identity, packaging, and a site that look serious and premium, far from miracle-claim aesthetics.',
        bullets: ['Identity and packaging', 'Wholesale section'],
        custom: ['Verified reviews'],
      },
    ],
    diagnosis: 'A call to learn about your products, your manufacturing, and how you sell today.',
    pages: 'products, ingredients, quality, bundles, subscriptions, the brand, and wholesale',
    costQuestion: 'How much does a supplement brand online store cost?',
    costScope:
      'how many products, whether it includes subscriptions and a recommendation quiz, whether it builds on your current platform, and whether you also need a brand or packaging',
    faqs: [
      {
        question: 'How do you handle what can be said about each product?',
        answer:
          'Claims and statements are approved by your regulatory team or advisor, since they depend on each product’s registration. We present them clearly and never add promises.',
      },
      {
        question: 'Can you integrate subscriptions?',
        answer:
          'Yes, as custom development. We connect a subscription solution to your store so customers buy monthly, change dates, and manage orders from their account.',
      },
      {
        question: 'Can we also sell in the US?',
        answer:
          'We can build the store in English with international shipping. Labeling and sales rules there are different, so your regulatory team decides what is published.',
      },
    ],
    aiSubject: 'my supplement brand',
    remoteWho: 'supplement brands',
    proofText:
      'Real website and identity work in food, healthcare, and consumer products. It is the care we would bring to your brand.',
    howTo: 'a supplement brand online store',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what products you have and how you sell today. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a plant protein line and want to sell through subscriptions.',
    },
  },
});
