import { defineSector } from './build';

/**
 * Salones de eventos y bodas — "diseño web para salones de eventos" / "página
 * web para jardín de eventos". Ángulo: las parejas y empresas comparan recintos
 * por fotos, capacidad y paquetes; la meta es la visita al lugar. Prueba: El
 * Rollo y la Sinfónica de Minería (recreación y cultura), clientes reales.
 */
export const salonesEventos = defineSector({
  id: 'salones-eventos',
  publishAt: '2026-10-20T00:00:00-06:00',
  slug: { es: 'para-salones-de-eventos', en: 'for-event-venues' },
  name: { es: 'Salones de eventos y bodas', en: 'Event and wedding venues' },
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Salones de Eventos y Bodas',
    seoDescription:
      'Páginas web para salones, jardines y recintos de eventos: espacios que lucen, paquetes claros, visitas agendadas y presencia en Google y en la IA.',
    keywords:
      'diseño web para salones de eventos, página web jardín de eventos, sitio web recinto para bodas, página web hacienda para eventos, marketing de eventos',
    subtitle: 'Diseño web para salones de eventos y bodas',
    accent: 'Salones de Eventos',
    target: 'salones de eventos',
    hero: 'Una boda o un evento corporativo se decide viendo el lugar. Antes de visitarte, la pareja o la empresa compara fotos, capacidades y paquetes de varios recintos, y cada vez más le pregunta a una IA. Diseñamos sitios que enamoran del espacio y convierten esa búsqueda en una visita agendada.',
    stat: { value: 'Recreación', label: 'ya trabajamos con marcas como El Rollo y la Sinfónica de Minería' },
    intro:
      'Trabajamos con salones, jardines, haciendas y recintos para bodas y eventos corporativos. Cada página web para salón de eventos se diseña para que tu espacio se vea como se siente estar ahí.',
    items: [
      {
        title: 'Espacios que enamoran',
        description:
          'Galerías grandes por espacio, montajes y temporadas, que cargan rápido aun con muchas fotos de buena calidad.',
        bullets: ['Galería por espacio', 'Montajes y capacidades', 'Video y recorridos'],
      },
      {
        title: 'Paquetes y visitas',
        description:
          'Paquetes y servicios explicados con claridad, y un formulario para solicitar fecha o agendar una visita al recinto.',
        bullets: ['Paquetes y servicios', 'Solicitud de fecha', 'Agenda de visitas y WhatsApp'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Las parejas buscan recintos en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan tu espacio y te puedan recomendar.',
        bullets: ['Datos estructurados del recinto', 'Páginas por tipo de evento', 'Contenido que la IA puede citar'],
      },
      {
        title: 'Branding para recintos',
        description:
          'Una identidad cuidada hace que tu recinto se recuerde y se vea igual de especial en tu sitio, tus invitaciones y tus redes.',
        bullets: ['Logo e identidad con manual', 'Brochure y papelería según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una llamada para entender tus espacios, tus paquetes y cómo llegan hoy tus clientes.',
    pages: 'espacios, tipos de evento, paquetes, galería, visitas y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de un salón de eventos?',
    costScope:
      'cuántos espacios y paquetes, si incluye video o recorrido virtual, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Conviene publicar precios de los paquetes?',
        answer:
          'Depende de tu forma de vender. Podemos mostrar paquetes con precio, desde un precio base o solo por solicitud; lo definimos contigo según cómo cierras.',
      },
      {
        question: '¿El sitio puede recibir solicitudes de fecha?',
        answer:
          'Sí. Incluimos un formulario para solicitar fecha o visita que te llega por correo o WhatsApp, con los datos que necesitas para responder.',
      },
    ],
    aiSubject: 'mi salón de eventos',
    remoteWho: 'salones de eventos',
    proofText:
      'Proyectos reales de identidad y sitios web en recreación, cultura y marca. El mismo cuidado que ponemos en cada proyecto es el que pondríamos en tu recinto.',
    howTo: 'el sitio web de un salón de eventos',
    lead: {
      heading: 'Hablemos de tu recinto',
      description:
        'Cuéntanos qué espacios tienes y qué eventos quieres atraer. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un jardín para bodas de 300 personas y queremos más visitas agendadas.',
    },
  },
  en: {
    seoTitle: 'Web Design for Event and Wedding Venues',
    seoDescription:
      'Websites for event halls, gardens, and wedding venues: spaces that shine, clear packages, booked visits, and visibility on Google and AI search.',
    keywords:
      'web design for event venues, wedding venue website, event hall website, banquet hall website, event marketing',
    subtitle: 'Web design for event and wedding venues',
    accent: 'Event Venues',
    target: 'event venues',
    hero: 'A wedding or corporate event is decided by seeing the place. Before visiting, couples and companies compare photos, capacities, and packages across venues, and more and more often they ask an AI. We design websites that make people fall in love with your space and turn that search into a booked visit.',
    stat: { value: 'Leisure', label: 'we already work with brands like El Rollo and Sinfónica de Minería' },
    intro:
      'We work with event halls, gardens, haciendas, and venues for weddings and corporate events. Every event venue website is designed so your space looks the way it feels to be there.',
    items: [
      {
        title: 'Spaces people fall for',
        description:
          'Large galleries by space, setup, and season that load fast even with many high-quality photos.',
        bullets: ['Gallery by space', 'Setups and capacities', 'Video and tours'],
      },
      {
        title: 'Packages and visits',
        description:
          'Packages and services explained clearly, and a form to request a date or book a visit to the venue.',
        bullets: ['Packages and services', 'Date requests', 'Visit booking and WhatsApp'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Couples search for venues on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand your space and can recommend you.',
        bullets: ['Venue structured data', 'Pages by event type', 'Content AI tools can cite'],
      },
      {
        title: 'Branding for venues',
        description:
          'A carefully crafted identity makes your venue memorable and equally special on your site, invitations, and social media.',
        bullets: ['Logo and identity with guidelines', 'Brochure and stationery based on project scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'We learn about your spaces, your packages, and how clients find you today.',
    pages: 'spaces, event types, packages, gallery, visits, and the privacy notice',
    costQuestion: 'How much does an event venue website cost?',
    costScope:
      'how many spaces and packages, whether it includes video or a virtual tour, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Should we publish package prices?',
        answer:
          'It depends on how you sell. We can show packages with prices, from a base price, or by request only; we define it with you based on how you close.',
      },
      {
        question: 'Can the site take date requests?',
        answer:
          'Yes. We include a form to request a date or visit that reaches you by email or WhatsApp, with the details you need to respond.',
      },
    ],
    aiSubject: 'my event venue',
    remoteWho: 'event venues',
    proofText:
      'Real identity and website work in leisure, culture, and branding. The same care we put into every project is what we would bring to your venue.',
    howTo: 'an event venue website',
    lead: {
      heading: 'Let’s talk about your venue',
      description:
        'Tell us which spaces you have and which events you want to attract. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a 300-guest wedding garden and want more booked visits.',
    },
  },
});
