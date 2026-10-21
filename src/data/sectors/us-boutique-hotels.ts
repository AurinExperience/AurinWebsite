import { defineSector } from './build';

/**
 * Hoteles boutique y resorts (EE. UU.) — "boutique hotel website design".
 * Ángulo: reservas directas contra las OTAs y una marca que vende la
 * experiencia antes de llegar. Distinta de "for-hotels" (hoteles en México).
 */
export const usBoutiqueHotels = defineSector({
  id: 'us-boutique-hotels',
  country: 'US',
  publishAt: '2026-10-23T00:00:00-06:00',
  slug: { es: 'para-hoteles-boutique', en: 'for-boutique-hotels' },
  name: { es: 'Hoteles boutique', en: 'Boutique hotels' },
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Hoteles Boutique y Resorts de Lujo',
    seoDescription:
      'Sitios web para hoteles boutique y resorts de lujo en Estados Unidos: más reservas directas, la experiencia contada antes de llegar y presencia en Google y en buscadores con IA.',
    keywords:
      'diseño web hotel boutique, sitio web resort de lujo, página web hotel boutique, reservas directas hotel, diseño web hotelería de lujo',
    subtitle: 'Diseño web para hoteles boutique',
    accent: 'Hoteles Boutique',
    target: 'hoteles boutique',
    hero: 'Cada reserva que llega por una agencia en línea te cuesta una comisión y te quita la relación con el huésped. Un sitio que vende tu experiencia mejor que cualquier plataforma convierte al viajero en huésped directo. Diseñamos sitios que hacen sentir tu hotel antes de llegar y llevan a la reserva sin fricción.',
    intro:
      'Diseñamos para hoteles boutique, resorts, posadas de lujo y grupos hoteleros independientes en destinos como Napa, Aspen, Miami, Charleston y los Hamptons.',
    items: [
      {
        title: 'La experiencia antes de llegar',
        description:
          'Habitaciones, gastronomía, spa y destino contados con fotografía y video que transmiten cómo se siente quedarse contigo.',
        bullets: ['Habitaciones y suites', 'Gastronomía y spa', 'Guía del destino'],
      },
      {
        title: 'Reservas directas',
        description:
          'Integramos tu motor de reservas con un flujo claro y beneficios de reservar directo para que el huésped no se vaya a una agencia.',
        bullets: ['Integración con tu motor', 'Beneficios de reserva directa', 'Ofertas y paquetes'],
      },
      {
        title: 'Eventos y bodas',
        description:
          'Secciones para eventos privados, bodas y grupos con espacios, capacidades y solicitud de propuesta.',
        bullets: ['Espacios y capacidades', 'Bodas y eventos', 'Solicitud de propuesta'],
      },
      {
        title: 'Marca de hospitalidad',
        description:
          'Identidad que se vive igual en el sitio, en las amenidades, en el menú y en la señalización.',
        bullets: ['Identidad y manual', 'Aplicaciones en el hotel', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu hotel, tus huéspedes y cómo reservan hoy.',
    pages: 'habitaciones, experiencias, gastronomía, spa, eventos, destino y reservas',
    costQuestion: '¿Cuánto cuesta el sitio web de un hotel boutique?',
    costScope:
      'cuántas habitaciones y experiencias, si se conecta a tu motor de reservas, si incluye eventos y bodas, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Funciona con mi motor de reservas?',
        answer:
          'En la mayoría de los casos sí. Revisamos cuál usas en la llamada y lo integramos para que la reserva se sienta parte del sitio.',
      },
      {
        question: '¿Un sitio nuevo ayuda a depender menos de las agencias en línea?',
        answer:
          'Ayuda a que más huéspedes reserven directo: un sitio que se ve mejor que la plataforma, carga rápido y da una razón para reservar ahí. No podemos prometer un número, pero sí diseñarlo para eso.',
      },
    ],
    aiSubject: 'mi hotel',
    remoteWho: 'hoteles boutique',
    proofText:
      'Proyectos reales de identidad y sitios web en turismo y recreación, cultura y diseño de marca. Es el estándar con el que trabajaríamos tu hotel.',
    howTo: 'el sitio web de un hotel boutique',
    lead: {
      heading: 'Hablemos de tu hotel',
      description:
        'Cuéntanos sobre tu hotel y cómo reservan hoy tus huéspedes. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un hotel boutique de 24 habitaciones en Napa y casi todas las reservas llegan por agencias.',
    },
  },
  en: {
    seoTitle: 'Boutique Hotel & Luxury Resort Website Design',
    seoDescription:
      'Websites for boutique hotels and luxury resorts in the US: more direct bookings, the experience told before arrival, and visibility on Google and AI search.',
    keywords:
      'boutique hotel website design, luxury resort website design, hotel web design agency, direct booking hotel website, boutique hotel web design',
    subtitle: 'Web design for boutique hotels',
    accent: 'Boutique Hotels',
    target: 'boutique hotels',
    hero: 'Every booking from an online travel agency costs you a commission and takes away your relationship with the guest. A site that sells your experience better than any platform turns travelers into direct guests. We design websites that let people feel your hotel before arriving and lead to the booking without friction.',
    intro:
      'We design for boutique hotels, resorts, luxury inns, and independent hotel groups in destinations like Napa, Aspen, Miami, Charleston, and the Hamptons.',
    items: [
      {
        title: 'The experience before arrival',
        description:
          'Rooms, dining, spa, and destination told with photography and video that convey what staying with you feels like.',
        bullets: ['Rooms and suites', 'Dining and spa', 'Destination guide'],
      },
      {
        title: 'Direct bookings',
        description:
          'We integrate your booking engine with a clear flow and book-direct perks so guests don’t leave for an OTA.',
        bullets: ['Booking engine integration', 'Book-direct perks', 'Offers and packages'],
      },
      {
        title: 'Events and weddings',
        description:
          'Sections for private events, weddings, and groups with spaces, capacities, and proposal requests.',
        bullets: ['Spaces and capacities', 'Weddings and events', 'Proposal requests'],
      },
      {
        title: 'A hospitality brand',
        description:
          'An identity guests experience the same way on the site, in the amenities, on the menu, and in the signage.',
        bullets: ['Identity and guidelines', 'On-property applications', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your hotel, your guests, and how they book today.',
    pages: 'rooms, experiences, dining, spa, events, destination, and booking',
    costQuestion: 'How much does a boutique hotel website cost?',
    costScope:
      'how many rooms and experiences, whether it connects to your booking engine, whether it includes events and weddings, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Does it work with my booking engine?',
        answer:
          'In most cases, yes. We review which one you use on the call and integrate it so booking feels like part of the site.',
      },
      {
        question: 'Does a new site help reduce reliance on OTAs?',
        answer:
          'It helps more guests book direct: a site that looks better than the platform, loads fast, and gives a reason to book there. We can’t promise a number, but we design it for that.',
      },
    ],
    aiSubject: 'my hotel',
    remoteWho: 'boutique hotels',
    proofText:
      'Real identity and website work in tourism and recreation, culture, and brand design. It is the standard we would bring to your hotel.',
    howTo: 'a boutique hotel website',
    lead: {
      heading: 'Let’s talk about your hotel',
      description:
        'Tell us about your hotel and how guests book today. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a 24-room boutique hotel in Napa and most bookings come through OTAs.',
    },
  },
});
