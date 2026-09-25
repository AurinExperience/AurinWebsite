import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Veracruz — palabra clave objetivo: "diseño web Veracruz" / "diseño web
 * Xalapa".
 *
 * Ángulo propio: marcas de café de Coatepec y Huatusco que quieren venderse
 * fuera de la región, universidades y servicios profesionales de Xalapa, y
 * empresas de servicios del puerto de Veracruz y Boca del Río (sitios
 * corporativos, sin sistemas).
 */
export const veracruz: Landing = {
  id: 'veracruz',
  status: 'live',
  publishAt: '2026-10-03T00:00:00-06:00',
  slug: { es: 'veracruz', en: 'veracruz' },
  region: 'Veracruz',
  geo: { latitude: 19.1738, longitude: -96.1342 },
  areas: ['Veracruz', 'Boca del Río', 'Xalapa', 'Coatepec', 'Córdoba', 'Orizaba', 'Coatzacoalcos'],
  phoneSample: '+52 229 123 4567',
  proof: ['fruitAcademy', 'ceiich', 'galicia'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Veracruz, Xalapa y Boca del Río | Aurin',
        description:
          'Diseño web y branding en Veracruz para marcas de café de Coatepec, universidades y despachos de Xalapa y empresas de servicios de Veracruz y Boca del Río.',
        keywords:
          'diseño web Veracruz, diseño web Xalapa, páginas web Boca del Río, branding café, tienda en línea café Coatepec, diseño web Córdoba Orizaba',
      },
      hero: {
        subtitle: 'Diseño web y branding en Veracruz',
        titleLead: 'Diseño Web en',
        titleAccent: 'Veracruz',
        description:
          'El café de Coatepec y Huatusco merece una marca a su altura. En Xalapa, escuelas y despachos compiten por la confianza de la gente, y en el puerto las empresas de servicios necesitan verse tan formales como sus clientes. Diseñamos marcas y sitios para cada caso.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Veracruz',
        intro:
          'Trabajamos con empresas de Veracruz, Boca del Río, Xalapa, Coatepec, Córdoba, Orizaba y Coatzacoalcos: marcas de café, escuelas y universidades, despachos, clínicas y empresas de servicios.',
        items: [
          {
            title: 'Branding y tienda para marcas de café',
            description:
              'El café se compra por el origen y por la historia de quien lo produce. Creamos la marca y la tienda en línea para que tu café llegue a clientes de todo el país.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Tienda en línea con pagos',
              'Historia del origen y del productor',
            ],
          },
          {
            title: 'Escuelas y universidades',
            description:
              'Una familia o un estudiante compara opciones en línea antes de pedir informes. El sitio presenta tu oferta educativa y tus instalaciones de forma clara.',
            bullets: ['Oferta educativa por nivel', 'Galería de instalaciones', 'Formulario de informes'],
          },
          {
            title: 'Empresas de servicios del puerto',
            description:
              'Despachos, agencias y empresas de servicios: tu cliente quiere saber quién eres, qué haces y cómo contactarte. Lo presentamos con orden y sin exagerar.',
            bullets: ['Servicios explicados con claridad', 'Experiencia y sectores', 'Formulario de contacto'],
          },
          {
            title: 'Clínicas y despachos',
            description:
              'Un paciente o un cliente elige por confianza. El sitio presenta a tu equipo, tus servicios y cómo agendar.',
            bullets: ['Equipo y especialidades', 'Citas en línea', 'Ubicación, horario y contacto'],
          },
        ],
      },
      process: {
        heading: c.processHeading,
        description: c.processDescription,
        steps: [
          {
            name: 'Diagnóstico',
            text: 'Una llamada para entender qué vendes, a quién y qué necesita ver ese cliente antes de decidir.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si hace falta, trabajamos primero la marca. Luego definimos las páginas o la tienda y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Veracruz',
        description: 'Lo que nos preguntan las empresas de Veracruz y Xalapa antes de contratar.',
        items: [
          c.faqCost('Veracruz o Xalapa'),
          {
            question: 'Tengo una marca de café, ¿pueden diseñar el empaque?',
            answer:
              'El empaque puede ser parte del proyecto de marca. El alcance exacto y las aplicaciones incluidas se definen en la cotización.',
          },
          {
            question: 'Tengo una escuela, ¿el sitio puede recibir solicitudes de informes?',
            answer: 'Sí. El sitio puede incluir un formulario de informes que te llega por correo.',
          },
          c.faqPayment,
          c.faqRemote('Veracruz'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como alimentos, educación y servicios legales. Es el mismo estándar con el que trabajaríamos tu empresa en Veracruz.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Veracruz',
      breadcrumb: 'Diseño Web Veracruz',
      serviceName: 'Diseño Web y Branding en Veracruz',
      howToDescription:
        'Proceso paso a paso para crear la marca y el sitio de un café, una escuela o una empresa en Veracruz.',
    },
    en: {
      seo: {
        title: 'Web Design in Veracruz, Xalapa & Boca del Río | Aurin',
        description:
          'Web design and branding in Veracruz for Coatepec coffee brands, Xalapa universities and firms, and service companies in Veracruz and Boca del Río.',
        keywords:
          'web design Veracruz, web design Xalapa, coffee brand design Mexico, coffee online store, website design Boca del Río',
      },
      hero: {
        subtitle: 'Web design and branding in Veracruz',
        titleLead: 'Web Design in',
        titleAccent: 'Veracruz',
        description:
          'Coffee from Coatepec and Huatusco deserves a brand to match. In Xalapa, schools and firms compete for people’s trust, and at the port service companies need to look as formal as their clients. We design brands and websites for each case.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Veracruz',
        intro:
          'We work with companies in Veracruz, Boca del Río, Xalapa, Coatepec, Córdoba, Orizaba, and Coatzacoalcos: coffee brands, schools and universities, firms, clinics, and service companies.',
        items: [
          {
            title: 'Branding and online store for coffee brands',
            description:
              'Coffee is bought on its origin and on the story of who grows it. We create the brand and the online store so your coffee reaches customers across the country.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Online store with payments',
              'Story of the origin and the grower',
            ],
          },
          {
            title: 'Schools and universities',
            description:
              'Families and students compare options online before asking for information. The site presents your programs and facilities clearly.',
            bullets: ['Programs by level', 'Facilities gallery', 'Information request form'],
          },
          {
            title: 'Port service companies',
            description:
              'Firms, agencies, and service companies: clients want to know who you are, what you do, and how to reach you. We present it clearly and without exaggeration.',
            bullets: ['Services clearly explained', 'Experience and sectors', 'Contact form'],
          },
          {
            title: 'Clinics and firms',
            description:
              'Patients and clients choose on trust. The site presents your team, your services, and how to book.',
            bullets: ['Team and specialties', 'Online appointments', 'Location, hours, and contact'],
          },
        ],
      },
      process: {
        heading: C.processHeading,
        description: C.processDescription,
        steps: [
          {
            name: 'Discovery call',
            text: 'We learn what you sell, to whom, and what that customer needs to see before deciding.',
          },
          {
            name: 'Brand and structure',
            text: 'When needed we work on the brand first. Then we define the pages or the store and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Veracruz',
        description: 'What companies in Veracruz and Xalapa ask us before signing.',
        items: [
          C.faqCost('Veracruz or Xalapa'),
          {
            question: 'I have a coffee brand. Can you design the packaging?',
            answer:
              'Packaging can be part of the brand project. The exact scope and included applications are defined in the quote.',
          },
          {
            question: 'I run a school. Can the site receive information requests?',
            answer: 'Yes. The site can include an information request form that arrives by email.',
          },
          C.faqPayment,
          C.faqRemote('Veracruz'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like food, education, and legal services. It is the same standard we would bring to your company in Veracruz.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Veracruz',
      breadcrumb: 'Web Design Veracruz',
      serviceName: 'Web Design and Branding in Veracruz',
      howToDescription:
        'Step-by-step process to create the brand and website for a coffee brand, school, or company in Veracruz.',
    },
  },
};
