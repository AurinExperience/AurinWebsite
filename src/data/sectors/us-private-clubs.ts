import { defineSector } from './build';

/**
 * Clubes privados (EE. UU.) — "private club website design" / "country club
 * website design". Ángulo: dos públicos en un sitio — prospectos que deben
 * desear la membresía y socios que necesitan reservar y enterarse; marca
 * exclusiva con portal de socios. Combina web + UX.
 */
export const usPrivateClubs = defineSector({
  id: 'us-private-clubs',
  country: 'US',
  publishAt: '2026-10-24T00:00:00-06:00',
  slug: { es: 'para-clubes-privados', en: 'for-private-clubs' },
  name: { es: 'Clubes privados', en: 'Private clubs' },
  proof: ['elRollo', 'sinfonica', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Clubes Privados, de Golf y Country Clubs',
    seoDescription:
      'Sitios web para clubes privados, de golf, náuticos y country clubs: la experiencia del club para prospectos, un portal de socios fácil de usar y una marca exclusiva.',
    keywords:
      'diseño web club privado, sitio web country club, página web club de golf, portal de socios club, diseño web club náutico',
    subtitle: 'Diseño web para clubes privados',
    accent: 'Clubes Privados',
    target: 'clubes privados',
    hero: 'Tu sitio tiene dos trabajos: que un prospecto desee pertenecer y que un socio reserve su hora de salida sin llamar. La mayoría de los clubes hacen mal los dos. Diseñamos sitios que transmiten la exclusividad de tu club y un portal de socios que se usa con gusto.',
    intro:
      'Trabajamos con clubes privados, de golf, náuticos, ecuestres y country clubs en mercados como Palm Beach, Scottsdale, Greenwich, Naples y Dallas.',
    items: [
      {
        title: 'El club para prospectos',
        description:
          'Instalaciones, vida social y comunidad contadas con la elegancia que hace desear la membresía, con solicitud discreta.',
        bullets: ['Instalaciones y actividades', 'Vida social y eventos', 'Solicitud de información'],
      },
      {
        title: 'Portal de socios',
        description:
          'Diseñamos la experiencia del portal para reservar, ver el calendario y consultar el estado de cuenta sin llamar al club.',
        bullets: ['Reservas y horarios', 'Calendario de eventos', 'Estado de cuenta'],
      },
      {
        title: 'Eventos privados',
        description:
          'Bodas, torneos y eventos corporativos con espacios, capacidades y solicitud de propuesta.',
        bullets: ['Espacios y capacidades', 'Bodas y torneos', 'Solicitud de propuesta'],
      },
      {
        title: 'Marca exclusiva',
        description:
          'Identidad que se vive igual en el sitio, la señalización, el menú y la tienda del club.',
        bullets: ['Identidad y manual', 'Aplicaciones en el club', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu club, a tus socios y a los prospectos que buscas.',
    pages: 'el club, membresía, golf y actividades, gastronomía, eventos, portal de socios y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un club privado?',
    costScope:
      'cuántas secciones e instalaciones, si incluye el diseño del portal de socios, si se conecta a tu software del club y si también necesitas marca',
    faqs: [
      {
        question: '¿Funciona con el software de nuestro club?',
        answer:
          'En muchos casos sí. Revisamos el que usas en la llamada y diseñamos el portal alrededor de él o lo entregamos listo para tu proveedor.',
      },
      {
        question: '¿El contenido para socios queda privado?',
        answer:
          'Sí. Lo que es solo para socios queda detrás del acceso y fuera de Google; lo público está pensado para atraer prospectos.',
      },
    ],
    aiSubject: 'mi club',
    remoteWho: 'clubes privados',
    proofText:
      'Proyectos reales de identidad y sitios web en turismo y recreación, cultura y diseño de marca. Es el estándar con el que trabajaríamos tu club.',
    howTo: 'el sitio web de un club privado',
    lead: {
      heading: 'Hablemos de tu club',
      description:
        'Cuéntanos sobre tu club y qué necesitan tus socios. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un country club en Naples y los socios no usan el portal porque es complicado.',
    },
  },
  en: {
    seoTitle: 'Private Club & Country Club Website Design',
    seoDescription:
      'Websites for private, golf, yacht, and country clubs: the club experience for prospects, an easy member portal, and an exclusive brand.',
    keywords:
      'private club website design, country club website design, golf club website design, club member portal design, yacht club website',
    subtitle: 'Web design for private clubs',
    accent: 'Private Clubs',
    target: 'private clubs',
    hero: 'Your site has two jobs: make prospects want to belong and let members book a tee time without calling. Most clubs do both poorly. We design websites that convey your club’s exclusivity and a member portal people enjoy using.',
    intro:
      'We work with private, golf, yacht, equestrian, and country clubs in markets like Palm Beach, Scottsdale, Greenwich, Naples, and Dallas.',
    items: [
      {
        title: 'The club for prospects',
        description:
          'Facilities, social life, and community told with the elegance that makes membership desirable, with a discreet inquiry.',
        bullets: ['Facilities and activities', 'Social life and events', 'Membership inquiry'],
      },
      {
        title: 'Member portal',
        description:
          'We design the portal experience to book, check the calendar, and review statements without calling the club.',
        bullets: ['Reservations and tee times', 'Event calendar', 'Member statements'],
      },
      {
        title: 'Private events',
        description: 'Weddings, tournaments, and corporate events with spaces, capacities, and proposal requests.',
        bullets: ['Spaces and capacities', 'Weddings and tournaments', 'Proposal requests'],
      },
      {
        title: 'An exclusive brand',
        description: 'An identity experienced the same way on the site, signage, menus, and the club shop.',
        bullets: ['Identity and guidelines', 'On-property applications', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your club, your members, and the prospects you want.',
    pages: 'the club, membership, golf and activities, dining, events, member portal, and contact',
    costQuestion: 'How much does a private club website cost?',
    costScope:
      'how many sections and facilities, whether it includes the member portal design, whether it connects to your club software, and whether you also need a brand',
    faqs: [
      {
        question: 'Does it work with our club software?',
        answer:
          'In many cases, yes. We review the one you use on the call and design the portal around it or hand it off ready for your provider.',
      },
      {
        question: 'Does members-only content stay private?',
        answer:
          'Yes. Members-only content stays behind the login and out of Google; the public side is designed to attract prospects.',
      },
    ],
    aiSubject: 'my club',
    remoteWho: 'private clubs',
    proofText:
      'Real identity and website work in tourism and recreation, culture, and brand design. It is the standard we would bring to your club.',
    howTo: 'a private club website',
    lead: {
      heading: 'Let’s talk about your club',
      description:
        'Tell us about your club and what your members need. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a country club in Naples and members don’t use the portal because it is complicated.',
    },
  },
});
