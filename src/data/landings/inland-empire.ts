import type { Landing } from './types';

/**
 * Inland Empire (Riverside y San Bernardino) — palabra clave objetivo: "diseño
 * web Riverside" / "diseño web Inland Empire" (ES) y "bilingual web design
 * Inland Empire" (EN).
 *
 * Ángulo propio: oficios y negocios de servicios que se juegan contratos. La
 * zona está llena de negocios latinos de construcción, landscaping, talleres,
 * limpieza y oficinas de taxes y aseguranzas. Su comprador muchas veces no es
 * solo el dueño de casa: es el contratista general o la empresa que revisa el
 * sitio antes de darles trabajo. Se vende un sitio informativo bien hecho, no
 * sistemas a la medida (flotillas, reclutamiento, portales): eso sería un
 * desarrollo que hoy no ofrecemos.
 */
export const inlandEmpire: Landing = {
  id: 'inland-empire',
  status: 'live',
  country: 'US',
  slug: { es: 'inland-empire', en: 'inland-empire' },
  region: 'California',
  geo: { latitude: 34.0633, longitude: -117.6509 },
  areas: [
    'Riverside',
    'San Bernardino',
    'Ontario',
    'Fontana',
    'Rancho Cucamonga',
    'Moreno Valley',
    'Corona',
    'Rialto',
  ],
  phoneSample: '+1 909 555 0123',
  proof: ['grupoEstrella', 'bonanza', 'inglesIndividual'],
  copy: {
    es: {
      seo: {
        title: 'Diseño Web en Inland Empire, Riverside y San Bernardino | Aurin',
        description:
          'Diseño web y branding en el Inland Empire para contratistas, landscaping y negocios de servicios latinos en Riverside, San Bernardino y Ontario.',
        keywords:
          'diseño web Riverside, diseño web San Bernardino, diseño de páginas web Inland Empire, página web para contratistas, página web para negocio de landscaping, diseño web Ontario California',
      },
      hero: {
        subtitle: 'Diseño web en el Inland Empire',
        titleLead: 'Diseño Web en el',
        titleAccent: 'Inland Empire',
        description:
          'Antes de darte un contrato o un trabajo, el contratista general o el cliente busca tu nombre en Google. Diseñamos sitios bilingües para contratistas y negocios de servicios de Riverside, San Bernardino y Ontario que necesitan verse tan formales como las empresas con las que compiten.',
        cta: 'Cotiza tu proyecto',
        ctaSecondary: 'Ver cómo trabajamos',
        stats: [
          { value: '+20', label: 'años diseñando marcas y productos digitales' },
          { value: 'ES/EN', label: 'para tus clientes y tus socios' },
          { value: 'Web + Marca', label: 'diseño, desarrollo y branding en un mismo equipo' },
        ],
      },
      services: {
        heading: 'Servicios de diseño web y branding en el Inland Empire',
        intro:
          'Trabajamos con negocios de Riverside, San Bernardino, Ontario, Fontana, Rancho Cucamonga, Moreno Valley, Corona y Rialto: contratistas y subcontratistas, landscaping, talleres, limpieza, oficinas de taxes y aseguranzas, y negocios de servicios.',
        items: [
          {
            title: 'Sitios para construcción y landscaping',
            description:
              'Si trabajas como subcontratista o directo con dueños de casa, tu sitio es tu portafolio. Organizamos tus proyectos, tus servicios y tus licencias para que un contratista general o un cliente te pueda evaluar rápido.',
            bullets: [
              'Portafolio de proyectos por tipo de trabajo',
              'Licencias, seguros y zonas que cubres',
              'Formulario para pedir un estimado desde el celular',
            ],
          },
          {
            title: 'Sitios para negocios de servicios',
            description:
              'Talleres, limpieza, oficinas de taxes y aseguranzas: tu cliente quiere saber rápido qué haces, dónde estás, a qué hora abres y cómo contactarte. Un sitio claro con esa información trabaja por ti aunque estés ocupado atendiendo.',
            bullets: [
              'Servicios explicados en lenguaje sencillo',
              'Horario, ubicación y mapa',
              'Contacto por llamada, WhatsApp o formulario',
            ],
          },
          {
            title: 'Sitio en español y en inglés',
            description:
              'En el Inland Empire unos clientes te buscan en inglés y otros prefieren el español. Tu sitio queda disponible en los dos idiomas para que no pierdas a ninguno.',
            bullets: [
              'Sitio disponible en español y en inglés',
              'Selector de idioma fácil de encontrar',
              'Pensado primero para celular',
            ],
          },
          {
            title: 'Marca para una empresa que ya creció',
            description:
              'Tu nombre va en camionetas, facturas, contratos y redes. Si el logo no aguanta ese uso, o cada cosa trae una versión distinta, tu empresa se ve más chica de lo que es. Creamos una identidad pensada para aplicarse de forma consistente.',
            bullets: [
              'Logo e identidad con manual de uso',
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
            text: 'Una llamada para entender a quién le vendes: dueños de casa, contratistas, empresas o todos. Cada uno busca cosas distintas en tu sitio y la estructura depende de eso.',
          },
          {
            name: 'Estructura',
            text: 'Definimos las páginas: servicios, proyectos y contacto, y si el sitio va en uno o en los dos idiomas.',
          },
          {
            name: 'Diseño',
            text: 'Te presentamos el diseño y lo ajustamos contigo según lo acordado en la cotización.',
          },
          {
            name: 'Lanzamiento',
            text: 'Construimos el sitio, lo conectamos a tu dominio y configuramos para que las solicitudes de estimado te lleguen directo. Después, los cambios los puedes hacer tú: en una sesión te explicamos cómo. O, si prefieres no ocuparte, nos encargamos nosotros con un plan mensual de mantenimiento.',
          },
        ],
      },
      faq: {
        heading: 'Preguntas frecuentes sobre diseño web en el Inland Empire',
        description: 'Lo que nos preguntan los negocios del Inland Empire antes de contratar.',
        items: [
          {
            question: '¿Cuánto cuesta una página web en Riverside o San Bernardino?',
            answer:
              'Depende del alcance: cuántas páginas, si va en dos idiomas y si también necesitas marca. Después de una llamada te mandamos una cotización desglosada.',
          },
          {
            question: '¿Necesito sitio si trabajo con contratistas y no con el público?',
            answer:
              'Sí, y justo por eso. Un contratista general o una empresa no te va a conocer en persona antes de darte trabajo. Lo que ve cuando busca tu nombre es lo que decide si te toma en serio. Un sitio formal con tus proyectos, licencias y seguros pesa más que una página de Facebook.',
          },
          {
            question: '¿Pueden rediseñar el sitio que ya tengo?',
            answer:
              'Sí. Revisamos lo que tienes, conservamos lo que funciona y rediseñamos lo que está frenando a tus clientes: cómo se ve en el celular, qué tan fácil es contactarte y si tu trabajo se ve al nivel que tiene.',
          },
          {
            question: '¿Cómo trabajan si están en México?',
            answer:
              'Trabajamos a distancia. La diferencia de horario con California es de una a dos horas según la temporada.',
          },
          {
            question: '¿Cómo se paga?',
            answer:
              'Te cotizamos según tu proyecto. La forma de pago se acuerda en la cotización, antes de arrancar.',
          },
          {
            question: '¿Hacen el sitio en inglés y en español?',
            answer:
              'Sí. El sitio queda disponible en los dos idiomas con la misma información, y tu cliente elige en cuál leerlo.',
          },
        ],
      },
      socialProof: {
        heading: 'Trabajo que respalda la propuesta',
        description:
          'Proyectos reales de identidad y sitios web en sectores como construcción, finanzas y educación. Es el mismo estándar con el que trabajaríamos tu empresa en el Inland Empire.',
      },
      nearby: {
        heading: '¿Tu negocio está en otra ciudad de Estados Unidos?',
        description: 'También diseñamos para negocios latinos en estas ciudades.',
      },
      linkLabel: 'Diseño web en el Inland Empire',
      breadcrumb: 'Diseño Web Inland Empire',
      serviceName: 'Diseño Web y Branding en el Inland Empire',
      howToDescription:
        'Proceso paso a paso para diseñar el sitio web de un contratista o negocio de servicios en el Inland Empire.',
    },
    en: {
      seo: {
        title: 'Bilingual Web Design in the Inland Empire | Aurin',
        description:
          'Web design and branding in the Inland Empire for contractors, landscaping, and service businesses in Riverside, San Bernardino, and Ontario.',
        keywords:
          'web design Inland Empire, contractor website design Riverside, bilingual web design Riverside, web design San Bernardino, Latino-owned business website Inland Empire, landscaping website design Riverside',
      },
      hero: {
        subtitle: 'Web design in the Inland Empire',
        titleLead: 'Web Design in the',
        titleAccent: 'Inland Empire',
        description:
          'Before a general contractor or a customer hands you a job, they look you up. We design bilingual websites for contractors and service businesses in Riverside, San Bernardino, and Ontario that need to look as established as the firms they compete with.',
        cta: 'Request a quote',
        ctaSecondary: 'See how we work',
        stats: [
          { value: '+20', label: 'years designing brands and digital products' },
          { value: 'EN/ES', label: 'for your customers and partners' },
          { value: 'Web + Brand', label: 'design, development, and branding from one team' },
        ],
      },
      services: {
        heading: 'Web design and branding services in the Inland Empire',
        intro:
          'We work with businesses in Riverside, San Bernardino, Ontario, Fontana, Rancho Cucamonga, Moreno Valley, Corona, and Rialto: contractors and subcontractors, landscaping, auto shops, cleaning, tax and insurance offices, and service businesses.',
        items: [
          {
            title: 'Construction and landscaping websites',
            description:
              'Whether you sub for general contractors or work directly with homeowners, your site is your portfolio. We organize your projects, services, and licenses so anyone evaluating you can do it fast.',
            bullets: [
              'Project portfolio organized by type of work',
              'Licenses, insurance, and service areas',
              'Estimate request form that works on a phone',
            ],
          },
          {
            title: 'Websites for service businesses',
            description:
              'Auto shops, cleaning, tax and insurance offices: customers want to know fast what you do, where you are, when you are open, and how to reach you. A clear site with that information works for you while you are busy with customers.',
            bullets: [
              'Services explained in plain language',
              'Hours, location, and map',
              'Contact by phone, WhatsApp, or form',
            ],
          },
          {
            title: 'Your site in English and Spanish',
            description:
              'In the Inland Empire some customers search in English and others prefer Spanish. Your site is available in both languages so you do not lose either.',
            bullets: [
              'The same site available in English and Spanish',
              'Easy-to-find language switcher',
              'Mobile-first',
            ],
          },
          {
            title: 'A brand for a company that grew',
            description:
              'Your name goes on trucks, invoices, contracts, and social media. If the logo cannot hold up to that, or every piece carries a different version, the company looks smaller than it is. We build an identity designed to be applied consistently.',
            bullets: [
              'Logo and identity with usage guidelines',
              'Brand applications based on project scope',
              'Website aligned with the brand',
            ],
          },
        ],
      },
      process: {
        heading: 'How we run your project',
        description: 'How we run a project remotely. The details of each stage are set in the quote.',
        steps: [
          {
            name: 'Discovery call',
            text: 'We figure out who you sell to: homeowners, contractors, companies, or all of them. Each looks for different things on your site, and the structure depends on it.',
          },
          {
            name: 'Structure',
            text: 'We define the pages: services, projects, and contact, and whether the site runs in one language or both.',
          },
          {
            name: 'Design',
            text: 'We present the design to you and refine it with you as agreed in the quote.',
          },
          {
            name: 'Launch',
            text: 'We build the site, connect it to your domain, and set it up so estimate requests land straight in your inbox. After that, you can make changes yourself: we walk you through it in one session. Or, if you would rather not deal with it, we handle it with a monthly maintenance plan.',
          },
        ],
      },
      faq: {
        heading: 'Frequently asked questions about web design in the Inland Empire',
        description: 'What Inland Empire businesses ask us before signing.',
        items: [
          {
            question: 'How much does a website cost in Riverside or San Bernardino?',
            answer:
              'It depends on scope: how many pages, whether it runs in two languages, and whether you also need a brand. After a call we send an itemized quote.',
          },
          {
            question: 'Do I need a website if I work with contractors, not the public?',
            answer:
              'Yes, and that is exactly why. A general contractor or company will not meet you in person before giving you work. What they see when they search your name decides whether they take you seriously. A professional site with your projects, licenses, and insurance carries more weight than a Facebook page.',
          },
          {
            question: 'Can you redesign the site I already have?',
            answer:
              'Yes. We review what you have, keep what works, and redesign what is holding customers back: how it looks on a phone, how easy it is to contact you, and whether your work shows at the level it deserves.',
          },
          {
            question: 'How do you work from Mexico?',
            answer:
              'We work remotely. The time difference with California is one to two hours depending on the season.',
          },
          {
            question: 'How does payment work?',
            answer:
              'We quote based on your project. Payment terms are agreed in the quote, before work starts.',
          },
          {
            question: 'Do you build the site in English and Spanish?',
            answer:
              'Yes. The site is available in both languages with the same information, and each visitor chooses which one to read.',
          },
        ],
      },
      socialProof: {
        heading: 'Work that backs the proposal',
        description:
          'Real identity and website work in sectors like construction, finance, and education. It is the same standard we would bring to your Inland Empire company.',
      },
      nearby: {
        heading: 'Is your business in another U.S. city?',
        description: 'We also design for businesses in these cities.',
      },
      linkLabel: 'Web design in the Inland Empire',
      breadcrumb: 'Web Design Inland Empire',
      serviceName: 'Web Design and Branding in the Inland Empire',
      howToDescription:
        'Step-by-step process to design a website for a contractor or service business in the Inland Empire.',
    },
  },
};
