import type { Landing } from './types';

/**
 * Quintana Roo — palabra clave objetivo: "diseño web Quintana Roo", con Cancún
 * y la Riviera Maya como mercado principal dentro del contenido.
 *
 * Ángulo propio: turismo internacional y reserva directa. El tema es quitarle
 * comisión a las OTAs, no el bilingüismo corporativo (eso es Querétaro) ni el
 * mercado transfronterizo (eso es Baja California).
 */
export const quintanaRoo: Landing = {
  id: 'quintana-roo',
  status: 'live',
  slug: { es: 'quintana-roo', en: 'quintana-roo' },
  region: 'Quintana Roo',
  geo: { latitude: 21.1619, longitude: -86.8515 },
  areas: ['Cancún', 'Playa del Carmen', 'Tulum', 'Cozumel', 'Puerto Morelos', 'Chetumal'],
  phoneSample: '+52 998 123 4567',
  proof: ['elRollo', 'fruitAcademy', 'grupoEstrella'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Quintana Roo | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Quintana Roo. Sitios para hoteles, tours y restaurantes de Cancún, Playa del Carmen y Tulum que venden directo.',
        keywords:
          'diseño web Quintana Roo, diseño web Cancún, agencia de diseño web Quintana Roo, páginas web Playa del Carmen, sitios web para hoteles, diseño web Tulum',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Quintana Roo',
        titleLead: 'Diseño Web en',
        titleAccent: 'Quintana Roo',
        description:
          'Cada reserva que entra por una OTA te cuesta entre 15 y 25 por ciento de comisión. Diseñamos sitios para hoteles, tours y restaurantes de Cancún, Playa del Carmen y Tulum que le dan al viajero una razón para reservar contigo directo, en su idioma y desde el celular.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: 'ES/EN', label: 'sitios en dos idiomas para viajeros internacionales' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Quintana Roo',
        intro:
          'Diseñamos sitios web para negocios de Cancún, Playa del Carmen, Tulum, Cozumel, Puerto Morelos y Chetumal: hoteles boutique, operadores de tours y buceo, restaurantes, spas, desarrollos inmobiliarios y servicios para residentes extranjeros.',
        items: [
          {
            title: 'Sitio de hotel con reserva directa',
            description:
              'Un sitio de hospedaje se juzga por una sola cifra: qué porcentaje de tus reservas entra sin pagar comisión. Diseñamos la experiencia para que el viajero que ya te encontró termine reservando aquí y no en la pestaña de al lado.',
            bullets: [
              'Fotografía y disponibilidad sin frenar la carga',
              'Motor de reservas integrado sin quiebre visual',
              'Argumentos de reserva directa donde el viajero decide',
            ],
          },
          {
            title: 'Sitio en dos idiomas para viajero internacional',
            description:
              'Tu visitante llega desde Estados Unidos, Canadá o Europa, compara en inglés y decide en minutos. La versión en inglés no puede ser una traducción automática pegada encima: es un sitio paralelo, con su propia estructura y sus propias URLs.',
            bullets: [
              'Arquitectura ES/EN con hreflang correcto',
              'Precios, políticas y llegadas explicadas para quien no vive aquí',
              'Contenido pensado para búsquedas en inglés',
            ],
          },
          {
            title: 'Landing pages para temporada y campañas',
            description:
              'Una página por temporada o por paquete, con un solo objetivo. Útil para temporada alta, puentes, bodas y grupos, o para cualquier campaña de anuncios que necesites medir aparte.',
            bullets: [
              'Estructura orientada a un solo objetivo',
              'Formulario o reserva directa sin pasos de más',
              'Medición lista para campañas de paga',
            ],
          },
          {
            title: 'Rediseño y optimización web',
            description:
              'Si tu sitio tarda en abrir con la conexión de un celular en la playa, ya perdiste al visitante. Auditamos velocidad, recorrido y contenido para encontrar dónde se está cayendo la reserva.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Optimización de imágenes y carga en redes móviles',
              'SEO técnico on-page y migración segura',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Cuatro etapas con entregable en cada una, planeadas alrededor de tu temporada alta y no encima de ella.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Revisamos de dónde llegan hoy tus huéspedes o clientes, qué porcentaje viene de OTAs y qué buscan en Google antes de reservar. También miramos cómo se presentan los competidores directos en Cancún y la Riviera Maya.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Definimos el recorrido completo del viajero, desde que te descubre hasta que confirma. Armamos wireframes en español e inglés y validamos la estructura antes de decidir nada visual.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla alrededor de tu fotografía, que en este giro es el activo que más vende. Cuidamos que se vea igual de bien en una pantalla grande que en un celular con señal irregular.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio optimizado para velocidad, SEO y todos los dispositivos, en dos idiomas. Conectamos el motor de reservas, configuramos la analítica y medimos cuántas reservas entran directo.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Quintana Roo',
        description: 'Lo que nos preguntan los negocios de Cancún y la Riviera Maya.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño de una página web en Quintana Roo?',
            answer:
              'Depende del alcance: número de secciones, si el sitio va en dos idiomas, si hay que integrar motor de reservas y si producimos fotografía y textos. Una landing page es el punto de entrada más accesible y un sitio de hotel completo escala según habitaciones, paquetes e integraciones. Después de una llamada te enviamos una cotización cerrada, sin costos ocultos.',
          },
          {
            question: '¿Pueden ayudarme a recibir más reservas directas y depender menos de las OTAs?',
            answer:
              'Es justo el objetivo con el que diseñamos estos sitios. Las OTAs te traen visibilidad y no conviene pelearse con ellas, pero el viajero que ya vio tu hotel ahí muchas veces te busca por nombre antes de reservar: ese es el momento que se puede ganar. El trabajo consiste en que al llegar a tu sitio encuentre más información, mejor experiencia y una razón concreta para reservar contigo, con el motor de reservas integrado sin que parezca otra página.',
          },
          {
            question: '¿El sitio va en inglés además de español?',
            answer:
              'En Quintana Roo casi siempre es indispensable. Pero no se trata de traducir textos: montamos una estructura paralela con URLs propias por idioma y etiquetas hreflang correctas, para que Google muestre la versión en inglés a quien busca en inglés. Además cambia el contenido, no solo el idioma: quien viene de fuera necesita explicaciones de traslados, políticas y formas de pago que un visitante nacional da por hechas.',
          },
          {
            question: '¿Trabajan con operadores de tours, buceo y restaurantes?',
            answer:
              'Sí. El patrón se repite en todo el giro: el visitante decide desde el celular, muchas veces ya estando de viaje y con poca señal. Eso obliga a un sitio ligero, con disponibilidad y precios claros, y con la reserva o el contacto a un toque. La fotografía carga el peso de la venta, así que se optimiza sin que pierda calidad.',
          },
          {
            question: 'Están en Morelos, ¿cómo trabajan con un cliente en Cancún?',
            answer:
              'Todo el proceso está pensado para trabajarse a distancia: videollamadas, entregables en línea y comentarios directos sobre el diseño. Es como trabajamos con la mayoría de nuestros clientes fuera de Morelos. Lo único que pedimos es un responsable de tu lado que pueda revisar y aprobar en tiempo, porque ahí es donde se atoran los proyectos.',
          },
          {
            question: '¿Puedo actualizar precios y temporadas yo mismo?',
            answer:
              'Sí. Integramos un CMS para que cambies precios, paquetes, fotos y disponibilidad sin tocar código y sin depender de nosotros, con capacitación incluida. En un negocio de temporada eso no es un lujo: si cada cambio de tarifa depende de un tercero, el sitio siempre va tarde.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Identidad, sitios web y experiencias digitales para marcas e instituciones de México. Ese es el estándar con el que trabajaríamos tu proyecto en Quintana Roo.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Quintana Roo',
      breadcrumb: 'Diseño Web Quintana Roo',
      serviceName: 'Diseño Web y UX/UI en Quintana Roo',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web de un hotel o negocio turístico en Quintana Roo.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Quintana Roo | Aurin',
        description:
          'Web and UX/UI design agency for Quintana Roo. Websites for hotels, tours, and restaurants in Cancún, Playa del Carmen, and Tulum that sell direct.',
        keywords:
          'web design Quintana Roo, web design Cancún, hotel website design Mexico, web design Playa del Carmen, direct booking website, web design Tulum',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Quintana Roo',
        titleLead: 'Web Design in',
        titleAccent: 'Quintana Roo',
        description:
          'Every booking that comes through an OTA costs you 15 to 25 percent in commission. We design sites for hotels, tours, and restaurants in Cancún, Playa del Carmen, and Tulum that give the traveler a reason to book with you directly, in their language and from their phone.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: 'ES/EN', label: 'two-language sites for international travelers' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Quintana Roo',
        intro:
          'We design websites for businesses in Cancún, Playa del Carmen, Tulum, Cozumel, Puerto Morelos, and Chetumal: boutique hotels, tour and dive operators, restaurants, spas, real estate developments, and services for foreign residents.',
        items: [
          {
            title: 'Hotel site with direct booking',
            description:
              'A lodging site is judged on one number: what share of your bookings arrives without paying commission. We design the experience so the traveler who already found you finishes the booking here and not in the next tab.',
            bullets: [
              'Photography and availability without slowing the load',
              'Booking engine integrated with no visual break',
              'Direct-booking arguments where the traveler decides',
            ],
          },
          {
            title: 'Two-language site for international travelers',
            description:
              'Your visitor arrives from the United States, Canada, or Europe, compares in English, and decides in minutes. The English version cannot be machine translation pasted on top: it is a parallel site with its own structure and its own URLs.',
            bullets: [
              'ES/EN architecture with correct hreflang',
              'Prices, policies, and arrivals explained for someone not from here',
              'Content written for English-language searches',
            ],
          },
          {
            title: 'Landing pages for seasons and campaigns',
            description:
              'One page per season or package, one goal. Useful for high season, holidays, weddings and groups, or any ad campaign you need to measure separately.',
            bullets: [
              'Structure built around a single objective',
              'Form or direct booking with no extra steps',
              'Measurement ready for paid campaigns',
            ],
          },
          {
            title: 'Redesign and web optimization',
            description:
              'If your site takes a while to open on a phone connection at the beach, the visitor is already gone. We audit speed, journey, and content to find where the booking is being lost.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Image and mobile-network load optimization',
              'On-page technical SEO and safe migration',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'Four stages, each with a deliverable, planned around your high season rather than on top of it.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We review where your guests or clients come from today, what share arrives via OTAs, and what they search for on Google before booking. We also look at how direct competitors in Cancún and the Riviera Maya present themselves.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We map the full traveler journey, from discovery to confirmation. We build wireframes in Spanish and English and validate the structure before deciding anything visual.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen around your photography, which in this industry is the asset that sells. We make sure it looks as good on a large screen as on a phone with patchy signal.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site optimized for speed, SEO, and every device, in two languages. We connect the booking engine, configure analytics, and measure how many bookings come in direct.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Quintana Roo',
        description: 'What businesses in Cancún and the Riviera Maya ask us.',
        items: [
          {
            question: 'How much does web design cost in Quintana Roo?',
            answer:
              'It depends on scope: number of sections, whether the site runs in two languages, whether a booking engine has to be integrated, and whether we produce photography and copy. A landing page is the most accessible entry point and a full hotel site scales with rooms, packages, and integrations. After a call we send a fixed quote with no hidden costs.',
          },
          {
            question: 'Can you help me get more direct bookings and rely less on OTAs?',
            answer:
              'That is exactly what these sites are designed for. OTAs bring visibility and fighting them is not the point, but a traveler who saw your hotel there often searches for you by name before booking: that is the moment you can win. The work is making sure that when they land on your site they find more information, a better experience, and a concrete reason to book with you, with the booking engine integrated so it does not feel like a different site.',
          },
          {
            question: 'Does the site run in English as well as Spanish?',
            answer:
              'In Quintana Roo it is almost always essential. But it is not about translating text: we build a parallel structure with dedicated URLs per language and correct hreflang tags, so Google shows the English version to people searching in English. The content changes too, not just the language: someone traveling from abroad needs transfers, policies, and payment methods explained in ways a domestic visitor takes for granted.',
          },
          {
            question: 'Do you work with tour operators, dive shops, and restaurants?',
            answer:
              'Yes. The pattern repeats across the industry: the visitor decides from a phone, often already traveling and with weak signal. That forces a light site with clear availability and pricing, and booking or contact one tap away. Photography carries the sale, so it gets optimized without losing quality.',
          },
          {
            question: 'You are based in Morelos. How do you work with a client in Cancún?',
            answer:
              'The whole process is built to run remotely: video calls, deliverables online, and comments directly on the design. It is how we work with most of our clients outside Morelos. All we ask is a project owner on your side who can review and approve on time, because that is where projects stall.',
          },
          {
            question: 'Can I update prices and seasons myself?',
            answer:
              'Yes. We integrate a CMS so you can change prices, packages, photos, and availability without touching code and without depending on us, training included. In a seasonal business that is not a luxury: if every rate change depends on a third party, the site is always behind.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Identity, website, and digital experience projects for Mexican brands and institutions. That is the standard we would bring to your project in Quintana Roo.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Quintana Roo',
      breadcrumb: 'Web Design Quintana Roo',
      serviceName: 'Web and UX/UI Design in Quintana Roo',
      howToDescription:
        'Step-by-step process to design a hotel or tourism business website in Quintana Roo.',
    },
  },
};
