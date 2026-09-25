import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Estado de México — palabra clave objetivo: "diseño web Toluca" / "diseño
 * web Estado de México".
 *
 * Ángulo propio: empresas que compiten con las de la CDMX sin estar en la
 * CDMX. Dos zonas: el valle de Toluca y Metepec (industria del corredor
 * Toluca–Lerma, comercio, escuelas y salud) y la zona conurbada del norte y
 * poniente (Naucalpan, Tlalnepantla, Huixquilucan / Interlomas) con servicios
 * profesionales y salud privada. CDMX se queda con el ángulo de mercado
 * saturado y despachos del centro.
 */
export const estadoDeMexico: Landing = {
  id: 'estado-de-mexico',
  status: 'live',
  publishAt: '2026-09-26T00:00:00-06:00',
  slug: { es: 'estado-de-mexico', en: 'state-of-mexico' },
  region: 'Estado de México',
  geo: { latitude: 19.2826, longitude: -99.6557 },
  areas: ['Toluca', 'Metepec', 'Lerma', 'Naucalpan', 'Tlalnepantla', 'Huixquilucan', 'Atizapán'],
  phoneSample: '+52 722 123 4567',
  proof: ['grupoEstrella', 'ceiich', 'elite'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Toluca y el Estado de México | Aurin',
        description:
          'Diseño web y branding en Toluca, Metepec, Naucalpan e Interlomas para empresas industriales, escuelas, salud privada y servicios profesionales.',
        keywords:
          'diseño web Toluca, diseño web Metepec, páginas web Estado de México, diseño web Naucalpan, diseño web Interlomas, branding Toluca',
      },
      hero: {
        subtitle: 'Diseño web y branding en el Estado de México',
        titleLead: 'Diseño Web en',
        titleAccent: 'el Estado de México',
        description:
          'Tu empresa está en Toluca, Metepec o Naucalpan, pero compite contra empresas de la Ciudad de México. Diseñamos sitios y marcas para que te veas al nivel de cualquiera de ellas, con la cercanía de tener tu negocio en el Estado de México.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en el Estado de México',
        intro:
          'Trabajamos con empresas de Toluca, Metepec, Lerma, Naucalpan, Tlalnepantla, Huixquilucan y Atizapán: industria y proveedores del corredor Toluca–Lerma, escuelas y universidades privadas, clínicas y consultorios, y despachos de servicios profesionales.',
        items: [
          {
            title: 'Sitio corporativo para empresas industriales',
            description:
              'En el corredor Toluca–Lerma tu cliente revisa tu sitio antes de invitarte a cotizar. Presentamos tus capacidades, certificaciones y experiencia con orden y sin exagerar.',
            bullets: [
              'Servicios y capacidades bien explicados',
              'Certificaciones y sectores que atiendes',
              'Formulario para solicitudes de cotización',
            ],
          },
          {
            title: 'Sitios para escuelas y universidades privadas',
            description:
              'Una familia compara escuelas en línea antes de pedir informes. El sitio presenta tu propuesta educativa, tus instalaciones y cómo inscribirse, de forma clara.',
            bullets: [
              'Oferta educativa por nivel',
              'Galería de instalaciones',
              'Formulario de informes o visita',
            ],
          },
          {
            title: 'Sitios para salud privada y servicios profesionales',
            description:
              'En Interlomas, Satélite o Metepec, un paciente o un cliente elige por confianza. Presentamos a tu equipo, tus servicios y cómo agendar.',
            bullets: ['Equipo y especialidades a la vista', 'Citas en línea', 'Ubicación, horario y contacto'],
          },
          {
            title: 'Branding',
            description:
              'Si tu marca se ve menos profesional que tu servicio, te cuesta clientes. Creamos o renovamos tu identidad para que esté al nivel de tu empresa.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
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
            text: 'Una llamada para entender a quién le vendes y contra quién compites, sobre todo si tu competencia está en la Ciudad de México.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas, qué información va en cada una y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en el Estado de México',
        description: 'Lo que nos preguntan las empresas de Toluca, Metepec y Naucalpan antes de contratar.',
        items: [
          c.faqCost('Toluca'),
          {
            question: 'Mi competencia está en la CDMX, ¿cómo me diferencio?',
            answer:
              'Con claridad sobre lo que haces mejor y con una imagen que no se quede atrás. Revisamos contigo cómo se presentan tus competidores y construimos el sitio sobre lo que te distingue.',
          },
          {
            question: 'Tengo una escuela, ¿el sitio puede recibir solicitudes de informes?',
            answer:
              'Sí. El sitio puede incluir un formulario de informes o de solicitud de visita que te llega por correo.',
          },
          c.faqPayment,
          c.faqRemote('el Estado de México'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como construcción, educación y salud. Es el mismo estándar con el que trabajaríamos tu empresa en el Estado de México.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en el Estado de México',
      breadcrumb: 'Diseño Web Estado de México',
      serviceName: 'Diseño Web y Branding en el Estado de México',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de una empresa, escuela o clínica en el Estado de México.',
    },
    en: {
      seo: {
        title: 'Web Design in Toluca & the State of Mexico | Aurin',
        description:
          'Web design and branding in Toluca, Metepec, Naucalpan, and Interlomas for industrial companies, private schools, healthcare, and professional services.',
        keywords:
          'web design Toluca, web design State of Mexico, website design Metepec, web design Naucalpan, branding Toluca Mexico',
      },
      hero: {
        subtitle: 'Web design and branding in the State of Mexico',
        titleLead: 'Web Design in',
        titleAccent: 'the State of Mexico',
        description:
          'Your company is in Toluca, Metepec, or Naucalpan, but it competes with companies in Mexico City. We design websites and brands so you look on par with any of them, while staying close to home.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in the State of Mexico',
        intro:
          'We work with companies in Toluca, Metepec, Lerma, Naucalpan, Tlalnepantla, Huixquilucan, and Atizapán: industry and suppliers along the Toluca–Lerma corridor, private schools and universities, clinics and practices, and professional service firms.',
        items: [
          {
            title: 'Corporate site for industrial companies',
            description:
              'Along the Toluca–Lerma corridor, clients review your site before inviting you to bid. We present your capabilities, certifications, and experience clearly and without exaggeration.',
            bullets: [
              'Services and capabilities clearly explained',
              'Certifications and sectors you serve',
              'Form for quote requests',
            ],
          },
          {
            title: 'Websites for private schools and universities',
            description:
              'Families compare schools online before asking for information. The site presents your educational offer, facilities, and how to enroll, clearly.',
            bullets: ['Programs by level', 'Facilities gallery', 'Information or visit request form'],
          },
          {
            title: 'Websites for private healthcare and professional services',
            description:
              'In Interlomas, Satélite, or Metepec, patients and clients choose on trust. We present your team, your services, and how to book.',
            bullets: ['Team and specialties visible', 'Online appointments', 'Location, hours, and contact'],
          },
          {
            title: 'Branding',
            description:
              'If your brand looks less professional than your service, it costs you clients. We create or refresh your identity to match your company’s level.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
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
            text: 'We learn who you sell to and who you compete with, especially if your competitors are in Mexico City.',
          },
          {
            name: 'Structure',
            text: 'We define the pages, what information goes on each, and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in the State of Mexico',
        description: 'What companies in Toluca, Metepec, and Naucalpan ask us before signing.',
        items: [
          C.faqCost('Toluca'),
          {
            question: 'My competitors are in Mexico City. How do I stand out?',
            answer:
              'By being clear about what you do best and with an image that does not fall behind. We review how your competitors present themselves and build the site around what sets you apart.',
          },
          {
            question: 'I run a school. Can the site receive information requests?',
            answer: 'Yes. The site can include an information or visit request form that arrives by email.',
          },
          C.faqPayment,
          C.faqRemote('the State of Mexico'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like construction, education, and healthcare. It is the same standard we would bring to your company in the State of Mexico.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in the State of Mexico',
      breadcrumb: 'Web Design State of Mexico',
      serviceName: 'Web Design and Branding in the State of Mexico',
      howToDescription:
        'Step-by-step process to design a website for a company, school, or clinic in the State of Mexico.',
    },
  },
};
