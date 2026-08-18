import type { Landing } from './types';

/**
 * Monterrey — la landing original. El copy está copiado VERBATIM de la versión
 * que ya está indexada: la página lleva meses en línea y reescribirla ahora
 * reiniciaría su historial con Google sin ninguna ganancia.
 *
 * Palabra clave objetivo: "diseño web Monterrey". Nuevo León aparece como área
 * metropolitana, no como objetivo propio: no existe una landing de estado que
 * pueda competir contra esta.
 */
export const monterrey: Landing = {
  id: 'monterrey',
  status: 'live',
  slug: { es: 'monterrey', en: 'monterrey' },
  region: 'Nuevo León',
  geo: { latitude: 25.6866, longitude: -100.3161 },
  areas: [
    'Monterrey',
    'San Pedro Garza García',
    'San Nicolás de los Garza',
    'Guadalupe',
    'Apodaca',
    'Santa Catarina',
  ],
  phoneSample: '+52 81 1234 5678',
  proof: ['galicia', 'monetix', 'grupoEstrella'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Monterrey | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Monterrey. Sitios web y landing pages a medida que convierten visitantes en clientes. Cotiza sin costo.',
        keywords:
          'diseño web Monterrey, diseño UX UI Monterrey, agencia de diseño web Monterrey, landing pages Monterrey, diseño de páginas web Monterrey, rediseño web Monterrey',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Monterrey',
        titleLead: 'Diseño Web en',
        titleAccent: 'Monterrey',
        description:
          'Diseñamos sitios web, landing pages y experiencias UX/UI a medida para empresas de toda el área metropolitana de Monterrey. Cada pantalla se piensa desde quien la usa: claridad, velocidad y un camino directo a la conversión.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: '2-8', label: 'semanas del brief al sitio en línea, según el alcance' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Monterrey',
        intro:
          'Nos enfocamos en una sola cosa y la hacemos bien: diseñar sitios web y landing pages para empresas en Monterrey, San Pedro Garza García, Apodaca, Guadalupe, San Nicolás y Santa Catarina. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Diseño web a medida',
            description:
              'Sitios web únicos, construidos desde tu identidad de marca y no desde una plantilla. Diseñamos la experiencia completa: estructura, contenido, interfaz y desarrollo.',
            bullets: [
              'Diseño responsivo en todos los dispositivos',
              'Arquitectura de contenido y navegación',
              'CMS para que edites sin depender de nadie',
            ],
          },
          {
            title: 'Diseño UX/UI',
            description:
              'Investigamos a tu audiencia antes de dibujar una sola pantalla. Cada decisión de interfaz responde a un objetivo de negocio y a cómo se comportan tus usuarios reales.',
            bullets: [
              'Research, user flows y arquitectura de información',
              'Wireframes y prototipos navegables',
              'Design system y librería de componentes',
            ],
          },
          {
            title: 'Landing pages de alta conversión',
            description:
              'Una página, un objetivo. Diseñamos landings enfocadas en que el visitante haga exactamente lo que necesitas: cotizar, agendar o comprar.',
            bullets: [
              'Estructura orientada a un solo objetivo',
              'Jerarquía visual y mensajes que guían la decisión',
              'Formularios, medición y pruebas de mejora',
            ],
          },
          {
            title: 'Rediseño y optimización web',
            description:
              'Si tu sitio actual es lento, se ve antiguo o no genera contactos, lo auditamos y lo transformamos en una experiencia moderna sin perder tu posicionamiento.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Rediseño visual y de contenidos',
              'SEO técnico on-page y migración segura',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo diseñamos tu sitio web',
        description: 'Un proceso claro, con entregables en cada etapa y sin sorpresas.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Conocemos tu negocio, tus objetivos y a quién le hablas en Nuevo León. Analizamos competencia, búsquedas y referencias para definir la estrategia del sitio.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Ordenamos el contenido, definimos los flujos y armamos wireframes navegables. Validamos la estructura antes de invertir un minuto en lo visual.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla con tu identidad: tipografía, color, imagen y componentes reutilizables. Iteramos contigo hasta que el diseño se sienta tuyo.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos. Configuramos analítica, lanzamos y medimos para seguir mejorando.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Nuevo León',
        description: 'Lo que más nos preguntan las empresas antes de empezar su proyecto.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Monterrey?',
            answer:
              'El costo depende del alcance: cuántas secciones necesitas, si el diseño UX/UI parte de cero, las integraciones y si hay que producir contenido. Una landing page es la opción más accesible y un sitio corporativo a medida escala según el número de pantallas y funcionalidades. Empezamos con una llamada para entender tu proyecto; después analizamos el alcance y te enviamos una cotización cerrada, sin costos ocultos.',
          },
          {
            question: '¿Cuánto tiempo toma diseñar un sitio web profesional?',
            answer:
              'Una landing page toma de 2 a 4 semanas y un sitio corporativo de 6 a 8, desde el descubrimiento hasta el lanzamiento. No es solo maquetar: hay research, arquitectura de información, wireframes, diseño de interfaz y rondas de revisión antes de escribir la primera línea de código. Los tiempos se alargan sobre todo por dos cosas: la entrega de contenidos y la rapidez del feedback de tu equipo.',
          },
          {
            question: '¿Qué incluye el diseño UX/UI de un sitio web?',
            answer:
              'Incluye research de tu audiencia, arquitectura de información, user flows, wireframes, prototipo navegable y el diseño final de interfaz con un sistema de componentes reutilizables. El UX define qué va y en qué orden; el UI define cómo se ve y cómo se siente.',
          },
          {
            question: '¿Cuál es la diferencia entre una landing page y un sitio web?',
            answer:
              'Una landing page es una sola página enfocada en un único objetivo: cotizar, agendar o registrarse. Un sitio web es una estructura de varias páginas que explica todo tu negocio y trabaja tu posicionamiento a largo plazo. Muchas empresas en Nuevo León empiezan con una landing y crecen hacia un sitio completo.',
          },
          {
            question: '¿Sus diseños web incluyen SEO?',
            answer:
              'Sí. Cada sitio se entrega con SEO técnico on-page: carga rápida, HTML semántico, jerarquía correcta de encabezados, meta tags, datos estructurados, imágenes optimizadas y una estrategia de contenido enfocada en búsquedas locales de Nuevo León.',
          },
          {
            question: '¿Puedo editar mi sitio y hay soporte después del lanzamiento?',
            answer:
              'Sí. Integramos un CMS intuitivo para que actualices textos e imágenes sin conocimientos técnicos, con capacitación incluida. Además ofrecemos planes mensuales de mantenimiento que cubren actualizaciones, seguridad, respaldos y mejoras de rendimiento.',
          },
        ],
      },
      socialProof: {
        heading: 'Empresas que confían en nuestro diseño',
        description:
          'Marcas e instituciones de México que ya diseñamos: identidad, sitios web y experiencias digitales.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Monterrey',
      breadcrumb: 'Diseño Web Monterrey',
      serviceName: 'Diseño Web y UX/UI en Monterrey',
      howToDescription:
        'Proceso paso a paso para crear un sitio web profesional en Monterrey.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Monterrey | Aurin',
        description:
          'Web and UX/UI design agency in Monterrey. Custom websites and landing pages that turn visitors into clients across Nuevo León. Free quote.',
        keywords:
          'web design Monterrey, UX UI design Monterrey, web design agency Monterrey, landing pages Monterrey, website design Monterrey, website redesign Monterrey',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Monterrey',
        titleLead: 'Web Design in',
        titleAccent: 'Monterrey',
        description:
          'We design custom websites, landing pages, and UX/UI experiences for businesses across the Monterrey metropolitan area. Every screen starts with the person using it: clarity, speed, and a direct path to conversion.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: '2-8', label: 'weeks from brief to a live site, depending on scope' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Monterrey',
        intro:
          'We focus on one thing and do it well: designing websites and landing pages for businesses in Monterrey, San Pedro Garza García, Apodaca, Guadalupe, San Nicolás, and Santa Catarina. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Custom web design',
            description:
              'Unique websites built from your brand identity, not from a template. We design the full experience: structure, content, interface, and development.',
            bullets: [
              'Responsive design across every device',
              'Content architecture and navigation',
              'A CMS so you can edit without depending on anyone',
            ],
          },
          {
            title: 'UX/UI design',
            description:
              'We research your audience before drawing a single screen. Every interface decision answers to a business goal and to how your real users behave.',
            bullets: [
              'Research, user flows, and information architecture',
              'Wireframes and clickable prototypes',
              'Design system and component library',
            ],
          },
          {
            title: 'High-converting landing pages',
            description:
              'One page, one goal. We design landings focused on getting the visitor to do exactly what you need: request a quote, book, or buy.',
            bullets: [
              'Structure built around a single objective',
              'Visual hierarchy and messaging that guides the decision',
              'Forms, measurement, and iterative testing',
            ],
          },
          {
            title: 'Redesign and web optimization',
            description:
              'If your current site is slow, looks dated, or brings no leads, we audit it and turn it into a modern experience without losing your rankings.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Visual and content redesign',
              'On-page technical SEO and safe migration',
            ],
          },
        ],
      },
      process: {
        heading: 'How we design your website',
        description: 'A clear process, with deliverables at every stage and no surprises.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We learn your business, your goals, and who you speak to in Nuevo León. We analyze competitors, search demand, and references to define the site strategy.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We organize the content, define the flows, and build clickable wireframes. We validate the structure before investing a minute in visuals.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen with your identity: typography, color, imagery, and reusable components. We iterate with you until the design feels like yours.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device. We set up analytics, launch, and measure so we can keep improving.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Nuevo León',
        description: 'What businesses ask us most before starting their project.',
        items: [
          {
            question: 'How much does web design cost in Monterrey?',
            answer:
              'It depends on scope: how many sections you need, whether the UX/UI design starts from scratch, the integrations involved, and whether content has to be produced. A landing page is the most accessible option, and a custom corporate site scales with the number of screens and features. We start with a call to understand your project; we then analyze the scope and send you a fixed quote with no hidden costs.',
          },
          {
            question: 'How long does it take to design a professional website?',
            answer:
              'A landing page takes 2 to 4 weeks and a corporate site 6 to 8, from discovery to launch. It is not just building screens: there is research, information architecture, wireframes, interface design and review rounds before the first line of code. What stretches timelines is mostly two things: content delivery and how fast your team turns around feedback.',
          },
          {
            question: 'What does your UX/UI design include?',
            answer:
              'It includes audience research, information architecture, user flows, wireframes, a clickable prototype, and the final interface design with a reusable component system. UX defines what goes in and in what order; UI defines how it looks and feels.',
          },
          {
            question: "What's the difference between a landing page and a website?",
            answer:
              'A landing page is a single page focused on one goal: request a quote, book, or sign up. A website is a multi-page structure that explains your whole business and builds long-term rankings. Many businesses in Nuevo León start with a landing and grow into a full site.',
          },
          {
            question: 'Do your web designs include SEO?',
            answer:
              'Yes. Every site ships with on-page technical SEO: fast loading, semantic HTML, correct heading hierarchy, meta tags, structured data, optimized images, and a content strategy focused on local searches in Nuevo León.',
          },
          {
            question: 'Can I edit my site, and is there support after launch?',
            answer:
              'Yes. We integrate an intuitive CMS so you can update text and images without technical knowledge, training included. We also offer monthly maintenance plans covering updates, security, backups, and performance improvements.',
          },
        ],
      },
      socialProof: {
        heading: 'Businesses that trust our design',
        description:
          'Brands and institutions across Mexico whose identity, websites, and digital experiences we have designed.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Monterrey',
      breadcrumb: 'Web Design Monterrey',
      serviceName: 'Web and UX/UI Design in Monterrey',
      howToDescription: 'Step-by-step process to create a professional website in Monterrey.',
    },
  },
};
