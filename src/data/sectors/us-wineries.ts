import { defineSector } from './build';

/**
 * Viñedos y bodegas (EE. UU.) — "winery website design". Ángulo: venta directa
 * (club de vinos, tienda, catas) en Napa, Sonoma, Paso Robles, Willamette y
 * Texas Hill Country; la marca y el lugar venden la botella.
 */
export const usWineries = defineSector({
  id: 'us-wineries',
  country: 'US',
  publishAt: '2026-10-23T00:00:00-06:00',
  slug: { es: 'para-vinedos-y-bodegas', en: 'for-wineries' },
  name: { es: 'Viñedos y bodegas', en: 'Wineries' },
  proof: ['fruitAcademy', 'elRollo', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Viñedos y Bodegas de Vino',
    seoDescription:
      'Diseño web para viñedos y bodegas en EE. UU.: club de vinos, tienda y reservas de catas a la medida, y una marca que cuenta la historia de tu vino.',
    keywords:
      'diseño web para viñedos, sitio web bodega de vino, página web club de vinos, tienda en línea de vino, diseño web Napa',
    subtitle: 'Diseño web para viñedos y bodegas',
    accent: 'Viñedos y Bodegas',
    target: 'viñedos y bodegas',
    hero: 'Tu mejor cliente es el que se une al club de vinos y compra cada temporada, y esa decisión empieza en tu sitio. Si se ve igual que el de cualquier bodega, el vino se vuelve una etiqueta más. Diseñamos sitios que transmiten tu tierra y tu historia, y facilitan catas, compras y membresías.',
    intro:
      'Diseñamos páginas web para viñedos, bodegas boutique y marcas de vino en regiones como Napa, Sonoma, Paso Robles, Willamette Valley y Texas Hill Country.',
    items: [
      {
        title: 'Club de vinos',
        description:
          'Presentamos tus niveles de membresía y sus beneficios para que unirse sea una decisión fácil y emocionante.',
        bullets: ['Niveles y beneficios'],
        custom: ['Registro en línea', 'Conexión con tu plataforma de club'],
      },
      {
        title: 'Tienda en línea',
        description:
          'Fichas de vino con notas de cata, maridajes y ficha técnica, conectadas a la medida con tu plataforma de venta directa.',
        bullets: ['Fichas con notas de cata', 'Maridajes'],
        custom: ['Conexión con tu plataforma de venta'],
      },
      {
        title: 'Catas y visitas',
        description:
          'Experiencias, recorridos y eventos con reservas en línea a la medida, para que la visita se convierta en compra.',
        bullets: ['Experiencias de cata', 'Eventos privados'],
        custom: ['Reservas en línea'],
      },
      {
        title: 'Marca con origen',
        description:
          'Identidad y etiquetas que cuentan tu terroir y tu historia de forma consistente en botella, sitio y bodega.',
        bullets: ['Identidad y manual', 'Diseño de etiquetas según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu bodega, tus vinos y cómo vendes hoy.',
    pages: 'vinos, club, catas y visitas, historia, eventos, tienda y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un viñedo o bodega?',
    costScope:
      'cuántos vinos, si se conecta a tu plataforma de club y tienda, si incluye reservas de catas y si también necesitas marca o etiquetas',
    faqs: [
      {
        question: '¿Funciona con mi plataforma de club y tienda?',
        answer:
          'En la mayoría de los casos sí, como desarrollo a la medida. Revisamos cuál usas en la llamada y diseñamos el sitio alrededor de ella para que comprar y unirse al club se sienta parte de tu marca.',
      },
      {
        question: '¿También diseñan etiquetas?',
        answer: 'Sí, se puede incluir en el alcance junto con la identidad de la bodega.',
      },
    ],
    aiSubject: 'mi bodega',
    remoteWho: 'viñedos y bodegas',
    proofText:
      'Proyectos reales de identidad y sitios web en agroindustria y alimentos, turismo y diseño de marca. Es el estándar con el que trabajaríamos tu bodega.',
    howTo: 'el sitio web de un viñedo o bodega',
    lead: {
      heading: 'Hablemos de tu bodega',
      description:
        'Cuéntanos sobre tus vinos y cómo vendes hoy. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una bodega boutique en Sonoma y queremos que crezca nuestro club de vinos.',
    },
  },
  en: {
    seoTitle: 'Winery Website Design',
    seoDescription:
      'Websites for wineries and vineyards in the US: wine club, custom online store and tasting reservations, and a brand that tells the story of your wine.',
    keywords:
      'winery website design, vineyard website design, wine club website, winery web design agency, wine ecommerce website',
    subtitle: 'Web design for wineries',
    accent: 'Wineries',
    target: 'wineries',
    hero: 'Your best customer is the one who joins the wine club and buys every season, and that decision starts on your website. If it looks like every other winery’s, your wine becomes just another label. We design websites that convey your land and your story and make tastings, purchases, and memberships easy.',
    intro:
      'We design websites for wineries, boutique vineyards, and wine brands in regions like Napa, Sonoma, Paso Robles, Willamette Valley, and Texas Hill Country.',
    items: [
      {
        title: 'Wine club',
        description:
          'We present your membership tiers and perks so joining is an easy, exciting decision.',
        bullets: ['Tiers and perks'],
        custom: ['Online sign-up', 'Connection to your club platform'],
      },
      {
        title: 'Online store',
        description:
          'Wine pages with tasting notes, pairings, and tech sheets, custom-connected to your direct-to-consumer platform.',
        bullets: ['Pages with tasting notes', 'Pairings'],
        custom: ['Connection to your sales platform'],
      },
      {
        title: 'Tastings and visits',
        description:
          'Experiences, tours, and events with custom online reservations, so a visit turns into a purchase.',
        bullets: ['Tasting experiences', 'Private events'],
        custom: ['Online reservations'],
      },
      {
        title: 'A brand with origin',
        description:
          'Identity and labels that tell your terroir and story consistently on the bottle, the site, and at the winery.',
        bullets: ['Identity and guidelines', 'Label design based on scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your winery, your wines, and how you sell today.',
    pages: 'wines, club, tastings and visits, story, events, shop, and contact',
    costQuestion: 'How much does a winery website cost?',
    costScope:
      'how many wines, whether it connects to your club and store platform, whether it includes tasting reservations, and whether you also need a brand or labels',
    faqs: [
      {
        question: 'Does it work with my club and store platform?',
        answer:
          'In most cases, yes, as custom development. We review which one you use on the call and design the site around it so buying and joining feel like part of your brand.',
      },
      {
        question: 'Do you design labels too?',
        answer: 'Yes, it can be included in the scope along with the winery’s identity.',
      },
    ],
    aiSubject: 'my winery',
    remoteWho: 'wineries',
    proofText:
      'Real identity and website work in agribusiness and food, tourism, and brand design. It is the standard we would bring to your winery.',
    howTo: 'a winery website',
    lead: {
      heading: 'Let’s talk about your winery',
      description:
        'Tell us about your wines and how you sell today. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a boutique winery in Sonoma and want to grow our wine club.',
    },
  },
});
