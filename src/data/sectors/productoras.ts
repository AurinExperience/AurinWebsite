import { defineSector } from './build';

/**
 * Productoras audiovisuales y estudios — "página web productora audiovisual".
 * Ángulo: el reel es el producto; agencias y marcas eligen por portafolio,
 * directores y capacidad de producción (incluido service para producciones
 * extranjeras en México). El sitio no debe estorbar al video.
 */
export const productoras = defineSector({
  id: 'productoras',
  publishAt: '2026-11-01T00:00:00-06:00',
  slug: { es: 'para-productoras-audiovisuales', en: 'for-production-companies' },
  name: { es: 'Productoras audiovisuales', en: 'Production companies' },
  proof: ['sinfonica', 'ideograma', 'elRollo'],
  es: {
    seoTitle: 'Diseño Web para Productoras Audiovisuales y Estudios',
    seoDescription:
      'Sitios para productoras de publicidad, cine y contenido: reel que carga rápido, directores, proyectos por categoría y service para rodajes extranjeros.',
    keywords:
      'diseño web para productoras, página web productora audiovisual, sitio web casa productora, página web estudio de grabación, portafolio de video en línea',
    subtitle: 'Diseño web para productoras audiovisuales',
    accent: 'Productoras',
    target: 'productoras audiovisuales',
    hero: 'Una agencia que busca casa productora abre tu sitio, da play al reel y decide en los primeros segundos. Si el video tarda en cargar, el diseño compite con la imagen o no encuentra a tus directores, cierra la pestaña. Diseñamos sitios donde tu trabajo es el protagonista y donde productores, agencias y marcas encuentran lo que buscan sin esfuerzo.',
    intro:
      'Diseñamos páginas web para casas productoras de publicidad, productoras de cine y series, estudios de contenido, postproducción, animación y estudios de grabación.',
    items: [
      {
        title: 'Video sin fricción',
        description:
          'Reel y proyectos que cargan rápido en cualquier conexión, con reproducción a pantalla completa y sin distracciones.',
        bullets: ['Reel principal', 'Video optimizado', 'Pantalla completa'],
      },
      {
        title: 'Directores y talento',
        description:
          'Una página por director, fotógrafo o creativo con su propio reel.',
        bullets: ['Páginas por director', 'Reels individuales', 'Premios y festivales'],
      },
      {
        title: 'Proyectos por categoría',
        description:
          'Publicidad, contenido de marca, documental, ficción y música organizados para que cada cliente vea lo que le interesa.',
        bullets: ['Créditos por proyecto', 'Clientes y agencias si los publicas'],
        custom: ['Filtros por categoría'],
      },
      {
        title: 'Service y capacidades',
        description:
          'Una sección en inglés para producciones extranjeras que filman en México: locaciones, permisos, equipo y estudio.',
        bullets: ['Service en inglés', 'Locaciones y estudio', 'Equipo y postproducción'],
      },
    ],
    diagnosis: 'Una llamada para conocer tu trabajo, tus directores y a qué clientes quieres llegar.',
    pages: 'reel, proyectos, directores, servicios, service para producciones extranjeras, estudio y contacto',
    costQuestion: '¿Cuánto cuesta el sitio web de una productora?',
    costScope:
      'cuántos proyectos y directores, si incluye sección de service en inglés, si tu equipo actualizará el portafolio y si también necesitas marca',
    faqs: [
      {
        question: '¿Dónde se alojan los videos?',
        answer:
          'Normalmente en la plataforma de video que ya usas, para no pagar dos veces. Diseñamos el reproductor y la carga para que se vean limpios y rápidos dentro de tu sitio.',
      },
      {
        question: '¿Podemos agregar proyectos nosotros mismos?',
        answer:
          'Sí, con un panel a la medida para subir proyectos con su video, créditos y categoría sin depender de nosotros.',
      },
      {
        question: '¿Conviene una sección para producciones extranjeras?',
        answer:
          'Si haces service, sí. Muchas producciones de Estados Unidos buscan socio en México por internet, y una sección en inglés con locaciones y capacidades te pone en su lista.',
      },
    ],
    aiSubject: 'mi productora',
    remoteWho: 'productoras',
    proofText:
      'Proyectos reales de identidad y sitios web en cultura y música, diseño de marca y recreación. Es el estándar con el que trabajaríamos tu productora.',
    howTo: 'el sitio web de una productora audiovisual',
    lead: {
      heading: 'Hablemos de tu productora',
      description:
        'Cuéntanos qué produces y con quién quieres trabajar. Te contactaremos para conocer tu trabajo y te enviaremos una propuesta desglosada.',
      messagePlaceholder: 'Ej. Somos una casa productora de publicidad en CDMX y hacemos service para producciones de Estados Unidos.',
    },
  },
  en: {
    seoTitle: 'Web Design for Production Companies and Studios',
    seoDescription:
      'Websites for commercial, film, and content production companies: fast-loading reels, directors, projects by category, and production services.',
    keywords:
      'production company website design, video production website, film production company web design, director reel website, recording studio website',
    subtitle: 'Web design for production companies',
    accent: 'Production Companies',
    target: 'production companies',
    hero: 'An agency looking for a production company opens your site, plays the reel, and decides in the first seconds. If the video is slow, the design competes with the image, or they cannot find your directors, they close the tab. We design websites where your work is the star and producers, agencies, and brands find what they need without effort.',
    intro:
      'We design websites for commercial production companies, film and series producers, content studios, post-production, animation, and recording studios.',
    items: [
      {
        title: 'Video without friction',
        description:
          'Reels and projects that load fast on any connection, with full-screen playback and no distractions.',
        bullets: ['Main reel', 'Optimized video', 'Full-screen playback'],
      },
      {
        title: 'Directors and talent',
        description:
          'A page per director, cinematographer, or creative with their own reel.',
        bullets: ['Director pages', 'Individual reels', 'Awards and festivals'],
      },
      {
        title: 'Projects by category',
        description:
          'Commercials, branded content, documentary, fiction, and music organized so each client sees what matters to them.',
        bullets: ['Credits per project', 'Clients and agencies if you publish them'],
        custom: ['Category filters'],
      },
      {
        title: 'Production services',
        description:
          'A section for foreign productions shooting in Mexico: locations, permits, crew, and stages.',
        bullets: ['Production services', 'Locations and stages', 'Crew and post-production'],
      },
    ],
    diagnosis: 'A call to learn about your work, your directors, and the clients you want to reach.',
    pages: 'reel, projects, directors, services, production services for foreign shoots, studio, and contact',
    costQuestion: 'How much does a production company website cost?',
    costScope:
      'how many projects and directors, whether it includes a production services section, whether your team will update the portfolio, and whether you also need a brand',
    faqs: [
      {
        question: 'Where are the videos hosted?',
        answer:
          'Usually on the video platform you already use, so you do not pay twice. We design the player and loading so they look clean and fast inside your site.',
      },
      {
        question: 'Can we add projects ourselves?',
        answer:
          'Yes, with a custom panel to upload projects with their video, credits, and category without relying on us.',
      },
      {
        question: 'Is a section for foreign productions worth it?',
        answer:
          'If you offer production services, yes. Many US productions look for a partner in Mexico online, and an English section with locations and capabilities puts you on their list.',
      },
    ],
    aiSubject: 'my production company',
    remoteWho: 'production companies',
    proofText:
      'Real identity and website work in culture and music, brand design, and recreation. It is the standard we would bring to your company.',
    howTo: 'a production company website',
    lead: {
      heading: 'Let’s talk about your company',
      description:
        'Tell us what you produce and who you want to work with. We will reach out to see your work and send you an itemized proposal.',
      messagePlaceholder: 'E.g. We are a commercial production company in Mexico City offering services to US productions.',
    },
  },
});
