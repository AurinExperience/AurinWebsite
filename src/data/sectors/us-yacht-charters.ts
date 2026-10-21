import { defineSector } from './build';

/**
 * Yates (EE. UU.) — "yacht charter website design" / "yacht broker website
 * design". Ángulo: chárter y venta de yates de lujo en Miami, Fort Lauderdale,
 * Palm Beach y Newport; la embarcación se vende por imagen y el broker por
 * confianza. Cotización y consulta discreta como acción principal.
 */
export const usYachtCharters = defineSector({
  id: 'us-yacht-charters',
  country: 'US',
  publishAt: '2026-10-25T00:00:00-06:00',
  slug: { es: 'para-yates-charter-y-venta', en: 'for-yacht-charters-and-brokers' },
  name: { es: 'Yates: chárter y venta', en: 'Yacht charters and brokers' },
  proof: ['elRollo', 'fortrade', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Chárter y Venta de Yates de Lujo',
    seoDescription:
      'Sitios web para empresas de chárter y brokers de yates de lujo: embarcaciones presentadas como merecen, destinos, cotización rápida y la discreción que esperan tus clientes.',
    keywords:
      'diseño web yates, sitio web chárter de yates, página web broker de yates, diseño web yates de lujo Miami, sitio web venta de yates',
    subtitle: 'Diseño web para chárter y venta de yates',
    accent: 'Yates de Lujo',
    target: 'empresas de yates',
    hero: 'Quien renta o compra un yate de lujo decide por cómo se ve la embarcación y por la confianza que le da quien la ofrece. Si tu sitio parece un catálogo genérico, tu flota pierde todo su encanto. Diseñamos sitios que hacen sentir el viaje antes de zarpar y llevan a una consulta privada.',
    intro:
      'Trabajamos con empresas de chárter, brokers y administradoras de yates de lujo en mercados como Miami, Fort Lauderdale, Palm Beach, Newport y San Diego.',
    items: [
      {
        title: 'Embarcaciones que lucen',
        description:
          'Cada yate con fotografía y video a pantalla completa, especificaciones, cabinas, tripulación y amenidades.',
        bullets: ['Galerías a pantalla completa', 'Especificaciones y planos', 'Tripulación y amenidades'],
      },
      {
        title: 'Destinos e itinerarios',
        description:
          'Itinerarios sugeridos por temporada y destino para que el cliente se imagine el viaje y pida la cotización.',
        bullets: ['Destinos por temporada', 'Itinerarios sugeridos', 'Experiencias a bordo'],
      },
      {
        title: 'Cotización y consulta privada',
        description:
          'Solicitud de chárter o de compra rápida desde cualquier pantalla, con los datos justos y seguimiento inmediato de tu equipo.',
        bullets: ['Solicitud de chárter', 'Consulta de compra', 'Seguimiento en tu CRM'],
      },
      {
        title: 'Marca náutica de lujo',
        description:
          'Identidad para tu empresa y tu flota, consistente en el sitio, las embarcaciones y los materiales para clientes.',
        bullets: ['Identidad y manual', 'Aplicaciones en la flota según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu flota, tus destinos y a tus clientes.',
    pages: 'flota, chárter, venta, destinos, itinerarios, nosotros y cotización',
    costQuestion: '¿Cuánto cuesta el sitio web de una empresa de yates?',
    costScope:
      'cuántas embarcaciones y destinos, si incluye venta además de chárter, si se conecta a tus listados, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Pueden conectar el sitio con nuestros listados de yates?',
        answer:
          'Según el sistema de listados que uses, sí. Lo revisamos en la llamada y lo incluimos en la cotización.',
      },
      {
        question: '¿Nos ayudan con fotografía y video de la flota?',
        answer:
          'Podemos dirigirla o incluirla en el alcance. En yates, la imagen es lo que convierte una visita en una consulta.',
      },
    ],
    aiSubject: 'mi empresa',
    remoteWho: 'empresas de yates',
    proofText:
      'Proyectos reales de identidad y sitios web en turismo y recreación, finanzas internacionales y diseño de marca. Es el estándar con el que trabajaríamos tu empresa.',
    howTo: 'el sitio web de una empresa de chárter o venta de yates',
    lead: {
      heading: 'Hablemos de tu flota',
      description:
        'Cuéntanos qué embarcaciones ofreces y a quién atiendes. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una flota de chárter en Miami y queremos que las solicitudes lleguen por el sitio.',
    },
  },
  en: {
    seoTitle: 'Yacht Charter & Yacht Broker Website Design',
    seoDescription:
      'Websites for luxury yacht charter companies and yacht brokers: vessels presented the way they deserve, destinations, fast inquiries, and the discretion your clients expect.',
    keywords:
      'yacht charter website design, yacht broker website design, luxury yacht website, yacht charter web design Miami, yacht sales website',
    subtitle: 'Web design for yacht charters and brokers',
    accent: 'Luxury Yachts',
    target: 'yacht companies',
    hero: 'People who charter or buy a luxury yacht decide by how the vessel looks and how much they trust whoever offers it. If your site looks like a generic catalog, your fleet loses its magic. We design websites that let people feel the voyage before leaving the dock and lead to a private inquiry.',
    intro:
      'We work with luxury yacht charter companies, brokers, and yacht management firms in markets like Miami, Fort Lauderdale, Palm Beach, Newport, and San Diego.',
    items: [
      {
        title: 'Vessels that shine',
        description:
          'Every yacht with full-screen photography and video, specifications, cabins, crew, and amenities.',
        bullets: ['Full-screen galleries', 'Specs and layouts', 'Crew and amenities'],
      },
      {
        title: 'Destinations and itineraries',
        description:
          'Suggested itineraries by season and destination so clients picture the trip and request a quote.',
        bullets: ['Destinations by season', 'Suggested itineraries', 'Onboard experiences'],
      },
      {
        title: 'Quotes and private inquiries',
        description:
          'Fast charter or purchase inquiries from any screen, with just the right fields and immediate follow-up from your team.',
        bullets: ['Charter inquiry', 'Purchase inquiry', 'Follow-up in your CRM'],
      },
      {
        title: 'A luxury nautical brand',
        description:
          'An identity for your company and fleet, consistent across the site, the vessels, and client materials.',
        bullets: ['Identity and guidelines', 'Fleet applications based on scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'A video call to learn about your fleet, your destinations, and your clients.',
    pages: 'fleet, charter, sales, destinations, itineraries, about, and inquiry',
    costQuestion: 'How much does a yacht company website cost?',
    costScope:
      'how many vessels and destinations, whether it includes sales as well as charter, whether it connects to your listings, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Can you connect the site to our yacht listings?',
        answer:
          'Depending on the listings system you use, yes. We review it on the call and include it in the quote.',
      },
      {
        question: 'Can you help with fleet photography and video?',
        answer:
          'We can direct it or include it in the scope. With yachts, imagery is what turns a visit into an inquiry.',
      },
    ],
    aiSubject: 'my company',
    remoteWho: 'yacht companies',
    proofText:
      'Real identity and website work in tourism and recreation, international finance, and brand design. It is the standard we would bring to your company.',
    howTo: 'a yacht charter or brokerage website',
    lead: {
      heading: 'Let’s talk about your fleet',
      description:
        'Tell us which vessels you offer and who you serve. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a charter fleet in Miami and want inquiries to come through the site.',
    },
  },
});
