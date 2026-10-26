import { defineSector } from './build';

/**
 * Marcas de cosméticos y cuidado de la piel — "tienda en línea de skincare".
 * Ángulo: el cliente compra por ingredientes, rutina y reseñas; lanzamientos
 * constantes, venta directa y distribución. Sin afirmaciones de eficacia: las
 * aprueba el área regulatoria del cliente.
 */
export const cosmeticos = defineSector({
  id: 'cosmeticos',
  publishAt: '2026-10-29T00:00:00-06:00',
  slug: { es: 'para-marcas-de-cosmeticos', en: 'for-beauty-and-skincare-brands' },
  name: { es: 'Cosméticos y cuidado de la piel', en: 'Beauty and skincare brands' },
  proof: ['ideograma', 'pfi', 'fruitAcademy'],
  es: {
    seoTitle: 'Diseño Web para Marcas de Cosméticos y Skincare',
    seoDescription:
      'Diseño web y tiendas en línea a la medida para marcas de cosméticos y skincare: ingredientes explicados, rutinas, reseñas y lanzamientos.',
    keywords:
      'diseño web para marcas de cosméticos, tienda en línea skincare, página web marca de belleza, ecommerce cosméticos, branding cuidado de la piel',
    subtitle: 'Diseño web para marcas de cosméticos y cuidado de la piel',
    accent: 'Cosméticos y Skincare',
    target: 'marcas de cosméticos y cuidado de la piel',
    hero: 'Quien compra skincare ya no se conforma con una foto bonita: lee ingredientes, compara rutinas y busca reseñas antes de pagar. Si tu sitio no responde para qué tipo de piel es tu producto y cómo se usa, la venta se va a un marketplace o a otra marca. Diseñamos tiendas que explican tu fórmula con claridad y hacen que tu marca se sienta premium en cada detalle.',
    intro:
      'Diseñamos páginas web para marcas de skincare, maquillaje, cuidado capilar, fragancias y cosmética natural, desde la marca independiente hasta la que vende en cadenas.',
    items: [
      {
        title: 'Ingredientes y rutinas',
        description:
          'Cada producto con sus ingredientes clave, tipo de piel, modo de uso y en qué paso de la rutina va, para que el cliente elija con confianza.',
        bullets: ['Ingredientes clave', 'Rutinas por tipo de piel', 'Modo de uso'],
      },
      {
        title: 'Tienda que vende',
        description:
          'Si vendes directo, desarrollamos a la medida una tienda en línea con kits, suscripciones y recomendaciones, pensada para comprar desde el celular sin fricción.',
        bullets: [],
        custom: ['Kits y sets', 'Suscripciones', 'Pago móvil sencillo'],
      },
      {
        title: 'Reseñas y comunidad',
        description:
          'Reseñas, fotos de clientes y contenido de creadores en cada producto; las reseñas verificadas y la integración con redes se desarrollan a la medida.',
        bullets: ['Contenido de clientes'],
        custom: ['Reseñas en cada producto', 'Integración con redes'],
      },
      {
        title: 'Lanzamientos y marca',
        description:
          'Páginas de lanzamiento, identidad y empaque alineados, para que cada producto nuevo llegue con fuerza a tu sitio, tus redes y el anaquel.',
        bullets: ['Páginas de lanzamiento', 'Identidad y empaque', 'Sección para distribuidores'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu marca, tus productos y dónde vendes hoy.',
    pages: 'productos, rutinas, ingredientes, kits, la marca, reseñas y distribuidores',
    costQuestion: '¿Cuánto cuesta la tienda en línea de una marca de cosméticos?',
    costScope:
      'cuántos productos, si incluye suscripciones o kits, si se conecta con tu plataforma de tienda o se crea una nueva y si también necesitas marca o empaque',
    faqs: [
      {
        question: '¿Pueden migrar nuestra tienda actual?',
        answer:
          'Sí, como desarrollo a la medida. Revisamos tu plataforma actual y diseñamos sobre ella o planeamos la migración de productos, clientes y pedidos sin perder lo que ya tienes posicionado en Google.',
      },
      {
        question: '¿Cómo manejan las afirmaciones sobre beneficios del producto?',
        answer:
          'Los beneficios que se publican los aprueba tu área regulatoria o tu formulador. Nosotros los presentamos con claridad y dejamos espacio para las leyendas que correspondan.',
      },
      {
        question: '¿Diseñan también el empaque?',
        answer:
          'Sí, se puede incluir en el alcance. En belleza el empaque es parte de la experiencia, así que conviene diseñarlo junto con la marca y el sitio.',
      },
    ],
    aiSubject: 'mi marca de skincare',
    remoteWho: 'marcas de cosméticos',
    proofText:
      'Proyectos reales de identidad y sitios web en diseño de marca, productos de consumo y alimentos. Es el cuidado que pondríamos en tu marca.',
    howTo: 'la tienda en línea de una marca de cosméticos',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué productos tienes y cómo vendes hoy. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una línea de skincare natural y queremos vender en línea en todo México.',
    },
  },
  en: {
    seoTitle: 'Web Design for Beauty and Skincare Brands',
    seoDescription:
      'Web design and custom online stores for beauty and skincare brands: ingredients explained, routines, reviews, launches, and a premium brand.',
    keywords:
      'skincare website design, beauty brand website, cosmetics ecommerce design, beauty brand web design agency, skincare brand identity',
    subtitle: 'Web design for beauty and skincare brands',
    accent: 'Beauty & Skincare',
    target: 'beauty and skincare brands',
    hero: 'Skincare shoppers are no longer won by a pretty photo: they read ingredients, compare routines, and look for reviews before paying. If your site does not answer which skin type your product is for and how to use it, the sale goes to a marketplace or another brand. We design stores that explain your formula clearly and make your brand feel premium in every detail.',
    intro:
      'We design websites for skincare, makeup, haircare, fragrance, and clean beauty brands, from independent labels to brands sold in major retailers.',
    items: [
      {
        title: 'Ingredients and routines',
        description:
          'Each product with key ingredients, skin type, how to use it, and where it fits in the routine, so customers choose with confidence.',
        bullets: ['Key ingredients', 'Routines by skin type', 'How to use'],
      },
      {
        title: 'A store that sells',
        description:
          'If you sell direct, we build a custom online store with bundles, subscriptions, and recommendations, made for frictionless mobile shopping.',
        bullets: [],
        custom: ['Bundles and sets', 'Subscriptions', 'Simple mobile checkout'],
      },
      {
        title: 'Reviews and community',
        description:
          'Reviews, customer photos, and creator content on every product page; verified reviews and social integration are custom builds.',
        bullets: ['Customer content'],
        custom: ['Reviews on every product', 'Social integration'],
      },
      {
        title: 'Launches and brand',
        description:
          'Launch pages, identity, and packaging aligned, so every new product lands with impact on your site, social, and shelf.',
        bullets: ['Launch pages', 'Identity and packaging', 'Wholesale section'],
      },
    ],
    diagnosis: 'A call to learn about your brand, your products, and where you sell today.',
    pages: 'products, routines, ingredients, sets, the brand, reviews, and wholesale',
    costQuestion: 'How much does a beauty brand online store cost?',
    costScope:
      'how many products, whether it includes subscriptions or bundles, whether it builds on your current store platform or a new one, and whether you also need a brand or packaging',
    faqs: [
      {
        question: 'Can you migrate our current store?',
        answer:
          'Yes, as custom development. We review your current platform and either design on top of it or plan the migration of products, customers, and orders without losing what already ranks on Google.',
      },
      {
        question: 'How do you handle product benefit claims?',
        answer:
          'The claims you publish are approved by your regulatory team or formulator. We present them clearly and leave room for any required statements.',
      },
      {
        question: 'Do you also design packaging?',
        answer:
          'Yes, it can be included in the scope. In beauty, packaging is part of the experience, so it is best designed together with the brand and the site.',
      },
    ],
    aiSubject: 'my skincare brand',
    remoteWho: 'beauty brands',
    proofText:
      'Real identity and website work in brand design, consumer products, and food. It is the care we would bring to your brand.',
    howTo: 'a beauty brand online store',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what products you have and how you sell today. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a clean skincare line and want to sell online across North America.',
    },
  },
});
