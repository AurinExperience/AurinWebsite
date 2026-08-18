import type { Guide } from './types';

/**
 * Guía 2 — "cómo elegir agencia de diseño web".
 *
 * Búsqueda de intención comercial-informacional: quien la busca ya decidió
 * contratar y está eligiendo. Por eso el artículo dice también cuándo NO
 * contratar una agencia: es la parte que da credibilidad y la que separa esto
 * de un folleto disfrazado de guía.
 */
export const elegirAgencia: Guide = {
  id: 'elegir-agencia',
  status: 'live',
  slug: {
    es: 'como-elegir-agencia-de-diseno-web',
    en: 'how-to-choose-a-web-design-agency',
  },
  published: '2026-08-18',
  updated: '2026-08-18',
  relatedLandings: ['monterrey', 'cdmx', 'jalisco'],
  copy: {
    es: {
      seo: {
        title: 'Cómo elegir agencia de diseño web: guía práctica | Aurin',
        description:
          'Qué preguntar antes de firmar con una agencia de diseño web, las señales de alerta más comunes y cuándo te conviene más un freelance o una plantilla.',
        keywords:
          'cómo elegir agencia de diseño web, contratar agencia web, agencia o freelance, qué preguntar a una agencia web, elegir diseñador web',
      },
      title: 'Cómo elegir agencia de diseño web',
      excerpt:
        'Todas las propuestas se parecen y todos los portafolios se ven bien. Estas son las preguntas que revelan la diferencia, y las señales que conviene tomar en serio.',
      intro: [
        'Elegir agencia es difícil porque estás comprando algo que todavía no existe. No puedes probarlo antes, y las propuestas que te llegan usan las mismas palabras: estratégico, a medida, orientado a resultados. Los portafolios tampoco ayudan mucho, porque todos muestran lo mejor que hicieron y ninguno muestra el proyecto que salió mal.',
        'Lo que sí distingue es el proceso: cómo trabajan, qué preguntan antes de cotizar y qué pasa cuando algo no sale como se planeó. Esta guía es el conjunto de preguntas que revela eso en una primera llamada.',
      ],
      sections: [
        {
          heading: 'Primero: decide si de verdad necesitas una agencia',
          paragraphs: [
            'Esta es la parte que ninguna agencia escribe y por eso vale la pena empezar aquí. No siempre somos la respuesta correcta.',
            'Si tu proyecto es una página sencilla con contenido que ya tienes listo, un buen freelance te va a costar bastante menos y te va a responder más rápido. Si apenas estás validando si tu negocio funciona, una plantilla bien configurada te deja probar sin comprometer presupuesto que quizá necesites en otra cosa.',
            'Una agencia empieza a tener sentido cuando el proyecto necesita varias disciplinas al mismo tiempo —investigación, arquitectura, diseño, desarrollo—, cuando el sitio es tu principal canal comercial, o cuando tiene que seguir vivo y creciendo durante años. Si tu caso no es ninguno de esos, contratar agencia es pagar por estructura que no vas a usar.',
          ],
        },
        {
          heading: 'Las preguntas que revelan cómo trabajan',
          paragraphs: [
            'Hazlas en la primera llamada. No buscan una respuesta correcta específica, buscan ver si hay respuesta.',
          ],
          bullets: [
            '¿Qué necesitan saber de mi negocio antes de poder cotizar? Si no necesitan nada, están cotizando una plantilla.',
            '¿Quién va a trabajar en mi proyecto y con quién voy a hablar? Si son personas distintas, pregunta cuántas capas hay entre tú y quien diseña.',
            '¿Cuántos proyectos llevan al mismo tiempo? No hay número correcto, pero la respuesta te dice cuánta atención vas a recibir.',
            '¿Qué pasa si a la tercera ronda de revisión sigue sin gustarme? Lo importante no es la política, es que exista una.',
            '¿Cómo miden si el sitio funcionó después de lanzarlo? Si la respuesta es “se ve muy bien”, no hay medición.',
            '¿Me pueden mostrar un proyecto que no salió como esperaban y qué aprendieron? Es la pregunta más incómoda y la más reveladora.',
          ],
        },
        {
          heading: 'Señales de alerta',
          paragraphs: [
            'Ninguna de estas es descalificadora por sí sola, pero dos o tres juntas sí lo son.',
          ],
          bullets: [
            'Te dan un precio antes de preguntarte nada sustancial sobre tu negocio.',
            'Garantizan primer lugar en Google. Nadie puede garantizar eso, y quien lo promete o no lo sabe o lo sabe y aun así lo dice.',
            'La propuesta no dice cuántas rondas de revisión incluye ni qué pasa después.',
            'No queda claro quién es el dueño del código y del dominio al terminar.',
            'El portafolio no tiene ningún proyecto del tamaño del tuyo.',
            'Presionan para cerrar con descuento por tiempo limitado. Un proyecto que se decide por urgencia se arrepiente por meses.',
          ],
        },
        {
          heading: 'Cómo leer un portafolio de verdad',
          paragraphs: [
            'Un portafolio muestra capacidad estética, que es la parte fácil de evaluar y la menos determinante. Lo que conviene buscar es otra cosa: variedad. Si los diez proyectos se parecen entre sí, probablemente estás viendo un molde que van a aplicarte a ti también.',
            'Busca también proyectos de complejidad parecida a la tuya. Alguien que solo ha hecho sitios de cinco secciones puede hacer un excelente sitio de cinco secciones, pero tu catálogo de ochocientos productos es un problema distinto. Y si un caso te interesa, pregunta qué parte hicieron exactamente: en muchos portafolios aparecen proyectos donde solo se hizo la interfaz sobre una estrategia ajena.',
          ],
        },
        {
          heading: 'El precio es la última pregunta, no la primera',
          paragraphs: [
            'Comparar propuestas por el total es la forma más rápida de elegir mal, porque el total no dice qué incluye. Una propuesta más cara con contenido, capacitación y mantenimiento incluidos puede terminar costando menos que una barata a la que se le van sumando partidas.',
            'Ordena las propuestas por alcance primero. Cuando dos propuestas cubran exactamente lo mismo, entonces sí, elige la más barata: ahí la comparación significa algo.',
          ],
        },
      ],
      cta: {
        heading: 'Haznos estas preguntas',
        text: 'Cuéntanos tu proyecto y agendamos una llamada de diagnóstico. Si al final resulta que un freelance o una plantilla te sirven mejor, te lo vamos a decir.',
        label: 'Agenda una llamada',
      },
      linkLabel: 'Cómo elegir agencia de diseño web',
      breadcrumb: 'Cómo elegir agencia',
    },
    en: {
      seo: {
        title: 'How to choose a web design agency: a practical guide | Aurin',
        description:
          'What to ask before signing with a web design agency, the most common red flags, and when a freelancer or a template suits you better.',
        keywords:
          'how to choose a web design agency, hiring a web agency, agency vs freelancer, questions to ask a web agency, choosing a web designer',
      },
      title: 'How to choose a web design agency',
      excerpt:
        'Every proposal reads the same and every portfolio looks good. These are the questions that reveal the difference, and the signals worth taking seriously.',
      intro: [
        'Choosing an agency is hard because you are buying something that does not exist yet. You cannot try it first, and the proposals you receive all use the same words: strategic, custom, results-driven. Portfolios do not help much either, because everyone shows their best work and nobody shows the project that went wrong.',
        'What actually distinguishes them is process: how they work, what they ask before quoting, and what happens when something does not go to plan. This guide is the set of questions that reveals that on a first call.',
      ],
      sections: [
        {
          heading: 'First: decide whether you really need an agency',
          paragraphs: [
            'This is the part no agency writes, which is exactly why it belongs first. We are not always the right answer.',
            'If your project is a simple page with content you already have, a good freelancer will cost considerably less and respond faster. If you are still validating whether the business works, a well-configured template lets you test without committing budget you may need elsewhere.',
            'An agency starts to make sense when the project needs several disciplines at once —research, architecture, design, development—, when the site is your main commercial channel, or when it has to stay alive and grow for years. If none of those describe your case, hiring an agency means paying for structure you will not use.',
          ],
        },
        {
          heading: 'The questions that reveal how they work',
          paragraphs: [
            'Ask them on the first call. They are not looking for one correct answer, they are looking for whether an answer exists at all.',
          ],
          bullets: [
            'What do you need to know about my business before you can quote? If they need nothing, they are quoting a template.',
            'Who will work on my project and who will I talk to? If those are different people, ask how many layers sit between you and whoever designs.',
            'How many projects do you run at once? There is no correct number, but the answer tells you how much attention you will get.',
            'What happens if I still do not like it on the third review round? What matters is not the policy, it is that one exists.',
            'How do you measure whether the site worked after launch? If the answer is “it looks great”, there is no measurement.',
            'Can you show me a project that did not go as expected and what you learned? It is the most uncomfortable question and the most revealing.',
          ],
        },
        {
          heading: 'Red flags',
          paragraphs: [
            'None of these disqualifies on its own, but two or three together do.',
          ],
          bullets: [
            'They give you a price before asking anything substantial about your business.',
            'They guarantee first place on Google. Nobody can guarantee that, and whoever promises it either does not know or knows and says it anyway.',
            'The proposal does not state how many review rounds are included or what happens afterward.',
            'It is unclear who owns the code and the domain at the end.',
            'The portfolio has no project of your size.',
            'They push a limited-time discount to close. A project decided under urgency gets regretted for months.',
          ],
        },
        {
          heading: 'How to actually read a portfolio',
          paragraphs: [
            'A portfolio shows aesthetic capability, which is the easy part to evaluate and the least decisive. What is worth looking for is something else: variety. If all ten projects resemble each other, you are probably looking at a mold that will be applied to you too.',
            'Look for projects of similar complexity to yours as well. Someone who has only built five-section sites can build an excellent five-section site, but your eight-hundred-product catalog is a different problem. And if a case interests you, ask exactly which part they did: many portfolios include projects where only the interface was built on someone else’s strategy.',
          ],
        },
        {
          heading: 'Price is the last question, not the first',
          paragraphs: [
            'Comparing proposals by their total is the fastest way to choose badly, because the total does not say what is included. A more expensive proposal with content, training, and maintenance included can end up costing less than a cheap one that keeps adding line items.',
            'Sort proposals by scope first. When two proposals cover exactly the same ground, then yes, take the cheaper one: at that point the comparison means something.',
          ],
        },
      ],
      cta: {
        heading: 'Ask us these questions',
        text: 'Tell us about your project and we will set up a diagnostic call. If it turns out a freelancer or a template serves you better, we will say so.',
        label: 'Book a call',
      },
      linkLabel: 'How to choose a web design agency',
      breadcrumb: 'Choosing an agency',
    },
  },
};
