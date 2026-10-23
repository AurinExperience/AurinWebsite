import type { Guide } from './types';

/**
 * Guía — "cuánto cuesta el diseño UX/UI de una app o plataforma".
 *
 * Es la puerta informacional de las landings de UX/UI por sector (SaaS,
 * fintech, healthtech…), que hasta ahora no tenían una guía apuntándoles.
 * Mismo criterio que la guía de costos web: sin cifras inventadas; explica qué
 * se paga, qué mueve el precio y cómo evaluar una propuesta.
 */
export const costoUxUi: Guide = {
  id: 'costo-ux-ui',
  status: 'live',
  authors: ['nayeli-quinto'],
  slug: {
    es: 'cuanto-cuesta-el-diseno-ux-ui-de-una-app',
    en: 'how-much-does-ux-ui-design-cost',
  },
  published: '2026-10-23',
  updated: '2026-10-23',
  relatedLandings: ['cdmx', 'monterrey', 'jalisco'],
  relatedSectors: ['ux-saas', 'ux-fintech', 'ux-healthtech', 'us-ux-ai-startups', 'us-ux-nearshore'],
  copy: {
    es: {
      seo: {
        title: '¿Cuánto cuesta el diseño UX/UI de una app o plataforma? | Aurin',
        description:
          'Qué pagas cuando contratas diseño UX/UI, qué mueve el precio de una app o plataforma y cómo evaluar una propuesta antes de firmarla.',
        keywords:
          'cuánto cuesta diseño UX/UI, precio diseño de app, costo diseño UX, cotización diseño de producto digital, diseño UX/UI México',
      },
      title: '¿Cuánto cuesta el diseño UX/UI de una app o plataforma?',
      excerpt:
        'En UX/UI no pagas pantallas: pagas decisiones. Esto es lo que se incluye, lo que mueve el precio y lo que debe traer una propuesta seria.',
      intro: [
        'Cotizar el diseño de una app o una plataforma confunde porque se parece poco a cotizar un sitio web. En un sitio, el número de páginas da una idea aproximada del trabajo. En un producto digital, dos pantallas que se ven sencillas pueden esconder diez estados distintos, tres tipos de usuario y un flujo de pago con todos sus errores posibles.',
        'Por eso esta guía no te da un número. Te explica qué estás comprando cuando contratas diseño UX/UI, qué hace que un proyecto cueste más que otro y cómo comparar propuestas que, a primera vista, parecen no tener nada en común.',
      ],
      sections: [
        {
          heading: 'Qué estás pagando cuando pagas UX/UI',
          paragraphs: [
            'UX es cómo funciona el producto; UI es cómo se ve y se siente. Un proyecto completo cubre las dos, normalmente en este orden:',
          ],
          bullets: [
            '**Investigación.** Entender a los usuarios, el negocio y la competencia antes de dibujar nada: entrevistas, análisis de datos, revisión del producto actual si existe.',
            '**Arquitectura y flujos.** Qué puede hacer cada tipo de usuario y por qué caminos. Aquí se decide la mayor parte de la experiencia.',
            '**Prototipo.** Una versión navegable para probar los flujos con personas reales antes de invertir en desarrollo.',
            '**Interfaz y sistema de diseño.** El diseño visual de cada pantalla y sus estados, y la biblioteca de componentes que permite crecer el producto sin rediseñarlo.',
            '**Entrega a desarrollo.** Especificaciones, archivos organizados y acompañamiento mientras se construye.',
          ],
        },
        {
          heading: 'Lo que mueve el precio',
          paragraphs: [
            'Cuando compares propuestas, compáralas en estas variables y no en el total.',
          ],
          bullets: [
            '**Flujos, no pantallas.** Registrarse, pagar, reportar un problema: cada flujo completo, con sus errores y casos límite, pesa más que el número de pantallas.',
            '**Tipos de usuario.** Un producto con cliente, administrador y operador son tres experiencias que diseñar, no una.',
            '**Investigación con usuarios reales.** Agrega tiempo y costo, y es la partida que más dinero ahorra después.',
            '**Plataformas.** Web, iOS y Android comparten lógica, pero cada una tiene sus propias convenciones.',
            '**Sistema de diseño.** Partir de uno que ya existe es más rápido; crearlo desde cero es una inversión que se paga cuando el producto crece.',
            '**Regulación.** En finanzas, salud o seguros hay requisitos de seguridad, consentimiento y accesibilidad que el diseño tiene que resolver.',
          ],
        },
        {
          heading: 'Solo diseño, o diseño y desarrollo',
          paragraphs: [
            'Puedes contratar solo el diseño y desarrollarlo con tu equipo, o contratar a un equipo que haga las dos cosas. Ninguna opción es mejor en abstracto.',
            'Si tienes desarrolladores, contratar solo diseño tiene sentido, siempre que la entrega sea completa: componentes documentados, estados, comportamiento en pantallas pequeñas y alguien disponible para resolver dudas mientras se construye. El riesgo está en el traspaso: lo que no se especificó, lo decide quien programa sobre la marcha.',
            'Si no tienes equipo técnico, un estudio que diseña y desarrolla elimina ese traspaso. Las decisiones de diseño y las técnicas se toman en la misma mesa, y lo que se aprueba es lo que se construye.',
          ],
        },
        {
          heading: 'Tres formas de contratarlo',
          paragraphs: [
            '**Proyecto cerrado.** Un alcance definido, por ejemplo la primera versión de un producto, con precio y fechas fijas. Funciona cuando sabes qué quieres construir.',
            '**Por fases.** Primero una fase de descubrimiento con investigación, flujos y prototipo; con eso se cotiza el resto con precisión. Es la forma más segura cuando el producto todavía no está definido.',
            '**Equipo dedicado.** Un equipo de diseño con dedicación mensual para un producto que ya está en el mercado y evoluciona cada semana. Tiene sentido cuando el diseño es un trabajo continuo y no un proyecto con final.',
          ],
        },
        {
          heading: 'Cómo evaluar una propuesta de UX/UI',
          paragraphs: [
            'Con esta lista puedes revisar cualquier propuesta. Lo que falte, pregúntalo antes de firmar.',
          ],
          bullets: [
            'Si incluye investigación, o si parte de supuestos que nadie va a validar.',
            'Qué se entrega exactamente: prototipo navegable, archivos de diseño, sistema de componentes, especificaciones.',
            'Si hay pruebas con usuarios y en qué momento.',
            'Cuántas rondas de revisión incluye cada etapa.',
            'Quién es dueño de los archivos al terminar. La respuesta correcta es que tú.',
            'Qué acompañamiento hay durante el desarrollo.',
          ],
        },
        {
          heading: 'El costo de no hacerlo',
          paragraphs: [
            'Cambiar un flujo en un prototipo cuesta horas. Cambiarlo cuando ya está programado cuesta semanas, y a veces obliga a rehacer partes del producto que dependían de él. El diseño UX/UI no es la parte cara de un producto digital: es la que evita que el desarrollo se haga dos veces.',
          ],
        },
      ],
      cta: {
        heading: 'Cotiza el diseño de tu producto',
        text: 'Empezamos con una llamada para entender tu producto, tus usuarios y en qué etapa estás. Después te enviamos una propuesta con alcance, entregables y fechas por fase.',
        label: 'Solicita tu propuesta',
      },
      linkLabel: '¿Cuánto cuesta el diseño UX/UI de una app?',
      breadcrumb: 'Cuánto cuesta el diseño UX/UI',
    },
    en: {
      seo: {
        title: 'How much does UX/UI design cost for an app or platform? | Aurin',
        description:
          'What you pay for when you hire UX/UI design, what drives the price of an app or platform, and how to evaluate a proposal before you sign it.',
        keywords:
          'UX/UI design cost, how much does app design cost, product design pricing, UX design agency pricing, nearshore UX/UI design',
      },
      title: 'How much does UX/UI design cost for an app or platform?',
      excerpt:
        'In UX/UI you do not pay for screens: you pay for decisions. Here is what is included, what drives the price, and what a serious proposal should contain.',
      intro: [
        'Pricing the design of an app or platform is confusing because it looks very little like pricing a website. On a website, the number of pages gives a rough idea of the work. In a digital product, two screens that look simple can hide ten different states, three user types, and a payment flow with every possible error.',
        'So this guide does not give you a number. It explains what you are buying when you hire UX/UI design, what makes one project cost more than another, and how to compare proposals that at first glance seem to have nothing in common.',
      ],
      sections: [
        {
          heading: 'What you pay for when you pay for UX/UI',
          paragraphs: [
            'UX is how the product works; UI is how it looks and feels. A complete engagement covers both, usually in this order:',
          ],
          bullets: [
            '**Research.** Understanding users, the business, and the competition before drawing anything: interviews, data analysis, a review of the current product if there is one.',
            '**Architecture and flows.** What each user type can do and through which paths. Most of the experience is decided here.',
            '**Prototype.** A clickable version to test the flows with real people before investing in development.',
            '**Interface and design system.** The visual design of every screen and its states, plus the component library that lets the product grow without a redesign.',
            '**Handoff to development.** Specifications, organized files, and support while it gets built.',
          ],
        },
        {
          heading: 'What drives the price',
          paragraphs: [
            'When you compare proposals, compare them on these variables, not on the total.',
          ],
          bullets: [
            '**Flows, not screens.** Signing up, paying, reporting a problem: each complete flow, with its errors and edge cases, weighs more than the screen count.',
            '**User types.** A product with a customer, an admin, and an operator is three experiences to design, not one.',
            '**Research with real users.** It adds time and cost, and it is the line item that saves the most money later.',
            '**Platforms.** Web, iOS, and Android share logic, but each has its own conventions.',
            '**Design system.** Starting from an existing one is faster; building one from scratch is an investment that pays off as the product grows.',
            '**Regulation.** In finance, health, or insurance there are security, consent, and accessibility requirements the design has to solve.',
          ],
        },
        {
          heading: 'Design only, or design and development',
          paragraphs: [
            'You can hire design only and build it with your own team, or hire a team that does both. Neither option is better in the abstract.',
            'If you have developers, hiring design only makes sense, as long as the handoff is complete: documented components, states, behavior on small screens, and someone available to answer questions during the build. The risk is in the handoff: whatever was not specified gets decided by whoever is coding, on the fly.',
            'If you do not have a technical team, a studio that designs and develops removes that handoff. Design and technical decisions are made at the same table, and what gets approved is what gets built.',
          ],
        },
        {
          heading: 'Three ways to hire it',
          paragraphs: [
            '**Fixed-scope project.** A defined scope, for example the first version of a product, with a fixed price and dates. It works when you know what you want to build.',
            '**In phases.** First a discovery phase with research, flows, and a prototype; that makes it possible to quote the rest accurately. It is the safest route when the product is not defined yet.',
            '**Dedicated team.** A design team on a monthly engagement for a product already in the market that evolves every week. It makes sense when design is ongoing work rather than a project with an end.',
          ],
        },
        {
          heading: 'How to evaluate a UX/UI proposal',
          paragraphs: [
            'Run any proposal through this list. Whatever is missing, ask before you sign.',
          ],
          bullets: [
            'Whether it includes research, or starts from assumptions nobody will validate.',
            'Exactly what gets delivered: clickable prototype, design files, component system, specifications.',
            'Whether there is user testing, and at what point.',
            'How many review rounds each stage includes.',
            'Who owns the files at the end. The correct answer is you.',
            'What support there is during development.',
          ],
        },
        {
          heading: 'The cost of skipping it',
          paragraphs: [
            'Changing a flow in a prototype costs hours. Changing it once it is coded costs weeks, and sometimes forces rebuilding the parts of the product that depended on it. UX/UI design is not the expensive part of a digital product: it is the part that keeps development from happening twice.',
          ],
        },
      ],
      cta: {
        heading: 'Get a proposal for your product design',
        text: 'We start with a call to understand your product, your users, and what stage you are at. Then we send you a proposal with scope, deliverables, and dates per phase.',
        label: 'Request your proposal',
      },
      linkLabel: 'How much does UX/UI design cost?',
      breadcrumb: 'UX/UI design cost',
    },
  },
};
