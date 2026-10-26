import { defineSector } from './build';

/**
 * Franquicias — "diseño web para franquicias" / "página web para vender
 * franquicias". Ángulo: dos públicos (el cliente final y el futuro
 * franquiciatario), sucursales que se encuentran y una sola marca consistente.
 * Sin cliente franquiciante en el catálogo: datos genéricos.
 */
export const franquicias = defineSector({
  id: 'franquicias',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'para-franquicias', en: 'for-franchises' },
  name: { es: 'Franquicias', en: 'Franchises' },
  proof: ['elRollo', 'inglesIndividual', 'pfi'],
  es: {
    seoTitle: 'Diseño Web para Franquicias y Cadenas',
    seoDescription:
      'Páginas web para franquicias y cadenas: sucursales fáciles de encontrar, captación de franquiciatarios y una marca consistente en cada punto.',
    keywords:
      'diseño web para franquicias, página web para vender franquicias, sitio web cadena de sucursales, captación de franquiciatarios, marketing de franquicias',
    subtitle: 'Diseño web para franquicias y cadenas',
    accent: 'Franquicias',
    target: 'franquicias',
    hero: 'Tu sitio le habla a dos personas: al cliente que busca la sucursal más cercana y al inversionista que evalúa comprar una franquicia, y cada vez más los dos le preguntan a una IA. Diseñamos sitios que llevan a cada uno a lo suyo y mantienen tu marca igual de sólida en cada punto de venta.',
    intro:
      'Diseñamos páginas web para franquicias, cadenas de sucursales y marcas que se preparan para franquiciar. Cada página web para franquicia se diseña para tus clientes y para tus futuros socios.',
    items: [
      {
        title: 'Sucursales que se encuentran',
        description:
          'Mapa y página por sucursal con dirección, horarios y contacto, que además ayudan a aparecer en las búsquedas locales de cada ciudad.',
        bullets: ['Página por sucursal', 'Horarios y contacto'],
        custom: ['Localizador de sucursales'],
      },
      {
        title: 'Captación de franquiciatarios',
        description:
          'Una sección que explica el modelo, el perfil que buscas y el proceso, con un formulario que filtra a los interesados reales.',
        bullets: ['Modelo de negocio explicado', 'Perfil y proceso', 'Formulario de prospectos'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Tus clientes buscan "cerca de mí" en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan tu marca y cada sucursal.',
        bullets: ['Datos estructurados por sucursal', 'Contenido que la IA puede citar', 'Promociones por ciudad'],
      },
      {
        title: 'Una marca igual en cada punto',
        description:
          'Manual de marca y aplicaciones para que cada franquiciatario use tu identidad de la misma forma en su local, sus redes y su publicidad.',
        bullets: ['Manual de marca', 'Plantillas para franquiciatarios', 'Señalética según el alcance'],
      },
    ],
    diagnosis: 'Una llamada para entender tu marca, tus sucursales y el perfil de franquiciatario que buscas.',
    pages: 'productos o servicios, sucursales, franquicias, promociones, nosotros y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de una franquicia?',
    costScope:
      'cuántas sucursales, si incluye localizador y administrador, si incluye la sección para franquiciatarios y si también necesitas marca',
    faqs: [
      {
        question: '¿Cada franquiciatario puede actualizar su sucursal?',
        answer:
          'Con un administrador a la medida, tu equipo puede actualizar horarios y promociones de cada sucursal sin depender de nosotros.',
      },
      {
        question: '¿Nos ayudan con el manual de marca para franquiciatarios?',
        answer:
          'Sí. Diseñamos el manual y las plantillas para que tu marca se aplique igual en cada local, en redes y en publicidad.',
      },
    ],
    aiSubject: 'mi franquicia',
    remoteWho: 'franquicias',
    proofText:
      'Proyectos reales de identidad y sitios web en recreación, educación y marcas de consumo. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu franquicia.',
    howTo: 'el sitio web de una franquicia',
    lead: {
      heading: 'Hablemos de tu franquicia',
      description:
        'Cuéntanos cuántas sucursales tienes y si buscas nuevos franquiciatarios. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos 30 sucursales y queremos atraer franquiciatarios en otras ciudades.',
    },
  },
  en: {
    seoTitle: 'Web Design for Franchises and Chains',
    seoDescription:
      'Websites for franchises and chains: locations that are easy to find, franchisee recruitment, and a consistent brand at every location.',
    keywords:
      'web design for franchises, franchise sales website, multi-location website, franchisee recruitment, franchise marketing',
    subtitle: 'Web design for franchises and chains',
    accent: 'Franchises',
    target: 'franchises',
    hero: 'Your website speaks to two people: the customer looking for the nearest location and the investor evaluating a franchise, and more and more often both ask an AI. We design websites that take each of them to what they need and keep your brand equally solid at every location.',
    intro:
      'We design websites for franchises, multi-location chains, and brands preparing to franchise. Every franchise website is designed for your customers and your future partners.',
    items: [
      {
        title: 'Locations people find',
        description:
          'A map and a page per location with address, hours, and contact, which also help you appear in local searches in each city.',
        bullets: ['Page per location', 'Hours and contact'],
        custom: ['Store locator'],
      },
      {
        title: 'Franchisee recruitment',
        description:
          'A section that explains the model, the profile you are looking for, and the process, with a form that filters real prospects.',
        bullets: ['Business model explained', 'Profile and process', 'Prospect form'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Customers search "near me" on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand your brand and each location.',
        bullets: ['Structured data per location', 'Content AI tools can cite', 'Promotions by city'],
      },
      {
        title: 'One brand at every location',
        description:
          'Brand guidelines and applications so every franchisee uses your identity the same way in their store, social media, and advertising.',
        bullets: ['Brand guidelines', 'Templates for franchisees', 'Signage based on project scope'],
      },
    ],
    diagnosis: 'We learn about your brand, your locations, and the franchisee profile you are looking for.',
    pages: 'products or services, locations, franchising, promotions, about, and the privacy notice',
    costQuestion: 'How much does a franchise website cost?',
    costScope:
      'how many locations, whether it includes a locator and admin, whether it includes the franchisee section, and whether you also need a brand',
    faqs: [
      {
        question: 'Can each franchisee update their own location?',
        answer:
          'With a custom admin, your team can update each location’s hours and promotions without depending on us.',
      },
      {
        question: 'Can you help with brand guidelines for franchisees?',
        answer:
          'Yes. We design the guidelines and templates so your brand is applied the same way at every location, on social media, and in advertising.',
      },
    ],
    aiSubject: 'my franchise',
    remoteWho: 'franchises',
    proofText:
      'Real identity and website work in leisure, education, and consumer brands. The same care we put into every brand is what we would bring to your franchise.',
    howTo: 'a franchise website',
    lead: {
      heading: 'Let’s talk about your franchise',
      description:
        'Tell us how many locations you have and whether you are looking for new franchisees. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have 30 locations and want to attract franchisees in other cities.',
    },
  },
});
