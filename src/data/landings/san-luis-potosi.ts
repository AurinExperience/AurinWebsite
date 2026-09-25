import type { Landing } from './types';
import { COMMON } from './common';

const { es: c, en: C } = COMMON;

/**
 * San Luis Potosí — palabra clave objetivo: "diseño web San Luis Potosí".
 *
 * Ángulo propio: turismo de la Huasteca Potosina (operadores de tours,
 * cabañas, hoteles en Ciudad Valles, Xilitla) con reservas, y empresas de
 * servicios y comercio de la capital. Lo industrial del Bajío es de
 * Querétaro y Guanajuato.
 */
export const sanLuisPotosi: Landing = {
  id: 'san-luis-potosi',
  status: 'draft',
  slug: { es: 'san-luis-potosi', en: 'san-luis-potosi' },
  region: 'San Luis Potosí',
  geo: { latitude: 22.1565, longitude: -100.9855 },
  areas: ['San Luis Potosí', 'Soledad de Graciano Sánchez', 'Ciudad Valles', 'Xilitla', 'Aquismón', 'Matehuala'],
  phoneSample: '+52 444 123 4567',
  proof: ['elRollo', 'galicia', 'elite'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en San Luis Potosí y la Huasteca | Aurin',
        description:
          'Diseño web y branding en San Luis Potosí para operadores de tours y hospedaje en la Huasteca Potosina, comercios, clínicas y despachos.',
        keywords:
          'diseño web San Luis Potosí, páginas web SLP, página web tours Huasteca Potosina, diseño web Ciudad Valles, branding San Luis Potosí',
      },
      hero: {
        subtitle: 'Diseño web y branding en San Luis Potosí',
        titleLead: 'Diseño Web en',
        titleAccent: 'San Luis Potosí',
        description:
          'La Huasteca Potosina atrae viajeros de todo el país que eligen tour y hospedaje desde el celular, muchas veces sin buena señal. Diseñamos sitios ligeros y claros para operadores y hospedajes, y sitios corporativos para empresas y servicios de la capital.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: c.stats,
      },
      services: {
        heading: 'Servicios de diseño web y branding en San Luis Potosí',
        intro:
          'Trabajamos con negocios de San Luis Potosí, Soledad, Ciudad Valles, Xilitla, Aquismón y Matehuala: operadores de tours, cabañas y hoteles, restaurantes, clínicas, despachos y comercios.',
        items: [
          {
            title: 'Sitios para tours en la Huasteca',
            description:
              'Cascadas, sótanos, ríos: el viajero compara recorridos y elige el que le da más confianza. Presentamos cada tour con itinerario, qué incluye y cómo reservar.',
            bullets: [
              'Página por recorrido con itinerario',
              'Reservas o solicitud por WhatsApp o formulario',
              'Pensado primero para celular',
            ],
          },
          {
            title: 'Cabañas y hoteles',
            description:
              'En Xilitla o Ciudad Valles el huésped quiere ver el lugar y saber qué hay cerca. El sitio lo muestra y facilita la reserva directa.',
            bullets: ['Galería de habitaciones o cabañas', 'Reservas o solicitud de disponibilidad', 'Ubicación y cómo llegar'],
          },
          {
            title: 'Sitios para empresas y servicios en la capital',
            description:
              'Clínicas, despachos y empresas de servicios: tu cliente quiere saber quién eres, qué haces y cómo contactarte. Lo presentamos con orden.',
            bullets: ['Servicios explicados con claridad', 'Equipo y experiencia', 'Citas o formulario de contacto'],
          },
          {
            title: 'Branding',
            description:
              'Si tu marca no se distingue, compites solo por precio. Creamos una identidad que te haga reconocible en tu sitio, tus redes y tu local.',
            bullets: [
              'Logo e identidad con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
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
            text: 'Una llamada para entender quién es tu cliente, desde dónde te busca y qué necesita saber antes de decidir.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas, qué información va en cada una y si el sitio va en uno o en los dos idiomas.',
          },
          c.stepDesign,
          c.stepLaunch,
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en San Luis Potosí',
        description: 'Lo que nos preguntan los negocios de San Luis Potosí antes de contratar.',
        items: [
          c.faqCost('San Luis Potosí'),
          {
            question: 'Mis clientes me buscan en la Huasteca con poca señal, ¿cómo ayuda el sitio?',
            answer:
              'Diseñamos pensando en el celular: información clara, sin elementos de más y con el contacto a la mano, para que la página sea fácil de usar aunque la conexión no sea buena.',
          },
          {
            question: 'Opero tours, ¿puedo recibir reservas en el sitio?',
            answer:
              'Sí. El sitio puede incluir reservas o solicitudes por formulario o WhatsApp. Cómo se conecta con tu forma de operar lo definimos en la cotización.',
          },
          c.faqPayment,
          c.faqRemote,
          c.faqLanguages,
        ],
      },
      socialProof: {
        heading: c.proofHeading,
        description:
          'Proyectos reales de identidad y sitios web en sectores como turismo, servicios legales y salud. Es el mismo estándar con el que trabajaríamos tu negocio en San Luis Potosí.',
      },
      nearby: c.nearby,
      linkLabel: 'Diseño web en San Luis Potosí',
      breadcrumb: 'Diseño Web San Luis Potosí',
      serviceName: 'Diseño Web y Branding en San Luis Potosí',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio de un operador de tours, hospedaje o empresa en San Luis Potosí.',
    },
    en: {
      seo: {
        title: 'Web Design in San Luis Potosí & the Huasteca | Aurin',
        description:
          'Web design and branding in San Luis Potosí for tour operators and lodging in the Huasteca Potosina, retailers, clinics, and firms.',
        keywords:
          'web design San Luis Potosí, Huasteca Potosina tour website, website design Ciudad Valles, branding San Luis Potosí, tour operator website Mexico',
      },
      hero: {
        subtitle: 'Web design and branding in San Luis Potosí',
        titleLead: 'Web Design in',
        titleAccent: 'San Luis Potosí',
        description:
          'The Huasteca Potosina draws travelers from across the country who choose tours and lodging on their phone, often with poor signal. We design light, clear websites for operators and lodging, and corporate sites for companies and services in the capital.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: C.stats,
      },
      services: {
        heading: 'Web design and branding services in San Luis Potosí',
        intro:
          'We work with businesses in San Luis Potosí, Soledad, Ciudad Valles, Xilitla, Aquismón, and Matehuala: tour operators, cabins and hotels, restaurants, clinics, firms, and retailers.',
        items: [
          {
            title: 'Websites for Huasteca tours',
            description:
              'Waterfalls, caves, rivers: travelers compare tours and pick the one that feels most trustworthy. We present each tour with its itinerary, what is included, and how to book.',
            bullets: ['A page per tour with itinerary', 'Bookings or requests via WhatsApp or form', 'Mobile-first'],
          },
          {
            title: 'Cabins and hotels',
            description:
              'In Xilitla or Ciudad Valles guests want to see the place and know what is nearby. The site shows it and makes direct booking easy.',
            bullets: ['Room or cabin gallery', 'Bookings or availability requests', 'Location and directions'],
          },
          {
            title: 'Websites for companies and services in the capital',
            description:
              'Clinics, firms, and service companies: people want to know who you are, what you do, and how to reach you. We present it clearly.',
            bullets: ['Services clearly explained', 'Team and experience', 'Appointments or contact form'],
          },
          {
            title: 'Branding',
            description:
              'If your brand does not stand out, you compete on price alone. We create an identity that makes you recognizable on your site, social media, and storefront.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
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
            text: 'We learn who your customer is, where they search from, and what they need to know before deciding.',
          },
          {
            name: 'Structure',
            text: 'We define the pages, what information goes on each, and whether the site runs in one language or both.',
          },
          C.stepDesign,
          C.stepLaunch,
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in San Luis Potosí',
        description: 'What San Luis Potosí businesses ask us before signing.',
        items: [
          C.faqCost('San Luis Potosí'),
          {
            question: 'Customers look for me in the Huasteca with poor signal. How does the site help?',
            answer:
              'We design for the phone: clear information, nothing unnecessary, and contact within reach, so the page is easy to use even when the connection is weak.',
          },
          {
            question: 'I run tours. Can I take bookings on the site?',
            answer:
              'Yes. The site can include bookings or requests via form or WhatsApp. How it fits the way you operate is defined in the quote.',
          },
          C.faqPayment,
          C.faqRemote,
          C.faqLanguages,
        ],
      },
      socialProof: {
        heading: C.proofHeading,
        description:
          'Real identity and website work in sectors like tourism, legal services, and healthcare. It is the same standard we would bring to your business in San Luis Potosí.',
      },
      nearby: C.nearby,
      linkLabel: 'Web design in San Luis Potosí',
      breadcrumb: 'Web Design San Luis Potosí',
      serviceName: 'Web Design and Branding in San Luis Potosí',
      howToDescription:
        'Step-by-step process to design a website for a tour operator, lodging, or company in San Luis Potosí.',
    },
  },
};
