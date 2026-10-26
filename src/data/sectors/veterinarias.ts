import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Veterinarias y hospitales veterinarios — palabra clave: "diseño web para
 * veterinarias" / "página web para clínica veterinaria".
 *
 * Ángulo propio: urgencias (horario y teléfono a la vista), citas de consulta,
 * vacunas y estética, y la confianza del dueño en quien cuida a su mascota.
 * Prueba social: PFI, cliente real del sector mascotas.
 */
export const veterinarias: Sector = {
  id: 'veterinarias',
  status: 'live',
  publishAt: '2026-10-15T00:00:00-06:00',
  slug: { es: 'para-veterinarias', en: 'for-veterinary-clinics' },
  name: { es: 'Veterinarias', en: 'Veterinary clinics' },
  proof: ['pfi', 'dentol', 'elite'],
  lead: {
    es: {
      heading: 'Hablemos de tu veterinaria',
      description:
        'Cuéntanos qué servicios ofreces y cómo agendan hoy tus clientes. Te contactaremos lo antes posible para entender tu clínica y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos un hospital veterinario con urgencias 24 horas y queremos más consultas agendadas.',
    },
    en: {
      heading: 'Let’s talk about your veterinary clinic',
      description:
        'Tell us which services you offer and how clients book today. We will reach out as soon as possible to understand your clinic and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a 24-hour veterinary hospital and want more scheduled visits.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño Web para Veterinarias y Hospitales Veterinarios | Aurin',
        description:
          'Páginas web para veterinarias: citas en línea, urgencias a la vista, servicios claros y presencia en Google y en buscadores con IA.',
        keywords:
          'diseño web para veterinarias, página web para clínica veterinaria, sitio web hospital veterinario, página web veterinario, marketing veterinario',
      },
      hero: {
        subtitle: 'Diseño web para veterinarias y hospitales veterinarios',
        titleLead: 'Diseño Web para',
        titleAccent: 'Veterinarias',
        description:
          'Para tus clientes, su mascota es familia. Antes de elegirte revisan tus servicios, tu equipo y tus horarios, y en una urgencia necesitan tu teléfono en segundos. Cada vez más también le preguntan a una IA. Diseñamos sitios que transmiten cuidado y les permiten pedir cita o llamarte sin buscar.',
        cta: 'Cotiza tu sitio',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          { value: '24/7', label: 'tus clientes pueden pedir una consulta a cualquier hora' },
          { value: 'Mascotas', label: 'ya trabajamos con marcas del sector mascotas como PFI' },
        ],
      },
      services: {
        heading: 'Diseño web para veterinarias: lo que puede incluir tu sitio',
        intro:
          'Diseñamos para veterinarias, hospitales veterinarios y clínicas de especialidad. Cada página web para clínica veterinaria se diseña a partir de tus servicios y de cómo atiendes a tus pacientes.',
        items: [
          {
            title: 'Citas y urgencias sin buscar',
            description:
              'La cita de consulta se pide en línea y, si es urgencia, tu teléfono y tu horario están a la vista en cada pantalla.',
            bullets: ['Formulario de citas', 'Urgencias y horario siempre visibles', 'Contacto directo por WhatsApp'],
            custom: ['Agenda en línea'],
          },
          {
            title: 'Servicios bien explicados',
            description:
              'Consulta, vacunas, cirugía, estética o especialidades, cada servicio con lo que el dueño necesita saber antes de llegar.',
            bullets: ['Una página por servicio', 'Equipo y especialidades', 'Fotos reales de la clínica'],
          },
          {
            title: 'Que te encuentren en Google y en la IA',
            description:
              'Los dueños buscan "veterinaria cerca de mí" en Google, pero también le preguntan a ChatGPT o a las respuestas con IA de Google. Estructuramos tu sitio para que esas herramientas entiendan qué ofreces y te puedan recomendar.',
            bullets: ['Datos estructurados de tu clínica', 'Contenido que la IA puede citar', 'Ubicación, horarios y cómo llegar'],
          },
          {
            title: 'Branding para veterinarias',
            description:
              'Una identidad cálida y profesional hace que tu clínica se reconozca en tu sitio, tu fachada, tus uniformes y tus redes.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Señalética, uniformes y papelería según el alcance',
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
            text: 'Una llamada para entender tu clínica, tus servicios y cómo agendan hoy tus clientes.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: servicios, equipo, urgencias, citas y aviso de privacidad. Todo organizado para que Google y los buscadores con IA lo entiendan.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web para veterinarias',
        description: 'Lo que nos preguntan veterinarias y hospitales antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta la página web de una veterinaria?',
            answer:
              'Depende del alcance: cuántos servicios, si incluye agenda en línea y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Cómo destacamos el servicio de urgencias?',
            answer:
              'Tu teléfono y tu horario de urgencias quedan visibles en cada pantalla, con un botón para llamar directo desde el celular.',
          },
          {
            question: '¿El sitio puede recibir citas?',
            answer:
              'Sí. Incluye un formulario y un botón de WhatsApp, y si lo necesitas desarrollamos a la medida una agenda en línea conectada a tu calendario.',
          },
          s.faqAi('mi veterinaria'),
          c.faqPayment,
          s.faqRemote('veterinarias'),
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en el sector mascotas y en salud. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu clínica.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño web para veterinarias',
      breadcrumb: 'Diseño Web para Veterinarias',
      serviceName: 'Diseño Web y Branding para Veterinarias',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de una veterinaria o un hospital veterinario.',
    },
    en: {
      seo: {
        title: 'Web Design for Veterinary Clinics and Hospitals | Aurin',
        description:
          'Websites for veterinary clinics: online appointments, emergencies in plain sight, clear services, and visibility on Google and AI search tools.',
        keywords:
          'web design for veterinarians, veterinary clinic website, animal hospital website, vet website design, veterinary marketing',
      },
      hero: {
        subtitle: 'Web design for veterinary clinics and hospitals',
        titleLead: 'Web Design for',
        titleAccent: 'Vets',
        description:
          'For your clients, their pet is family. Before choosing you they check your services, your team, and your hours, and in an emergency they need your phone number in seconds. More and more, they also ask an AI. We design websites that convey care and let them request a visit or call you without searching.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          { value: '24/7', label: 'clients can request a visit any time' },
          { value: 'Pets', label: 'we already work with pet industry brands like PFI' },
        ],
      },
      services: {
        heading: 'Web design for veterinary clinics: what your site can include',
        intro:
          'We design for veterinary clinics, animal hospitals, and specialty practices. Every veterinary clinic website is designed around your services and how you care for your patients.',
        items: [
          {
            title: 'Appointments and emergencies, no searching',
            description:
              'Regular visits are requested online and, in an emergency, your phone number and hours are visible on every screen.',
            bullets: ['Appointment form', 'Emergencies and hours always visible', 'Direct contact over WhatsApp'],
            custom: ['Online calendar'],
          },
          {
            title: 'Services, clearly explained',
            description:
              'Checkups, vaccines, surgery, grooming, or specialties, each service with what owners need to know before they arrive.',
            bullets: ['A page per service', 'Team and specialties', 'Real photos of the clinic'],
          },
          {
            title: 'Get found on Google and by AI',
            description:
              'Owners search "vet near me" on Google, but they also ask ChatGPT or Google’s AI answers. We structure your site so those tools understand what you offer and can recommend you.',
            bullets: ['Structured data about your clinic', 'Content AI tools can cite', 'Location, hours, and directions'],
          },
          {
            title: 'Branding for veterinary clinics',
            description:
              'A warm, professional identity makes your clinic recognizable on your site, storefront, uniforms, and social media.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Signage, uniforms, and stationery based on project scope',
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
            text: 'We learn about your clinic, your services, and how clients book today.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: services, team, emergencies, appointments, and the privacy notice. All organized so Google and AI search tools can understand it.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design for veterinary clinics',
        description: 'What veterinary clinics and hospitals ask us before signing.',
        items: [
          {
            question: 'How much does a veterinary clinic website cost?',
            answer:
              'It depends on scope: how many services, whether it includes online booking, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'How do we highlight our emergency service?',
            answer:
              'Your phone number and emergency hours stay visible on every screen, with a button to call directly from a phone.',
          },
          {
            question: 'Can the site take appointments?',
            answer:
              'Yes. It includes a form and a WhatsApp button, and if you need it we build a custom online calendar connected to your schedule.',
          },
          S.faqAi('my veterinary clinic'),
          C.faqPayment,
          S.faqRemote('veterinary clinics'),
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in the pet industry and healthcare. The same care we put into every brand is what we would bring to your clinic.',
      },
      nearby: S.nearby,
      linkLabel: 'Web design for veterinary clinics',
      breadcrumb: 'Web Design for Vets',
      serviceName: 'Web Design and Branding for Veterinary Clinics',
      howToDescription: 'Step-by-step process to design a website for a veterinary clinic or animal hospital.',
    },
  },
};
