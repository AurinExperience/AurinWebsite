import { defineSector } from './build';

/**
 * Tiendas con WooCommerce sobre WordPress. Ángulo: la tienda es tuya (hosting,
 * código y datos), a cambio de armarla y mantenerla bien.
 *
 * Aurin sí tiene experiencia desarrollando tiendas (confirmado 2026-11-04), pero el
 * portafolio no muestra ninguna: no nombrar clientes. No ofrecer facturación CFDI ni
 * conexión con inventario o ERP (decisión del cliente, misma fecha).
 * Dato de Wmtips consultado en 2026-11 (su ranking es de 2026): revisarlo en 2027.
 */
export const ecommerceWoocommerce = defineSector({
  id: 'ecommerce-woocommerce',
  service: 'ecommerce',
  publishAt: '2026-11-04T00:00:00-06:00',
  slug: { es: 'woocommerce', en: 'woocommerce' },
  name: { es: 'Tiendas en WooCommerce', en: 'WooCommerce stores' },
  proof: ['pfi', 'fruitAcademy', 'elRollo'],
  es: {
    seoTitle: 'Desarrollo WooCommerce: Tienda en WordPress a Medida',
    seoDescription:
      'Convierte tu WordPress en una tienda que es tuya: WooCommerce a la medida, en tu propio hosting, con tus datos y sin mensualidad por usar la plataforma.',
    keywords:
      'desarrollo woocommerce, tienda en línea wordpress, agencia woocommerce méxico, tienda woocommerce a la medida, migrar a woocommerce, diseño tienda wordpress',
    subtitle: 'Tiendas en línea con WooCommerce y WordPress',
    accent: 'WooCommerce',
    target: 'WooCommerce',
    hero: 'Con WooCommerce la tienda es tuya: tu hosting, tu código, tus datos y ninguna mensualidad por usar la plataforma. También es fácil que termine lenta y llena de plugins si se arma a la carrera. Diseñamos y desarrollamos tu tienda sobre WordPress con la identidad de tu marca, instalando solo lo necesario y dejándola lista para crecer.',
    stat: { value: 'Es tuya', label: 'tienda, datos y hosting a tu nombre' },
    intro:
      'Diseñamos tiendas con WooCommerce para marcas que ya tienen WordPress, negocios que venden gracias a su contenido y catálogos con reglas de precio propias.',
    items: [
      {
        title: 'Tu WordPress, ahora con tienda',
        description:
          'Si ya tienes WordPress, sumamos la tienda sin tirar lo que funciona: tu contenido, tu blog y lo que ya ganaste en Google siguen ahí. Si no lo tienes, lo armamos desde cero.',
        bullets: ['Tienda integrada a tu sitio', 'Tema diseñado para tu marca', 'Contenido y pedidos en un solo panel'],
      },
      {
        title: 'Catálogo a tu manera',
        description:
          'Productos con variantes, categorías y filtros, en fichas que resuelven las dudas. Si tu negocio tiene reglas propias, las desarrollamos a la medida.',
        bullets: ['Variantes y atributos', 'Categorías y filtros', 'Fichas de producto claras'],
        custom: ['Precios de mayoreo o por tipo de cliente', 'Suscripciones'],
      },
      {
        title: 'Cobros y envíos',
        description:
          'Conectamos las pasarelas que necesitas, como Mercado Pago o PayPal, las tarifas de envío por zona y los correos de pedido con tu marca.',
        bullets: ['Pasarelas de pago', 'Tarifas de envío por zona', 'Correos de pedido con tu marca'],
      },
      {
        title: 'Rápida, segura y al día',
        description:
          'Es el punto débil de muchas tiendas en WordPress, y se decide desde el inicio: buen hosting, pocos plugins y bien elegidos, respaldos y actualizaciones.',
        bullets: ['Asesoría de hosting', 'Solo los plugins indispensables', 'Respaldos configurados'],
        custom: ['Plan mensual de mantenimiento'],
      },
    ],
    diagnosis: 'Una llamada para conocer lo que vendes y revisar tu WordPress, si ya tienes uno: tema, plugins y hosting.',
    pages: 'inicio, tienda, categorías, ficha de producto, carrito, envíos y cambios, blog y contacto',
    costQuestion: '¿Cuánto cuesta desarrollar una tienda en WooCommerce?',
    costScope:
      'cuántos productos y variantes tienes, si partimos de tu WordPress o de cero, qué extensiones y funciones a la medida necesitas y si hay que migrar una tienda existente',
    faqs: [
      {
        question: '¿WooCommerce es gratis?',
        answer:
          'El plugin sí, pero la tienda no corre sola: pagas hosting, dominio, las extensiones de pago que necesites y las comisiones de tu pasarela. A cambio, no le pagas mensualidad a la plataforma por usarla. Te dejamos esos costos claros antes de arrancar.',
      },
      {
        question: '¿WooCommerce o Shopify: cuál me conviene?',
        answer:
          'De cara a 2027 son las dos plataformas de tienda más usadas en México, según el ranking de Wmtips, y resuelven cosas distintas. WooCommerce conviene si ya tienes WordPress, si el contenido pesa en tus ventas o si quieres control total de la tienda y su hosting; a cambio, alguien tiene que mantenerla. Shopify conviene si prefieres pagar una mensualidad y que la plataforma se encargue de servidores y actualizaciones. En la llamada te decimos cuál recomendamos para tu caso.',
      },
      {
        question: '¿Pueden agregar la tienda a mi WordPress actual?',
        answer:
          'Normalmente sí. Primero revisamos tu tema, tus plugins y tu hosting: si aguantan una tienda, la sumamos; si no, te decimos qué hay que cambiar antes de empezar. También migramos tiendas desde otras plataformas, con redirecciones para no perder lo que ya ganaste en Google.',
      },
    ],
    aiSubject: 'mi tienda',
    remoteWho: 'tiendas',
    proofText: 'Proyectos reales de diseño y desarrollo web de Aurin. Es el cuidado que pondríamos en tu tienda.',
    howTo: 'y desarrollar una tienda en WooCommerce',
    lead: {
      heading: 'Hablemos de tu tienda',
      description:
        'Cuéntanos qué vendes y si ya tienes WordPress. Te contactaremos para conocer tu proyecto y te enviaremos una cotización desglosada.',
      messagePlaceholder: 'Ej. Tenemos un sitio en WordPress con blog y queremos vender nuestros productos ahí mismo.',
    },
  },
  en: {
    seoTitle: 'WooCommerce Development: Custom WordPress Stores',
    seoDescription:
      'Turn your WordPress site into a store you truly own: custom WooCommerce on your own hosting, with your data and no monthly fee for using the platform.',
    keywords:
      'woocommerce development, wordpress online store, woocommerce agency, custom woocommerce store, migrate to woocommerce, woocommerce developers mexico',
    subtitle: 'Online stores with WooCommerce and WordPress',
    accent: 'WooCommerce',
    target: 'WooCommerce',
    hero: 'With WooCommerce the store is yours: your hosting, your code, your data, and no monthly fee for using the platform. It is also easy for it to end up slow and full of plugins when it is rushed. We design and build your store on WordPress around your brand, installing only what it needs and leaving it ready to grow.',
    stat: { value: 'It’s yours', label: 'store, data, and hosting in your name' },
    intro:
      'We design WooCommerce stores for brands already on WordPress, businesses that sell through their content, and catalogs with their own pricing rules.',
    items: [
      {
        title: 'Your WordPress, now with a store',
        description:
          'If you already run WordPress, we add the store without throwing out what works: your content, your blog, and what you have earned on Google stay in place. If you don’t, we build it from scratch.',
        bullets: ['Store integrated into your site', 'Theme designed for your brand', 'Content and orders in one admin'],
      },
      {
        title: 'A catalog that fits your business',
        description:
          'Products with variants, categories, and filters, on pages that answer buyers’ questions. If your business has its own rules, we build them as custom work.',
        bullets: ['Variants and attributes', 'Categories and filters', 'Clear product pages'],
        custom: ['Wholesale or customer-type pricing', 'Subscriptions'],
      },
      {
        title: 'Payments and shipping',
        description:
          'We connect the gateways you need, such as Mercado Pago or PayPal, shipping rates by zone, and order emails in your brand.',
        bullets: ['Payment gateways', 'Shipping rates by zone', 'Branded order emails'],
      },
      {
        title: 'Fast, secure, and up to date',
        description:
          'This is where many WordPress stores fall short, and it gets decided at the start: good hosting, few well-chosen plugins, backups, and updates.',
        bullets: ['Hosting guidance', 'Only the plugins you need', 'Backups set up'],
        custom: ['Monthly maintenance plan'],
      },
    ],
    diagnosis: 'A call to learn what you sell and review your WordPress site, if you have one: theme, plugins, and hosting.',
    pages: 'home, shop, categories, product page, cart, shipping and returns, blog, and contact',
    costQuestion: 'How much does it cost to build a WooCommerce store?',
    costScope:
      'how many products and variants you have, whether we start from your WordPress site or from scratch, which extensions and custom features you need, and whether an existing store has to be migrated',
    faqs: [
      {
        question: 'Is WooCommerce free?',
        answer:
          'The plugin is, but the store does not run itself: you pay for hosting, a domain, any paid extensions you need, and your gateway’s fees. In exchange, you pay no monthly fee for using the platform. We make those costs clear before work starts.',
      },
      {
        question: 'WooCommerce or Shopify: which one is right for me?',
        answer:
          'Heading into 2027, they are the two most used store platforms in Mexico, according to Wmtips’ ranking, and they solve different problems. WooCommerce fits if you already run WordPress, if content drives your sales, or if you want full control of the store and its hosting; in exchange, someone has to maintain it. Shopify fits if you prefer to pay a monthly fee and let the platform handle servers and updates. On the call we tell you which one we recommend for your case.',
      },
      {
        question: 'Can you add a store to my current WordPress site?',
        answer:
          'Usually, yes. First we review your theme, plugins, and hosting: if they can carry a store, we add it; if not, we tell you what has to change before starting. We also migrate stores from other platforms, with redirects so you keep what you have earned on Google.',
      },
    ],
    aiSubject: 'my store',
    remoteWho: 'stores',
    proofText: 'Real Aurin web design and development projects. It is the care we would bring to your store.',
    howTo: 'and build a WooCommerce store',
    lead: {
      heading: 'Let’s talk about your store',
      description:
        'Tell us what you sell and whether you already run WordPress. We will reach out to learn about your project and send you an itemized quote.',
      messagePlaceholder: 'E.g. We have a WordPress site with a blog and want to sell our products right there.',
    },
  },
});
