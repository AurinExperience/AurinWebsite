import type { Landing } from './types';

/**
 * Houston — palabra clave objetivo: "diseño web Houston" (ES) y "bilingual web
 * design Houston" (EN).
 *
 * Ángulo propio: Houston es bilingüe de verdad. El mismo negocio atiende a un
 * cliente que busca en inglés y a otro que pregunta por WhatsApp en español,
 * así que el sitio tiene que estar en los dos idiomas (el mismo sitio con
 * selector de idioma, no dos sitios distintos). Giros: construcción y remodelación, proveedores de la industria
 * energética, clínicas y restaurantes.
 *
 * Primera tanda de landings en EE. UU. Sin domicilio allá: `localBusiness`
 * queda apagado y todo se sostiene como área de servicio.
 */
export const houston: Landing = {
  id: 'houston',
  status: 'live',
  country: 'US',
  slug: { es: 'houston', en: 'houston' },
  region: 'Texas',
  geo: { latitude: 29.7604, longitude: -95.3698 },
  areas: ['Houston', 'Pasadena', 'Katy', 'Sugar Land', 'Pearland', 'Cypress', 'Spring', 'Baytown'],
  phoneSample: '+1 713 555 0123',
  proof: ['mexicoPacific', 'grupoEstrella', 'elite'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Houston para Negocios Latinos | Aurin',
        description:
          'Diseño web y branding en Houston para negocios latinos. Sitios bilingües ES/EN para construcción, clínicas, restaurantes y servicios.',
        keywords:
          'diseño web Houston, diseño de páginas web en Houston, agencia de diseño web hispana Houston, páginas web para negocios latinos Houston, página web para compañía de remodeling, página web para contractor Houston, branding Houston',
      },
      hero: {
        subtitle: 'Diseño web y branding en Houston',
        titleLead: 'Diseño Web en',
        titleAccent: 'Houston',
        description:
          'En Houston tu cliente puede buscarte en inglés y escribirte en español el mismo día. Diseñamos sitios bilingües para negocios latinos de construcción, salud, comida y servicios que quieren competir con las empresas grandes de la ciudad sin verse como la opción barata.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: 'ES/EN', label: 'sitios en los dos idiomas de tu cliente' },
          { value: 'Web + Marca', label: 'diseño, desarrollo y branding en un mismo equipo' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y branding en Houston',
        intro:
          'Trabajamos con negocios de Houston, Pasadena, Katy, Sugar Land, Pearland, Cypress y Spring: contratistas de construcción y remodelación, proveedores de la industria energética, clínicas, restaurantes y despachos de servicios. Diseño, desarrollo y marca con un mismo equipo.',
        items: [
          {
            title: 'Sitio bilingüe para un mercado bilingüe',
            description:
              'En Houston la mitad de tus clientes puede preferir inglés y la otra mitad español, a veces dentro de la misma familia. Tu sitio queda disponible en los dos idiomas, para que cada quien lea sobre tu negocio en el que le acomoda.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Selector de idioma fácil de encontrar',
              'Contacto por llamada, WhatsApp o formulario',
            ],
          },
          {
            title: 'Sitios para contratistas y servicios de construcción',
            description:
              'Si haces remodelación, techos, concreto o instalaciones, tu cliente decide por fotos, reseñas y la sensación de que eres una empresa formal. Diseñamos el sitio para que tu trabajo se vea al nivel de las compañías grandes de Houston y para que pedir un estimado tome un minuto.',
            bullets: [
              'Galería de proyectos organizada por tipo de trabajo',
              'Una página por cada servicio principal',
              'Solicitud de estimado corta y pensada para celular',
            ],
          },
          {
            title: 'Branding para negocios que ya crecieron',
            description:
              'Muchos negocios latinos de Houston arrancaron con un logo hecho de prisa y hoy compiten por contratos más grandes. Rediseñamos tu identidad para que tu marca sostenga el tamaño que ya tiene tu empresa: logo, colores, tipografía y aplicaciones.',
            bullets: [
              'Identidad visual completa con manual de uso',
              'Aplicaciones de marca según el alcance del proyecto',
              'Sitio web alineado con la nueva marca',
            ],
          },
          {
            title: 'Tiendas en línea y landing pages',
            description:
              'Si vendes productos o corres anuncios en Google y Facebook, necesitas páginas hechas para convertir, no tu página de inicio. Construimos tiendas en línea y landings por campaña, listas para medir los contactos que generan.',
            bullets: [
              'Tienda en línea con pagos',
              'Una landing por campaña',
              'Medición básica de contactos configurada',
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
            text: 'Una llamada para entender tu negocio, a quién le vendes y en qué idioma te buscan. Con eso definimos el alcance y te mandamos una cotización.',
          },
          {
            name: 'Estructura y contenido',
            text: 'Definimos qué páginas necesitas y qué va en cada una, y acordamos qué contenido preparas tú y cuál se incluye en el proyecto.',
          },
          {
            name: 'Diseño',
            text: 'Diseñamos cada pantalla con tu marca, te la presentamos y la ajustamos contigo según lo acordado en la cotización.',
          },
          {
            name: 'Desarrollo y lanzamiento',
            text: 'Construimos el sitio y lo conectamos a tu dominio. Después, los cambios los puedes hacer tú: en una sesión te explicamos cómo. O, si prefieres no ocuparte, nos encargamos nosotros con un plan mensual de mantenimiento.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en Houston',
        description: 'Lo que nos preguntan los negocios de Houston antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta una página web en Houston?',
            answer:
              'Depende del alcance: cuántas páginas, si el sitio va en dos idiomas, si hay tienda en línea o integraciones y si producimos el contenido. Después de la llamada de diagnóstico te mandamos una cotización con todo desglosado para que veas exactamente qué estás pagando.',
          },
          {
            question: '¿Trabajan con negocios en Houston?',
            answer:
              'Sí. Diseño, desarrollo y marca los resuelve un mismo equipo, y ya trabajamos a distancia con clientes en México, Estados Unidos, Canadá, España, República Dominicana y muchos países más. Hablamos tu idioma y el de tus clientes, y la diferencia de horario con Houston es de cero a una hora según la temporada.',
          },
          {
            question: '¿Hacen el sitio en inglés y en español?',
            answer:
              'Sí, y es lo que más recomendamos en Houston. El sitio queda disponible en los dos idiomas con la misma información, y tu cliente elige en cuál leerlo.',
          },
          {
            question: '¿Cómo se paga?',
            answer:
              'Te cotizamos según tu proyecto. La forma de pago se acuerda en la cotización, antes de arrancar.',
          },
          {
            question: '¿Cuánto tardan en entregar?',
            answer:
              'Depende del alcance, y los tiempos se acuerdan en la cotización. Lo que más mueve el calendario no es el desarrollo sino el contenido: si tienes fotos y textos listos, avanzamos más rápido.',
          },
          {
            question: '¿Me ayudan a aparecer en Google en Houston?',
            answer:
              'Todos los sitios salen con SEO técnico básico: velocidad, estructura correcta y etiquetas de idioma bien puestas. Eso te hace elegible para aparecer. Subir en búsquedas competidas lleva meses y constancia, y te decimos con claridad qué esperar.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Proyectos reales de identidad, sitios web y productos digitales en sectores como energía, construcción y salud. Es el mismo estándar con el que trabajaríamos tu negocio en Houston.',
      },
      nearby: {
        heading: '¿Tu negocio está en otra ciudad de Estados Unidos?',
        description: 'También diseñamos sitios para negocios latinos en estas ciudades.',
      },
      linkLabel: 'Diseño web en Houston',
      breadcrumb: 'Diseño Web Houston',
      serviceName: 'Diseño Web y Branding en Houston',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web bilingüe de un negocio latino en Houston.',
    },
    en: {
      seo: {
        title: 'Bilingual Web Design in Houston | Aurin',
        description:
          'Bilingual English/Spanish web design and branding in Houston. Sites for contractors, clinics, restaurants, and businesses that sell to Houston’s Hispanic market.',
        keywords:
          'bilingual web design Houston, Spanish website design Houston, web design for Hispanic businesses Houston, Latino-owned business website Houston, web designer who speaks Spanish Houston, contractor website design Houston, branding agency Houston',
      },
      hero: {
        subtitle: 'Bilingual web design in Houston',
        titleLead: 'Bilingual Web Design in',
        titleAccent: 'Houston',
        description:
          'More than a third of Houston is Hispanic, and a large share of your customers would rather read about your business in Spanish. We design websites for Houston companies that work in both English and Spanish, so every customer can read about you in the language they prefer.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: 'EN/ES', label: 'sites in both of your customers’ languages' },
          { value: 'Web + Brand', label: 'design, development, and branding from one team' },
        ],
      },
      services: {
        heading: 'Web design and branding services in Houston',
        intro:
          'We work with businesses across Houston, Pasadena, Katy, Sugar Land, Pearland, Cypress, and Spring: construction and remodeling contractors, energy industry suppliers, clinics, restaurants, and professional services. Design, development, and brand from a single team.',
        items: [
          {
            title: 'Your site in English and Spanish',
            description:
              'A large share of Houston customers are more comfortable in Spanish. We build your site so the same information is available in both languages, and visitors switch with one click.',
            bullets: [
              'The same site available in English and Spanish',
              'Easy-to-find language switcher',
              'Both languages set up correctly for Google',
            ],
          },
          {
            title: 'Websites for contractors and home services',
            description:
              'Homeowners choose a contractor on photos, reviews, and whether the company looks established. We design the site so your work shows at the level of Houston’s larger firms and requesting an estimate takes under a minute on a phone.',
            bullets: [
              'Project gallery organized by type of job',
              'A page for each main service',
              'Short, mobile-first estimate request',
            ],
          },
          {
            title: 'Branding for growing companies',
            description:
              'If your logo was made in a hurry when you started and you now bid on bigger contracts, the brand is holding you back. We redesign your identity so it matches the size of the company you already are.',
            bullets: [
              'Complete visual identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the new brand',
            ],
          },
          {
            title: 'Online stores and landing pages',
            description:
              'If you run Google or Meta ads, sending that traffic to your homepage wastes budget. We build online stores and campaign landing pages set up to measure the inquiries they generate.',
            bullets: [
              'Online store with payments',
              'One landing page per campaign and language',
              'Basic measurement of inquiries set up',
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
            text: 'We learn your business, who you sell to, and which language they search in. From there we define scope and send a quote.',
          },
          {
            name: 'Structure and content',
            text: 'We define which pages you need and what goes on each, and agree on which content you provide and which is included in the project.',
          },
          {
            name: 'Design',
            text: 'We design every screen with your brand, present it to you, and refine it with you as agreed in the quote.',
          },
          {
            name: 'Build and launch',
            text: 'We build the site and connect it to your domain. After that, you can make changes yourself: we walk you through it in one session. Or, if you would rather not deal with it, we handle it with a monthly maintenance plan.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in Houston',
        description: 'What Houston businesses ask us before signing.',
        items: [
          {
            question: 'How much does a website cost in Houston?',
            answer:
              'It depends on scope: how many pages, whether the site runs in two languages, whether there is an online store or integrations, and whether we produce the content. After the discovery call we send an itemized quote, so you see exactly what you are paying for.',
          },
          {
            question: 'Do you work with businesses in Houston?',
            answer:
              'Yes. Design, development, and brand are handled by the same team, and we already work remotely with clients in Mexico, the United States, Canada, Spain, the Dominican Republic, and many more countries. We work in Spanish and English, and the time difference with Houston is zero to one hour depending on the season.',
          },
          {
            question: 'Do you build the site in English and Spanish?',
            answer:
              'Yes. The site is available in both languages with the same information, and each visitor chooses which one to read. In Houston we recommend it for almost any business that serves Hispanic customers.',
          },
          {
            question: 'How does payment work?',
            answer:
              'We quote based on your project. Payment terms are agreed in the quote, before work starts.',
          },
          {
            question: 'How long does it take?',
            answer:
              'It depends on scope, and timing is agreed in the quote. What usually moves the calendar is content, not development: if your photos and copy are ready, we move faster.',
          },
          {
            question: 'Will this help me rank on Google in Houston?',
            answer:
              'Every site ships with basic technical SEO: speed, correct structure, and proper language tags. That makes you eligible to rank. Climbing competitive searches takes months of consistent work, and we tell you plainly what to expect.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Real identity, website, and digital product work in sectors like energy, construction, and healthcare. It is the same standard we would bring to your Houston business.',
      },
      nearby: {
        heading: 'Is your business in another U.S. city?',
        description: 'We also design bilingual websites for businesses in these cities.',
      },
      linkLabel: 'Bilingual web design in Houston',
      breadcrumb: 'Web Design Houston',
      serviceName: 'Bilingual Web Design and Branding in Houston',
      howToDescription:
        'Step-by-step process to design a bilingual English/Spanish website for a Houston business.',
    },
  },
};
