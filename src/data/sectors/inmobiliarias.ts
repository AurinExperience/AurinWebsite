import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Inmobiliarias y desarrolladores — palabra clave: "diseño web para
 * inmobiliarias" / "página web para desarrollo inmobiliario".
 *
 * Ángulo propio: propiedades y desarrollos como fichas con fotos, planos y
 * ubicación, leads por propiedad, compradores extranjeros (bilingüe) y la
 * dependencia de los portales como canal prestado. Prueba social: Grupo
 * Estrella (construcción) y clientes de finanzas, sin afirmar clientes
 * inmobiliarios que no existen.
 */
export const inmobiliarias: Sector = {
  id: 'inmobiliarias',
  status: 'live',
  publishAt: '2026-10-14T00:00:00-06:00',
  slug: { es: 'para-inmobiliarias', en: 'for-real-estate' },
  name: { es: 'Inmobiliarias y desarrolladores', en: 'Real estate and developers' },
  proof: ['grupoEstrella', 'bonanza', 'mexicoPacific'],
  lead: {
    es: {
      heading: 'Hablemos de tu inmobiliaria',
      description:
        'Cuéntanos qué vendes o rentas y cómo llegan hoy tus prospectos. Te contactamos para entender tu negocio y te enviamos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Somos desarrolladores y vamos a lanzar un proyecto de departamentos en preventa.',
    },
    en: {
      heading: 'Let’s talk about your real estate business',
      description:
        'Tell us what you sell or rent and how leads find you today. We will reach out to understand your business and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are developers about to launch a pre-sale condo project.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Inmobiliarias y Desarrolladores | Aurin',
        description:
          'Páginas web para inmobiliarias y desarrollos: fichas de propiedades, prospectos por propiedad y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para inmobiliarias, página web inmobiliaria, página web desarrollo inmobiliario, sitio web bienes raíces, landing preventa, marketing inmobiliario',
      },
      hero: {
        subtitle: 'Diseño web para inmobiliarias y desarrolladores',
        titleLead: 'Diseño Web para',
        titleAccent: 'Inmobiliarias',
        description:
          'Una casa o un departamento es la compra más grande de muchas familias. Antes de llamarte, el comprador recorre fotos, planos y ubicación, compara opciones y cada vez más le pregunta a una IA. Diseñamos sitios que hacen lucir cada propiedad y convierten esa visita en una cita.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          c.stats[1],
          { value: 'Construcción', label: 'ya trabajamos con empresas como Grupo Estrella' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para inmobiliarias',
        intro:
          'Trabajamos con inmobiliarias, asesores, desarrolladores y proyectos en preventa. Cada página web inmobiliaria se diseña a partir de lo que vendes y del comprador que quieres atraer.',
        items: [
          {
            title: 'Propiedades que se antojan',
            description:
              'Cada propiedad o desarrollo tiene su ficha con fotos grandes, planos, amenidades y ubicación. El comprador entiende lo que ofreces sin tener que preguntar.',
            bullets: ['Galerías, planos y amenidades', 'Mapa y entorno de la propiedad', 'Filtros por tipo, zona y precio'],
          },
          {
            title: 'Prospectos por propiedad',
            description:
              'Cada ficha tiene su propio formulario y botón de WhatsApp, así sabes exactamente qué propiedad le interesa a cada prospecto y respondes más rápido.',
            bullets: ['Formulario por propiedad', 'Contacto directo por WhatsApp', 'Agenda de visitas'],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Los compradores buscan en Google y en los portales, pero también le preguntan a ChatGPT o a las respuestas con IA de Google por zonas y desarrollos. Estructuramos tu sitio para que esas herramientas entiendan lo que ofreces y te puedan recomendar.',
            bullets: [
              'Datos estructurados de tus propiedades',
              'Páginas por zona o desarrollo',
              'Sitio en español y en inglés para compradores extranjeros',
            ],
          },
          {
            title: 'Branding para desarrollos',
            description:
              'Un desarrollo se vende mejor con nombre e identidad propios. Creamos la marca del proyecto y la aplicamos en el sitio, la sala de ventas y la publicidad.',
            bullets: [
              'Naming e identidad del desarrollo',
              'Brochure y materiales de venta según el alcance',
              'Sitio o landing de preventa alineada con la marca',
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
            text: 'Una llamada para entender qué vendes o rentas, a quién y cómo llegan hoy tus prospectos.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: propiedades o desarrollos, zonas, contacto y aviso de privacidad. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para inmobiliarias',
        description: 'Lo que nos preguntan inmobiliarias y desarrolladores antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de una inmobiliaria?',
            answer:
              'Depende del alcance: cuántas propiedades, si necesitas filtros o un administrador para subirlas, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Ya publico en portales, ¿necesito un sitio propio?',
            answer:
              'Los portales dan visibilidad, pero ahí tu propiedad compite junto a cientos de anuncios parecidos. Un sitio propio presenta solo lo tuyo, con tu marca, y los prospectos te llegan directo. Lo ideal es usar los dos.',
          },
          {
            question: '¿Puedo subir y quitar propiedades yo mismo?',
            answer:
              'Sí. Podemos incluir un administrador para que tú o tu equipo agreguen, editen y den de baja propiedades sin depender de nosotros.',
          },
          s.faqAi('mi inmobiliaria'),
          c.faqPayment,
          s.faqRemote('inmobiliarias'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en construcción, energía y finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu inmobiliaria.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para inmobiliarias',
      breadcrumb: 'Diseño Web para Inmobiliarias',
      serviceName: 'Diseño Web y Branding para Inmobiliarias y Desarrolladores',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de una inmobiliaria o un desarrollo.',
    },
    en: {
      seo: {
        title: 'Web Design for Real Estate Agencies and Developers | Aurin',
        description:
          'Websites for real estate agencies and developments: property pages, leads per property, and visibility on Google and AI search tools.',
        keywords:
          'web design for real estate, real estate website, real estate developer website, property listing website, pre-sale landing page, real estate marketing',
      },
      hero: {
        subtitle: 'Web design for real estate agencies and developers',
        titleLead: 'Web Design for',
        titleAccent: 'Real Estate',
        description:
          'A home is the biggest purchase many families ever make. Before they call, buyers go through photos, floor plans, and location, compare options, and more and more often they ask an AI. We design websites that make every property shine and turn that visit into an appointment.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          C.stats[1],
          { value: 'Construction', label: 'we already work with companies like Grupo Estrella' },
        ],
      },
      services: {
        heading: 'Web design services for real estate',
        intro:
          'We work with agencies, agents, developers, and pre-sale projects. Every real estate website is designed around what you sell and the buyer you want to attract.',
        items: [
          {
            title: 'Properties people want',
            description:
              'Every property or development gets its own page with large photos, floor plans, amenities, and location. Buyers understand what you offer without having to ask.',
            bullets: ['Galleries, floor plans, and amenities', 'Map and surroundings', 'Filters by type, area, and price'],
          },
          {
            title: 'Leads per property',
            description:
              'Each listing has its own form and WhatsApp button, so you know exactly which property each lead wants and can respond faster.',
            bullets: ['Form per property', 'Direct contact over WhatsApp', 'Viewing scheduling'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Buyers search on Google and listing portals, but they also ask ChatGPT or Google’s AI answers about areas and developments. We structure your site so those tools understand what you offer and can recommend you.',
            bullets: [
              'Structured data for your properties',
              'Pages by area or development',
              'Spanish and English site for foreign buyers',
            ],
          },
          {
            title: 'Branding for developments',
            description:
              'A development sells better with its own name and identity. We create the project brand and apply it to the website, sales office, and advertising.',
            bullets: [
              'Naming and identity for the development',
              'Brochure and sales materials based on project scope',
              'Pre-sale website or landing aligned with the brand',
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
            text: 'We learn what you sell or rent, to whom, and how leads find you today.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: properties or developments, areas, contact, and the privacy notice. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for real estate',
        description: 'What agencies and developers ask us before signing.',
        items: [
          {
            question: 'How much does a real estate website cost?',
            answer:
              'It depends on scope: how many properties, whether you need filters or an admin to upload them, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'I already list on portals. Do I need my own site?',
            answer:
              'Portals give visibility, but there your property competes with hundreds of similar listings. Your own site presents only what you offer, under your brand, and leads come straight to you. Ideally you use both.',
          },
          {
            question: 'Can I add and remove properties myself?',
            answer:
              'Yes. We can include an admin panel so you or your team can add, edit, and remove properties without depending on us.',
          },
          S.faqAi('my real estate business'),
          C.faqPayment,
          S.faqRemote('real estate businesses'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in construction, energy, and finance. The same care we put into every brand is what we would bring to your business.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for real estate',
      breadcrumb: 'Web Design for Real Estate',
      serviceName: 'Web Design and Branding for Real Estate Agencies and Developers',
      howToDescription: 'Step-by-step process to design a website for a real estate agency or development.',
    },
  },
};
