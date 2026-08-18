import type { Landing } from './types';

/**
 * Querétaro — palabra clave objetivo: "diseño web Querétaro".
 *
 * Ángulo propio: nearshoring. El copy habla de empresas industriales, matrices
 * extranjeras y sitios bilingües, temas que NO aparecen en Monterrey ni en CDMX.
 * Esa diferencia es lo que evita que las tres páginas compitan entre sí.
 */
export const queretaro: Landing = {
  id: 'queretaro',
  status: 'live',
  slug: { es: 'queretaro', en: 'queretaro' },
  region: 'Querétaro',
  geo: { latitude: 20.5888, longitude: -100.3899 },
  areas: [
    'Santiago de Querétaro',
    'El Marqués',
    'Corregidora',
    'San Juan del Río',
    'Tequisquiapan',
    'Huimilpan',
  ],
  phoneSample: '+52 442 123 4567',
  proof: ['mexicoPacific', 'ancient', 'grupoEstrella'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Querétaro | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Querétaro. Sitios corporativos bilingües, landing pages y rediseños para empresas industriales y de tecnología.',
        keywords:
          'diseño web Querétaro, diseño UX UI Querétaro, agencia de diseño web Querétaro, páginas web Querétaro, sitios web corporativos Querétaro, rediseño web Querétaro',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Querétaro',
        titleLead: 'Diseño Web en',
        titleAccent: 'Querétaro',
        description:
          'Querétaro creció más rápido que los sitios web de sus empresas. Diseñamos sitios corporativos y experiencias UX/UI para compañías industriales, de tecnología y de servicios que ya juegan en ligas nacionales e internacionales, pero cuya presencia digital todavía no lo refleja.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: 'ES/EN', label: 'sitios bilingües para empresas con clientes fuera de México' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Querétaro',
        intro:
          'Diseñamos sitios web para empresas de Santiago de Querétaro, El Marqués, Corregidora, San Juan del Río y Tequisquiapan: manufactura, aeroespacial, tecnología, logística, agroindustria y despachos profesionales. Estrategia, UX/UI y desarrollo con un mismo equipo, sin intermediarios.',
        items: [
          {
            title: 'Sitio corporativo bilingüe',
            description:
              'Si tu cliente o tu matriz está fuera de México, el sitio tiene que sostener la conversación en dos idiomas sin verse traducido a la carrera. Diseñamos la estructura en español e inglés desde el principio, no como un parche al final.',
            bullets: [
              'Arquitectura ES/EN con hreflang correcto',
              'Fichas de capacidades, certificaciones y planta',
              'CMS para publicar en ambos idiomas sin depender de nadie',
            ],
          },
          {
            title: 'Diseño UX/UI y arquitectura de información',
            description:
              'Los sitios industriales suelen tener mucho que explicar y poca claridad para hacerlo. Ordenamos catálogos, procesos y capacidades para que un comprador técnico encuentre lo que busca en dos clics.',
            bullets: [
              'Research con tus perfiles de comprador reales',
              'Arquitectura de catálogo y flujos de cotización',
              'Design system y librería de componentes',
            ],
          },
          {
            title: 'Landing pages para campañas y ferias',
            description:
              'Una página por campaña, con un solo objetivo. Útil cuando lanzas una línea nueva, participas en una feria del sector o corres anuncios y necesitas medir qué funciona.',
            bullets: [
              'Estructura orientada a un solo objetivo',
              'Formularios que califican antes de la llamada',
              'Medición lista para campañas de paga',
            ],
          },
          {
            title: 'Rediseño y migración sin perder posicionamiento',
            description:
              'Muchas empresas del Bajío cargan un sitio de hace ocho años que ya rankea. Lo rediseñamos conservando lo que funciona: redirecciones, estructura de URLs y contenido que ya te trae visitas.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Plan de redirecciones 301 y migración segura',
              'SEO técnico on-page y monitoreo posterior',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Un proceso con entregables y fechas por etapa, pensado para pasar por comité o por compras sin sorpresas.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Entendemos a qué se dedica tu empresa, a quién le vende y cómo compra ese cliente. Revisamos a tus competidores en Querétaro y en el resto del corredor industrial del Bajío para saber contra qué compites en línea.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Ordenamos capacidades, catálogo y contenido técnico en una estructura navegable. Te entregamos wireframes para revisar y aprobar antes de tocar una sola decisión visual.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla con tu identidad y, si la matriz tiene manual de marca, dentro de sus lineamientos. Iteramos hasta que el resultado pase la revisión interna y la de corporativo.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos, en español e inglés. Configuramos analítica, lanzamos y te dejamos la capacitación grabada.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Querétaro',
        description: 'Lo que nos preguntan las empresas queretanas antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web para una empresa en Querétaro?',
            answer:
              'Depende del alcance: número de secciones, si el sitio es bilingüe, si hay catálogo o integraciones, y si nosotros producimos el contenido. Una landing page es el punto de entrada más accesible; un sitio corporativo escala según pantallas y funcionalidad. Después de una llamada de diagnóstico te enviamos una cotización cerrada, con entregables y fechas por etapa, en el formato que necesites para pasarla a compras.',
          },
          {
            question: '¿Diseñan sitios bilingües para empresas con matriz o clientes en el extranjero?',
            answer:
              'Sí, y es una buena parte de lo que hacemos. Un sitio bilingüe bien hecho no es traducir textos: es una arquitectura paralela con etiquetas hreflang correctas, URLs propias por idioma y un CMS donde tu equipo publica en ambos sin duplicar trabajo. Hecho a medias, Google termina mostrando la versión equivocada al usuario equivocado.',
          },
          {
            question: '¿Pueden rediseñar nuestro sitio sin perder el posicionamiento que ya tenemos?',
            answer:
              'Sí, y es justo donde más se equivocan los rediseños. Antes de tocar nada levantamos un inventario de las URLs que reciben tráfico y de las búsquedas por las que ya apareces. Ese inventario se convierte en un plan de redirecciones 301 y en una guía de qué contenido conservar. Después del lanzamiento monitoreamos posiciones para detectar cualquier caída a tiempo.',
          },
          {
            question: '¿Trabajan con empresas industriales o solo con marcas de consumo?',
            answer:
              'Con ambas. En industria el reto es distinto: el visitante es un comprador técnico que busca capacidades, certificaciones y tiempos de entrega, no inspiración. El diseño ahí sirve para dar claridad y credibilidad, no para impresionar. Ordenamos ese contenido para que se entienda rápido y termine en una solicitud de cotización.',
          },
          {
            question: '¿Trabajan a distancia? ¿Pueden ir a Querétaro?',
            answer:
              'El proceso está diseñado para trabajarse a distancia: videollamadas, entregables en línea y comentarios directos sobre el diseño. Para arranques de proyecto y presentaciones a dirección podemos ir presencialmente a Querétaro; se acuerda desde la propuesta para que no aparezca como un costo sorpresa.',
          },
          {
            question: '¿Qué necesitan de nosotros para arrancar?',
            answer:
              'Un responsable del proyecto de tu lado con capacidad de decidir, acceso a tu manual de marca si existe, y el material que ya tengas: fotos de planta, fichas técnicas, certificaciones y textos. Lo que falte lo producimos nosotros. Los proyectos que se alargan casi siempre se alargan por contenido pendiente, no por diseño.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Proyectos de identidad, sitios web y experiencias digitales para empresas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Querétaro.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Querétaro',
      breadcrumb: 'Diseño Web Querétaro',
      serviceName: 'Diseño Web y UX/UI en Querétaro',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web de una empresa en Querétaro.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Querétaro | Aurin',
        description:
          'Web and UX/UI design agency in Querétaro. Bilingual corporate sites, landing pages, and redesigns for industrial and technology companies.',
        keywords:
          'web design Querétaro, UX UI design Querétaro, web design agency Querétaro, corporate website Querétaro, bilingual website Mexico, website redesign Querétaro',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Querétaro',
        titleLead: 'Web Design in',
        titleAccent: 'Querétaro',
        description:
          'Querétaro grew faster than its companies’ websites. We design corporate sites and UX/UI experiences for industrial, technology, and services companies already competing nationally and abroad, whose digital presence has not caught up yet.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: 'ES/EN', label: 'bilingual sites for companies selling outside Mexico' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Querétaro',
        intro:
          'We design websites for companies in Santiago de Querétaro, El Marqués, Corregidora, San Juan del Río, and Tequisquiapan: manufacturing, aerospace, technology, logistics, agribusiness, and professional firms. Strategy, UX/UI, and development from a single team, no middlemen.',
        items: [
          {
            title: 'Bilingual corporate website',
            description:
              'If your client or your parent company sits outside Mexico, the site has to hold the conversation in two languages without looking hastily translated. We design the ES/EN structure from the start, not as a patch at the end.',
            bullets: [
              'ES/EN architecture with correct hreflang',
              'Capability, certification, and facility pages',
              'A CMS to publish in both languages on your own',
            ],
          },
          {
            title: 'UX/UI design and information architecture',
            description:
              'Industrial sites usually have a lot to explain and little clarity to do it. We organize catalogs, processes, and capabilities so a technical buyer finds what they need in two clicks.',
            bullets: [
              'Research with your real buyer profiles',
              'Catalog architecture and quote request flows',
              'Design system and component library',
            ],
          },
          {
            title: 'Landing pages for campaigns and trade shows',
            description:
              'One page per campaign, one goal. Useful when you launch a new line, attend an industry trade show, or run ads and need to measure what actually works.',
            bullets: [
              'Structure built around a single objective',
              'Forms that qualify before the call',
              'Measurement ready for paid campaigns',
            ],
          },
          {
            title: 'Redesign and migration without losing rankings',
            description:
              'Many Bajío companies carry an eight-year-old site that already ranks. We redesign it while keeping what works: redirects, URL structure, and the content already bringing you traffic.',
            bullets: [
              'UX, speed, and accessibility audit',
              '301 redirect plan and safe migration',
              'On-page technical SEO and post-launch monitoring',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'A process with deliverables and dates per stage, built to clear internal committees and procurement without surprises.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We learn what your company does, who it sells to, and how that client buys. We review your competitors in Querétaro and across the Bajío industrial corridor so we know what you are up against online.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We organize capabilities, catalog, and technical content into a navigable structure. You get wireframes to review and approve before we touch a single visual decision.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen with your identity and, if your parent company has brand guidelines, inside them. We iterate until the result clears both internal and corporate review.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device, in Spanish and English. We set up analytics, launch, and hand over recorded training.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Querétaro',
        description: 'What Querétaro companies ask us before signing.',
        items: [
          {
            question: 'How much does a website cost for a company in Querétaro?',
            answer:
              'It depends on scope: number of sections, whether the site is bilingual, whether there is a catalog or integrations, and whether we produce the content. A landing page is the most accessible entry point; a corporate site scales with screens and functionality. After a diagnostic call we send a fixed quote with deliverables and dates per stage, in whatever format procurement needs.',
          },
          {
            question: 'Do you build bilingual sites for companies with foreign clients or parent companies?',
            answer:
              'Yes, and it is a good share of what we do. A proper bilingual site is not translated text: it is a parallel architecture with correct hreflang tags, dedicated URLs per language, and a CMS where your team publishes in both without duplicating work. Done halfway, Google ends up showing the wrong version to the wrong user.',
          },
          {
            question: 'Can you redesign our site without losing the rankings we already have?',
            answer:
              'Yes, and this is exactly where most redesigns go wrong. Before touching anything we inventory the URLs receiving traffic and the searches you already appear for. That inventory becomes a 301 redirect plan and a guide for which content to keep. After launch we monitor positions so any drop gets caught early.',
          },
          {
            question: 'Do you work with industrial companies or only consumer brands?',
            answer:
              'Both. In industry the challenge is different: the visitor is a technical buyer looking for capabilities, certifications, and lead times, not inspiration. Design there exists to create clarity and credibility, not to impress. We organize that content so it reads fast and ends in a quote request.',
          },
          {
            question: 'Do you work remotely? Can you come to Querétaro?',
            answer:
              'The process is built to run remotely: video calls, deliverables online, and comments directly on the design. For project kickoffs and executive presentations we can travel to Querétaro; it is agreed in the proposal so it never shows up as a surprise cost.',
          },
          {
            question: 'What do you need from us to start?',
            answer:
              'A project owner on your side with authority to decide, access to your brand guidelines if they exist, and whatever material you already have: facility photos, spec sheets, certifications, and copy. We produce whatever is missing. Projects that run long almost always run long because of pending content, not design.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for companies and institutions across Mexico. That is the standard we would bring to your project in Querétaro.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Querétaro',
      breadcrumb: 'Web Design Querétaro',
      serviceName: 'Web and UX/UI Design in Querétaro',
      howToDescription: 'Step-by-step process to design a company website in Querétaro.',
    },
  },
};
