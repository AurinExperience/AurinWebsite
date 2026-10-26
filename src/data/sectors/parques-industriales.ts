import { defineSector } from './build';

/**
 * Parques industriales y naves — "página web para parque industrial".
 * Ángulo: con el nearshoring, consultores de localización y empresas de EE. UU.
 * y Asia comparan parques en línea antes de viajar; el sitio tiene que dar
 * especificaciones técnicas, ubicación logística y disponibilidad en inglés.
 */
export const parquesIndustriales = defineSector({
  id: 'parques-industriales',
  publishAt: '2026-10-27T00:00:00-06:00',
  slug: { es: 'para-parques-industriales', en: 'for-industrial-parks' },
  name: { es: 'Parques industriales', en: 'Industrial parks' },
  proof: ['grupoEstrella', 'mexicoPacific', 'ideograma'],
  es: {
    seoTitle: 'Diseño Web para Parques Industriales y Naves Industriales',
    seoDescription:
      'Sitios para parques industriales: naves y lotes disponibles, especificaciones, logística y servicios, en inglés y español para el nearshoring.',
    keywords:
      'diseño web para parques industriales, página web parque industrial, sitio web naves industriales, marketing parque industrial nearshoring, renta de naves industriales sitio web',
    subtitle: 'Diseño web para parques industriales',
    accent: 'Parques Industriales',
    target: 'parques industriales',
    hero: 'Antes de visitar México, el gerente de expansión de una empresa extranjera ya descartó la mitad de los parques desde su escritorio. Lo hizo comparando altura libre, carga eléctrica, distancia a la frontera y naves disponibles. Si tu sitio no lo responde en inglés y con datos, tu parque no entra en la lista corta. Diseñamos sitios que venden tu ubicación con la información que un consultor de localización necesita.',
    intro:
      'Diseñamos para desarrolladores y administradores de parques industriales, naves build-to-suit y parques logísticos en el Bajío, el norte y el centro del país.',
    items: [
      {
        title: 'Disponibilidad y especificaciones',
        description:
          'Naves y lotes con metros, altura libre, andenes, piso, carga eléctrica y estado (disponible, en construcción o build-to-suit). Si tu inventario cambia seguido, podemos sumar un panel para que tu equipo lo actualice.',
        bullets: ['Fichas técnicas por nave', 'Fichas descargables en PDF'],
      },
      {
        title: 'Ubicación logística',
        description:
          'Mapas con distancias a frontera, puertos, aeropuertos, autopistas y ciudades, porque la ubicación es lo primero que se compara.',
        bullets: ['Mapa de conectividad', 'Tiempos a frontera y puertos', 'Mano de obra y entorno'],
      },
      {
        title: 'Infraestructura y servicios',
        description:
          'Energía, agua, gas, seguridad, telecomunicaciones y servicios compartidos explicados con claridad, junto con certificaciones del parque.',
        bullets: ['Infraestructura del parque', 'Seguridad y administración', 'Certificaciones'],
      },
      {
        title: 'Inglés primero',
        description:
          'Un sitio pensado para inversionistas y consultores extranjeros, con formularios que llegan a tu área comercial con el tipo de operación que buscan.',
        bullets: ['Sitio bilingüe sin traducción automática', 'Formulario por tipo de operación', 'Sección de inquilinos actuales si los publicas'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu parque, su inventario y el tipo de empresa que quieres atraer.',
    pages: 'el parque, naves y lotes, ubicación, infraestructura, servicios, inquilinos y contacto',
    costQuestion: '¿Cuánto cuesta la página web de un parque industrial?',
    costScope:
      'cuántos parques y naves, si incluye desarrollo a la medida (como un panel para la disponibilidad) y si también necesitas marca del parque',
    faqs: [
      {
        question: '¿El sitio debe estar en inglés?',
        answer:
          'Para un parque que busca empresas extranjeras, sí, y conviene que el inglés sea la versión principal. Lo redactamos en inglés desde el principio, no como traducción del español.',
      },
      {
        question: '¿Podemos mostrar naves en construcción o build-to-suit?',
        answer:
          'Sí. Cada nave o lote tiene su estado y su ficha, así que puedes promover espacios antes de terminarlos y explicar qué se puede construir a la medida.',
      },
      {
        question: '¿Pueden incluir el plano maestro del parque?',
        answer:
          'Sí. Presentamos tu plano maestro como imagen nítida, con la numeración de cada nave o lote y su ficha correspondiente.',
      },
    ],
    aiSubject: 'mi parque industrial',
    remoteWho: 'parques industriales',
    proofText:
      'Proyectos reales de sitios web e identidad en construcción, energía y diseño de marca. Es el estándar con el que trabajaríamos tu parque.',
    howTo: 'el sitio web de un parque industrial',
    lead: {
      heading: 'Hablemos de tu parque',
      description:
        'Cuéntanos dónde está tu parque, cuántas naves tiene y qué tipo de empresas quieres atraer. Te contactaremos para entenderlo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos un parque en el Bajío con 12 naves y queremos atraer manufactura de Estados Unidos.',
    },
  },
  en: {
    seoTitle: 'Web Design for Industrial Parks in Mexico',
    seoDescription:
      'Websites for industrial parks in Mexico: available buildings and land, specs, logistics, and services, in English for nearshoring companies.',
    keywords:
      'industrial park website design, Mexico industrial park website, industrial real estate website, nearshoring industrial park marketing, warehouse park website',
    subtitle: 'Web design for industrial parks',
    accent: 'Industrial Parks',
    target: 'industrial parks',
    hero: 'Before visiting Mexico, an expansion manager has already ruled out half the parks from their desk. They did it by comparing clear height, power capacity, distance to the border, and available buildings. If your website does not answer that in English and with data, your park does not make the shortlist. We design websites that sell your location with the information a site selector needs.',
    intro:
      'We design for developers and operators of industrial parks, build-to-suit facilities, and logistics parks in Mexico’s Bajío, northern, and central regions.',
    items: [
      {
        title: 'Availability and specs',
        description:
          'Buildings and lots with square footage, clear height, docks, floor, power, and status (available, under construction, or build-to-suit). If your inventory changes often, we can add a panel so your team keeps it current.',
        bullets: ['Spec sheets per building', 'Downloadable PDF sheets'],
      },
      {
        title: 'Logistics location',
        description:
          'Maps with distances to the border, ports, airports, highways, and cities, because location is the first thing compared.',
        bullets: ['Connectivity map', 'Drive times to border and ports', 'Labor market and surroundings'],
      },
      {
        title: 'Infrastructure and services',
        description:
          'Power, water, gas, security, telecom, and shared services explained clearly, along with the park’s certifications.',
        bullets: ['Park infrastructure', 'Security and management', 'Certifications'],
      },
      {
        title: 'English first',
        description:
          'A website built for foreign investors and site selectors, with forms that reach your leasing team with the type of operation they need.',
        bullets: ['Native English and Spanish copy', 'Inquiry form by operation type', 'Current tenants section if you publish it'],
      },
    ],
    diagnosis: 'A call to learn about your park, its inventory, and the type of company you want to attract.',
    pages: 'the park, buildings and lots, location, infrastructure, services, tenants, and contact',
    costQuestion: 'How much does an industrial park website cost?',
    costScope:
      'how many parks and buildings, whether it includes custom development (such as an availability panel), and whether you also need a brand for the park',
    faqs: [
      {
        question: 'Should the site be in English?',
        answer:
          'For a park targeting foreign companies, yes, and English should be the primary version. We write it in English from the start, not as a translation of the Spanish.',
      },
      {
        question: 'Can we show buildings under construction or build-to-suit?',
        answer:
          'Yes. Each building or lot has its own status and sheet, so you can market spaces before they are finished and explain what can be built to suit.',
      },
      {
        question: 'Can you include the park’s master plan?',
        answer:
          'Yes. We present your master plan as a sharp image, with each building or lot numbered and matched to its spec sheet.',
      },
    ],
    aiSubject: 'my industrial park',
    remoteWho: 'industrial parks',
    proofText:
      'Real website and identity work in construction, energy, and brand design. It is the standard we would bring to your park.',
    howTo: 'an industrial park website',
    lead: {
      heading: 'Let’s talk about your park',
      description:
        'Tell us where your park is, how many buildings it has, and which companies you want to attract. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We operate a 12-building park in the Bajío and want to attract US manufacturers.',
    },
  },
});
