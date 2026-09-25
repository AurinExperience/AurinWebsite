import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * Tamaulipas — palabra clave objetivo: "diseño web Tampico" / "diseño web
 * Reynosa" / "diseño web Tamaulipas".
 *
 * Ángulo propio: empresas de la frontera (Reynosa, Nuevo Laredo, Matamoros)
 * con clientes y socios de Texas —agencias aduanales, despachos, servicios
 * a la industria— con sitios corporativos sencillos, sin sistemas; y clínicas,
 * escuelas y comercios de Tampico y Ciudad Victoria. Colima se queda con el
 * puerto de Manzanillo.
 */
export const tamaulipas: Landing = {
  id: 'tamaulipas',
  status: 'draft',
  slug: { es: 'tamaulipas', en: 'tamaulipas' },
  region: 'Tamaulipas',
  geo: { latitude: 26.0806, longitude: -98.2883 },
  areas: ['Reynosa', 'Nuevo Laredo', 'Matamoros', 'Tampico', 'Ciudad Madero', 'Ciudad Victoria'],
  phoneSample: '+52 899 123 4567',
  proof: ['fortrade', 'grupoEstrella', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Tamaulipas: Reynosa y Tampico | Aurin',
        description:
          'Diseño web bilingüe y branding en Tamaulipas para agencias aduanales, despachos y servicios industriales de la frontera, y clínicas y comercios de Tampico.',
        keywords:
          'diseño web Reynosa, diseño web Tampico, páginas web Tamaulipas, diseño web Nuevo Laredo, página web agencia aduanal, diseño web Matamoros',
      },
      hero: {
        subtitle: 'Diseño web y branding en Tamaulipas',
        titleLead: 'Diseño Web en',
        titleAccent: 'Tamaulipas',
        description:
          'En Reynosa, Nuevo Laredo y Matamoros muchos de tus clientes y socios están del otro lado y trabajan en inglés. En Tampico y Victoria, clínicas y comercios compiten por la confianza de la gente. Diseñamos sitios claros y bilingües para los dos.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en Tamaulipas',
        intro:
          'Trabajamos con empresas de Reynosa, Nuevo Laredo, Matamoros, Tampico, Ciudad Madero y Ciudad Victoria: agencias aduanales, despachos, servicios a la industria, clínicas, escuelas y comercios.',
        items: [
          {
            title: 'Sitio corporativo bilingüe para la frontera',
            description:
              'Un cliente de Texas o una planta de la región quiere entender rápido qué servicios das y cómo contactarte. El sitio lo presenta en inglés y en español con la misma información.',
            bullets: [
              'Servicios explicados con claridad',
              'Sitio disponible en español y en inglés',
              'Formulario para solicitudes de cotización',
            ],
          },
          {
            title: 'Sitios para servicios a la industria',
            description:
              'Mantenimiento, capacitación, seguridad industrial: tu cliente revisa tu experiencia y tus certificaciones antes de invitarte a cotizar.',
            bullets: ['Capacidades y experiencia', 'Certificaciones a la vista', 'Contacto directo'],
          },
          {
            title: 'Clínicas, escuelas y comercios',
            description:
              'En Tampico y Victoria la gente elige por confianza. El sitio presenta quién eres, qué ofreces y cómo contactarte o agendar.',
            bullets: ['Servicios u oferta educativa', 'Citas o formulario de informes', 'Ubicación, horario y mapa'],
          },
          {
            title: 'Branding',
            description:
              'Tu marca va en propuestas, fachadas, uniformes y redes. Creamos una identidad consistente que sostenga el nivel de tu empresa.',
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
            text: 'Una llamada para entender a quién le vendes y en qué idioma trabaja ese cliente.',
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
        heading: 'Preguntas frecuentes sobre diseño web en Tamaulipas',
        description: 'Lo que nos preguntan las empresas de Tamaulipas antes de contratar.',
        items: [
          c.faqCost('Reynosa o Tampico'),
          {
            question: 'Mis clientes están en Texas, ¿el sitio va en inglés?',
            answer:
              'Sí, en la frontera casi siempre lo recomendamos. El sitio queda disponible en inglés y en español con la misma información.',
          },
          {
            question: '¿El sitio puede mostrar el estatus de las operaciones de mis clientes?',
            answer:
              'Eso ya sería un sistema a la medida y no es lo que ofrecemos. Lo que hacemos es un sitio corporativo que presenta tu empresa, tus servicios y cómo contactarte.',
          },
          c.faqPayment,
          c.faqRemote,
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como finanzas internacionales, construcción y salud. Es el mismo estándar con el que trabajaríamos tu empresa en Tamaulipas.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en Tamaulipas',
      breadcrumb: 'Diseño Web Tamaulipas',
      serviceName: 'Diseño Web y Branding en Tamaulipas',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio bilingüe de una empresa de la frontera o una clínica en Tamaulipas.',
    },
    en: {
      seo: {
        title: 'Web Design in Tamaulipas: Reynosa & Tampico | Aurin',
        description:
          'Bilingual web design and branding in Tamaulipas for customs brokers, firms, and industrial services on the border, and clinics and retailers in Tampico.',
        keywords:
          'web design Reynosa, web design Nuevo Laredo, web design Tampico, customs broker website Mexico, bilingual website border Mexico',
      },
      hero: {
        subtitle: 'Web design and branding in Tamaulipas',
        titleLead: 'Web Design in',
        titleAccent: 'Tamaulipas',
        description:
          'In Reynosa, Nuevo Laredo, and Matamoros many of your clients and partners are across the border and work in English. In Tampico and Victoria, clinics and retailers compete for people’s trust. We design clear, bilingual websites for both.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in Tamaulipas',
        intro:
          'We work with companies in Reynosa, Nuevo Laredo, Matamoros, Tampico, Ciudad Madero, and Ciudad Victoria: customs brokers, firms, industrial services, clinics, schools, and retailers.',
        items: [
          {
            title: 'Bilingual corporate site for the border',
            description:
              'A client in Texas or a plant in the region wants to understand fast what services you provide and how to reach you. The site presents it in English and Spanish with the same information.',
            bullets: [
              'Services clearly explained',
              'The same site available in Spanish and English',
              'Form for quote requests',
            ],
          },
          {
            title: 'Websites for industrial services',
            description:
              'Maintenance, training, industrial safety: clients review your experience and certifications before inviting you to bid.',
            bullets: ['Capabilities and experience', 'Certifications visible', 'Direct contact'],
          },
          {
            title: 'Clinics, schools, and retailers',
            description:
              'In Tampico and Victoria people choose on trust. The site presents who you are, what you offer, and how to reach you or book.',
            bullets: ['Services or programs', 'Appointments or information form', 'Location, hours, and map'],
          },
          {
            title: 'Branding',
            description:
              'Your brand goes on proposals, storefronts, uniforms, and social media. We create a consistent identity that holds up to your company’s level.',
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
            text: 'We learn who you sell to and which language that client works in.',
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
        heading: 'Frequently asked questions about web design in Tamaulipas',
        description: 'What Tamaulipas companies ask us before signing.',
        items: [
          C.faqCost('Reynosa or Tampico'),
          {
            question: 'My clients are in Texas. Will the site be in English?',
            answer:
              'Yes, on the border we almost always recommend it. The site is available in English and Spanish with the same information.',
          },
          {
            question: 'Can the site show the status of my clients’ operations?',
            answer:
              'That would be a custom system, and it is not what we offer. What we build is a corporate website that presents your company, your services, and how to reach you.',
          },
          C.faqPayment,
          C.faqRemote,
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like international finance, construction, and healthcare. It is the same standard we would bring to your company in Tamaulipas.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in Tamaulipas',
      breadcrumb: 'Web Design Tamaulipas',
      serviceName: 'Web Design and Branding in Tamaulipas',
      howToDescription:
        'Step-by-step process to design a bilingual website for a border company or clinic in Tamaulipas.',
    },
  },
};
