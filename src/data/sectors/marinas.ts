import { defineSector } from './build';

/**
 * Marinas y clubes náuticos — "página web para marina".
 * Ángulo: navegantes de EE. UU. y Canadá que planean su ruta por el Pacífico
 * y el Caribe mexicano; buscan slips, servicios, requisitos de llegada y
 * vida en la marina. Distinto de `us-yacht-charters` (renta y venta en EE. UU.).
 */
export const marinas = defineSector({
  id: 'marinas',
  publishAt: '2026-11-01T00:00:00-06:00',
  slug: { es: 'para-marinas-y-clubes-nauticos', en: 'for-marinas-and-yacht-clubs' },
  name: { es: 'Marinas y clubes náuticos', en: 'Marinas and yacht clubs' },
  proof: ['elRollo', 'ideograma', 'grupoEstrella'],
  es: {
    seoTitle: 'Diseño Web para Marinas y Clubes Náuticos',
    seoDescription:
      'Sitios para marinas y clubes náuticos en México: slips y tarifas, servicios, guía de llegada para navegantes extranjeros, membresías y reservas.',
    keywords:
      'diseño web para marinas, página web marina México, sitio web club náutico, reservación de slip en línea, marina Los Cabos sitio web',
    subtitle: 'Diseño web para marinas y clubes náuticos',
    accent: 'Marinas',
    target: 'marinas y clubes náuticos',
    hero: 'Un capitán que baja de San Diego hacia Los Cabos, o que cruza al Caribe mexicano, planea cada escala desde internet. Busca calado, slips disponibles, combustible, servicios y cómo hacer el trámite de llegada. Si tu marina no responde eso en inglés, atraca en la siguiente. Diseñamos sitios que facilitan la llegada del navegante y presentan la vida en tu marina.',
    intro:
      'Diseñamos para marinas, clubes náuticos, astilleros y desarrollos con marina en Los Cabos, La Paz, Puerto Vallarta, Mazatlán, Ensenada, Cancún, Isla Mujeres y Cozumel.',
    items: [
      {
        title: 'Slips y especificaciones',
        description:
          'Esloras, calado, servicios en muelle y tarifas por noche, mes o temporada, con solicitud de reservación en línea.',
        bullets: ['Slips y esloras', 'Calado y especificaciones', 'Solicitud de reservación'],
      },
      {
        title: 'Llegada sin dudas',
        description:
          'Coordenadas, canal de radio, combustible y trámites de llegada para embarcaciones extranjeras explicados paso a paso.',
        bullets: ['Guía de llegada', 'Trámites para extranjeros', 'Combustible y canal de radio'],
      },
      {
        title: 'Servicios y astillero',
        description:
          'Varadero, mantenimiento, provisiones, seguridad y concierge, que son la razón para quedarse más tiempo.',
        bullets: ['Varadero y mantenimiento', 'Concierge y provisiones', 'Seguridad 24 horas'],
      },
      {
        title: 'Club y comunidad',
        description:
          'Membresías, regatas, eventos, restaurante y la vida alrededor de la marina, que convierten una escala en temporada.',
        bullets: ['Membresías', 'Eventos y regatas', 'Restaurante y amenidades'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu marina, tus servicios y de dónde vienen tus navegantes.',
    pages: 'slips y tarifas, llegada, servicios, astillero, club, eventos y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una marina?',
    costScope:
      'cuántos servicios, si incluye reservaciones de slips y membresías y si también necesitas marca',
    faqs: [
      {
        question: '¿El sitio debe estar en inglés?',
        answer:
          'Sí, si recibes embarcaciones de Estados Unidos y Canadá, que suelen ser la mayoría en temporada. Lo redactamos en inglés náutico correcto, no como traducción.',
      },
      {
        question: '¿Se puede conectar con nuestro sistema de reservaciones?',
        answer:
          'En muchos casos sí, como desarrollo a la medida. Si no tienes uno, diseñamos una solicitud de reservación que llega completa a tu oficina con eslora, fechas y servicios.',
      },
      {
        question: '¿Pueden explicar los trámites para embarcaciones extranjeras?',
        answer:
          'Sí. Con la información de tu oficina redactamos una guía clara de llegada y trámites, revisada por ustedes antes de publicarse.',
      },
    ],
    aiSubject: 'mi marina',
    remoteWho: 'marinas y clubes náuticos',
    proofText:
      'Proyectos reales de sitios web e identidad en turismo y recreación, diseño de marca y construcción. Es el estándar con el que trabajaríamos tu marina.',
    howTo: 'el sitio web de una marina',
    lead: {
      heading: 'Hablemos de tu marina',
      description:
        'Cuéntanos dónde está tu marina, cuántos slips tiene y qué servicios ofreces. Te contactaremos para entenderla y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Tenemos una marina de 200 slips en La Paz y casi todos nuestros clientes vienen de California.',
    },
  },
  en: {
    seoTitle: 'Website Design for Marinas and Yacht Clubs in Mexico',
    seoDescription:
      'Websites for marinas and yacht clubs in Mexico: slips and rates, services, arrival guide for foreign boaters, memberships, and reservations.',
    keywords:
      'marina website design, Mexico marina website, yacht club website design, slip reservation website, Los Cabos marina website',
    subtitle: 'Web design for marinas and yacht clubs',
    accent: 'Marinas & Yacht Clubs',
    target: 'marinas and yacht clubs',
    hero: 'A captain heading south from San Diego to Los Cabos, or crossing to the Mexican Caribbean, plans every stop online. They look for depth, available slips, fuel, services, and how to clear in. If your marina does not answer that in English, they tie up at the next one. We design websites that make arrival easy for boaters and present life at your marina.',
    intro:
      'We design for marinas, yacht clubs, boatyards, and marina developments in Los Cabos, La Paz, Puerto Vallarta, Mazatlán, Ensenada, Cancún, Isla Mujeres, and Cozumel.',
    items: [
      {
        title: 'Slips and specs',
        description:
          'Lengths, depth, dockside services, and nightly, monthly, or seasonal rates, with online reservation requests.',
        bullets: ['Slips and lengths', 'Depth and specs', 'Reservation requests'],
      },
      {
        title: 'Arrival without doubts',
        description:
          'Coordinates, VHF channel, fuel, and clearance procedures for foreign vessels explained step by step.',
        bullets: ['Arrival guide', 'Clearance for foreign vessels', 'Fuel and VHF'],
      },
      {
        title: 'Services and boatyard',
        description:
          'Haul-out, maintenance, provisioning, security, and concierge, the reasons to stay longer.',
        bullets: ['Haul-out and maintenance', 'Concierge and provisioning', '24-hour security'],
      },
      {
        title: 'Club and community',
        description:
          'Memberships, regattas, events, restaurant, and life around the marina, turning a stop into a season.',
        bullets: ['Memberships', 'Events and regattas', 'Restaurant and amenities'],
      },
    ],
    diagnosis: 'A call to learn about your marina, your services, and where your boaters come from.',
    pages: 'slips and rates, arrival, services, boatyard, club, events, and contact',
    costQuestion: 'How much does a marina website cost?',
    costScope:
      'how many services, whether it includes slip and membership reservations, and whether you also need a brand',
    faqs: [
      {
        question: 'Should the site be in English?',
        answer:
          'Yes, if you host boats from the US and Canada, who are usually the majority in season. We write proper nautical English, not a translation.',
      },
      {
        question: 'Can it connect to our reservation system?',
        answer:
          'In many cases, yes, as custom development. If you do not have one, we design a reservation request that reaches your office complete with length, dates, and services.',
      },
      {
        question: 'Can you explain clearance for foreign vessels?',
        answer:
          'Yes. With input from your office we write a clear arrival and clearance guide, reviewed by your team before it goes live.',
      },
    ],
    aiSubject: 'my marina',
    remoteWho: 'marinas and yacht clubs',
    proofText:
      'Real website and identity work in tourism and recreation, brand design, and construction. It is the standard we would bring to your marina.',
    howTo: 'a marina website',
    lead: {
      heading: 'Let’s talk about your marina',
      description:
        'Tell us where your marina is, how many slips it has, and which services you offer. We will reach out to understand it and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We run a 200-slip marina in La Paz and most of our boaters come from California.',
    },
  },
});
