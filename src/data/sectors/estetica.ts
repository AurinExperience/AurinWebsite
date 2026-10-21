import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Cirugía plástica y medicina estética — palabra clave: "diseño web para
 * cirujanos plásticos" / "página web para clínica estética".
 *
 * Ángulo propio: decisiones de ticket alto que se piensan mucho, la
 * certificación como primer filtro del paciente, los resultados con
 * consentimiento y sin promesas, y la publicidad de salud regulada (se
 * recomienda validar permisos con su asesor, no se afirma qué aplica).
 * Prueba social: Dentol y Elite Home Health, clientes reales de salud.
 */
export const estetica: Sector = {
  id: 'estetica',
  status: 'live',
  publishAt: '2026-10-14T00:00:00-06:00',
  slug: { es: 'para-clinicas-esteticas', en: 'for-aesthetic-clinics' },
  name: { es: 'Cirugía plástica y medicina estética', en: 'Plastic surgery and aesthetics' },
  proof: ['dentol', 'elite', 'ideograma'],
  lead: {
    es: {
      heading: 'Hablemos de tu clínica',
      description:
        'Cuéntanos qué procedimientos quieres impulsar y cómo llegan hoy tus pacientes. Te contactamos para entender tu práctica y te enviamos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Soy cirujano plástico certificado y quiero más valoraciones de rinoplastia y contorno corporal.',
    },
    en: {
      heading: 'Let’s talk about your clinic',
      description:
        'Tell us which procedures you want to grow and how patients find you today. We will reach out to understand your practice and send you an itemized proposal.',
      messagePlaceholder: 'E.g. I am a board-certified plastic surgeon and want more rhinoplasty and body contouring consultations.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Cirujanos Plásticos y Clínicas Estéticas | Aurin',
        description:
          'Páginas web para cirujanos plásticos y clínicas estéticas: certificación a la vista, procedimientos claros y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para cirujanos plásticos, página web clínica estética, página web medicina estética, sitio web cirugía plástica, marketing clínica estética',
      },
      hero: {
        subtitle: 'Diseño web para cirujanos plásticos y clínicas estéticas',
        titleLead: 'Diseño Web para',
        titleAccent: 'Clínicas Estéticas',
        description:
          'Una cirugía o un tratamiento estético se piensa durante semanas. El paciente revisa certificaciones, resultados y opiniones, compara clínicas y cada vez más le pregunta a una IA. Diseñamos sitios que transmiten la seguridad que busca y lo llevan a agendar su valoración contigo.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          { value: '24/7', label: 'tus pacientes pueden agendar su valoración a cualquier hora' },
          { value: 'Salud', label: 'ya trabajamos con marcas como Dentol y Elite Home Health' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para clínicas estéticas',
        intro:
          'Diseñamos para cirujanos plásticos, dermatólogos y clínicas de medicina estética. Cada sitio se diseña a partir de los procedimientos que quieres impulsar y del paciente que quieres atraer.',
        items: [
          {
            title: 'Tu certificación, en primer plano',
            description:
              'El paciente quiere saber que está en manos seguras. Presentamos tu formación, tu certificación de consejo y tu cédula profesional desde la primera pantalla.',
            bullets: ['Formación y certificaciones', 'Cédula profesional visible', 'Fotos reales de la clínica y del equipo'],
          },
          {
            title: 'Procedimientos sin letra chica',
            description:
              'Una página por procedimiento explica en qué consiste, la recuperación y qué esperar, con claridad y sin promesas de resultados. El paciente llega a la valoración informado y con confianza.',
            bullets: [
              'Procedimientos quirúrgicos y no quirúrgicos',
              'Resultados con consentimiento del paciente',
              'Preguntas frecuentes por procedimiento',
            ],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Tus pacientes buscan en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google por el mejor especialista. Estructuramos tu sitio para que esas herramientas entiendan quién eres y te puedan recomendar.',
            bullets: ['Datos estructurados de tu clínica', 'Contenido que la IA puede citar', 'Valoración en línea y WhatsApp'],
          },
          {
            title: 'Branding para clínicas estéticas',
            description:
              'En un sector donde la imagen lo es todo, una identidad cuidada hace que tu clínica se vea igual de impecable en tu sitio, tu recepción y tus redes.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance',
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
            text: 'Una llamada para entender tu práctica, los procedimientos que quieres impulsar y cómo llegan hoy tus pacientes.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: procedimientos, especialista, resultados, valoración en línea y aviso de privacidad. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para clínicas estéticas',
        description: 'Lo que nos preguntan cirujanos y clínicas antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de una clínica estética?',
            answer:
              'Depende del alcance: cuántos procedimientos, si incluye galería de resultados y agenda en línea, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Puedo mostrar fotos de antes y después?',
            answer:
              'Sí, siempre que tengas el consentimiento por escrito de tus pacientes. Diseñamos la galería con cuidado y sin promesas de resultados. La publicidad de servicios de salud está regulada, así que te recomendamos validar con tu asesor qué permisos aplican a tu caso.',
          },
          {
            question: '¿El sitio puede recibir solicitudes de valoración?',
            answer:
              'Sí. Puede incluir un formulario, un botón de WhatsApp o una agenda en línea conectada a tu calendario, según cómo organices tu clínica.',
          },
          s.faqAi('mi clínica'),
          c.faqPayment,
          s.faqRemote('clínicas estéticas'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en salud, salud dental y marca. El mismo cuidado que ponemos en cada proyecto es el que pondríamos en tu clínica.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para clínicas estéticas',
      breadcrumb: 'Diseño Web para Clínicas Estéticas',
      serviceName: 'Diseño Web y Branding para Cirujanos Plásticos y Clínicas Estéticas',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un cirujano plástico o una clínica estética.',
    },
    en: {
      seo: {
        title: 'Web Design for Plastic Surgeons and Aesthetic Clinics | Aurin',
        description:
          'Websites for plastic surgeons and aesthetic clinics: credentials in plain sight, clear procedures, and visibility on Google and AI search tools.',
        keywords:
          'web design for plastic surgeons, aesthetic clinic website, med spa website, plastic surgery website design, cosmetic clinic marketing',
      },
      hero: {
        subtitle: 'Web design for plastic surgeons and aesthetic clinics',
        titleLead: 'Web Design for',
        titleAccent: 'Aesthetic Clinics',
        description:
          'Surgery or an aesthetic treatment is a decision people think about for weeks. They check credentials, results, and reviews, compare clinics, and more and more often they ask an AI. We design websites that convey the safety they are looking for and lead them to book a consultation with you.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          { value: '24/7', label: 'patients can book their consultation any time' },
          { value: 'Health', label: 'we already work with brands like Dentol and Elite Home Health' },
        ],
      },
      services: {
        heading: 'Web design services for aesthetic clinics',
        intro:
          'We design for plastic surgeons, dermatologists, and aesthetic medicine clinics. Every site is designed around the procedures you want to grow and the patient you want to attract.',
        items: [
          {
            title: 'Your credentials, up front',
            description:
              'Patients want to know they are in safe hands. We present your training, board certification, and professional license from the very first screen.',
            bullets: ['Training and certifications', 'Visible professional license', 'Real photos of the clinic and team'],
          },
          {
            title: 'Procedures without fine print',
            description:
              'A page per procedure explains what it involves, recovery, and what to expect, clearly and without promising results. Patients arrive at the consultation informed and confident.',
            bullets: ['Surgical and non-surgical procedures', 'Results shared with patient consent', 'FAQs for each procedure'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Patients search on Google, but they also ask ChatGPT or Google’s AI answers for the best specialist. We structure your site so those tools understand who you are and can recommend you.',
            bullets: ['Structured data about your clinic', 'Content AI tools can cite', 'Online consultations and WhatsApp'],
          },
          {
            title: 'Branding for aesthetic clinics',
            description:
              'In a field where image is everything, a carefully crafted identity makes your clinic look equally flawless on your site, front desk, and social media.',
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
            text: 'We learn about your practice, the procedures you want to grow, and how patients find you today.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: procedures, specialist, results, online consultations, and the privacy notice. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for aesthetic clinics',
        description: 'What surgeons and clinics ask us before signing.',
        items: [
          {
            question: 'How much does an aesthetic clinic website cost?',
            answer:
              'It depends on scope: how many procedures, whether it includes a results gallery and online booking, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'Can I show before-and-after photos?',
            answer:
              'Yes, as long as you have your patients’ written consent. We design the gallery carefully and without promising results. Healthcare advertising is regulated, so we recommend confirming with your advisor which permits apply to you.',
          },
          {
            question: 'Can the site take consultation requests?',
            answer:
              'Yes. It can include a form, a WhatsApp button, or an online calendar connected to your schedule, depending on how you run your clinic.',
          },
          S.faqAi('my clinic'),
          C.faqPayment,
          S.faqRemote('aesthetic clinics'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in healthcare, dental care, and branding. The same care we put into every project is what we would bring to your clinic.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for aesthetic clinics',
      breadcrumb: 'Web Design for Aesthetic Clinics',
      serviceName: 'Web Design and Branding for Plastic Surgeons and Aesthetic Clinics',
      howToDescription: 'Step-by-step process to design a website for a plastic surgeon or aesthetic clinic.',
    },
  },
};
