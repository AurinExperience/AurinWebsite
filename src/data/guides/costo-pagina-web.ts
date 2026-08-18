import type { Guide } from './types';

/**
 * Guía 1 — "cuánto cuesta una página web en México".
 *
 * Es la búsqueda informacional con más volumen de todo el tema y hoy solo se
 * responde dentro de un FAQ de las landings. Deliberadamente NO inventa cifras
 * de mercado: explica qué mueve el precio y cómo leer una cotización, que es lo
 * que el lector puede verificar por su cuenta.
 */
export const costoPaginaWeb: Guide = {
  id: 'costo-pagina-web',
  status: 'live',
  slug: {
    es: 'cuanto-cuesta-una-pagina-web-en-mexico',
    en: 'how-much-does-a-website-cost-in-mexico',
  },
  published: '2026-08-18',
  updated: '2026-08-18',
  relatedLandings: ['cdmx', 'monterrey', 'queretaro'],
  copy: {
    es: {
      seo: {
        title: '¿Cuánto cuesta una página web en México? Guía 2026 | Aurin',
        description:
          'Qué mueve el precio de un sitio web en México, en qué se diferencian plantilla, freelance y agencia, y cómo leer una cotización antes de firmarla.',
        keywords:
          'cuánto cuesta una página web, precio página web México, costo diseño web, cotización sitio web, cuánto cobrar por una página web',
      },
      title: '¿Cuánto cuesta una página web en México?',
      excerpt:
        'Nadie te puede dar un precio serio sin saber el alcance. Esto es lo que realmente lo mueve, y las preguntas que separan una cotización honesta de una que se va a inflar a mitad del proyecto.',
      intro: [
        'Es la primera pregunta de todo el mundo y casi nunca se responde bien. Si buscas “cuánto cuesta una página web” vas a encontrar desde cinco mil pesos hasta cifras de seis dígitos, y ambas pueden ser precios legítimos para trabajos completamente distintos.',
        'El problema es que la palabra “página web” describe cosas que no se parecen entre sí: una plantilla configurada en un fin de semana y un sitio diseñado desde cero con investigación, arquitectura y desarrollo a medida. Esta guía no te va a dar un número, porque cualquiera que te lo dé sin conocer tu proyecto está adivinando. Te va a dar algo más útil: entender qué estás comprando y cómo evaluar lo que te cotizan.',
      ],
      sections: [
        {
          heading: 'Las cinco variables que mueven el precio',
          paragraphs: [
            'Prácticamente todas las diferencias de costo entre una propuesta y otra caben en estas cinco. Cuando compares cotizaciones, compáralas aquí y no en el total.',
          ],
          bullets: [
            'Número de pantallas únicas. No cuentan las páginas repetidas: veinte fichas de producto con la misma estructura son una pantalla diseñada, no veinte.',
            'Si el diseño parte de cero o de un sistema existente. Diseñar desde tu identidad cuesta más que adaptar una plantilla, y se nota exactamente en cuánto te pareces al resto de tu sector.',
            'Integraciones. Un formulario que manda correo es barato. Un motor de reservas, una pasarela de pago, una conexión a tu ERP o accesos por cliente son proyectos dentro del proyecto.',
            'Producción de contenido. Si tú entregas textos y fotos, el proyecto avanza. Si hay que escribirlos y producirlos, es una partida aparte y suele ser la que más se subestima.',
            'Idiomas. Un sitio bilingüe bien hecho no es traducir: es una estructura paralela con URLs propias y contenido adaptado. Cuesta cerca del doble en contenido, no en desarrollo.',
          ],
        },
        {
          heading: 'Los tres niveles del mercado mexicano',
          paragraphs: [
            'A grandes rasgos hay tres formas de resolver un sitio en México, y las tres son válidas según lo que necesites. El error no es elegir la barata: es elegir una esperando lo que da otra.',
            '**Plantilla configurada.** Compras un tema, lo llenas con tu contenido y ajustas colores. Es la opción más accesible y para un negocio que apenas arranca puede ser suficiente. Lo que pagas en cambio es velocidad de carga, parecido visual con miles de sitios iguales y dificultad para modificarlo cuando crezcas.',
            '**Freelance.** Un profesional resuelve diseño y desarrollo. Buena relación precio-resultado en proyectos acotados, respuesta rápida y trato directo. Sus límites aparecen cuando el proyecto necesita investigación, arquitectura, diseño y desarrollo al mismo tiempo, o cuando tiene que seguir vivo un año después y esa persona ya tomó otro trabajo.',
            '**Agencia o estudio.** Un equipo cubre estrategia, UX, UI y desarrollo en paralelo, con proceso y entregables por etapa. Cuesta más y tiene sentido cuando el sitio carga peso comercial real: cuando es tu principal canal de contacto, cuando compites en un sector saturado o cuando el error sale más caro que el proyecto.',
          ],
        },
        {
          heading: 'Por qué nadie serio te cotiza por teléfono',
          paragraphs: [
            'Si alguien te da un precio antes de preguntarte a qué te dedicas, a quién le vendes y qué tiene que lograr el sitio, ese precio no significa nada. O está cotizando la plantilla que ya tiene lista, o va a ajustarlo a la mitad del proyecto cuando aparezca lo que no preguntó.',
            'Una cotización útil llega después de una conversación de diagnóstico y describe el alcance con suficiente detalle como para que ambas partes sepan qué está incluido. Eso protege a los dos: a ti de los costos que aparecen después, y a quien te cotiza de un proyecto que crece sin que nadie lo haya acordado.',
          ],
        },
        {
          heading: 'Qué debe traer una cotización antes de que la firmes',
          paragraphs: [
            'Esta es la lista con la que puedes revisar cualquier propuesta, venga de nosotros o de quien sea. Si falta algo de aquí, pregúntalo antes y no después.',
          ],
          bullets: [
            'Alcance por escrito: cuántas pantallas, cuáles y qué incluye cada una.',
            'Qué contenido entregas tú y qué se produce, con quién es responsable de cada cosa.',
            'Número de rondas de revisión incluidas y qué pasa cuando se agotan.',
            'Fechas por etapa, no solo una fecha final de entrega.',
            'Quién es el dueño del código, del dominio y del hospedaje al terminar. La respuesta correcta es que tú.',
            'Qué pasa después del lanzamiento: capacitación, garantía sobre errores y costo del mantenimiento.',
            'Si hay migración, cómo se conserva el posicionamiento actual.',
          ],
        },
        {
          heading: 'El costo que nadie cotiza',
          paragraphs: [
            'Hay un gasto que no aparece en ninguna propuesta y suele ser el más alto: el sitio que no genera contactos. Un sitio barato que no convierte no costó poco, costó todo lo que invertiste más los clientes que no llegaron durante los años que estuvo en línea.',
            'Por eso la pregunta útil no es cuánto cuesta, sino cuánto tiene que generar para justificarse. Si un cliente promedio te deja veinte mil pesos y el sitio te trae dos al año, ya se pagó. Ese cálculo cambia por completo la conversación de precio, y es el que conviene hacer antes de pedir la primera cotización.',
          ],
        },
      ],
      cta: {
        heading: 'Cotiza tu proyecto con alcance cerrado',
        text: 'Empezamos con una llamada de diagnóstico para entender qué necesita tu negocio. Después te enviamos una cotización cerrada, con entregables y fechas por etapa, sin costos ocultos.',
        label: 'Solicita tu cotización',
      },
      linkLabel: '¿Cuánto cuesta una página web en México?',
      breadcrumb: 'Cuánto cuesta una página web',
    },
    en: {
      seo: {
        title: 'How much does a website cost in Mexico? 2026 guide | Aurin',
        description:
          'What drives the price of a website in Mexico, how a template, a freelancer, and an agency really differ, and how to read a quote before you sign.',
        keywords:
          'website cost Mexico, how much does a website cost, web design pricing Mexico, website quote, cost of web design',
      },
      title: 'How much does a website cost in Mexico?',
      excerpt:
        'No one can give you a serious price without knowing the scope. Here is what actually drives it, and the questions that separate an honest quote from one that inflates halfway through.',
      intro: [
        'It is everyone’s first question and it is almost never answered well. Search for what a website costs in Mexico and you will find everything from a few thousand pesos to six-figure numbers, and both can be legitimate prices for completely different work.',
        'The problem is that “website” describes things that have nothing in common: a template configured over a weekend, and a site designed from scratch with research, architecture, and custom development. This guide will not give you a number, because anyone who gives you one without knowing your project is guessing. It gives you something more useful: understanding what you are buying and how to evaluate what you are quoted.',
      ],
      sections: [
        {
          heading: 'The five variables that move the price',
          paragraphs: [
            'Practically every cost difference between one proposal and another fits into these five. When you compare quotes, compare them here and not on the total.',
          ],
          bullets: [
            'Number of unique screens. Repeated pages do not count: twenty product pages with the same structure are one designed screen, not twenty.',
            'Whether design starts from scratch or from an existing system. Designing from your identity costs more than adapting a template, and it shows in exactly how much you resemble the rest of your sector.',
            'Integrations. A form that sends an email is cheap. A booking engine, a payment gateway, an ERP connection, or per-client logins are projects inside the project.',
            'Content production. If you hand over copy and photos, the project moves. If they have to be written and produced, that is a separate line item and usually the most underestimated one.',
            'Languages. A proper bilingual site is not translation: it is a parallel structure with its own URLs and adapted content. It roughly doubles the content work, not the development.',
          ],
        },
        {
          heading: 'The three tiers of the Mexican market',
          paragraphs: [
            'Broadly there are three ways to solve a website in Mexico, and all three are valid depending on what you need. The mistake is not picking the cheap one: it is picking one while expecting what another delivers.',
            '**Configured template.** You buy a theme, fill it with your content, and adjust colors. It is the most accessible option and for a business just starting out it can be enough. What you pay instead is load speed, visual similarity to thousands of identical sites, and difficulty modifying it as you grow.',
            '**Freelancer.** One professional handles design and development. Good value on contained projects, fast turnaround, direct contact. The limits appear when a project needs research, architecture, design, and development at the same time, or when it has to stay alive a year later and that person has taken another job.',
            '**Agency or studio.** A team covers strategy, UX, UI, and development in parallel, with a process and deliverables per stage. It costs more and makes sense when the site carries real commercial weight: when it is your main contact channel, when you compete in a crowded sector, or when the mistake costs more than the project.',
          ],
        },
        {
          heading: 'Why nobody serious quotes you over the phone',
          paragraphs: [
            'If someone gives you a price before asking what you do, who you sell to, and what the site has to achieve, that price means nothing. Either they are quoting the template they already have ready, or they will adjust it halfway through when whatever they did not ask about shows up.',
            'A useful quote comes after a diagnostic conversation and describes the scope in enough detail that both parties know what is included. That protects both sides: you from costs that appear later, and whoever quotes you from a project that grows without anyone having agreed to it.',
          ],
        },
        {
          heading: 'What a quote must contain before you sign it',
          paragraphs: [
            'This is the checklist you can run any proposal through, ours or anyone else’s. If something here is missing, ask before rather than after.',
          ],
          bullets: [
            'Written scope: how many screens, which ones, and what each includes.',
            'Which content you deliver and which gets produced, with clear ownership for each.',
            'Number of review rounds included and what happens once they run out.',
            'Dates per stage, not only one final delivery date.',
            'Who owns the code, the domain, and the hosting at the end. The correct answer is you.',
            'What happens after launch: training, bug warranty, and maintenance cost.',
            'If there is a migration, how current rankings are preserved.',
          ],
        },
        {
          heading: 'The cost nobody quotes',
          paragraphs: [
            'There is one expense that appears in no proposal and is usually the highest: a site that generates no inquiries. A cheap site that does not convert did not cost little, it cost everything you invested plus the clients who never arrived during the years it stayed online.',
            'So the useful question is not what it costs, but how much it has to generate to justify itself. If an average client is worth twenty thousand pesos to you and the site brings two a year, it has already paid for itself. That calculation changes the price conversation entirely, and it is worth doing before you request the first quote.',
          ],
        },
      ],
      cta: {
        heading: 'Get a fixed-scope quote for your project',
        text: 'We start with a diagnostic call to understand what your business needs. Then we send a fixed quote, with deliverables and dates per stage, and no hidden costs.',
        label: 'Request your quote',
      },
      linkLabel: 'How much does a website cost in Mexico?',
      breadcrumb: 'Website cost in Mexico',
    },
  },
};
