import type { Landing } from './types';

/**
 * CDMX — palabra clave objetivo: "diseño web CDMX".
 *
 * El slug es `cdmx` y no `ciudad-de-mexico` porque la abreviatura concentra
 * mucho más volumen de búsqueda. La versión larga aparece dentro del copy y en
 * los metadatos, que es donde Google la necesita para entender la equivalencia.
 *
 * Ángulo propio: diferenciación en un mercado saturado y servicios
 * profesionales (despachos, consultoría, salud privada). Nada de industria ni
 * de nearshoring — ese terreno es de Querétaro y no deben pisarse.
 */
export const cdmx: Landing = {
  id: 'cdmx',
  status: 'live',
  slug: { es: 'cdmx', en: 'mexico-city' },
  region: 'Ciudad de México',
  geo: { latitude: 19.4326, longitude: -99.1332 },
  areas: [
    'Miguel Hidalgo',
    'Cuauhtémoc',
    'Benito Juárez',
    'Álvaro Obregón',
    'Coyoacán',
    'Azcapotzalco',
  ],
  phoneSample: '+52 55 1234 5678',
  proof: ['galicia', 'ceiich', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en CDMX | Aurin',
        description:
          'Agencia de diseño web y UX/UI en la Ciudad de México. Sitios y landing pages para despachos, consultoras, clínicas y empresas de servicios.',
        keywords:
          'diseño web CDMX, diseño web Ciudad de México, agencia de diseño web CDMX, diseño UX UI CDMX, páginas web CDMX, rediseño de sitio web CDMX',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en la Ciudad de México',
        titleLead: 'Diseño Web en',
        titleAccent: 'CDMX',
        description:
          'En la Ciudad de México tu competencia está a un clic de distancia y se ve exactamente igual que tú. Diseñamos sitios que sostienen una tarifa alta: los que hacen que el visitante entienda en diez segundos por qué vale la pena pagarte a ti y no al de junto.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: '0', label: 'plantillas: cada sitio se diseña desde cero' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en la Ciudad de México',
        intro:
          'Diseñamos sitios web para empresas de Polanco, Reforma, Roma, Condesa, Del Valle, Nápoles, Santa Fe y Coyoacán: despachos jurídicos y contables, consultoría, servicios financieros, salud privada, inmobiliario y hospitalidad. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Diseño web para empresas de servicios',
            description:
              'Cuando vendes criterio y no producto, el sitio es la primera prueba de que sabes lo que haces. Diseñamos sitios que comunican solidez sin caer en el mismo lenguaje visual corporativo que usa todo el mercado.',
            bullets: [
              'Identidad visual aplicada a cada pantalla',
              'Casos, credenciales y equipo con jerarquía clara',
              'CMS para publicar contenido sin depender de nadie',
            ],
          },
          {
            title: 'Diseño UX/UI orientado a conversión',
            description:
              'En CDMX la mayoría del tráfico llega comparando. Diseñamos el recorrido para que el visitante encuentre rápido lo que vino a buscar y llegue a un contacto sin fricción ni pasos de más.',
            bullets: [
              'Research y mapeo del recorrido de decisión',
              'Wireframes y prototipos navegables',
              'Design system y librería de componentes',
            ],
          },
          {
            title: 'Landing pages para campañas de paga',
            description:
              'Si inviertes en Google Ads o en Meta, mandar el tráfico a tu página de inicio es tirar presupuesto. Diseñamos landings por campaña, alineadas al anuncio y listas para medir el costo por lead.',
            bullets: [
              'Una página por campaña y por intención de búsqueda',
              'Mensaje alineado al anuncio que trajo la visita',
              'Eventos de conversión y medición configurados',
            ],
          },
          {
            title: 'Rediseño de sitios en plantilla',
            description:
              'Si tu sitio se hizo con una plantilla comprada, probablemente carga lento, se parece a otros mil y es difícil de editar. Lo migramos a una base propia sin perder el posicionamiento que ya ganaste.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Migración con plan de redirecciones 301',
              'SEO técnico on-page y monitoreo posterior',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo diseñamos tu sitio',
        description:
          'Cuatro etapas, con entregable y aprobación en cada una. Sabes qué recibes y cuándo desde la propuesta.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Analizamos tu mercado en la Ciudad de México: quién más ofrece lo mismo, cómo se presenta y qué espacio queda libre. De ahí sale la postura del sitio, que es lo que después permite no verse como los demás.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Definimos qué contenido va, en qué orden y hacia dónde empuja cada sección. Aprobamos la estructura en wireframes antes de decidir un solo color, porque corregir ahí cuesta minutos y corregirlo después cuesta semanas.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla desde tu identidad: tipografía, color, fotografía y componentes reutilizables. El objetivo es que tu sitio se distinga en un mercado donde casi todos usan el mismo repertorio visual.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos. Dejamos configurada la analítica y los eventos de conversión, para que desde el primer día sepas qué canal te trae clientes.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en la Ciudad de México',
        description: 'Lo que nos preguntan las empresas de CDMX antes de decidir.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en CDMX?',
            answer:
              'En la Ciudad de México vas a encontrar cotizaciones desde unos pocos miles de pesos hasta cifras de agencia grande, y la diferencia casi nunca está en el número de páginas: está en si alguien diseñó algo para tu negocio o te acomodaron una plantilla. Nosotros cotizamos por alcance —secciones, si el UX/UI parte de cero, integraciones y producción de contenido— y entregamos precio cerrado después de una llamada de diagnóstico. Sin costos ocultos y sin cobrar por hora.',
          },
          {
            question: '¿Cómo hago que mi sitio destaque en un mercado tan competido?',
            answer:
              'Casi todos los sitios de un mismo giro en CDMX dicen lo mismo con las mismas palabras y las mismas fotos de banco. La diferencia no la hace un diseño más llamativo, la hace tener una postura: qué haces distinto, para quién no eres, qué te atreves a decir que tu competencia no. Esa definición sale en la etapa de descubrimiento y es la que después ordena todo el diseño.',
          },
          {
            question: '¿Trabajan con despachos, consultoras y empresas de servicios profesionales?',
            answer:
              'Sí, es buena parte de nuestro trabajo. En servicios profesionales el sitio no cierra la venta, pero sí decide si te consideran: el cliente compara tres o cuatro opciones antes de escribir. El trabajo es que tu experiencia, tus casos y tu equipo se lean con credibilidad y sin el tono acartonado que usa la mayoría del sector.',
          },
          {
            question: 'Mi sitio está en WordPress con una plantilla, ¿pueden migrarlo?',
            answer:
              'Sí. Primero levantamos qué URLs reciben tráfico hoy y por qué búsquedas apareces, y con eso armamos el plan de redirecciones 301. Después reconstruimos el sitio sobre una base propia, más rápida y sin la carga de plugins que arrastra una plantilla. Migrar bien conserva el posicionamiento; migrar sin inventario previo es la forma más común de perderlo.',
          },
          {
            question: '¿En qué son distintos de una agencia grande de CDMX?',
            answer:
              'Somos un equipo chico y eso tiene dos caras. Las personas que diseñan tu proyecto son las mismas que te presentan el avance: no hay ejecutivo de cuenta traduciendo entre tú y quien hace el trabajo. A cambio no tomamos veinte proyectos al mismo tiempo, así que los tiempos de arranque dependen de la agenda. Si buscas una estructura de agencia grande con equipo dedicado a tiempo completo, no somos eso.',
          },
          {
            question: '¿Miden resultados después del lanzamiento?',
            answer:
              'Sí. Todo sitio se entrega con analítica y eventos de conversión configurados, así que puedes ver cuántas visitas llegan, de qué canal y cuántas terminan en un contacto. Sin esa medición no hay forma honesta de saber si el sitio funciona, y sin ese dato cualquier optimización posterior es adivinar.',
          },
        ],
      },
      socialProof: {
        heading: 'Proyectos que hablan por el trabajo',
        description:
          'Identidad, sitios web y experiencias digitales para empresas e instituciones mexicanas, varias de ellas con base en la Ciudad de México.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en CDMX',
      breadcrumb: 'Diseño Web CDMX',
      serviceName: 'Diseño Web y UX/UI en la Ciudad de México',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web de una empresa en la Ciudad de México.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Mexico City | Aurin',
        description:
          'Web and UX/UI design agency in Mexico City. Websites and landing pages for law firms, consultancies, clinics, and service companies.',
        keywords:
          'web design Mexico City, UX UI design Mexico City, web design agency CDMX, website design Mexico City, landing pages Mexico City, website redesign Mexico City',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Mexico City',
        titleLead: 'Web Design in',
        titleAccent: 'Mexico City',
        description:
          'In Mexico City your competition is one click away and looks exactly like you. We design sites that hold up a premium rate: the kind that make a visitor understand within ten seconds why you are worth paying instead of the firm next door.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: '0', label: 'templates: every site is designed from scratch' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Mexico City',
        intro:
          'We design websites for companies in Polanco, Reforma, Roma, Condesa, Del Valle, Nápoles, Santa Fe, and Coyoacán: law and accounting firms, consultancies, financial services, private healthcare, real estate, and hospitality. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Web design for service companies',
            description:
              'When you sell judgment rather than product, the site is the first proof that you know what you are doing. We design sites that communicate substance without falling into the same corporate visual language everyone else uses.',
            bullets: [
              'Visual identity applied to every screen',
              'Cases, credentials, and team with clear hierarchy',
              'A CMS to publish content on your own',
            ],
          },
          {
            title: 'Conversion-driven UX/UI design',
            description:
              'Most Mexico City traffic arrives comparing options. We design the journey so visitors quickly find what they came for and reach a contact point with no friction and no extra steps.',
            bullets: [
              'Research and decision journey mapping',
              'Wireframes and clickable prototypes',
              'Design system and component library',
            ],
          },
          {
            title: 'Landing pages for paid campaigns',
            description:
              'If you invest in Google Ads or Meta, sending that traffic to your homepage burns budget. We design one landing per campaign, aligned to the ad and ready to measure cost per lead.',
            bullets: [
              'One page per campaign and search intent',
              'Message matched to the ad that brought the visit',
              'Conversion events and measurement configured',
            ],
          },
          {
            title: 'Template site redesign',
            description:
              'If your site was built on a purchased template, it probably loads slowly, looks like a thousand others, and is painful to edit. We migrate it to a custom foundation without losing the rankings you already earned.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Migration with a 301 redirect plan',
              'On-page technical SEO and post-launch monitoring',
            ],
          },
        ],
      },
      process: {
        heading: 'How we design your site',
        description:
          'Four stages, each with a deliverable and an approval. You know what you get and when, straight from the proposal.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We analyze your market in Mexico City: who else offers the same thing, how they present it, and what space is left open. That is where the site’s point of view comes from, and it is what later lets you not look like everyone else.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We define what content goes in, in what order, and where each section pushes. We approve the structure in wireframes before deciding a single color, because fixing it there costs minutes and fixing it later costs weeks.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen from your identity: typography, color, photography, and reusable components. The goal is for your site to stand apart in a market where almost everyone draws from the same visual repertoire.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device. We leave analytics and conversion events configured, so from day one you know which channel brings you clients.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Mexico City',
        description: 'What Mexico City companies ask us before deciding.',
        items: [
          {
            question: 'How much does web design cost in Mexico City?',
            answer:
              'In Mexico City you will find quotes ranging from a few thousand pesos to large-agency figures, and the difference is rarely the number of pages: it is whether someone designed something for your business or fitted you into a template. We quote by scope —sections, whether UX/UI starts from scratch, integrations, and content production— and deliver a fixed price after a diagnostic call. No hidden costs, no hourly billing.',
          },
          {
            question: 'How do I make my site stand out in such a crowded market?',
            answer:
              'Almost every site in a given industry in Mexico City says the same thing with the same words and the same stock photos. The difference is not a flashier design, it is having a point of view: what you do differently, who you are not for, what you are willing to say that your competition will not. That definition comes out of discovery and is what organizes the whole design afterward.',
          },
          {
            question: 'Do you work with law firms, consultancies, and professional service companies?',
            answer:
              'Yes, a good share of our work. In professional services the site does not close the sale, but it decides whether you get considered: the client compares three or four options before writing to anyone. The job is making your experience, your cases, and your team read as credible without the stiff tone most of the sector uses.',
          },
          {
            question: 'My site runs on a WordPress template. Can you migrate it?',
            answer:
              'Yes. First we inventory which URLs get traffic today and which searches you appear for, and that becomes the 301 redirect plan. Then we rebuild the site on a custom foundation, faster and without the plugin weight a template drags along. Migrating properly preserves rankings; migrating without that inventory is the most common way to lose them.',
          },
          {
            question: 'How are you different from a large Mexico City agency?',
            answer:
              'We are a small team, and that cuts both ways. The people designing your project are the same ones presenting the progress: no account executive translating between you and whoever does the work. In exchange we do not take on twenty projects at once, so start dates depend on the calendar. If you need large-agency structure with a full-time dedicated team, that is not us.',
          },
          {
            question: 'Do you measure results after launch?',
            answer:
              'Yes. Every site ships with analytics and conversion events configured, so you can see how many visits arrive, from which channel, and how many end in a contact. Without that measurement there is no honest way to know whether the site works, and without that data any later optimization is guesswork.',
          },
        ],
      },
      socialProof: {
        heading: 'Projects that speak for the work',
        description:
          'Identity, website, and digital experience projects for Mexican companies and institutions, several of them based in Mexico City.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Mexico City',
      breadcrumb: 'Web Design Mexico City',
      serviceName: 'Web and UX/UI Design in Mexico City',
      howToDescription: 'Step-by-step process to design a company website in Mexico City.',
    },
  },
};
