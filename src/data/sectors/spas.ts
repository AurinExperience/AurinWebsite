import { defineSector } from './build';

/**
 * Spas y centros de bienestar de lujo — "página web para spa".
 * Ángulo: se vende una experiencia sensorial (ambiente, rituales, calma) y la
 * reserva tiene que ser inmediata; incluye spas de hotel, day spas, retiros y
 * centros de bienestar. Distinto de `estetica` (clínicas con procedimientos)
 * y `us-med-spas`.
 */
export const spas = defineSector({
  id: 'spas',
  publishAt: '2026-11-02T00:00:00-06:00',
  slug: { es: 'para-spas-y-bienestar', en: 'for-luxury-spas-and-wellness' },
  name: { es: 'Spas y centros de bienestar', en: 'Luxury spas and wellness' },
  proof: ['elRollo', 'elite', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Spas y Centros de Bienestar de Lujo',
    seoDescription:
      'Sitios para spas, day spas, retiros y centros de bienestar: rituales que transmiten la experiencia, reservas en línea, membresías y tarjetas de regalo.',
    keywords:
      'diseño web para spas, página web spa de lujo, sitio web centro de bienestar, reservas en línea spa, página web retiro de bienestar',
    subtitle: 'Diseño web para spas y centros de bienestar',
    accent: 'Spas y Bienestar',
    target: 'spas y centros de bienestar',
    hero: 'Un spa se elige por cómo se siente antes de llegar: la luz, el silencio, los aromas, la calma. Esa sensación empieza en tu sitio, y si se ve saturado, con un menú en PDF y una reserva por teléfono, la experiencia se rompe antes de empezar. Diseñamos sitios que transmiten la atmósfera de tu spa y hacen que reservar sea tan sencillo como relajarse.',
    intro:
      'Diseñamos para day spas, spas de hotel y resort, retiros de bienestar, centros de yoga y meditación, y espacios de hidroterapia en México y otros países.',
    items: [
      {
        title: 'Rituales y tratamientos',
        description:
          'Cada ritual, masaje o terapia con su duración, beneficios y lo que vive el cliente, presentado con la calma de tu marca.',
        bullets: ['Menú de tratamientos', 'Rituales de autor', 'Paquetes para parejas y grupos'],
      },
      {
        title: 'Reserva inmediata',
        description:
          'Reservas en línea conectadas a la medida con tu sistema de agenda, con disponibilidad real y confirmación clara.',
        bullets: [],
        custom: ['Reservas en línea', 'Conexión con tu sistema de agenda', 'Recordatorios'],
      },
      {
        title: 'Membresías y regalos',
        description:
          'Membresías, paquetes y tarjetas de regalo que, con venta en línea a la medida, aumentan las visitas recurrentes.',
        bullets: ['Membresías', 'Paquetes de temporada'],
        custom: ['Tarjetas de regalo en línea'],
      },
      {
        title: 'Atmósfera de marca',
        description:
          'Fotografía, tipografía y ritmo visual que transmiten tu espacio, junto con identidad para amenidades y productos.',
        bullets: ['Identidad y manual', 'Amenidades y productos', 'Sitio en dos idiomas para visitantes'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu spa, tus rituales y cómo reciben reservas hoy.',
    pages: 'rituales, tratamientos, paquetes, membresías, tarjetas de regalo, el espacio y reservas',
    costQuestion: '¿Cuánto cuesta el sitio web de un spa?',
    costScope:
      'cuántos tratamientos, si se conecta con tu sistema de reservas, si incluye membresías y tarjetas de regalo y si también necesitas marca',
    faqs: [
      {
        question: '¿Se puede reservar en línea con nuestro sistema actual?',
        answer:
          'En la mayoría de los casos sí, como desarrollo a la medida. Revisamos tu sistema de agenda y diseñamos la reserva alrededor de él para que se sienta parte de tu marca.',
      },
      {
        question: '¿Pueden vender tarjetas de regalo en línea?',
        answer:
          'Sí, como desarrollo a la medida. Las tarjetas de regalo digitales suelen venderse mucho en temporadas como el Día de las Madres o fin de año, y se pagan en línea en minutos.',
      },
      {
        question: '¿Nos ayudan con la fotografía?',
        answer:
          'Se puede incluir en el alcance o te recomendamos cómo producirla. En un spa, la fotografía es la que transmite la experiencia.',
      },
    ],
    aiSubject: 'mi spa',
    remoteWho: 'spas',
    proofText:
      'Proyectos reales de sitios web e identidad en turismo y recreación, salud y diseño de marca. Es el cuidado que pondríamos en tu spa.',
    howTo: 'el sitio web de un spa',
    lead: {
      heading: 'Hablemos de tu spa',
      description:
        'Cuéntanos qué experiencias ofreces y cómo reciben reservas hoy. Te contactaremos para conocer tu spa y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un day spa en San Miguel de Allende y queremos reservas y tarjetas de regalo en línea.',
    },
  },
  en: {
    seoTitle: 'Web Design for Luxury Spas and Wellness Centers',
    seoDescription:
      'Websites for day spas, resort spas, retreats, and wellness centers: rituals that convey the experience, online booking, memberships, and gift cards.',
    keywords:
      'spa website design, luxury spa web design, wellness center website, spa online booking website, wellness retreat website design',
    subtitle: 'Web design for luxury spas and wellness centers',
    accent: 'Spas & Wellness',
    target: 'spas and wellness centers',
    hero: 'A spa is chosen by how it feels before guests arrive: the light, the quiet, the scents, the calm. That feeling starts on your website, and if it looks cluttered, with a PDF menu and phone-only booking, the experience breaks before it begins. We design websites that convey your spa’s atmosphere and make booking as easy as relaxing.',
    intro:
      'We design for day spas, hotel and resort spas, wellness retreats, yoga and meditation centers, and hydrotherapy spaces in Mexico and beyond.',
    items: [
      {
        title: 'Rituals and treatments',
        description:
          'Each ritual, massage, or therapy with its duration, benefits, and what guests experience, presented with your brand’s calm.',
        bullets: ['Treatment menu', 'Signature rituals', 'Couples and group packages'],
      },
      {
        title: 'Instant booking',
        description:
          'Online booking custom-connected to your scheduling system, with real availability and clear confirmation.',
        bullets: [],
        custom: ['Online booking', 'Scheduling system integration', 'Reminders'],
      },
      {
        title: 'Memberships and gifts',
        description:
          'Memberships, packages, and gift cards that, with custom online sales, increase repeat visits.',
        bullets: ['Memberships', 'Seasonal packages'],
        custom: ['Online gift cards'],
      },
      {
        title: 'Brand atmosphere',
        description:
          'Photography, typography, and visual rhythm that convey your space, along with identity for amenities and products.',
        bullets: ['Identity and guidelines', 'Amenities and products', 'Bilingual site for visitors'],
      },
    ],
    diagnosis: 'A call to learn about your spa, your rituals, and how you take bookings today.',
    pages: 'rituals, treatments, packages, memberships, gift cards, the space, and booking',
    costQuestion: 'How much does a spa website cost?',
    costScope:
      'how many treatments, whether it connects to your booking system, whether it includes memberships and gift cards, and whether you also need a brand',
    faqs: [
      {
        question: 'Can guests book online with our current system?',
        answer:
          'In most cases, yes, as custom development. We review your scheduling system and design booking around it so it feels part of your brand.',
      },
      {
        question: 'Can you sell gift cards online?',
        answer:
          'Yes, as custom development. Digital gift cards sell especially well around holidays and Mother’s Day, and guests can buy them online in minutes.',
      },
      {
        question: 'Can you help with photography?',
        answer:
          'It can be included in the scope, or we can advise you on how to produce it. For a spa, photography is what conveys the experience.',
      },
    ],
    aiSubject: 'my spa',
    remoteWho: 'spas',
    proofText:
      'Real website and identity work in tourism and recreation, healthcare, and brand design. It is the care we would bring to your spa.',
    howTo: 'a spa website',
    lead: {
      heading: 'Let’s talk about your spa',
      description:
        'Tell us what experiences you offer and how you take bookings today. We will reach out to learn about your spa and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a day spa in San Miguel de Allende and want online booking and gift cards.',
    },
  },
});
