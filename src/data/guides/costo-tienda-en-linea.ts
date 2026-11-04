import type { Guide } from './types';

/**
 * "Cuánto cuesta una tienda en línea". Igual que la guía de costo de una página
 * web, NO da cifras: explica qué mueve el precio y cómo leer una cotización.
 *
 * El único número es un ejemplo de margen del lector, no un precio de Aurin.
 * No ofrecer facturación CFDI, conexión con inventario o ERP, guías con
 * paqueterías, carga masiva desde Excel, cotización en línea ni meses sin intereses.
 */
export const costoTiendaEnLinea: Guide = {
  id: 'costo-tienda-en-linea',
  status: 'live',
  authors: ['elias-aquique'],
  slug: {
    es: 'cuanto-cuesta-una-tienda-en-linea-en-mexico',
    en: 'how-much-does-an-online-store-cost-in-mexico',
  },
  published: '2026-11-04',
  updated: '2026-11-04',
  relatedLandings: ['cdmx', 'monterrey', 'queretaro'],
  relatedSectors: ['ecommerce-shopify', 'ecommerce-woocommerce', 'ecommerce-prestashop', 'moda', 'cosmeticos'],
  copy: {
    es: {
      seo: {
        title: '¿Cuánto cuesta una tienda en línea en México? Guía 2027',
        description:
          'Lo que pagas una vez, lo que pagas cada mes y lo que nadie te cotiza: entiende el costo real de una tienda en línea en Shopify, WooCommerce o PrestaShop.',
        keywords:
          'cuánto cuesta una tienda en línea, precio tienda en línea méxico, costo ecommerce, cuánto cuesta una tienda shopify, costo tienda woocommerce',
      },
      title: '¿Cuánto cuesta una tienda en línea en México?',
      excerpt:
        'Una tienda no se paga una sola vez. Antes de comparar cotizaciones, conviene saber qué cuesta construirla, qué cuesta mantenerla viva cada mes y qué es lo que mueve cada número.',
      intro: [
        'Si buscas cuánto cuesta una tienda en línea vas a encontrar respuestas muy distintas, y muchas son ciertas: abrir una tienda con una plantilla y construir una con diseño propio y funciones a la medida son trabajos que no se parecen.',
        'Esta guía no te va a dar un número, porque sin conocer tu catálogo sería adivinar. Te va a dar lo que necesitas para que nadie te sorprenda: qué pagas una vez, qué pagas cada mes y qué revisar antes de firmar.',
      ],
      sections: [
        {
          heading: 'Lo que pagas una vez y lo que pagas cada mes',
          paragraphs: [
            'El error más común es comparar solo el costo de construir la tienda. Una tienda tiene dos cuentas, y la segunda nunca se acaba.',
            '**Una sola vez:** diseño, desarrollo, configuración de pagos y envíos, carga inicial de productos, fotos y textos, y migración si ya vendes en otra plataforma.',
            '**Cada mes o cada año:** plataforma o hosting, dominio, apps, extensiones o módulos, comisiones por cada venta y mantenimiento.',
          ],
        },
        {
          heading: 'Las seis variables que mueven el desarrollo',
          paragraphs: ['Cuando compares cotizaciones, compáralas aquí y no solo en el total.'],
          bullets: [
            '**Tamaño del catálogo.** No es lo mismo manejar veinte productos que miles con tallas, colores y modelos.',
            '**Diseño.** Adaptar un tema existente cuesta menos que diseñar uno desde tu marca, y se nota en cuánto te pareces a las demás tiendas.',
            '**Funciones a la medida.** Portal de mayoristas, precios por tipo de cliente o suscripciones son desarrollo adicional.',
            '**Migración.** Mover productos, clientes y pedidos desde otra plataforma, con redirecciones para conservar tu posicionamiento, es un trabajo en sí mismo.',
            '**Contenido.** Si tú entregas fotos y descripciones, el proyecto avanza. Si hay que producirlas para todo el catálogo, suele ser la partida que más se subestima.',
            '**Idiomas y monedas.** Vender en otro país significa traducir, ajustar precios y revisar pagos y envíos para ese mercado.',
          ],
        },
        {
          heading: 'Lo que cuesta cada plataforma además del desarrollo',
          paragraphs: [
            'Aquí es donde cambia la cuenta mensual. No ponemos cifras porque cambian por plan, país y proveedor: revísalas en las páginas oficiales antes de decidir.',
            '**Shopify:** mensualidad a la plataforma, apps de pago, comisiones de tu pasarela y, según tu plan y tu pasarela, una comisión de Shopify por venta. A cambio, no pagas hosting ni te ocupas de actualizaciones.',
            '**WooCommerce:** el plugin es gratis. Pagas hosting, dominio, extensiones de pago, comisiones de tu pasarela y el mantenimiento de WordPress y de la tienda.',
            '**PrestaShop:** el software es gratis y de código abierto. Pagas hosting, dominio, módulos y temas de pago, comisiones de tu pasarela y mantenimiento, que suele pedir más trabajo técnico.',
            'Gratis no significa barato, y mensualidad no significa caro. Haz la cuenta a tres años con lo que de verdad vas a usar.',
          ],
        },
        {
          heading: 'Plantilla, freelance o agencia',
          paragraphs: [
            '**Hacerla tú con una plantilla.** Es la entrada más accesible y puede bastar para probar si tu producto se vende en línea. Lo que pagas es parecerte a muchas otras tiendas y tu propio tiempo.',
            '**Freelance.** Buena opción para proyectos acotados, con trato directo. Sus límites aparecen cuando necesitas marca, diseño, desarrollo y SEO al mismo tiempo, o cuando la tienda tiene que seguir viva años después.',
            '**Agencia.** Un equipo cubre todas las etapas, con proceso y entregables. Cuesta más y tiene sentido cuando la tienda ya es, o va a ser, un canal de venta importante para tu negocio.',
          ],
        },
        {
          heading: 'Qué debe traer la cotización de una tienda',
          paragraphs: ['Revisa cualquier propuesta con esta lista, venga de nosotros o de quien sea.'],
          bullets: [
            'Qué plataforma propone y por qué es la indicada para tu caso.',
            'Cuántos productos incluye la carga inicial y quién entrega fotos y textos.',
            'Si el tema se diseña desde cero o se adapta uno existente.',
            'Qué pasarelas y tarifas de envío deja configuradas, y si se prueban con pedidos reales de principio a fin.',
            'Una estimación de los costos mensuales: plataforma o hosting, apps o módulos.',
            'A nombre de quién quedan la cuenta, el dominio y el hosting. La respuesta correcta es a tu nombre.',
            'Qué pasa después del lanzamiento: capacitación, garantía y costo del mantenimiento.',
            'Si hay migración, cómo se conserva tu posicionamiento en Google.',
          ],
        },
        {
          heading: 'La cuenta que conviene hacer primero',
          paragraphs: [
            'La pregunta útil no es solo cuánto cuesta la tienda, sino cuántos pedidos necesitas para pagarla. Si cada pedido te deja 300 pesos de ganancia, cada mil pesos de costos mensuales se pagan con cuatro pedidos. Haz esa cuenta con tus números y sabrás cuánto tiene sentido invertir.',
            'Y cuenta también lo que no aparece en ninguna cotización: una tienda barata que no convence en el celular no costó poco, porque cada visita que no compra también se paga.',
          ],
          cta: {
            heading: '¿Quieres saber cuánto costaría la tuya?',
            text: 'Cuéntanos qué vendes y cómo lo vendes. Después de una llamada te mandamos una cotización de alcance cerrado, desglosada por etapa, con entregables y fechas.',
            label: 'Cotiza tu tienda',
          },
        },
      ],
      cta: {
        heading: 'Cotiza tu tienda con alcance cerrado',
        text: 'Diseñamos y desarrollamos tiendas en Shopify, WooCommerce y PrestaShop. Un solo equipo se encarga de tu marca, el diseño, el desarrollo y el SEO, y la tienda queda a tu nombre.',
        label: 'Solicita tu cotización',
      },
      linkLabel: '¿Cuánto cuesta una tienda en línea en México?',
      breadcrumb: 'Cuánto cuesta una tienda en línea',
    },
    en: {
      seo: {
        title: 'How Much Does an Online Store Cost in Mexico? 2027 Guide',
        description:
          'What you pay once, what you pay every month, and what nobody quotes: understand the real cost of an online store on Shopify, WooCommerce, or PrestaShop.',
        keywords:
          'how much does an online store cost, ecommerce website cost mexico, online store pricing, shopify store cost, woocommerce store cost',
      },
      title: 'How much does an online store cost in Mexico?',
      excerpt:
        'A store is not paid for just once. Before comparing quotes, it helps to know what it costs to build, what it costs to keep alive every month, and what moves each number.',
      intro: [
        'Search for what an online store costs and you will find very different answers, and many of them are true: opening a store with a template and building one with its own design and custom features are not the same job.',
        'This guide will not give you a number, because without knowing your catalog that would be guessing. It gives you what you need so nobody surprises you: what you pay once, what you pay every month, and what to check before you sign.',
      ],
      sections: [
        {
          heading: 'What you pay once and what you pay every month',
          paragraphs: [
            'The most common mistake is comparing only the cost of building the store. A store has two bills, and the second one never ends.',
            '**Once:** design, development, payment and shipping setup, initial product upload, photos and copy, and migration if you already sell on another platform.',
            '**Every month or year:** platform or hosting, domain, apps, extensions or modules, fees on every sale, and maintenance.',
          ],
        },
        {
          heading: 'The six variables that move development cost',
          paragraphs: ['When you compare quotes, compare them here and not just on the total.'],
          bullets: [
            '**Catalog size.** Managing twenty products is not the same as managing thousands with sizes, colors, and models.',
            '**Design.** Adapting an existing theme costs less than designing one from your brand, and it shows in how much you resemble other stores.',
            '**Custom features.** A wholesale portal, pricing by customer type, or subscriptions are additional development.',
            '**Migration.** Moving products, customers, and orders from another platform, with redirects to keep your rankings, is a job in itself.',
            '**Content.** If you deliver photos and descriptions, the project moves. If they have to be produced for the whole catalog, it is usually the most underestimated line item.',
            '**Languages and currencies.** Selling in another country means translating, adjusting prices, and reviewing payments and shipping for that market.',
          ],
        },
        {
          heading: 'What each platform costs beyond development',
          paragraphs: [
            'This is where the monthly bill changes. We leave out figures because they vary by plan, country, and vendor: check the official pages before deciding.',
            '**Shopify:** a monthly platform fee, paid apps, your gateway’s fees and, depending on your plan and gateway, a Shopify fee per sale. In exchange, you pay no hosting and do not deal with updates.',
            '**WooCommerce:** the plugin is free. You pay for hosting, a domain, paid extensions, your gateway’s fees, and maintaining WordPress and the store.',
            '**PrestaShop:** the software is free and open source. You pay for hosting, a domain, paid modules and themes, your gateway’s fees, and maintenance, which tends to need more technical work.',
            'Free does not mean cheap, and a monthly fee does not mean expensive. Run the numbers over three years with what you will really use.',
          ],
        },
        {
          heading: 'Template, freelancer, or agency',
          paragraphs: [
            '**Doing it yourself with a template.** It is the most accessible entry point and can be enough to test whether your product sells online. What you pay is looking like many other stores, and your own time.',
            '**Freelancer.** A good option for contained projects, with direct contact. The limits appear when you need brand, design, development, and SEO at once, or when the store has to stay alive for years.',
            '**Agency.** A team covers every stage, with a process and deliverables. It costs more and makes sense when the store already is, or will be, an important sales channel for your business.',
          ],
        },
        {
          heading: 'What a store quote must include',
          paragraphs: ['Run any proposal through this list, ours or anyone else’s.'],
          bullets: [
            'Which platform it proposes and why it fits your case.',
            'How many products the initial upload includes and who delivers photos and copy.',
            'Whether the theme is designed from scratch or adapted from an existing one.',
            'Which gateways and shipping rates it sets up, and whether they are tested with real orders from start to finish.',
            'An estimate of monthly costs: platform or hosting, apps or modules.',
            'Whose name the account, domain, and hosting are in. The correct answer is yours.',
            'What happens after launch: training, warranty, and maintenance cost.',
            'If there is a migration, how your Google rankings are preserved.',
          ],
        },
        {
          heading: 'The math worth doing first',
          paragraphs: [
            'The useful question is not only what the store costs, but how many orders you need to pay for it. If each order leaves you 300 pesos in profit, every thousand pesos of monthly costs is covered by four orders. Run that math with your numbers and you will know how much it makes sense to invest.',
            'Count what appears in no quote as well: a cheap store that does not persuade on a phone did not cost little, because every visit that does not buy is paid for too.',
          ],
          cta: {
            heading: 'Want to know what yours would cost?',
            text: 'Tell us what you sell and how you sell it. After a call we send a fixed-scope quote, broken down by stage, with deliverables and dates.',
            label: 'Request a quote',
          },
        },
      ],
      cta: {
        heading: 'Get a fixed-scope quote for your store',
        text: 'We design and build stores on Shopify, WooCommerce, and PrestaShop. One team handles your brand, design, development, and SEO, and the store stays in your name.',
        label: 'Request your quote',
      },
      linkLabel: 'How much does an online store cost in Mexico?',
      breadcrumb: 'Online store cost in Mexico',
    },
  },
};
