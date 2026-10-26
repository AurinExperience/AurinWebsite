import { defineSector } from './build';

/**
 * UX/UI para logística y transporte — "diseño UX/UI para logística" / "diseño
 * de plataforma de rastreo". Ángulo: operadores con prisa, en campo y en el
 * celular; rastreo que evita llamadas. Prueba: Ancient (software) y clientes
 * B2B de energía y construcción; no se afirma cliente logístico.
 */
export const uxLogistica = defineSector({
  id: 'ux-logistica',
  service: 'uxui',
  publishAt: '2026-10-18T00:00:00-06:00',
  slug: { es: 'para-logistica', en: 'for-logistics' },
  name: { es: 'UX/UI para logística', en: 'UX/UI for logistics' },
  proof: ['ancient', 'mexicoPacific', 'grupoEstrella'],
  es: {
    seoTitle: 'Diseño UX/UI para Logística y Transporte',
    seoDescription:
      'Diseño UX/UI para logística y transporte: rastreo que evita llamadas, apps para operadores en campo y paneles para coordinar la operación.',
    keywords:
      'diseño UX/UI para logística, diseño plataforma de rastreo, UX transporte, app para operadores, diseño TMS, diseño panel de flotillas',
    subtitle: 'Diseño UX/UI para logística y transporte',
    accent: 'Logística',
    target: 'empresas de logística y transporte',
    hero: 'En logística, cada minuto que un operador pierde en una pantalla confusa cuesta, y cada cliente que no sabe dónde va su envío termina llamando. Diseñamos plataformas y apps que la operación usa con prisa y sin errores, y que le dan al cliente visibilidad sin preguntar.',
    intro:
      'Hacemos el diseño UX/UI de sistemas de operación, apps para operadores y portales de rastreo para empresas de transporte, paquetería, almacenes y plataformas de logística. Cada proyecto parte de quién usa el sistema —operadores, coordinadores o clientes— y de en qué condiciones.',
    items: [
      {
        title: 'Rastreo que evita llamadas',
        description:
          'Estado del envío, ubicación y tiempos estimados claros para el cliente, con notificaciones en los momentos que importan.',
        bullets: ['Página y app de rastreo', 'Notificaciones por etapa', 'Incidencias y reprogramaciones'],
      },
      {
        title: 'Apps para operadores en campo',
        description:
          'Botones grandes, pocos pasos y funcionamiento con mala señal, para registrar entregas, evidencias e incidencias sin detenerse.',
        bullets: ['Diseño para uso en movimiento', 'Evidencias de entrega', 'Modo sin conexión'],
      },
      {
        title: 'Paneles que coordinan la operación',
        description:
          'Rutas, unidades, pedidos y alertas organizados para que el coordinador vea lo urgente primero y decida rápido.',
        bullets: ['Panel de operación', 'Mapas y estados', 'Alertas y excepciones'],
      },
      {
        title: 'Portal para clientes empresariales',
        description:
          'Cotización, programación de envíos, facturas y reportes en un solo lugar para tus clientes B2B.',
        bullets: ['Cotización y programación', 'Facturas y reportes', 'Sistema de diseño escalable'],
      },
    ],
    research:
      'Entendemos la operación en su contexto: observación en campo y en oficina, entrevistas con operadores y clientes, y datos de uso del sistema actual.',
    costQuestion: '¿Cuánto cuesta el diseño UX/UI de una plataforma de logística?',
    costScope:
      'cuántos tipos de usuario y flujos y si incluye app para operadores, panel y portal de clientes',
    faqs: [
      {
        question: '¿Pueden diseñar sobre el sistema que ya usamos?',
        answer:
          'Sí. Rediseñamos la experiencia sobre tu sistema actual y coordinamos con tu equipo técnico lo que se puede cambiar en cada etapa.',
      },
      {
        question: '¿Cómo diseñan para operadores que usan la app en movimiento?',
        answer:
          'Observamos cómo trabajan, reducimos los pasos al mínimo y probamos los flujos en condiciones reales: con prisa, con guantes o con mala señal.',
      },
    ],
    remoteWho: 'empresas de logística',
    proofText:
      'Proyectos reales de identidad, producto y sitios web en software, energía y construcción. El mismo cuidado que ponemos en cada proyecto es el que pondríamos en tu plataforma.',
    howTo: 'la experiencia y la interfaz de una plataforma de logística',
    lead: {
      heading: 'Hablemos de tu operación',
      description:
        'Cuéntanos qué sistemas usan y quién los usa. Te contactaremos lo antes posible para entender tu operación y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Nuestros clientes llaman todo el día para preguntar dónde va su envío.',
    },
  },
  en: {
    seoTitle: 'UX/UI Design for Logistics and Transportation',
    seoDescription:
      'UX/UI design for logistics and transportation: tracking that prevents calls, apps for drivers in the field, and dashboards to coordinate operations.',
    keywords:
      'UX/UI design for logistics, tracking platform design, transportation UX, driver app design, TMS design, fleet dashboard design',
    subtitle: 'UX/UI design for logistics and transportation',
    accent: 'Logistics',
    target: 'logistics and transportation companies',
    hero: 'In logistics, every minute a driver loses on a confusing screen costs money, and every customer who does not know where their shipment is ends up calling. We design platforms and apps operations teams use in a hurry and without mistakes, and that give customers visibility without asking.',
    intro:
      'We design the UX/UI of operations systems, driver apps, and tracking portals for carriers, parcel companies, warehouses, and logistics platforms. Every project starts from who uses the system —drivers, coordinators, or customers— and under what conditions.',
    items: [
      {
        title: 'Tracking that prevents calls',
        description:
          'Clear shipment status, location, and estimated times for customers, with notifications at the moments that matter.',
        bullets: ['Tracking page and app', 'Notifications by stage', 'Exceptions and rescheduling'],
      },
      {
        title: 'Apps for drivers in the field',
        description:
          'Big buttons, few steps, and support for poor signal, to log deliveries, proof, and incidents without stopping.',
        bullets: ['Designed for use on the move', 'Proof of delivery', 'Offline mode'],
      },
      {
        title: 'Dashboards that coordinate operations',
        description:
          'Routes, vehicles, orders, and alerts organized so coordinators see what is urgent first and decide fast.',
        bullets: ['Operations dashboard', 'Maps and statuses', 'Alerts and exceptions'],
      },
      {
        title: 'Portal for business customers',
        description:
          'Quotes, shipment scheduling, invoices, and reports in one place for your B2B customers.',
        bullets: ['Quoting and scheduling', 'Invoices and reports', 'Scalable design system'],
      },
    ],
    research:
      'We learn about operations in context: field and office observation, interviews with drivers and customers, and usage data from the current system.',
    costQuestion: 'How much does UX/UI design for a logistics platform cost?',
    costScope:
      'how many user types and flows, and whether it includes a driver app, dashboard, and customer portal',
    faqs: [
      {
        question: 'Can you design on top of the system we already use?',
        answer:
          'Yes. We redesign the experience on top of your current system and coordinate with your technical team what can change at each stage.',
      },
      {
        question: 'How do you design for drivers using the app on the move?',
        answer:
          'We observe how they work, cut steps to a minimum, and test flows in real conditions: in a hurry, wearing gloves, or with poor signal.',
      },
    ],
    remoteWho: 'logistics companies',
    proofText:
      'Real identity, product, and website work in software, energy, and construction. The same care we put into every project is what we would bring to your platform.',
    howTo: 'the experience and interface of a logistics platform',
    lead: {
      heading: 'Let’s talk about your operation',
      description:
        'Tell us which systems you use and who uses them. We will reach out as soon as possible to understand your operation and send you an itemized proposal.',
      messagePlaceholder: 'E.g. Our customers call all day to ask where their shipment is.',
    },
  },
});
