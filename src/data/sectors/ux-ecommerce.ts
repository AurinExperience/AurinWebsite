import { defineSector } from './build';

/**
 * UX/UI para e-commerce y retail — "diseño UX/UI para e-commerce" / "diseño de
 * tienda en línea". Ángulo: cada paso de más en el checkout es una venta
 * perdida; catálogo, búsqueda y carrito. Sin cliente de e-commerce en el
 * catálogo: se usan los genéricos y no se afirma experiencia en retail.
 */
export const uxEcommerce = defineSector({
  id: 'ux-ecommerce',
  service: 'uxui',
  publishAt: '2026-10-18T00:00:00-06:00',
  slug: { es: 'para-ecommerce', en: 'for-ecommerce' },
  name: { es: 'UX/UI para e-commerce', en: 'UX/UI for e-commerce' },
  proof: ['pfi', 'fruitAcademy', 'elRollo'],
  es: {
    seoTitle: 'Diseño UX/UI para E-commerce y Tiendas en Línea',
    seoDescription:
      'Diseño UX/UI para e-commerce y retail: catálogos que se recorren fácil, búsqueda que encuentra y un checkout sin pasos de más.',
    keywords:
      'diseño UX/UI para e-commerce, diseño de tienda en línea, UX ecommerce, diseño checkout, optimización de conversión, diseño app retail',
    subtitle: 'Diseño UX/UI para e-commerce y retail',
    accent: 'E-commerce',
    target: 'e-commerce y retail',
    hero: 'En una tienda en línea, cada paso de más es una venta que se pierde. Si el cliente no encuentra el producto o se atora en el pago, se va con la competencia en un clic. Diseñamos tiendas que se recorren fácil, convencen y cobran sin fricción.',
    intro:
      'Hacemos el diseño UX/UI de tiendas en línea para marcas con venta en línea, negocios con catálogo grande y retailers que unen tienda física y digital. Cada proyecto parte de cómo compra tu cliente y de dónde abandona hoy.',
    items: [
      {
        title: 'Checkout sin abandono',
        description:
          'Carrito, envío y pago con los pasos justos, costos claros desde el inicio y métodos de pago que tu cliente espera.',
        bullets: ['Carrito y checkout por pasos', 'Costos de envío visibles', 'Compra como invitado'],
      },
      {
        title: 'Catálogo y búsqueda que venden',
        description:
          'Categorías, filtros y búsqueda organizados para que el cliente llegue al producto correcto en pocos toques.',
        bullets: ['Arquitectura de catálogo', 'Filtros y búsqueda', 'Fichas de producto que convencen'],
      },
      {
        title: 'Diseño para celular primero',
        description:
          'La mayoría compra desde el celular. Diseñamos cada pantalla para el pulgar y para cargar rápido con cualquier señal.',
        bullets: ['Navegación móvil', 'Imágenes optimizadas', 'Web y app de compras'],
      },
      {
        title: 'Clientes que regresan',
        description:
          'Cuentas, pedidos, devoluciones y recomendaciones diseñados para que la segunda compra sea más fácil que la primera.',
        bullets: ['Cuenta y seguimiento de pedidos', 'Devoluciones claras', 'Sistema de diseño escalable'],
      },
    ],
    research:
      'Entendemos cómo compra tu cliente: datos de navegación y abandono, entrevistas y revisión de la experiencia actual de tu tienda.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una tienda en línea?',
    costScope:
      'cuántas plantillas y flujos, el tamaño del catálogo, si es web, app o ambas y si necesitas sistema de diseño',
    faqs: [
      {
        question: '¿Pueden mejorar la tienda que ya tenemos en una plataforma?',
        answer:
          'Sí. Revisamos dónde abandonan tus clientes y rediseñamos esas partes dentro de lo que permite tu plataforma, o te recomendamos cambiar si te está limitando.',
      },
      {
        question: '¿Cómo saben qué cambios priorizar?',
        answer:
          'Con tus datos de navegación y ventas identificamos los pasos donde más clientes se pierden y empezamos por ahí, que es donde más rápido se nota la mejora.',
      },
    ],
    remoteWho: 'tiendas en línea',
    proofText:
      'Proyectos reales de identidad, producto y sitios web para marcas de consumo, alimentos y recreación. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu tienda.',
    howTo: 'la experiencia y la interfaz de una tienda en línea',
    lead: {
      heading: 'Hablemos de tu tienda en línea',
      description:
        'Cuéntanos qué vendes, en qué plataforma y dónde sientes que pierdes ventas. Te contactaremos lo antes posible para entender tu tienda y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos mucho tráfico pero muchos clientes abandonan el carrito antes de pagar.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for E-commerce and Online Stores',
    seoDescription:
      'UX/UI design for e-commerce and retail: catalogs that are easy to browse, search that finds, and a checkout with no extra steps.',
    keywords:
      'UX/UI design for e-commerce, online store design, ecommerce UX, checkout design, conversion optimization, retail app design',
    subtitle: 'UX/UI design for e-commerce and retail',
    accent: 'E-commerce',
    target: 'e-commerce and retail brands',
    hero: 'In an online store, every extra step is a lost sale. If customers cannot find the product or get stuck at payment, they leave for a competitor in one click. We design stores that are easy to browse, persuasive, and charge without friction.',
    intro:
      'We design the UX/UI of online stores for brands selling online, businesses with large catalogs, and retailers bringing physical and digital together. Every project starts from how your customers buy and where they drop off today.',
    items: [
      {
        title: 'A checkout without drop-off',
        description:
          'Cart, shipping, and payment with just the right steps, clear costs from the start, and the payment methods customers expect.',
        bullets: ['Step-by-step cart and checkout', 'Visible shipping costs', 'Guest checkout'],
      },
      {
        title: 'Catalog and search that sell',
        description:
          'Categories, filters, and search organized so customers reach the right product in a few taps.',
        bullets: ['Catalog architecture', 'Filters and search', 'Product pages that persuade'],
      },
      {
        title: 'Mobile-first design',
        description:
          'Most people shop on their phones. We design every screen for the thumb and to load fast on any connection.',
        bullets: ['Mobile navigation', 'Optimized images', 'Web and shopping app'],
      },
      {
        title: 'Customers who come back',
        description:
          'Accounts, orders, returns, and recommendations designed so the second purchase is easier than the first.',
        bullets: ['Account and order tracking', 'Clear returns', 'Scalable design system'],
      },
    ],
    research:
      'We learn how your customers buy: browsing and drop-off data, interviews, and a review of your store’s current experience.',
    costQuestion: 'How much does UX/UI design for an online store cost?',
    costScope:
      'how many templates and flows, catalog size, whether it is web, an app, or both, and whether you need a design system',
    faqs: [
      {
        question: 'Can you improve the store we already run on a platform?',
        answer:
          'Yes. We review where your customers drop off and redesign those parts within what your platform allows, or recommend switching if it is holding you back.',
      },
      {
        question: 'How do you know which changes to prioritize?',
        answer:
          'Using your browsing and sales data, we identify the steps where the most customers are lost and start there, which is where improvement shows fastest.',
      },
    ],
    remoteWho: 'online stores',
    proofText:
      'Real identity, product, and website work for consumer, food, and leisure brands. The same care we put into every brand is what we would bring to your store.',
    howTo: 'the experience and interface of an online store',
    lead: {
      heading: 'Let’s talk about your online store',
      description:
        'Tell us what you sell, on which platform, and where you feel you lose sales. We will reach out as soon as possible to understand your store and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We get lots of traffic, but many customers abandon the cart before paying.',
    },
  },
});
