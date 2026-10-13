import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Diseño UX/UI para SaaS y software — palabra clave: "diseño UX/UI para SaaS" /
 * "diseño de software empresarial".
 *
 * Ángulo propio: el producto se vende solo cuando el usuario llega rápido a su
 * primer resultado; onboarding, activación, dashboards complejos que se
 * entienden y sistemas de diseño que escalan con el equipo.
 * Prueba social: Ancient (desarrollo de software) y clientes de finanzas.
 */
export const uxSaas: Sector = {
  id: 'ux-saas',
  service: 'uxui',
  status: 'live',
  publishAt: '2026-10-16T00:00:00-06:00',
  slug: { es: 'para-saas-y-software', en: 'for-saas-and-software' },
  name: { es: 'UX/UI para SaaS y software', en: 'UX/UI for SaaS and software' },
  proof: ['ancient', 'fortrade', 'monetix'],
  lead: {
    es: {
      heading: 'Hablemos de tu software',
      description:
        'Cuéntanos qué hace tu producto, quién lo usa y en qué etapa está. Te contactamos para entender tu producto y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un SaaS de logística y los usuarios nuevos tardan mucho en entender cómo usarlo.',
    },
    en: {
      heading: 'Let’s talk about your software',
      description:
        'Tell us what your product does, who uses it, and what stage it is in. We will reach out to understand your product and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a logistics SaaS and new users take too long to figure out how to use it.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño UX/UI para SaaS y Software Empresarial | Aurin',
        description:
          'Diseño UX/UI para SaaS y software: onboarding que activa usuarios, dashboards que se entienden y sistemas de diseño que escalan.',
        keywords:
          'diseño UX/UI para SaaS, diseño de software empresarial, UX SaaS, diseño de dashboards, sistema de diseño, diseño de producto digital B2B',
      },
      hero: {
        subtitle: 'Diseño UX/UI para SaaS y software empresarial',
        titleLead: 'Diseño UX/UI para',
        titleAccent: 'SaaS',
        description:
          'Un software se vende cuando el usuario entiende rápido para qué le sirve. Si se pierde en el primer uso, cancela antes de ver su valor. Diseñamos productos que llevan al usuario a su primer resultado sin manual, con interfaces que tu equipo puede hacer crecer.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          s.ux.stats,
          { value: 'Software', label: 'ya trabajamos con empresas de software como Ancient' },
        ],
      },
      services: {
        heading: 'Servicios de diseño UX/UI para SaaS',
        intro:
          'Trabajamos con startups de software, empresas SaaS y equipos que construyen herramientas internas. Cada proyecto parte de tu usuario y del resultado que busca al usar tu producto.',
        items: [
          {
            title: 'Onboarding y activación',
            description:
              'Los primeros minutos deciden si un usuario se queda. Diseñamos el registro, la configuración inicial y las primeras tareas para que llegue rápido a su primer resultado.',
            bullets: ['Registro y configuración inicial', 'Estados vacíos que guían', 'Tutoriales dentro del producto'],
          },
          {
            title: 'Dashboards que se entienden',
            description:
              'Datos complejos, tablas y reportes organizados para que cada usuario encuentre lo que necesita sin entrenamiento.',
            bullets: ['Dashboards y reportes', 'Tablas, filtros y búsquedas', 'Roles y permisos'],
          },
          {
            title: 'Sistema de diseño escalable',
            description:
              'Un sistema de componentes documentado para que tu equipo agregue funciones sin rehacer la interfaz y sin perder consistencia.',
            bullets: ['Biblioteca de componentes', 'Guías de uso para el equipo', 'Web, escritorio y móvil'],
          },
          {
            title: 'Sitio y marca del producto',
            description:
              'La página que vende tu software y la marca que lo respalda, alineadas con la experiencia dentro del producto.',
            bullets: ['Sitio web del producto', 'Página de precios y planes', 'Identidad de marca según el alcance'],
          },
        ],
      },
      process: {
        heading: s.ux.processHeading,
        description: s.ux.processDescription,
        steps: [
          s.ux.stepResearch(
            'Entendemos tu producto, a tus usuarios y dónde abandonan: datos de uso, entrevistas y revisión de la experiencia actual.'
          ),
          s.ux.stepFlows,
          s.ux.stepUi,
          s.ux.stepHandoff,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño UX/UI para SaaS',
        description: 'Lo que nos preguntan empresas de software antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño UX/UI de un SaaS?',
            answer:
              'Depende del alcance: cuántos flujos y pantallas, si necesitas sistema de diseño y si es web, escritorio o móvil. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Pueden mejorar un producto que ya tiene usuarios?',
            answer:
              'Sí. Revisamos dónde se atoran tus usuarios y priorizamos los cambios con más impacto, para mejorar por etapas sin detener el desarrollo.',
          },
          {
            question: '¿Diseñan también herramientas internas?',
            answer:
              'Sí. Las herramientas que usa tu equipo merecen la misma claridad: un sistema interno bien diseñado ahorra horas de trabajo y errores todos los días.',
          },
          s.ux.faqDev,
          s.ux.faqTeam,
          c.faqPayment,
          s.faqRemote('empresas de software'),
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad, producto y sitios web en software y finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu producto.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño UX/UI para SaaS',
      breadcrumb: 'Diseño UX/UI para SaaS',
      serviceName: 'Diseño UX/UI para SaaS y Software Empresarial',
      howToDescription: 'Proceso paso a paso para diseñar la experiencia y la interfaz de un producto SaaS.',
    },
    en: {
      seo: {
        title: 'UX/UI Design for SaaS and Business Software | Aurin',
        description:
          'UX/UI design for SaaS and software: onboarding that activates users, dashboards people understand, and design systems that scale.',
        keywords:
          'UX/UI design for SaaS, business software design, SaaS UX, dashboard design, design system, B2B product design',
      },
      hero: {
        subtitle: 'UX/UI design for SaaS and business software',
        titleLead: 'UX/UI Design for',
        titleAccent: 'SaaS',
        description:
          'Software sells when users quickly understand what it does for them. If they get lost on first use, they cancel before seeing its value. We design products that get users to their first result without a manual, with interfaces your team can keep growing.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          S.ux.stats,
          { value: 'Software', label: 'we already work with software companies like Ancient' },
        ],
      },
      services: {
        heading: 'UX/UI design services for SaaS',
        intro:
          'We work with software startups, SaaS companies, and teams building internal tools. Every project starts from your user and the result they want from your product.',
        items: [
          {
            title: 'Onboarding and activation',
            description:
              'The first minutes decide whether a user stays. We design sign-up, initial setup, and first tasks so they reach their first result fast.',
            bullets: ['Sign-up and initial setup', 'Empty states that guide', 'In-product tutorials'],
          },
          {
            title: 'Dashboards people understand',
            description:
              'Complex data, tables, and reports organized so every user finds what they need without training.',
            bullets: ['Dashboards and reports', 'Tables, filters, and search', 'Roles and permissions'],
          },
          {
            title: 'A scalable design system',
            description:
              'A documented component system so your team can add features without redoing the interface or losing consistency.',
            bullets: ['Component library', 'Usage guidelines for the team', 'Web, desktop, and mobile'],
          },
          {
            title: 'Product website and brand',
            description:
              'The page that sells your software and the brand behind it, aligned with the in-product experience.',
            bullets: ['Product website', 'Pricing and plans page', 'Brand identity based on project scope'],
          },
        ],
      },
      process: {
        heading: S.ux.processHeading,
        description: S.ux.processDescription,
        steps: [
          S.ux.stepResearch(
            'We learn about your product, your users, and where they drop off: usage data, interviews, and a review of the current experience.'
          ),
          S.ux.stepFlows,
          S.ux.stepUi,
          S.ux.stepHandoff,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about UX/UI design for SaaS',
        description: 'What software companies ask us before signing.',
        items: [
          {
            question: 'How much does UX/UI design for a SaaS cost?',
            answer:
              'It depends on scope: how many flows and screens, whether you need a design system, and whether it is web, desktop, or mobile. After a call we send an itemized quote.',
          },
          {
            question: 'Can you improve a product that already has users?',
            answer:
              'Yes. We review where your users get stuck and prioritize the changes with the most impact, improving in stages without stopping development.',
          },
          {
            question: 'Do you also design internal tools?',
            answer:
              'Yes. The tools your team uses deserve the same clarity: a well-designed internal system saves hours of work and errors every day.',
          },
          S.ux.faqDev,
          S.ux.faqTeam,
          C.faqPayment,
          S.faqRemote('software companies'),
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity, product, and website work in software and finance. The same care we put into every brand is what we would bring to your product.',
      },
      nearby: S.nearby,
      linkLabel: 'UX/UI design for SaaS',
      breadcrumb: 'UX/UI Design for SaaS',
      serviceName: 'UX/UI Design for SaaS and Business Software',
      howToDescription: 'Step-by-step process to design the experience and interface of a SaaS product.',
    },
  },
};
