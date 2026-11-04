import { defineSector } from './build';

/**
 * Tiendas en PrestaShop. Ángulo: catálogos grandes con combinaciones y precios por
 * tipo de cliente, en código abierto y en tu servidor; falta que se vea como tu
 * marca y sea fácil de operar.
 *
 * Aurin sí tiene experiencia desarrollando tiendas (confirmado 2026-11-04), pero el
 * portafolio no muestra ninguna: no nombrar clientes. No ofrecer facturación CFDI ni
 * conexión con inventario o ERP (decisión del cliente, misma fecha).
 */
export const ecommercePrestashop = defineSector({
  id: 'ecommerce-prestashop',
  service: 'ecommerce',
  publishAt: '2026-11-04T00:00:00-06:00',
  slug: { es: 'prestashop', en: 'prestashop' },
  name: { es: 'Tiendas en PrestaShop', en: 'PrestaShop stores' },
  proof: ['pfi', 'fruitAcademy', 'elRollo'],
  es: {
    seoTitle: 'Desarrollo PrestaShop: Tienda Online a la Medida',
    seoDescription:
      'Tienda online en PrestaShop para catálogos grandes: combinaciones, precios por cliente, varios idiomas y monedas, en tu propio servidor y sin pagar licencia.',
    keywords:
      'desarrollo prestashop, agencia prestashop méxico, tienda online prestashop, diseño tienda prestashop, módulos prestashop a medida, migrar a prestashop',
    subtitle: 'Tiendas online con PrestaShop',
    accent: 'PrestaShop',
    target: 'PrestaShop',
    hero: 'Miles de productos, combinaciones de talla y color, precios por tipo de cliente, varios idiomas y monedas: PrestaShop trae todo eso de fábrica, es de código abierto y vive en tu propio servidor. Lo que no trae es una tienda que se vea como tu marca y sea fácil de operar. Esa parte la diseñamos y la desarrollamos nosotros.',
    stat: { value: 'Sin licencia', label: 'código abierto, en tu propio servidor' },
    intro:
      'Diseñamos tiendas en PrestaShop para refaccionarias, ferreterías, distribuidores, papelerías y negocios que venden a mayoristas y a público final.',
    items: [
      {
        title: 'Catálogos grandes en orden',
        description:
          'Categorías, filtros y búsqueda pensados para encontrar un producto entre miles, con fichas donde las combinaciones se entienden a la primera.',
        bullets: ['Categorías y filtros', 'Combinaciones de producto', 'Fichas con variantes y existencias'],
      },
      {
        title: 'Un tema con tu marca',
        description:
          'Diseñamos el tema de tu tienda a partir de tu identidad, para que un catálogo enorme no se vea como un listado de almacén, sobre todo en el celular.',
        bullets: ['Tema diseñado para tu marca', 'Pensado primero para el celular', 'Inicio y categorías a tu medida'],
      },
      {
        title: 'Mayoreo y público en una tienda',
        description:
          'Grupos de clientes con sus propios precios y descuentos, para vender a distribuidores y a público final desde el mismo lugar.',
        bullets: ['Grupos de clientes', 'Precios y descuentos por grupo'],
        custom: ['Portal de mayoristas'],
      },
      {
        title: 'Módulos a la medida',
        description:
          'PrestaShop crece con módulos. Elegimos los que valen la pena y programamos lo que no existe o no se ajusta a tu operación.',
        bullets: ['Selección e instalación de módulos'],
        custom: ['Módulos a la medida'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu catálogo y cómo vendes, o para revisar tu PrestaShop si ya tienes uno.',
    pages: 'inicio, categorías, búsqueda, ficha de producto, carrito, cuenta de cliente, envíos y contacto',
    costQuestion: '¿Cuánto cuesta desarrollar una tienda en PrestaShop?',
    costScope:
      'qué tan grande es tu catálogo, cuántas combinaciones y grupos de clientes manejas, qué módulos hay que programar y si hay que migrar una tienda existente',
    faqs: [
      {
        question: '¿PrestaShop es gratis?',
        answer:
          'El software sí: es de código abierto y no pagas licencia. Lo que sí pagas es hosting, dominio, los módulos y temas de pago que necesites, las comisiones de tu pasarela y el mantenimiento, porque la tienda vive en tu servidor. Te dejamos esos costos claros antes de arrancar.',
      },
      {
        question: '¿PrestaShop, Shopify o WooCommerce: cuál me conviene?',
        answer:
          'PrestaShop conviene si tu fuerte es el catálogo: muchos productos, combinaciones, precios por tipo de cliente o varias tiendas desde un mismo panel. Shopify conviene si prefieres que la plataforma se encargue de los servidores, y WooCommerce si ya tienes WordPress o el contenido pesa en tus ventas. En la llamada te decimos cuál recomendamos para tu caso, aunque no sea PrestaShop.',
      },
      {
        question: '¿Pueden arreglar o actualizar mi PrestaShop actual?',
        answer:
          'Primero revisamos tu versión, tus módulos y tu tema. Si actualizar es viable, lo cotizamos; si te conviene empezar de nuevo o cambiar de plataforma, te lo decimos. También migramos tiendas desde otras plataformas, con redirecciones para no perder lo que ya ganaste en Google.',
      },
    ],
    aiSubject: 'mi tienda',
    remoteWho: 'tiendas',
    proofText: 'Proyectos reales de diseño y desarrollo web de Aurin. Es el cuidado que pondríamos en tu tienda.',
    howTo: 'y desarrollar una tienda en PrestaShop',
    lead: {
      heading: 'Hablemos de tu tienda',
      description:
        'Cuéntanos qué vendes y qué tan grande es tu catálogo. Te contactaremos para conocer tu proyecto y te enviaremos una cotización desglosada.',
      messagePlaceholder: 'Ej. Somos distribuidores de refacciones con 8,000 productos y vendemos a talleres y a público final.',
    },
  },
  en: {
    seoTitle: 'PrestaShop Development: Custom Online Stores',
    seoDescription:
      'A PrestaShop store for large catalogs: product combinations, customer pricing, multiple languages and currencies, on your own server with no license fee.',
    keywords:
      'prestashop development, prestashop agency, custom prestashop store, prestashop theme design, custom prestashop modules, migrate to prestashop',
    subtitle: 'Online stores with PrestaShop',
    accent: 'PrestaShop',
    target: 'PrestaShop',
    hero: 'Thousands of products, size and color combinations, pricing by customer type, multiple languages and currencies: PrestaShop has all of it out of the box, it is open source, and it lives on your own server. What it does not come with is a store that looks like your brand and is easy to run. That part we design and build.',
    stat: { value: 'No license', label: 'open source, on your own server' },
    intro:
      'We design PrestaShop stores for auto parts and hardware sellers, distributors, office suppliers, and businesses that sell both wholesale and retail.',
    items: [
      {
        title: 'Large catalogs in order',
        description:
          'Categories, filters, and search built to find one product among thousands, with product pages where combinations make sense at first glance.',
        bullets: ['Categories and filters', 'Product combinations', 'Pages with variants and stock'],
      },
      {
        title: 'A theme in your brand',
        description:
          'We design your theme from your identity, so a huge catalog does not look like a warehouse list, especially on a phone.',
        bullets: ['Theme designed for your brand', 'Designed for phones first', 'Custom home and category pages'],
      },
      {
        title: 'Wholesale and retail in one store',
        description:
          'Customer groups with their own prices and discounts, so you can sell to distributors and the public from the same place.',
        bullets: ['Customer groups', 'Prices and discounts by group'],
        custom: ['Wholesale portal'],
      },
      {
        title: 'Custom modules',
        description:
          'PrestaShop grows through modules. We pick the ones worth having and build whatever does not exist or does not fit how you operate.',
        bullets: ['Module selection and setup'],
        custom: ['Custom modules'],
      },
    ],
    diagnosis: 'A call to learn about your catalog and how you sell, or to review your PrestaShop store if you have one.',
    pages: 'home, categories, search, product page, cart, customer account, shipping, and contact',
    costQuestion: 'How much does it cost to build a PrestaShop store?',
    costScope:
      'how large your catalog is, how many combinations and customer groups you manage, which modules have to be built, and whether an existing store has to be migrated',
    faqs: [
      {
        question: 'Is PrestaShop free?',
        answer:
          'The software is: it is open source and there is no license fee. What you do pay for is hosting, a domain, any paid modules and themes you need, your gateway’s fees, and maintenance, because the store lives on your server. We make those costs clear before work starts.',
      },
      {
        question: 'PrestaShop, Shopify, or WooCommerce: which one is right for me?',
        answer:
          'PrestaShop fits if your strength is the catalog: many products, combinations, pricing by customer type, or several stores from one admin. Shopify fits if you prefer the platform to handle the servers, and WooCommerce if you already run WordPress or content drives your sales. On the call we tell you which one we recommend for your case, even if it is not PrestaShop.',
      },
      {
        question: 'Can you fix or upgrade my current PrestaShop store?',
        answer:
          'First we review your version, modules, and theme. If upgrading is viable, we quote it; if starting over or changing platforms suits you better, we tell you. We also migrate stores from other platforms, with redirects so you keep what you have earned on Google.',
      },
    ],
    aiSubject: 'my store',
    remoteWho: 'stores',
    proofText: 'Real Aurin web design and development projects. It is the care we would bring to your store.',
    howTo: 'and build a PrestaShop store',
    lead: {
      heading: 'Let’s talk about your store',
      description:
        'Tell us what you sell and how large your catalog is. We will reach out to learn about your project and send you an itemized quote.',
      messagePlaceholder: 'E.g. We distribute auto parts, with 8,000 products, and sell to repair shops and the public.',
    },
  },
});
