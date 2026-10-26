import { defineSector } from './build';

/**
 * Centros ecuestres y criadores de caballos (EE. UU.) — "equestrian center
 * website design". Ángulo: clientes de alto patrimonio que eligen dónde
 * entrenar, alojar o comprar un caballo por reputación, instalaciones y
 * linajes; venta de caballos bajo consulta y programas de entrenamiento.
 */
export const usEquestrian = defineSector({
  id: 'us-equestrian',
  country: 'US',
  publishAt: '2026-11-01T00:00:00-06:00',
  slug: { es: 'para-centros-ecuestres', en: 'for-equestrian-centers' },
  name: { es: 'Centros ecuestres y criadores', en: 'Equestrian centers and breeders' },
  proof: ['elRollo', 'fruitAcademy', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Centros Ecuestres en EE. UU.',
    seoDescription:
      'Sitios para centros ecuestres y criadores en Estados Unidos: instalaciones, programas, caballos en venta, linajes y una marca a tu nivel.',
    keywords:
      'diseño web centro ecuestre, sitio web criador de caballos, página web establo de entrenamiento, caballos en venta sitio web, diseño web ecuestre Wellington',
    subtitle: 'Diseño web para centros ecuestres y criadores',
    accent: 'Centros Ecuestres',
    target: 'centros ecuestres y criadores',
    hero: 'Un jinete que busca dónde entrenar o alojar a su caballo, o un comprador que busca su próximo caballo de competencia, conoce el mundo ecuestre y detecta en segundos si un establo está a su nivel. Revisa instalaciones, entrenadores, resultados y linajes. Diseñamos sitios que reflejan la calidad de tu programa y llevan a la visita o a la consulta.',
    intro:
      'Diseñamos páginas web para centros de entrenamiento de salto, doma y hunter, establos de pensión de lujo, criadores de caballos deportivos y ranchos en Wellington, Ocala, Kentucky, Aiken y California.',
    items: [
      {
        title: 'Instalaciones',
        description:
          'Pistas, caballerizas, potreros y servicios presentados con fotografía y video que muestran el cuidado del lugar.',
        bullets: ['Pistas y caballerizas', 'Potreros y servicios', 'Video del centro'],
      },
      {
        title: 'Programas y entrenadores',
        description:
          'Entrenamiento, pensión, clases y programas de competencia, con los perfiles y resultados de tus entrenadores.',
        bullets: ['Programas de entrenamiento', 'Perfiles de entrenadores', 'Resultados de competencia'],
      },
      {
        title: 'Caballos en venta',
        description:
          'Fichas con video, linaje, edad, alzada y trayectoria, y consulta privada en lugar de precio público si así lo prefieres.',
        bullets: ['Fichas con video', 'Linaje y trayectoria', 'Consulta privada'],
      },
      {
        title: 'Cría y sementales',
        description:
          'Sementales, yeguas, potros disponibles y contratos de monta, presentados para criadores y compradores.',
        bullets: ['Sementales y linajes', 'Potros disponibles', 'Solicitud de monta'],
      },
    ],
    diagnosis: 'Una videollamada para conocer tu centro, tus programas y a qué jinetes quieres atraer.',
    pages: 'instalaciones, programas, entrenadores, caballos en venta, cría, resultados y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de un centro ecuestre?',
    costScope:
      'cuántos programas, si incluye caballos en venta y sementales, si tu equipo actualizará las fichas y si también necesitas marca',
    faqs: [
      {
        question: '¿Podemos actualizar los caballos en venta nosotros mismos?',
        answer:
          'Sí, con un panel a la medida para agregar caballos con fotos, video y datos, y marcarlos como vendidos sin depender de nosotros.',
      },
      {
        question: '¿Conviene publicar precios de los caballos?',
        answer:
          'En caballos de alto valor, la mayoría prefiere consulta privada. Diseñamos fichas con rangos o con consulta según cómo vendes.',
      },
      {
        question: '¿Pueden hacer la marca del centro?',
        answer:
          'Sí. Diseñamos logo, colores e identidad para el sitio, la ropa del equipo, mantas y remolques, para que el establo se reconozca en cada competencia.',
      },
    ],
    aiSubject: 'mi centro ecuestre',
    remoteWho: 'centros ecuestres',
    proofText:
      'Proyectos reales de sitios web e identidad en turismo y recreación, agroindustria y diseño de marca. Es el estándar con el que trabajaríamos tu centro.',
    howTo: 'el sitio web de un centro ecuestre',
    lead: {
      heading: 'Hablemos de tu centro',
      description:
        'Cuéntanos qué programas ofreces y dónde está tu centro. Te contactaremos para conocerlo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un centro de salto en Wellington y vendemos caballos de competencia.',
    },
  },
  en: {
    seoTitle: 'Equestrian Center and Horse Breeder Website Design',
    seoDescription:
      'Websites for equestrian centers, training barns, and breeders in the US: facilities, programs, horses for sale, bloodlines, and a matching brand.',
    keywords:
      'equestrian website design, horse barn website, horse breeder website design, sale horses website, equestrian center web design',
    subtitle: 'Web design for equestrian centers and breeders',
    accent: 'Equestrian Centers',
    target: 'equestrian centers and breeders',
    hero: 'A rider looking for where to train or board, or a buyer searching for their next competition horse, knows the equestrian world and can tell in seconds whether a barn is at their level. They check facilities, trainers, results, and bloodlines. We design websites that reflect the quality of your program and lead to a visit or an inquiry.',
    intro:
      'We design websites for show jumping, dressage, and hunter training centers, luxury boarding facilities, sport horse breeders, and farms in Wellington, Ocala, Kentucky, Aiken, and California.',
    items: [
      {
        title: 'Facilities',
        description:
          'Arenas, stables, paddocks, and amenities presented with photography and video that show the care behind the place.',
        bullets: ['Arenas and stables', 'Paddocks and amenities', 'Facility video'],
      },
      {
        title: 'Programs and trainers',
        description:
          'Training, boarding, lessons, and show programs, with your trainers’ profiles and results.',
        bullets: ['Training programs', 'Trainer profiles', 'Show results'],
      },
      {
        title: 'Horses for sale',
        description:
          'Listings with video, bloodlines, age, height, and record, with private inquiries instead of public prices if you prefer.',
        bullets: ['Listings with video', 'Bloodlines and record', 'Private inquiries'],
      },
      {
        title: 'Breeding and stallions',
        description:
          'Stallions, mares, available foals, and breeding contracts, presented for breeders and buyers.',
        bullets: ['Stallions and bloodlines', 'Available foals', 'Breeding inquiries'],
      },
    ],
    diagnosis: 'A video call to learn about your center, your programs, and the riders you want to attract.',
    pages: 'facilities, programs, trainers, horses for sale, breeding, results, and contact',
    costQuestion: 'How much does an equestrian center website cost?',
    costScope:
      'how many programs, whether it includes horses for sale and stallions, whether your team will update listings, and whether you also need a brand',
    faqs: [
      {
        question: 'Can we update sale horses ourselves?',
        answer:
          'Yes, with a custom panel to add horses with photos, video, and details, and mark them sold without relying on us.',
      },
      {
        question: 'Should we publish horse prices?',
        answer:
          'For high-value horses, most barns prefer private inquiries. We design listings with ranges or inquiries depending on how you sell.',
      },
      {
        question: 'Can you design the barn’s brand?',
        answer:
          'Yes. We design the logo, colors, and identity for the site, team apparel, coolers, and trailers, so your barn is recognized at every show.',
      },
    ],
    aiSubject: 'my equestrian center',
    remoteWho: 'equestrian centers',
    proofText:
      'Real website and identity work in tourism and recreation, agribusiness, and brand design. It is the standard we would bring to your center.',
    howTo: 'an equestrian center website',
    lead: {
      heading: 'Let’s talk about your center',
      description:
        'Tell us which programs you offer and where your center is. We will reach out to learn about it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a show jumping barn in Wellington and sell competition horses.',
    },
  },
});
