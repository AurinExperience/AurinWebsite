import type { LandingCopy } from '@/data/landings';

/**
 * Textos compartidos por las landings por sector. Lo comercial (cómo se paga,
 * idiomas) sale de landings/common.ts; aquí solo va lo que es propio de un
 * sector: el bloque de enlaces a los demás sectores, la pregunta sobre
 * búsquedas con IA y la de trabajo a distancia.
 *
 * Mismas reglas de copy que las landings: sin precios, sin tiempos de entrega,
 * sin clientes que no existen y sin prometer resultados.
 */

type Faq = LandingCopy['faq']['items'][number];
type Step = LandingCopy['process']['steps'][number];

const es = {
  /** Proceso y preguntas de las landings de UX/UI (productos digitales). */
  ux: {
    stats: { value: 'UX + UI', label: 'investigación, flujos e interfaces en un mismo equipo' },
    processHeading: 'Cómo trabajamos tu producto',
    processDescription:
      'Así trabajamos el diseño de un producto digital. El alcance de cada etapa se define en la cotización.',
    stepResearch: (text: string): Step => ({ name: 'Investigación', text }),
    stepFlows: {
      name: 'Arquitectura y flujos',
      text: 'Ordenamos la información y diseñamos los flujos principales: qué ve el usuario, en qué orden y qué decisión toma en cada paso.',
    } satisfies Step,
    stepUi: {
      name: 'Interfaz y prototipo',
      text: 'Diseñamos las pantallas con un sistema de componentes y armamos un prototipo navegable para validarlo antes de programar.',
    } satisfies Step,
    // Aurin desarrolla sitios y, según el alcance, plataformas web; apps móviles
    // no (decisión del cliente, 2026-10-13). No prometer desarrollo móvil.
    stepHandoff: {
      name: 'Entrega a desarrollo',
      text: 'Entregamos los archivos de diseño organizados y el sistema de componentes listos para que tu equipo o tu proveedor los construya, y resolvemos sus dudas durante la implementación.',
    } satisfies Step,
    faqDev: {
      question: '¿También hacen el desarrollo?',
      answer:
        'Si tu producto es web, podemos cotizar también el desarrollo. Las apps móviles no las desarrollamos: te entregamos el diseño listo para tu equipo o tu proveedor y lo acompañamos durante la implementación para que el resultado se vea y funcione como se diseñó.',
    } satisfies Faq,
    faqTeam: {
      question: '¿Pueden trabajar con nuestro equipo de producto?',
      answer:
        'Sí. Trabajamos de la mano con tu equipo de producto y desarrollo, compartimos avances por etapa y entregamos el diseño organizado para que sea fácil de construir.',
    } satisfies Faq,
  },
  /** Landings de tiendas en línea por plataforma (`service: 'ecommerce'`). */
  store: {
    nearby: {
      heading: '¿Prefieres otra plataforma?',
      description: 'También diseñamos y desarrollamos tiendas en línea en estas plataformas.',
    },
    note: {
      title: 'Cada tienda se cotiza a la medida',
      text: 'Una tienda no se vende por paquete: el alcance se arma con lo que vendes y cómo lo vendes. Lo marcado «A la medida» depende de tu operación, y su alcance y costo los platicamos contigo desde las primeras llamadas.',
    },
    stepLaunch: {
      name: 'Desarrollo y lanzamiento',
      text: 'Desarrollamos la tienda, probamos pagos y envíos con pedidos de principio a fin y la conectamos a tu dominio. Te enseñamos a manejar productos y pedidos desde el panel, y los cambios mayores los hacemos con un plan mensual de mantenimiento.',
    } satisfies Step,
    faqHeading: (platform: string) => `Preguntas frecuentes sobre tiendas en línea en ${platform}`,
    faqDescription: 'Lo que conviene resolver antes de contratar.',
    faqWhy: {
      question: '¿Por qué hacer mi tienda con Aurin?',
      answer:
        'Porque tenemos experiencia desarrollando tiendas en línea y un solo equipo se encarga de tu marca, el diseño, el desarrollo y el SEO, sin repartir la tienda entre tres proveedores. Te mandamos una cotización de alcance cerrado, desglosada por etapa, con entregables y fechas, y te entregamos la tienda a tu nombre, con Google Analytics y Search Console incluidos. Llevamos diseñando marcas desde 1998.',
    } satisfies Faq,
  },
  nearby: {
    heading: '¿Tu negocio es de otro sector?',
    description: 'También diseñamos sitios web pensados para estos sectores.',
  },
  /** Sectores para clientes de Estados Unidos (`country: 'US'`): estudio nearshore, no proveedor barato. */
  us: {
    stat: { value: 'Nearshore', label: 'desde México, en el horario de Estados Unidos' },
    nearby: {
      heading: 'Otros sectores que atendemos en Estados Unidos',
      description: 'Sitios y productos digitales para empresas estadounidenses de estos sectores.',
    },
    /** `who`: "desarrolladores inmobiliarios", "clínicas"… */
    faqRemote: (who: string): Faq => ({
      question: `¿Un estudio en México puede trabajar con ${who} en Estados Unidos?`,
      answer:
        'Sí. Somos un estudio nearshore: México comparte horario con Estados Unidos, así que nos reunimos por videollamada en tus horas de trabajo, hablamos inglés y compartimos avances en cada etapa. Recibes el estándar de una agencia de Nueva York o Los Ángeles con un equipo senior dedicado y mejor relación entre calidad y precio.',
    }),
    // Mismo mensaje que "Cómo trabajamos" del home (translations.ts → howWeWork)
    faqAiProcess: {
      question: '¿Usan inteligencia artificial?',
      answer:
        'Sí, y no lo escondemos: la IA acelera. La experiencia decide. La usamos para prototipar más rápido, explorar variaciones de diseño y acelerar tareas repetitivas de desarrollo. Pero cada decisión de diseño la toma un equipo con más de veinte años diseñando marcas y productos digitales, y cada entrega la revisamos a mano hasta que queda perfecta.',
    } satisfies Faq,
  },
  /** `subject`: "mi despacho", "mi clínica"… */
  faqAi: (subject: string): Faq => ({
    question: `¿${subject[0].toUpperCase()}${subject.slice(1)} puede aparecer en ChatGPT o en las respuestas con IA de Google?`,
    answer:
      'Nadie puede garantizar que una IA te mencione, pero sí podemos darte las mejores condiciones para que lo haga. Escribimos tu información con respuestas claras, agregamos datos estructurados de tu negocio y dejamos tu sitio listo para que esas herramientas lo lean y lo citen. Es el mismo trabajo que hacemos en nuestro propio sitio.',
  }),
  /** `who`: "despachos", "clínicas"… */
  faqRemote: (who: string): Faq => ({
    question: `¿Trabajan con ${who} de cualquier ciudad?`,
    answer:
      'Sí. Trabajamos a distancia, así que podemos atender negocios en cualquier parte de México y en otros países, como Estados Unidos, Canadá o España.',
  }),
};

const en: typeof es = {
  ux: {
    stats: { value: 'UX + UI', label: 'research, flows, and interfaces from one team' },
    processHeading: 'How we design your product',
    processDescription: 'How we design a digital product. The scope of each stage is set in the quote.',
    stepResearch: (text: string): Step => ({ name: 'Research', text }),
    stepFlows: {
      name: 'Architecture and flows',
      text: 'We organize the information and design the main flows: what users see, in what order, and which decision they make at each step.',
    },
    stepUi: {
      name: 'Interface and prototype',
      text: 'We design the screens with a component system and build a clickable prototype to validate it before any code is written.',
    },
    stepHandoff: {
      name: 'Handoff to development',
      text: 'We deliver organized design files and a component system ready for your team or vendor to build, and answer their questions during implementation.',
    },
    faqDev: {
      question: 'Do you also handle development?',
      answer:
        'If your product is web-based, we can also quote the development. We do not develop mobile apps: we deliver the design ready for your team or vendor and support them during implementation so the result looks and works as designed.',
    },
    faqTeam: {
      question: 'Can you work with our product team?',
      answer:
        'Yes. We work alongside your product and engineering teams, share progress at each stage, and deliver organized designs that are easy to build.',
    },
  },
  store: {
    nearby: {
      heading: 'Prefer another platform?',
      description: 'We also design and build online stores on these platforms.',
    },
    note: {
      title: 'Every store is quoted to fit',
      text: 'A store is not sold as a package: the scope comes from what you sell and how you sell it. Items marked “Custom” depend on your operation, and we talk through their scope and cost with you from the first calls.',
    },
    stepLaunch: {
      name: 'Build and launch',
      text: 'We build the store, test payments and shipping with orders from start to finish, and connect it to your domain. We show you how to manage products and orders from the admin, and we handle larger changes with a monthly maintenance plan.',
    },
    faqHeading: (platform: string) => `Frequently asked questions about online stores on ${platform}`,
    faqDescription: 'What is worth settling before you sign.',
    faqWhy: {
      question: 'Why build my store with Aurin?',
      answer:
        'Because we have experience building online stores, and one team handles your brand, design, development, and SEO, instead of splitting the store among three vendors. You get a fixed-scope quote, broken down by stage, with deliverables and dates, and we hand the store over in your name, with Google Analytics and Search Console included. We have been designing brands since 1998.',
    },
  },
  nearby: {
    heading: 'Is your business in another industry?',
    description: 'We also design websites built for these industries.',
  },
  us: {
    stat: { value: 'Nearshore', label: 'based in Mexico, working US business hours' },
    nearby: {
      heading: 'More industries we serve in the US',
      description: 'Websites and digital products for US companies in these industries.',
    },
    faqRemote: (who: string): Faq => ({
      question: `Can a studio in Mexico really work with ${who} in the US?`,
      answer:
        'Yes. We are a nearshore studio: Mexico shares business hours with the US, so we meet over video during your workday, work in English, and share progress at every stage. You get the standard of a New York or Los Angeles agency, with a dedicated senior team and better value for the quality.',
    }),
    faqAiProcess: {
      question: 'Do you use AI?',
      answer:
        'Yes, and we don’t hide it: AI accelerates. Experience decides. We use it to prototype faster, explore design variations, and speed up repetitive development tasks. But every design decision is made by a team with more than twenty years designing brands and digital products, and every deliverable is reviewed by hand until it is right.',
    },
  },
  faqAi: (subject: string): Faq => ({
    question: `Can ${subject} show up in ChatGPT or Google’s AI answers?`,
    answer:
      'No one can guarantee that an AI will mention you, but we can give you the best conditions for it. We write your information as clear answers, add structured data about your business, and get your site ready for those tools to read and cite. It is the same work we do on our own site.',
  }),
  faqRemote: (who: string): Faq => ({
    question: `Do you work with ${who} in any city?`,
    answer:
      'Yes. We work remotely, so we can serve businesses anywhere in Mexico and in other countries, such as the United States, Canada, or Spain.',
  }),
};

export const SECTOR_COMMON = { es, en };
