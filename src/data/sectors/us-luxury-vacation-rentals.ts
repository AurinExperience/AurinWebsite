import { defineSector } from './build';

/**
 * Rentas vacacionales de lujo (EE. UU.) — "luxury vacation rental website
 * design". Ángulo: villas y casas de alto valor que dependen de Airbnb/VRBO;
 * el sitio propio da reservas directas y marca. Mercados: Aspen, los Hamptons,
 * Malibu, Miami, Hawaii, Lake Tahoe.
 */
export const usLuxuryVacationRentals = defineSector({
  id: 'us-luxury-vacation-rentals',
  country: 'US',
  publishAt: '2026-10-25T00:00:00-06:00',
  slug: { es: 'para-rentas-vacacionales-de-lujo', en: 'for-luxury-vacation-rentals' },
  name: { es: 'Rentas vacacionales de lujo', en: 'Luxury vacation rentals' },
  proof: ['elRollo', 'grupoEstrella', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Rentas Vacacionales de Lujo',
    seoDescription:
      'Sitios web para rentas vacacionales de lujo y administradoras de villas en Estados Unidos: reservas directas, propiedades que lucen y una marca que no depende de las plataformas.',
    keywords:
      'diseño web rentas vacacionales de lujo, sitio web villas de lujo, reservas directas renta vacacional, página web administradora de propiedades vacacionales',
    subtitle: 'Diseño web para rentas vacacionales de lujo',
    accent: 'Rentas de Lujo',
    target: 'rentas vacacionales de lujo',
    hero: 'Una villa de miles de dólares por noche no debería verse igual que cualquier anuncio de Airbnb, ni pagar comisión por cada huésped que regresa. Un sitio propio convierte a tus huéspedes en clientes directos. Diseñamos sitios que presentan cada propiedad como una experiencia y llevan a la reserva sin intermediarios.',
    intro:
      'Diseñamos para dueños de villas, administradoras de propiedades de lujo y marcas de hospitalidad en destinos como Aspen, los Hamptons, Malibú, Miami, Hawái y Lake Tahoe.',
    items: [
      {
        title: 'Propiedades que lucen',
        description:
          'Cada propiedad con fotografía y video a pantalla completa, amenidades, servicios de concierge y el destino alrededor.',
        bullets: ['Galerías a pantalla completa', 'Amenidades y servicios', 'Guía del destino'],
      },
      {
        title: 'Reservas directas',
        description:
          'Integramos tu software de reservas y disponibilidad para que el huésped reserve en tu sitio, no en la plataforma.',
        bullets: ['Integración con tu software', 'Calendario de disponibilidad', 'Beneficios de reservar directo'],
      },
      {
        title: 'Servicios de concierge',
        description:
          'Chef, transporte, experiencias y peticiones especiales presentados para elevar el ticket de cada estancia.',
        bullets: ['Servicios adicionales', 'Experiencias locales', 'Solicitudes especiales'],
      },
      {
        title: 'Marca propia',
        description:
          'Una identidad para tu colección de propiedades que el huésped recuerda y busca de nuevo, sin depender de la plataforma.',
        bullets: ['Identidad y manual', 'Aplicaciones en la propiedad', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tus propiedades, a tus huéspedes y cómo reservan hoy.',
    pages: 'propiedades, destinos, servicios de concierge, nosotros, reservas y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de rentas vacacionales de lujo?',
    costScope:
      'cuántas propiedades y destinos, si se conecta a tu software de reservas, si incluye servicios de concierge, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Funciona con mi software de reservas?',
        answer:
          'En la mayoría de los casos sí. Revisamos cuál usas en la llamada e integramos la disponibilidad y la reserva al sitio.',
      },
      {
        question: '¿Tengo que dejar Airbnb o VRBO?',
        answer:
          'No. El sitio propio convive con las plataformas; su trabajo es que los huéspedes que regresan y los que llegan por recomendación reserven contigo directo.',
      },
    ],
    aiSubject: 'mi propiedad',
    remoteWho: 'rentas vacacionales de lujo',
    proofText:
      'Proyectos reales de identidad y sitios web en turismo y recreación, construcción y diseño de marca. Es el estándar con el que trabajaríamos tus propiedades.',
    howTo: 'el sitio web de rentas vacacionales de lujo',
    lead: {
      heading: 'Hablemos de tus propiedades',
      description:
        'Cuéntanos cuántas propiedades tienes y cómo reservan hoy tus huéspedes. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Administramos 8 villas en Aspen y casi todas las reservas llegan por plataformas.',
    },
  },
  en: {
    seoTitle: 'Luxury Vacation Rental Website Design',
    seoDescription:
      'Websites for luxury vacation rentals and villa management companies in the US: direct bookings, properties that shine, and a brand that doesn’t depend on platforms.',
    keywords:
      'luxury vacation rental website design, vacation rental direct booking website, luxury villa website design, vacation rental web design, property management website design',
    subtitle: 'Web design for luxury vacation rentals',
    accent: 'Luxury Vacation Rentals',
    target: 'luxury vacation rentals',
    hero: 'A villa that rents for thousands a night shouldn’t look like any other Airbnb listing, or pay a commission on every returning guest. A site of your own turns guests into direct clients. We design websites that present every property as an experience and lead to the booking with no middleman.',
    intro:
      'We design for villa owners, luxury property managers, and hospitality brands in destinations like Aspen, the Hamptons, Malibu, Miami, Hawaii, and Lake Tahoe.',
    items: [
      {
        title: 'Properties that shine',
        description:
          'Every property with full-screen photography and video, amenities, concierge services, and the destination around it.',
        bullets: ['Full-screen galleries', 'Amenities and services', 'Destination guide'],
      },
      {
        title: 'Direct bookings',
        description:
          'We integrate your booking and availability software so guests book on your site, not on the platform.',
        bullets: ['Integration with your software', 'Availability calendar', 'Book-direct perks'],
      },
      {
        title: 'Concierge services',
        description:
          'Private chef, transportation, experiences, and special requests presented to raise the value of every stay.',
        bullets: ['Add-on services', 'Local experiences', 'Special requests'],
      },
      {
        title: 'A brand of your own',
        description:
          'An identity for your property collection that guests remember and search for again, without depending on the platform.',
        bullets: ['Identity and guidelines', 'On-property applications', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your properties, your guests, and how they book today.',
    pages: 'properties, destinations, concierge services, about, booking, and contact',
    costQuestion: 'How much does a luxury vacation rental website cost?',
    costScope:
      'how many properties and destinations, whether it connects to your booking software, whether it includes concierge services, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Does it work with my booking software?',
        answer:
          'In most cases, yes. We review which one you use on the call and integrate availability and booking into the site.',
      },
      {
        question: 'Do I have to leave Airbnb or VRBO?',
        answer:
          'No. Your own site works alongside the platforms; its job is to get returning and referred guests to book with you directly.',
      },
    ],
    aiSubject: 'my property',
    remoteWho: 'luxury vacation rentals',
    proofText:
      'Real identity and website work in tourism and recreation, construction, and brand design. It is the standard we would bring to your properties.',
    howTo: 'a luxury vacation rental website',
    lead: {
      heading: 'Let’s talk about your properties',
      description:
        'Tell us how many properties you have and how guests book today. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We manage 8 villas in Aspen and almost every booking comes through platforms.',
    },
  },
});
