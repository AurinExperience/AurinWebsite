import { defineSector } from './build';

/**
 * Marcas de alimentos y bebidas — "página web para marca de alimentos".
 * Ángulo: lanzan productos y líneas seguido; el sitio presenta cada producto
 * (ingredientes, información nutrimental, recetas), dice dónde comprarlo y
 * atiende a compradores de cadenas y distribuidores.
 */
export const alimentosBebidas = defineSector({
  id: 'alimentos-bebidas',
  publishAt: '2026-10-28T00:00:00-06:00',
  slug: { es: 'para-marcas-de-alimentos-y-bebidas', en: 'for-food-and-beverage-brands' },
  name: { es: 'Marcas de alimentos y bebidas', en: 'Food and beverage brands' },
  proof: ['fruitAcademy', 'ideograma', 'pfi'],
  es: {
    seoTitle: 'Diseño Web y Branding para Marcas de Alimentos y Bebidas',
    seoDescription:
      'Sitios para marcas de alimentos y bebidas: una página por producto, información nutrimental, recetas, dónde comprar y sección para distribuidores.',
    keywords:
      'diseño web para marcas de alimentos, página web marca de bebidas, sitio web producto alimenticio, branding alimentos, página web lanzamiento de producto',
    subtitle: 'Diseño web para marcas de alimentos y bebidas',
    accent: 'Alimentos y Bebidas',
    target: 'marcas de alimentos y bebidas',
    hero: 'Cada lanzamiento compite por un lugar en el anaquel y por un segundo de atención en el celular. Cuando alguien ve tu producto en una tienda o en redes y lo busca, tu sitio decide si lo compra, si lo recomienda o si una cadena te da el espacio. Diseñamos sitios que hacen antojable cada producto y que crecen contigo en cada lanzamiento.',
    intro:
      'Diseñamos páginas web para marcas de snacks, lácteos, bebidas, café, salsas, panadería y productos gourmet, desde la marca que lanza su primer producto hasta la que maneja varias líneas.',
    items: [
      {
        title: 'Una página por producto',
        description:
          'Fotografía que abre el apetito, ingredientes, información nutrimental, presentaciones y sellos, en fichas que crecen con cada lanzamiento.',
        bullets: ['Fichas de producto', 'Información nutrimental y sellos', 'Presentaciones y empaque'],
      },
      {
        title: 'Recetas y contenido',
        description:
          'Recetas, maridajes y usos del producto que dan razones para comprarlo más seguido y que Google y las búsquedas con IA pueden encontrar.',
        bullets: ['Recetas con datos estructurados', 'Ideas de uso', 'Contenido por temporada'],
      },
      {
        title: 'Dónde comprar',
        description:
          'Tiendas, cadenas y tiendas en línea donde está tu producto, con enlaces directos a cada una o, a la medida, un localizador.',
        bullets: ['Enlaces a marketplaces'],
        custom: ['Localizador de tiendas', 'Tienda propia'],
      },
      {
        title: 'Compradores y distribuidores',
        description:
          'Una sección para cadenas, distribuidores y food service con fichas técnicas, capacidad de producción y formulario comercial.',
        bullets: ['Fichas técnicas descargables', 'Certificaciones', 'Formulario para distribuidores'],
      },
    ],
    diagnosis: 'Una llamada para conocer tus productos, tus canales de venta y lo que viene en tus lanzamientos.',
    pages: 'productos, recetas, dónde comprar, la marca, distribuidores y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una marca de alimentos o bebidas?',
    costScope:
      'cuántos productos y líneas, si incluye tienda en línea o localizador de tiendas y si también necesitas marca o empaque',
    faqs: [
      {
        question: '¿Podemos agregar productos nuevos sin pagar cada vez?',
        answer:
          'Sí, con un panel a la medida para que tu equipo cree la ficha de cada lanzamiento con sus fotos, ingredientes y presentaciones sin tocar código. Se define en la cotización.',
      },
      {
        question: '¿Diseñan también el empaque?',
        answer:
          'Sí, se puede incluir en el alcance junto con la identidad de la marca, para que el empaque, el sitio y las redes se vean igual.',
      },
      {
        question: '¿El sitio puede vender directamente?',
        answer:
          'Sí, con una tienda en línea a la medida, si tu producto se puede enviar. Si vendes sobre todo en cadenas o marketplaces, el sitio dirige a ellas para no competir con tus propios canales.',
      },
    ],
    aiSubject: 'mi marca',
    remoteWho: 'marcas de alimentos y bebidas',
    proofText:
      'Proyectos reales de sitios web e identidad en agroindustria y alimentos, diseño de marca y productos de consumo. Es el cuidado que pondríamos en tu marca.',
    howTo: 'el sitio web de una marca de alimentos o bebidas',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué productos tienes y dónde se venden. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Lanzamos una línea de bebidas de café y queremos sitio y localizador de tiendas.',
    },
  },
  en: {
    seoTitle: 'Web Design and Branding for Food and Beverage Brands',
    seoDescription:
      'Websites for food and beverage brands: a page per product, ingredients, nutrition facts, recipes, where to buy, and a section for retailers.',
    keywords:
      'food brand website design, beverage brand website, CPG website design, food product website, food branding agency',
    subtitle: 'Web design for food and beverage brands',
    accent: 'Food & Beverage',
    target: 'food and beverage brands',
    hero: 'Every launch competes for shelf space and for a second of attention on a phone. When someone spots your product in a store or on social media and looks it up, your website decides whether they buy it, recommend it, or whether a retailer gives you the slot. We design websites that make every product irresistible and grow with you at every launch.',
    intro:
      'We design websites for snack, dairy, beverage, coffee, sauce, bakery, and gourmet brands, from a first product launch to brands managing several lines.',
    items: [
      {
        title: 'A page per product',
        description:
          'Mouth-watering photography, ingredients, nutrition facts, formats, and certifications, in product pages that grow with every launch.',
        bullets: ['Product pages', 'Nutrition facts and certifications', 'Formats and packaging'],
      },
      {
        title: 'Recipes and content',
        description:
          'Recipes, pairings, and usage ideas that give people reasons to buy more often, and that Google and AI search can find.',
        bullets: ['Recipes with structured data', 'Usage ideas', 'Seasonal content'],
      },
      {
        title: 'Where to buy',
        description:
          'The stores, chains, and online shops that carry your product, with direct links to each or, as a custom build, a store locator.',
        bullets: ['Marketplace links'],
        custom: ['Store locator', 'Own online store'],
      },
      {
        title: 'Retail and distribution',
        description:
          'A trade section for retailers, distributors, and food service with spec sheets, production capacity, and a sales inquiry form.',
        bullets: ['Downloadable spec sheets', 'Certifications', 'Distributor form'],
      },
    ],
    diagnosis: 'A call to learn about your products, your sales channels, and what is coming in your launches.',
    pages: 'products, recipes, where to buy, the brand, trade, and contact',
    costQuestion: 'How much does a food or beverage brand website cost?',
    costScope:
      'how many products and lines, whether it includes an online store or store locator, and whether you also need a brand or packaging',
    faqs: [
      {
        question: 'Can we add new products without paying every time?',
        answer:
          'Yes, with a custom panel so your team can create each launch’s page with photos, ingredients, and formats without touching code. It is defined in the quote.',
      },
      {
        question: 'Do you also design packaging?',
        answer:
          'Yes, it can be included in the scope along with the brand identity, so packaging, website, and social media look the same.',
      },
      {
        question: 'Can the site sell directly?',
        answer:
          'Yes, with a custom online store, if your product can be shipped. If you sell mostly through retailers or marketplaces, the site points to them so it does not compete with your own channels.',
      },
    ],
    aiSubject: 'my brand',
    remoteWho: 'food and beverage brands',
    proofText:
      'Real website and identity work in agribusiness and food, brand design, and consumer products. It is the care we would bring to your brand.',
    howTo: 'a food or beverage brand website',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what products you have and where they are sold. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are launching a line of coffee drinks and need a website and store locator.',
    },
  },
});
