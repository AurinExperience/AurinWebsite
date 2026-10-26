import { defineSector } from './build';

/**
 * Agentes y brokers de seguros — "diseño web para agentes de seguros" /
 * "página web para promotoría de seguros". Ángulo: el agente vende confianza;
 * cotizador como gancho, productos explicados y contacto inmediato.
 * Prueba: Monetix, Bonanza y Debiti, clientes reales de finanzas.
 */
export const agentesSeguros = defineSector({
  id: 'agentes-seguros',
  publishAt: '2026-10-20T00:00:00-06:00',
  slug: { es: 'para-agentes-de-seguros', en: 'for-insurance-agents' },
  name: { es: 'Agentes de seguros', en: 'Insurance agents' },
  proof: ['monetix', 'bonanza', 'debiti'],
  es: {
    seoTitle: 'Diseño Web para Agentes y Brokers de Seguros',
    seoDescription:
      'Páginas web para agentes, brokers y promotorías de seguros: productos explicados, cotizaciones en línea y presencia en Google y en la IA.',
    keywords:
      'diseño web para agentes de seguros, página web broker de seguros, sitio web promotoría, cotizador de seguros web, marketing para agentes de seguros',
    subtitle: 'Diseño web para agentes y brokers de seguros',
    accent: 'Agentes de Seguros',
    target: 'agentes de seguros',
    hero: 'Un seguro se compra a alguien en quien se confía. Antes de llamarte, tu prospecto revisa quién eres, qué ofreces y si le resuelves rápido, y cada vez más le pregunta a una IA. Diseñamos sitios que transmiten tu experiencia y convierten visitas en cotizaciones.',
    stat: { value: 'Finanzas', label: 'ya trabajamos con marcas como Monetix, Bonanza y Debiti' },
    intro:
      'Diseñamos para agentes independientes, brokers y promotorías. Cada página web para agente de seguros se diseña alrededor de los ramos que vendes y del cliente que quieres atraer.',
    items: [
      {
        title: 'Productos explicados sin letra chica',
        description:
          'Gastos médicos, vida, auto, hogar o empresas: cada ramo explicado en lenguaje claro, para que el prospecto entienda qué necesita.',
        bullets: ['Una página por ramo', 'Preguntas frecuentes por producto', 'Para personas y empresas'],
      },
      {
        title: 'Cotizaciones que te llegan',
        description:
          'Formularios cortos por producto que te mandan al prospecto con lo que necesitas para cotizar, por correo o WhatsApp.',
        bullets: ['Formulario de cotización por ramo', 'Contacto directo por WhatsApp'],
        custom: ['Agenda de asesoría'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Tus prospectos buscan seguros en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué ofreces y te puedan recomendar.',
        bullets: ['Datos estructurados de tu agencia', 'Contenido que la IA puede citar', 'Artículos sobre seguros'],
      },
      {
        title: 'Marca personal o de promotoría',
        description:
          'Una identidad cuidada hace que te veas igual de profesional que una aseguradora grande, en tu sitio, tus propuestas y tus redes.',
        bullets: ['Logo e identidad con manual', 'Plantillas de propuesta según el alcance', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una llamada para entender qué ramos vendes, a quién y cómo llegan hoy tus prospectos.',
    pages: 'ramos y productos, aseguradoras con las que trabajas, cotización, nosotros y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de un agente de seguros?',
    costScope:
      'cuántos ramos y productos, si incluye cotizadores o blog y si también necesitas marca',
    faqs: [
      {
        question: '¿Puedo mostrar las aseguradoras con las que trabajo?',
        answer:
          'Sí, siempre que respetes los lineamientos de uso de marca de cada aseguradora. Te ayudamos a presentarlas de forma correcta.',
      },
      {
        question: '¿El sitio puede tener un cotizador?',
        answer:
          'Incluimos un formulario por ramo que te manda los datos para cotizar. Si una aseguradora te da un cotizador en línea, también lo podemos enlazar, y si quieres uno propio lo desarrollamos a la medida.',
      },
    ],
    aiSubject: 'mi agencia de seguros',
    remoteWho: 'agentes de seguros',
    proofText:
      'Proyectos reales de identidad y sitios web en finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu agencia.',
    howTo: 'el sitio web de un agente o broker de seguros',
    lead: {
      heading: 'Hablemos de tu agencia de seguros',
      description:
        'Cuéntanos qué ramos vendes y cómo llegan hoy tus prospectos. Te contactaremos lo antes posible y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Soy agente de gastos médicos y vida y quiero recibir más cotizaciones en línea.',
    },
  },
  en: {
    seoTitle: 'Web Design for Insurance Agents and Brokers',
    seoDescription:
      'Websites for insurance agents, brokers, and agencies: products explained, online quote requests, and visibility on Google and AI search.',
    keywords:
      'web design for insurance agents, insurance broker website, insurance agency website, insurance quote website, insurance agent marketing',
    subtitle: 'Web design for insurance agents and brokers',
    accent: 'Insurance Agents',
    target: 'insurance agents',
    hero: 'People buy insurance from someone they trust. Before calling you, prospects check who you are, what you offer, and whether you respond fast, and more and more often they ask an AI. We design websites that convey your experience and turn visits into quote requests.',
    stat: { value: 'Finance', label: 'we already work with brands like Monetix, Bonanza, and Debiti' },
    intro:
      'We design for independent agents, brokers, and agencies. Every insurance agent website is designed around the lines you sell and the client you want to attract.',
    items: [
      {
        title: 'Products without fine print',
        description:
          'Health, life, auto, home, or business: each line explained in plain language so prospects understand what they need.',
        bullets: ['A page per line', 'FAQs for each product', 'For individuals and businesses'],
      },
      {
        title: 'Quote requests that reach you',
        description:
          'Short forms per product that send you the prospect with what you need to quote, by email or WhatsApp.',
        bullets: ['Quote form per line', 'Direct contact over WhatsApp'],
        custom: ['Consultation booking'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Prospects search for insurance on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you offer and can recommend you.',
        bullets: ['Structured data about your agency', 'Content AI tools can cite', 'Articles about insurance'],
      },
      {
        title: 'Personal or agency brand',
        description:
          'A carefully crafted identity makes you look as professional as a big insurer, on your site, proposals, and social media.',
        bullets: ['Logo and identity with guidelines', 'Proposal templates based on project scope', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'We learn which lines you sell, to whom, and how prospects find you today.',
    pages: 'lines and products, carriers you work with, quote requests, about, and the privacy notice',
    costQuestion: 'How much does an insurance agent website cost?',
    costScope:
      'how many lines and products, whether it includes quote tools or a blog, and whether you also need a brand',
    faqs: [
      {
        question: 'Can I show the carriers I work with?',
        answer:
          'Yes, as long as you follow each carrier’s brand usage guidelines. We help you present them correctly.',
      },
      {
        question: 'Can the site include a quote tool?',
        answer:
          'We include a form per line that sends you the details to quote. If a carrier gives you an online quote tool, we can link to it too, and if you want your own, we build it as custom development.',
      },
    ],
    aiSubject: 'my insurance agency',
    remoteWho: 'insurance agents',
    proofText:
      'Real identity and website work in finance. The same care we put into every brand is what we would bring to your agency.',
    howTo: 'a website for an insurance agent or broker',
    lead: {
      heading: 'Let’s talk about your insurance agency',
      description:
        'Tell us which lines you sell and how prospects find you today. We will reach out as soon as possible and send you an itemized proposal.',
      messagePlaceholder: 'E.g. I sell health and life insurance and want more quote requests online.',
    },
  },
});
