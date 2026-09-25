import type { Landing } from './types';

/**
 * San Antonio — palabra clave objetivo: "diseño web San Antonio" (ES) y
 * "bilingual web design San Antonio" (EN).
 *
 * Ángulo propio: negocios con años de historia que renuevan marca y sitio. Es
 * la gran ciudad más mexicana de EE. UU., llena de negocios establecidos:
 * restaurantes, panaderías, talleres, servicios. Muchos de sus
 * clientes latinos ya prefieren el inglés, así que aquí el inglés no es "el
 * otro mercado": es la mitad del propio. Branding es el servicio fuerte; en
 * español casi no hay competencia para "branding San Antonio".
 */
export const sanAntonio: Landing = {
  id: 'san-antonio',
  status: 'live',
  country: 'US',
  slug: { es: 'san-antonio', en: 'san-antonio' },
  region: 'Texas',
  geo: { latitude: 29.4241, longitude: -98.4936 },
  areas: ['San Antonio', 'New Braunfels', 'Schertz', 'Converse', 'Leon Valley', 'Seguin', 'Boerne'],
  phoneSample: '+1 210 555 0123',
  proof: ['fruitAcademy', 'dentol', 'galicia'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web y Branding en San Antonio, TX | Aurin',
        description:
          'Diseño web y branding en San Antonio para negocios latinos. Sitios bilingües para restaurantes, servicios y empresas que quieren crecer.',
        keywords:
          'diseño web San Antonio, diseño de páginas web San Antonio Texas, branding San Antonio, diseño de logotipos San Antonio, logo para food truck San Antonio, agencia hispana San Antonio',
      },
      hero: {
        subtitle: 'Branding y diseño web en San Antonio',
        titleLead: 'Diseño Web y Branding en',
        titleAccent: 'San Antonio',
        description:
          'Tu negocio lleva años con clientes fieles y buena fama de boca en boca, pero la siguiente generación de clientes te busca primero en Google y en inglés. Renovamos tu marca y tu sitio para que tu negocio se vea tan bien como trabaja.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: 'ES/EN', label: 'sitios para clientes de las dos lenguas' },
          { value: 'Web + Marca', label: 'diseño, desarrollo y branding en un mismo equipo' },
        ],
      },
      services: {
        heading: 'Servicios de branding y diseño web en San Antonio',
        intro:
          'Trabajamos con negocios de San Antonio, New Braunfels, Schertz, Converse, Leon Valley, Seguin y Boerne: restaurantes y panaderías, talleres, contratistas, clínicas, despachos y negocios con años de historia.',
        items: [
          {
            title: 'Renovación de marca para negocios con historia',
            description:
              'Un logo que funcionó treinta años puede empezar a verse viejo junto a la competencia nueva. Renovamos tu identidad sin borrar lo que tus clientes reconocen: conservamos la esencia y la llevamos a algo que funcione en letreros, empaques, redes y web.',
            bullets: [
              'Rediseño de logo que respeta la historia del negocio',
              'Paleta, tipografía y manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
            ],
          },
          {
            title: 'Sitios para restaurantes y comida',
            description:
              'Quien busca dónde comer decide en segundos, desde el celular y con hambre. El sitio necesita menú legible, fotos que den antojo, horario, ubicación y el botón para pedir o reservar, todo sin buscarle.',
            bullets: [
              'Menú en español e inglés fácil de actualizar',
              'Botones para llamar, cómo llegar, pedir o reservar',
              'Fotografía optimizada para web',
            ],
          },
          {
            title: 'Sitio bilingüe para clientes de las dos lenguas',
            description:
              'En San Antonio muchos de tus clientes latinos crecieron hablando inglés, y otros prefieren el español. Tu sitio queda disponible en los dos idiomas para atender a ambos.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Selector de idioma fácil de encontrar',
              'Contacto por WhatsApp, llamada o formulario',
            ],
          },
          {
            title: 'Rediseño de sitio y presencia en Google',
            description:
              'Si tu sitio tiene diez años, no se ve bien en el celular o ni siquiera tienes uno, estás dejando clientes a quien sí aparece. Lo rediseñamos con la estructura que Google necesita para mostrarte en tu zona.',
            bullets: [
              'Sitio pensado primero para celular',
              'Una página por cada servicio principal',
              'SEO técnico básico y migración cuidando lo que ya rankea',
            ],
          },
        ],
      },
      process: {
        heading: 'Cómo trabajamos tu proyecto',
        description:
          'Así trabajamos un proyecto a distancia. Los detalles de cada etapa se definen en la cotización.',
        steps: [
          {
            name: 'Conocer el negocio',
            text: 'Empezamos por la historia: cómo nació el negocio, qué lo hace distinto y qué quieres conservar. En un negocio con años de historia eso importa tanto como los datos, porque es lo que el cliente fiel reconoce.',
          },
          {
            name: 'Marca y estructura',
            text: 'Si hace falta, trabajamos primero la identidad y luego el sitio, para que todo salga con la misma cara. Definimos qué páginas necesitas y si el sitio va en uno o en los dos idiomas.',
          },
          {
            name: 'Diseño',
            text: 'Te presentamos el diseño, con las personas que deciden, y lo ajustamos contigo según lo acordado en la cotización.',
          },
          {
            name: 'Lanzamiento',
            text: 'Construimos el sitio y lo conectamos a tu dominio y a tu perfil de Google. Después, el menú, las fotos y los horarios los puedes actualizar tú: en una sesión te explicamos cómo. O, si prefieres no ocuparte, nos encargamos nosotros con un plan mensual de mantenimiento.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web y branding en San Antonio',
        description: 'Lo que nos preguntan los negocios de San Antonio antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta el branding o una página web en San Antonio?',
            answer:
              'Depende de lo que necesites: solo marca, solo sitio o las dos cosas; cuántas páginas; si va en dos idiomas y si producimos fotos o textos. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Van a cambiar por completo el logo que ya conocen mis clientes?',
            answer:
              'Solo si tú lo decides. En negocios con años de historia casi siempre recomendamos una evolución: conservar lo que el cliente reconoce, como un color, una forma o el nombre escrito de cierta manera, y resolver lo que ya no funciona, como la legibilidad o cómo se ve en pantalla.',
          },
          {
            question: '¿Hacen el sitio en inglés y en español?',
            answer:
              'Sí. En San Antonio lo recomendamos casi siempre, porque buena parte de los clientes latinos prefiere leer en inglés y otra parte en español. El sitio queda disponible en los dos idiomas con la misma información.',
          },
          {
            question: '¿Por qué una agencia en México y no una local?',
            answer:
              'Porque marca, diseño y desarrollo los resuelve un mismo equipo que entiende tu cultura y la de tus clientes. Ya trabajamos a distancia con clientes en México, Estados Unidos, Canadá, España, República Dominicana y muchos países más. La diferencia de horario con San Antonio es de cero a una hora según la temporada.',
          },
          {
            question: '¿Cómo se paga?',
            answer:
              'Te cotizamos según tu proyecto. La forma de pago se acuerda en la cotización, antes de arrancar.',
          },
          {
            question: '¿Pueden ayudarme con mi perfil de Google?',
            answer:
              'Sí. Enlazamos el sitio con tu perfil de negocio en Google y revisamos que nombre, dirección y teléfono coincidan con los del sitio, que es la base para aparecer en el mapa de tu zona. El resto depende de reseñas y constancia.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Proyectos reales de identidad y sitios web en sectores como alimentos, salud y servicios profesionales. Es el mismo estándar con el que trabajaríamos tu negocio en San Antonio.',
      },
      nearby: {
        heading: '¿Tu negocio está en otra ciudad de Estados Unidos?',
        description: 'También diseñamos para negocios latinos en estas ciudades.',
      },
      linkLabel: 'Diseño web y branding en San Antonio',
      breadcrumb: 'Diseño Web San Antonio',
      serviceName: 'Diseño Web y Branding en San Antonio',
      howToDescription:
        'Proceso paso a paso para renovar la marca y el sitio web de un negocio con historia en San Antonio.',
    },
    en: {
      seo: {
        title: 'Branding & Bilingual Web Design in San Antonio | Aurin',
        description:
          'Branding and bilingual web design in San Antonio for established businesses, restaurants, and local services. English and Spanish sites for both sides of your market.',
        keywords:
          'branding agency San Antonio, bilingual web design San Antonio, logo redesign San Antonio, restaurant website San Antonio, Latino-owned business website San Antonio, web designer who speaks Spanish San Antonio, food truck logo San Antonio',
      },
      hero: {
        subtitle: 'Branding and web design in San Antonio',
        titleLead: 'Branding & Web Design in',
        titleAccent: 'San Antonio',
        description:
          'Your business has loyal customers and a strong word-of-mouth reputation, but the next generation finds you on Google before they walk in. We refresh your brand and build your site so your business looks as good as it works, in English and in Spanish.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: 'EN/ES', label: 'sites for customers in both languages' },
          { value: 'Web + Brand', label: 'design, development, and branding from one team' },
        ],
      },
      services: {
        heading: 'Branding and web design services in San Antonio',
        intro:
          'We work with businesses in San Antonio, New Braunfels, Schertz, Converse, Leon Valley, Seguin, and Boerne: restaurants and bakeries, auto shops, contractors, clinics, professional firms, and businesses with years of history.',
        items: [
          {
            title: 'Brand refresh for established businesses',
            description:
              'A logo that worked for thirty years can start to look dated next to newer competitors. We refresh your identity without erasing what customers recognize: we keep the essence and make it work on signs, packaging, social media, and the web.',
            bullets: [
              'Logo evolution that respects the business’s history',
              'Color palette, typography, and usage guide',
              'Brand applications based on project scope',
            ],
          },
          {
            title: 'Restaurant and food websites',
            description:
              'People choosing where to eat decide in seconds, on a phone, and hungry. The site needs a readable menu, photos that sell, hours, location, and a clear button to order or book a table, with nothing to hunt for.',
            bullets: [
              'Bilingual menu that is easy to update',
              'Call, directions, ordering, or reservations one tap away',
              'Photography optimized for the web',
            ],
          },
          {
            title: 'Bilingual site for a bilingual city',
            description:
              'Many of your Hispanic customers grew up speaking English, and others prefer Spanish. Your site is available in both languages so you serve both.',
            bullets: [
              'The same site available in English and Spanish',
              'Easy-to-find language switcher',
              'Contact by phone, WhatsApp, or form',
            ],
          },
          {
            title: 'Website redesign and local search',
            description:
              'If your site is ten years old, breaks on a phone, or does not exist, you are handing customers to whoever shows up first. We rebuild it with the structure Google needs to show you in your area.',
            bullets: [
              'Mobile-first website',
              'A page for each main service',
              'Basic technical SEO and a migration that protects existing rankings',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description: 'How we run a project remotely. The details of each stage are set in the quote.',
        steps: [
          {
            name: 'Learn the business',
            text: 'We start with the story: how the business began, what makes it different, and what you want to keep. In an established business that matters as much as the data, because it is what loyal customers recognize.',
          },
          {
            name: 'Brand and structure',
            text: 'When needed we do the identity first and the site second, so everything comes out with the same face. We define the pages you need and whether the site runs in one language or both.',
          },
          {
            name: 'Design',
            text: 'We present the design to whoever makes the decision and refine it with you as agreed in the quote.',
          },
          {
            name: 'Launch',
            text: 'We build the site and connect it to your domain and your Google Business Profile. After that, you can update the menu, photos, and hours yourself: we walk you through it in one session. Or, if you would rather not deal with it, we handle it with a monthly maintenance plan.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about branding and web design in San Antonio',
        description: 'What San Antonio businesses ask us before signing.',
        items: [
          {
            question: 'How much does branding or a website cost in San Antonio?',
            answer:
              'It depends on what you need: brand only, site only, or both; how many pages; whether it runs in two languages; and whether we produce photos or copy. After a call we send an itemized quote.',
          },
          {
            question: 'Will you completely change the logo my customers know?',
            answer:
              'Only if you decide to. For businesses with years of history we almost always recommend an evolution: keep what customers recognize, like a color, a shape, or the way the name is written, and fix what no longer works, like legibility or how it looks on screen.',
          },
          {
            question: 'Do you build the site in English and Spanish?',
            answer:
              'Yes, and in San Antonio we almost always recommend it. A large share of Hispanic customers prefer English and another share prefer Spanish. The site is available in both languages with the same information.',
          },
          {
            question: 'Why an agency in Mexico instead of a local one?',
            answer:
              'Brand, design, and development are handled by the same team, one that understands your culture and your customers’. We already work remotely with clients in Mexico, the United States, Canada, Spain, the Dominican Republic, and many more countries. The time difference with San Antonio is zero to one hour depending on the season.',
          },
          {
            question: 'How does payment work?',
            answer:
              'We quote based on your project. Payment terms are agreed in the quote, before work starts.',
          },
          {
            question: 'Can you help with my Google Business Profile?',
            answer:
              'Yes. We link the site to your Google Business Profile and check that your name, address, and phone match the site, which is the foundation for showing up on the map in your area. The rest depends on reviews and consistency.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Real identity and website work in sectors like food, healthcare, and professional services. It is the same standard we would bring to your San Antonio business.',
      },
      nearby: {
        heading: 'Is your business in another U.S. city?',
        description: 'We also design for businesses in these cities.',
      },
      linkLabel: 'Branding and web design in San Antonio',
      breadcrumb: 'Web Design San Antonio',
      serviceName: 'Branding and Bilingual Web Design in San Antonio',
      howToDescription:
        'Step-by-step process to refresh the brand and website of an established business in San Antonio.',
    },
  },
};
