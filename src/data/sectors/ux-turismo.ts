import { defineSector } from './build';

/**
 * UX/UI para turismo y viajes — "diseño UX/UI para turismo" / "diseño de
 * plataforma de reservas de viajes". Distinto de la landing web de hoteles:
 * aquí son plataformas y apps (reservas, tours, aerolíneas regionales, OTAs).
 * Prueba: El Rollo, cliente real de turismo y recreación.
 */
export const uxTurismo = defineSector({
  id: 'ux-turismo',
  service: 'uxui',
  publishAt: '2026-10-19T00:00:00-06:00',
  slug: { es: 'para-turismo-y-viajes', en: 'for-travel-and-tourism' },
  name: { es: 'UX/UI para turismo', en: 'UX/UI for travel' },
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  es: {
    seoTitle: 'Diseño UX/UI para Turismo y Plataformas de Viajes',
    seoDescription:
      'Diseño UX/UI para turismo y viajes: plataformas de reservas, apps de tours y experiencias que el viajero compra desde el celular sin dudar.',
    keywords:
      'diseño UX/UI para turismo, diseño plataforma de reservas, UX viajes, diseño app de tours, diseño motor de reservas, UX travel',
    subtitle: 'Diseño UX/UI para turismo y viajes',
    accent: 'Turismo',
    target: 'turismo y viajes',
    hero: 'El viajero reserva desde el celular, muchas veces con prisa y en otro idioma. Si el precio final sorprende o el pago falla, abandona y reserva en otro lado. Diseñamos plataformas de viaje claras, que inspiran y que cobran sin fricción.',
    stat: { value: 'Turismo', label: 'ya trabajamos con marcas de turismo y recreación como El Rollo' },
    intro:
      'Hacemos el diseño UX/UI de flujos de reserva, apps y plataformas de viaje para agencias en línea, operadores de tours, parques y empresas de transporte turístico. Cada proyecto parte de cómo planea y reserva tu viajero.',
    items: [
      {
        title: 'Reservas que se completan',
        description:
          'Disponibilidad, precio final y pago en pocos pasos, sin sorpresas al final, en web y móvil.',
        bullets: ['Flujo de reserva por pasos', 'Precio total desde el inicio', 'Pagos locales e internacionales'],
      },
      {
        title: 'Experiencias que inspiran',
        description:
          'Fichas de tours, destinos y paquetes con fotos y detalles que hacen que el viajero quiera ir y sepa exactamente qué incluye.',
        bullets: ['Fichas de experiencia', 'Itinerarios claros', 'Reseñas y preguntas frecuentes'],
      },
      {
        title: 'Viajeros de todo el mundo',
        description:
          'Idiomas, monedas y zonas horarias resueltos en el diseño, para que un turista extranjero reserve con la misma confianza que uno local.',
        bullets: ['Varios idiomas', 'Monedas y horarios', 'Diseño para celular primero'],
      },
      {
        title: 'Después de reservar',
        description:
          'Confirmaciones, cambios, check-in y recordatorios que acompañan al viajero hasta el día de la experiencia.',
        bullets: ['Gestión de reservas', 'Cambios y cancelaciones', 'Sistema de diseño escalable'],
      },
    ],
    research:
      'Entendemos cómo planea y reserva tu viajero: datos de abandono, entrevistas y revisión de la experiencia actual en web y móvil.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una plataforma de viajes?',
    costScope:
      'cuántos tipos de producto y flujos, si es web, app o ambas, cuántos idiomas y si necesitas sistema de diseño',
    faqs: [
      {
        question: '¿Pueden integrar el motor de reservas que ya tenemos?',
        answer:
          'Sí. Diseñamos la experiencia sobre tu motor de reservas o tus proveedores actuales y coordinamos con tu equipo técnico lo que se puede integrar.',
      },
      {
        question: '¿Cómo reducen el abandono en el pago?',
        answer:
          'Mostramos el precio total desde el inicio, reducimos los datos que se piden, ofrecemos los métodos de pago que tu viajero usa y probamos el flujo con usuarios reales.',
      },
    ],
    remoteWho: 'empresas de turismo',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en turismo, cultura y marca. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu plataforma.',
    howTo: 'la experiencia y la interfaz de una plataforma de viajes',
    lead: {
      heading: 'Hablemos de tu plataforma de viajes',
      description:
        'Cuéntanos qué vendes, a qué viajero y dónde sientes que pierdes reservas. Te contactaremos lo antes posible para entender tu plataforma y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Vendemos tours en línea y muchos turistas extranjeros abandonan al momento de pagar.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Travel and Tourism Platforms',
    seoDescription:
      'UX/UI design for travel and tourism: booking platforms, tour apps, and experiences travelers buy from their phone without hesitation.',
    keywords:
      'UX/UI design for tourism, booking platform design, travel UX, tour app design, booking engine design, travel product design',
    subtitle: 'UX/UI design for travel and tourism',
    accent: 'Travel',
    target: 'travel and tourism companies',
    hero: 'Travelers book from their phones, often in a hurry and in another language. If the final price surprises them or payment fails, they abandon and book elsewhere. We design travel platforms that are clear, inspiring, and charge without friction.',
    stat: { value: 'Tourism', label: 'we already work with tourism and leisure brands like El Rollo' },
    intro:
      'We design the UX/UI of booking flows, apps, and travel platforms for online agencies, tour operators, parks, and tourism transportation companies. Every project starts from how your travelers plan and book.',
    items: [
      {
        title: 'Bookings that get completed',
        description:
          'Availability, final price, and payment in a few steps, with no surprises at the end, on web and mobile.',
        bullets: ['Step-by-step booking flow', 'Total price from the start', 'Local and international payments'],
      },
      {
        title: 'Experiences that inspire',
        description:
          'Tour, destination, and package pages with photos and details that make travelers want to go and know exactly what is included.',
        bullets: ['Experience pages', 'Clear itineraries', 'Reviews and FAQs'],
      },
      {
        title: 'Travelers from everywhere',
        description:
          'Languages, currencies, and time zones solved in the design, so a foreign tourist books with the same confidence as a local.',
        bullets: ['Multiple languages', 'Currencies and times', 'Mobile-first design'],
      },
      {
        title: 'After booking',
        description:
          'Confirmations, changes, check-in, and reminders that stay with travelers until the day of the experience.',
        bullets: ['Booking management', 'Changes and cancellations', 'Scalable design system'],
      },
    ],
    research:
      'We learn how your travelers plan and book: drop-off data, interviews, and a review of the current web and mobile experience.',
    costQuestion: 'How much does UX/UI design for a travel platform cost?',
    costScope:
      'how many product types and flows, whether it is web, an app, or both, how many languages, and whether you need a design system',
    faqs: [
      {
        question: 'Can you integrate the booking engine we already have?',
        answer:
          'Yes. We design the experience on top of your booking engine or current suppliers and coordinate with your technical team what can be integrated.',
      },
      {
        question: 'How do you reduce drop-off at payment?',
        answer:
          'We show the total price from the start, ask for less data, offer the payment methods your travelers use, and test the flow with real users.',
      },
    ],
    remoteWho: 'travel companies',
    proofText:
      'Real identity, product, and website work in tourism, culture, and branding. The same care we put into every brand is what we would bring to your platform.',
    howTo: 'the experience and interface of a travel platform',
    lead: {
      heading: 'Let’s talk about your travel platform',
      description:
        'Tell us what you sell, to which travelers, and where you feel you lose bookings. We will reach out as soon as possible to understand your platform and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We sell tours online and many foreign tourists abandon at payment.',
    },
  },
});
