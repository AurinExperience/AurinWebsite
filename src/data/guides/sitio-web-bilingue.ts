import type { Guide } from './types';

/**
 * Guía 4 — "sitio web bilingüe".
 *
 * Da soporte a las tres landings donde el bilingüismo es argumento central,
 * cada una por una razón distinta: matriz extranjera (Querétaro), viajero
 * internacional (Quintana Roo) y cliente estadounidense (Baja California).
 */
export const sitioWebBilingue: Guide = {
  id: 'sitio-web-bilingue',
  status: 'live',
  slug: {
    es: 'sitio-web-bilingue-espanol-ingles',
    en: 'bilingual-website-spanish-english',
  },
  published: '2026-08-18',
  updated: '2026-08-18',
  relatedLandings: ['queretaro', 'quintana-roo', 'baja-california'],
  copy: {
    es: {
      seo: {
        title: 'Sitio web bilingüe español e inglés: cómo hacerlo | Aurin',
        description:
          'Por qué traducir no es localizar, cómo funcionan las etiquetas hreflang y qué estructura de URLs conviene para que Google muestre el idioma correcto.',
        keywords:
          'sitio web bilingüe, página web en dos idiomas, hreflang, traducir sitio web, sitio web español inglés, SEO multilingüe',
      },
      title: 'Sitio web bilingüe: cómo hacerlo bien',
      excerpt:
        'Traducir los textos es la parte fácil y la que menos sirve. Esto es lo que realmente decide si tu versión en inglés funciona o solo existe.',
      intro: [
        'Muchas empresas mexicanas necesitan un sitio en dos idiomas: las que venden a una matriz extranjera, las que reciben turismo internacional y las que le venden directamente al mercado estadounidense. Casi todas lo resuelven igual: contratan una traducción y la pegan encima del sitio existente.',
        'El resultado suele ser un sitio en inglés que nadie encuentra y que, cuando lo encuentran, no convence. No porque la traducción sea mala, sino porque traducir resuelve el idioma y no resuelve ni la búsqueda ni los argumentos. Esta guía explica la diferencia y lo que hay que construir.',
      ],
      sections: [
        {
          heading: 'Traducir no es localizar',
          paragraphs: [
            'Un traductor cambia las palabras conservando el significado. Eso está bien para un documento y es insuficiente para un sitio comercial, porque tu audiencia en inglés no tiene las mismas dudas que tu audiencia en español.',
            'Un ejemplo concreto: un cliente mexicano que entra a tu sitio ya sabe cómo funciona una factura, qué es el IVA y cómo se hace una transferencia. Un cliente estadounidense necesita saber cómo se paga desde su país, en qué moneda, si hay contrato, quién responde si algo sale mal y cómo funciona el proceso a distancia. Nada de eso aparece traduciendo el sitio en español, porque no estaba ahí para empezar.',
            'Localizar significa escribir la versión en inglés desde las preguntas de esa audiencia. A veces coincide en un 80% con la versión en español. A veces son secciones distintas.',
          ],
        },
        {
          heading: 'La estructura de URLs: tres opciones y una recomendada',
          paragraphs: [
            'Cada idioma necesita su propia dirección. Que el contenido cambie con un botón sin que cambie la URL es la forma más rápida de que Google nunca indexe tu versión en inglés, porque para él existe una sola página.',
          ],
          bullets: [
            'Subcarpeta (`tusitio.com/en/`). Es la opción recomendada para la mayoría: hereda la autoridad del dominio principal, es barata de mantener y es fácil de configurar.',
            'Subdominio (`en.tusitio.com`). Funciona, pero Google lo trata como un sitio parcialmente independiente, así que arrancas construyendo autoridad casi desde cero.',
            'Dominio propio por país (`tusitio.com.mx` y `tusitio.com`). Solo tiene sentido si vas a operar como dos negocios distintos, con contenido y estrategia separados. Para casi todos es más trabajo del que vale.',
          ],
        },
        {
          heading: 'Hreflang: qué es y por qué se rompe tanto',
          paragraphs: [
            'Las etiquetas hreflang le dicen a Google “esta página tiene una versión equivalente en este otro idioma, aquí está”. Sin ellas Google puede mostrarle la versión en español a alguien que busca en inglés, o tratar las dos versiones como contenido duplicado.',
            'La regla que más se incumple es la reciprocidad: si la página en español apunta a la de inglés, la de inglés tiene que apuntar de vuelta a la de español. Si el enlace va en una sola dirección, Google ignora la declaración completa. Conviene también declarar un `x-default` que indique a qué versión mandar a quien no coincide con ningún idioma listado.',
            'Y una advertencia práctica: los hreflang tienen que apuntar a URLs que existan y que respondan 200. Un hreflang que apunta a una página que ya no existe invalida el conjunto y es un error silencioso que puede pasar meses sin que nadie lo note.',
          ],
        },
        {
          heading: 'El detalle que más molesta al visitante',
          paragraphs: [
            'La redirección automática por ubicación. Es tentadora y es una mala idea: un mexicano que quiere leer en inglés no puede, un estadounidense usando una VPN termina en español, y el rastreador de Google —que casi siempre llega desde Estados Unidos— puede quedar atrapado viendo una sola versión.',
            'Lo correcto es detectar el idioma del navegador para sugerir, no para forzar: mostrar un aviso discreto ofreciendo la otra versión y dejar que la persona decida. El selector de idioma, además, debe llevar a la página equivalente y no a la portada. Mandar siempre al inicio es una de las frustraciones más comunes de los sitios bilingües.',
          ],
        },
        {
          heading: 'El costo real de mantenerlo',
          paragraphs: [
            'Un sitio bilingüe no cuesta el doble en desarrollo; cuesta cerca del doble en contenido, y ese costo no termina el día del lanzamiento. Cada nota, cada servicio nuevo y cada cambio de precio hay que publicarlo dos veces, para siempre.',
            'Por eso vale la pena decidir el alcance con honestidad antes de empezar. Si tu cliente internacional solo necesita entender qué haces y cómo contactarte, una versión en inglés de cinco secciones bien hechas rinde más que un espejo completo del sitio que se va a desactualizar en seis meses. Y si no le vendes a nadie fuera de México, no lo hagas: es trabajo permanente a cambio de nada.',
          ],
        },
      ],
      cta: {
        heading: '¿Tu sitio necesita funcionar en dos idiomas?',
        text: 'Diseñamos la arquitectura en español e inglés desde el inicio, con hreflang correcto y contenido escrito para cada audiencia, no traducido.',
        label: 'Cuéntanos tu proyecto',
      },
      linkLabel: 'Cómo hacer bien un sitio web bilingüe',
      breadcrumb: 'Sitio web bilingüe',
    },
    en: {
      seo: {
        title: 'Bilingual website: Spanish and English done right | Aurin',
        description:
          'Why translating a site is not the same as localizing it, how hreflang tags work, and which URL structure makes Google serve the right language.',
        keywords:
          'bilingual website, two-language website, hreflang, translate website, Spanish English website, multilingual SEO',
      },
      title: 'Bilingual website: how to do it right',
      excerpt:
        'Translating the copy is the easy part and the least useful. Here is what actually decides whether your English version works or merely exists.',
      intro: [
        'Many Mexican companies need a site in two languages: those selling to a foreign parent company, those receiving international tourism, and those selling directly into the United States market. Almost all of them solve it the same way: they commission a translation and paste it over the existing site.',
        'The result is usually an English site nobody finds and that, when found, does not convince. Not because the translation is bad, but because translating solves the language and solves neither the search nor the arguments. This guide explains the difference and what has to be built.',
      ],
      sections: [
        {
          heading: 'Translating is not localizing',
          paragraphs: [
            'A translator changes the words while preserving meaning. That is fine for a document and insufficient for a commercial site, because your English-speaking audience does not have the same questions as your Spanish-speaking one.',
            'A concrete example: a Mexican client landing on your site already knows how invoicing works, what VAT is, and how a transfer is made. An American client needs to know how to pay from their country, in what currency, whether there is a contract, who is accountable if something goes wrong, and how the process works remotely. None of that appears by translating the Spanish site, because it was not there to begin with.',
            'Localizing means writing the English version from that audience’s questions. Sometimes it overlaps 80% with the Spanish version. Sometimes they are different sections entirely.',
          ],
        },
        {
          heading: 'URL structure: three options and one recommendation',
          paragraphs: [
            'Each language needs its own address. Content that swaps with a button while the URL stays the same is the fastest way for Google never to index your English version, because as far as it is concerned there is one page.',
          ],
          bullets: [
            'Subfolder (`yoursite.com/en/`). The recommended option for most: it inherits the main domain’s authority, is cheap to maintain, and is easy to configure.',
            'Subdomain (`en.yoursite.com`). It works, but Google treats it as a partially independent site, so you start building authority nearly from zero.',
            'Country-specific domains (`yoursite.com.mx` and `yoursite.com`). Only makes sense if you will operate as two separate businesses, with separate content and strategy. For almost everyone it is more work than it is worth.',
          ],
        },
        {
          heading: 'Hreflang: what it is and why it breaks so often',
          paragraphs: [
            'Hreflang tags tell Google “this page has an equivalent version in this other language, here it is”. Without them Google may show the Spanish version to someone searching in English, or treat both versions as duplicate content.',
            'The rule most often broken is reciprocity: if the Spanish page points to the English one, the English one has to point back. If the link goes one way only, Google ignores the whole declaration. It is also worth declaring an `x-default` indicating which version to serve anyone who matches none of the listed languages.',
            'And a practical warning: hreflang tags have to point at URLs that exist and return 200. A hreflang pointing at a page that no longer exists invalidates the set, and it is a silent error that can sit unnoticed for months.',
          ],
        },
        {
          heading: 'The detail that annoys visitors most',
          paragraphs: [
            'Automatic redirection by location. It is tempting and it is a bad idea: a Mexican who wants to read in English cannot, an American on a VPN ends up in Spanish, and Google’s crawler —which almost always arrives from the United States— can get stuck seeing only one version.',
            'The right approach is detecting browser language to suggest, not to force: show a discreet notice offering the other version and let the person decide. The language switcher should also lead to the equivalent page rather than the homepage. Always dumping people at the home page is one of the most common frustrations of bilingual sites.',
          ],
        },
        {
          heading: 'The real cost of maintaining it',
          paragraphs: [
            'A bilingual site does not cost double in development; it costs roughly double in content, and that cost does not end on launch day. Every post, every new service, and every price change has to be published twice, forever.',
            'So it is worth deciding scope honestly before starting. If your international client only needs to understand what you do and how to reach you, a five-section English version done well outperforms a full mirror of the site that will be out of date in six months. And if you sell to nobody outside Mexico, do not do it: it is permanent work in exchange for nothing.',
          ],
        },
      ],
      cta: {
        heading: 'Does your site need to work in two languages?',
        text: 'We design the Spanish and English architecture from the start, with correct hreflang and content written for each audience rather than translated.',
        label: 'Tell us about your project',
      },
      linkLabel: 'How to build a bilingual website properly',
      breadcrumb: 'Bilingual website',
    },
  },
};
