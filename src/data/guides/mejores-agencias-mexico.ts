import type { Guide } from './types';

/**
 * Guía — "mejores agencias de diseño web en México".
 *
 * Aurin va primero y con más texto por decisión del negocio. Su sección va en
 * primera persona para que se note que la guía es nuestra. Las demás siguen por
 * orden alfabético y solo dicen qué hacen: sin URL, clientes, calificaciones,
 * años ni precios, a propósito. Lo de Aurin sale de src/i18n/translations.ts.
 *
 * Los servicios de terceros se consultaron el 2026-11-04. Al tocar esta guía hay
 * que volver a revisarlos y mover `updated`.
 */
export const mejoresAgenciasMexico: Guide = {
  id: 'mejores-agencias-mexico',
  status: 'live',
  authors: ['elias-aquique'],
  slug: {
    es: 'mejores-agencias-de-diseno-web-en-mexico',
    en: 'best-web-design-agencies-in-mexico',
  },
  published: '2026-11-04',
  updated: '2026-11-04',
  relatedLandings: ['cdmx', 'monterrey', 'jalisco'],
  relatedSectors: ['ux-saas', 'ux-fintech', 'us-nearshore'],
  copy: {
    es: {
      seo: {
        title: 'Mejores agencias de diseño web en México 2027: ¿cuál elegir?',
        description:
          'Todas dicen hacer lo mismo. Compara ocho agencias de diseño web y UX/UI en México por especialidad, ciudad y tipo de proyecto antes de pedir cotización.',
        keywords:
          'mejores agencias de diseño web en México, empresas de diseño web México, agencias UX/UI México, agencia de páginas web México, comparar agencias de diseño web',
      },
      title: 'Las mejores agencias de diseño web en México, y cuál te conviene',
      excerpt:
        'Qué distingue a cada una, qué tipo de proyecto le conviene y qué preguntarles antes de pedir cotización.',
      intro: [
        'Buscar agencia o empresa de diseño web en México cansa rápido: todas dicen hacer lo mismo y todos los portafolios se ven bien. Por eso armamos esta lista con ocho opciones y lo que distingue a cada una, para que llegues a tus primeras llamadas con menos nombres y mejores preguntas.',
      ],
      sections: [
        {
          heading: 'Aurin: diseño web, UX/UI, branding y SEO con un solo equipo desde 1998',
          paragraphs: [
            '**Si tu sitio tiene que traer clientes y no solo verse bien, tu búsqueda puede terminar aquí.** Aurin es una agencia mexicana con oficina en Cuernavaca. Empezamos en 1998, el mismo año que Google, y hoy un solo equipo se encarga de todo: diseño web, desarrollo web, UX/UI, branding y SEO.',
            'Por qué hablar con nosotros antes de seguir comparando:',
          ],
          bullets: [
            '**Experiencia que no se improvisa.** Llevamos desde 1998 diseñando y construyendo productos digitales. Usamos inteligencia artificial, pero cada decisión sale de experiencia con usuarios reales.',
            '**Un solo equipo responsable.** No coordinas proveedores ni pierdes tiempo entre un estudio de diseño y un desarrollador aparte. Si algo falla, ya sabes con quién hablar.',
            '**Sabes qué pagas antes de firmar.** Después de una llamada de 30 minutos sin costo, cotizamos con alcance cerrado, desglosado por etapa, con entregables y fechas.',
            '**Tus datos son tuyos.** Entregamos cada sitio con Google Analytics y Search Console a tu nombre, para que midas resultados desde el lanzamiento.',
            '**Proyectos reales en varios países.** Nuestro portafolio incluye a Monetix, Fortrade, Elite Home Health, la Orquesta Sinfónica de Minería y CEIICH-UNAM. Tenemos clientes en México, Estados Unidos, Canadá, España, República Dominicana y otros países de Latinoamérica, y trabajamos a distancia con revisiones semanales.',
          ],
          cta: {
            heading: 'Deja de comparar y cuéntanos tu proyecto',
            text: 'Con un mensaje basta para empezar. Te cotizamos con alcance cerrado y te contactaremos lo antes posible.',
            label: 'Cotiza tu proyecto',
          },
        },
        {
          heading: 'Servicios de Aurin: diseño web, UX/UI, branding y SEO',
          paragraphs: [
            'Puedes contratar un servicio o todos. El equipo es el mismo, así que tu marca, tu sitio y tu producto digital hablan el mismo idioma.',
          ],
          bullets: [
            '**Diseño y desarrollo de páginas web:** sitios corporativos y landing pages en WordPress, Webflow o Shopify, o a medida con Astro y React. Cada sitio incluye versión en español e inglés, formularios de contacto y botón de WhatsApp. Tiendas en línea, pagos, portales de clientes y reservas se desarrollan a la medida.',
            '**Diseño UX/UI de apps y plataformas:** investigación, flujos, prototipos navegables e interfaces para apps de iOS y Android, portales de clientes y dashboards, listas para desarrollo. Si la plataforma es web, también la desarrollamos.',
            '**Branding e identidad corporativa:** estrategia de marca, naming cuando hace falta, logotipo, sistema visual y manual de identidad, con archivos fuente editables y una guía que tu equipo sí pueda usar.',
            '**SEO y posicionamiento en Google:** sitios optimizados desde el lanzamiento y rediseños que cuidan el posicionamiento que ya tienes.',
          ],
        },
        {
          heading: 'BluePixel: producto digital e ingeniería de software',
          paragraphs: [
            'Con base en Ciudad de México, combina UX/UI y estrategia de producto con ingeniería de software y agentes de IA. Conviene si lo que construyes es una plataforma, más que un sitio.',
          ],
        },
        {
          heading: 'Contra Studio: sitios para SaaS y B2B',
          paragraphs: [
            'Con oficinas en Ciudad de México, Nueva York y Bogotá, hace UX/UI, diseño y desarrollo web. Conviene a empresas de software y B2B.',
          ],
        },
        {
          heading: 'Lava Studio: sitios, tiendas en línea y sistemas',
          paragraphs: [
            'Desde Zapopan, Jalisco, hace páginas web, tiendas en línea y portales a la medida, además de apps y sistemas ERP con Odoo. Conviene si además del sitio necesitas conectar sistemas internos.',
          ],
        },
        {
          heading: 'Multiplica: consultoría de experiencia para empresas grandes',
          paragraphs: [
            'Consultora con oficina en Ciudad de México que trabaja experiencia de usuario, tecnología y optimización de conversión. Conviene a corporativos que necesitan un equipo grande dentro de sus procesos.',
          ],
        },
        {
          heading: 'Nett: UX/UI y marca en Monterrey',
          paragraphs: [
            'Se presenta como agencia de diseño de UX/UI, contenidos, branding e innovación. Conviene si buscas una agencia en Monterrey que combine producto digital y marca.',
          ],
        },
        {
          heading: 'Source Code: páginas web y tiendas en línea',
          paragraphs: [
            'Desde Ciudad de México hace páginas web y tiendas en línea, con SEO y mantenimiento. Conviene a empresas que buscan un sitio comercial y quieren seguir con el mismo proveedor después.',
          ],
        },
        {
          heading: 'UiX: consultoría UX/UI y diseño de producto',
          paragraphs: [
            'Desde Ciudad de México ofrece consultoría UX/UI, service design y diseño de producto. Conviene a empresas con un producto digital que necesita investigación y mejora continua.',
          ],
        },
        {
          heading: 'Cómo armamos esta lista',
          paragraphs: [
            'De las otras siete agencias revisamos su información pública el 4 de noviembre de 2026. Lo que ves es lo que cada una dice hacer. Ninguna pagó por aparecer. No contratamos a ninguna, así que esto no evalúa la calidad de su trabajo. Sus servicios pueden cambiar con el tiempo: confírmalos antes de decidir.',
          ],
        },
        {
          heading: 'Cómo comparar a tus finalistas',
          paragraphs: [
            'Quédate con dos o tres agencias, nosotros incluidos si te hacemos sentido, y pídeles lo mismo a todas. Una calificación alta con pocas reseñas dice menos que una similar con muchas, y que una agencia no tenga reseñas en un directorio tampoco la descarta.',
          ],
          bullets: [
            'Un caso de complejidad parecida a la tuya, y qué parte hicieron exactamente.',
            'Dos clientes a quienes puedas llamar.',
            'Una propuesta con el mismo alcance que las demás, para comparar precios en igualdad.',
            'Por escrito: rondas de revisión, propiedad del código y del dominio, y qué pasa después del lanzamiento.',
          ],
        },
        {
          heading: 'Cuándo no necesitas una agencia',
          paragraphs: [
            'Si tu sitio es sencillo y ya tienes el contenido, un buen freelance suele costar bastante menos. Si apenas estás validando tu negocio, una plantilla bien configurada te deja probar sin gastar de más. Una agencia empieza a tener sentido cuando el proyecto necesita varias disciplinas o cuando el sitio es tu principal canal de ventas.',
          ],
        },
      ],
      cta: {
        heading: '¿Quieres incluirnos en tu comparación?',
        text: 'Cuéntanos tu proyecto y agendamos una llamada de 30 minutos sin costo. Si otra agencia de esta lista te conviene más, te lo vamos a decir.',
        label: 'Agenda una llamada',
      },
      linkLabel: 'Mejores agencias de diseño web en México',
      breadcrumb: 'Agencias en México',
    },
    en: {
      seo: {
        title: 'Best web design agencies in Mexico 2027: which to choose?',
        description:
          'They all claim to do the same thing. Compare eight web design and UX/UI agencies in Mexico by focus, city and project type before you ask for a quote.',
        keywords:
          'best web design agencies in Mexico, web design companies Mexico, UX/UI agencies Mexico, Mexican web design agency, compare web design agencies',
      },
      title: 'The best web design agencies in Mexico, and which one suits you',
      excerpt:
        'What sets each one apart, the kind of project it suits, and what to ask before you request a quote.',
      intro: [
        'Looking for a web design agency or company in Mexico gets tiring fast: they all say they do the same thing and every portfolio looks good. So we put together this list of eight options and what sets each one apart, so you reach your first calls with fewer names and better questions.',
      ],
      sections: [
        {
          heading: 'Aurin: web design, UX/UI, branding and SEO from one team since 1998',
          paragraphs: [
            '**If your site has to bring in customers and not just look good, your search can end here.** Aurin is a Mexican agency with an office in Cuernavaca. We started in 1998, the same year as Google, and today one team handles everything: web design, web development, UX/UI, branding and SEO.',
            'Why talk to us before you keep comparing:',
          ],
          bullets: [
            '**Experience you cannot improvise.** We have been designing and building digital products since 1998. We use artificial intelligence, but every decision comes from experience with real users.',
            '**One accountable team.** You do not coordinate vendors or lose time between a design studio and a separate developer. If something goes wrong, you already know who to talk to.',
            '**You know what you pay before you sign.** After a free 30-minute call, we quote with a fixed scope, broken down by stage, with deliverables and dates.',
            '**Your data is yours.** We hand over every site with Google Analytics and Search Console in your name, so you can measure results from launch day.',
            '**Real projects in several countries.** Our portfolio includes Monetix, Fortrade, Elite Home Health, the Orquesta Sinfónica de Minería and CEIICH-UNAM. We have clients in Mexico, the United States, Canada, Spain, the Dominican Republic and other Latin American countries, and we work remotely with weekly reviews.',
          ],
          cta: {
            heading: 'Stop comparing and tell us about your project',
            text: 'One message is enough to get started. We will quote it with a fixed scope and contact you as soon as possible.',
            label: 'Get a quote',
          },
        },
        {
          heading: 'Aurin services: web design, UX/UI, branding and SEO',
          paragraphs: [
            'You can hire one service or all of them. The team is the same, so your brand, your site and your digital product speak the same language.',
          ],
          bullets: [
            '**Website design and development:** corporate sites and landing pages on WordPress, Webflow or Shopify, or custom-built with Astro and React. Every site includes Spanish and English versions, contact forms and a WhatsApp button. Online stores, payments, client portals and booking are built as custom work.',
            '**UX/UI design for apps and platforms:** research, flows, clickable prototypes and interfaces for iOS and Android apps, client portals and dashboards, ready for development. If the platform is web, we build it too.',
            '**Branding and corporate identity:** brand strategy, naming when needed, logo, visual system and identity manual, with editable source files and a guide your team can actually use.',
            '**SEO and Google rankings:** sites optimized from launch, and redesigns that protect the rankings you already have.',
          ],
        },
        {
          heading: 'BluePixel: digital product and software engineering',
          paragraphs: [
            'Based in Mexico City, it combines UX/UI and product strategy with software engineering and AI agents. A fit if you are building a platform rather than a site.',
          ],
        },
        {
          heading: 'Contra Studio: sites for SaaS and B2B',
          paragraphs: [
            'With offices in Mexico City, New York and Bogotá, it does UX/UI, web design and development. A fit for software and B2B companies.',
          ],
        },
        {
          heading: 'Lava Studio: sites, online stores and systems',
          paragraphs: [
            'From Zapopan, Jalisco, it builds custom websites, online stores and portals, plus apps and Odoo ERP systems. A fit if you also need to connect internal systems to your site.',
          ],
        },
        {
          heading: 'Multiplica: experience consulting for large companies',
          paragraphs: [
            'A consultancy with an office in Mexico City that covers user experience, technology and conversion optimization. A fit for corporations that need a large team inside their processes.',
          ],
        },
        {
          heading: 'Nett: UX/UI and brand in Monterrey',
          paragraphs: [
            'It describes itself as a design agency for UX/UI, content, branding and innovation. A fit if you want an agency in Monterrey that combines digital product and brand.',
          ],
        },
        {
          heading: 'Source Code: websites and online stores',
          paragraphs: [
            'From Mexico City it builds websites and online stores, with SEO and maintenance. A fit for companies that want a commercial site and to stay with the same vendor afterward.',
          ],
        },
        {
          heading: 'UiX: UX/UI consulting and product design',
          paragraphs: [
            'From Mexico City it offers UX/UI consulting, service design and product design. A fit for companies with a digital product that needs research and ongoing improvement.',
          ],
        },
        {
          heading: 'How we built this list',
          paragraphs: [
            'For the other seven agencies we reviewed their public information on November 4, 2026. What you see is what each one says it does. None paid to appear. We did not hire any of them, so this does not assess the quality of their work. Their services may change over time: confirm them before you decide.',
          ],
        },
        {
          heading: 'How to compare your finalists',
          paragraphs: [
            'Narrow it to two or three agencies, including us if we make sense for you, and ask them all for the same things. A high rating from a few reviews says less than a similar one from many, and an agency without reviews on a directory is not ruled out either.',
          ],
          bullets: [
            'A case of similar complexity to yours, and exactly which part they did.',
            'Two clients you can call.',
            'A proposal with the same scope as the others, so prices compare fairly.',
            'In writing: review rounds, ownership of the code and domain, and what happens after launch.',
          ],
        },
        {
          heading: 'When you do not need an agency',
          paragraphs: [
            'If your site is simple and your content is ready, a good freelancer usually costs considerably less. If you are still validating the business, a well-configured template lets you test without overspending. An agency starts to make sense when the project needs several disciplines or when the site is your main sales channel.',
          ],
        },
      ],
      cta: {
        heading: 'Want to add us to your comparison?',
        text: 'Tell us about your project and we will set up a free 30-minute call. If another agency on this list suits you better, we will say so.',
        label: 'Book a call',
      },
      linkLabel: 'Best web design agencies in Mexico',
      breadcrumb: 'Agencies in Mexico',
    },
  },
};
