import type { Guide } from './types';

/**
 * Guía 7 — "qué debe tener la página web de un hotel".
 *
 * Da soporte a las landings con ángulo turístico, que son las que más hablan
 * de hoteles (Guerrero, Chiapas, Quintana Roo, Campeche, Zacatecas). Se apoya
 * en el argumento que el hotelero ya entiende: cada reserva directa es una
 * comisión que no se le paga a una agencia en línea.
 */
export const paginaWebHotel: Guide = {
  id: 'pagina-web-hotel',
  status: 'live',
  slug: {
    es: 'que-debe-tener-la-pagina-web-de-un-hotel',
    en: 'what-a-hotel-website-needs',
  },
  published: '2026-10-13',
  updated: '2026-10-13',
  relatedLandings: ['quintana-roo', 'guerrero', 'chiapas'],
  relatedSectors: ['hoteles', 'agencias-viajes', 'ux-turismo', 'us-boutique-hotels'],
  copy: {
    es: {
      seo: {
        title: 'Qué debe tener la página web de un hotel para vender más | Aurin',
        description:
          'Lo que necesita el sitio de un hotel para recibir reservas directas: motor de reservas, fotos, velocidad en celular, Google, idiomas y confianza.',
        keywords:
          'página web para hotel, diseño web hoteles, reservas directas hotel, motor de reservas, sitio web hotel boutique, marketing hotelero',
      },
      title: 'Qué debe tener la página web de un hotel',
      excerpt:
        'Cada reserva que llega por tu sitio es una comisión que no le pagas a una agencia en línea. Estos son los elementos que hacen que el huésped reserve contigo directo.',
      intro: [
        'Casi todo huésped pasa por tu sitio antes de reservar, aunque al final reserve en Booking o Expedia. Entra a ver si el hotel es como en las fotos, a confirmar la ubicación o a buscar un mejor precio. Si el sitio se ve viejo, carga lento o no permite reservar, regresa a la agencia en línea y la comisión se la queda ella.',
        'Las agencias en línea seguirán siendo un canal importante. La meta no es dejarlas, es que una parte mayor de tus reservas llegue directo. Esto es lo que necesita el sitio para lograrlo.',
      ],
      sections: [
        {
          heading: 'Un motor de reservas, no un formulario',
          paragraphs: [
            'El huésped quiere ver disponibilidad y precio en ese momento y confirmar en unos pasos. Un formulario de “solicita tu reserva” que se contesta por correo horas después pierde a casi todos.',
            'Integra un motor de reservas conectado a tu inventario, o a tu channel manager si ya usas uno, para que la disponibilidad sea la misma en todos tus canales. El botón de reservar tiene que estar visible en cada pantalla, sobre todo en celular.',
          ],
        },
        {
          heading: 'Fotos que venden la experiencia',
          paragraphs: [
            'En hotelería las fotos hacen la mayor parte de la venta. Vale más invertir en una sesión profesional que en cualquier otra parte del sitio.',
          ],
          bullets: [
            'Cada tipo de habitación con varias fotos, su capacidad, camas y amenidades.',
            'Áreas comunes, alberca, restaurante y vistas, con luz natural.',
            'El entorno: la calle, el centro histórico, la playa o lo que haya cerca. El huésped también está comprando el destino.',
            'Imágenes optimizadas para que carguen rápido aunque sean muchas.',
          ],
        },
        {
          heading: 'Rápido en celular y en dos idiomas',
          paragraphs: [
            'La mayoría de las búsquedas de hospedaje se hacen desde el celular, muchas veces ya en camino al destino. Un sitio que tarda en cargar con la señal del viaje pierde la reserva antes de mostrar la primera foto.',
            'Si recibes turismo internacional, el sitio necesita una versión en inglés bien hecha, con sus propias URLs y textos pensados para ese huésped, no una traducción automática. Así Google puede mostrar la versión correcta según quién busque.',
          ],
        },
        {
          heading: 'Tu hotel en Google',
          paragraphs: [
            'Muchas reservas empiezan en Google y no en tu sitio. Dos cosas ayudan a que el huésped te encuentre y te elija:',
          ],
          bullets: [
            'Perfil de Google Business completo y con reseñas recientes. Es lo que aparece en el mapa cuando alguien busca hoteles en tu ciudad.',
            'Conecta tu motor de reservas con los enlaces de reserva de Google Hoteles, si tu proveedor lo permite, para que tu tarifa directa aparezca junto a la de las agencias.',
            'Datos estructurados de hotel en el sitio, para que Google entienda dirección, servicios y ubicación.',
            'Una página por cada cosa que el huésped busca: habitaciones, eventos, bodas, paquetes.',
          ],
        },
        {
          heading: 'Razones para reservar directo',
          paragraphs: [
            'Si el precio es el mismo en todos lados, el huésped reserva donde ya tiene cuenta. Dale un motivo para hacerlo contigo y dilo en el sitio, cerca del botón de reserva:',
          ],
          bullets: [
            'Mejor tarifa garantizada en el sitio oficial.',
            'Un beneficio que la agencia no ofrece: desayuno, salida tardía, traslado o una bebida de bienvenida.',
            'Contacto directo por WhatsApp para dudas antes de reservar.',
            'Reseñas reales, políticas de cancelación claras y datos de contacto visibles, para que reservar en un sitio que no conoce no le dé desconfianza.',
          ],
        },
      ],
      cta: {
        heading: 'Más reservas directas para tu hotel',
        text: 'Diseñamos sitios para hoteles y hospedajes con motor de reservas, versión en inglés y fotos que venden. Empezamos con una llamada para revisar tu sitio actual y tus canales.',
        label: 'Cotiza el sitio de tu hotel',
      },
      linkLabel: 'Qué debe tener la página web de un hotel',
      breadcrumb: 'Página web para hotel',
    },
    en: {
      seo: {
        title: 'What a hotel website needs to drive more bookings | Aurin',
        description:
          'What a hotel website needs to get direct bookings: booking engine, photography, mobile speed, Google visibility, languages, and trust.',
        keywords:
          'hotel website, hotel web design, direct hotel bookings, booking engine, boutique hotel website, hotel marketing Mexico',
      },
      title: 'What a hotel website needs',
      excerpt:
        'Every booking that comes through your site is a commission you do not pay to an online travel agency. These are the elements that get guests to book with you directly.',
      intro: [
        'Almost every guest visits your website before booking, even if they end up booking on Booking or Expedia. They come to check whether the hotel looks like the photos, confirm the location, or look for a better price. If the site looks dated, loads slowly, or does not let them book, they go back to the online travel agency and the agency keeps the commission.',
        'Online travel agencies will remain an important channel. The goal is not to leave them, but to have a larger share of your bookings come in directly. Here is what the site needs to make that happen.',
      ],
      sections: [
        {
          heading: 'A booking engine, not a form',
          paragraphs: [
            'Guests want to see availability and price right away and confirm in a few steps. A “request your booking” form answered by email hours later loses almost all of them.',
            'Integrate a booking engine connected to your inventory, or to your channel manager if you already use one, so availability matches across all your channels. The book button has to be visible on every screen, especially on mobile.',
          ],
        },
        {
          heading: 'Photos that sell the experience',
          paragraphs: [
            'In hospitality, photos do most of the selling. A professional shoot is worth more than any other part of the site.',
          ],
          bullets: [
            'Every room type with several photos, its capacity, beds, and amenities.',
            'Common areas, pool, restaurant, and views, in natural light.',
            'The surroundings: the street, the historic center, the beach, or whatever is nearby. Guests are also buying the destination.',
            'Images optimized to load fast even when there are many of them.',
          ],
        },
        {
          heading: 'Fast on mobile and in two languages',
          paragraphs: [
            'Most lodging searches happen on a phone, often while already on the way to the destination. A site that takes too long to load on a travel connection loses the booking before showing the first photo.',
            'If you receive international guests, the site needs a proper English version, with its own URLs and copy written for that guest, not machine translation. That way Google can show the right version depending on who is searching.',
          ],
        },
        {
          heading: 'Your hotel on Google',
          paragraphs: [
            'Many bookings start on Google, not on your site. A few things help guests find you and choose you:',
          ],
          bullets: [
            'A complete Google Business Profile with recent reviews. It is what shows up on the map when someone searches for hotels in your city.',
            'Connect your booking engine to Google Hotels booking links, if your provider supports it, so your direct rate appears next to the agencies’.',
            'Hotel structured data on the site, so Google understands your address, amenities, and location.',
            'One page for each thing guests look for: rooms, events, weddings, packages.',
          ],
        },
        {
          heading: 'Reasons to book direct',
          paragraphs: [
            'If the price is the same everywhere, guests book where they already have an account. Give them a reason to book with you and say it on the site, near the book button:',
          ],
          bullets: [
            'Best rate guaranteed on the official site.',
            'A perk the agency does not offer: breakfast, late checkout, a transfer, or a welcome drink.',
            'Direct contact over WhatsApp for questions before booking.',
            'Real reviews, clear cancellation policies, and visible contact details, so booking on a site they do not know feels safe.',
          ],
        },
      ],
      cta: {
        heading: 'More direct bookings for your hotel',
        text: 'We design websites for hotels and lodging with a booking engine, an English version, and photos that sell. We start with a call to review your current site and channels.',
        label: 'Get a quote for your hotel website',
      },
      linkLabel: 'What a hotel website needs',
      breadcrumb: 'Hotel website',
    },
  },
};
