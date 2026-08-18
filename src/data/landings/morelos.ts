import type { Landing } from './types';

/**
 * Morelos — palabra clave objetivo: "diseño web Morelos", con Cuernavaca como
 * ciudad principal dentro del contenido.
 *
 * Es la ÚNICA landing con `localBusiness: true`: aquí está el domicilio real de
 * Aurin, así que es la única ciudad donde se puede competir por el paquete local
 * de Google (el mapa) y no solo por resultados orgánicos. También es la única
 * donde tiene sentido ofrecer verse en persona.
 *
 * Ángulo propio: cercanía y negocios locales de servicio y turismo. Ni industria
 * (Querétaro) ni saturación de mercado (CDMX).
 */
export const morelos: Landing = {
  id: 'morelos',
  status: 'live',
  localBusiness: true,
  slug: { es: 'morelos', en: 'morelos' },
  region: 'Morelos',
  geo: { latitude: 18.9242, longitude: -99.2216 },
  areas: ['Cuernavaca', 'Jiutepec', 'Temixco', 'Emiliano Zapata', 'Yautepec', 'Tepoztlán'],
  phoneSample: '+52 777 123 4567',
  proof: ['elRollo', 'inglesIndividual', 'dentol'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y UX/UI en Morelos | Aurin',
        description:
          'Agencia de diseño web y UX/UI en Morelos, con oficina en Cuernavaca. Sitios y landing pages para hoteles, clínicas, escuelas y servicios.',
        keywords:
          'diseño web Morelos, diseño web Cuernavaca, agencia de diseño web Morelos, páginas web Cuernavaca, diseño UX UI Morelos, sitios web Jiutepec',
      },
      hero: {
        subtitle: 'Agencia de diseño web y UX/UI en Morelos',
        titleLead: 'Diseño Web en',
        titleAccent: 'Morelos',
        description:
          'Somos de aquí. Nuestra oficina está en Tlaltenango y llevamos más de veinte años diseñando marcas y sitios web desde Cuernavaca para clientes de todo el país. Si tu negocio está en Morelos, podemos sentarnos a ver tu proyecto en persona.',
        cta: 'Solicita tu cotización gratis',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando desde Cuernavaca para todo México' },
          { value: '90+', label: 'la meta de PageSpeed que medimos en cada entrega' },
          { value: '1', label: 'oficina en Tlaltenango, por si prefieres vernos en persona' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y UX/UI en Morelos',
        intro:
          'Trabajamos con negocios de Cuernavaca, Jiutepec, Temixco, Emiliano Zapata, Yautepec y Tepoztlán: hotelería y hospedaje, restaurantes, clínicas y consultorios, escuelas, despachos e inmobiliaria de descanso. Estrategia, UX/UI y desarrollo con un mismo equipo.',
        items: [
          {
            title: 'Sitio web para tu negocio',
            description:
              'El sitio que sostiene todo lo demás: explica qué haces, dónde estás y cómo te contactan. Diseñado desde tu marca, no desde una plantilla, y hecho para verse igual de bien en el celular que en la computadora.',
            bullets: [
              'Diseño responsivo pensado primero para celular',
              'Ubicación, horarios y contacto siempre a la mano',
              'CMS para que actualices precios y fotos tú mismo',
            ],
          },
          {
            title: 'Sitios para hotelería y restaurantes',
            description:
              'Buena parte del turismo de Morelos llega de la Ciudad de México y decide desde el celular un jueves por la noche. El sitio tiene que cargar rápido, mostrar el lugar y llevar a la reserva sin rodeos.',
            bullets: [
              'Galería que muestra el lugar sin frenar la carga',
              'Reserva o contacto directo a un toque',
              'Integración con WhatsApp y mapa',
            ],
          },
          {
            title: 'Landing pages para promociones',
            description:
              'Una página por promoción o temporada, con un solo objetivo. Útil para paquetes de fin de semana, campañas de inscripción o cualquier oferta con fecha límite.',
            bullets: [
              'Estructura orientada a un solo objetivo',
              'Formulario corto y directo',
              'Medición lista para campañas de paga',
            ],
          },
          {
            title: 'Rediseño de sitios antiguos',
            description:
              'Si tu sitio se hizo hace años, seguramente no se ve bien en celular, tarda en cargar y no aparece en Google. Lo auditamos y lo rehacemos sin perder lo que ya funciona.',
            bullets: [
              'Auditoría de UX, velocidad y accesibilidad',
              'Rediseño visual y de contenidos',
              'SEO local para búsquedas de Cuernavaca y Morelos',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Cuatro etapas con entregable en cada una. Y si prefieres que la primera sea un café aquí en Cuernavaca, se puede.',
        steps: [
          {
            name: 'Descubrimiento y research',
            text: 'Entendemos tu negocio, a quién le vendes y de dónde te llegan hoy los clientes. Revisamos qué están haciendo los negocios parecidos en Morelos y qué buscan tus clientes en Google antes de decidir.',
          },
          {
            name: 'UX: arquitectura y wireframes',
            text: 'Definimos qué secciones lleva el sitio y en qué orden, y lo armamos en wireframes que puedes revisar. Aquí es cuando se decide si el visitante encuentra rápido lo que busca o se va.',
          },
          {
            name: 'UI: diseño de interfaz',
            text: 'Diseñamos cada pantalla con tu identidad: tipografía, color, fotografía y componentes. Iteramos contigo hasta que sientas que el sitio representa a tu negocio como es.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio rápido, optimizado para Google y para celular. Lo lanzamos, configuramos la analítica y te capacitamos para que puedas actualizarlo sin llamarnos por cada cambio.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Morelos',
        description: 'Lo que nos preguntan los negocios de Morelos antes de empezar.',
        items: [
          {
            question: '¿Cuánto cuesta hacer una página web en Morelos?',
            answer:
              'Depende del alcance: cuántas secciones lleva, si el diseño parte de cero, si hay reservas o pagos en línea y si nosotros producimos las fotos y los textos. Una landing page es el punto de entrada más accesible y un sitio completo escala según lo que necesites. Después de una llamada te enviamos una cotización cerrada, con todo desglosado y sin costos ocultos.',
          },
          {
            question: '¿Tienen oficina en Cuernavaca? ¿Podemos vernos en persona?',
            answer:
              'Sí. Nuestra oficina está en San Jerónimo 207, Tlaltenango, Cuernavaca. Es la única ciudad donde ofrecemos reuniones presenciales de manera regular, justamente porque es donde estamos. Puedes escribirnos para agendar y platicar tu proyecto sin compromiso.',
          },
          {
            question: '¿Trabajan con hoteles, restaurantes y negocios de turismo?',
            answer:
              'Sí, y es de lo que más hacemos en la zona. El reto aquí es particular: mucho de tu tráfico llega desde el celular, desde la Ciudad de México y decidiendo a última hora. Eso cambia el diseño: la carga tiene que ser inmediata, las fotos tienen que vender el lugar y la reserva o el contacto no puede estar a más de un toque de distancia.',
          },
          {
            question: 'Ya tengo Instagram y Facebook, ¿de verdad necesito un sitio web?',
            answer:
              'Las redes sirven para que te descubran, pero no son tuyas: cambian el algoritmo, te restringen la cuenta o simplemente no aparecen cuando alguien busca en Google lo que tú vendes. El sitio es el único espacio donde tú controlas el mensaje, donde apareces en búsquedas y donde puedes medir de dónde vienen tus clientes. Lo ideal no es elegir: las redes atraen y el sitio convierte.',
          },
          {
            question: '¿Pueden ayudarme a aparecer en Google Maps?',
            answer:
              'Sí. Para un negocio local con domicilio en Morelos, la ficha de Google Business Profile suele traer más clientes que el sitio mismo. Configuramos la ficha, la conectamos correctamente con el sitio y dejamos los datos de nombre, dirección y teléfono idénticos en ambos lados, que es lo que Google necesita para confiar en que eres un solo negocio.',
          },
          {
            question: '¿Dan mantenimiento después del lanzamiento?',
            answer:
              'Sí. Integramos un CMS para que actualices textos, fotos y precios sin conocimientos técnicos, con capacitación incluida. Y si prefieres no ocuparte, ofrecemos planes mensuales que cubren actualizaciones, seguridad, respaldos y mejoras de rendimiento.',
          },
        ],
      },
      socialProof: {
        heading: 'Veinte años diseñando desde Morelos',
        description:
          'Identidad, sitios web y experiencias digitales para negocios e instituciones de Morelos y del resto del país.',
      },
      nearby: {
        heading: '¿Tu empresa está en otro estado?',
        description: 'Diseñamos sitios web para empresas en estas plazas del país.',
      },
      linkLabel: 'Diseño web en Morelos',
      breadcrumb: 'Diseño Web Morelos',
      serviceName: 'Diseño Web y UX/UI en Morelos',
      howToDescription: 'Proceso paso a paso para diseñar el sitio web de un negocio en Morelos.',
    },
    en: {
      seo: {
        title: 'Web & UX/UI Design in Morelos | Aurin',
        description:
          'Web and UX/UI design agency in Morelos, with an office in Cuernavaca. Websites and landing pages for hotels, clinics, schools, and services.',
        keywords:
          'web design Morelos, web design Cuernavaca, web design agency Morelos, websites Cuernavaca, UX UI design Morelos, website design Mexico',
      },
      hero: {
        subtitle: 'Web and UX/UI design agency in Morelos',
        titleLead: 'Web Design in',
        titleAccent: 'Morelos',
        description:
          'We are from here. Our office is in Tlaltenango and we have spent more than twenty years designing brands and websites from Cuernavaca for clients across Mexico. If your business is in Morelos, we can sit down and go through your project in person.',
        cta: 'Request your free quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing from Cuernavaca for all of Mexico' },
          { value: '90+', label: 'the PageSpeed target we measure on every delivery' },
          { value: '1', label: 'office in Tlaltenango, if you would rather meet in person' },
        ],
      },
      services: {
        heading: 'Web and UX/UI design services in Morelos',
        intro:
          'We work with businesses in Cuernavaca, Jiutepec, Temixco, Emiliano Zapata, Yautepec, and Tepoztlán: hospitality and lodging, restaurants, clinics, schools, professional firms, and weekend-home real estate. Strategy, UX/UI, and development from a single team.',
        items: [
          {
            title: 'A website for your business',
            description:
              'The site everything else rests on: what you do, where you are, and how to reach you. Designed from your brand rather than a template, and built to look as good on a phone as on a desktop.',
            bullets: [
              'Responsive design built phone-first',
              'Location, hours, and contact always within reach',
              'A CMS so you can update prices and photos yourself',
            ],
          },
          {
            title: 'Sites for hospitality and restaurants',
            description:
              'Much of Morelos tourism comes from Mexico City and decides on a phone on a Thursday night. The site has to load fast, show the place, and lead to the booking without detours.',
            bullets: [
              'A gallery that shows the place without slowing the load',
              'Booking or direct contact one tap away',
              'WhatsApp and map integration',
            ],
          },
          {
            title: 'Landing pages for promotions',
            description:
              'One page per promotion or season, one goal. Useful for weekend packages, enrollment campaigns, or any offer with a deadline.',
            bullets: [
              'Structure built around a single objective',
              'Short, direct form',
              'Measurement ready for paid campaigns',
            ],
          },
          {
            title: 'Redesign of dated sites',
            description:
              'If your site was built years ago, it probably looks wrong on a phone, loads slowly, and does not show up on Google. We audit it and rebuild it without losing what already works.',
            bullets: [
              'UX, speed, and accessibility audit',
              'Visual and content redesign',
              'Local SEO for Cuernavaca and Morelos searches',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'Four stages, each with a deliverable. And if you would rather the first one be a coffee here in Cuernavaca, that works too.',
        steps: [
          {
            name: 'Discovery and research',
            text: 'We learn your business, who you sell to, and where your clients come from today. We review what similar businesses in Morelos are doing and what your clients search for on Google before deciding.',
          },
          {
            name: 'UX: architecture and wireframes',
            text: 'We define which sections the site needs and in what order, then build wireframes you can review. This is where it gets decided whether visitors quickly find what they came for or leave.',
          },
          {
            name: 'UI: interface design',
            text: 'We design every screen with your identity: typography, color, photography, and components. We iterate until the site represents your business the way it actually is.',
          },
          {
            name: 'Development and launch',
            text: 'We build the site fast, optimized for Google and for phones. We launch, configure analytics, and train you so you can update it without calling us for every change.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Morelos',
        description: 'What Morelos businesses ask us before starting.',
        items: [
          {
            question: 'How much does a website cost in Morelos?',
            answer:
              'It depends on scope: how many sections, whether design starts from scratch, whether there are bookings or online payments, and whether we produce the photos and copy. A landing page is the most accessible entry point and a full site scales with what you need. After a call we send a fixed quote, itemized, with no hidden costs.',
          },
          {
            question: 'Do you have an office in Cuernavaca? Can we meet in person?',
            answer:
              'Yes. Our office is at San Jerónimo 207, Tlaltenango, Cuernavaca. It is the only city where we offer in-person meetings regularly, precisely because it is where we are. Write to us to schedule and talk through your project with no commitment.',
          },
          {
            question: 'Do you work with hotels, restaurants, and tourism businesses?',
            answer:
              'Yes, and it is a large part of what we do here. The challenge is specific: much of your traffic arrives on a phone, from Mexico City, deciding at the last minute. That changes the design: loading has to be immediate, photos have to sell the place, and booking or contact cannot be more than one tap away.',
          },
          {
            question: 'I already have Instagram and Facebook. Do I really need a website?',
            answer:
              'Social media helps people discover you, but it is not yours: algorithms change, accounts get restricted, and none of it shows up when someone searches Google for what you sell. The site is the only space where you control the message, appear in searches, and can measure where your clients come from. The point is not to choose: social attracts, the site converts.',
          },
          {
            question: 'Can you help me show up on Google Maps?',
            answer:
              'Yes. For a local business with an address in Morelos, the Google Business Profile listing often brings more clients than the site itself. We set up the listing, connect it properly to the site, and keep name, address, and phone identical on both sides, which is what Google needs to trust you are a single business.',
          },
          {
            question: 'Do you provide support after launch?',
            answer:
              'Yes. We integrate a CMS so you can update copy, photos, and prices without technical knowledge, training included. And if you would rather not deal with it, we offer monthly plans covering updates, security, backups, and performance improvements.',
          },
        ],
      },
      socialProof: {
        heading: 'Twenty years designing from Morelos',
        description:
          'Identity, website, and digital experience projects for businesses and institutions in Morelos and across Mexico.',
      },
      nearby: {
        heading: 'Is your company in another state?',
        description: 'We design websites for businesses in these Mexican markets too.',
      },
      linkLabel: 'Web design in Morelos',
      breadcrumb: 'Web Design Morelos',
      serviceName: 'Web and UX/UI Design in Morelos',
      howToDescription: 'Step-by-step process to design a business website in Morelos.',
    },
  },
};
