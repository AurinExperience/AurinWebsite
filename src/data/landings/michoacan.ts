import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Michoacán — palabra clave objetivo: "diseño web Morelia" / "diseño web
 * Michoacán".
 *
 * Ángulo propio: empacadoras y marcas agroexportadoras de aguacate y berries
 * que necesitan presentarse ante compradores de otros países, y artesanía de
 * oficio (guitarras de Paracho, cobre de Santa Clara) que puede venderse en
 * línea. Morelia aparece con salud, educación y servicios.
 */
export const michoacan: Landing = {
  id: 'michoacan',
  status: 'live',
  publishAt: '2026-09-29T00:00:00-06:00',
  slug: { es: 'michoacan', en: 'michoacan' },
  region: 'Michoacán',
  geo: { latitude: 19.7006, longitude: -101.1844 },
  areas: ['Morelia', 'Uruapan', 'Zamora', 'Pátzcuaro', 'Paracho', 'Lázaro Cárdenas'],
  phoneSample: '+52 443 123 4567',
  proof: ['fruitAcademy', 'fortrade', 'sinfonica'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Morelia y Michoacán | Aurin',
        description:
          'Diseño web bilingüe y branding en Michoacán para empacadoras de aguacate y berries, artesanía de Paracho y Santa Clara, y servicios en Morelia.',
        keywords:
          'diseño web Morelia, páginas web Michoacán, página web empacadora de aguacate, diseño web Uruapan, tienda en línea artesanía Michoacán',
      },
      hero: {
        subtitle: 'Diseño web y branding en Michoacán',
        titleLead: 'Diseño Web en',
        titleAccent: 'Michoacán',
        description:
          'El aguacate y las berries de Michoacán se venden en todo el mundo, y el comprador extranjero revisa tu sitio antes de responder un correo. Diseñamos sitios bilingües para empacadoras y marcas agrícolas, y tiendas para el oficio artesanal del estado.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Michoacán',
        intro:
          'Trabajamos con empresas de Morelia, Uruapan, Zamora, Pátzcuaro, Paracho y Lázaro Cárdenas: empacadoras y exportadoras, productores agrícolas, talleres artesanales, clínicas, escuelas y servicios.',
        items: [
          {
            title: 'Sitio bilingüe para empacadoras y exportadoras',
            description:
              'Un comprador de otro país quiere ver quién eres, qué productos manejas, qué certificaciones tienes y cómo contactarte. El sitio lo presenta en inglés y en español, con la misma información.',
            bullets: [
              'Productos, temporadas y presentaciones',
              'Certificaciones a la vista',
              'Formulario de contacto para compradores',
            ],
          },
          {
            title: 'Branding para marcas agrícolas',
            description:
              'Una marca clara distingue tu producto en el anaquel y en la caja. Creamos identidades que funcionan en el empaque, en el sitio y en tus presentaciones comerciales.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio alineado con la marca',
            ],
          },
          {
            title: 'Tienda en línea para artesanía',
            description:
              'Guitarras de Paracho, cobre de Santa Clara, textiles: el oficio es de primer nivel y puede venderse fuera del estado. Diseñamos una tienda que cuente quién hace cada pieza.',
            bullets: ['Catálogo por pieza o colección', 'Pagos en línea', 'Historia del taller y del oficio'],
          },
          {
            title: 'Sitios para servicios en Morelia',
            description:
              'Clínicas, escuelas y despachos: tu cliente quiere saber qué ofreces y cómo contactarte. Un sitio claro con esa información trabaja por ti.',
            bullets: ['Servicios explicados con claridad', 'Citas o formulario de contacto', 'Ubicación, horario y mapa'],
          },
        ],
      },
      process: {
        heading: c.processHeading,
        description: c.processDescription,
        steps: [
          {
            name: 'Diagnóstico',
            text: 'Una llamada para entender a quién le vendes: compradores de otros países, clientes nacionales o público local.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si hace falta, trabajamos primero la marca. Luego definimos las páginas y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Michoacán',
        description: 'Lo que nos preguntan las empresas de Michoacán antes de contratar.',
        items: [
          c.faqCost('Morelia'),
          {
            question: 'Exportamos, ¿qué debe tener nuestro sitio?',
            answer:
              'Lo que un comprador de otro país revisa antes de responderte: quién eres, qué productos manejas, en qué temporadas, qué certificaciones tienes y cómo contactarte. En inglés y en español, con la misma información.',
          },
          {
            question: 'Tengo un taller artesanal, ¿puedo vender en línea?',
            answer:
              'Sí. Antes revisamos contigo cómo vas a enviar y cobrar, para armar la tienda de acuerdo con lo que sí puedes cumplir.',
          },
          c.faqPayment,
          c.faqRemote('Michoacán'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como agroindustria, finanzas internacionales y cultura. Es el mismo estándar con el que trabajaríamos tu empresa en Michoacán.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Michoacán',
      breadcrumb: 'Diseño Web Michoacán',
      serviceName: 'Diseño Web y Branding en Michoacán',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio bilingüe de una empacadora o la tienda de un taller en Michoacán.',
    },
    en: {
      seo: {
        title: 'Web Design in Morelia & Michoacán | Aurin',
        description:
          'Bilingual web design and branding in Michoacán for avocado and berry packers, Paracho and Santa Clara crafts, and services in Morelia.',
        keywords:
          'web design Morelia, website design Michoacán, avocado packer website, produce exporter website Mexico, handicraft online store Michoacán',
      },
      hero: {
        subtitle: 'Web design and branding in Michoacán',
        titleLead: 'Web Design in',
        titleAccent: 'Michoacán',
        description:
          'Michoacán avocados and berries sell worldwide, and foreign buyers review your site before answering an email. We design bilingual websites for packers and farm brands, and online stores for the state’s craft workshops.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Michoacán',
        intro:
          'We work with companies in Morelia, Uruapan, Zamora, Pátzcuaro, Paracho, and Lázaro Cárdenas: packers and exporters, growers, craft workshops, clinics, schools, and services.',
        items: [
          {
            title: 'Bilingual site for packers and exporters',
            description:
              'A buyer abroad wants to see who you are, which products you handle, your certifications, and how to reach you. The site presents it in English and Spanish with the same information.',
            bullets: [
              'Products, seasons, and packs',
              'Certifications visible',
              'Contact form for buyers',
            ],
          },
          {
            title: 'Branding for farm brands',
            description:
              'A clear brand sets your product apart on the shelf and on the box. We create identities that work on packaging, on the site, and in your sales presentations.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
          },
          {
            title: 'Online store for crafts',
            description:
              'Paracho guitars, Santa Clara copper, textiles: the craft is world-class and can sell beyond the state. We design a store that tells who makes each piece.',
            bullets: ['Catalog by piece or collection', 'Online payments', 'Story of the workshop and the craft'],
          },
          {
            title: 'Websites for services in Morelia',
            description:
              'Clinics, schools, and firms: people want to know what you offer and how to reach you. A clear site with that information works for you.',
            bullets: ['Services clearly explained', 'Appointments or contact form', 'Location, hours, and map'],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn who you sell to: buyers abroad, national clients, or local customers.',
          },
          {
            name: 'Brand and structure',
            text: 'When needed we work on the brand first. Then we define the pages and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Michoacán',
        description: 'What Michoacán companies ask us before signing.',
        items: [
          C.faqCost('Morelia'),
          {
            question: 'We export. What should our site include?',
            answer:
              'What a buyer abroad reviews before replying: who you are, which products you handle, in which seasons, your certifications, and how to reach you. In English and Spanish, with the same information.',
          },
          {
            question: 'I run a craft workshop. Can I sell online?',
            answer:
              'Yes. First we review with you how you will ship and get paid, so the store is built around what you can actually deliver.',
          },
          C.faqPayment,
          C.faqRemote('Michoacán'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like agribusiness, international finance, and culture. It is the same standard we would bring to your company in Michoacán.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Michoacán',
      breadcrumb: 'Web Design Michoacán',
      serviceName: 'Web Design and Branding in Michoacán',
      howToDescription:
        'Step-by-step process to design a bilingual website for a packer or an online store for a workshop in Michoacán.',
    },
  },
};
