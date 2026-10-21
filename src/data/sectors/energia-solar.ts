import { defineSector } from './build';

/**
 * Energía solar — "diseño web para empresas de paneles solares" / "página web
 * para instaladora solar". Ángulo: inversión grande que se decide con números
 * (ahorro, retorno) y confianza en el instalador; cotización a partir del
 * recibo de luz. Prueba: Mexico Pacific, cliente real de energía. Sin
 * promesas de ahorro concretas.
 */
export const energiaSolar = defineSector({
  id: 'energia-solar',
  publishAt: '2026-10-21T00:00:00-06:00',
  slug: { es: 'para-energia-solar', en: 'for-solar-companies' },
  name: { es: 'Energía solar', en: 'Solar energy' },
  proof: ['mexicoPacific', 'grupoEstrella', 'ancient'],
  es: {
    seoTitle: 'Diseño Web para Empresas de Energía Solar',
    seoDescription:
      'Páginas web para empresas de paneles solares: ahorro bien explicado, cotización con tu recibo de luz, proyectos instalados y presencia en Google y en la IA.',
    keywords:
      'diseño web para empresas de paneles solares, página web instaladora solar, sitio web energía solar, cotizador paneles solares, marketing solar',
    subtitle: 'Diseño web para empresas de energía solar',
    accent: 'Energía Solar',
    target: 'empresas de energía solar',
    hero: 'Instalar paneles es una inversión que se decide con números y con confianza en quien instala. Antes de pedir cotización, el cliente quiere entender cuánto podría ahorrar, ver instalaciones reales y saber que respondes, y cada vez más le pregunta a una IA. Diseñamos sitios que explican el ahorro con claridad y convierten visitas en cotizaciones.',
    stat: { value: 'Energía', label: 'ya trabajamos con empresas como Mexico Pacific' },
    intro:
      'Diseñamos para instaladoras solares residenciales, comerciales e industriales. Cada página web para empresa de paneles solares se diseña a partir del cliente que quieres atraer y de cómo cotizas.',
    items: [
      {
        title: 'Ahorro que se entiende',
        description:
          'Cómo funciona, qué cambia en el recibo y qué hay que considerar, explicado con claridad y sin promesas exageradas.',
        bullets: ['Explicación del sistema y el ahorro', 'Financiamiento si lo ofreces', 'Preguntas frecuentes'],
      },
      {
        title: 'Cotización con el recibo de luz',
        description:
          'Un formulario donde el cliente sube su recibo y te deja sus datos, para que cotices con información real desde el primer contacto.',
        bullets: ['Carga del recibo de luz', 'Formulario residencial y empresarial', 'Contacto directo por WhatsApp'],
      },
      {
        title: 'Instalaciones que dan confianza',
        description:
          'Proyectos instalados con fotos, ubicación, tamaño del sistema y tipo de cliente. La mejor prueba de que sabes lo que haces.',
        bullets: ['Galería de instalaciones', 'Casos residenciales e industriales', 'Certificaciones y garantías'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Tus clientes buscan "paneles solares" en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas te entiendan y te recomienden.',
        bullets: ['Datos estructurados de tu empresa', 'Páginas por ciudad o servicio', 'Contenido que la IA puede citar'],
      },
    ],
    diagnosis: 'Una llamada para entender tu mercado, tu forma de cotizar y cómo llegan hoy tus prospectos.',
    pages: 'residencial, empresas, financiamiento, instalaciones, cotización y aviso de privacidad',
    costQuestion: '¿Cuánto cuesta la página web de una empresa de paneles solares?',
    costScope:
      'cuántos servicios e instalaciones, si incluye formulario de cotización o carga de recibos, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿El sitio puede calcular el ahorro del cliente?',
        answer:
          'Podemos incluir un estimador con las reglas que tú definas, siempre presentado como aproximado. Muchas instaladoras prefieren pedir el recibo y cotizar con datos reales.',
      },
      {
        question: '¿Pueden mostrar instalaciones en varias ciudades?',
        answer:
          'Sí. Organizamos tus proyectos por ciudad y tipo de cliente, lo que además ayuda a que te encuentren en búsquedas locales.',
      },
    ],
    aiSubject: 'mi empresa solar',
    remoteWho: 'empresas de energía solar',
    proofText:
      'Proyectos reales de identidad y sitios web en energía, construcción y software. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu empresa.',
    howTo: 'el sitio web de una empresa de energía solar',
    lead: {
      heading: 'Hablemos de tu empresa solar',
      description:
        'Cuéntanos a qué clientes instalas y cómo cotizas hoy. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Instalamos paneles en casas y negocios y queremos recibir cotizaciones con el recibo de luz.',
    },
  },
  en: {
    seoTitle: 'Web Design for Solar Energy Companies',
    seoDescription:
      'Websites for solar companies: savings explained clearly, quotes from the electricity bill, installed projects, and visibility on Google and AI search.',
    keywords:
      'web design for solar companies, solar installer website, solar energy website, solar quote tool, solar marketing',
    subtitle: 'Web design for solar energy companies',
    accent: 'Solar Energy',
    target: 'solar energy companies',
    hero: 'Installing solar panels is an investment decided with numbers and with trust in the installer. Before requesting a quote, customers want to understand how much they could save, see real installations, and know you respond, and more and more often they ask an AI. We design websites that explain savings clearly and turn visits into quote requests.',
    stat: { value: 'Energy', label: 'we already work with companies like Mexico Pacific' },
    intro:
      'We design for residential, commercial, and industrial solar installers. Every solar company website is designed around the customer you want to attract and how you quote.',
    items: [
      {
        title: 'Savings people understand',
        description:
          'How it works, what changes on the bill, and what to consider, explained clearly and without exaggerated promises.',
        bullets: ['System and savings explained', 'Financing if you offer it', 'FAQs'],
      },
      {
        title: 'Quotes from the electricity bill',
        description:
          'A form where customers upload their bill and leave their details, so you quote with real information from the first contact.',
        bullets: ['Bill upload', 'Residential and business forms', 'Direct contact over WhatsApp'],
      },
      {
        title: 'Installations that build trust',
        description:
          'Installed projects with photos, location, system size, and customer type. The best proof you know what you are doing.',
        bullets: ['Installation gallery', 'Residential and industrial cases', 'Certifications and warranties'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Customers search for "solar panels" on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand you and recommend you.',
        bullets: ['Structured data about your company', 'Pages by city or service', 'Content AI tools can cite'],
      },
    ],
    diagnosis: 'We learn about your market, how you quote, and how leads find you today.',
    pages: 'residential, business, financing, installations, quotes, and the privacy notice',
    costQuestion: 'How much does a solar company website cost?',
    costScope:
      'how many services and installations, whether it includes a quote form or bill upload, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'Can the site estimate a customer’s savings?',
        answer:
          'We can include an estimator with the rules you define, always presented as approximate. Many installers prefer to request the bill and quote with real data.',
      },
      {
        question: 'Can you show installations in several cities?',
        answer:
          'Yes. We organize your projects by city and customer type, which also helps you show up in local searches.',
      },
    ],
    aiSubject: 'my solar company',
    remoteWho: 'solar companies',
    proofText:
      'Real identity and website work in energy, construction, and software. The same care we put into every brand is what we would bring to your company.',
    howTo: 'a solar energy company website',
    lead: {
      heading: 'Let’s talk about your solar company',
      description:
        'Tell us which customers you install for and how you quote today. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We install panels for homes and businesses and want to receive quote requests with the electricity bill.',
    },
  },
});
