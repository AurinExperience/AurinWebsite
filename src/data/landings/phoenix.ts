import type { Landing } from './types';

/**
 * Phoenix — palabra clave objetivo: "diseño web Phoenix" (ES) y "web design for
 * Latino-owned businesses Phoenix" (EN).
 *
 * Ángulo propio: servicios para el hogar. El calor y el crecimiento de la zona
 * mantienen a miles de negocios latinos de roofing, A/C, remodelación, pools y
 * landscaping. Su cliente busca "near me" desde el celular y llama al primero
 * que le inspira confianza, así que el sitio compite en reseñas, zonas de
 * servicio y rapidez para pedir un estimado.
 *
 * Los términos en inglés que usa el propio dueño latino ("roofing", "estimado",
 * "handyman") van tal cual en el copy en español: así es como busca.
 */
export const phoenix: Landing = {
  id: 'phoenix',
  status: 'live',
  country: 'US',
  slug: { es: 'phoenix', en: 'phoenix' },
  region: 'Arizona',
  geo: { latitude: 33.4484, longitude: -112.074 },
  areas: ['Phoenix', 'Mesa', 'Glendale', 'Chandler', 'Tempe', 'Avondale', 'Goodyear', 'Tolleson'],
  phoneSample: '+1 602 555 0123',
  proof: ['grupoEstrella', 'elite', 'elRollo'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Phoenix para Negocios Latinos | Aurin',
        description:
          'Diseño web y branding en Phoenix para negocios latinos de roofing, A/C, remodelación, landscaping y servicios. Sitios bilingües que generan llamadas y estimados.',
        keywords:
          'diseño web Phoenix, diseño de páginas web Phoenix Arizona, página web para compañía de roofing, página web para negocio de landscaping, diseño web para contratistas Phoenix, agencia hispana Phoenix',
      },
      hero: {
        subtitle: 'Diseño web para contratistas en Phoenix',
        titleLead: 'Diseño Web en',
        titleAccent: 'Phoenix',
        description:
          'Cuando se descompone el A/C en julio, tu cliente busca desde el celular y le llama al primero que le da confianza. Diseñamos sitios bilingües para compañías latinas de roofing, A/C, remodelación y landscaping en Phoenix que quieren ser esa primera llamada.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: 'ES/EN', label: 'para el cliente que busca en inglés y el que busca en español' },
          { value: 'Web + Marca', label: 'diseño, desarrollo y branding en un mismo equipo' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y branding en Phoenix',
        intro:
          'Trabajamos con negocios de Phoenix, Mesa, Glendale, Chandler, Tempe, Avondale, Goodyear y Tolleson: roofing, aire acondicionado, remodelación, pools, landscaping, handyman, limpieza, taxes y aseguranzas.',
        items: [
          {
            title: 'Sitios que generan llamadas y estimados',
            description:
              'En servicios para el hogar el sitio tiene un solo trabajo: que te llamen o te pidan un estimado. Botón de llamada siempre visible, formulario corto, zonas que cubres y horario de emergencias, todo pensado para alguien que busca desde el celular y con prisa.',
            bullets: [
              'Botón de llamada y de WhatsApp siempre a la mano',
              'Formulario de estimado que se llena en un minuto',
              'Horario, emergencias y zonas de servicio claras',
            ],
          },
          {
            title: 'Páginas por servicio',
            description:
              'Quien busca "roofing" o "A/C repair" quiere ver que haces justo eso. Armamos una página por cada servicio principal, con las zonas que cubres, para que Google entienda qué ofreces y dónde.',
            bullets: [
              'Una página por servicio que ofreces',
              'Zonas de servicio indicadas en cada página',
              'Estructura que Google entiende',
            ],
          },
          {
            title: 'Reseñas y confianza',
            description:
              'Antes de dejar entrar a alguien a su casa, el cliente quiere pruebas: reseñas, fotos de trabajos reales, licencia y seguro. Ponemos todo eso donde se ve, para que la decisión se tome en tu sitio y no en el de la competencia.',
            bullets: [
              'Espacio para reseñas de tus clientes',
              'Galería de antes y después',
              'Licencia, seguro y garantía visibles',
            ],
          },
          {
            title: 'Marca para tu camioneta, tu equipo y tu sitio',
            description:
              'Tu troca con el logo es tu anuncio más visto. Si la marca no se lee de lejos o cada cosa trae una versión distinta, pierdes esa publicidad gratis. Creamos una identidad que funcione en la calle, en el uniforme y en el celular.',
            bullets: [
              'Logo legible a distancia y en pantalla',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio alineado con la marca',
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
            name: 'Diagnóstico',
            text: 'Una llamada corta para saber qué servicios te dejan más, qué zonas quieres cubrir y cómo te llegan hoy los clientes. Eso define qué páginas necesitas.',
          },
          {
            name: 'Estructura y contenido',
            text: 'Definimos las páginas de servicio y acordamos qué contenido preparas tú (fotos de tus trabajos, licencia y seguro) y cuál se incluye en el proyecto.',
          },
          {
            name: 'Diseño',
            text: 'Te presentamos el diseño y lo ajustamos contigo según lo acordado en la cotización.',
          },
          {
            name: 'Lanzamiento',
            text: 'Publicamos el sitio, lo enlazamos a tu perfil de Google y configuramos la medición básica de contactos. Después, los cambios los puedes hacer tú: en una sesión te explicamos cómo. O, si prefieres no ocuparte, nos encargamos nosotros con un plan mensual de mantenimiento.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Phoenix',
        description: 'Lo que nos preguntan los negocios de Phoenix antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta una página web para mi compañía en Phoenix?',
            answer:
              'Depende de cuántos servicios y zonas quieras cubrir, si va en dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: 'Ya tengo página en Facebook y en Google, ¿para qué quiero sitio?',
            answer:
              'Tu perfil de Google y tu Facebook ayudan, pero no son tuyos: no controlas cómo se ven ni puedes tener una página para cada servicio. El sitio es lo que le da a Google razones para mostrarte en más búsquedas, y es donde el cliente confirma que eres una empresa seria antes de llamar.',
          },
          {
            question: 'Mis clientes buscan en inglés, ¿el sitio va en inglés?',
            answer:
              'Sí. En Phoenix buena parte de las búsquedas de servicios para el hogar son en inglés, también de clientes latinos. El sitio puede quedar en inglés y en español para no perder a ninguno de los dos.',
          },
          {
            question: '¿Cómo trabajan si están en México?',
            answer:
              'Trabajamos a distancia. Arizona no cambia de horario en verano, así que la diferencia con nosotros es de una hora todo el año.',
          },
          {
            question: '¿Cómo se paga?',
            answer:
              'Te cotizamos según tu proyecto. La forma de pago se acuerda en la cotización, antes de arrancar.',
          },
          {
            question: '¿Me ayudan a salir en Google cuando buscan "near me"?',
            answer:
              'El sitio sale con SEO técnico básico: páginas por servicio, estructura correcta y datos del negocio, enlazado a tu perfil de Google. Eso te pone en la carrera. Subir en tu zona también depende de reseñas y de tiempo, y te explicamos qué hacer para sostenerlo.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Proyectos reales de identidad y sitios web en sectores como construcción, salud y turismo. Es el mismo estándar con el que trabajaríamos tu negocio en Phoenix.',
      },
      nearby: {
        heading: '¿Tu negocio está en otra ciudad de Estados Unidos?',
        description: 'También diseñamos para negocios latinos en estas ciudades.',
      },
      linkLabel: 'Diseño web en Phoenix',
      breadcrumb: 'Diseño Web Phoenix',
      serviceName: 'Diseño Web y Branding en Phoenix',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web de una compañía latina de servicios para el hogar en Phoenix.',
    },
    en: {
      seo: {
        title: 'Web Design for Contractors & Latino-Owned Businesses in Phoenix | Aurin',
        description:
          'Web design and branding in Phoenix for roofing, HVAC, remodeling, pool, and landscaping companies. Bilingual sites built to generate calls and estimate requests.',
        keywords:
          'contractor web design Phoenix, roofing website design Phoenix, HVAC website design Phoenix, Latino-owned business website Phoenix, web designer who speaks Spanish Phoenix, bilingual web design Arizona',
      },
      hero: {
        subtitle: 'Web design for contractors in Phoenix',
        titleLead: 'Web Design in',
        titleAccent: 'Phoenix',
        description:
          'When the A/C dies in July, homeowners search on their phone and call the first company that feels trustworthy. We design websites for roofing, HVAC, remodeling, and landscaping companies across the Valley, many of them Latino-owned, that want to be that first call, in English and in Spanish.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: 'EN/ES', label: 'for customers searching in either language' },
          { value: 'Web + Brand', label: 'design, development, and branding from one team' },
        ],
      },
      services: {
        heading: 'Web design and branding services in Phoenix',
        intro:
          'We work with businesses in Phoenix, Mesa, Glendale, Chandler, Tempe, Avondale, Goodyear, and Tolleson: roofing, HVAC, remodeling, pools, landscaping, handyman, cleaning, tax prep, and insurance.',
        items: [
          {
            title: 'Websites that generate calls and estimates',
            description:
              'For home services a website has one job: get the phone to ring or an estimate request to land. Click-to-call always visible, a short form, service areas, and emergency hours, all built for someone searching on a phone in a hurry.',
            bullets: [
              'Click-to-call and WhatsApp always in reach',
              'Estimate form that takes a minute',
              'Hours, emergency service, and areas made clear',
            ],
          },
          {
            title: 'Service pages',
            description:
              'Someone searching "roof repair" or "AC repair" wants proof you do exactly that. We build a page for each main service, listing the areas you cover, so Google understands what you offer and where.',
            bullets: [
              'One page per service you offer',
              'Service areas listed on each page',
              'A structure Google understands',
            ],
          },
          {
            title: 'Reviews and trust signals',
            description:
              'Before letting someone into their home, customers want proof: reviews, real job photos, license, and insurance. We put all of it where it is seen, so the decision happens on your site and not a competitor’s.',
            bullets: [
              'A place for customer reviews',
              'Before-and-after gallery',
              'License, insurance, and warranty visible',
            ],
          },
          {
            title: 'A brand for your trucks, crew, and site',
            description:
              'Your truck with the logo is your most-seen ad. If the brand cannot be read from a distance, or every piece has a different version, you lose that free advertising. We build an identity that works on the street, on the uniform, and on a phone.',
            bullets: [
              'Logo legible at a distance and on screen',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description:
          'How we run a project remotely. The details of each stage are set in the quote.',
        steps: [
          {
            name: 'Discovery call',
            text: 'A short call to learn which services pay best, which areas you want to cover, and how customers find you today. That defines which pages you need.',
          },
          {
            name: 'Structure and content',
            text: 'We define the service pages and agree on which content you provide (job photos, license, and insurance) and which is included in the project.',
          },
          {
            name: 'Design',
            text: 'We present the design to you and refine it with you as agreed in the quote.',
          },
          {
            name: 'Launch',
            text: 'We publish the site, link it to your Google Business Profile, and set up basic measurement of calls and forms. After that, you can make changes yourself: we walk you through it in one session. Or, if you would rather not deal with it, we handle it with a monthly maintenance plan.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Phoenix',
        description: 'What Phoenix businesses ask us before signing.',
        items: [
          {
            question: 'How much does a website for my company in Phoenix cost?',
            answer:
              'It depends on how many services and areas you want to cover, whether it runs in two languages, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'I already have Facebook and a Google profile. Why do I need a website?',
            answer:
              'Your Google profile and Facebook help, but you do not own them: you cannot control how they look or have a page for each service. The website is what gives Google reasons to show you in more searches, and where customers confirm you are a real company before calling.',
          },
          {
            question: 'Do you work with Latino-owned businesses whose customers search in English?',
            answer:
              'Yes. Many Latino owners prefer to run the project in Spanish while their customers search in English. We can work in whichever language you prefer and build the site in English, Spanish, or both depending on who you sell to.',
          },
          {
            question: 'How do you work from Mexico?',
            answer:
              'We work remotely. Arizona does not change clocks in summer, so the difference with us is one hour year-round.',
          },
          {
            question: 'How does payment work?',
            answer:
              'We quote based on your project. Payment terms are agreed in the quote, before work starts.',
          },
          {
            question: 'Will this help me show up for "near me" searches?',
            answer:
              'The site ships with basic technical SEO: service pages, correct structure, and business data, linked to your Google Business Profile. That puts you in the race. Climbing in your area also depends on reviews and time, and we explain what to do to keep it up.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Real identity and website work in sectors like construction, healthcare, and tourism. It is the same standard we would bring to your Phoenix business.',
      },
      nearby: {
        heading: 'Is your business in another U.S. city?',
        description: 'We also design for businesses in these cities.',
      },
      linkLabel: 'Web design in Phoenix',
      breadcrumb: 'Web Design Phoenix',
      serviceName: 'Web Design and Branding in Phoenix',
      howToDescription:
        'Step-by-step process to design a website for a home service company in Phoenix.',
    },
  },
};
