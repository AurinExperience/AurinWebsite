import type { Landing } from './types';

/**
 * Guanajuato — palabra clave objetivo: "diseño web Guanajuato", con León como
 * ciudad principal dentro del contenido.
 *
 * Ángulo propio: fabricantes que venden a mayoreo y distribuidores. Catálogo,
 * listas de precios y portal de cliente. Es B2B de venta a otros negocios, no
 * e-commerce de consumo (eso es Jalisco) ni industria de exportación (Querétaro).
 */
export const guanajuato: Landing = {
  id: 'guanajuato',
  status: 'live',
  slug: { es: 'guanajuato', en: 'guanajuato' },
  region: 'Guanajuato',
  geo: { latitude: 21.129, longitude: -101.674 },
  areas: ['León', 'Irapuato', 'Celaya', 'Salamanca', 'Silao', 'San Miguel de Allende'],
  phoneSample: '+52 477 123 4567',
  proof: ['fruitAcademy', 'mexicoPacific', 'grupoEstrella'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Guanajuato | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Guanajuato. Sitios con catálogo y venta a mayoreo para fabricantes y distribuidores de León, Irapuato y Celaya.',
        keywords:
          'diseño web Guanajuato, diseño web León, agencia de diseño web Guanajuato, catálogo en línea mayoreo, páginas web Irapuato, diseño web Celaya',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Guanajuato',
        titleLead: 'Diseño Web en',
        titleAccent: 'Guanajuato',
        description:
          'En Guanajuato se fabrica y se vende a otros negocios. Diseñamos sitios con catálogo, condiciones por tipo de cliente y solicitud de cotización, para fabricantes y distribuidores de León, Irapuato, Celaya y Silao que hoy siguen levantando pedidos por WhatsApp y hoja de cálculo.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: 'B2B', label: 'catálogo, mayoreo y portal de distribuidores' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Guanajuato',
        intro:
          'Diseñamos sitios web para empresas de León, Irapuato, Celaya, Salamanca, Silao y San Miguel de Allende: calzado y marroquinería, manufactura y proveeduría automotriz, agroindustria, distribución y comercio mayorista. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Catálogo en línea para mayoreo',
            description:
              'Tu comprador no es un consumidor final: compra por volumen, repite pedidos y necesita ver medidas, materiales y existencias antes de decidir. El catálogo se diseña para ese uso, no como una tienda de menudeo con precios públicos.',
            bullets: [
              'Fichas con especificaciones, medidas y variantes',
              'Precios y condiciones visibles solo para clientes registrados',
              'Solicitud de cotización o pedido con carrito de volumen',
            ],
          },
          {
            title: 'Sitio corporativo de fabricante',
            description:
              'Antes de comprarte, un distribuidor nuevo quiere saber si puedes sostener el volumen. El sitio tiene que responder eso: capacidad de planta, procesos, certificaciones y tiempos de entrega, expuestos con claridad y sin adornos.',
            bullets: [
              'Capacidades, planta y certificaciones con jerarquía clara',
              'Historia de marca para fabricantes con trayectoria',
              'CMS para actualizar catálogo y contenidos',
            ],
          },
          {
            title: 'Portal de distribuidores',
            description:
              'Si ya tienes cartera de clientes recurrentes, un acceso privado les ahorra la llamada: consultan su lista de precios, descargan fichas y vuelven a pedir sin que alguien de tu equipo lo capture a mano.',
            bullets: [
              'Acceso por cliente con su propia lista de precios',
              'Descarga de fichas técnicas y material de venta',
              'Historial y recompra en pocos pasos',
            ],
          },
          {
            title: 'Rediseño y optimización web',
            description:
              'Si tu catálogo actual es un PDF que se manda por correo, estás perdiendo pedidos por fricción. Auditamos el proceso completo y lo convertimos en algo que el cliente pueda consultar solo, a cualquier hora.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Migración de catálogo a una estructura consultable',
              'SEO técnico on-page y migración segura',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Cuatro etapas con entregables y fechas, en el formato que necesitas para pasarlo a dirección o a compras.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Entendemos cómo se levanta hoy un pedido en tu empresa, quién decide del lado del cliente y qué información pide siempre antes de comprar. Ese mapa es lo que después define la estructura del catálogo.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Ordenamos familias de producto, variantes y filtros, y definimos el flujo de cotización o pedido. Lo validamos en wireframes con alguien de tu área comercial antes de avanzar a lo visual.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos las pantallas y el sistema de componentes que sostiene un catálogo que va a crecer. La ficha de producto se diseña una vez y tiene que servir para todo lo que agregues después.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos. Cargamos el catálogo inicial, configuramos analítica y capacitamos a tu equipo para que puedan mantenerlo ellos.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Guanajuato',
        description: 'Lo que nos preguntan los fabricantes y distribuidores del estado.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Guanajuato?',
            answer:
              'Depende del alcance: número de secciones, tamaño del catálogo, si hay accesos por cliente o integraciones con tu sistema, y si nosotros producimos fotografía y fichas. Un sitio corporativo con catálogo consultable es distinto a una landing page, y ambos se cotizan cerrado después de una llamada de diagnóstico, con entregables y fechas por etapa.',
          },
          {
            question: '¿Pueden hacer que mis clientes vean precios distintos según su volumen?',
            answer:
              'Sí, y es una de las razones más comunes por las que un fabricante quiere sitio. Se resuelve con acceso por cliente: cada uno entra con su usuario y ve su lista de precios y sus condiciones. El catálogo público queda visible para atraer clientes nuevos, pero sin precios, que es lo que casi siempre pide el área comercial.',
          },
          {
            question: 'Vendemos a mayoreo, no al consumidor final. ¿Nos sirve una tienda en línea?',
            answer:
              'Una tienda de menudeo probablemente no. Lo que sí funciona es un catálogo consultable con solicitud de cotización o pedido por volumen: tu cliente revisa modelos, medidas y existencias cuando quiere, y llega a tu equipo comercial con la decisión medio tomada. La venta la sigue cerrando una persona; lo que cambia es cuánto tiempo se va en mandar fotos y precios por WhatsApp.',
          },
          {
            question: '¿Se puede conectar con nuestro sistema de inventario o ERP?',
            answer:
              'En muchos casos sí, siempre que tu sistema permita salida de datos por API o por archivo. Lo revisamos en el descubrimiento, antes de prometer nada: hay sistemas que lo resuelven en días y otros donde conviene empezar con una carga periódica y automatizar después. Lo que no hacemos es cotizar una integración sin haber visto qué expone tu sistema.',
          },
          {
            question: '¿Trabajan con empresas de calzado y marroquinería de León?',
            answer:
              'Sí. Es un giro con un reto particular: catálogos enormes, muchas variantes de talla y color, y temporadas que rotan. Eso obliga a diseñar la ficha de producto y el sistema de filtros pensando en el catálogo completo desde el principio, porque rehacerlo cuando ya cargaste mil modelos sale mucho más caro.',
          },
          {
            question: '¿Cuánto tiempo toma un proyecto con catálogo?',
            answer:
              'Un sitio corporativo va de 6 a 8 semanas. Con catálogo, el diseño y el desarrollo toman un poco más, pero lo que realmente marca el tiempo es la carga de contenido: fotos de producto, fichas y especificaciones. Si ese material ya existe y está ordenado, el proyecto avanza; si hay que producirlo, se planea como una etapa aparte con su propia fecha.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Identidad, sitios web y experiencias digitales para empresas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Guanajuato.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Guanajuato',
      breadcrumb: 'Diseño Web Guanajuato',
      serviceName: 'Diseño Web y UX/UI en Guanajuato',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web y el catálogo de un fabricante en Guanajuato.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Guanajuato | Aurin',
        description:
          'Web and UX/UI design agency for Guanajuato. Catalog and wholesale sites for manufacturers and distributors in León, Irapuato, and Celaya.',
        keywords:
          'web design Guanajuato, web design León Mexico, wholesale catalog website, B2B website design Mexico, web design Irapuato, web design Celaya',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Guanajuato',
        titleLead: 'Web Design in',
        titleAccent: 'Guanajuato',
        description:
          'Guanajuato manufactures and sells to other businesses. We design sites with catalogs, per-client terms, and quote requests for manufacturers and distributors in León, Irapuato, Celaya, and Silao who still take orders over WhatsApp and a spreadsheet.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: 'B2B', label: 'catalog, wholesale, and distributor portal' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Guanajuato',
        intro:
          'We design websites for companies in León, Irapuato, Celaya, Salamanca, Silao, and San Miguel de Allende: footwear and leather goods, manufacturing and automotive supply, agribusiness, distribution, and wholesale. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Online wholesale catalog',
            description:
              'Your buyer is not an end consumer: they buy by volume, reorder, and need to see measurements, materials, and stock before deciding. The catalog is designed for that use, not as a retail store with public prices.',
            bullets: [
              'Product pages with specs, measurements, and variants',
              'Prices and terms visible only to registered clients',
              'Quote or order request with a volume cart',
            ],
          },
          {
            title: 'Manufacturer corporate site',
            description:
              'Before buying, a new distributor wants to know whether you can sustain the volume. The site has to answer that: plant capacity, processes, certifications, and lead times, laid out clearly and without decoration.',
            bullets: [
              'Capabilities, plant, and certifications with clear hierarchy',
              'Brand story for manufacturers with a track record',
              'A CMS to update catalog and content',
            ],
          },
          {
            title: 'Distributor portal',
            description:
              'If you already have recurring clients, a private login saves them the phone call: they check their price list, download spec sheets, and reorder without someone on your team keying it in by hand.',
            bullets: [
              'Per-client access with their own price list',
              'Spec sheet and sales material downloads',
              'Order history and quick reorder',
            ],
          },
          {
            title: 'Redesign and web optimization',
            description:
              'If your current catalog is a PDF emailed on request, you are losing orders to friction. We audit the full process and turn it into something the client can browse alone, at any hour.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Catalog migration into a browsable structure',
              'On-page technical SEO and safe migration',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'Four stages with deliverables and dates, in the format you need to take it to management or procurement.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We learn how an order gets placed at your company today, who decides on the client side, and what information they always ask for before buying. That map is what later defines the catalog structure.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We organize product families, variants, and filters, and define the quote or order flow. We validate it in wireframes with someone from your sales team before moving to anything visual.',
          },
          {
            name: 'UI: interface design',
            text: 'We design the screens and the component system behind a catalog that will grow. The product page gets designed once and has to serve everything you add later.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device. We load the initial catalog, configure analytics, and train your team so they can maintain it themselves.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Guanajuato',
        description: 'What manufacturers and distributors in the state ask us.',
        items: [
          {
            question: 'How much does web design cost in Guanajuato?',
            answer:
              'It depends on scope: number of sections, catalog size, whether there are per-client logins or integrations with your system, and whether we produce photography and spec sheets. A corporate site with a browsable catalog is different from a landing page, and both get a fixed quote after a diagnostic call, with deliverables and dates per stage.',
          },
          {
            question: 'Can my clients see different prices depending on their volume?',
            answer:
              'Yes, and it is one of the most common reasons a manufacturer wants a site. It is solved with per-client access: each one logs in and sees their own price list and terms. The public catalog stays visible to attract new clients but without prices, which is what the sales team almost always asks for.',
          },
          {
            question: 'We sell wholesale, not to end consumers. Is an online store useful to us?',
            answer:
              'A retail store, probably not. What does work is a browsable catalog with a quote or volume order request: your client reviews models, sizes, and stock whenever they want and reaches your sales team with the decision half made. A person still closes the sale; what changes is how much time goes into sending photos and prices over WhatsApp.',
          },
          {
            question: 'Can it connect to our inventory system or ERP?',
            answer:
              'In many cases yes, as long as your system can export data via API or file. We review it during discovery, before promising anything: some systems solve it in days, others make more sense starting with a periodic upload and automating later. What we do not do is quote an integration without having seen what your system exposes.',
          },
          {
            question: 'Do you work with footwear and leather goods companies in León?',
            answer:
              'Yes. It is an industry with a specific challenge: huge catalogs, many size and color variants, and rotating seasons. That forces us to design the product page and filter system with the full catalog in mind from the start, because rebuilding it after a thousand models are loaded costs far more.',
          },
          {
            question: 'How long does a catalog project take?',
            answer:
              'A corporate site runs 6 to 8 weeks. With a catalog, design and development take somewhat longer, but what really sets the timeline is content loading: product photos, spec sheets, and specifications. If that material exists and is organized, the project moves; if it has to be produced, we plan it as a separate stage with its own date.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for Mexican companies and institutions. That is the standard we would bring to your project in Guanajuato.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Guanajuato',
      breadcrumb: 'Web Design Guanajuato',
      serviceName: 'Web and UX/UI Design in Guanajuato',
      howToDescription:
        'Step-by-step process to design a manufacturer’s website and catalog in Guanajuato.',
    },
  },
};
