import { defineSector } from './build';

/**
 * Tequileras y mezcaleras — "diseño web para marcas de tequila / mezcal".
 * Ángulo: la botella compite en anaquel, en barra y en Instagram; el sitio
 * cuenta origen y proceso, abre puertas con importadores y distribuidores
 * (sobre todo en EE. UU.) y cumple con la verificación de edad.
 */
export const tequileras = defineSector({
  id: 'tequileras',
  publishAt: '2026-10-26T00:00:00-06:00',
  slug: { es: 'para-tequileras-y-mezcaleras', en: 'for-tequila-and-mezcal-brands' },
  name: { es: 'Tequileras y mezcaleras', en: 'Tequila and mezcal brands' },
  proof: ['fruitAcademy', 'ideograma', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web y Branding para Tequileras y Mezcaleras',
    seoDescription:
      'Sitios y marcas para tequileras y mezcaleras: origen, proceso, expresiones, cócteles, dónde comprar y una sección para importadores.',
    keywords:
      'diseño web para tequileras, página web marca de tequila, sitio web mezcal, branding tequila, diseño de marca de mezcal',
    subtitle: 'Diseño web y branding para tequileras y mezcaleras',
    accent: 'Tequileras y Mezcaleras',
    target: 'tequileras y mezcaleras',
    hero: 'Hay cientos de tequilas y mezcales en el anaquel, y el cliente elige por la historia que cree que hay detrás de la botella. Esa historia la busca en tu sitio antes de pedirla en la barra o de que un importador te conteste el correo. Diseñamos sitios y marcas que cuentan tu agave, tu proceso y tu familia con la personalidad de tu destilado.',
    intro:
      'Diseñamos páginas web para casas tequileras, palenques y marcas de mezcal, raicilla y sotol, desde la marca nueva que busca su primer distribuidor hasta la casa con varias expresiones.',
    items: [
      {
        title: 'Origen y proceso',
        description:
          'El agave, la región, la cocción, la destilación y el reposo contados con fotografía y video, para que el precio de tu botella tenga sentido.',
        bullets: ['Historia de la casa', 'Proceso paso a paso', 'Maestro tequilero o mezcalero'],
      },
      {
        title: 'Expresiones y cócteles',
        description:
          'Una página por expresión con notas de cata, ficha técnica y premios, más recetas de cócteles que muestran cómo se toma.',
        bullets: ['Blanco, reposado, añejo o ensambles', 'Notas de cata y ficha técnica', 'Recetas de coctelería'],
      },
      {
        title: 'Importadores y distribuidores',
        description:
          'Una sección en inglés para compradores, importadores y bares: fichas descargables, NOM, certificaciones y un formulario que llega a tu área comercial.',
        bullets: ['Fichas técnicas descargables', 'Certificaciones y NOM', 'Formulario para distribuidores'],
      },
      {
        title: 'Marca y etiqueta',
        description:
          'Identidad, etiqueta y empaque diseñados junto con el sitio, para que la botella, la caja y la pantalla cuenten lo mismo.',
        bullets: ['Logo e identidad con manual', 'Etiqueta y empaque según el alcance'],
        custom: ['Verificación de edad'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu destilado, tus expresiones y en qué mercados quieres vender.',
    pages: 'la casa, proceso, expresiones, cócteles, dónde comprar, distribuidores y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una marca de tequila o mezcal?',
    costScope:
      'cuántas expresiones, si incluye tienda en línea y si también necesitas marca, etiqueta o empaque',
    faqs: [
      {
        question: '¿Pueden vender tequila o mezcal en línea desde el sitio?',
        answer:
          'En México sí, con una tienda a la medida, verificación de edad y una paquetería que acepte bebidas alcohólicas. Para Estados Unidos la venta directa depende de tu importador y de cada estado, así que normalmente el sitio dirige a sus tiendas aliadas.',
      },
      {
        question: '¿Diseñan también la etiqueta y la botella?',
        answer:
          'Diseñamos la etiqueta, la caja y la identidad de la marca. La forma de la botella la trabajamos con tu proveedor de vidrio a partir de los catálogos que maneje.',
      },
      {
        question: '¿El sitio sirve para presentarnos con importadores en Estados Unidos?',
        answer:
          'Sí, es una de sus funciones principales. Preparamos la versión en inglés con lo que un importador revisa primero: categoría, NOM, producción, presentaciones y fichas para descargar.',
      },
    ],
    aiSubject: 'mi marca de tequila',
    remoteWho: 'tequileras y mezcaleras',
    proofText:
      'Proyectos reales de identidad y sitios web en agroindustria y alimentos, turismo y diseño de marca. Es el cuidado que pondríamos en tu destilado.',
    howTo: 'el sitio web de una marca de tequila o mezcal',
    lead: {
      heading: 'Hablemos de tu destilado',
      description:
        'Cuéntanos qué expresiones tienes y en qué mercados quieres vender. Te contactaremos para conocer tu marca y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un palenque en Oaxaca y queremos marca y sitio para buscar importador en Estados Unidos.',
    },
  },
  en: {
    seoTitle: 'Web Design and Branding for Tequila and Mezcal Brands',
    seoDescription:
      'Websites and brands for tequila and mezcal producers: origin, process, expressions, cocktails, where to buy, and a section for importers.',
    keywords:
      'tequila brand website design, mezcal website design, tequila branding agency, mezcal brand design, spirits website Mexico',
    subtitle: 'Web design and branding for tequila and mezcal brands',
    accent: 'Tequila & Mezcal',
    target: 'tequila and mezcal brands',
    hero: 'There are hundreds of tequilas and mezcals on the shelf, and people choose the story they believe is behind the bottle. They look for that story on your website before ordering it at the bar, and so does the importer deciding whether to answer your email. We design websites and brands that tell your agave, your process, and your family with the personality of your spirit.',
    intro:
      'We design websites for tequila houses, palenques, and mezcal, raicilla, and sotol brands, from a new label looking for its first distributor to an established house with several expressions.',
    items: [
      {
        title: 'Origin and process',
        description:
          'Agave, region, cooking, distillation, and aging told through photography and video, so the price of your bottle makes sense.',
        bullets: ['The house’s story', 'Step-by-step process', 'Master distiller'],
      },
      {
        title: 'Expressions and cocktails',
        description:
          'A page for each expression with tasting notes, tech sheet, and awards, plus cocktail recipes that show how to drink it.',
        bullets: ['Blanco, reposado, añejo, or ensambles', 'Tasting notes and tech sheets', 'Cocktail recipes'],
      },
      {
        title: 'Importers and distributors',
        description:
          'A trade section for buyers, importers, and bars: downloadable sheets, NOM and certifications, and a form that reaches your sales team.',
        bullets: ['Downloadable tech sheets', 'NOM and certifications', 'Distributor inquiry form'],
      },
      {
        title: 'Brand and label',
        description:
          'Identity, label, and packaging designed together with the site, so the bottle, the box, and the screen tell the same story.',
        bullets: ['Logo and identity with guidelines', 'Label and packaging based on scope'],
        custom: ['Age verification'],
      },
    ],
    diagnosis: 'A call to learn about your spirit, your expressions, and the markets you want to sell in.',
    pages: 'the house, process, expressions, cocktails, where to buy, trade, and contact',
    costQuestion: 'How much does a tequila or mezcal brand website cost?',
    costScope:
      'how many expressions, whether it includes an online store, and whether you also need a brand, label, or packaging',
    faqs: [
      {
        question: 'Can we sell tequila or mezcal online from the site?',
        answer:
          'In Mexico, yes, with a custom store, age verification, and a carrier that accepts alcohol. In the US, direct sales depend on your importer and on each state, so the site usually points to partner retailers.',
      },
      {
        question: 'Do you also design the label and bottle?',
        answer:
          'We design the label, the box, and the brand identity. The bottle shape we develop with your glass supplier based on the molds they offer.',
      },
      {
        question: 'Will the site help us approach US importers?',
        answer:
          'Yes, that is one of its main jobs. We prepare the English version with what an importer checks first: category, NOM, production, formats, and downloadable sheets.',
      },
    ],
    aiSubject: 'my tequila brand',
    remoteWho: 'tequila and mezcal brands',
    proofText:
      'Real identity and website work in agribusiness and food, tourism, and brand design. It is the care we would bring to your spirit.',
    howTo: 'a tequila or mezcal brand website',
    lead: {
      heading: 'Let’s talk about your spirit',
      description:
        'Tell us which expressions you have and which markets you want to sell in. We will reach out to learn about your brand and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a palenque in Oaxaca and need a brand and website to find a US importer.',
    },
  },
});
