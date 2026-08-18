import type { Landing } from './types';

/**
 * Baja California — palabra clave objetivo: "diseño web Baja California", con
 * Tijuana como ciudad principal dentro del contenido.
 *
 * Ángulo propio: vender del otro lado de la frontera. Cliente en Estados
 * Unidos, precios en dólares y turismo médico. El inglés aquí es el idioma del
 * comprador, no el de una matriz corporativa (Querétaro) ni el de un viajero de
 * vacaciones (Quintana Roo).
 */
export const bajaCalifornia: Landing = {
  id: 'baja-california',
  status: 'live',
  slug: { es: 'baja-california', en: 'baja-california' },
  region: 'Baja California',
  geo: { latitude: 32.5149, longitude: -117.0382 },
  areas: ['Tijuana', 'Mexicali', 'Ensenada', 'Playas de Rosarito', 'Tecate', 'San Quintín'],
  phoneSample: '+52 664 123 4567',
  proof: ['elite', 'dentol', 'fortrade'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Baja California | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Baja California. Sitios bilingües para clínicas, despachos y empresas de Tijuana, Mexicali y Ensenada.',
        keywords:
          'diseño web Baja California, diseño web Tijuana, agencia de diseño web Tijuana, sitios web bilingües, diseño web Mexicali, diseño web Ensenada',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Baja California',
        titleLead: 'Diseño Web en',
        titleAccent: 'Baja California',
        description:
          'Si buena parte de tus clientes vive del otro lado, tu sitio compite contra los de San Diego y bajo las mismas expectativas. Diseñamos sitios bilingües para clínicas, despachos y empresas de Tijuana, Mexicali y Ensenada que necesitan verse tan sólidos como cualquier opción del norte.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: 'ES/EN', label: 'sitios en dos idiomas para el mercado de ambos lados' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Baja California',
        intro:
          'Diseñamos sitios web para empresas de Tijuana, Mexicali, Ensenada, Playas de Rosarito, Tecate y San Quintín: turismo médico y dental, despachos legales de inmigración, manufactura y servicios de exportación, vitivinícola y hospitalidad. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Sitio bilingüe para el mercado estadounidense',
            description:
              'Tu paciente o cliente busca en inglés, compara con proveedores de su país y decide con los criterios de allá. La versión en inglés no puede ser una traducción: es un sitio paralelo, con su propio contenido y sus propios argumentos.',
            bullets: [
              'Arquitectura ES/EN con hreflang correcto',
              'Contenido escrito para búsquedas en inglés, no traducido',
              'Precios, garantías y proceso explicados para quien cruza',
            ],
          },
          {
            title: 'Sitios para turismo médico y dental',
            description:
              'Alguien que va a cruzar la frontera para un tratamiento decide sobre todo por confianza. El sitio tiene que resolver esa duda antes de la primera llamada: quién te atiende, con qué credenciales, cómo es el proceso y qué pasa si algo sale mal.',
            bullets: [
              'Credenciales, certificaciones y equipo médico visibles',
              'Proceso, traslado y seguimiento explicados paso a paso',
              'Agenda o solicitud de valoración sin fricción',
            ],
          },
          {
            title: 'Landing pages para campañas de paga',
            description:
              'Si inviertes en anuncios apuntando a San Diego o al sur de California, mandar ese tráfico a tu página de inicio quema presupuesto. Diseñamos landings por campaña, en el idioma del anuncio y listas para medir el costo por contacto.',
            bullets: [
              'Una página por campaña y por idioma',
              'Mensaje alineado al anuncio que trajo la visita',
              'Eventos de conversión y medición configurados',
            ],
          },
          {
            title: 'Rediseño y optimización web',
            description:
              'Si tu sitio se ve claramente hecho en México cuando tu cliente es de Estados Unidos, eso cuesta contactos aunque tu servicio sea mejor. Auditamos el recorrido completo y ajustamos lo que está frenando la decisión.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Rediseño visual y de contenidos por idioma',
              'SEO técnico on-page y migración segura',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Cuatro etapas con entregable en cada una, trabajadas a distancia y en el huso horario que te acomode.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Separamos a tus dos audiencias: la local y la del otro lado. Revisamos qué busca cada una, con quién te compara y qué objeciones aparecen antes de contratar, porque casi nunca son las mismas.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Definimos las dos estructuras en paralelo, no una traducida de la otra. Validamos en wireframes que cada idioma tenga el contenido y el orden que su audiencia necesita.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla con tu identidad y con el nivel de acabado que espera un visitante acostumbrado a sitios estadounidenses. Iteramos contigo hasta que el resultado sostenga esa comparación.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos, en ambos idiomas. Configuramos analítica y eventos de conversión separados por idioma, para que sepas de qué lado te llegan los contactos.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Baja California',
        description: 'Lo que nos preguntan las empresas de la frontera antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Baja California?',
            answer:
              'Depende del alcance: número de secciones, si el sitio va en dos idiomas, si hay agenda o integraciones y si producimos contenido. Un sitio bilingüe cuesta más que uno en un solo idioma porque son dos estructuras, no una traducción. Después de una llamada de diagnóstico te enviamos una cotización cerrada, con entregables y fechas por etapa.',
          },
          {
            question: '¿El sitio en inglés es una traducción del sitio en español?',
            answer:
              'No, y esa es la diferencia que más se nota en resultados. Un traductor cambia las palabras pero no los argumentos, y tu cliente estadounidense necesita respuestas distintas: cómo funciona el proceso cruzando, qué garantías hay, cómo se paga. Montamos una estructura paralela con URLs propias por idioma y etiquetas hreflang correctas, y el contenido en inglés se escribe pensando en cómo busca esa audiencia.',
          },
          {
            question: '¿Trabajan con clínicas dentales y de turismo médico?',
            answer:
              'Sí. Es un giro donde el diseño hace un trabajo muy concreto: bajar el miedo. Alguien que va a cruzar la frontera para un tratamiento está evaluando riesgo, no precio, y decide con lo que encuentra en tu sitio. Por eso el trabajo se concentra en credenciales, en explicar el proceso completo y en dejar clarísimo qué pasa antes, durante y después.',
          },
          {
            question: '¿Pueden manejar precios en dólares?',
            answer:
              'Sí. Se puede mostrar el precio en dólares en la versión en inglés y en pesos en la española, o dejar ambas monedas visibles según lo que te convenga comercialmente. Es una decisión de negocio más que técnica y la definimos en el descubrimiento, porque cambia cómo se estructura la información de precios en todo el sitio.',
          },
          {
            question: 'Están en Morelos, ¿cómo trabajan con un cliente en Tijuana?',
            answer:
              'Todo el proceso corre a distancia: videollamadas, entregables en línea y comentarios directos sobre el diseño. La diferencia de horario con Baja California son dos horas y ajustamos las juntas a tu agenda. Es como trabajamos con la mayoría de nuestros clientes fuera de Morelos.',
          },
          {
            question: '¿Nos ayudan a aparecer en búsquedas desde Estados Unidos?',
            answer:
              'Trabajamos el SEO técnico on-page en ambos idiomas, que es la base: estructura correcta, hreflang bien puesto, velocidad y contenido escrito para las búsquedas reales de esa audiencia. Eso te hace elegible. Competir por búsquedas desde California también depende de autoridad y de tiempo, así que lo planteamos como un trabajo continuo y no como algo que se resuelve el día del lanzamiento.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Identidad, sitios web y experiencias digitales para marcas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Baja California.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Baja California',
      breadcrumb: 'Diseño Web Baja California',
      serviceName: 'Diseño Web y UX/UI en Baja California',
      howToDescription:
        'Proceso paso a paso para diseñar un sitio web bilingüe para una empresa en Baja California.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Baja California | Aurin',
        description:
          'Web and UX/UI design agency for Baja California. Bilingual websites for clinics, firms, and companies in Tijuana, Mexicali, and Ensenada.',
        keywords:
          'web design Baja California, web design Tijuana, bilingual website design Mexico, medical tourism website, web design Mexicali, web design Ensenada',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Baja California',
        titleLead: 'Web Design in',
        titleAccent: 'Baja California',
        description:
          'If a good share of your clients live north of the border, your site competes against San Diego’s and gets held to the same expectations. We design bilingual sites for clinics, firms, and companies in Tijuana, Mexicali, and Ensenada that need to look as solid as any option up there.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: 'ES/EN', label: 'two-language sites for the market on both sides' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Baja California',
        intro:
          'We design websites for companies in Tijuana, Mexicali, Ensenada, Playas de Rosarito, Tecate, and San Quintín: medical and dental tourism, immigration law firms, manufacturing and export services, wine country, and hospitality. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'Bilingual site for the U.S. market',
            description:
              'Your patient or client searches in English, compares against providers in their own country, and decides by their criteria. The English version cannot be a translation: it is a parallel site with its own content and its own arguments.',
            bullets: [
              'ES/EN architecture with correct hreflang',
              'Content written for English searches, not translated',
              'Prices, guarantees, and process explained for someone crossing',
            ],
          },
          {
            title: 'Sites for medical and dental tourism',
            description:
              'Someone crossing the border for treatment decides mostly on trust. The site has to resolve that doubt before the first call: who treats them, with what credentials, how the process works, and what happens if something goes wrong.',
            bullets: [
              'Credentials, certifications, and medical team made visible',
              'Process, travel, and follow-up explained step by step',
              'Frictionless scheduling or consultation request',
            ],
          },
          {
            title: 'Landing pages for paid campaigns',
            description:
              'If you invest in ads targeting San Diego or Southern California, sending that traffic to your homepage burns budget. We design one landing per campaign, in the language of the ad and ready to measure cost per inquiry.',
            bullets: [
              'One page per campaign and per language',
              'Message matched to the ad that brought the visit',
              'Conversion events and measurement configured',
            ],
          },
          {
            title: 'Redesign and web optimization',
            description:
              'If your site visibly reads as made in Mexico while your client is American, that costs inquiries even when your service is better. We audit the full journey and fix what is slowing the decision.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Visual and content redesign per language',
              'On-page technical SEO and safe migration',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'Four stages, each with a deliverable, worked remotely and in whichever time zone suits you.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We separate your two audiences: the local one and the one across the border. We review what each searches for, who they compare you against, and which objections come up before hiring, because they are rarely the same.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We define both structures in parallel, not one translated from the other. We validate in wireframes that each language has the content and the order its audience needs.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen with your identity and at the level of finish a visitor used to U.S. sites expects. We iterate with you until the result holds up to that comparison.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device, in both languages. We configure analytics and conversion events separated by language, so you know which side your inquiries come from.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Baja California',
        description: 'What border companies ask us before signing.',
        items: [
          {
            question: 'How much does web design cost in Baja California?',
            answer:
              'It depends on scope: number of sections, whether the site runs in two languages, whether there is scheduling or integrations, and whether we produce content. A bilingual site costs more than a single-language one because it is two structures, not a translation. After a diagnostic call we send a fixed quote with deliverables and dates per stage.',
          },
          {
            question: 'Is the English site a translation of the Spanish one?',
            answer:
              'No, and that difference shows up most in results. A translator changes the words but not the arguments, and your American client needs different answers: how the process works crossing over, what guarantees exist, how payment works. We build a parallel structure with dedicated URLs per language and correct hreflang tags, and the English content is written around how that audience actually searches.',
          },
          {
            question: 'Do you work with dental clinics and medical tourism?',
            answer:
              'Yes. It is an industry where design does one very concrete job: lowering fear. Someone crossing the border for treatment is evaluating risk, not price, and decides on what they find on your site. So the work concentrates on credentials, explaining the full process, and making it unmistakably clear what happens before, during, and after.',
          },
          {
            question: 'Can you handle prices in dollars?',
            answer:
              'Yes. Prices can show in dollars on the English version and pesos on the Spanish one, or both currencies can stay visible depending on what works commercially. It is a business decision more than a technical one and we settle it during discovery, because it changes how pricing information is structured across the whole site.',
          },
          {
            question: 'You are based in Morelos. How do you work with a client in Tijuana?',
            answer:
              'The whole process runs remotely: video calls, deliverables online, and comments directly on the design. The time difference with Baja California is two hours and we fit meetings to your calendar. It is how we work with most of our clients outside Morelos.',
          },
          {
            question: 'Can you help us show up in searches from the United States?',
            answer:
              'We handle on-page technical SEO in both languages, which is the foundation: correct structure, proper hreflang, speed, and content written for that audience’s real searches. That makes you eligible. Competing for searches from California also depends on authority and time, so we frame it as ongoing work rather than something solved on launch day.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for Mexican brands and institutions. That is the standard we would bring to your project in Baja California.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Baja California',
      breadcrumb: 'Web Design Baja California',
      serviceName: 'Web and UX/UI Design in Baja California',
      howToDescription:
        'Step-by-step process to design a bilingual company website in Baja California.',
    },
  },
};
