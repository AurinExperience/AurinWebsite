import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Diseño UX/UI para healthtech — palabra clave: "diseño UX/UI para apps de
 * salud" / "diseño de plataformas de telemedicina".
 *
 * Ángulo propio: usuarios de todas las edades y a veces en un mal momento,
 * accesibilidad, datos sensibles y flujos de citas, telemedicina y portales de
 * pacientes. Prueba social: Elite Home Health y Dentol (salud) y Ancient
 * (software), clientes reales.
 */
export const uxHealthtech: Sector = {
  id: 'ux-healthtech',
  service: 'uxui',
  status: 'live',
  publishAt: '2026-10-16T00:00:00-06:00',
  slug: { es: 'para-healthtech', en: 'for-healthtech' },
  name: { es: 'UX/UI para healthtech', en: 'UX/UI for healthtech' },
  proof: ['elite', 'dentol', 'ancient'],
  lead: {
    es: {
      heading: 'Hablemos de tu producto de salud',
      description:
        'Cuéntanos qué producto tienes o vas a lanzar y quién lo usa. Te contactamos para entender tu producto y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una plataforma de telemedicina y queremos que los pacientes agenden y se conecten sin ayuda.',
    },
    en: {
      heading: 'Let’s talk about your health product',
      description:
        'Tell us what product you have or are about to launch and who uses it. We will reach out to understand your product and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a telehealth platform and want patients to book and join calls without help.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño UX/UI para Healthtech y Apps de Salud | Aurin',
        description:
          'Diseño UX/UI para healthtech: apps de salud, telemedicina y portales de pacientes accesibles, claros y que cuidan los datos sensibles.',
        keywords:
          'diseño UX/UI para apps de salud, diseño healthtech, UX telemedicina, diseño portal de pacientes, diseño de app médica, UX salud digital',
      },
      hero: {
        subtitle: 'Diseño UX/UI para healthtech y apps de salud',
        titleLead: 'Diseño UX/UI para',
        titleAccent: 'Healthtech',
        description:
          'En salud, tus usuarios pueden tener 20 u 80 años, y a veces llegan en un mal momento. Una interfaz confusa no solo se abandona: genera desconfianza. Diseñamos productos de salud claros, accesibles y que transmiten la seguridad que un paciente necesita.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          s.ux.stats,
          { value: 'Salud', label: 'ya trabajamos con marcas como Elite Home Health y Dentol' },
        ],
      },
      services: {
        heading: 'Servicios de diseño UX/UI para healthtech',
        intro:
          'Diseñamos para startups de salud, plataformas de telemedicina, clínicas que digitalizan su atención y empresas de bienestar. Cada proyecto parte del paciente y del profesional que usan tu producto.',
        items: [
          {
            title: 'Citas y telemedicina sin fricción',
            description:
              'Agendar, pagar y entrar a una consulta en línea en pocos pasos, sin ayuda y desde cualquier dispositivo.',
            bullets: ['Flujos de agenda y pago', 'Salas de consulta en línea', 'Recordatorios y seguimiento'],
          },
          {
            title: 'Accesible para todos',
            description:
              'Textos legibles, contrastes correctos y flujos que funcionan igual para un paciente joven que para un adulto mayor.',
            bullets: ['Criterios de accesibilidad', 'Lenguaje claro, sin tecnicismos', 'Pruebas con usuarios reales'],
          },
          {
            title: 'Portales y paneles para profesionales',
            description:
              'Expedientes, agendas y resultados organizados para que médicos y personal encuentren lo que necesitan en segundos.',
            bullets: ['Portal de pacientes', 'Panel para profesionales', 'Roles y permisos'],
          },
          {
            title: 'Datos sensibles bien cuidados',
            description:
              'Diseñamos los consentimientos y avisos de privacidad dentro de la experiencia, para que el paciente entienda qué comparte y por qué.',
            bullets: ['Consentimientos claros', 'Avisos de privacidad en contexto', 'Sistema de diseño escalable'],
          },
        ],
      },
      process: {
        heading: s.ux.processHeading,
        description: s.ux.processDescription,
        steps: [
          s.ux.stepResearch(
            'Entendemos tu producto, a tus pacientes y a los profesionales que lo usan: datos de uso, entrevistas y revisión de la experiencia actual.'
          ),
          s.ux.stepFlows,
          s.ux.stepUi,
          s.ux.stepHandoff,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño UX/UI para healthtech',
        description: 'Lo que nos preguntan empresas de salud digital antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño UX/UI de una app de salud?',
            answer:
              'Depende del alcance: cuántos flujos y pantallas, si es web, app móvil o ambos y si incluye portal para profesionales. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Cómo diseñan para pacientes de todas las edades?',
            answer:
              'Seguimos criterios de accesibilidad, usamos lenguaje claro y probamos los flujos principales con usuarios reales antes de cerrar el diseño.',
          },
          {
            question: '¿Cómo se manejan los datos de salud en el diseño?',
            answer:
              'Los datos de salud son datos sensibles. Diseñamos los consentimientos, avisos y permisos con los requisitos que tu equipo legal nos indique, y pedimos solo la información necesaria en cada paso.',
          },
          s.ux.faqDev,
          s.ux.faqTeam,
          c.faqPayment,
          s.faqRemote('empresas de salud'),
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad, producto y sitios web en salud y software. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu producto.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño UX/UI para healthtech',
      breadcrumb: 'Diseño UX/UI para Healthtech',
      serviceName: 'Diseño UX/UI para Healthtech y Apps de Salud',
      howToDescription: 'Proceso paso a paso para diseñar la experiencia y la interfaz de un producto de salud digital.',
    },
    en: {
      seo: {
        title: 'UX/UI Design for Healthtech and Health Apps | Aurin',
        description:
          'UX/UI design for healthtech: health apps, telehealth, and patient portals that are accessible, clear, and careful with sensitive data.',
        keywords:
          'UX/UI design for health apps, healthtech design, telehealth UX, patient portal design, medical app design, digital health UX',
      },
      hero: {
        subtitle: 'UX/UI design for healthtech and health apps',
        titleLead: 'UX/UI Design for',
        titleAccent: 'Healthtech',
        description:
          'In healthcare, your users might be 20 or 80, and sometimes they arrive at a bad moment. A confusing interface is not just abandoned: it breeds distrust. We design health products that are clear, accessible, and convey the safety a patient needs.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          S.ux.stats,
          { value: 'Health', label: 'we already work with brands like Elite Home Health and Dentol' },
        ],
      },
      services: {
        heading: 'UX/UI design services for healthtech',
        intro:
          'We design for health startups, telehealth platforms, clinics going digital, and wellness companies. Every project starts from the patients and professionals who use your product.',
        items: [
          {
            title: 'Frictionless booking and telehealth',
            description:
              'Booking, paying, and joining an online visit in a few steps, without help and from any device.',
            bullets: ['Booking and payment flows', 'Online consultation rooms', 'Reminders and follow-up'],
          },
          {
            title: 'Accessible to everyone',
            description:
              'Readable text, proper contrast, and flows that work just as well for a young patient as for an older adult.',
            bullets: ['Accessibility criteria', 'Plain language, no jargon', 'Testing with real users'],
          },
          {
            title: 'Portals and dashboards for professionals',
            description:
              'Records, schedules, and results organized so doctors and staff find what they need in seconds.',
            bullets: ['Patient portal', 'Professional dashboard', 'Roles and permissions'],
          },
          {
            title: 'Sensitive data handled with care',
            description:
              'We design consents and privacy notices into the experience, so patients understand what they share and why.',
            bullets: ['Clear consents', 'In-context privacy notices', 'Scalable design system'],
          },
        ],
      },
      process: {
        heading: S.ux.processHeading,
        description: S.ux.processDescription,
        steps: [
          S.ux.stepResearch(
            'We learn about your product, your patients, and the professionals who use it: usage data, interviews, and a review of the current experience.'
          ),
          S.ux.stepFlows,
          S.ux.stepUi,
          S.ux.stepHandoff,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about UX/UI design for healthtech',
        description: 'What digital health companies ask us before signing.',
        items: [
          {
            question: 'How much does UX/UI design for a health app cost?',
            answer:
              'It depends on scope: how many flows and screens, whether it is web, mobile, or both, and whether it includes a professional portal. After a call we send an itemized quote.',
          },
          {
            question: 'How do you design for patients of all ages?',
            answer:
              'We follow accessibility criteria, use plain language, and test the main flows with real users before finalizing the design.',
          },
          {
            question: 'How is health data handled in the design?',
            answer:
              'Health data is sensitive personal data. We design consents, notices, and permissions around the requirements your legal team gives us, and ask only for the information each step needs.',
          },
          S.ux.faqDev,
          S.ux.faqTeam,
          C.faqPayment,
          S.faqRemote('health companies'),
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity, product, and website work in healthcare and software. The same care we put into every brand is what we would bring to your product.',
      },
      nearby: S.nearby,
      linkLabel: 'UX/UI design for healthtech',
      breadcrumb: 'UX/UI Design for Healthtech',
      serviceName: 'UX/UI Design for Healthtech and Health Apps',
      howToDescription: 'Step-by-step process to design the experience and interface of a digital health product.',
    },
  },
};
