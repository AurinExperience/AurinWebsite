import { defineSector } from './build';

/**
 * Consultoras y firmas de servicios profesionales — "diseño web para
 * consultoras" / "página web para empresa de consultoría". Ángulo: venden
 * criterio, no productos; casos, metodología y liderazgo de pensamiento.
 * Prueba: Fortrade, Monetix y Ancient, clientes reales de servicios.
 */
export const consultoras = defineSector({
  id: 'consultoras',
  publishAt: '2026-10-20T00:00:00-06:00',
  slug: { es: 'para-consultoras', en: 'for-consulting-firms' },
  name: { es: 'Consultoras', en: 'Consulting firms' },
  proof: ['fortrade', 'monetix', 'ancient'],
  es: {
    seoTitle: 'Diseño Web para Consultoras y Firmas de Servicios',
    seoDescription:
      'Páginas web para consultoras y firmas de servicios profesionales: casos de éxito, metodología clara y presencia en Google y en buscadores con IA.',
    keywords:
      'diseño web para consultoras, página web empresa de consultoría, sitio web firma de servicios profesionales, marketing B2B consultoría',
    subtitle: 'Diseño web para consultoras y firmas de servicios',
    accent: 'Consultoras',
    target: 'consultoras',
    hero: 'Una consultora vende criterio, y el criterio no se ve en una lista de servicios. El director que te va a contratar revisa casos, metodología y quién está detrás, y cada vez más le pregunta a una IA. Diseñamos sitios que demuestran cómo piensa tu firma y llevan a esa primera reunión.',
    intro:
      'Trabajamos con consultoras de negocio, estrategia, tecnología, recursos humanos y firmas de servicios profesionales. Cada página web para consultora se diseña a partir de tus servicios y del cliente que quieres atraer.',
    items: [
      {
        title: 'Casos que demuestran resultados',
        description:
          'Cada proyecto contado como caso: el reto, cómo lo abordaron y qué cambió para el cliente, con su autorización.',
        bullets: ['Casos de éxito por industria', 'Metodología explicada', 'Testimonios con permiso'],
      },
      {
        title: 'Servicios claros para quien decide',
        description:
          'Qué haces, para quién y cómo trabajas, escrito para el director que tiene que justificar la contratación.',
        bullets: ['Una página por servicio', 'Industrias que atiendes', 'Equipo y socios'],
      },
      {
        title: 'Que te encuentren en Google y en la IA',
        description:
          'Tus clientes buscan proveedores en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio y tus artículos para que esas herramientas te entiendan y te puedan recomendar.',
        bullets: ['Datos estructurados de tu firma', 'Artículos y publicaciones', 'Contenido que la IA puede citar'],
      },
      {
        title: 'Branding para consultoras',
        description:
          'Una identidad sobria y propia hace que tu firma se vea igual de sólida en tu sitio, tus propuestas y tus presentaciones.',
        bullets: ['Logo e identidad con manual', 'Plantillas de propuesta y presentación', 'Sitio alineado con la marca'],
      },
    ],
    diagnosis: 'Una llamada para entender tus servicios, tus casos clave y el cliente que quieres atraer.',
    pages: 'servicios, industrias, casos, equipo, publicaciones y contacto',
    costQuestion: '¿Cuánto cuesta la página web de una consultora?',
    costScope:
      'cuántos servicios y casos, si incluye blog o publicaciones, si va en uno o en los dos idiomas y si también necesitas marca',
    faqs: [
      {
        question: '¿Cómo mostramos casos si son confidenciales?',
        answer:
          'Podemos contarlos sin nombrar al cliente, por industria y tipo de reto, o con su autorización. Lo importante es que se entienda cómo trabajas.',
      },
      {
        question: '¿Pueden escribir los textos del sitio?',
        answer:
          'Sí. Los redactamos contigo a partir de tus servicios y casos, en un lenguaje claro para quien decide, y tú revisas antes de publicar.',
      },
    ],
    aiSubject: 'mi consultora',
    remoteWho: 'consultoras',
    proofText:
      'Proyectos reales de identidad y sitios web en finanzas, mercados internacionales y software. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu firma.',
    howTo: 'el sitio web de una consultora',
    lead: {
      heading: 'Hablemos de tu consultora',
      description:
        'Cuéntanos qué servicios ofreces y a qué clientes quieres llegar. Te contactamos y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una consultora de transformación digital y queremos llegar a empresas medianas.',
    },
  },
  en: {
    seoTitle: 'Web Design for Consulting and Professional Services Firms',
    seoDescription:
      'Websites for consulting and professional services firms: case studies, a clear methodology, and visibility on Google and AI search tools.',
    keywords:
      'web design for consulting firms, consulting company website, professional services website, B2B consulting marketing',
    subtitle: 'Web design for consulting and professional services firms',
    accent: 'Consulting Firms',
    target: 'consulting firms',
    hero: 'A consulting firm sells judgment, and judgment does not show in a list of services. The executive who will hire you checks cases, methodology, and who is behind the firm, and more and more often asks an AI. We design websites that show how your firm thinks and lead to that first meeting.',
    intro:
      'We work with business, strategy, technology, and HR consultancies and professional services firms. Every consulting firm website is designed around your services and the client you want to attract.',
    items: [
      {
        title: 'Cases that prove results',
        description:
          'Each project told as a case: the challenge, how you approached it, and what changed for the client, with their permission.',
        bullets: ['Case studies by industry', 'Methodology explained', 'Testimonials with permission'],
      },
      {
        title: 'Clear services for decision-makers',
        description:
          'What you do, for whom, and how you work, written for the executive who has to justify hiring you.',
        bullets: ['A page per service', 'Industries you serve', 'Team and partners'],
      },
      {
        title: 'Get found on Google and by AI',
        description:
          'Clients search for providers on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site and articles so those tools understand you and can recommend you.',
        bullets: ['Structured data about your firm', 'Articles and publications', 'Content AI tools can cite'],
      },
      {
        title: 'Branding for consulting firms',
        description:
          'A sober, distinctive identity makes your firm look equally solid on your site, proposals, and presentations.',
        bullets: ['Logo and identity with guidelines', 'Proposal and presentation templates', 'Website aligned with the brand'],
      },
    ],
    diagnosis: 'We learn about your services, your key cases, and the client you want to attract.',
    pages: 'services, industries, cases, team, publications, and contact',
    costQuestion: 'How much does a consulting firm website cost?',
    costScope:
      'how many services and cases, whether it includes a blog or publications, whether it runs in one language or both, and whether you also need a brand',
    faqs: [
      {
        question: 'How do we show cases if they are confidential?',
        answer:
          'We can tell them without naming the client, by industry and type of challenge, or with their permission. What matters is that people understand how you work.',
      },
      {
        question: 'Can you write the website copy?',
        answer:
          'Yes. We write it with you based on your services and cases, in clear language for decision-makers, and you review it before it goes live.',
      },
    ],
    aiSubject: 'my consulting firm',
    remoteWho: 'consulting firms',
    proofText:
      'Real identity and website work in finance, international markets, and software. The same care we put into every brand is what we would bring to your firm.',
    howTo: 'a consulting firm website',
    lead: {
      heading: 'Let’s talk about your firm',
      description:
        'Tell us which services you offer and which clients you want to reach. We will reach out and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a digital transformation consultancy and want to reach mid-sized companies.',
    },
  },
});
