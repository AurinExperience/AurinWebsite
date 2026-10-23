import type { Guide } from './types';

/**
 * Guía — "cuánto tarda hacer una página web".
 *
 * Quien la busca ya decidió contratar y está armando su calendario. Igual que
 * la guía de costos, NO promete plazos ni inventa cifras: explica las etapas,
 * qué alarga un proyecto de verdad y cómo leer un calendario. Prometer rapidez
 * es justo lo que no queremos (ver reglas de copy).
 */
export const tiempoPaginaWeb: Guide = {
  id: 'tiempo-pagina-web',
  status: 'live',
  authors: ['elias-aquique'],
  slug: {
    es: 'cuanto-tarda-hacer-una-pagina-web',
    en: 'how-long-does-it-take-to-build-a-website',
  },
  published: '2026-10-23',
  updated: '2026-10-23',
  relatedLandings: ['cdmx', 'queretaro', 'morelos'],
  relatedSectors: ['consultoras', 'constructoras', 'medicos'],
  copy: {
    es: {
      seo: {
        title: '¿Cuánto tarda hacer una página web? Etapas reales | Aurin',
        description:
          'Las etapas de un proyecto web, lo que de verdad alarga los tiempos y qué debe traer un calendario serio antes de que lo firmes.',
        keywords:
          'cuánto tarda hacer una página web, tiempo de desarrollo web, cuánto se tarda un sitio web, etapas de un proyecto web, calendario diseño web',
      },
      title: '¿Cuánto tarda hacer una página web?',
      excerpt:
        'Casi ningún proyecto se retrasa por el diseño o el código. Se retrasa por el contenido, las aprobaciones y el alcance que cambia a la mitad. Así se ve un calendario realista.',
      intro: [
        'Después de “cuánto cuesta”, es la pregunta que más se hace antes de contratar. Y tiene el mismo problema: “página web” describe proyectos que no se parecen entre sí. Una plantilla configurada y un sitio diseñado desde cero con investigación, arquitectura y desarrollo a medida no se miden con la misma regla.',
        'Hay otra parte que casi nadie dice: el tiempo de un proyecto no depende solo de quien lo hace. Depende igual de qué tan rápido llegan los textos, las fotos, los accesos y las aprobaciones de tu lado. Esta guía explica las etapas, qué las alarga y cómo saber si el calendario que te proponen es realista.',
      ],
      sections: [
        {
          heading: 'Las etapas de un proyecto web',
          paragraphs: [
            'Un sitio hecho a medida pasa por estas cinco etapas. Pueden traslaparse un poco, pero ninguna se puede saltar sin pagarlo después.',
          ],
          bullets: [
            '**Diagnóstico y alcance.** Se define qué tiene que lograr el sitio, para quién y con qué pantallas. Termina con un alcance por escrito y una cotización cerrada.',
            '**Arquitectura y contenido.** Se decide la estructura: qué páginas existen, qué va en cada una y en qué orden. Aquí se planea el contenido, que es lo que más tiempo toma conseguir.',
            '**Diseño.** Primero la dirección visual con una o dos pantallas clave; ya aprobada, el resto de las pantallas y sus versiones para móvil.',
            '**Desarrollo.** Se construye el sitio, se conecta con formularios, analítica y las integraciones que haga falta, y se carga el contenido real.',
            '**Pruebas y lanzamiento.** Revisión en distintos dispositivos y navegadores, velocidad, formularios, redirecciones si había un sitio anterior, y publicación.',
          ],
        },
        {
          heading: 'Lo que de verdad alarga un proyecto',
          paragraphs: [
            'Cuando un proyecto se retrasa, casi nunca es porque el diseño o el código se complicaron. Son estas cinco cosas, y conviene saberlas antes de empezar.',
          ],
          bullets: [
            '**El contenido que no llega.** Textos y fotos son la causa número uno. Sin contenido real no se puede cerrar el diseño ni cargar el sitio.',
            '**Muchas personas aprobando.** Cada persona más que tiene que dar el visto bueno agrega una vuelta de revisión, y las opiniones que se contradicen regresan el trabajo a la etapa anterior.',
            '**El alcance que cambia a la mitad.** Una sección nueva o una integración que no estaba en la cotización mueve todas las fechas que siguen.',
            '**Terceros.** Accesos al dominio, al hosting, a una pasarela de pago o a un sistema interno dependen de proveedores que no controla nadie en el proyecto.',
            '**La migración de un sitio existente.** Conservar el posicionamiento exige mapear URLs y redirecciones; es trabajo que no se ve pero no se puede omitir.',
          ],
        },
        {
          heading: 'Lo que puedes hacer para que avance',
          paragraphs: [
            'La mitad del calendario está de tu lado, y eso es una buena noticia: significa que puedes acortarlo sin sacrificar calidad.',
          ],
          bullets: [
            'Nombra a una sola persona que decide. Puede consultar a quien quiera, pero las aprobaciones salen de ella.',
            'Empieza a preparar textos y fotos desde el primer día, no cuando el diseño esté listo.',
            'Junta los comentarios de cada revisión en un solo documento, en lugar de mandarlos por partes.',
            'Ten listos los accesos al dominio, al hosting y a la analítica antes de que se necesiten.',
            'Si hay una fecha que no se mueve —un lanzamiento, un evento, una temporada—, dila en la primera llamada.',
          ],
        },
        {
          heading: 'Desconfía de las fechas demasiado buenas',
          paragraphs: [
            'Si alguien te promete un sitio terminado en muy poco tiempo antes de conocer tu proyecto, probablemente está hablando de otra cosa: una plantilla ya hecha, o un proceso que se salta la investigación, el contenido o las pruebas. Las tres cosas se terminan pagando después del lanzamiento.',
            'Una fecha realista llega después del diagnóstico, no antes. Y casi siempre viene con condiciones: “si el contenido llega en tal fecha” o “si las aprobaciones salen en tantos días”. Que te las digan no es poner pretextos; es la señal de que quien cotiza ya entendió de qué depende el proyecto.',
          ],
        },
        {
          heading: 'Qué debe traer un calendario serio',
          paragraphs: [
            'Con esta lista puedes revisar cualquier propuesta. Si algo falta, pídelo antes de firmar.',
          ],
          bullets: [
            'Fechas por etapa, no solo una fecha final.',
            'Qué necesita de ti cada etapa y para cuándo.',
            'Cuántas rondas de revisión incluye cada entrega y cuánto tiempo tienes para cada una.',
            'Qué pasa con las fechas si el contenido o las aprobaciones se retrasan.',
            'Un periodo de pruebas antes del lanzamiento, separado del desarrollo.',
            'Qué sigue después de publicar: ajustes, capacitación y garantía.',
          ],
        },
      ],
      cta: {
        heading: 'Arma un calendario realista para tu proyecto',
        text: 'En la llamada de diagnóstico revisamos alcance, contenido y quién aprueba. Con eso te enviamos una cotización con fechas por etapa y lo que necesitamos de ti en cada una.',
        label: 'Agenda tu diagnóstico',
      },
      linkLabel: '¿Cuánto tarda hacer una página web?',
      breadcrumb: 'Cuánto tarda una página web',
    },
    en: {
      seo: {
        title: 'How long does it take to build a website? Real stages | Aurin',
        description:
          'The stages of a website project, what really stretches the timeline, and what a serious schedule should include before you sign it.',
        keywords:
          'how long does it take to build a website, website timeline, web design project timeline, website development stages, web design schedule',
      },
      title: 'How long does it take to build a website?',
      excerpt:
        'Almost no project runs late because of design or code. It runs late because of content, approvals, and scope that changes halfway. Here is what a realistic schedule looks like.',
      intro: [
        'After “how much does it cost,” it is the question everyone asks before hiring. And it has the same problem: “website” describes projects that have nothing in common. A configured template and a site designed from scratch with research, architecture, and custom development are not measured with the same ruler.',
        'There is another part almost nobody mentions: a project’s timeline does not depend only on whoever builds it. It depends just as much on how fast copy, photos, access, and approvals arrive from your side. This guide explains the stages, what stretches them, and how to tell whether the schedule you are offered is realistic.',
      ],
      sections: [
        {
          heading: 'The stages of a website project',
          paragraphs: [
            'A custom site goes through these five stages. They can overlap a little, but none can be skipped without paying for it later.',
          ],
          bullets: [
            '**Discovery and scope.** You define what the site has to achieve, for whom, and with which screens. It ends with a written scope and a fixed quote.',
            '**Architecture and content.** The structure gets decided: which pages exist, what goes on each, and in what order. This is where content is planned, and content is what takes longest to gather.',
            '**Design.** First the visual direction with one or two key screens; once approved, the rest of the screens and their mobile versions.',
            '**Development.** The site is built, connected to forms, analytics, and whatever integrations it needs, and loaded with the real content.',
            '**Testing and launch.** Checks across devices and browsers, speed, forms, redirects if there was a previous site, and go-live.',
          ],
        },
        {
          heading: 'What actually stretches a project',
          paragraphs: [
            'When a project runs late, it is almost never because the design or the code got complicated. It is these five things, and they are worth knowing before you start.',
          ],
          bullets: [
            '**Content that does not arrive.** Copy and photos are the number one cause. Without real content the design cannot be closed and the site cannot be loaded.',
            '**Too many approvers.** Every additional person who has to sign off adds a review round, and conflicting opinions send work back to the previous stage.',
            '**Scope that changes halfway.** A new section or an integration that was not in the quote moves every date after it.',
            '**Third parties.** Access to the domain, the hosting, a payment gateway, or an internal system depends on vendors nobody on the project controls.',
            '**Migrating an existing site.** Keeping your rankings requires mapping URLs and redirects; it is invisible work, but it cannot be skipped.',
          ],
        },
        {
          heading: 'What you can do to keep it moving',
          paragraphs: [
            'Half the schedule sits on your side, and that is good news: it means you can shorten it without sacrificing quality.',
          ],
          bullets: [
            'Name a single decision-maker. They can consult whoever they want, but approvals come from them.',
            'Start preparing copy and photos on day one, not when the design is ready.',
            'Collect each round of feedback in a single document instead of sending it in pieces.',
            'Have access to the domain, hosting, and analytics ready before it is needed.',
            'If there is a date that cannot move —a launch, an event, a season—, say so on the first call.',
          ],
        },
        {
          heading: 'Be wary of dates that sound too good',
          paragraphs: [
            'If someone promises you a finished site in very little time before they know your project, they are probably talking about something else: a ready-made template, or a process that skips research, content, or testing. All three get paid for after launch.',
            'A realistic date comes after discovery, not before. And it almost always comes with conditions: “if content arrives by this date” or “if approvals come back within so many days.” Hearing those is not someone making excuses; it is the sign that whoever is quoting has understood what the project depends on.',
          ],
        },
        {
          heading: 'What a serious schedule should include',
          paragraphs: [
            'Run any proposal through this list. If something is missing, ask for it before you sign.',
          ],
          bullets: [
            'Dates per stage, not only a final date.',
            'What each stage needs from you, and by when.',
            'How many review rounds each delivery includes and how long you have for each.',
            'What happens to the dates if content or approvals are late.',
            'A testing period before launch, separate from development.',
            'What comes after go-live: adjustments, training, and warranty.',
          ],
        },
      ],
      cta: {
        heading: 'Build a realistic schedule for your project',
        text: 'On the discovery call we review scope, content, and who approves. Then we send you a quote with dates per stage and what we need from you at each one.',
        label: 'Book your discovery call',
      },
      linkLabel: 'How long does it take to build a website?',
      breadcrumb: 'Website timeline',
    },
  },
};
