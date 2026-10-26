import { defineSector } from './build';

/**
 * Congresos, ferias y convenciones — "página web para congreso / expo".
 * Ángulo: cada edición necesita su sitio (programa, ponentes, registro,
 * expositores, patrocinadores) y se repite cada año: conviene una base que el
 * organizador reutilice por edición en vez de rehacerla.
 */
export const congresos = defineSector({
  id: 'congresos',
  publishAt: '2026-10-26T00:00:00-06:00',
  slug: { es: 'para-congresos-y-ferias', en: 'for-conferences-and-trade-shows' },
  name: { es: 'Congresos, ferias y convenciones', en: 'Conferences and trade shows' },
  proof: ['ceiich', 'sinfonica', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web para Congresos, Ferias y Convenciones',
    seoDescription:
      'Sitios para congresos, expos y convenciones: programa, ponentes, registro, venta de stands y patrocinios, con una base que reutilizas en cada edición.',
    keywords:
      'diseño web para congresos, página web para expo, sitio web convención, página web feria comercial, sitio web para evento corporativo',
    subtitle: 'Diseño web para congresos, ferias y convenciones',
    accent: 'Congresos y Ferias',
    target: 'congresos, ferias y convenciones',
    hero: 'Un congreso vive de tres públicos que llegan al mismo sitio: asistentes que quieren el programa, expositores que comparan el costo de un stand y patrocinadores que miden el alcance. Si cada uno no encuentra lo suyo en segundos, el registro y la venta de espacios se frenan. Diseñamos sitios para tu evento que atienden a los tres y que puedes reutilizar cada año.',
    intro:
      'Diseñamos para organizadores de congresos médicos y académicos, expos comerciales, ferias de industria y convenciones de asociaciones.',
    items: [
      {
        title: 'Programa y ponentes',
        description:
          'Agenda por día, sala y tema, con fichas de ponentes. Si el programa cambia hasta el último momento, sumamos un panel para que tu equipo lo actualice.',
        bullets: ['Fichas de ponentes'],
        custom: ['Agenda filtrable', 'Panel para cambios de último momento'],
      },
      {
        title: 'Registro y boletos',
        description:
          'Registro por tipo de asistente que lleva a tu plataforma de boletos o, a la medida, se integra con ella o con tu pasarela de pago.',
        bullets: ['Tipos de acceso y tarifas'],
        custom: ['Conexión con tu plataforma de registro', 'Factura y constancias'],
      },
      {
        title: 'Expositores y patrocinios',
        description:
          'Plano de piso, paquetes de patrocinio y cifras de ediciones anteriores, para que vender un stand no dependa solo de llamadas.',
        bullets: ['Plano de stands', 'Paquetes de patrocinio', 'Formulario para expositores'],
      },
      {
        title: 'Una base para cada edición',
        description:
          'La identidad del evento y un sitio que se renueva cada año: cambias fechas, sede y programa, y conservas el historial de ediciones pasadas.',
        bullets: ['Identidad del evento', 'Archivo de ediciones anteriores', 'Sitio en dos idiomas para tu público internacional'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu evento, tus públicos y cómo registras y vendes hoy.',
    pages: 'programa, ponentes, registro, sede, expositores, patrocinadores, ediciones anteriores y contacto',
    costQuestion: '¿Cuánto cuesta la página web de un congreso o una expo?',
    costScope:
      'si es un evento o una serie de ediciones, cuántas secciones de programa y si se conecta con tu plataforma de registro',
    faqs: [
      {
        question: '¿El sitio sirve para varias ediciones?',
        answer:
          'Sí. Lo diseñamos para que cada año se cambien fechas, sede, programa y patrocinadores sin rehacerlo (nosotros con mantenimiento o tu equipo con un panel a la medida), y para que las ediciones pasadas queden como archivo que da confianza a nuevos expositores.',
      },
      {
        question: '¿Pueden conectar el registro con la plataforma que ya usamos?',
        answer:
          'En la mayoría de los casos sí, como desarrollo a la medida. Revisamos tu plataforma de boletos o de pagos en la llamada y diseñamos el registro alrededor de ella para que se sienta parte del evento.',
      },
      {
        question: '¿También diseñan la identidad del evento?',
        answer:
          'Sí. Diseñamos el logo y la identidad del congreso o la feria, con aplicaciones para gafetes, lonas y redes según el alcance.',
      },
    ],
    aiSubject: 'mi congreso',
    remoteWho: 'organizadores de congresos y ferias',
    proofText:
      'Proyectos reales de sitios web e identidad en educación e investigación, cultura y turismo. Es el estándar con el que trabajaríamos tu evento.',
    howTo: 'el sitio web de un congreso o una feria',
    lead: {
      heading: 'Hablemos de tu evento',
      description:
        'Cuéntanos qué evento organizas, para cuántos asistentes y cuándo es la siguiente edición. Te contactaremos para entenderlo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Organizamos un congreso médico anual con 2,000 asistentes y 80 expositores.',
    },
  },
  en: {
    seoTitle: 'Web Design for Conferences, Trade Shows and Conventions',
    seoDescription:
      'Websites for conferences, expos, and conventions: agenda, speakers, registration, booth and sponsorship sales, built on a base you reuse every edition.',
    keywords:
      'conference website design, trade show website, expo website design, convention website, event website agency',
    subtitle: 'Web design for conferences, trade shows, and conventions',
    accent: 'Conferences & Trade Shows',
    target: 'conferences and trade shows',
    hero: 'A conference serves three audiences on the same website: attendees looking for the agenda, exhibitors comparing booth costs, and sponsors measuring reach. If each one cannot find what they need in seconds, registration and space sales slow down. We design event websites that serve all three and that you can reuse every year.',
    intro:
      'We design for organizers of medical and academic conferences, industry trade shows, business expos, and association conventions.',
    items: [
      {
        title: 'Agenda and speakers',
        description:
          'Agenda by day, room, and track, with speaker profiles. If the agenda changes until the last minute, we add a panel so your team can update it.',
        bullets: ['Speaker profiles'],
        custom: ['Filterable agenda', 'Panel for last-minute changes'],
      },
      {
        title: 'Registration and tickets',
        description:
          'Registration by attendee type that links to your ticketing platform or, as a custom build, integrates with it or your payment gateway.',
        bullets: ['Pass types and rates'],
        custom: ['Connection to your registration platform', 'Invoices and certificates'],
      },
      {
        title: 'Exhibitors and sponsors',
        description:
          'Floor plan, sponsorship packages, and figures from past editions, so selling a booth does not depend only on phone calls.',
        bullets: ['Booth floor plan', 'Sponsorship packages', 'Exhibitor inquiry form'],
      },
      {
        title: 'A base for every edition',
        description:
          'The event identity and a site that renews each year: you change dates, venue, and agenda, and keep an archive of past editions.',
        bullets: ['Event identity', 'Past editions archive', 'Bilingual site for international audiences'],
      },
    ],
    diagnosis: 'A call to learn about your event, your audiences, and how you register and sell today.',
    pages: 'agenda, speakers, registration, venue, exhibitors, sponsors, past editions, and contact',
    costQuestion: 'How much does a conference or trade show website cost?',
    costScope:
      'whether it is a single event or a recurring series, how many agenda sections, and whether it connects to your registration platform',
    faqs: [
      {
        question: 'Can the site be reused for future editions?',
        answer:
          'Yes. We design it so dates, venue, agenda, and sponsors change every year without rebuilding it (by us on a maintenance plan, or by your team with a custom panel), and past editions stay as an archive that builds trust with new exhibitors.',
      },
      {
        question: 'Can you connect registration to the platform we already use?',
        answer:
          'In most cases, yes, as custom development. We review your ticketing or payment platform on the call and design registration around it so it feels part of the event.',
      },
      {
        question: 'Do you also design the event identity?',
        answer:
          'Yes. We design the logo and identity of the conference or show, with applications for badges, banners, and social media based on scope.',
      },
    ],
    aiSubject: 'my conference',
    remoteWho: 'conference and trade show organizers',
    proofText:
      'Real website and identity work in education and research, culture, and tourism. It is the standard we would bring to your event.',
    howTo: 'a conference or trade show website',
    lead: {
      heading: 'Let’s talk about your event',
      description:
        'Tell us what event you organize, how many attendees it has, and when the next edition is. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run an annual medical conference with 2,000 attendees and 80 exhibitors.',
    },
  },
});
