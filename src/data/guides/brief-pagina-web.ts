import type { Guide } from './types';

/**
 * Guía — "qué preparar antes de contratar una página web".
 *
 * Quien la busca está a días de pedir cotización: es la búsqueda con más
 * intención de compra de todo el cluster. Termina en una lista que el lector
 * puede llenar y traer a la llamada, que es justo el siguiente paso.
 */
export const briefPaginaWeb: Guide = {
  id: 'brief-pagina-web',
  status: 'live',
  authors: ['nayeli-quinto'],
  slug: {
    es: 'que-preparar-antes-de-contratar-una-pagina-web',
    en: 'what-to-prepare-before-hiring-a-web-designer',
  },
  published: '2026-10-23',
  updated: '2026-10-23',
  relatedLandings: ['guanajuato', 'puebla', 'yucatan'],
  relatedSectors: ['dentistas', 'arquitectos', 'franquicias', 'estetica'],
  copy: {
    es: {
      seo: {
        title: 'Qué preparar antes de contratar una página web (brief) | Aurin',
        description:
          'Las respuestas que conviene tener antes de pedir cotización de una página web: objetivo, público, contenido, referencias, presupuesto y quién decide.',
        keywords:
          'brief página web, qué necesito para hacer una página web, antes de contratar una página web, cómo pedir cotización de página web, brief diseño web',
      },
      title: 'Qué preparar antes de contratar una página web',
      excerpt:
        'Una cotización solo es tan buena como la información que la sostiene. Estas son las respuestas que conviene tener a la mano, y una lista para llevar a la primera llamada.',
      intro: [
        'La mayoría de las cotizaciones que se inflan a mitad de proyecto no se inflan por mala fe. Se inflan porque al inicio nadie sabía bien qué se necesitaba: el objetivo no estaba claro, el contenido no existía o la persona que tenía la última palabra apareció cuando el diseño ya estaba hecho.',
        'No necesitas saber de diseño ni de tecnología para evitarlo. Necesitas tener claras unas cuantas respuestas sobre tu negocio. Con ellas, quien te cotiza puede proponerte el alcance correcto y tú puedes comparar propuestas en igualdad de condiciones.',
      ],
      sections: [
        {
          heading: 'El objetivo, en una frase',
          paragraphs: [
            '“Tener una página web” no es un objetivo. “Que nos lleguen solicitudes de cotización de empresas medianas” sí lo es, igual que “vender en línea”, “recibir reservaciones directas” o “que los inversionistas confíen en nosotros cuando nos busquen”.',
            'Si puedes escribir lo que el sitio tiene que lograr en una sola frase, ya resolviste la mitad del brief. Esa frase decide qué páginas existen, qué va primero en cada una y cómo se va a medir si el proyecto funcionó.',
          ],
        },
        {
          heading: 'A quién le hablas',
          paragraphs: [
            'Describe a tu cliente ideal como si se lo presentaras a alguien: a qué se dedica, qué le preocupa, qué te pregunta siempre antes de contratarte y con quién te compara. Esas preguntas frecuentes son, casi literalmente, el contenido que tu sitio tiene que responder.',
            'Si vendes a públicos distintos —por ejemplo a clientes finales y a distribuidores—, dilo desde el inicio. Son dos recorridos distintos dentro del sitio, y cambian el alcance.',
          ],
        },
        {
          heading: 'Lo que ya tienes',
          paragraphs: [
            'Haz un inventario rápido. No importa que esté incompleto: importa saber qué hay que producir.',
          ],
          bullets: [
            'Logotipo e identidad: si existen, en qué formatos los tienes y si piensas cambiarlos.',
            'Textos: los del sitio actual, presentaciones, catálogos o propuestas que ya describan lo que haces.',
            'Fotos y video: propios o de banco, y si alcanzan para todo el sitio.',
            'Dominio y hosting: a nombre de quién están y si tienes los accesos.',
            'Sitio actual: qué funciona, qué no y, si existe, cuántas visitas y contactos genera.',
          ],
        },
        {
          heading: 'Referencias: qué te gusta y por qué',
          paragraphs: [
            'Junta tres sitios que te gusten, aunque sean de otros sectores, y escribe en una línea qué te gusta de cada uno: la claridad, las fotos, lo fácil que es encontrar el precio. El “por qué” vale más que el enlace.',
            'Junta también dos o tres sitios de tu competencia. No para copiarlos, sino para saber contra qué te van a comparar tus clientes y en qué te conviene verte distinto.',
          ],
        },
        {
          heading: 'Presupuesto y fechas',
          paragraphs: [
            'Compartir un rango de presupuesto no es mostrar tus cartas: es la forma más rápida de recibir una propuesta que puedas usar. Con un rango, quien cotiza te puede decir qué alcance cabe y qué conviene dejar para una segunda etapa. Sin él, te van a llegar propuestas imposibles de comparar.',
            'Lo mismo con las fechas. Si hay un lanzamiento, una temporada o un evento que no se mueve, dilo en la primera llamada. Cambia el plan de trabajo, no solo la fecha de entrega.',
          ],
        },
        {
          heading: 'Quién decide',
          paragraphs: [
            'Define quién aprueba el proyecto de tu lado. Puede consultar a quien quiera, pero las decisiones finales tienen que salir de una sola persona. Es la medida más sencilla para que el proyecto no se alargue, y la que más se olvida.',
          ],
        },
        {
          heading: 'Tu brief en una hoja',
          paragraphs: [
            'Si respondes esto, cualquier primera llamada rinde el doble. Si alguna respuesta no la tienes, también está bien: se resuelve en esa llamada.',
          ],
          bullets: [
            'Qué tiene que lograr el sitio, en una frase.',
            'Quién es tu cliente ideal y qué pregunta siempre antes de comprar.',
            'Qué contenido ya tienes y qué falta producir.',
            'Tres sitios de referencia y qué te gusta de cada uno.',
            'Tus principales competidores.',
            'Un rango de presupuesto.',
            'Fechas que no se pueden mover.',
            'Quién aprueba de tu lado.',
          ],
        },
      ],
      cta: {
        heading: 'Trae tu brief, o lo armamos juntos',
        text: 'Si ya tienes estas respuestas, la llamada de diagnóstico rinde el doble. Si no, las resolvemos juntos en esa llamada y después te enviamos una cotización cerrada.',
        label: 'Agenda tu diagnóstico',
      },
      linkLabel: 'Qué preparar antes de contratar una página web',
      breadcrumb: 'Qué preparar antes de contratar',
    },
    en: {
      seo: {
        title: 'What to prepare before hiring a web designer (brief) | Aurin',
        description:
          'The answers worth having before you request a website quote: goal, audience, content, references, budget, and who makes the decisions.',
        keywords:
          'website brief, what to prepare before hiring a web designer, website project brief, how to request a website quote, web design brief template',
      },
      title: 'What to prepare before hiring a web designer',
      excerpt:
        'A quote is only as good as the information behind it. These are the answers worth having on hand, plus a checklist to bring to the first call.',
      intro: [
        'Most quotes that grow halfway through a project do not grow out of bad faith. They grow because at the start nobody really knew what was needed: the goal was unclear, the content did not exist, or the person with the final word showed up once the design was already done.',
        'You do not need to know anything about design or technology to avoid that. You need a few clear answers about your business. With them, whoever quotes you can propose the right scope, and you can compare proposals on equal terms.',
      ],
      sections: [
        {
          heading: 'The goal, in one sentence',
          paragraphs: [
            '“Having a website” is not a goal. “Getting quote requests from mid-sized companies” is, and so are “selling online,” “getting direct bookings,” or “making investors trust us when they look us up.”',
            'If you can write what the site has to achieve in a single sentence, you have solved half the brief. That sentence decides which pages exist, what goes first on each, and how you will measure whether the project worked.',
          ],
        },
        {
          heading: 'Who you are talking to',
          paragraphs: [
            'Describe your ideal client as if you were introducing them to someone: what they do, what worries them, what they always ask before hiring you, and who they compare you with. Those recurring questions are, almost literally, the content your site has to answer.',
            'If you sell to different audiences —for example end customers and distributors—, say so from the start. Those are two different journeys through the site, and they change the scope.',
          ],
        },
        {
          heading: 'What you already have',
          paragraphs: [
            'Take a quick inventory. It does not matter if it is incomplete: what matters is knowing what has to be produced.',
          ],
          bullets: [
            'Logo and identity: whether they exist, which formats you have, and whether you plan to change them.',
            'Copy: from the current site, decks, catalogs, or proposals that already describe what you do.',
            'Photos and video: your own or stock, and whether there is enough for the whole site.',
            'Domain and hosting: whose name they are under and whether you have the logins.',
            'Current site: what works, what does not, and, if you know, how many visits and inquiries it generates.',
          ],
        },
        {
          heading: 'References: what you like and why',
          paragraphs: [
            'Gather three sites you like, even from other industries, and write one line on what you like about each: the clarity, the photography, how easy it is to find the price. The “why” is worth more than the link.',
            'Also gather two or three competitor sites. Not to copy them, but to know what your clients will compare you against, and where you want to look different.',
          ],
        },
        {
          heading: 'Budget and dates',
          paragraphs: [
            'Sharing a budget range is not showing your cards: it is the fastest way to get a proposal you can actually use. With a range, whoever quotes can tell you what scope fits and what is worth leaving for a second phase. Without one, you will get proposals that are impossible to compare.',
            'Same with dates. If there is a launch, a season, or an event that cannot move, say so on the first call. It changes the work plan, not just the delivery date.',
          ],
        },
        {
          heading: 'Who decides',
          paragraphs: [
            'Define who approves the project on your side. They can consult whoever they want, but final decisions have to come from one person. It is the simplest way to keep the project from dragging on, and the one most often forgotten.',
          ],
        },
        {
          heading: 'Your brief on one page',
          paragraphs: [
            'If you answer these, any first call is twice as productive. If you do not have some of the answers, that is fine too: they get worked out on that call.',
          ],
          bullets: [
            'What the site has to achieve, in one sentence.',
            'Who your ideal client is and what they always ask before buying.',
            'What content you already have and what still needs to be produced.',
            'Three reference sites and what you like about each.',
            'Your main competitors.',
            'A budget range.',
            'Dates that cannot move.',
            'Who approves on your side.',
          ],
        },
      ],
      cta: {
        heading: 'Bring your brief, or we build it together',
        text: 'If you already have these answers, the discovery call is twice as productive. If not, we work them out together on that call and then send you a fixed quote.',
        label: 'Book your discovery call',
      },
      linkLabel: 'What to prepare before hiring a web designer',
      breadcrumb: 'What to prepare before hiring',
    },
  },
};
