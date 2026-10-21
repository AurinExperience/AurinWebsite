import type { Sector } from './index';
import { COMMON } from '@/data/landings/common';
import { SECTOR_COMMON } from './common';

const { es: c, en: C } = COMMON;
const { es: s, en: S } = SECTOR_COMMON;

/**
 * Diseño UX/UI para fintech — palabra clave: "diseño UX/UI para fintech" /
 * "diseño de apps financieras".
 *
 * Ángulo propio: en dinero, la confianza se gana o se pierde en el onboarding;
 * verificación de identidad, comisiones claras y movimientos que se entienden.
 * No se afirma qué regulación aplica a cada producto. Prueba social: Monetix,
 * Bonanza, Debiti y Fortrade, clientes reales de finanzas.
 */
export const uxFintech: Sector = {
  id: 'ux-fintech',
  service: 'uxui',
  status: 'live',
  publishAt: '2026-10-16T00:00:00-06:00',
  slug: { es: 'para-fintech', en: 'for-fintech' },
  name: { es: 'UX/UI para fintech', en: 'UX/UI for fintech' },
  proof: ['monetix', 'bonanza', 'debiti'],
  lead: {
    es: {
      heading: 'Hablemos de tu producto financiero',
      description:
        'Cuéntanos qué producto tienes o vas a lanzar y en qué etapa está. Te contactamos para entender tu producto y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una app de pagos y queremos mejorar el onboarding y la tasa de activación.',
    },
    en: {
      heading: 'Let’s talk about your financial product',
      description:
        'Tell us what product you have or are about to launch and what stage it is in. We will reach out to understand your product and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We have a payments app and want to improve onboarding and activation.',
    },
  },
  copy: {
    es: {
      seo: {
        title: 'Diseño UX/UI para Fintech y Apps Financieras | Aurin',
        description:
          'Diseño UX/UI para fintech: onboarding claro, verificación de identidad sin fricción y productos financieros en los que tus usuarios confían.',
        keywords:
          'diseño UX/UI para fintech, diseño de apps financieras, UX fintech, diseño de app de pagos, diseño banca digital, UX onboarding KYC',
      },
      hero: {
        subtitle: 'Diseño UX/UI para fintech y productos financieros',
        titleLead: 'Diseño UX/UI para',
        titleAccent: 'Fintech',
        description:
          'Con el dinero nadie arriesga: si una pantalla confunde, el usuario abandona y no vuelve. Diseñamos productos financieros que se sienten seguros desde el primer paso, que explican cada comisión y que convierten un registro en un cliente activo.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          c.stats[0],
          s.ux.stats,
          { value: 'Finanzas', label: 'ya trabajamos con marcas como Monetix, Bonanza y Debiti' },
        ],
      },
      services: {
        heading: 'Servicios de diseño UX/UI para fintech',
        intro:
          'Diseñamos para fintechs, startups de pagos, plataformas de inversión y empresas financieras que digitalizan sus servicios. Cada proyecto parte de tu usuario y de la decisión que tiene que tomar en cada pantalla.',
        items: [
          {
            title: 'Onboarding que convierte',
            description:
              'El registro y la verificación de identidad son donde más usuarios se pierden. Diseñamos cada paso para que se entienda, se complete rápido y transmita seguridad.',
            bullets: ['Registro y verificación de identidad', 'Mensajes de error que guían', 'Menos pasos, menos abandono'],
          },
          {
            title: 'Dinero que se entiende',
            description:
              'Saldos, movimientos, comisiones y rendimientos presentados con claridad. Un usuario que entiende su dinero confía más y usa más tu producto.',
            bullets: ['Dashboards y estados de cuenta', 'Comisiones y condiciones visibles', 'Flujos de pago y transferencia'],
          },
          {
            title: 'Sistema de diseño escalable',
            description:
              'Un sistema de componentes que tu equipo puede usar para crecer el producto sin perder consistencia, en web y en móvil.',
            bullets: ['Biblioteca de componentes', 'Guías de uso para el equipo', 'Diseño web y app móvil'],
          },
          {
            title: 'Marca que inspira confianza',
            description:
              'En finanzas la marca es parte del producto. Creamos o actualizamos tu identidad para que se vea sólida en la app, el sitio y cada comunicación.',
            bullets: ['Identidad de marca y manual', 'Sitio web del producto', 'Aplicaciones de marca según el alcance'],
          },
        ],
      },
      process: {
        heading: s.ux.processHeading,
        description: s.ux.processDescription,
        steps: [
          s.ux.stepResearch(
            'Entendemos tu producto, a tu usuario y dónde se atora hoy: datos de uso, entrevistas y revisión de la experiencia actual.'
          ),
          s.ux.stepFlows,
          s.ux.stepUi,
          s.ux.stepHandoff,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño UX/UI para fintech',
        description: 'Lo que nos preguntan fintechs y empresas financieras antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el diseño UX/UI de una fintech?',
            answer:
              'Depende del alcance: cuántos flujos y pantallas, si es web, app móvil o ambos y si necesitas sistema de diseño. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Pueden rediseñar un producto que ya está en uso?',
            answer:
              'Sí. Empezamos por revisar dónde se atoran tus usuarios y priorizamos los cambios que más impacto tienen, para mejorar sin detener la operación.',
          },
          {
            question: '¿Cómo se cuidan los requisitos regulatorios en el diseño?',
            answer:
              'Diseñamos los flujos con los requisitos que tu equipo legal y de cumplimiento nos indique, como la verificación de identidad o los avisos obligatorios, y buscamos que cumplirlos no arruine la experiencia.',
          },
          s.ux.faqDev,
          s.ux.faqTeam,
          c.faqPayment,
          s.faqRemote('fintechs'),
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad, producto y sitios web en finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu producto.',
      },
      nearby: s.nearby,
      linkLabel: 'Diseño UX/UI para fintech',
      breadcrumb: 'Diseño UX/UI para Fintech',
      serviceName: 'Diseño UX/UI para Fintech y Productos Financieros',
      howToDescription: 'Proceso paso a paso para diseñar la experiencia y la interfaz de un producto fintech.',
    },
    en: {
      seo: {
        title: 'UX/UI Design for Fintech and Financial Apps | Aurin',
        description:
          'UX/UI design for fintech: clear onboarding, frictionless identity verification, and financial products your users trust.',
        keywords:
          'UX/UI design for fintech, financial app design, fintech UX, payments app design, digital banking design, KYC onboarding UX',
      },
      hero: {
        subtitle: 'UX/UI design for fintech and financial products',
        titleLead: 'UX/UI Design for',
        titleAccent: 'Fintech',
        description:
          'Nobody takes risks with money: if a screen confuses them, users drop off and never come back. We design financial products that feel safe from the first step, explain every fee, and turn a sign-up into an active customer.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          C.stats[0],
          S.ux.stats,
          { value: 'Finance', label: 'we already work with brands like Monetix, Bonanza, and Debiti' },
        ],
      },
      services: {
        heading: 'UX/UI design services for fintech',
        intro:
          'We design for fintechs, payment startups, investment platforms, and financial companies going digital. Every project starts from your user and the decision they make on each screen.',
        items: [
          {
            title: 'Onboarding that converts',
            description:
              'Sign-up and identity verification are where most users are lost. We design every step to be clear, quick to complete, and reassuring.',
            bullets: ['Sign-up and identity verification', 'Error messages that guide', 'Fewer steps, less drop-off'],
          },
          {
            title: 'Money people understand',
            description:
              'Balances, transactions, fees, and returns presented clearly. Users who understand their money trust your product more and use it more.',
            bullets: ['Dashboards and statements', 'Visible fees and terms', 'Payment and transfer flows'],
          },
          {
            title: 'A scalable design system',
            description:
              'A component system your team can use to grow the product without losing consistency, on web and mobile.',
            bullets: ['Component library', 'Usage guidelines for the team', 'Web and mobile app design'],
          },
          {
            title: 'A brand that inspires trust',
            description:
              'In finance the brand is part of the product. We create or refresh your identity so it looks solid in the app, the website, and every message.',
            bullets: ['Brand identity and guidelines', 'Product website', 'Brand applications based on project scope'],
          },
        ],
      },
      process: {
        heading: S.ux.processHeading,
        description: S.ux.processDescription,
        steps: [
          S.ux.stepResearch(
            'We learn about your product, your users, and where they get stuck today: usage data, interviews, and a review of the current experience.'
          ),
          S.ux.stepFlows,
          S.ux.stepUi,
          S.ux.stepHandoff,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about UX/UI design for fintech',
        description: 'What fintechs and financial companies ask us before signing.',
        items: [
          {
            question: 'How much does UX/UI design for a fintech cost?',
            answer:
              'It depends on scope: how many flows and screens, whether it is web, mobile, or both, and whether you need a design system. After a call we send an itemized quote.',
          },
          {
            question: 'Can you redesign a product that is already live?',
            answer:
              'Yes. We start by reviewing where your users get stuck and prioritize the changes with the most impact, so you improve without stopping operations.',
          },
          {
            question: 'How are regulatory requirements handled in the design?',
            answer:
              'We design the flows around the requirements your legal and compliance team gives us, such as identity verification or mandatory notices, and make sure meeting them does not ruin the experience.',
          },
          S.ux.faqDev,
          S.ux.faqTeam,
          C.faqPayment,
          S.faqRemote('fintechs'),
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity, product, and website work in finance. The same care we put into every brand is what we would bring to your product.',
      },
      nearby: S.nearby,
      linkLabel: 'UX/UI design for fintech',
      breadcrumb: 'UX/UI Design for Fintech',
      serviceName: 'UX/UI Design for Fintech and Financial Products',
      howToDescription: 'Step-by-step process to design the experience and interface of a fintech product.',
    },
  },
};
