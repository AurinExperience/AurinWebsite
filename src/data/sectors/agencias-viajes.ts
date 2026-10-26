import { defineSector } from './build';

/**
 * Agencias de viajes — "diseño web para agencias de viajes" / "página web para
 * tour operador". Distinto de UX/UI turismo (plataformas): aquí es el sitio de
 * una agencia que vende paquetes y asesoría. Ángulo: inspirar y generar
 * confianza para que el viajero cotice con un asesor. Prueba: El Rollo.
 */
export const agenciasViajes = defineSector({
  id: 'agencias-viajes',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'para-agencias-de-viajes', en: 'for-travel-agencies' },
  name: { es: 'Agencias de viajes', en: 'Travel agencies' },
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Agencias de Viajes y Tour Operadores',
    seoDescription:
      'Páginas web para agencias de viajes y tour operadores: paquetes que inspiran, cotización con un asesor y presencia en Google y en buscadores con IA.',
    keywords:
      'diseño web para agencias de viajes, página web tour operador, sitio web agencia de viajes, página web paquetes de viaje, marketing turístico',
    subtitle: 'Diseño web para agencias de viajes y tour operadores',
    accent: 'Agencias de Viajes',
    target: 'agencias de viajes',
    hero: 'Un viaje se sueña antes de comprarse. El viajero recorre destinos y paquetes, compara y busca a alguien de confianza que lo asesore, y cada vez más le pregunta a una IA. Diseñamos sitios que inspiran a viajar y convierten esa inspiración en una cotización con tu equipo.',
    stat: { value: 'Turismo', label: 'ya trabajamos con marcas de turismo y recreación como El Rollo' },
    intro:
      'Diseñamos para agencias de viajes, tour operadores, agencias de viajes de lujo y de grupos. Cada página web para agencia de viajes se diseña alrededor de tus destinos y del viajero que quieres atraer.',
    items: [
      {
        title: 'Paquetes que inspiran',
        description:
          'Destinos y paquetes con fotos grandes, itinerario, qué incluye y salidas, para que el viajero se imagine ahí antes de cotizar.',
        bullets: ['Fichas de paquete con itinerario', 'Destinos y temporadas', 'Viajes de grupo y a la medida'],
      },
      {
        title: 'Cotización con un asesor',
        description:
          'Formulario por paquete y contacto directo por WhatsApp para que el viajero hable con un asesor real en el momento.',
        bullets: ['Cotización por paquete', 'Contacto directo por WhatsApp', 'Viaje a la medida'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Los viajeros buscan destinos en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan lo que ofreces y te recomienden.',
        bullets: ['Datos estructurados de tu agencia', 'Páginas por destino', 'Contenido que la IA puede citar'],
      },
      {
        title: 'Confianza para comprar',
        description:
          'Quiénes son, certificaciones, testimonios con permiso y políticas claras, porque el viajero entrega su dinero antes de viajar.',
        bullets: ['Equipo y certificaciones', 'Políticas de pago y cancelación', 'Identidad de marca según el alcance'],
      },
    ],
    diagnosis: 'Una llamada para entender tus destinos, tus paquetes y el viajero que quieres atraer.',
    pages: 'destinos, paquetes, viajes a la medida, cotización, nosotros y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de una agencia de viajes?',
    costScope:
      'cuántos destinos y paquetes, si necesitas administrador para actualizarlos y si también necesitas marca',
    faqs: [
      {
        question: '¿Podemos subir y actualizar paquetes nosotros?',
        answer:
          'Sí, si lo incluimos en el alcance: es un panel a la medida para que tu equipo publique paquetes, cambie salidas y destaque promociones sin depender de nosotros.',
      },
      {
        question: '¿El sitio puede cobrar en línea?',
        answer:
          'Sí, como desarrollo a la medida: pago en línea o anticipos según tu forma de vender. Muchas agencias prefieren cotizar primero con un asesor y cobrar después.',
      },
    ],
    aiSubject: 'mi agencia de viajes',
    remoteWho: 'agencias de viajes',
    proofText:
      'Proyectos reales de identidad y sitios web en turismo, cultura y marca. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu agencia.',
    howTo: 'el sitio web de una agencia de viajes',
    lead: {
      heading: 'Hablemos de tu agencia de viajes',
      description:
        'Cuéntanos qué destinos vendes y cómo llegan hoy tus viajeros. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Vendemos viajes de grupo a Europa y queremos más cotizaciones desde el sitio.',
    },
  },
  en: {
    seoTitle: 'Web Design for Travel Agencies and Tour Operators',
    seoDescription:
      'Websites for travel agencies and tour operators: inspiring packages, quotes with an advisor, and visibility on Google and AI search tools.',
    keywords:
      'web design for travel agencies, tour operator website, travel agency website, travel package website, tourism marketing',
    subtitle: 'Web design for travel agencies and tour operators',
    accent: 'Travel Agencies',
    target: 'travel agencies',
    hero: 'A trip is dreamed about before it is bought. Travelers browse destinations and packages, compare, and look for someone they trust to advise them, and more and more often they ask an AI. We design websites that inspire travel and turn that inspiration into a quote with your team.',
    stat: { value: 'Tourism', label: 'we already work with tourism and leisure brands like El Rollo' },
    intro:
      'We design for travel agencies, tour operators, and luxury and group travel agencies. Every travel agency website is designed around your destinations and the traveler you want to attract.',
    items: [
      {
        title: 'Packages that inspire',
        description:
          'Destinations and packages with large photos, itinerary, inclusions, and departures, so travelers picture themselves there before asking for a quote.',
        bullets: ['Package pages with itinerary', 'Destinations and seasons', 'Group and custom trips'],
      },
      {
        title: 'Quotes with an advisor',
        description:
          'A form per package and direct contact over WhatsApp so travelers talk to a real advisor right away.',
        bullets: ['Quote per package', 'Direct contact over WhatsApp', 'Custom trips'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Travelers search for destinations on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you offer and recommend you.',
        bullets: ['Structured data about your agency', 'Pages by destination', 'Content AI tools can cite'],
      },
      {
        title: 'Trust to buy',
        description:
          'Who you are, certifications, testimonials with permission, and clear policies, because travelers pay before they travel.',
        bullets: ['Team and certifications', 'Payment and cancellation policies', 'Brand identity based on project scope'],
      },
    ],
    diagnosis: 'We learn about your destinations, your packages, and the traveler you want to attract.',
    pages: 'destinations, packages, custom trips, quotes, about, and the privacy notice',
    costQuestion: 'How much does a travel agency website cost?',
    costScope:
      'how many destinations and packages, whether you need an admin to update them, and whether you also need a brand',
    faqs: [
      {
        question: 'Can we add and update packages ourselves?',
        answer:
          'Yes, if it is part of the scope: a custom panel so your team can publish packages, change departures, and highlight promotions without depending on us.',
      },
      {
        question: 'Can the site take payments online?',
        answer:
          'Yes, as custom development: online payment or deposits depending on how you sell. Many agencies prefer to quote with an advisor first and charge afterward.',
      },
    ],
    aiSubject: 'my travel agency',
    remoteWho: 'travel agencies',
    proofText:
      'Real identity and website work in tourism, culture, and branding. The same care we put into every brand is what we would bring to your agency.',
    howTo: 'a travel agency website',
    lead: {
      heading: 'Let’s talk about your travel agency',
      description:
        'Tell us which destinations you sell and how travelers find you today. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We sell group trips to Europe and want more quote requests from the site.',
    },
  },
});
