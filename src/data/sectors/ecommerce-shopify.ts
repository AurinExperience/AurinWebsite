import { defineSector } from './build';

/**
 * Tiendas en Shopify. Ángulo: abrir la tienda es fácil; que se vea como tu marca,
 * convenza en el celular y cobre y envíe bien es el trabajo.
 *
 * Aurin sí tiene experiencia desarrollando tiendas (confirmado 2026-11-04), pero el
 * portafolio no muestra ninguna: no nombrar clientes. No ofrecer facturación CFDI ni
 * conexión con inventario o ERP (decisión del cliente, misma fecha).
 * Sin cifras de comisiones ni de Shopify Payments: cambian por plan y por país.
 */
export const ecommerceShopify = defineSector({
  id: 'ecommerce-shopify',
  service: 'ecommerce',
  publishAt: '2026-11-04T00:00:00-06:00',
  slug: { es: 'shopify', en: 'shopify' },
  name: { es: 'Tiendas en Shopify', en: 'Shopify stores' },
  proof: ['pfi', 'fruitAcademy', 'elRollo'],
  es: {
    seoTitle: 'Desarrollo de Tiendas Shopify con Diseño a la Medida',
    seoDescription:
      'Tu tienda Shopify con la cara de tu marca: tema a la medida, fichas de producto que convencen y pagos y envíos listos. Diseño y desarrollo en un solo equipo.',
    keywords:
      'desarrollo tienda shopify, agencia shopify méxico, diseño tienda shopify, tema shopify a la medida, migrar a shopify, tienda en línea shopify',
    subtitle: 'Diseño y desarrollo de tiendas Shopify',
    accent: 'Shopify',
    target: 'Shopify',
    hero: 'Abrir una tienda en Shopify toma una tarde. Que no se vea igual a las demás, que convenza en el celular y que cobre y envíe sin tropiezos es otro trabajo, y ese es el nuestro. Diseñamos y desarrollamos tu tienda con la identidad de tu marca, y te la dejamos lista para que tu equipo suba productos y atienda pedidos sin depender de nadie.',
    stat: { value: 'Tu marca', label: 'un tema propio, en lugar de la plantilla de todos' },
    intro:
      'Diseñamos tiendas en Shopify para marcas de moda, belleza, alimentos, suplementos, hogar y productos de consumo.',
    items: [
      {
        title: 'Tema a la medida',
        description:
          'Diseñamos el tema de tu tienda a partir de tu marca, o adaptamos a fondo uno existente si el alcance lo pide. Tu equipo sigue editando secciones desde el panel de Shopify.',
        bullets: ['Inicio y colecciones con tu marca', 'Secciones editables desde el panel', 'Pensado primero para el celular'],
      },
      {
        title: 'Fichas que cierran la venta',
        description:
          'La ficha de producto es donde se decide la compra: fotos, variantes, tallas, envío y cambios a la vista, para que nadie se vaya con dudas.',
        bullets: ['Variantes y guía de tallas', 'Envíos y cambios claros', 'Reseñas y productos relacionados'],
      },
      {
        title: 'Pagos, envíos e impuestos',
        description:
          'Dejamos listo lo necesario para cobrar y enviar: las pasarelas disponibles en tu país, tarifas de envío por zona e impuestos, probado con pedidos de principio a fin.',
        bullets: ['Pasarelas de pago', 'Tarifas de envío por zona', 'Impuestos y pedidos de prueba'],
      },
      {
        title: 'Apps bien elegidas',
        description:
          'Elegimos solo las apps que tu tienda necesita, porque cada una suma costo mensual y peso. Lo que una app no resuelve lo vemos contigo como desarrollo a la medida.',
        bullets: ['Selección de apps', 'Configuración y pruebas'],
        custom: ['Funciones a la medida'],
      },
    ],
    diagnosis: 'Una llamada para conocer lo que vendes, dónde lo vendes hoy y qué tendría que hacer tu tienda que hoy no hace.',
    pages: 'inicio, colecciones, ficha de producto, carrito, envíos y cambios, preguntas frecuentes y contacto',
    costQuestion: '¿Cuánto cuesta desarrollar una tienda en Shopify?',
    costScope:
      'cuántos productos y variantes tienes, si adaptamos un tema o lo diseñamos desde cero, qué funciones a la medida necesitas y si hay que migrar una tienda existente',
    faqs: [
      {
        question: '¿Shopify, WooCommerce o PrestaShop: cuál me conviene?',
        answer:
          'Shopify conviene si quieres vender sin ocuparte de servidores ni actualizaciones: la plataforma se encarga y pagas una mensualidad. WooCommerce conviene si ya tienes WordPress o quieres la tienda en tu propio hosting. PrestaShop conviene para catálogos grandes con reglas de precio complejas. En la llamada te decimos cuál recomendamos para tu caso, aunque no sea Shopify.',
      },
      {
        question: 'Además del desarrollo, ¿qué costos tiene Shopify?',
        answer:
          'La suscripción mensual, que pagas directo a Shopify, las apps de pago que decidas usar, las comisiones de tu pasarela y, según tu plan y tu pasarela, las comisiones por transacción de Shopify. Los revisamos contigo antes de arrancar para que elijas el plan con los números a la vista.',
      },
      {
        question: '¿Pueden migrar mi tienda a Shopify?',
        answer:
          'Sí. Planeamos la migración de productos, clientes y pedidos según lo que tu plataforma actual permita exportar, y dejamos redirecciones para que no pierdas lo que ya ganaste en Google.',
      },
    ],
    aiSubject: 'mi tienda',
    remoteWho: 'tiendas',
    proofText: 'Proyectos reales de diseño y desarrollo web de Aurin. Es el cuidado que pondríamos en tu tienda.',
    howTo: 'y desarrollar una tienda en Shopify',
    lead: {
      heading: 'Hablemos de tu tienda',
      description:
        'Cuéntanos qué vendes y cómo lo vendes hoy. Te contactaremos para conocer tu proyecto y te enviaremos una cotización desglosada.',
      messagePlaceholder: 'Ej. Vendemos café de especialidad por Instagram y queremos una tienda en Shopify con envíos a todo México.',
    },
  },
  en: {
    seoTitle: 'Shopify Store Development with Custom Design',
    seoDescription:
      'A Shopify store that looks like your brand: a custom theme, product pages that persuade, and payments and shipping ready to go. Design and build from one team.',
    keywords:
      'shopify store development, shopify agency, custom shopify theme, shopify design agency, migrate to shopify, shopify developers mexico',
    subtitle: 'Shopify store design and development',
    accent: 'Shopify',
    target: 'Shopify',
    hero: 'Opening a Shopify store takes an afternoon. Making it look unlike the others, persuade on a phone, and charge and ship without a hitch is different work, and that is our work. We design and build your store around your brand, then hand it over ready for your team to add products and fulfill orders without depending on anyone.',
    stat: { value: 'Your brand', label: 'a theme of your own, not the one everyone uses' },
    intro:
      'We design Shopify stores for fashion, beauty, food, supplement, home, and consumer product brands.',
    items: [
      {
        title: 'Custom theme',
        description:
          'We design your theme from your brand, or heavily adapt an existing one if the scope calls for it. Your team keeps editing sections from the Shopify admin.',
        bullets: ['Home and collections in your brand', 'Sections editable from the admin', 'Designed for phones first'],
      },
      {
        title: 'Product pages that close the sale',
        description:
          'The product page is where the purchase gets decided: photos, variants, sizes, shipping, and returns in plain view, so nobody leaves with doubts.',
        bullets: ['Variants and size guides', 'Clear shipping and returns', 'Reviews and related products'],
      },
      {
        title: 'Payments, shipping, and taxes',
        description:
          'We set up what it takes to charge and ship: the gateways available in your country, shipping rates by zone, and taxes, tested with orders from start to finish.',
        bullets: ['Payment gateways', 'Shipping rates by zone', 'Taxes and test orders'],
      },
      {
        title: 'Well-chosen apps',
        description:
          'We pick only the apps your store needs, because each one adds monthly cost and weight. Whatever an app cannot solve, we scope with you as custom work.',
        bullets: ['App selection', 'Setup and testing'],
        custom: ['Custom features'],
      },
    ],
    diagnosis: 'A call to learn what you sell, where you sell it today, and what your store should do that it does not do now.',
    pages: 'home, collections, product page, cart, shipping and returns, FAQ, and contact',
    costQuestion: 'How much does it cost to build a Shopify store?',
    costScope:
      'how many products and variants you have, whether we adapt a theme or design one from scratch, which custom features you need, and whether an existing store has to be migrated',
    faqs: [
      {
        question: 'Shopify, WooCommerce, or PrestaShop: which one is right for me?',
        answer:
          'Shopify fits if you want to sell without dealing with servers or updates: the platform handles them and you pay a monthly fee. WooCommerce fits if you already run WordPress or want the store on your own hosting. PrestaShop fits large catalogs with complex pricing rules. On the call we tell you which one we recommend for your case, even if it is not Shopify.',
      },
      {
        question: 'Beyond development, what does Shopify cost?',
        answer:
          'The monthly subscription, paid directly to Shopify, any paid apps you choose, your gateway’s fees and, depending on your plan and gateway, Shopify’s transaction fees. We go over them with you before work starts so you can pick a plan with the numbers in view.',
      },
      {
        question: 'Can you migrate my store to Shopify?',
        answer:
          'Yes. We plan the migration of products, customers, and orders based on what your current platform can export, and we set up redirects so you keep what you have already earned on Google.',
      },
    ],
    aiSubject: 'my store',
    remoteWho: 'stores',
    proofText: 'Real Aurin web design and development projects. It is the care we would bring to your store.',
    howTo: 'and build a Shopify store',
    lead: {
      heading: 'Let’s talk about your store',
      description:
        'Tell us what you sell and how you sell it today. We will reach out to learn about your project and send you an itemized quote.',
      messagePlaceholder: 'E.g. We sell specialty coffee on Instagram and want a Shopify store that ships nationwide.',
    },
  },
});
