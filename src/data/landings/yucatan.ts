import type { Landing } from './types';

/**
 * Yucatán — palabra clave objetivo: "diseño web Yucatán", con Mérida como
 * ciudad principal dentro del contenido.
 *
 * Ángulo propio: negocios nuevos y marcas jóvenes que arrancan de cero en un
 * estado que crece por migración interna. El tema es empezar bien desde el
 * principio, no rediseñar una marca con historia (eso es Puebla).
 */
export const yucatan: Landing = {
  id: 'yucatan',
  status: 'live',
  slug: { es: 'yucatan', en: 'yucatan' },
  region: 'Yucatán',
  geo: { latitude: 20.9674, longitude: -89.5926 },
  areas: ['Mérida', 'Progreso', 'Valladolid', 'Kanasín', 'Umán', 'Tizimín'],
  phoneSample: '+52 999 123 4567',
  proof: ['grupoEstrella', 'elite', 'ideograma'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Yucatán | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Yucatán. Sitios web y landing pages para inmobiliarias, restaurantes y servicios de Mérida y Progreso.',
        keywords:
          'diseño web Yucatán, diseño web Mérida, agencia de diseño web Mérida, páginas web Yucatán, diseño UX UI Mérida, sitios web Progreso',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Yucatán',
        titleLead: 'Diseño Web en',
        titleAccent: 'Yucatán',
        description:
          'A Yucatán llega gente nueva cada mes y con ella negocios que arrancan de cero. La ventaja de empezar ahora es que puedes hacerlo bien desde el principio, en vez de heredar un sitio hecho a medias que en dos años haya que rehacer.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: '2-8', label: 'semanas del brief al sitio en línea, según el alcance' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Yucatán',
        intro:
          'Diseñamos sitios web para negocios de Mérida, Progreso, Valladolid, Kanasín, Umán y Tizimín: inmobiliario y desarrollos, restaurantes y hospedaje, salud y bienestar, servicios profesionales y comercio. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Marca y sitio para negocio nuevo',
            description:
              'Si vas empezando, el sitio y la identidad se diseñan juntos o no encajan después. Definimos cómo se ve, cómo suena y cómo se explica tu negocio, y lo bajamos a un sitio que puede crecer contigo sin rehacerse.',
            bullets: [
              'Identidad aplicada a cada pantalla desde el día uno',
              'Estructura que admite crecer sin empezar de nuevo',
              'CMS para que publiques tú sin depender de nadie',
            ],
          },
          {
            title: 'Sitios para inmobiliaria y desarrollos',
            description:
              'Una parte importante de tus prospectos está viendo desde fuera del estado y no puede ir a conocer el lugar. El sitio tiene que resolver esa distancia: ubicación, entorno, avance de obra y una forma clara de dejar sus datos.',
            bullets: [
              'Fichas de desarrollo, plantas y ubicación',
              'Galería y recorrido que sustituyen la visita',
              'Formularios que califican al prospecto antes de la llamada',
            ],
          },
          {
            title: 'Landing pages de alta conversión',
            description:
              'Una página, un objetivo. Es el punto de entrada más accesible cuando estás arrancando y necesitas empezar a recibir contactos antes de tener un sitio completo.',
            bullets: [
              'Estructura orientada a un solo objetivo',
              'Formulario corto y directo',
              'Medición lista para campañas de paga',
            ],
          },
          {
            title: 'Diseño UX/UI',
            description:
              'Investigamos a tu audiencia antes de dibujar una pantalla. En un mercado que crece rápido, quién es tu cliente cambia más seguido de lo que crees, y el sitio tiene que hablarle a quien te compra hoy.',
            bullets: [
              'Research, user flows y arquitectura de información',
              'Wireframes y prototipos navegables',
              'Design system y librería de componentes',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Cuatro etapas con entregable en cada una, pensadas para que puedas arrancar sin tener todo definido desde el inicio.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Entendemos qué vendes, a quién y qué te distingue de los negocios que ya están. Revisamos la competencia en Mérida y qué está buscando en Google el cliente al que le quieres llegar.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Definimos qué secciones lleva el sitio hoy y cuáles se van a agregar después. Armamos wireframes navegables y validamos la estructura antes de invertir tiempo en lo visual.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla con tu identidad: tipografía, color, fotografía y componentes reutilizables. Si la marca apenas se está definiendo, aquí es donde termina de tomar forma.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos. Configuramos analítica, lanzamos y te capacitamos para que puedas seguir publicando por tu cuenta.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Yucatán',
        description: 'Lo que nos preguntan los negocios de Mérida y del estado antes de empezar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Yucatán?',
            answer:
              'Depende del alcance: cuántas secciones lleva, si el diseño parte de cero, si hay reservas o pagos en línea y si producimos contenido. Una landing page es el punto de entrada más accesible y un sitio completo escala según lo que necesites. Después de una llamada te enviamos una cotización cerrada y desglosada, sin costos ocultos.',
          },
          {
            question: 'Apenas voy arrancando, ¿me conviene un sitio completo o una landing page?',
            answer:
              'Casi siempre una landing page. Cuando el negocio todavía está encontrando su mensaje, un sitio de diez secciones se llena de contenido que después vas a querer cambiar. Una landing bien hecha te deja recibir contactos y aprender qué le interesa a tu cliente, y esa información es la que después define cómo debe ser el sitio completo. Lo construimos para que crezca hacia allá, no para tirarlo.',
          },
          {
            question: '¿Trabajan con inmobiliarias y desarrollos?',
            answer:
              'Sí. El reto particular en Yucatán es que buena parte de los prospectos está fuera de Yucatán y decide sin poder visitar. Eso obliga a que el sitio resuelva la distancia: entorno, ubicación real, avance de obra y suficiente material visual para que alguien se anime a dejar sus datos desde otra ciudad.',
          },
          {
            question: '¿Me ayudan también con la identidad de marca?',
            answer:
              'Sí. De hecho llevamos más de veinte años haciendo branding, y en un negocio nuevo conviene resolverlo junto con el sitio: si la identidad se define después, el sitio termina rehaciéndose. Podemos trabajar desde cero o partir de lo que ya tengas si la marca ya existe.',
          },
          {
            question: 'Están en Morelos, ¿cómo trabajan con un cliente en Mérida?',
            answer:
              'Todo el proceso corre a distancia: videollamadas, entregables en línea y comentarios directos sobre el diseño. Es como trabajamos con la mayoría de nuestros clientes fuera de Morelos y no cambia el resultado. Lo único que pedimos es alguien de tu lado que pueda revisar y aprobar en tiempo.',
          },
          {
            question: '¿El sitio necesita versión en inglés?',
            answer:
              'Depende de a quién le vendes. Si tu cliente es local, no hace falta y agregarlo solo duplica el trabajo de mantenerlo. Si vendes inmobiliario, hospedaje o servicios a extranjeros que se están mudando a Yucatán, sí conviene, y en ese caso se monta como una estructura paralela con URLs propias, no como una traducción encima.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Identidad, sitios web y experiencias digitales para marcas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Yucatán.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Yucatán',
      breadcrumb: 'Diseño Web Yucatán',
      serviceName: 'Diseño Web y UX/UI en Yucatán',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un negocio en Yucatán.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Yucatán | Aurin',
        description:
          'Web and UX/UI design agency for Yucatán. Websites and landing pages for real estate, restaurants, and services in Mérida and Progreso.',
        keywords:
          'web design Yucatán, web design Mérida, web design agency Mérida, websites Yucatán, UX UI design Mérida, real estate website Mexico',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Yucatán',
        titleLead: 'Web Design in',
        titleAccent: 'Yucatán',
        description:
          'New people arrive in Yucatán every month, and with them businesses starting from zero. The advantage of starting now is that you can do it right from the beginning, instead of inheriting a half-built site you will have to redo in two years.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: '2-8', label: 'weeks from brief to a live site, depending on scope' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Yucatán',
        intro:
          'We design websites for businesses in Mérida, Progreso, Valladolid, Kanasín, Umán, and Tizimín: real estate and developments, restaurants and lodging, health and wellness, professional services, and retail. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Brand and site for a new business',
            description:
              'If you are just starting, the site and the identity get designed together or they will not fit later. We define how your business looks, sounds, and explains itself, and bring it down into a site that can grow with you without being rebuilt.',
            bullets: [
              'Identity applied to every screen from day one',
              'Structure that allows growth without starting over',
              'A CMS so you can publish without depending on anyone',
            ],
          },
          {
            title: 'Sites for real estate and developments',
            description:
              'A meaningful share of your prospects are looking from outside the state and cannot visit. The site has to close that distance: location, surroundings, construction progress, and a clear way to leave their details.',
            bullets: [
              'Development pages, floor plans, and location',
              'Gallery and walkthrough that stand in for the visit',
              'Forms that qualify the prospect before the call',
            ],
          },
          {
            title: 'High-converting landing pages',
            description:
              'One page, one goal. It is the most accessible entry point when you are starting out and need to receive inquiries before having a full site.',
            bullets: [
              'Structure built around a single objective',
              'Short, direct form',
              'Measurement ready for paid campaigns',
            ],
          },
          {
            title: 'UX/UI design',
            description:
              'We research your audience before drawing a screen. In a fast-growing market, who your client is changes more often than you expect, and the site has to speak to whoever buys from you today.',
            bullets: [
              'Research, user flows, and information architecture',
              'Wireframes and clickable prototypes',
              'Design system and component library',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'Four stages, each with a deliverable, designed so you can start without having everything defined up front.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We learn what you sell, to whom, and what sets you apart from the businesses already there. We review competitors in Mérida and what the client you want to reach is searching for on Google.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We define which sections the site needs today and which get added later. We build clickable wireframes and validate the structure before investing time in visuals.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen with your identity: typography, color, photography, and reusable components. If the brand is still being defined, this is where it finishes taking shape.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device. We configure analytics, launch, and train you so you can keep publishing on your own.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Yucatán',
        description: 'What businesses in Mérida and across the state ask us before starting.',
        items: [
          {
            question: 'How much does web design cost in Yucatán?',
            answer:
              'It depends on scope: how many sections, whether design starts from scratch, whether there are bookings or online payments, and whether we produce content. A landing page is the most accessible entry point and a full site scales with what you need. After a call we send a fixed, itemized quote with no hidden costs.',
          },
          {
            question: 'I am just starting. Should I get a full site or a landing page?',
            answer:
              'Almost always a landing page. When the business is still finding its message, a ten-section site fills up with content you will want to change later. A well-built landing lets you receive inquiries and learn what your client cares about, and that information is what later defines the full site. We build it to grow into that, not to be thrown away.',
          },
          {
            question: 'Do you work with real estate and developments?',
            answer:
              'Yes. The specific challenge in Yucatán is that many prospects are outside Yucatán and decide without being able to visit. That forces the site to close the distance: surroundings, real location, construction progress, and enough visual material for someone to leave their details from another city.',
          },
          {
            question: 'Can you help with brand identity too?',
            answer:
              'Yes. We have been doing branding for more than twenty years, and in a new business it is worth solving alongside the site: if identity gets defined afterward, the site ends up being rebuilt. We can work from scratch or start from what you already have if the brand exists.',
          },
          {
            question: 'You are based in Morelos. How do you work with a client in Mérida?',
            answer:
              'The whole process runs remotely: video calls, deliverables online, and comments directly on the design. It is how we work with most of our clients outside Morelos and it does not change the result. All we ask is someone on your side who can review and approve on time.',
          },
          {
            question: 'Does the site need an English version?',
            answer:
              'It depends who you sell to. If your client is local, it is unnecessary and only doubles the maintenance work. If you sell real estate, lodging, or services to foreigners relocating to Yucatán, then yes, and in that case it is built as a parallel structure with its own URLs, not a translation layered on top.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for Mexican brands and institutions. That is the standard we would bring to your project in Yucatán.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Yucatán',
      breadcrumb: 'Web Design Yucatán',
      serviceName: 'Web and UX/UI Design in Yucatán',
      howToDescription: 'Step-by-step process to design a business website in Yucatán.',
    },
  },
};
