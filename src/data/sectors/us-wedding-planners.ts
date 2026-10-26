import { defineSector } from './build';

/**
 * Organizadores de bodas y eventos de lujo (EE. UU.) — "luxury wedding planner
 * website design". Ángulo: planners y diseñadores de eventos que trabajan con
 * presupuestos de seis y siete cifras; el sitio filtra por nivel, muestra
 * estética editorial y lleva a la consulta. Distinto de `bodas-destino`
 * (bodas en México para parejas extranjeras).
 */
export const usWeddingPlanners = defineSector({
  id: 'us-wedding-planners',
  country: 'US',
  publishAt: '2026-11-02T00:00:00-06:00',
  slug: { es: 'para-organizadores-de-bodas-de-lujo', en: 'for-luxury-wedding-planners' },
  name: { es: 'Bodas y eventos de lujo', en: 'Luxury wedding and event planners' },
  proof: ['elRollo', 'ideograma', 'sinfonica'],
  es: {
    seoTitle: 'Diseño Web para Wedding Planners de Lujo en EE. UU.',
    seoDescription:
      'Sitios para wedding planners y diseñadores de eventos de lujo en Estados Unidos: portafolio editorial, servicios, prensa y consulta que filtra.',
    keywords:
      'diseño web wedding planner de lujo, sitio web organizador de bodas Estados Unidos, página web diseñador de eventos, marketing wedding planner, sitio web bodas de lujo',
    subtitle: 'Diseño web para organizadores de bodas y eventos de lujo',
    accent: 'Bodas de Lujo',
    target: 'organizadores de bodas de lujo',
    hero: 'Las parejas y familias que invierten seis cifras en una boda llegan por recomendación, pero confirman en tu sitio. Buscan bodas publicadas, un estilo que reconozcan y la seguridad de que entiendes su nivel. Si tu sitio se ve como el de cualquier planner, la consulta no llega. Diseñamos sitios con estética editorial que filtran a las parejas correctas.',
    intro:
      'Diseñamos páginas web para wedding planners, diseñadores florales y de eventos, y productores de celebraciones privadas en Nueva York, Los Ángeles, Palm Beach, Napa, Aspen, Nantucket y otros mercados.',
    items: [
      {
        title: 'Portafolio editorial',
        description:
          'Bodas y eventos presentados como historias, con fotografía de primer nivel y créditos a cada proveedor.',
        bullets: ['Bodas como historias', 'Créditos a proveedores', 'Video y galerías'],
      },
      {
        title: 'Servicios y enfoque',
        description:
          'Planeación completa, diseño, producción y eventos de fin de semana explicados con tu forma de trabajar.',
        bullets: ['Planeación y diseño', 'Producción', 'Bodas de destino'],
      },
      {
        title: 'Prensa y reconocimientos',
        description:
          'Publicaciones en revistas y blogs de bodas, premios y conferencias, que confirman tu nivel antes de la primera llamada.',
        bullets: ['Publicaciones', 'Premios', 'Prensa'],
      },
      {
        title: 'Consulta que filtra',
        description:
          'Formulario con fecha, locación, invitados e inversión, para que tu equipo solo agende con parejas que encajan.',
        bullets: ['Filtro por inversión', 'Respuesta automática con siguiente paso'],
        custom: ['Agenda de consulta'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu estilo, tus bodas y el tipo de pareja que quieres atraer.',
    pages: 'portafolio, servicios, el equipo, prensa, testimonios, destinos y consulta',
    costQuestion: '¿Cuánto cuesta el sitio web de un wedding planner de lujo?',
    costScope:
      'cuántas bodas en el portafolio, si incluye páginas por destino, si tu equipo publicará nuevas bodas y si también necesitas marca',
    faqs: [
      {
        question: '¿Cómo filtramos parejas que no encajan con nuestro nivel?',
        answer:
          'Con un sitio que muestra claramente el nivel de tus bodas y un formulario que pide inversión estimada, locación e invitados. Así llegan menos consultas, pero mejores.',
      },
      {
        question: '¿Podemos publicar nuevas bodas nosotros mismos?',
        answer:
          'Sí, con un panel a la medida para crear cada boda con su galería, créditos e historia, sin depender de nosotros.',
      },
      {
        question: '¿Pueden hacer páginas por destino?',
        answer:
          'Sí. Páginas por destino con bodas reales ayudan a aparecer cuando una pareja busca planner en ese lugar.',
      },
    ],
    aiSubject: 'mi empresa de bodas',
    remoteWho: 'organizadores de bodas',
    proofText:
      'Proyectos reales de sitios web e identidad en turismo y recreación, diseño de marca y cultura. Es el estándar con el que trabajaríamos tu marca.',
    howTo: 'el sitio web de un organizador de bodas de lujo',
    lead: {
      heading: 'Hablemos de tu marca',
      description:
        'Cuéntanos qué tipo de bodas y eventos produces y en qué mercados. Te contactaremos para conocerte y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Planeamos bodas de fin de semana en Napa y Aspen con más de 200 invitados.',
    },
  },
  en: {
    seoTitle: 'Luxury Wedding Planner Website Design',
    seoDescription:
      'Websites for luxury wedding planners and event designers in the US: editorial portfolio, services, press, and consultation requests that qualify by budget.',
    keywords:
      'luxury wedding planner website design, wedding planner web design, event designer website, high-end wedding planner website, wedding planner branding',
    subtitle: 'Web design for luxury wedding and event planners',
    accent: 'Luxury Wedding Planners',
    target: 'luxury wedding planners',
    hero: 'Couples and families investing six figures in a wedding arrive by referral but confirm on your website. They look for published weddings, a style they recognize, and the reassurance that you understand their level. If your site looks like every other planner’s, the inquiry never comes. We design websites with an editorial aesthetic that attract the right couples.',
    intro:
      'We design websites for wedding planners, floral and event designers, and private celebration producers in New York, Los Angeles, Palm Beach, Napa, Aspen, Nantucket, and beyond.',
    items: [
      {
        title: 'Editorial portfolio',
        description:
          'Weddings and events presented as stories, with top-tier photography and credits to every vendor.',
        bullets: ['Weddings as stories', 'Vendor credits', 'Video and galleries'],
      },
      {
        title: 'Services and approach',
        description:
          'Full planning, design, production, and weekend events explained through how you work.',
        bullets: ['Planning and design', 'Production', 'Destination weddings'],
      },
      {
        title: 'Press and recognition',
        description:
          'Features in wedding magazines and blogs, awards, and speaking, confirming your level before the first call.',
        bullets: ['Features', 'Awards', 'Press'],
      },
      {
        title: 'Consultations that qualify',
        description:
          'A form with date, location, guest count, and investment, so your team only books couples who fit.',
        bullets: ['Investment qualification', 'Auto-reply with next steps'],
        custom: ['Consultation booking'],
      },
    ],
    diagnosis: 'A video call to learn about your style, your weddings, and the couples you want to attract.',
    pages: 'portfolio, services, the team, press, testimonials, destinations, and consultation',
    costQuestion: 'How much does a luxury wedding planner website cost?',
    costScope:
      'how many weddings in the portfolio, whether it includes destination pages, whether your team will publish new weddings, and whether you also need a brand',
    faqs: [
      {
        question: 'How do we filter couples who are not the right fit?',
        answer:
          'With a site that clearly shows the level of your weddings and a form that asks for estimated investment, location, and guest count. Fewer inquiries come in, but better ones.',
      },
      {
        question: 'Can we publish new weddings ourselves?',
        answer:
          'Yes, with a custom panel to create each wedding with its gallery, credits, and story, without relying on us.',
      },
      {
        question: 'Can you build destination pages?',
        answer:
          'Yes. Destination pages with real weddings help you show up when couples search for a planner in that place.',
      },
    ],
    aiSubject: 'my wedding company',
    remoteWho: 'wedding planners',
    proofText:
      'Real website and identity work in tourism and recreation, brand design, and culture. It is the standard we would bring to your brand.',
    howTo: 'a luxury wedding planner website',
    lead: {
      heading: 'Let’s talk about your brand',
      description:
        'Tell us what kind of weddings and events you produce and in which markets. We will reach out to get to know you and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We plan weekend weddings in Napa and Aspen with 200+ guests.',
    },
  },
});
