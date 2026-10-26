import { defineSector } from './build';

/**
 * Marcas de lujo (EE. UU.) — "luxury brand web design" / "luxury ecommerce
 * website design". Ángulo: moda, accesorios, belleza y hogar de alta gama; el
 * sitio comunica precio y calidad antes de leer una palabra. Distinta de
 * "for-jewelry-brands" (joyerías en México).
 */
export const usLuxuryBrands = defineSector({
  id: 'us-luxury-brands',
  country: 'US',
  publishAt: '2026-10-24T00:00:00-06:00',
  slug: { es: 'para-marcas-de-lujo', en: 'for-luxury-brands' },
  name: { es: 'Marcas de lujo', en: 'Luxury brands' },
  proof: ['ideograma', 'sinfonica', 'pfi'],
  es: {
    seoTitle: 'Diseño Web y E-commerce para Marcas de Lujo',
    seoDescription:
      'Diseño web y tiendas en línea a la medida para marcas de lujo en EE. UU.: moda, accesorios, belleza y hogar con una experiencia a la altura del producto.',
    keywords:
      'diseño web marcas de lujo, ecommerce de lujo, tienda en línea de lujo, diseño web moda de lujo, agencia de diseño para marcas de lujo',
    subtitle: 'Diseño web y e-commerce para marcas de lujo',
    accent: 'Marcas de Lujo',
    target: 'marcas de lujo',
    hero: 'En lujo, el sitio comunica precio y calidad antes de que el cliente lea una palabra. Una plantilla de tienda convierte tu producto en uno más del catálogo. Diseñamos experiencias de marca y de compra tan cuidadas como tu producto, que justifican su precio y lo hacen deseable.',
    intro:
      'Diseñamos páginas web para marcas de moda, accesorios, belleza, relojería y hogar de alta gama en Estados Unidos, desde marcas emergentes hasta casas establecidas.',
    items: [
      {
        title: 'Experiencia de marca',
        description:
          'Colecciones contadas con dirección de arte, ritmo y detalle editorial, no una cuadrícula de productos.',
        bullets: ['Lookbooks y colecciones', 'Dirección de arte digital', 'Historias de marca'],
      },
      {
        title: 'E-commerce de lujo',
        description:
          'Fichas, carrito y pago desarrollados a la medida, tan cuidados como una tienda física, rápidos aun con imágenes de alta calidad.',
        bullets: ['Fichas de producto editoriales', 'Envíos y devoluciones claros'],
        custom: ['Pago sin fricción'],
      },
      {
        title: 'Servicio personal en línea',
        description:
          'Citas privadas, asesoría personal y listas de espera para lanzamientos, como lo haría tu mejor vendedor.',
        bullets: ['Citas privadas', 'Asesoría personal'],
        custom: ['Listas de espera'],
      },
      {
        title: 'Identidad de lujo',
        description:
          'Logotipo, tipografía y sistema visual que se ven igual de exclusivos en el sitio, el empaque y las tiendas.',
        bullets: ['Identidad y manual', 'Empaque según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu marca, tus colecciones y cómo vendes hoy.',
    pages: 'colecciones, productos, historia de la marca, tiendas, citas y servicio al cliente',
    costQuestion: '¿Cuánto cuesta el sitio web de una marca de lujo?',
    costScope:
      'cuántos productos y colecciones, qué plataforma de tienda usas o necesitas, si incluye citas y lanzamientos y si también necesitas identidad',
    faqs: [
      {
        question: '¿Trabajan con Shopify u otra plataforma?',
        answer:
          'Sí. Diseñamos y desarrollamos a la medida sobre la plataforma que mejor encaje con tu operación o la que ya usas, sin que el resultado se vea como plantilla.',
      },
      {
        question: '¿Pueden dirigir la fotografía de producto?',
        answer:
          'Sí, podemos dirigirla o incluirla en el alcance. En lujo la imagen define cómo se percibe el precio.',
      },
    ],
    aiSubject: 'mi marca',
    remoteWho: 'marcas de lujo',
    proofText:
      'Proyectos reales de identidad y sitios web en diseño de marca, cultura y marcas de consumo. Es el estándar con el que trabajaríamos tu marca.',
    howTo: 'el sitio web de una marca de lujo',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué vendes y cómo vendes hoy. Te contactaremos lo antes posible para entender tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una marca de bolsos de piel en Nueva York y nuestra tienda en línea se ve como cualquier otra.',
    },
  },
  en: {
    seoTitle: 'Luxury Brand Web Design & Ecommerce',
    seoDescription:
      'Websites and online stores for luxury brands in the US: fashion, accessories, beauty, and high-end home with a digital experience that matches the product.',
    keywords:
      'luxury brand web design, luxury ecommerce website design, luxury fashion website design, high end ecommerce agency, luxury website design agency',
    subtitle: 'Web design and ecommerce for luxury brands',
    accent: 'Luxury Brands',
    target: 'luxury brands',
    hero: 'In luxury, the website communicates price and quality before customers read a word. A store template turns your product into one more item in a catalog. We design brand and shopping experiences as refined as your product, that justify its price and make it desirable.',
    intro:
      'We design websites for high-end fashion, accessories, beauty, watch, and home brands in the US, from emerging labels to established houses.',
    items: [
      {
        title: 'Brand experience',
        description:
          'Collections told with art direction, pacing, and editorial detail, not a product grid.',
        bullets: ['Lookbooks and collections', 'Digital art direction', 'Brand stories'],
      },
      {
        title: 'Luxury ecommerce',
        description:
          'Custom-built product pages, cart, and checkout as refined as a flagship store, fast even with high-quality imagery.',
        bullets: ['Editorial product pages', 'Clear shipping and returns'],
        custom: ['Frictionless checkout'],
      },
      {
        title: 'Personal service online',
        description:
          'Private appointments, personal shopping, and waitlists for launches, the way your best sales associate would.',
        bullets: ['Private appointments', 'Personal shopping'],
        custom: ['Launch waitlists'],
      },
      {
        title: 'Luxury identity',
        description:
          'Logo, typography, and visual system that look equally exclusive on the site, the packaging, and in stores.',
        bullets: ['Identity and guidelines', 'Packaging based on scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your brand, your collections, and how you sell today.',
    pages: 'collections, products, brand story, stores, appointments, and customer care',
    costQuestion: 'How much does a luxury brand website cost?',
    costScope:
      'how many products and collections, which store platform you use or need, whether it includes appointments and launches, and whether you also need an identity',
    faqs: [
      {
        question: 'Do you work with Shopify or other platforms?',
        answer:
          'Yes. We design and custom-build on the platform that best fits your operation or the one you already use, without the result looking like a template.',
      },
      {
        question: 'Can you direct product photography?',
        answer: 'Yes, we can direct it or include it in the scope. In luxury, imagery defines how the price is perceived.',
      },
    ],
    aiSubject: 'my brand',
    remoteWho: 'luxury brands',
    proofText:
      'Real identity and website work in brand design, culture, and consumer brands. It is the standard we would bring to your brand.',
    howTo: 'a luxury brand website',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what you sell and how you sell today. We will reach out as soon as possible to understand your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a leather goods brand in New York and our online store looks like everyone else’s.',
    },
  },
});
