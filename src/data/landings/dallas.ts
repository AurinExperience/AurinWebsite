import type { Landing } from './types';

/**
 * Dallas–Fort Worth — palabra clave objetivo: "diseño web Dallas" (ES) y "web
 * design for Hispanic businesses Dallas" (EN).
 *
 * Ángulo propio: el negocio que está creciendo. DFW es el metro que más gente
 * suma en EE. UU., y eso se nota en negocios latinos que abren segunda
 * sucursal, pasan de un camión a una flota o de despacho de una persona a
 * equipo. Giros: servicios profesionales (taxes, aseguranzas, bienes raíces,
 * despachos), restaurantes con varias ubicaciones y negocios de servicios.
 * El problema que resolvemos es que la marca y el sitio se quedaron en el
 * tamaño de cuando abrieron.
 */
export const dallas: Landing = {
  id: 'dallas',
  status: 'live',
  country: 'US',
  slug: { es: 'dallas', en: 'dallas' },
  region: 'Texas',
  geo: { latitude: 32.7767, longitude: -96.797 },
  areas: [
    'Dallas',
    'Fort Worth',
    'Irving',
    'Garland',
    'Grand Prairie',
    'Arlington',
    'Mesquite',
    'Oak Cliff',
  ],
  phoneSample: '+1 214 555 0123',
  proof: ['fortrade', 'galicia', 'monetix'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Dallas y Fort Worth para Negocios Latinos | Aurin',
        description:
          'Diseño web y branding en Dallas–Fort Worth para negocios latinos que están creciendo: taxes, aseguranzas, bienes raíces, restaurantes y servicios. Sitios bilingües.',
        keywords:
          'diseño web Dallas, diseño de páginas web Dallas Texas, diseño web Fort Worth, página web para oficina de taxes, página web para agencia de aseguranzas, branding Dallas',
      },
      hero: {
        subtitle: 'Diseño web y branding en Dallas',
        titleLead: 'Diseño Web en',
        titleAccent: 'Dallas',
        description:
          'Abriste la segunda sucursal, contrataste más gente o ya compites por clientes más grandes, pero tu logo y tu sitio siguen siendo los del primer día. Diseñamos la marca y el sitio bilingüe de negocios latinos en Dallas y Fort Worth que ya crecieron y necesitan verse de ese tamaño.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: 'ES/EN', label: 'para crecer con los dos mercados de Dallas' },
          { value: 'Web + Marca', label: 'diseño, desarrollo y branding en un mismo equipo' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y branding en Dallas–Fort Worth',
        intro:
          'Trabajamos con negocios de Dallas, Fort Worth, Irving, Garland, Grand Prairie, Arlington, Mesquite y Oak Cliff: oficinas de taxes y contabilidad, agencias de aseguranzas, bienes raíces, despachos legales, restaurantes con varias ubicaciones y empresas de servicios.',
        items: [
          {
            title: 'Marca para un negocio que creció',
            description:
              'Lo que funcionó con un local y cinco empleados empieza a quedar chico con tres ubicaciones o con clientes corporativos. Rediseñamos tu identidad para que aguante el tamaño que ya tienes y el que viene, sin perder lo que tus clientes reconocen.',
            bullets: [
              'Identidad visual completa con manual de uso',
              'Una marca consistente en todas tus ubicaciones',
              'Aplicaciones de marca según el alcance del proyecto',
            ],
          },
          {
            title: 'Sitios para taxes, aseguranzas y servicios profesionales',
            description:
              'Antes de dejarte sus papeles, su dinero o los datos de su familia, tu cliente quiere saber con quién está tratando. Diseñamos un sitio que presenta a tu equipo, tus servicios y la forma de agendar con claridad, para que llegue a la primera cita con más confianza.',
            bullets: [
              'Tu equipo, licencias y certificaciones a la vista',
              'Cada servicio explicado en palabras sencillas',
              'Citas o reservas en línea',
            ],
          },
          {
            title: 'Sitios para negocios con varias sucursales',
            description:
              'Si tienes más de una sucursal, tu cliente necesita encontrar rápido la que le queda cerca: dirección, horario, teléfono y cómo llegar. Organizamos esa información en el sitio para que cada ubicación sea fácil de encontrar.',
            bullets: [
              'Información de cada sucursal fácil de encontrar',
              'Dirección, horario, teléfono y mapa',
              'Enlace al perfil de Google de cada ubicación',
            ],
          },
          {
            title: 'Sitio bilingüe para crecer en los dos mercados',
            description:
              'En Dallas tu siguiente cliente puede ser latino y buscar en inglés, o no ser latino y descubrirte por tu reputación. Con tu sitio en los dos idiomas no pierdes a ninguno.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Selector de idioma fácil de encontrar',
              'Contacto por WhatsApp, llamada o formulario',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Así trabajamos un proyecto a distancia. Los detalles de cada etapa se definen en la cotización.',
        steps: [
          {
            name: 'Diagnóstico',
            text: 'Una llamada para entender hacia dónde va el negocio, no solo dónde está. Qué clientes quieres atraer en los próximos años define la marca y el sitio que hacen falta.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si la identidad ya no te representa, empezamos por ahí. Luego definimos las páginas: servicios, ubicaciones, equipo y citas.',
          },
          {
            name: 'Diseño',
            text: 'Te presentamos la propuesta, con tus socios o tu equipo si ellos también deciden, y la ajustamos contigo según lo acordado en la cotización.',
          },
          {
            name: 'Lanzamiento',
            text: 'Construimos el sitio, lo conectamos a tu dominio y lo enlazamos a los perfiles de Google de cada ubicación. Después, los cambios los puedes hacer tú: en una sesión te explicamos cómo. O, si prefieres no ocuparte, nos encargamos nosotros con un plan mensual de mantenimiento.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Dallas',
        description: 'Lo que nos preguntan los negocios de Dallas y Fort Worth antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño web o el branding en Dallas?',
            answer:
              'Depende del alcance: si es marca, sitio o las dos cosas; cuántas páginas y ubicaciones; si va en dos idiomas; y si hay citas en línea u otras integraciones. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Tengo una oficina de taxes, ¿el sitio me ayuda en temporada?',
            answer:
              'Sí, siempre que esté listo antes de que empiece. En temporada tu cliente compara rápido y agenda con quien le da más confianza y menos vueltas. Un sitio con tus servicios claros, tus credenciales y una forma fácil de agendar trabaja por ti mientras atiendes en la oficina.',
          },
          {
            question: '¿Hacen el sitio en inglés y en español?',
            answer:
              'Sí. En Dallas muchos clientes latinos buscan en inglés y otros prefieren el español, así que casi siempre recomendamos tener el sitio en los dos idiomas.',
          },
          {
            question: '¿Trabajan con negocios en Dallas?',
            answer:
              'Sí, trabajamos a distancia. La diferencia de horario con Dallas es de cero a una hora según la temporada.',
          },
          {
            question: '¿Cómo se paga?',
            answer:
              'Te cotizamos según tu proyecto. La forma de pago se acuerda en la cotización, antes de arrancar.',
          },
          {
            question: '¿Pueden mostrar todas mis sucursales en el sitio?',
            answer:
              'Sí. Según el alcance, cada sucursal puede tener su propia página o su sección, con dirección, horario, teléfono, mapa y enlace a su perfil de Google, para que tu cliente encuentre la que le queda más cerca.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Proyectos reales de identidad y sitios web en sectores como finanzas y servicios legales. Es el mismo estándar con el que trabajaríamos tu negocio en Dallas.',
      },
      nearby: {
        heading: '¿Tu negocio está en otra ciudad de Estados Unidos?',
        description: 'También diseñamos para negocios latinos en estas ciudades.',
      },
      linkLabel: 'Diseño web en Dallas',
      breadcrumb: 'Diseño Web Dallas',
      serviceName: 'Diseño Web y Branding en Dallas–Fort Worth',
      howToDescription:
        'Proceso paso a paso para rediseñar la marca y el sitio web de un negocio latino en crecimiento en Dallas–Fort Worth.',
    },
    en: {
      seo: {
        title: 'Web Design & Branding for Hispanic Businesses in Dallas | Aurin',
        description:
          'Web design and branding in Dallas–Fort Worth for growing Hispanic and Latino-owned businesses: tax offices, insurance agencies, real estate, restaurants, and services.',
        keywords:
          'web design for Hispanic businesses Dallas, Latino-owned business website Dallas, bilingual web design Dallas, branding agency Dallas Fort Worth, tax office website design, insurance agency website design',
      },
      hero: {
        subtitle: 'Web design and branding in Dallas',
        titleLead: 'Web Design in',
        titleAccent: 'Dallas',
        description:
          'You opened a second location, hired more people, or started bidding for bigger clients, but your logo and website are still the ones from day one. We design the brand and the bilingual website for growing Latino-owned businesses in Dallas and Fort Worth that need to look their actual size.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: 'EN/ES', label: 'to grow in both of Dallas’s markets' },
          { value: 'Web + Brand', label: 'design, development, and branding from one team' },
        ],
      },
      services: {
        heading: 'Web design and branding services in Dallas–Fort Worth',
        intro:
          'We work with businesses in Dallas, Fort Worth, Irving, Garland, Grand Prairie, Arlington, Mesquite, and Oak Cliff: tax and accounting offices, insurance agencies, real estate, law firms, multi-location restaurants, and service companies.',
        items: [
          {
            title: 'A brand for a business that grew',
            description:
              'What worked with one location and five employees starts to look small with three locations or corporate clients. We redesign your identity to hold the size you are now and the one coming, without losing what customers recognize.',
            bullets: [
              'Complete visual identity with usage guidelines',
              'A consistent brand across every location',
              'Brand applications based on project scope',
            ],
          },
          {
            title: 'Websites for tax, insurance, and professional services',
            description:
              'Before handing over their paperwork, their money, or their family’s information, clients want to know who they are dealing with. We design a site that presents your team, your services, and how to book an appointment clearly, so clients arrive at the first meeting with more confidence.',
            bullets: [
              'Your team, licenses, and certifications front and center',
              'Each service explained in plain language',
              'Online appointments or reservations',
            ],
          },
          {
            title: 'Websites for businesses with several locations',
            description:
              'If you have more than one location, customers need to find the one near them fast: address, hours, phone, and directions. We organize that information on the site so every location is easy to find.',
            bullets: [
              'Each location’s details easy to find',
              'Address, hours, phone, and map',
              'Link to each location’s Google Business Profile',
            ],
          },
          {
            title: 'A bilingual site to grow in both markets',
            description:
              'In Dallas your next customer might be Latino and search in English, or not be Latino at all and find you through your reputation. With your site in both languages you do not lose either.',
            bullets: [
              'The same site available in English and Spanish',
              'Easy-to-find language switcher',
              'Contact by phone, WhatsApp, or form',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description: 'How we run a project remotely. The details of each stage are set in the quote.',
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn where the business is headed, not just where it is. The customers you want to attract over the next few years define the brand and site you need.',
          },
          {
            name: 'Brand and structure',
            text: 'If the identity no longer represents you, we start there. Then we define the pages: services, locations, team, and booking.',
          },
          {
            name: 'Design',
            text: 'We present the proposal, with your partners or team if they also decide, and refine it with you as agreed in the quote.',
          },
          {
            name: 'Launch',
            text: 'We build the site, connect it to your domain, and link it to each location’s Google Business Profile. After that, you can make changes yourself: we walk you through it in one session. Or, if you would rather not deal with it, we handle it with a monthly maintenance plan.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Dallas',
        description: 'What Dallas–Fort Worth businesses ask us before signing.',
        items: [
          {
            question: 'How much does web design or branding cost in Dallas?',
            answer:
              'It depends on scope: brand, site, or both; how many pages and locations; whether it runs in two languages; and whether there is online booking or other integrations. After a call we send an itemized quote.',
          },
          {
            question: 'I run a tax office. Will a website help during tax season?',
            answer:
              'Yes, as long as it is ready before the season starts. During tax season clients compare fast and book with whoever feels most trustworthy and easiest. A site with clear services, visible credentials, and an easy way to book works for you while you are busy in the office.',
          },
          {
            question: 'Do you work with Latino-owned businesses that prefer Spanish?',
            answer:
              'Yes. We run the whole project in Spanish or English, whichever you prefer, and build the site in the languages your customers use. Plenty of Latino owners prefer to run the project in Spanish even when most of their customers search in English, and that works fine.',
          },
          {
            question: 'Do you work with businesses in Dallas?',
            answer:
              'Yes, we work remotely. The time difference with Dallas is zero to one hour depending on the season.',
          },
          {
            question: 'How does payment work?',
            answer:
              'We quote based on your project. Payment terms are agreed in the quote, before work starts.',
          },
          {
            question: 'Can you show all my locations on the site?',
            answer:
              'Yes. Depending on scope, each location can have its own page or its own section, with address, hours, phone, map, and a link to its Google Business Profile, so customers can find the one closest to them.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Real identity and website work in sectors like finance and legal services. It is the same standard we would bring to your Dallas business.',
      },
      nearby: {
        heading: 'Is your business in another U.S. city?',
        description: 'We also design for businesses in these cities.',
      },
      linkLabel: 'Web design in Dallas',
      breadcrumb: 'Web Design Dallas',
      serviceName: 'Web Design and Branding in Dallas–Fort Worth',
      howToDescription:
        'Step-by-step process to redesign the brand and website of a growing Latino-owned business in Dallas–Fort Worth.',
    },
  },
};
