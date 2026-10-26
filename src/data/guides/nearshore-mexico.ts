import type { Guide } from './types';

/**
 * Guía — "contratar una agencia de diseño nearshore en México".
 *
 * Escrita para empresas de EE. UU. y Canadá: es la puerta informacional de la
 * línea nearshore premium (us-nearshore, us-ux-nearshore y los sectores de
 * alto nivel). Por eso no enlaza landings por ciudad: las de Houston, Dallas,
 * etc. son para el negocio latino, otro público.
 *
 * Incluye cuándo NO conviene nearshore, por la misma razón que la guía de
 * elegir agencia: es lo que la separa de un folleto.
 */
export const nearshoreMexico: Guide = {
  id: 'nearshore-mexico',
  status: 'live',
  authors: ['elias-aquique'],
  slug: {
    es: 'contratar-agencia-de-diseno-nearshore-en-mexico',
    en: 'hiring-a-nearshore-design-agency-in-mexico',
  },
  published: '2026-10-23',
  updated: '2026-10-23',
  relatedLandings: [],
  relatedSectors: ['us-nearshore', 'us-ux-nearshore', 'us-ux-ai-startups', 'us-wealth-management', 'us-luxury-real-estate'],
  copy: {
    es: {
      seo: {
        title: 'Contratar una agencia de diseño nearshore en México | Aurin',
        description:
          'Qué revisar antes de contratar diseño web o UX/UI nearshore en México desde EE. UU. o Canadá: horario, idioma, contratos, propiedad intelectual y pagos.',
        keywords:
          'agencia nearshore México, diseño web nearshore, diseño UX/UI nearshore, contratar agencia en México desde Estados Unidos, outsourcing diseño México',
      },
      title: 'Contratar una agencia de diseño nearshore en México',
      excerpt:
        'Horario compartido, buena relación entre calidad y costo, y un vuelo corto de distancia. Esto es lo que conviene revisar para que funcione, y cuándo no es la opción correcta.',
      intro: [
        'Cada vez más empresas de Estados Unidos y Canadá contratan su diseño web y de producto en México. Las razones suelen ser las mismas: trabajar en el mismo horario que su equipo, conseguir calidad de agencia sin los costos de una gran ciudad estadounidense y tener cerca a un equipo con el que se puede hablar en tiempo real, no a doce horas de diferencia.',
        'Pero nearshore no es una garantía por sí mismo. Funciona muy bien cuando se eligen bien el equipo y las reglas de trabajo, y sale mal por las mismas razones que sale mal cualquier proveedor remoto. Esta guía reúne lo que conviene revisar antes de firmar.',
      ],
      sections: [
        {
          heading: 'Por qué nearshore, y por qué México',
          paragraphs: [
            '**Horario.** Desde 2022 casi todo México mantiene el mismo horario todo el año, alineado con el horario del centro de Estados Unidos en invierno y a una hora en verano. Con la costa este o la oeste la diferencia es de una o dos horas: hay jornada compartida completa para llamadas, revisiones y decisiones en el mismo día.',
            '**Cercanía.** Los vuelos desde las principales ciudades de Estados Unidos son cortos, y muchas veces directos. Un taller presencial al inicio del proyecto es viable, no una expedición.',
            '**Costo y calidad.** El argumento no es “más barato”: es tener un equipo con experiencia sin pagar los costos fijos de una agencia en Nueva York o San Francisco. Si alguien te vende nearshore solo por precio, ese es el primer foco rojo.',
          ],
        },
        {
          heading: 'Lo que de verdad importa: la comunicación',
          paragraphs: [
            'Los proyectos remotos rara vez fallan por falta de talento. Fallan porque nadie sabe en qué va el proyecto o porque las decisiones se pierden entre correos. Antes de contratar, revisa esto:',
          ],
          bullets: [
            'Quién va a ser tu contacto diario y qué tan cómodo trabaja en inglés, hablado y escrito.',
            'Con qué frecuencia hay reuniones y qué se entrega por escrito después de cada una.',
            'Qué herramientas usan para diseño, tareas y mensajes, y si pueden trabajar dentro de las tuyas.',
            'Cómo reportan avance entre reuniones, para que no tengas que preguntar.',
            'Si quienes diseñan participan en las llamadas o todo pasa por un intermediario.',
          ],
        },
        {
          heading: 'Contratos, propiedad intelectual y pagos',
          paragraphs: [
            'Contratar a una empresa en otro país agrega preguntas que con un proveedor local se dan por hechas. Ninguna es complicada, pero todas conviene resolverlas por escrito.',
          ],
          bullets: [
            '**Propiedad intelectual.** El contrato debe decir que el diseño, el código y los archivos son tuyos al pagarse. Sin esa cláusula, la propiedad puede quedar en el aire.',
            '**Confidencialidad.** Si vas a compartir información del negocio o de tus usuarios, firma un acuerdo de confidencialidad antes de la primera llamada técnica.',
            '**Facturación y moneda.** Pregunta en qué moneda cobran, cómo facturan y qué documentos te entregan para tu contabilidad.',
            '**Accesos.** Las cuentas de dominio, hosting, repositorios y herramientas de diseño deben estar a nombre de tu empresa, con el proveedor como invitado.',
            '**Pagos por etapa.** Un calendario de pagos ligado a entregables protege a los dos lados mejor que un anticipo grande.',
          ],
        },
        {
          heading: 'Preguntas para la primera llamada',
          paragraphs: [
            'Estas preguntas revelan en media hora cómo trabaja un equipo, sin importar de dónde sea.',
          ],
          bullets: [
            '¿Quién del equipo va a trabajar en mi proyecto, y puedo hablar con esa persona?',
            '¿Qué proyectos parecidos al mío han hecho, y qué parte hicieron ustedes?',
            '¿Cómo es su proceso, etapa por etapa, y qué me entregan en cada una?',
            '¿Qué pasa cuando algo se retrasa, de su lado o del mío?',
            '¿Quién es dueño de todo al terminar?',
            '¿Qué pasa después del lanzamiento si necesito cambios?',
          ],
        },
        {
          heading: 'Cuándo nearshore no es la opción correcta',
          paragraphs: [
            'Si tu proyecto necesita a alguien en tu oficina todas las semanas, un equipo local va a ser más práctico. Lo mismo si el trabajo depende de conocer a fondo un mercado muy específico de tu ciudad, o si internamente nadie tiene tiempo de dar seguimiento: un proveedor remoto necesita a alguien de tu lado que decida.',
            'Y si lo único que buscas es el precio más bajo posible, nearshore probablemente no sea lo tuyo. Hay opciones más baratas; la razón para elegir México es trabajar en tu horario con un equipo de nivel, no ahorrar a cualquier costo.',
          ],
        },
        {
          heading: 'Cómo trabajamos en Aurin',
          paragraphs: [
            'Aurin es un estudio de diseño web, UX/UI y branding con sede en Cuernavaca, fundado en 1998. Diseñamos sitios web, productos digitales y marcas para empresas de Estados Unidos, Canadá, España y México, y un mismo equipo investiga, diseña y desarrolla tu proyecto, en tu mismo horario y en inglés.',
          ],
        },
      ],
      cta: {
        heading: 'Habla con nuestro equipo',
        text: 'Agenda una llamada para contarnos tu proyecto. Revisamos alcance, tiempos y forma de trabajo, y te contactaremos lo antes posible con una propuesta.',
        label: 'Agenda una llamada',
      },
      linkLabel: 'Contratar una agencia de diseño nearshore en México',
      breadcrumb: 'Agencia nearshore en México',
    },
    en: {
      seo: {
        title: 'Hiring a nearshore design agency in Mexico: what to know | Aurin',
        description:
          'What to check before hiring nearshore web or UX/UI design in Mexico from the US or Canada: time zones, communication, contracts, IP, and payments.',
        keywords:
          'nearshore design agency Mexico, nearshore web design, nearshore UX/UI design, hire a design agency in Mexico, design outsourcing Mexico',
      },
      title: 'Hiring a nearshore design agency in Mexico',
      excerpt:
        'Shared hours, strong quality for the cost, and a short flight away. Here is what to check to make it work, and when it is not the right call.',
      intro: [
        'More and more companies in the US and Canada hire their web and product design in Mexico. The reasons tend to be the same: working in the same hours as their team, getting agency-level quality without the overhead of a major US city, and having a team close enough to talk to in real time, not twelve hours away.',
        'But nearshore is not a guarantee on its own. It works very well when the team and the working rules are chosen well, and it goes wrong for the same reasons any remote vendor goes wrong. This guide collects what is worth checking before you sign.',
      ],
      sections: [
        {
          heading: 'Why nearshore, and why Mexico',
          paragraphs: [
            '**Time zone.** Since 2022 most of Mexico keeps the same time all year, matching US Central time in winter and one hour off in summer. With the East or West Coast the difference is one or two hours: there is a full shared workday for calls, reviews, and same-day decisions.',
            '**Proximity.** Flights from major US cities are short, and often direct. An in-person workshop at the start of the project is feasible, not an expedition.',
            '**Cost and quality.** The argument is not “cheaper”: it is getting an experienced team without paying the overhead of an agency in New York or San Francisco. If someone sells you nearshore on price alone, that is the first red flag.',
          ],
        },
        {
          heading: 'What actually matters: communication',
          paragraphs: [
            'Remote projects rarely fail for lack of talent. They fail because nobody knows where the project stands, or because decisions get lost in email threads. Before hiring, check this:',
          ],
          bullets: [
            'Who your day-to-day contact will be, and how comfortable they are working in English, spoken and written.',
            'How often there are meetings, and what gets sent in writing after each one.',
            'Which tools they use for design, tasks, and messaging, and whether they can work inside yours.',
            'How they report progress between meetings, so you never have to ask.',
            'Whether the designers join the calls or everything goes through a middleman.',
          ],
        },
        {
          heading: 'Contracts, intellectual property, and payments',
          paragraphs: [
            'Hiring a company in another country adds questions you take for granted with a local vendor. None of them are complicated, but all of them are worth settling in writing.',
          ],
          bullets: [
            '**Intellectual property.** The contract should state that the design, code, and files are yours once paid. Without that clause, ownership can be left up in the air.',
            '**Confidentiality.** If you will share business or user information, sign an NDA before the first technical call.',
            '**Invoicing and currency.** Ask what currency they bill in, how they invoice, and what documents you get for your books.',
            '**Access.** Domain, hosting, repository, and design-tool accounts should be in your company’s name, with the vendor as a guest.',
            '**Payments by milestone.** A payment schedule tied to deliverables protects both sides better than a large upfront deposit.',
          ],
        },
        {
          heading: 'Questions for the first call',
          paragraphs: [
            'These questions reveal in half an hour how a team works, wherever it is based.',
          ],
          bullets: [
            'Who on the team will work on my project, and can I talk to them?',
            'What projects similar to mine have you done, and which part did you do?',
            'What is your process, stage by stage, and what do I get at each one?',
            'What happens when something runs late, on your side or mine?',
            'Who owns everything at the end?',
            'What happens after launch if I need changes?',
          ],
        },
        {
          heading: 'When nearshore is not the right call',
          paragraphs: [
            'If your project needs someone in your office every week, a local team will be more practical. The same goes if the work depends on deep knowledge of a very specific local market, or if nobody internally has time to follow up: a remote vendor needs someone on your side who makes decisions.',
            'And if all you want is the lowest possible price, nearshore is probably not for you. There are cheaper options; the reason to choose Mexico is working in your hours with a high-caliber team, not saving at any cost.',
          ],
        },
        {
          heading: 'How we work at Aurin',
          paragraphs: [
            'Aurin is a web design, UX/UI, and branding studio based in Cuernavaca, founded in 1998. We design websites, digital products, and brands for companies in the United States, Canada, Spain, and Mexico, and one team handles research, design, and development of your project, in your hours and in English.',
          ],
        },
      ],
      cta: {
        heading: 'Talk to our team',
        text: 'Book a call to tell us about your project. We review scope, timing, and how we would work together, and we will get back to you as soon as possible with a proposal.',
        label: 'Book a call',
      },
      linkLabel: 'Hiring a nearshore design agency in Mexico',
      breadcrumb: 'Nearshore design agency in Mexico',
    },
  },
};
