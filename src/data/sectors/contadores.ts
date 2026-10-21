import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Contadores y despachos contables — palabra clave: "diseño web para
 * contadores" / "página web para despacho contable".
 *
 * Ángulo propio: servicios recurrentes (contabilidad, nómina, impuestos), el
 * cliente busca a alguien confiable para años, y las dudas fiscales como
 * contenido que atrae y que la IA puede citar. Prueba social: Monetix, Bonanza
 * y Debiti, clientes reales de finanzas.
 */
export const contadores: Sector = {
  id: 'contadores',
  status: 'live',
  publishAt: '2026-10-15T00:00:00-06:00',
  slug: { es: 'para-contadores', en: 'for-accountants' },
  name: { es: 'Contadores y despachos contables', en: 'Accountants and accounting firms' },
  proof: ['monetix', 'debiti', 'bonanza'],
  lead: {
    es: {
      heading: 'Hablemos de tu despacho contable',
      description:
        'Cuéntanos qué servicios ofreces y a qué clientes quieres atraer. Te contactaremos lo antes posible para entender tu despacho y te enviaremos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Somos un despacho de contabilidad y nómina y queremos atraer más empresas pequeñas.',
    },
    en: {
      heading: 'Let’s talk about your accounting firm',
      description:
        'Tell us which services you offer and which clients you want to attract. We will reach out as soon as possible to understand your firm and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are an accounting and payroll firm and want to attract more small businesses.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Contadores y Despachos Contables | Aurin',
        description:
          'Páginas web para contadores y despachos contables: servicios claros, contacto fácil y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para contadores, página web para despacho contable, sitio web contador, página web firma contable, marketing para contadores',
      },
      hero: {
        subtitle: 'Diseño web para contadores y despachos contables',
        titleLead: 'Diseño Web para',
        titleAccent: 'Contadores',
        description:
          'Elegir contador es elegir a alguien para años. Antes de llamarte, una empresa revisa tus servicios, tu experiencia y cómo trabajas, y cada vez más le pregunta a una IA. Diseñamos sitios que transmiten orden y confianza, y facilitan ese primer contacto.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          { value: '24/7', label: 'tus clientes pueden pedir una asesoría a cualquier hora' },
          { value: 'Finanzas', label: 'ya trabajamos con marcas como Monetix, Bonanza y Debiti' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para contadores',
        intro:
          'Diseñamos para contadores independientes, despachos contables y firmas de consultoría fiscal. Cada página web para despacho contable se diseña a partir de tus servicios y del cliente que quieres atraer.',
        items: [
          {
            title: 'Servicios que se entienden',
            description:
              'Contabilidad, nómina, impuestos o auditoría, cada servicio explicado para quien no es contador: qué incluye, para quién es y cómo trabajas.',
            bullets: ['Una página por servicio', 'Para personas físicas y empresas', 'Preguntas frecuentes por servicio'],
          },
          {
            title: 'Contacto sin fricción',
            description:
              'El prospecto agenda una asesoría o te escribe por WhatsApp en un par de clics. Tú recibes la solicitud con lo que necesitas para darle seguimiento.',
            bullets: ['Formulario de asesoría', 'Contacto directo por WhatsApp', 'Agenda en línea si la usas'],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Las dudas fiscales se buscan en Google y se le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué haces y te puedan recomendar.',
            bullets: ['Datos estructurados de tu despacho', 'Artículos sobre dudas fiscales frecuentes', 'Contenido que la IA puede citar'],
          },
          {
            title: 'Branding para despachos contables',
            description:
              'Una identidad cuidada hace que tu despacho se vea igual de confiable en tu sitio, tus reportes, tus correos y tus redes.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Plantillas de reportes y propuestas según el alcance',
              'Sitio alineado con la marca',
            ],
          },
        ],
      },
      process: {
        heading: c.processHeading,
        description: c.processDescription,
        steps: [
          {
            name: 'Diagnóstico',
            text: 'Una llamada para entender tus servicios, tu cliente ideal y cómo llegan hoy tus prospectos.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: servicios, despacho, contacto, artículos y aviso de privacidad. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para contadores',
        description: 'Lo que nos preguntan contadores y despachos antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de un despacho contable?',
            answer:
              'Depende del alcance: cuántos servicios, si incluye blog o artículos, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Vale la pena escribir artículos sobre temas fiscales?',
            answer:
              'Sí, si respondes las dudas reales de tus clientes. Es contenido que la gente busca en Google, que la IA puede citar y que demuestra tu experiencia antes de la primera llamada.',
          },
          {
            question: '¿Mis clientes pueden enviarme documentos desde el sitio?',
            answer:
              'Enlazamos desde tu sitio la herramienta que ya usas para compartir documentos con tus clientes, para que la encuentren sin buscar.',
          },
          s.faqAi('mi despacho contable'),
          c.faqPayment,
          s.faqRemote('despachos contables'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en finanzas y servicios profesionales. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu despacho.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para contadores',
      breadcrumb: 'Diseño Web para Contadores',
      serviceName: 'Diseño Web y Branding para Contadores y Despachos Contables',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un contador o un despacho contable.',
    },
    en: {
      seo: {
        title: 'Web Design for Accountants and Accounting Firms | Aurin',
        description:
          'Websites for accountants and accounting firms: clear services, easy contact, and visibility on Google and AI search tools.',
        keywords:
          'web design for accountants, accounting firm website, CPA website design, tax advisor website, marketing for accountants',
      },
      hero: {
        subtitle: 'Web design for accountants and accounting firms',
        titleLead: 'Web Design for',
        titleAccent: 'Accountants',
        description:
          'Choosing an accountant means choosing someone for years. Before calling you, a business checks your services, your experience, and how you work, and more and more often it asks an AI. We design websites that convey order and trust and make that first contact easy.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          { value: '24/7', label: 'clients can request a consultation any time' },
          { value: 'Finance', label: 'we already work with brands like Monetix, Bonanza, and Debiti' },
        ],
      },
      services: {
        heading: 'Web design services for accountants',
        intro:
          'We design for independent accountants, accounting firms, and tax advisory firms. Every accounting firm website is designed around your services and the client you want to attract.',
        items: [
          {
            title: 'Services people understand',
            description:
              'Bookkeeping, payroll, tax, or audit, each service explained for people who are not accountants: what it includes, who it is for, and how you work.',
            bullets: ['A page per service', 'For individuals and businesses', 'FAQs for each service'],
          },
          {
            title: 'Frictionless contact',
            description:
              'Prospects book a consultation or message you on WhatsApp in a couple of clicks. You get the request with what you need to follow up.',
            bullets: ['Consultation form', 'Direct contact over WhatsApp', 'Online calendar if you use one'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Tax questions get searched on Google and asked to ChatGPT or Google’s AI answers. We structure your site so those tools understand what you do and can recommend you.',
            bullets: ['Structured data about your firm', 'Articles on common tax questions', 'Content AI tools can cite'],
          },
          {
            title: 'Branding for accounting firms',
            description:
              'A carefully crafted identity makes your firm look equally trustworthy on your site, reports, emails, and social media.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Report and proposal templates based on project scope',
              'Website aligned with the brand',
            ],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn about your services, your ideal client, and how prospects find you today.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: services, firm, contact, articles, and the privacy notice. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for accountants',
        description: 'What accountants and firms ask us before signing.',
        items: [
          {
            question: 'How much does an accounting firm website cost?',
            answer:
              'It depends on scope: how many services, whether it includes a blog or articles, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'Is it worth writing articles on tax topics?',
            answer:
              'Yes, if they answer your clients’ real questions. It is content people search for on Google, that AI tools can cite, and that proves your experience before the first call.',
          },
          {
            question: 'Can my clients send me documents from the site?',
            answer:
              'We link the tool you already use to share documents with clients from your site, so they find it without searching.',
          },
          S.faqAi('my accounting firm'),
          C.faqPayment,
          S.faqRemote('accounting firms'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in finance and professional services. The same care we put into every brand is what we would bring to your firm.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for accountants',
      breadcrumb: 'Web Design for Accountants',
      serviceName: 'Web Design and Branding for Accountants and Accounting Firms',
      howToDescription: 'Step-by-step process to design a website for an accountant or accounting firm.',
    },
  },
};
