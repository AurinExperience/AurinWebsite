import type { Guide } from './types';

/**
 * "Shopify, WooCommerce o PrestaShop": quien todavía está comparando, antes de
 * buscar quién le haga la tienda. Empuja a las tres landings de e-commerce.
 *
 * Sin cifras de planes ni de comisiones: cambian por plan y por país, y las
 * fuentes no coinciden sobre Shopify Payments en México (revisado 2026-11-04).
 * No ofrecer facturación CFDI, conexión con inventario o ERP, guías con
 * paqueterías, carga masiva desde Excel, cotización en línea ni meses sin intereses.
 */
export const shopifyWoocommercePrestashop: Guide = {
  id: 'shopify-woocommerce-prestashop',
  status: 'live',
  authors: ['elias-aquique'],
  slug: {
    es: 'shopify-woocommerce-o-prestashop-cual-elegir',
    en: 'shopify-vs-woocommerce-vs-prestashop-which-to-choose',
  },
  published: '2026-11-04',
  updated: '2026-11-04',
  relatedLandings: ['cdmx', 'monterrey', 'jalisco'],
  relatedSectors: ['ecommerce-shopify', 'ecommerce-woocommerce', 'ecommerce-prestashop', 'moda', 'suplementos'],
  copy: {
    es: {
      seo: {
        title: 'Shopify, WooCommerce o PrestaShop: ¿cuál elegir en 2027?',
        description:
          'Costos, mantenimiento, control y catálogo: compara Shopify, WooCommerce y PrestaShop y descubre cuál le conviene a tu tienda en línea antes de invertir.',
        keywords:
          'shopify o woocommerce, shopify vs woocommerce vs prestashop, mejor plataforma para tienda en línea, woocommerce o prestashop, plataforma ecommerce méxico',
      },
      title: 'Shopify, WooCommerce o PrestaShop: cuál le conviene a tu tienda',
      excerpt:
        'Las tres sirven para vender en línea, y elegir mal sale caro porque cambiarte después es un proyecto completo. Esta es la comparación que conviene hacer antes de pagar el primer peso.',
      intro: [
        'La respuesta corta: **Shopify** si quieres vender sin ocuparte de servidores ni actualizaciones, **WooCommerce** si ya tienes WordPress o el contenido pesa en tus ventas, y **PrestaShop** si tu fuerte es un catálogo grande con precios por tipo de cliente.',
        'Ninguna es la mejor para todos. Las tres mueven tiendas serias y cada una te cobra de una forma distinta: en mensualidad, en mantenimiento o en complejidad. Desarrollamos tiendas en las tres plataformas, así que aquí te contamos cuándo conviene cada una y qué te va a costar elegirla.',
      ],
      sections: [
        {
          heading: 'La diferencia que decide casi todo',
          paragraphs: [
            'Antes de comparar funciones, responde una pregunta: ¿quién se va a encargar de la tienda cuando algo falle a las once de la noche?',
            '**Shopify es una plataforma alojada.** Le pagas una mensualidad y ella se encarga del servidor, la seguridad y las actualizaciones. Cedes control a cambio de tranquilidad.',
            '**WooCommerce y PrestaShop viven en tu propio servidor.** Son software que instalas en un hosting que tú contratas. No le pagas mensualidad a la plataforma y tienes el código y los datos en tus manos, pero las actualizaciones, los respaldos y la seguridad corren por tu cuenta o por la de quien contrates.',
          ],
        },
        {
          heading: 'Comparación por criterio',
          paragraphs: ['Estos son los puntos que más cambian de una plataforma a otra.'],
          bullets: [
            '**Mantenimiento:** en Shopify lo resuelve la plataforma. En WooCommerce y PrestaShop alguien tiene que hacerlo.',
            '**Costo fijo:** Shopify cobra mensualidad, más las apps de pago que uses. WooCommerce y PrestaShop son gratis como software, pero pagas hosting, extensiones o módulos y mantenimiento.',
            '**Comisiones:** las tres pagan la comisión de tu pasarela. Shopify además puede cobrar una comisión propia según tu plan y tu pasarela; WooCommerce y PrestaShop no le cobran comisión de venta a tu tienda.',
            '**Control:** WooCommerce y PrestaShop te dejan modificar casi todo. En Shopify llegas hasta donde la plataforma y tu plan lo permiten, sobre todo en el proceso de pago.',
            '**Catálogo:** PrestaShop está pensado para catálogos grandes con combinaciones. Shopify y WooCommerce también manejan variantes, pero conviene revisar sus límites y su rendimiento con tu catálogo real.',
            '**Contenido:** WooCommerce lleva ventaja porque vive dentro de WordPress, con todo lo que eso da para publicar y posicionar contenido.',
            '**Operación diaria:** Shopify suele ser el panel más sencillo para un equipo sin perfil técnico. PrestaShop es el que más opciones tiene y el que más capacitación pide.',
          ],
        },
        {
          heading: 'Cuándo elegir Shopify',
          paragraphs: [
            'Conviene si vendes un catálogo manejable, tu equipo no es técnico y prefieres un costo mensual predecible a tener que cuidar un servidor. Es común en marcas de moda, belleza, alimentos y productos de consumo.',
            'Lo que hay que aceptar: pagas cada mes mientras exista la tienda, las apps se van sumando a la factura y tu tema no se puede llevar a otra plataforma si algún día te vas.',
          ],
        },
        {
          heading: 'Cuándo elegir WooCommerce',
          paragraphs: [
            'Conviene si ya tienes un sitio en WordPress, si vendes gracias a tu blog o tu contenido, o si quieres que la tienda sea tuya de verdad: tu hosting, tu código y tus datos.',
            'Lo que hay que aceptar: la libertad viene con trabajo. Si se arma a la carrera y llena de plugins, se vuelve lenta y frágil, y una actualización mal hecha puede tirar la tienda. Necesitas buen hosting y a alguien que la mantenga.',
          ],
        },
        {
          heading: 'Cuándo elegir PrestaShop',
          paragraphs: [
            'Conviene si tienes un catálogo grande, muchas combinaciones de talla, color o modelo, precios distintos por grupo de cliente, varios idiomas y monedas o más de una tienda que quieres manejar desde el mismo panel. Todo eso viene en la plataforma, que es de código abierto.',
            'Lo que hay que aceptar: es la más exigente de las tres. Los módulos de pago se van sumando, las actualizaciones grandes pueden romper módulos y temas, y en México es menos común, así que encontrar quién la mantenga cuesta más que con WooCommerce.',
          ],
        },
        {
          heading: 'Qué revisar en México antes de decidir',
          paragraphs: [
            'Según el ranking de Wmtips, WooCommerce y Shopify son las dos plataformas de tienda más usadas en México, y PrestaShop aparece en quinto lugar. Eso importa por una razón práctica: cuanto más usada es una plataforma, más fácil es encontrar proveedores y extensiones.',
            'Antes de firmar, confirma estos puntos con datos de hoy, porque cambian por país y por plan:',
          ],
          bullets: [
            'Qué pasarelas funcionan en tu país con esa plataforma, como Mercado Pago o PayPal, y cuánto cobra cada una.',
            'Si Shopify Payments está disponible para tu negocio y qué comisión aplica si usas otra pasarela. Revísalo en la página oficial de Shopify, no en un blog.',
            'Cuánto te costarían al año las apps, extensiones o módulos que de verdad vas a usar.',
            'Quién va a mantener la tienda dentro de dos años y cuánto cobra por hacerlo.',
          ],
        },
        {
          heading: 'Cuatro errores que salen caros',
          paragraphs: ['Los vemos repetirse sin importar la plataforma.'],
          bullets: [
            '**Elegir solo por la mensualidad.** Una plataforma gratis con mantenimiento caro puede costar más que una de pago, y al revés.',
            '**Instalar de más.** Cada app o plugin suma costo, peso y un punto más que puede fallar.',
            '**Pensar en la tienda de hoy.** Elige con el catálogo y los mercados que esperas tener, no solo con los que tienes.',
            '**Migrar sin redirecciones.** Cambiar de plataforma sin redirigir las URLs viejas tira lo que ya ganaste en Google.',
          ],
          cta: {
            heading: '¿Sigues sin saber cuál te conviene?',
            text: 'En una llamada revisamos lo que vendes y cómo lo vendes, y te decimos qué plataforma recomendamos para tu caso, sea la que sea. Diseñamos y desarrollamos tiendas en las tres.',
            label: 'Cotiza tu tienda',
          },
        },
      ],
      cta: {
        heading: 'Elige bien la plataforma desde el inicio',
        text: 'Un solo equipo se encarga de tu marca, el diseño, el desarrollo y el SEO. Te enviamos una cotización de alcance cerrado, desglosada por etapa, con entregables y fechas.',
        label: 'Solicita tu cotización',
      },
      linkLabel: 'Shopify, WooCommerce o PrestaShop: cuál elegir',
      breadcrumb: 'Shopify, WooCommerce o PrestaShop',
    },
    en: {
      seo: {
        title: 'Shopify vs WooCommerce vs PrestaShop: Which to Pick in 2027',
        description:
          'Costs, maintenance, control, and catalog size: compare Shopify, WooCommerce, and PrestaShop and find the right platform for your online store.',
        keywords:
          'shopify vs woocommerce, shopify vs woocommerce vs prestashop, best ecommerce platform, woocommerce vs prestashop, online store platform comparison',
      },
      title: 'Shopify, WooCommerce, or PrestaShop: which one fits your store',
      excerpt:
        'All three can run a real online store, and choosing wrong is expensive because switching later is a full project. This is the comparison worth making before you spend anything.',
      intro: [
        'The short answer: **Shopify** if you want to sell without dealing with servers or updates, **WooCommerce** if you already run WordPress or content drives your sales, and **PrestaShop** if your strength is a large catalog with pricing by customer type.',
        'None of them is best for everyone. All three run serious stores, and each one charges you differently: in monthly fees, in maintenance, or in complexity. We build stores on all three, so here is when each one fits and what choosing it will cost you.',
      ],
      sections: [
        {
          heading: 'The difference that decides almost everything',
          paragraphs: [
            'Before comparing features, answer one question: who will take care of the store when something breaks at eleven at night?',
            '**Shopify is a hosted platform.** You pay a monthly fee and it handles the server, security, and updates. You give up control in exchange for peace of mind.',
            '**WooCommerce and PrestaShop live on your own server.** They are software installed on hosting you pay for. You pay the platform no monthly fee and you hold the code and the data, but updates, backups, and security fall to you or to whoever you hire.',
          ],
        },
        {
          heading: 'Comparison by criteria',
          paragraphs: ['These are the points that change most from one platform to the next.'],
          bullets: [
            '**Maintenance:** on Shopify, the platform handles it. On WooCommerce and PrestaShop, someone has to do it.',
            '**Fixed costs:** Shopify charges a monthly fee, plus any paid apps. WooCommerce and PrestaShop are free as software, but you pay for hosting, extensions or modules, and maintenance.',
            '**Fees:** all three pay your gateway’s fee. Shopify may also charge its own fee depending on your plan and gateway; WooCommerce and PrestaShop charge your store no sales commission.',
            '**Control:** WooCommerce and PrestaShop let you change almost anything. On Shopify you go as far as the platform and your plan allow, especially in checkout.',
            '**Catalog:** PrestaShop is built for large catalogs with combinations. Shopify and WooCommerce handle variants too, but it is worth checking their limits and performance against your real catalog.',
            '**Content:** WooCommerce has the edge because it lives inside WordPress, with everything that brings for publishing and ranking content.',
            '**Daily operation:** Shopify is usually the simplest admin for a non-technical team. PrestaShop has the most options and needs the most training.',
          ],
        },
        {
          heading: 'When to choose Shopify',
          paragraphs: [
            'It fits if you sell a manageable catalog, your team is not technical, and you prefer a predictable monthly cost to looking after a server. It is common among fashion, beauty, food, and consumer product brands.',
            'What you have to accept: you pay every month for as long as the store exists, apps add up on the bill, and your theme cannot move to another platform if you ever leave.',
          ],
        },
        {
          heading: 'When to choose WooCommerce',
          paragraphs: [
            'It fits if you already have a WordPress site, if you sell through your blog or content, or if you want the store to be truly yours: your hosting, your code, and your data.',
            'What you have to accept: freedom comes with work. Rushed and full of plugins, it gets slow and fragile, and a bad update can take the store down. You need good hosting and someone to maintain it.',
          ],
        },
        {
          heading: 'When to choose PrestaShop',
          paragraphs: [
            'It fits if you have a large catalog, many size, color, or model combinations, different prices by customer group, multiple languages and currencies, or more than one store to run from the same admin. All of that comes with the platform, which is open source.',
            'What you have to accept: it is the most demanding of the three. Paid modules add up, major updates can break modules and themes, and it is less common in Mexico, so finding someone to maintain it takes more effort than with WooCommerce.',
          ],
        },
        {
          heading: 'What to check in Mexico before deciding',
          paragraphs: [
            'According to Wmtips’ ranking, WooCommerce and Shopify are the two most used store platforms in Mexico, and PrestaShop is fifth. That matters for a practical reason: the more widely used a platform is, the easier it is to find vendors and extensions.',
            'Before signing, confirm these points with current data, because they change by country and plan:',
          ],
          bullets: [
            'Which gateways work in your country on that platform, such as Mercado Pago or PayPal, and what each one charges.',
            'Whether Shopify Payments is available to your business and what fee applies if you use another gateway. Check Shopify’s official page, not a blog.',
            'What the apps, extensions, or modules you will really use would cost you per year.',
            'Who will maintain the store two years from now and what they charge for it.',
          ],
        },
        {
          heading: 'Four expensive mistakes',
          paragraphs: ['We see these repeat regardless of the platform.'],
          bullets: [
            '**Choosing on the monthly fee alone.** A free platform with costly maintenance can cost more than a paid one, and vice versa.',
            '**Installing too much.** Every app or plugin adds cost, weight, and one more thing that can fail.',
            '**Thinking only about today’s store.** Choose for the catalog and markets you expect to have, not just the ones you have now.',
            '**Migrating without redirects.** Changing platforms without redirecting old URLs throws away what you earned on Google.',
          ],
          cta: {
            heading: 'Still not sure which one fits?',
            text: 'On a call we review what you sell and how you sell it, and tell you which platform we recommend for your case, whichever it is. We design and build stores on all three.',
            label: 'Request a quote',
          },
        },
      ],
      cta: {
        heading: 'Choose the right platform from the start',
        text: 'One team handles your brand, design, development, and SEO. We send a fixed-scope quote, broken down by stage, with deliverables and dates.',
        label: 'Request your quote',
      },
      linkLabel: 'Shopify, WooCommerce, or PrestaShop: which to choose',
      breadcrumb: 'Shopify vs WooCommerce vs PrestaShop',
    },
  },
};
