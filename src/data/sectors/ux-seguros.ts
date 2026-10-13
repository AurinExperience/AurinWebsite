import { defineSector } from './build';

/**
 * UX/UI para seguros e insurtech — "diseño UX/UI para aseguradoras" /
 * "diseño insurtech". Ángulo: cotizar, contratar y reclamar sin llamar; la
 * póliza que nadie entiende como problema de diseño. Prueba: clientes reales
 * de finanzas (Fortrade, Monetix, Bonanza).
 */
export const uxSeguros = defineSector({
  id: 'ux-seguros',
  service: 'uxui',
  publishAt: '2026-10-17T00:00:00-06:00',
  slug: { es: 'para-aseguradoras', en: 'for-insurance' },
  name: { es: 'UX/UI para aseguradoras', en: 'UX/UI for insurance' },
  proof: ['fortrade', 'monetix', 'bonanza'],
  es: {
    seoTitle: 'Diseño UX/UI para Aseguradoras e Insurtech',
    seoDescription:
      'Diseño UX/UI para aseguradoras e insurtech: cotizadores que convierten, contratación en línea y siniestros que se reportan sin llamar.',
    keywords:
      'diseño UX/UI para aseguradoras, diseño insurtech, UX seguros, diseño cotizador de seguros, app de seguros, experiencia de cliente seguros',
    subtitle: 'Diseño UX/UI para aseguradoras e insurtech',
    accent: 'Aseguradoras',
    target: 'aseguradoras e insurtech',
    hero: 'Nadie disfruta comprar un seguro y casi nadie entiende su póliza. Cada pregunta sin respuesta es un cliente que abandona el cotizador o una llamada al momento del siniestro. Diseñamos experiencias de seguros claras, de la cotización al reclamo.',
    stat: { value: 'Finanzas', label: 'ya trabajamos con marcas como Fortrade, Monetix y Bonanza' },
    intro:
      'Trabajamos con aseguradoras, insurtechs, brokers y agentes que digitalizan su venta y su servicio. Cada proyecto parte de las decisiones que el cliente toma en cada etapa de su póliza.',
    items: [
      {
        title: 'Cotizadores que convierten',
        description:
          'Pocas preguntas, en el orden correcto, con el precio y las coberturas explicadas. Menos abandono entre la cotización y la contratación.',
        bullets: ['Cotizador por pasos', 'Comparación de coberturas', 'Contratación y pago en línea'],
      },
      {
        title: 'Pólizas que se entienden',
        description:
          'Coberturas, deducibles y exclusiones presentados en lenguaje claro, para que el cliente sepa qué tiene antes de necesitarlo.',
        bullets: ['Resumen de póliza claro', 'Documentos en la app', 'Renovaciones y endosos'],
      },
      {
        title: 'Siniestros sin llamar',
        description:
          'Reportar un siniestro, subir evidencia y seguir el estado desde el celular, en el momento en que el cliente más necesita sentirse acompañado.',
        bullets: ['Reporte por pasos', 'Carga de fotos y documentos', 'Seguimiento del reclamo'],
      },
      {
        title: 'Herramientas para agentes',
        description:
          'Paneles para agentes y brokers que cotizan, emiten y dan seguimiento a su cartera sin perder tiempo en el sistema.',
        bullets: ['Panel de cartera', 'Emisión rápida', 'Sistema de diseño escalable'],
      },
    ],
    research:
      'Entendemos a tus clientes y agentes: dónde abandonan el cotizador, por qué llaman, entrevistas y revisión de la experiencia actual.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI para una aseguradora?',
    costScope:
      'cuántos productos y flujos, si incluye cotizador, portal de clientes o herramientas para agentes y si es web, app o ambos',
    faqs: [
      {
        question: '¿Pueden diseñar un cotizador para varios productos?',
        answer:
          'Sí. Diseñamos un cotizador que se adapta a cada producto sin volverse complicado, y que tu equipo puede ampliar cuando agreguen coberturas.',
      },
      {
        question: '¿Cómo se cuidan los requisitos regulatorios?',
        answer:
          'Diseñamos los flujos con los requisitos que tus áreas legal y de cumplimiento nos indiquen, como avisos obligatorios o condiciones generales, sin que estorben la contratación.',
      },
    ],
    remoteWho: 'aseguradoras y brokers',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en finanzas. El mismo cuidado que ponemos en cada marca es el que pondríamos en tu aseguradora.',
    howTo: 'la experiencia y la interfaz de un producto de seguros',
    lead: {
      heading: 'Hablemos de tu aseguradora',
      description:
        'Cuéntanos qué productos vendes y qué parte de la experiencia quieres mejorar. Te contactamos para entender tu operación y te enviamos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Muchos clientes abandonan nuestro cotizador de seguros de auto antes de contratar.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Insurance and Insurtech',
    seoDescription:
      'UX/UI design for insurers and insurtech: quote flows that convert, online purchase, and claims customers file without calling.',
    keywords:
      'UX/UI design for insurance, insurtech design, insurance UX, insurance quote flow design, insurance app, insurance customer experience',
    subtitle: 'UX/UI design for insurers and insurtech',
    accent: 'Insurance',
    target: 'insurers and insurtech companies',
    hero: 'Nobody enjoys buying insurance and almost nobody understands their policy. Every unanswered question is a customer abandoning the quote or a call at the moment of a claim. We design clear insurance experiences, from quote to claim.',
    stat: { value: 'Finance', label: 'we already work with brands like Fortrade, Monetix, and Bonanza' },
    intro:
      'We work with insurers, insurtechs, brokers, and agents digitizing their sales and service. Every project starts from the decisions customers make at each stage of their policy.',
    items: [
      {
        title: 'Quote flows that convert',
        description:
          'Few questions, in the right order, with price and coverage explained. Less drop-off between quote and purchase.',
        bullets: ['Step-by-step quote flow', 'Coverage comparison', 'Online purchase and payment'],
      },
      {
        title: 'Policies people understand',
        description:
          'Coverage, deductibles, and exclusions presented in plain language, so customers know what they have before they need it.',
        bullets: ['Clear policy summary', 'Documents in the app', 'Renewals and endorsements'],
      },
      {
        title: 'Claims without calling',
        description:
          'Reporting a claim, uploading evidence, and tracking its status from a phone, right when customers most need to feel supported.',
        bullets: ['Step-by-step reporting', 'Photo and document upload', 'Claim tracking'],
      },
      {
        title: 'Tools for agents',
        description:
          'Dashboards for agents and brokers who quote, issue, and manage their book without wasting time in the system.',
        bullets: ['Book of business dashboard', 'Fast issuance', 'Scalable design system'],
      },
    ],
    research:
      'We learn about your customers and agents: where they abandon the quote, why they call, interviews, and a review of the current experience.',
    costQuestion: 'How much does UX/UI design for an insurer cost?',
    costScope:
      'how many products and flows, whether it includes a quote flow, customer portal, or agent tools, and whether it is web, mobile, or both',
    faqs: [
      {
        question: 'Can you design a quote flow for several products?',
        answer:
          'Yes. We design a quote flow that adapts to each product without getting complicated, and that your team can expand as you add coverage.',
      },
      {
        question: 'How are regulatory requirements handled?',
        answer:
          'We design the flows around the requirements your legal and compliance teams give us, such as mandatory notices or terms, without getting in the way of purchase.',
      },
    ],
    remoteWho: 'insurers and brokers',
    proofText:
      'Real identity, product, and website work in finance. The same care we put into every brand is what we would bring to your insurance business.',
    howTo: 'the experience and interface of an insurance product',
    lead: {
      heading: 'Let’s talk about your insurance business',
      description:
        'Tell us which products you sell and which part of the experience you want to improve. We will reach out to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. Many customers abandon our auto insurance quote before buying.',
    },
  },
});
