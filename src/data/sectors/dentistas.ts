import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Dentistas y clínicas dentales — palabra clave: "diseño web para dentistas" /
 * "página web para consultorio dental".
 *
 * Ángulo propio: tratamientos de ticket alto (ortodoncia, implantes, estética
 * dental) que el paciente investiga antes de decidir, la valoración como primer
 * paso y el antes y después como prueba (con consentimiento del paciente).
 * Prueba social: Dentol es cliente real de salud dental.
 */
export const dentistas: Sector = {
  id: 'dentistas',
  status: 'live',
  publishAt: '2026-10-14T00:00:00-06:00',
  slug: { es: 'para-dentistas', en: 'for-dentists' },
  name: { es: 'Dentistas y clínicas dentales', en: 'Dentists and dental clinics' },
  proof: ['dentol', 'elite', 'ceiich'],
  lead: {
    es: {
      heading: 'Hablemos de tu clínica dental',
      description:
        'Cuéntanos qué tratamientos quieres impulsar y cómo agendas hoy. Te contactamos para entender tu clínica y te enviamos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Tenemos una clínica con tres sillones y queremos más pacientes de ortodoncia e implantes.',
    },
    en: {
      heading: 'Let’s talk about your dental clinic',
      description:
        'Tell us which treatments you want to grow and how you schedule today. We will reach out to understand your clinic and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a three-chair clinic and want more orthodontics and implant patients.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Dentistas y Clínicas Dentales | Aurin',
        description:
          'Páginas web para dentistas y clínicas dentales: valoraciones en línea, tratamientos bien explicados y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para dentistas, página web para consultorio dental, página web clínica dental, sitio web dentista, marketing dental, página web ortodoncista',
      },
      hero: {
        subtitle: 'Diseño web para dentistas y clínicas dentales',
        titleLead: 'Diseño Web para',
        titleAccent: 'Dentistas',
        description:
          'Antes de una ortodoncia o un implante, el paciente compara clínicas con calma: revisa tratamientos, casos y opiniones, y cada vez más le pregunta a una IA. Diseñamos sitios que lo convencen de que tu clínica es la indicada y le permiten agendar su valoración en el momento.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          { value: '24/7', label: 'tus pacientes pueden agendar su valoración a cualquier hora' },
          { value: 'Dental', label: 'ya trabajamos con marcas de salud dental como Dentol' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para dentistas',
        intro:
          'Trabajamos con dentistas, ortodoncistas, endodoncistas y clínicas dentales. Cada página web para consultorio dental se diseña alrededor de los tratamientos que más te importan y de cómo prefieres recibir a tus pacientes.',
        items: [
          {
            title: 'Valoraciones en línea',
            description:
              'La primera cita es la que más cuesta conseguir. El paciente agenda su valoración cuando le queda bien, también de noche o en fin de semana, y la solicitud te llega directo.',
            bullets: [
              'Botón de valoración visible en cada página',
              'Formulario o agenda conectada a tu calendario',
              'Contacto directo por WhatsApp',
            ],
          },
          {
            title: 'Tratamientos que se entienden',
            description:
              'Una página por tratamiento explica en qué consiste, para quién es y qué esperar, sin tecnicismos. El paciente llega a la consulta entendiendo lo que necesita y con confianza para decidir.',
            bullets: [
              'Ortodoncia, implantes, estética dental y más',
              'Preguntas frecuentes por tratamiento',
              'Opciones de pago que manejas, si quieres mostrarlas',
            ],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Tus pacientes buscan "dentista cerca de mí" en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué haces y dónde estás, y te puedan recomendar.',
            bullets: [
              'Datos estructurados de tu clínica',
              'Contenido que la IA puede citar',
              'Ubicación, horarios y cómo llegar',
            ],
          },
          {
            title: 'Branding para clínicas dentales',
            description:
              'Una identidad cuidada hace que tu clínica se vea igual de profesional en tu sitio, tu recepción, tus uniformes y tus redes. Es lo primero que el paciente nota y lo que recuerda.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Señalética, papelería y uniformes según el alcance',
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
            text: 'Una llamada para entender tu clínica, los tratamientos que quieres impulsar y cómo llegan hoy tus pacientes.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: tratamientos, equipo, casos, valoración en línea y aviso de privacidad. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para dentistas',
        description: 'Lo que nos preguntan dentistas y clínicas antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de una clínica dental?',
            answer:
              'Depende del alcance: cuántos tratamientos, si incluye agenda en línea, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Puedo mostrar casos de antes y después?',
            answer:
              'Sí, siempre que tengas el consentimiento por escrito de tus pacientes. Diseñamos una galería que muestra tu trabajo sin promesas de resultados.',
          },
          {
            question: '¿El sitio puede recibir solicitudes de valoración?',
            answer:
              'Sí. Puede incluir un formulario, un botón de WhatsApp o una agenda en línea conectada a tu calendario, según cómo organices tu clínica.',
          },
          s.faqAi('mi clínica dental'),
          c.faqPayment,
          s.faqRemote('clínicas dentales'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en salud dental, salud e investigación. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu clínica.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para dentistas',
      breadcrumb: 'Diseño Web para Dentistas',
      serviceName: 'Diseño Web y Branding para Dentistas y Clínicas Dentales',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un dentista o una clínica dental.',
    },
    en: {
      seo: {
        title: 'Web Design for Dentists and Dental Clinics | Aurin',
        description:
          'Websites for dentists and dental clinics: online consultations, clearly explained treatments, and visibility on Google and AI search tools.',
        keywords:
          'web design for dentists, dental clinic website, dentist website design, orthodontist website, dental marketing, dental practice website',
      },
      hero: {
        subtitle: 'Web design for dentists and dental clinics',
        titleLead: 'Web Design for',
        titleAccent: 'Dentists',
        description:
          'Before braces or an implant, patients compare clinics carefully: they review treatments, cases, and reviews, and more and more often they ask an AI. We design websites that convince them your clinic is the right one and let them book their consultation on the spot.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          { value: '24/7', label: 'patients can book their consultation any time' },
          { value: 'Dental', label: 'we already work with dental brands like Dentol' },
        ],
      },
      services: {
        heading: 'Web design services for dentists',
        intro:
          'We work with dentists, orthodontists, endodontists, and dental clinics. Every dental practice website is designed around the treatments that matter most to you and how you prefer to welcome patients.',
        items: [
          {
            title: 'Online consultations',
            description:
              'The first visit is the hardest one to win. Patients book their consultation when it suits them, including evenings and weekends, and the request reaches you directly.',
            bullets: [
              'Consultation button visible on every page',
              'Form or calendar connected to your schedule',
              'Direct contact over WhatsApp',
            ],
          },
          {
            title: 'Treatments people understand',
            description:
              'A page per treatment explains what it involves, who it is for, and what to expect, without jargon. Patients arrive understanding what they need and confident enough to decide.',
            bullets: [
              'Orthodontics, implants, cosmetic dentistry, and more',
              'FAQs for each treatment',
              'Payment options you offer, if you want to show them',
            ],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Patients search "dentist near me" on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you do and where you are, and can recommend you.',
            bullets: ['Structured data about your clinic', 'Content AI tools can cite', 'Location, hours, and directions'],
          },
          {
            title: 'Branding for dental clinics',
            description:
              'A carefully crafted identity makes your clinic look equally professional on your site, front desk, uniforms, and social media. It is the first thing patients notice and what they remember.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Signage, stationery, and uniforms based on project scope',
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
            text: 'We learn about your clinic, the treatments you want to grow, and how patients find you today.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: treatments, team, cases, online consultations, and the privacy notice. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for dentists',
        description: 'What dentists and clinics ask us before signing.',
        items: [
          {
            question: 'How much does a dental clinic website cost?',
            answer:
              'It depends on scope: how many treatments, whether it includes online booking, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'Can I show before-and-after cases?',
            answer:
              'Yes, as long as you have your patients’ written consent. We design a gallery that shows your work without promising results.',
          },
          {
            question: 'Can the site take consultation requests?',
            answer:
              'Yes. It can include a form, a WhatsApp button, or an online calendar connected to your schedule, depending on how you run your clinic.',
          },
          S.faqAi('my dental clinic'),
          C.faqPayment,
          S.faqRemote('dental clinics'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in dental care, healthcare, and research. The same care we put into every brand is what we would bring to your clinic.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for dentists',
      breadcrumb: 'Web Design for Dentists',
      serviceName: 'Web Design and Branding for Dentists and Dental Clinics',
      howToDescription: 'Step-by-step process to design a website for a dentist or dental clinic.',
    },
  },
};
