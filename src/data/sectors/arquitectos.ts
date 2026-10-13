import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Arquitectos y despachos de arquitectura — palabra clave: "diseño web para
 * arquitectos" / "página web para despacho de arquitectura".
 *
 * Ángulo propio: el portafolio es el producto, las imágenes mandan pero tienen
 * que cargar rápido, y cada proyecto contado como caso (reto, solución,
 * resultado) vende más que una galería suelta. Prueba social: Grupo Estrella
 * (construcción) e Ideograma (diseño y marca), clientes reales.
 */
export const arquitectos: Sector = {
  id: 'arquitectos',
  status: 'live',
  publishAt: '2026-10-14T00:00:00-06:00',
  slug: { es: 'para-arquitectos', en: 'for-architects' },
  name: { es: 'Arquitectos y despachos', en: 'Architects and studios' },
  proof: ['grupoEstrella', 'ideograma', 'mexicoPacific'],
  lead: {
    es: {
      heading: 'Hablemos de tu despacho de arquitectura',
      description:
        'Cuéntanos qué tipo de proyectos haces y qué clientes quieres atraer. Te contactamos para entender tu despacho y te enviamos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Somos un despacho de arquitectura residencial y queremos mostrar mejor nuestros proyectos.',
    },
    en: {
      heading: 'Let’s talk about your architecture studio',
      description:
        'Tell us what kind of projects you do and which clients you want to attract. We will reach out to understand your studio and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a residential architecture studio and want to showcase our projects better.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Arquitectos y Despachos | Aurin',
        description:
          'Páginas web para arquitectos y despachos: portafolio que carga rápido, proyectos contados como casos y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para arquitectos, página web para despacho de arquitectura, portafolio arquitectura web, sitio web arquitecto, página web interiorismo',
      },
      hero: {
        subtitle: 'Diseño web para arquitectos y despachos de arquitectura',
        titleLead: 'Diseño Web para',
        titleAccent: 'Arquitectos',
        description:
          'Tu trabajo se vende con imágenes, y tu cliente decide viendo tu portafolio. Antes de contactarte recorre tus proyectos, compara despachos y cada vez más le pregunta a una IA. Diseñamos sitios a la altura de tu arquitectura, que cargan rápido y convierten esa visita en una conversación.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          c.stats[2],
          { value: 'Construcción', label: 'ya trabajamos con empresas como Grupo Estrella' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para arquitectos',
        intro:
          'Trabajamos con arquitectos, despachos de arquitectura e interiorismo. Cada página web para despacho de arquitectura se diseña alrededor de tu portafolio y del cliente que quieres atraer.',
        items: [
          {
            title: 'Un portafolio a la altura de tu obra',
            description:
              'Tus proyectos se ven grandes y nítidos, y aun así el sitio carga rápido en cualquier celular. La arquitectura es la protagonista, no la plantilla.',
            bullets: [
              'Galerías optimizadas para cargar rápido',
              'Filtros por tipo de proyecto',
              'Renders, planos y fotografía de obra',
            ],
          },
          {
            title: 'Cada proyecto, un caso',
            description:
              'Contamos el reto, la propuesta y el resultado de cada proyecto. Un cliente que entiende cómo piensas confía más que uno que solo vio fotos.',
            bullets: ['Ficha de proyecto con contexto', 'Ubicación, superficie y año', 'Proceso de diseño explicado'],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Tus clientes buscan arquitectos en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué haces y te puedan recomendar.',
            bullets: ['Datos estructurados de tu despacho', 'Contenido que la IA puede citar', 'Páginas por servicio o tipo de obra'],
          },
          {
            title: 'Branding para despachos',
            description:
              'Una identidad con la misma intención que tu arquitectura hace que tu despacho se vea coherente en tu sitio, tus presentaciones y tus láminas.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Plantillas de presentación según el alcance',
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
            text: 'Una llamada para entender tu despacho, tus proyectos clave y el tipo de cliente que quieres atraer.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: portafolio, proyectos, servicios, despacho y contacto. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para arquitectos',
        description: 'Lo que nos preguntan arquitectos y despachos antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de un despacho de arquitectura?',
            answer:
              'Depende del alcance: cuántos proyectos, si necesitas un administrador para subirlos, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Mis imágenes pesan mucho, ¿el sitio va a ser lento?',
            answer:
              'No. Optimizamos cada imagen para que se vea nítida y cargue rápido, y solo se descarga lo que el visitante tiene en pantalla.',
          },
          {
            question: '¿Puedo agregar proyectos nuevos yo mismo?',
            answer:
              'Sí. Podemos incluir un administrador para que tú o tu equipo suban proyectos con sus fotos y su ficha sin depender de nosotros.',
          },
          s.faqAi('mi despacho'),
          c.faqPayment,
          s.faqRemote('despachos de arquitectura'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en construcción, diseño y energía. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu despacho.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para arquitectos',
      breadcrumb: 'Diseño Web para Arquitectos',
      serviceName: 'Diseño Web y Branding para Arquitectos y Despachos',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un arquitecto o un despacho de arquitectura.',
    },
    en: {
      seo: {
        title: 'Web Design for Architects and Studios | Aurin',
        description:
          'Websites for architects and studios: a portfolio that loads fast, projects told as case studies, and visibility on Google and AI search tools.',
        keywords:
          'web design for architects, architecture firm website, architecture portfolio website, architect website design, interior design website',
      },
      hero: {
        subtitle: 'Web design for architects and architecture studios',
        titleLead: 'Web Design for',
        titleAccent: 'Architects',
        description:
          'Your work sells through images, and clients decide by looking at your portfolio. Before they reach out, they browse your projects, compare studios, and more and more often they ask an AI. We design websites worthy of your architecture that load fast and turn that visit into a conversation.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          C.stats[2],
          { value: 'Construction', label: 'we already work with companies like Grupo Estrella' },
        ],
      },
      services: {
        heading: 'Web design services for architects',
        intro:
          'We work with architects, architecture studios, and interior designers. Every architecture firm website is designed around your portfolio and the client you want to attract.',
        items: [
          {
            title: 'A portfolio worthy of your work',
            description:
              'Your projects look large and sharp, and the site still loads fast on any phone. The architecture is the star, not the template.',
            bullets: ['Galleries optimized to load fast', 'Filters by project type', 'Renders, plans, and site photography'],
          },
          {
            title: 'Every project, a case study',
            description:
              'We tell the challenge, the proposal, and the result of each project. A client who understands how you think trusts you more than one who only saw photos.',
            bullets: ['Project pages with context', 'Location, area, and year', 'Design process explained'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Clients search for architects on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you do and can recommend you.',
            bullets: ['Structured data about your studio', 'Content AI tools can cite', 'Pages by service or project type'],
          },
          {
            title: 'Branding for studios',
            description:
              'An identity with the same intent as your architecture makes your studio look consistent on your site, presentations, and boards.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Presentation templates based on project scope',
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
            text: 'We learn about your studio, your key projects, and the kind of client you want to attract.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: portfolio, projects, services, studio, and contact. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for architects',
        description: 'What architects and studios ask us before signing.',
        items: [
          {
            question: 'How much does an architecture studio website cost?',
            answer:
              'It depends on scope: how many projects, whether you need an admin to upload them, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'My images are heavy. Will the site be slow?',
            answer:
              'No. We optimize every image so it looks sharp and loads fast, and only what the visitor has on screen gets downloaded.',
          },
          {
            question: 'Can I add new projects myself?',
            answer:
              'Yes. We can include an admin panel so you or your team can upload projects with their photos and details without depending on us.',
          },
          S.faqAi('my studio'),
          C.faqPayment,
          S.faqRemote('architecture studios'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in construction, design, and energy. The same care we put into every brand is what we would bring to your studio.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for architects',
      breadcrumb: 'Web Design for Architects',
      serviceName: 'Web Design and Branding for Architects and Studios',
      howToDescription: 'Step-by-step process to design a website for an architect or architecture studio.',
    },
  },
};
