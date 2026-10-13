import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Médicos y consultorios — palabra clave objetivo: "diseño web para médicos" /
 * "página web para consultorio".
 *
 * Ángulo propio del sector, para que no sea la plantilla de una ciudad con otra
 * palabra: la cita en línea, la cédula profesional (Ley General de Salud, art.
 * 83: debe aparecer en la publicidad), el aviso de privacidad para datos de
 * salud (son datos sensibles) y los directorios tipo Doctoralia como canal
 * prestado, igual que las agencias en línea para un hotel.
 *
 * Prueba social: Dentol y Elite Home Health son clientes reales de salud.
 */
export const medicos: Sector = {
  id: 'medicos',
  status: 'live',
  slug: { es: 'para-medicos', en: 'for-doctors' },
  name: { es: 'Médicos y consultorios', en: 'Doctors and clinics' },
  proof: ['dentol', 'elite', 'galicia'],
  lead: {
    es: {
      heading: 'Hablemos de tu consultorio',
      description:
        'Cuéntanos tu especialidad y cómo agendas hoy. Te contactamos para entender tu práctica y te enviamos una propuesta desglosada.',
      messagePlaceholder:
        'Ej. Soy cardióloga, atiendo en dos consultorios y quiero que mis pacientes puedan agendar en línea.',
    },
    en: {
      heading: 'Let’s talk about your practice',
      description:
        'Tell us your specialty and how you schedule today. We will reach out to understand your practice and send you an itemized proposal.',
      messagePlaceholder:
        'E.g. I am a cardiologist, I see patients at two offices, and I want them to be able to book online.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Médicos y Consultorios | Aurin',
        description:
          'Páginas web para médicos y consultorios en México: citas en línea, cédula a la vista y presencia en Google y en buscadores con IA como ChatGPT.',
        keywords:
          'diseño web para médicos, página web para consultorio, página web para doctores, sitio web clínica, página web médico especialista, agendar citas en línea',
      },
      hero: {
        subtitle: 'Diseño web para médicos, consultorios y clínicas',
        titleLead: 'Diseño Web para',
        titleAccent: 'Médicos',
        description:
          'Tus pacientes te eligen antes de conocerte: buscan tu nombre, revisan tu especialidad y deciden en segundos, cada vez más preguntándole a una IA. Diseñamos sitios que transmiten la misma confianza que tu consulta, que te encuentren en Google y en la IA, y que les permiten agendar en el momento, sin llamar.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          { value: '24/7', label: 'tus pacientes pueden pedir cita a cualquier hora, sin llamar' },
          { value: 'Salud', label: 'ya trabajamos con marcas como Dentol y Elite Home Health' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web para médicos',
        intro:
          'Trabajamos con médicos especialistas, consultorios, clínicas y laboratorios. Cada página web para consultorio se diseña a partir de tu práctica: cómo llegan tus pacientes, qué te preguntan antes de la primera consulta y cómo prefieres agendar.',
        items: [
          {
            title: 'Citas en línea',
            description:
              'Menos llamadas, más citas. El paciente que tiene que llamar en horario de consulta muchas veces ya no llama; en tu sitio pide su cita cuando le queda bien, también de noche o en fin de semana, y la solicitud te llega directo.',
            bullets: [
              'Botón de cita visible en cada página',
              'Formulario o agenda conectada a tu calendario',
              'Contacto directo por WhatsApp',
            ],
          },
          {
            title: 'Perfil profesional que genera confianza',
            description:
              'Tu trayectoria, bien contada. Presentamos tu formación, especialidad y experiencia con la seriedad que merecen, junto con tu cédula profesional y la institución que expidió tu título, como pide la Ley General de Salud.',
            bullets: [
              'Formación, especialidad y certificaciones',
              'Cédula profesional visible',
              'Fotos reales del consultorio y del equipo',
            ],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Hoy tus pacientes buscan en Google, pero también le preguntan a ChatGPT, a Gemini o a las respuestas con IA de Google. Una página por cada padecimiento o tratamiento que atiendes, escrita con claridad y bien estructurada, les da a esas herramientas lo que necesitan para entenderte y recomendarte. Tus pacientes llegan informados y con confianza, sin promesas de resultados.',
            bullets: [
              'Páginas por padecimiento o procedimiento',
              'Datos estructurados de tu consultorio y especialidad',
              'Preguntas frecuentes que la IA puede citar',
              'Ubicación, horarios y cómo llegar',
            ],
          },
          {
            title: 'Branding para consultorios y clínicas',
            description:
              'Una identidad cuidada hace que tu consultorio se vea igual de profesional en tu sitio, tus recetas, tu letrero y tus redes. Es lo primero que el paciente nota y lo que recuerda.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Recetas, papelería y señalética según el alcance',
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
            text: 'Una llamada para entender tu especialidad, cómo llegan hoy tus pacientes y cómo agendas tus citas.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: tu perfil, los padecimientos que atiendes, la cita en línea, el aviso de privacidad y si el sitio va en uno o en los dos idiomas. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para médicos',
        description: 'Lo que nos preguntan médicos y clínicas antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de un consultorio?',
            answer:
              'Depende del alcance: cuántas páginas, si incluye agenda en línea, si va en uno o en los dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Ya estoy en Doctoralia, ¿necesito un sitio propio?',
            answer:
              'Los directorios ayudan a que te encuentren, pero ahí apareces junto a otros médicos de tu especialidad. Un sitio propio es tuyo, presenta solo tu práctica y puedes enlazarlo desde tu perfil de Google y tus redes. Lo ideal es usar los dos.',
          },
          {
            question: '¿El sitio puede recibir citas?',
            answer:
              'Sí. Puede incluir un formulario de cita, un botón de WhatsApp o una agenda en línea conectada a tu calendario, según cómo organices tu consulta.',
          },
          {
            question: '¿Qué pasa con los datos de mis pacientes?',
            answer:
              'Los datos de salud son datos personales sensibles. Si el sitio recibe información de pacientes, incluimos el aviso de privacidad y el consentimiento en el formulario, y pedimos solo los datos necesarios para agendar.',
          },
          {
            question: 'No tengo tiempo para ocuparme del sitio, ¿cómo le hacemos?',
            answer:
              'Nosotros nos encargamos. Te pedimos solo lo indispensable, armamos la estructura y los textos contigo, y después del lanzamiento puedes hacer cambios tú o dejarlos en nuestras manos con un plan mensual de mantenimiento.',
          },
          c.faqPayment,
          {
            question: '¿Mi consultorio puede aparecer en ChatGPT o en las respuestas con IA de Google?',
            answer:
              'Nadie puede garantizar que una IA te mencione, pero sí podemos darte las mejores condiciones para que lo haga. Escribimos tu información con respuestas claras por padecimiento, agregamos datos estructurados de tu consultorio y especialidad, y dejamos tu sitio listo para que esas herramientas lo lean y lo citen. Es el mismo trabajo que hacemos en nuestro propio sitio.',
          },
          {
            question: '¿Trabajan con médicos de cualquier ciudad?',
            answer:
              'Sí. Trabajamos a distancia con médicos y clínicas de todo México y con clientes en Estados Unidos, Canadá y España, entre otros países.',
          },
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en salud, salud dental y servicios profesionales. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu consultorio.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para médicos',
      breadcrumb: 'Diseño Web para Médicos',
      serviceName: 'Diseño Web y Branding para Médicos y Consultorios',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web de un médico, consultorio o clínica.',
    },
    en: {
      seo: {
        title: 'Web Design for Doctors and Medical Practices | Aurin',
        description:
          'Websites for doctors and medical practices: online appointments, credentials in plain sight, and visibility on Google and AI search tools like ChatGPT.',
        keywords:
          'web design for doctors, medical practice website, doctor website design, clinic website, specialist physician website, online appointment booking',
      },
      hero: {
        subtitle: 'Web design for doctors, practices, and clinics',
        titleLead: 'Web Design for',
        titleAccent: 'Doctors',
        description:
          'Patients choose you before they meet you: they search your name, check your specialty, and decide in seconds, more and more often by asking an AI. We design websites that convey the same confidence as your practice, help you show up on Google and in AI answers, and let them book on the spot, without calling.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          { value: '24/7', label: 'patients can request an appointment any time, without calling' },
          { value: 'Health', label: 'we already work with brands like Dentol and Elite Home Health' },
        ],
      },
      services: {
        heading: 'Web design services for doctors',
        intro:
          'We work with specialist physicians, private practices, clinics, and laboratories. Every site is designed around your practice: how patients find you, what they ask before the first visit, and how you prefer to schedule.',
        items: [
          {
            title: 'Online appointments',
            description:
              'Fewer calls, more appointments. A patient who has to call during office hours often never calls; on your site they request an appointment when it suits them, including evenings and weekends, and the request reaches you directly.',
            bullets: [
              'Appointment button visible on every page',
              'Form or calendar connected to your schedule',
              'Direct contact over WhatsApp',
            ],
          },
          {
            title: 'A professional profile that builds trust',
            description:
              'Your career, told well. We present your training, specialty, and experience with the seriousness they deserve, together with your professional license and the institution that granted your degree, as Mexican health law requires.',
            bullets: [
              'Training, specialty, and certifications',
              'Visible professional license',
              'Real photos of the practice and the team',
            ],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Patients still search on Google, but they also ask ChatGPT, Gemini, or Google’s AI answers. A clearly written, well-structured page for each condition or treatment you handle gives those tools what they need to understand and recommend you. Patients arrive informed and confident, without any promise of results.',
            bullets: [
              'Pages by condition or procedure',
              'Structured data about your practice and specialty',
              'FAQs that AI tools can cite',
              'Location, hours, and directions',
            ],
          },
          {
            title: 'Branding for practices and clinics',
            description:
              'A carefully crafted identity makes your practice look equally professional on your site, prescriptions, signage, and social media. It is the first thing patients notice and what they remember.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Prescriptions, stationery, and signage based on project scope',
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
            text: 'We learn about your specialty, how patients find you today, and how you schedule appointments.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: your profile, the conditions you treat, online appointments, the privacy notice, and whether the site runs in one language or both. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for doctors',
        description: 'What doctors and clinics ask us before signing.',
        items: [
          {
            question: 'How much does a website for a medical practice cost?',
            answer:
              'It depends on scope: how many pages, whether it includes online booking, whether it runs in one language or both, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'I am already on Doctoralia. Do I need my own site?',
            answer:
              'Directories help people find you, but there you appear next to other doctors in your specialty. Your own site belongs to you, presents only your practice, and can be linked from your Google profile and social media. Ideally you use both.',
          },
          {
            question: 'Can the site take appointments?',
            answer:
              'Yes. It can include an appointment form, a WhatsApp button, or an online calendar connected to your schedule, depending on how you run your practice.',
          },
          {
            question: 'What about my patients’ data?',
            answer:
              'Health data is sensitive personal data. If the site collects patient information, we include the privacy notice and consent in the form, and ask only for what is needed to book.',
          },
          {
            question: 'I do not have time to manage a website. How does this work?',
            answer:
              'We take care of it. We ask only for the essentials, build the structure and copy with you, and after launch you can make changes yourself or leave them to us with a monthly maintenance plan.',
          },
          C.faqPayment,
          {
            question: 'Can my practice show up in ChatGPT or Google’s AI answers?',
            answer:
              'No one can guarantee that an AI will mention you, but we can give you the best conditions for it. We write your information as clear answers by condition, add structured data about your practice and specialty, and get your site ready for those tools to read and cite. It is the same work we do on our own site.',
          },
          {
            question: 'Do you work with doctors in any city?',
            answer:
              'Yes. We work remotely with doctors and clinics all over Mexico and with clients in the United States, Canada, and Spain, among other countries.',
          },
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in healthcare, dental care, and professional services. The same care we put into every brand is what we would bring to your practice.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for doctors',
      breadcrumb: 'Web Design for Doctors',
      serviceName: 'Web Design and Branding for Doctors and Medical Practices',
      howToDescription: 'Step-by-step process to design a website for a doctor, private practice, or clinic.',
    },
  },
};
