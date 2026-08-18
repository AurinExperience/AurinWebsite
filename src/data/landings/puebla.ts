import type { Landing } from './types';

/**
 * Puebla — palabra clave objetivo: "diseño web Puebla".
 *
 * Ángulo propio: empresas familiares que pasan a la siguiente generación y
 * necesitan modernizarse sin perder lo que las hizo funcionar. Es un tema de
 * sucesión y de marca heredada, no de nearshoring ni de saturación de mercado.
 */
export const puebla: Landing = {
  id: 'puebla',
  status: 'live',
  slug: { es: 'puebla', en: 'puebla' },
  region: 'Puebla',
  geo: { latitude: 19.0414, longitude: -98.2063 },
  areas: ['Puebla', 'San Andrés Cholula', 'San Pedro Cholula', 'Atlixco', 'Tehuacán', 'Amozoc'],
  phoneSample: '+52 222 123 4567',
  proof: ['inglesIndividual', 'grupoEstrella', 'fruitAcademy'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Puebla | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Puebla. Sitios web para empresas familiares, comercios, escuelas y despachos de Puebla, Cholula y Atlixco.',
        keywords:
          'diseño web Puebla, diseño UX UI Puebla, agencia de diseño web Puebla, páginas web Puebla, diseño web Cholula, rediseño de sitio web Puebla',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Puebla',
        titleLead: 'Diseño Web en',
        titleAccent: 'Puebla',
        description:
          'Muchas de las mejores empresas de Puebla llevan tres generaciones funcionando y siguen vendiendo por recomendación. El problema aparece cuando el cliente nuevo las busca en internet y encuentra un sitio de 2014. Rediseñamos esa presencia sin borrar lo que construyeron.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: '2-8', label: 'semanas del brief al sitio en línea, según el alcance' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Puebla',
        intro:
          'Diseñamos sitios web para empresas de Puebla, San Andrés y San Pedro Cholula, Atlixco, Tehuacán y Amozoc: comercio y distribución, manufactura, alimentos, escuelas y universidades, despachos y clínicas. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Rediseño de sitio con historia',
            description:
              'Cuando una empresa tiene décadas de trayectoria, el rediseño no consiste en borrar y empezar de nuevo. Consiste en separar lo que es marca —y hay que conservar— de lo que es solo un sitio viejo, y traducir la primera a un lenguaje que el cliente de hoy reconozca.',
            bullets: [
              'Auditoría de lo que sí está funcionando hoy',
              'Actualización visual sin romper el reconocimiento de marca',
              'Migración con redirecciones para no perder posicionamiento',
            ],
          },
          {
            title: 'Sitio web corporativo a medida',
            description:
              'Sitios construidos desde tu identidad y no desde una plantilla. Diseñamos la experiencia completa: estructura, contenido, interfaz y desarrollo, para que el sitio cargue el peso que hoy carga la recomendación.',
            bullets: [
              'Diseño responsivo en todos los dispositivos',
              'Arquitectura de contenido y navegación',
              'CMS para que edites sin depender de nadie',
            ],
          },
          {
            title: 'Diseño UX/UI',
            description:
              'Investigamos a quién le vendes antes de diseñar. En empresas con años de operación suele haber una brecha entre cómo se explican internamente y lo que el cliente nuevo necesita entender para decidir.',
            bullets: [
              'Research y entrevistas con tus clientes reales',
              'Arquitectura de información y wireframes',
              'Design system y librería de componentes',
            ],
          },
          {
            title: 'Landing pages y campañas',
            description:
              'Una página, un objetivo. Útil cuando abres una sucursal, lanzas una línea nueva o arrancas periodo de inscripciones y necesitas medir aparte cuánto trae cada campaña.',
            bullets: [
              'Estructura orientada a un solo objetivo',
              'Formulario corto y directo',
              'Medición lista para campañas de paga',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Cuatro etapas con entregable y aprobación en cada una. Explicadas para que las pueda revisar toda la familia, no solo el que sabe de tecnología.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Entendemos la historia de la empresa, qué la distingue y por qué te compran hoy. Revisamos también a los competidores en Puebla y qué está buscando en Google el cliente que todavía no te conoce.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Ordenamos el contenido y definimos qué va en cada sección, en wireframes que puedes revisar sin necesidad de imaginarte nada. Aprobamos la estructura antes de decidir un solo color.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla con tu identidad. Si la marca tiene años, trabajamos con lo que ya reconocen tus clientes en lugar de cambiarlo todo de golpe, para que la actualización no se sienta como otra empresa.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos. Configuramos analítica, lanzamos con el plan de redirecciones puesto y capacitamos a tu equipo.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Puebla',
        description: 'Lo que nos preguntan las empresas poblanas antes de empezar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Puebla?',
            answer:
              'Depende del alcance: cuántas secciones lleva, si el diseño parte de cero, si hay catálogo o integraciones y si nosotros producimos contenido. Una landing page es el punto de entrada más accesible y un sitio corporativo escala según pantallas y funcionalidad. Después de una llamada te enviamos una cotización cerrada y desglosada, sin costos ocultos.',
          },
          {
            question: 'Nuestra empresa es familiar y llevamos años con el mismo sitio, ¿por dónde empezamos?',
            answer:
              'Por una auditoría, no por el diseño. Primero identificamos qué del sitio actual todavía te trae clientes: qué páginas reciben visitas, por qué búsquedas apareces y qué información es la que la gente realmente consulta. Ese inventario define qué se conserva y qué se rehace. Empezar por el diseño sin ese paso es la forma más común de perder lo que ya funcionaba.',
          },
          {
            question: 'Vendemos casi todo por recomendación, ¿de verdad necesitamos sitio?',
            answer:
              'La recomendación sigue siendo tu mejor canal y el sitio no la reemplaza: la confirma. Cuando alguien te recomienda, lo primero que hace el interesado es buscarte. Si encuentra un sitio lento y desactualizado, esa recomendación pierde fuerza; si encuentra algo serio, la recomendación se cierra sola. El sitio no está ahí para conseguir clientes nuevos de la nada, sino para no perder los que ya te iban a buscar.',
          },
          {
            question: '¿Trabajan con escuelas y universidades?',
            answer:
              'Sí. El reto ahí es que el sitio le habla a dos audiencias al mismo tiempo, los padres y los estudiantes, que buscan cosas distintas y deciden distinto. La arquitectura tiene que resolver ambos caminos sin que ninguno se sienta secundario, y el calendario del proyecto se planea alrededor del periodo de inscripciones.',
          },
          {
            question: '¿Perderemos nuestro posicionamiento actual al cambiar de sitio?',
            answer:
              'No si se migra bien. Antes de tocar nada levantamos el inventario de URLs con tráfico y de las búsquedas por las que ya apareces, y con eso armamos el plan de redirecciones 301. Después del lanzamiento monitoreamos posiciones para detectar cualquier caída a tiempo. Los rediseños que pierden posicionamiento casi siempre se saltaron ese inventario.',
          },
          {
            question: '¿Podemos actualizar el sitio nosotros después?',
            answer:
              'Sí, y es parte de la entrega. Integramos un CMS para que cambies textos, fotos, precios y avisos sin conocimientos técnicos, con capacitación para las personas de tu equipo que lo vayan a usar. También ofrecemos planes de mantenimiento si prefieres no ocuparte.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Identidad, sitios web y experiencias digitales para empresas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Puebla.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Puebla',
      breadcrumb: 'Diseño Web Puebla',
      serviceName: 'Diseño Web y UX/UI en Puebla',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de una empresa en Puebla.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Puebla | Aurin',
        description:
          'Web and UX/UI design agency for Puebla. Websites for family businesses, retailers, schools, and firms in Puebla, Cholula, and Atlixco.',
        keywords:
          'web design Puebla, UX UI design Puebla, web design agency Puebla, websites Puebla, web design Cholula, website redesign Puebla',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Puebla',
        titleLead: 'Web Design in',
        titleAccent: 'Puebla',
        description:
          'Many of the best companies in Puebla have been running for three generations and still sell by referral. The problem shows up when a new client looks them up online and finds a site from 2014. We redesign that presence without erasing what they built.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: '2-8', label: 'weeks from brief to a live site, depending on scope' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Puebla',
        intro:
          'We design websites for companies in Puebla, San Andrés and San Pedro Cholula, Atlixco, Tehuacán, and Amozoc: retail and distribution, manufacturing, food, schools and universities, professional firms, and clinics. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Redesign of a site with history',
            description:
              'When a company has decades behind it, a redesign is not about wiping the slate. It is about separating what is brand —and must be kept— from what is merely an old website, and translating the former into a language today’s client recognizes.',
            bullets: [
              'Audit of what is actually working today',
              'Visual update without breaking brand recognition',
              'Migration with redirects so rankings survive',
            ],
          },
          {
            title: 'Custom corporate website',
            description:
              'Sites built from your identity rather than a template. We design the full experience: structure, content, interface, and development, so the site carries the weight referrals carry today.',
            bullets: [
              'Responsive design across every device',
              'Content architecture and navigation',
              'A CMS so you can edit without depending on anyone',
            ],
          },
          {
            title: 'UX/UI design',
            description:
              'We research who you sell to before designing. In companies with years of operation there is usually a gap between how they explain themselves internally and what a new client needs to understand in order to decide.',
            bullets: [
              'Research and interviews with your real clients',
              'Information architecture and wireframes',
              'Design system and component library',
            ],
          },
          {
            title: 'Landing pages and campaigns',
            description:
              'One page, one goal. Useful when you open a branch, launch a new line, or start an enrollment period and need to measure separately what each campaign brings in.',
            bullets: [
              'Structure built around a single objective',
              'Short, direct form',
              'Measurement ready for paid campaigns',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'Four stages, each with a deliverable and an approval. Explained so the whole family can review them, not only whoever handles technology.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We learn the company’s history, what sets it apart, and why people buy from you today. We also review competitors in Puebla and what the client who does not know you yet is searching for on Google.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We organize the content and define what goes in each section, in wireframes you can review without having to imagine anything. We approve the structure before deciding a single color.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen with your identity. If the brand has years behind it, we work with what your clients already recognize instead of changing everything at once, so the update does not read as a different company.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device. We configure analytics, launch with the redirect plan in place, and train your team.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Puebla',
        description: 'What Puebla companies ask us before starting.',
        items: [
          {
            question: 'How much does web design cost in Puebla?',
            answer:
              'It depends on scope: how many sections, whether design starts from scratch, whether there is a catalog or integrations, and whether we produce content. A landing page is the most accessible entry point and a corporate site scales with screens and functionality. After a call we send a fixed, itemized quote with no hidden costs.',
          },
          {
            question: 'We are a family business with the same site for years. Where do we start?',
            answer:
              'With an audit, not with design. First we identify what in the current site still brings you clients: which pages get visits, which searches you appear for, and which information people actually consult. That inventory defines what is kept and what gets rebuilt. Starting with design without that step is the most common way to lose what was already working.',
          },
          {
            question: 'We sell almost entirely by referral. Do we really need a site?',
            answer:
              'Referrals are still your best channel and the site does not replace them: it confirms them. When someone recommends you, the first thing the prospect does is look you up. If they find a slow, outdated site, the referral loses force; if they find something solid, it closes itself. The site is not there to conjure new clients out of nowhere, but to avoid losing the ones already coming to find you.',
          },
          {
            question: 'Do you work with schools and universities?',
            answer:
              'Yes. The challenge there is that the site speaks to two audiences at once, parents and students, who look for different things and decide differently. The architecture has to serve both paths without either feeling secondary, and the project calendar gets planned around the enrollment period.',
          },
          {
            question: 'Will we lose our current rankings when we change sites?',
            answer:
              'Not if the migration is done properly. Before touching anything we inventory the URLs with traffic and the searches you already appear for, and that becomes the 301 redirect plan. After launch we monitor positions so any drop gets caught early. Redesigns that lose rankings almost always skipped that inventory.',
          },
          {
            question: 'Can we update the site ourselves afterward?',
            answer:
              'Yes, and it is part of the delivery. We integrate a CMS so you can change copy, photos, prices, and notices without technical knowledge, with training for the people on your team who will use it. We also offer maintenance plans if you would rather not deal with it.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for Mexican companies and institutions. That is the standard we would bring to your project in Puebla.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Puebla',
      breadcrumb: 'Web Design Puebla',
      serviceName: 'Web and UX/UI Design in Puebla',
      howToDescription: 'Step-by-step process to design a company website in Puebla.',
    },
  },
};
