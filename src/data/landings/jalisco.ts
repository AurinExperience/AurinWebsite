import type { Landing } from './types';

/**
 * Jalisco — palabra clave objetivo: "diseño web Jalisco", con Guadalajara y su
 * zona metropolitana como mercado principal dentro del contenido.
 *
 * Ángulo propio: producto digital y marcas de consumo. Es la plaza con más
 * freelance del país, así que el copy compara de frente contra esa opción en
 * vez de esquivarla. Nada de industria (Querétaro) ni de servicios
 * profesionales (CDMX).
 */
export const jalisco: Landing = {
  id: 'jalisco',
  status: 'live',
  slug: { es: 'jalisco', en: 'jalisco' },
  region: 'Jalisco',
  geo: { latitude: 20.6597, longitude: -103.3496 },
  areas: ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá', 'Tlajomulco de Zúñiga', 'Puerto Vallarta'],
  phoneSample: '+52 33 1234 5678',
  proof: ['ancient', 'fruitAcademy', 'ideograma'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Jalisco | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Jalisco. Sitios, e-commerce y producto digital para marcas, startups y tecnológicas de Guadalajara y Zapopan.',
        keywords:
          'diseño web Jalisco, diseño web Guadalajara, agencia de diseño web Jalisco, diseño web Zapopan, e-commerce Guadalajara, diseño de producto digital Jalisco',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Jalisco',
        titleLead: 'Diseño Web en',
        titleAccent: 'Jalisco',
        description:
          'Jalisco tiene el mejor talento digital del país y también los sitios web más parecidos entre sí. Diseñamos sitios, tiendas en línea y producto digital para marcas de Guadalajara, Zapopan y Puerto Vallarta que ya tienen algo que decir y necesitan que se les note antes del primer scroll.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: '2-8', label: 'semanas del brief al sitio en línea, según el alcance' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Jalisco',
        intro:
          'Diseñamos sitios web para marcas y empresas de Guadalajara, Zapopan, Tlaquepaque, Tlajomulco y Puerto Vallarta: consumo y retail, alimentos y bebidas, tecnología y software, inmobiliario, y estudios creativos. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Sitio web de marca',
            description:
              'Para marcas de consumo, el sitio es una extensión del producto. Diseñamos la experiencia completa desde tu identidad: fotografía, ritmo, tipografía y detalle, sin caer en el mismo molde visual que usa toda la categoría.',
            bullets: [
              'Dirección de arte aplicada a cada pantalla',
              'Historia de marca con jerarquía y ritmo propios',
              'CMS para publicar campañas sin depender de nadie',
            ],
          },
          {
            title: 'Tienda en línea y catálogo',
            description:
              'El diseño de una tienda se juzga por una sola cosa: cuánta gente llega al final. Ordenamos catálogo, filtros y checkout para quitar los pasos donde hoy se está cayendo la venta.',
            bullets: [
              'Arquitectura de catálogo y filtros útiles',
              'Ficha de producto y checkout sin fricción',
              'Medición del embudo de compra completa',
            ],
          },
          {
            title: 'Diseño de producto digital',
            description:
              'Si estás construyendo una app o una plataforma, el diseño no termina en la pantalla de inicio. Trabajamos flujos, estados y componentes para que tu equipo de desarrollo tenga con qué construir.',
            bullets: [
              'User flows, wireframes y prototipos navegables',
              'Design system documentado y entregado a tu equipo',
              'Estados vacíos, de carga y de error, no solo el caso feliz',
            ],
          },
          {
            title: 'Rediseño y optimización web',
            description:
              'Si tu sitio se ve bien pero no vende, el problema casi nunca es estético. Auditamos el recorrido completo para encontrar en qué paso exacto se está perdiendo la gente.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Rediseño visual y de contenidos',
              'SEO técnico on-page y migración segura',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo diseñamos tu proyecto',
        description:
          'Cuatro etapas con entregable y aprobación en cada una. Sin briefs eternos ni presentaciones de relleno.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Revisamos tu categoría en Guadalajara y en el resto del país: cómo se ve tu competencia, qué lenguaje visual está agotado y dónde hay espacio para que tu marca se distinga. De ahí sale la dirección del proyecto.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Definimos el recorrido completo y lo armamos en wireframes navegables. Validamos estructura y flujos antes de tocar una sola decisión de dirección de arte.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla y armamos el sistema de componentes que la sostiene. Si tu equipo va a seguir trabajando el producto, te lo entregamos documentado, no como archivos sueltos.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos. Configuramos analítica y eventos, lanzamos y medimos para seguir ajustando con datos.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Jalisco',
        description: 'Lo que nos preguntan las marcas tapatías antes de decidir.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Jalisco?',
            answer:
              'Depende del alcance: número de pantallas, si hay tienda en línea, si el UX/UI parte de cero y si producimos contenido. En Guadalajara vas a encontrar de todo, desde propuestas de unos miles de pesos hasta cifras de agencia grande. Nosotros cotizamos por alcance, con precio cerrado después de una llamada de diagnóstico, y todo desglosado para que veas exactamente qué estás pagando.',
          },
          {
            question: '¿Por qué contratarlos a ustedes y no a un freelance?',
            answer:
              'Guadalajara tiene freelancers excelentes y para muchos proyectos son la opción correcta: cuestan menos y responden rápido. La diferencia aparece cuando el proyecto necesita research, arquitectura, diseño y desarrollo al mismo tiempo, o cuando tiene que seguir vivo un año después. Un equipo sostiene esas piezas en paralelo y no desaparece si esa persona toma otro trabajo. Si tu proyecto es una página sencilla, un buen freelance te va a salir mejor y te lo decimos de frente.',
          },
          {
            question: '¿Diseñan producto digital, no solo sitios web?',
            answer:
              'Sí. Diseñamos interfaces de aplicaciones y plataformas: flujos, estados, componentes y el design system que los mantiene consistentes. Es un trabajo distinto al de un sitio, porque el entregable no es una pantalla bonita sino documentación con la que tu equipo de desarrollo pueda construir sin adivinar.',
          },
          {
            question: '¿Trabajan con marcas de consumo y e-commerce?',
            answer:
              'Sí, es buena parte de lo que hacemos. En consumo el diseño carga con la marca: la fotografía, el ritmo y el detalle comunican precio y calidad antes de que el visitante lea una palabra. Y en e-commerce lo que se mide es distinto: no cuántas visitas llegan, sino cuántas terminan la compra y en qué paso exacto se caen las demás.',
          },
          {
            question: '¿Nos entregan el design system para que nuestro equipo siga solo?',
            answer:
              'Sí, y lo consideramos parte del trabajo, no un extra. Entregamos la librería de componentes documentada, con tokens de color, tipografía y espaciado, y una sesión de traspaso con tu equipo. La idea es que puedas seguir creciendo el producto sin llamarnos por cada pantalla nueva.',
          },
          {
            question: '¿Atienden Puerto Vallarta y el resto de Jalisco?',
            answer:
              'Sí. Trabajamos a distancia con toda la Zona Metropolitana de Guadalajara y con Puerto Vallarta, donde el perfil de proyecto suele ser distinto: hotelería, restaurantes y clientes internacionales, casi siempre con sitio en dos idiomas. El proceso es el mismo, cambia el tipo de audiencia para la que se diseña.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Identidad, sitios web y experiencias digitales para marcas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Guadalajara.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Jalisco',
      breadcrumb: 'Diseño Web Jalisco',
      serviceName: 'Diseño Web y UX/UI en Jalisco',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de una marca en Jalisco.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Jalisco | Aurin',
        description:
          'Web and UX/UI design agency for Jalisco. Websites, e-commerce, and digital product for brands, startups, and tech firms in Guadalajara.',
        keywords:
          'web design Jalisco, web design Guadalajara, web design agency Jalisco, web design Zapopan, e-commerce design Guadalajara, digital product design Mexico',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Jalisco',
        titleLead: 'Web Design in',
        titleAccent: 'Jalisco',
        description:
          'Jalisco has the best digital talent in Mexico and also the most interchangeable websites. We design sites, online stores, and digital product for brands in Guadalajara, Zapopan, and Puerto Vallarta that already have something to say and need it to land before the first scroll.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: '2-8', label: 'weeks from brief to a live site, depending on scope' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Jalisco',
        intro:
          'We design websites for brands and companies in Guadalajara, Zapopan, Tlaquepaque, Tlajomulco, and Puerto Vallarta: consumer and retail, food and beverage, technology and software, real estate, and creative studios. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Brand website',
            description:
              'For consumer brands the site is an extension of the product. We design the full experience from your identity: photography, pacing, typography, and detail, without falling into the same visual mold the whole category uses.',
            bullets: [
              'Art direction applied to every screen',
              'Brand story with its own hierarchy and pacing',
              'A CMS to publish campaigns on your own',
            ],
          },
          {
            title: 'Online store and catalog',
            description:
              'A store’s design is judged on one thing: how many people reach the end. We organize catalog, filters, and checkout to remove the steps where the sale is currently dropping.',
            bullets: [
              'Catalog architecture and filters that actually help',
              'Frictionless product page and checkout',
              'Full purchase funnel measurement',
            ],
          },
          {
            title: 'Digital product design',
            description:
              'If you are building an app or a platform, design does not end at the home screen. We work flows, states, and components so your development team has something real to build from.',
            bullets: [
              'User flows, wireframes, and clickable prototypes',
              'Documented design system handed to your team',
              'Empty, loading, and error states, not just the happy path',
            ],
          },
          {
            title: 'Redesign and web optimization',
            description:
              'If your site looks good but does not sell, the problem is rarely aesthetic. We audit the full journey to find the exact step where people are dropping off.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Visual and content redesign',
              'On-page technical SEO and safe migration',
            ],
          },
        ],
      },
      process: {
        heading: 'How we design your project',
        description:
          'Four stages, each with a deliverable and an approval. No endless briefs, no filler presentations.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We review your category in Guadalajara and nationally: how your competition looks, which visual language is exhausted, and where there is room for your brand to stand apart. That sets the project’s direction.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We define the full journey and build it into clickable wireframes. We validate structure and flows before touching a single art direction decision.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen and build the component system behind it. If your team will keep working on the product, we hand it over documented, not as loose files.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device. We configure analytics and events, launch, and measure so we can keep adjusting with data.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Jalisco',
        description: 'What Guadalajara brands ask us before deciding.',
        items: [
          {
            question: 'How much does web design cost in Jalisco?',
            answer:
              'It depends on scope: number of screens, whether there is an online store, whether UX/UI starts from scratch, and whether we produce content. In Guadalajara you will find everything from a few thousand pesos to large-agency figures. We quote by scope, with a fixed price after a diagnostic call, fully itemized so you see exactly what you are paying for.',
          },
          {
            question: 'Why hire you instead of a freelancer?',
            answer:
              'Guadalajara has excellent freelancers and for many projects they are the right call: lower cost, fast turnaround. The difference shows when a project needs research, architecture, design, and development at once, or when it has to stay alive a year later. A team holds those pieces in parallel and does not disappear if one person takes another job. If your project is a simple page, a good freelancer will serve you better and we will say so plainly.',
          },
          {
            question: 'Do you design digital product, not just websites?',
            answer:
              'Yes. We design app and platform interfaces: flows, states, components, and the design system that keeps them consistent. It is different work from a website, because the deliverable is not a pretty screen but documentation your development team can build from without guessing.',
          },
          {
            question: 'Do you work with consumer brands and e-commerce?',
            answer:
              'Yes, a large part of what we do. In consumer, design carries the brand: photography, pacing, and detail communicate price and quality before the visitor reads a word. And in e-commerce what gets measured is different: not how many visits arrive, but how many finish the purchase and at which exact step the rest drop off.',
          },
          {
            question: 'Do you hand over the design system so our team can continue?',
            answer:
              'Yes, and we consider it part of the work, not an add-on. We deliver the documented component library, with color, typography, and spacing tokens, plus a handoff session with your team. The point is that you can keep growing the product without calling us for every new screen.',
          },
          {
            question: 'Do you cover Puerto Vallarta and the rest of Jalisco?',
            answer:
              'Yes. We work remotely with the whole Guadalajara metro area and with Puerto Vallarta, where the project profile tends to be different: hospitality, restaurants, and international clients, almost always with a two-language site. The process is the same, what changes is the audience being designed for.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for Mexican brands and institutions. That is the standard we would bring to your project in Guadalajara.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Jalisco',
      breadcrumb: 'Web Design Jalisco',
      serviceName: 'Web and UX/UI Design in Jalisco',
      howToDescription: 'Step-by-step process to design a brand website in Jalisco.',
    },
  },
};
