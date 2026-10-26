import { defineSector } from './build';

/**
 * Marcas de moda y diseño de autor — "tienda en línea de moda".
 * Ángulo: temporadas y drops constantes; la marca vende por imagen y por
 * historia, y la tienda tiene que resolver tallas, devoluciones y móvil.
 */
export const moda = defineSector({
  id: 'moda',
  publishAt: '2026-10-31T00:00:00-06:00',
  slug: { es: 'para-marcas-de-moda', en: 'for-fashion-brands' },
  name: { es: 'Marcas de moda', en: 'Fashion brands' },
  proof: ['ideograma', 'pfi', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web y Tienda en Línea para Marcas de Moda',
    seoDescription:
      'Diseño web y tiendas en línea a la medida para marcas de moda y de autor: colecciones y drops, guía de tallas, lookbooks y compra desde el celular.',
    keywords:
      'diseño web para marcas de moda, tienda en línea de ropa, página web diseñador de moda, ecommerce moda, branding marca de ropa',
    subtitle: 'Diseño web para marcas de moda',
    accent: 'Marcas de Moda',
    target: 'marcas de moda',
    hero: 'Una marca de moda vive de temporadas, lanzamientos y de la emoción del primer día de un drop. Si tu tienda se ve como cualquier plantilla, tu ropa pierde la personalidad que tiene en tus fotos, y si la guía de tallas no convence, el carrito se abandona. Diseñamos tiendas con la identidad de tu marca que resuelven la compra desde el celular.',
    intro:
      'Diseñamos páginas web para marcas de ropa, diseño de autor, calzado, accesorios, trajes de baño y moda sustentable.',
    items: [
      {
        title: 'Colecciones y drops',
        description:
          'Páginas de colección y de lanzamiento para cada temporada; la cuenta regresiva, la lista de espera y el panel para publicarlas se desarrollan a la medida.',
        bullets: ['Páginas por colección', 'Lookbooks'],
        custom: ['Lanzamientos y listas de espera'],
      },
      {
        title: 'Tallas sin dudas',
        description:
          'Guía de tallas por prenda, medidas del modelo y cómo queda, para reducir devoluciones y compras abandonadas.',
        bullets: ['Guía de tallas por prenda', 'Fit y medidas del modelo', 'Política de cambios clara'],
      },
      {
        title: 'Compra móvil',
        description:
          'Tienda en línea a la medida, pensada para comprar desde Instagram o TikTok en el celular, con pagos sencillos y envíos claros.',
        bullets: [],
        custom: ['Tienda móvil primero', 'Pagos y meses sin intereses si los ofreces', 'Integración con redes'],
      },
      {
        title: 'Marca con historia',
        description:
          'Identidad, etiquetas, empaque y la historia de tu taller o tus materiales, para que tu marca valga más que la prenda.',
        bullets: ['Identidad y manual', 'Etiquetas y empaque', 'Historia y proceso'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu marca, tus colecciones y dónde vendes hoy.',
    pages: 'colecciones, lanzamientos, lookbook, guía de tallas, la marca, tiendas y cambios',
    costQuestion: '¿Cuánto cuesta la tienda en línea de una marca de moda?',
    costScope:
      'cuántos productos y colecciones, si se construye sobre tu plataforma de tienda o una nueva y si también necesitas marca o empaque',
    faqs: [
      {
        question: '¿Pueden diseñar sobre nuestra plataforma de tienda actual?',
        answer:
          'En la mayoría de los casos sí, como desarrollo a la medida. Revisamos la plataforma que usas y diseñamos una tienda propia sobre ella, o planeamos la migración si ya no te funciona.',
      },
      {
        question: '¿Cómo reducimos las devoluciones por talla?',
        answer:
          'Con una guía de tallas por prenda, medidas del modelo, descripción del fit y fotos que muestran cómo cae la tela. Es diseño de información, y se nota en las devoluciones.',
      },
      {
        question: '¿Pueden producir los lookbooks?',
        answer:
          'Te ayudamos con la dirección de arte y la selección, y coordinamos con tu fotógrafo. La sesión se puede incluir en el alcance si la necesitas.',
      },
    ],
    aiSubject: 'mi marca',
    remoteWho: 'marcas de moda',
    proofText:
      'Proyectos reales de identidad y sitios web en diseño de marca, productos de consumo y recreación. Es el cuidado que pondríamos en tu marca.',
    howTo: 'la tienda en línea de una marca de moda',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué diseñas y cómo vendes hoy. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una marca de ropa de lino hecha en Oaxaca y queremos vender en México y Estados Unidos.',
    },
  },
  en: {
    seoTitle: 'Web Design and Online Stores for Fashion Brands',
    seoDescription:
      'Web design and custom online stores for fashion and designer brands: collections and drops, size guides, lookbooks, and mobile checkout.',
    keywords:
      'fashion brand website design, clothing ecommerce design, fashion online store, designer brand website, apparel branding agency',
    subtitle: 'Web design for fashion brands',
    accent: 'Fashion Brands',
    target: 'fashion brands',
    hero: 'A fashion brand lives on seasons, launches, and the excitement of a drop’s first day. If your store looks like any template, your clothes lose the personality they have in your photos, and if the size guide is not convincing, the cart is abandoned. We design stores with your brand’s identity that make buying on a phone effortless.',
    intro:
      'We design websites for clothing brands, independent designers, footwear, accessories, swimwear, and sustainable fashion labels.',
    items: [
      {
        title: 'Collections and drops',
        description:
          'Collection and launch pages for every season; countdowns, waitlists, and a panel to publish them are custom builds.',
        bullets: ['Collection pages', 'Lookbooks'],
        custom: ['Launches and waitlists'],
      },
      {
        title: 'Sizing without doubts',
        description:
          'Size guides by garment, model measurements, and fit notes, to reduce returns and abandoned carts.',
        bullets: ['Size guide by garment', 'Fit and model measurements', 'Clear exchange policy'],
      },
      {
        title: 'Mobile shopping',
        description:
          'A custom online store built for buying from Instagram or TikTok on a phone, with simple payments and clear shipping.',
        bullets: [],
        custom: ['Mobile-first store', 'Installments if you offer them', 'Social integration'],
      },
      {
        title: 'A brand with a story',
        description:
          'Identity, labels, packaging, and the story of your workshop or materials, so your brand is worth more than the garment.',
        bullets: ['Identity and guidelines', 'Labels and packaging', 'Story and process'],
      },
    ],
    diagnosis: 'A call to learn about your brand, your collections, and where you sell today.',
    pages: 'collections, launches, lookbook, size guide, the brand, stockists, and returns',
    costQuestion: 'How much does a fashion brand online store cost?',
    costScope:
      'how many products and collections, whether it builds on your current store platform or a new one, and whether you also need a brand or packaging',
    faqs: [
      {
        question: 'Can you design on our current store platform?',
        answer:
          'In most cases, yes, as custom development. We review your platform and design a custom store on it, or plan a migration if it no longer works for you.',
      },
      {
        question: 'How do we reduce size-related returns?',
        answer:
          'With a size guide per garment, model measurements, fit descriptions, and photos that show how the fabric falls. It is information design, and it shows in your return rate.',
      },
      {
        question: 'Can you produce lookbooks?',
        answer:
          'We help with art direction and selection and coordinate with your photographer. The shoot can be included in the scope if you need it.',
      },
    ],
    aiSubject: 'my brand',
    remoteWho: 'fashion brands',
    proofText:
      'Real identity and website work in brand design, consumer products, and recreation. It is the care we would bring to your brand.',
    howTo: 'a fashion brand online store',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what you design and how you sell today. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We make linen clothing in Oaxaca and want to sell in Mexico and the US.',
    },
  },
});
