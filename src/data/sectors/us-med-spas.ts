import { defineSector } from './build';

/**
 * Med spas (EE. UU.) — "med spa website design". Ángulo: tratamientos
 * recurrentes (inyectables, láser, membresías) con clientas que reservan desde
 * el celular; el sitio vende la experiencia y agenda. Distinta de
 * "for-aesthetic-clinics" (clínicas estéticas en México).
 */
export const usMedSpas = defineSector({
  id: 'us-med-spas',
  country: 'US',
  publishAt: '2026-10-22T00:00:00-06:00',
  slug: { es: 'para-med-spas', en: 'for-med-spas' },
  name: { es: 'Med spas', en: 'Med spas' },
  proof: ['dentol', 'elite', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Med Spas en Estados Unidos',
    seoDescription:
      'Sitios web para med spas: tratamientos explicados con claridad, reservas en línea, membresías y una marca que se siente tan cuidada como tu experiencia en cabina.',
    keywords:
      'diseño web para med spa, sitio web med spa, página web medicina estética, diseño web spa de lujo, reservas en línea med spa',
    subtitle: 'Diseño web para med spas',
    accent: 'Med Spas',
    target: 'med spas',
    hero: 'Tus clientas eligen med spa desde el celular, en un par de minutos, comparando fotos, reseñas y qué tan fácil es reservar. Si tu sitio no se siente como tu experiencia en cabina, la cita se va a otro lado. Diseñamos sitios que transmiten tu nivel y convierten visitas en citas.',
    intro:
      'Trabajamos con med spas, clínicas de medicina estética y marcas de bienestar en mercados como Los Ángeles, Miami, Scottsdale, Dallas y Nueva York.',
    items: [
      {
        title: 'Tratamientos que se entienden',
        description:
          'Una página por tratamiento con qué es, para quién, cuánto dura el resultado y qué esperar, escrita para resolver dudas antes de la cita.',
        bullets: ['Páginas por tratamiento', 'Preguntas frecuentes', 'Antes y después según tus políticas'],
      },
      {
        title: 'Reservas en un par de toques',
        description:
          'Conectamos tu sistema de reservas para que agendar desde el celular sea rápido, con recordatorios y depósitos si los usas.',
        bullets: ['Integración con tu agenda', 'Reserva desde el celular', 'Depósitos y recordatorios'],
      },
      {
        title: 'Membresías y paquetes',
        description:
          'Presentamos tus membresías y paquetes para que la clienta regrese cada mes y no solo una vez.',
        bullets: ['Membresías', 'Paquetes y promociones', 'Tarjetas de regalo'],
      },
      {
        title: 'Una marca que se siente premium',
        description:
          'Identidad, fotografía y tono que hacen que tu med spa se vea igual de cuidado en el sitio, en redes y en tu recepción.',
        bullets: ['Identidad y manual', 'Dirección de fotografía', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tus tratamientos, tu sistema de reservas y a tus clientas.',
    pages: 'tratamientos, membresías, el equipo médico, galería, reseñas y reservas',
    costQuestion: '¿Cuánto cuesta el sitio web de un med spa?',
    costScope:
      'cuántos tratamientos, si se conecta a tu sistema de reservas, si incluye membresías y tarjetas de regalo y si también necesitas marca',
    faqs: [
      {
        question: '¿Funciona con mi sistema de reservas?',
        answer:
          'En la mayoría de los casos sí. Revisamos cuál usas en la llamada y lo integramos al sitio para que la reserva no se sienta como salir a otra página.',
      },
      {
        question: '¿Pueden ayudarnos con fotografía y video?',
        answer:
          'Sí, podemos dirigirla o incluirla en el alcance. En un med spa la imagen es la mitad de la decisión.',
      },
    ],
    aiSubject: 'mi med spa',
    remoteWho: 'med spas',
    proofText:
      'Proyectos reales de identidad y sitios web en salud dental, salud y diseño de marca. Es el estándar con el que trabajaríamos tu med spa.',
    howTo: 'el sitio web de un med spa',
    lead: {
      heading: 'Hablemos de tu med spa',
      description:
        'Cuéntanos qué tratamientos ofreces y cómo reservan hoy tus clientas. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un med spa en Miami y queremos que las reservas en línea crezcan.',
    },
  },
  en: {
    seoTitle: 'Med Spa Website Design',
    seoDescription:
      'Websites for med spas: treatments explained clearly, online booking, memberships, and a brand that feels as polished as your in-clinic experience.',
    keywords:
      'med spa website design, med spa web design, medical spa website, aesthetic clinic website design, med spa marketing website',
    subtitle: 'Web design for med spas',
    accent: 'Med Spas',
    target: 'med spas',
    hero: 'Clients choose a med spa on their phone in a couple of minutes, comparing photos, reviews, and how easy it is to book. If your site doesn’t feel like your treatment room, the appointment goes elsewhere. We design websites that convey your level and turn visits into bookings.',
    intro:
      'We work with med spas, aesthetic medicine clinics, and wellness brands in markets like Los Angeles, Miami, Scottsdale, Dallas, and New York.',
    items: [
      {
        title: 'Treatments people understand',
        description:
          'One page per treatment covering what it is, who it is for, how long results last, and what to expect, written to answer questions before the appointment.',
        bullets: ['Treatment pages', 'Frequently asked questions', 'Before and after per your policies'],
      },
      {
        title: 'Booking in a couple of taps',
        description:
          'We connect your booking system so scheduling from a phone is fast, with reminders and deposits if you use them.',
        bullets: ['Integration with your booking system', 'Mobile-first booking', 'Deposits and reminders'],
      },
      {
        title: 'Memberships and packages',
        description:
          'We present your memberships and packages so clients come back every month, not just once.',
        bullets: ['Memberships', 'Packages and promotions', 'Gift cards'],
      },
      {
        title: 'A brand that feels premium',
        description:
          'Identity, photography, and tone that make your med spa look equally polished on the site, on social, and at your front desk.',
        bullets: ['Identity and guidelines', 'Photography direction', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your treatments, your booking system, and your clients.',
    pages: 'treatments, memberships, the medical team, gallery, reviews, and booking',
    costQuestion: 'How much does a med spa website cost?',
    costScope:
      'how many treatments, whether it connects to your booking system, whether it includes memberships and gift cards, and whether you also need a brand',
    faqs: [
      {
        question: 'Does it work with my booking system?',
        answer:
          'In most cases, yes. We review which one you use on the call and integrate it so booking doesn’t feel like leaving your site.',
      },
      {
        question: 'Can you help with photography and video?',
        answer: 'Yes, we can direct it or include it in the scope. For a med spa, imagery is half the decision.',
      },
    ],
    aiSubject: 'my med spa',
    remoteWho: 'med spas',
    proofText:
      'Real identity and website work in dental care, healthcare, and brand design. It is the standard we would bring to your med spa.',
    howTo: 'a med spa website',
    lead: {
      heading: 'Let’s talk about your med spa',
      description:
        'Tell us which treatments you offer and how clients book today. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a med spa in Miami and want to grow online bookings.',
    },
  },
});
