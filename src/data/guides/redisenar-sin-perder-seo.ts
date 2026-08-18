import type { Guide } from './types';

/**
 * Guía 3 — "rediseñar sin perder posicionamiento".
 *
 * Tema técnico y con intención muy comercial: quien lo busca ya tiene sitio,
 * ya tiene tráfico y tiene miedo de perderlo. Enlaza a las landings donde el
 * rediseño es el ángulo principal (Puebla y CDMX).
 */
export const redisenarSinPerderSeo: Guide = {
  id: 'redisenar-sin-perder-seo',
  status: 'live',
  slug: {
    es: 'redisenar-sitio-web-sin-perder-posicionamiento',
    en: 'redesign-a-website-without-losing-rankings',
  },
  published: '2026-08-18',
  updated: '2026-08-18',
  relatedLandings: ['puebla', 'cdmx', 'guanajuato'],
  copy: {
    es: {
      seo: {
        title: 'Rediseño web sin perder posicionamiento en Google | Aurin',
        description:
          'Inventario previo, plan de redirecciones 301 y monitoreo posterior: los tres pasos que separan un rediseño exitoso de una caída de tráfico.',
        keywords:
          'rediseño web sin perder SEO, migración web posicionamiento, redirecciones 301, rediseñar sitio web Google, perder tráfico rediseño',
      },
      title: 'Cómo rediseñar tu sitio sin perder posicionamiento',
      excerpt:
        'La mayoría de los rediseños que pierden tráfico se saltaron el mismo paso, y ocurre antes de tocar el diseño. Este es el procedimiento completo.',
      intro: [
        'Hay una historia que se repite: una empresa rediseña su sitio, queda mucho mejor, y a las tres semanas el tráfico cae a la mitad. El diseño no tuvo la culpa. Lo que pasó es que se lanzó un sitio nuevo sin saber qué estaba sosteniendo el viejo.',
        'Un sitio con años en línea acumula algo que no se ve en ninguna pantalla: URLs que Google ya conoce, páginas que reciben visitas por búsquedas específicas y enlaces desde otros sitios que apuntan a direcciones concretas. Si esas direcciones desaparecen sin avisar, todo eso se pierde. La buena noticia es que es completamente evitable, y el trabajo que lo evita ocurre antes de que alguien dibuje una sola pantalla.',
      ],
      sections: [
        {
          heading: 'Paso 1: el inventario que casi nadie hace',
          paragraphs: [
            'Antes de tocar nada hay que responder tres preguntas sobre el sitio actual, con datos y no de memoria.',
          ],
          bullets: [
            'Qué URLs reciben tráfico hoy. Sale de Google Analytics y de Search Console. Vas a encontrar páginas que nadie recordaba y que traen visitas todos los meses.',
            'Por qué búsquedas apareces. Search Console te dice las consultas reales por las que la gente llega. Esas consultas son las que el sitio nuevo tiene que seguir cubriendo.',
            'Qué sitios externos te enlazan y a qué páginas exactamente. Si alguien enlazó tu caso de estudio de 2019 y esa URL deja de existir, ese enlace se pierde y con él parte de tu autoridad.',
          ],
        },
        {
          heading: 'Paso 2: decidir qué se conserva',
          paragraphs: [
            'Con el inventario en la mano, cada URL cae en una de tres categorías, y hay que decidir explícitamente en cuál.',
            'Las que se conservan con la misma dirección son las mejores: no requieren nada. Las que cambian de dirección necesitan una redirección 301 hacia su equivalente en el sitio nuevo. Y las que simplemente desaparecen —contenido obsoleto que ya no aplica— necesitan una decisión consciente: o se redirigen a la página más cercana en tema, o se dejan morir con un 404 honesto.',
            'El error frecuente es redirigir todo a la página de inicio. Google trata eso como un error suave: la redirección no lleva al usuario a lo que buscaba, así que no transfiere valor. Una redirección solo sirve cuando apunta a contenido equivalente.',
          ],
        },
        {
          heading: 'Paso 3: el plan de redirecciones 301',
          paragraphs: [
            'Una redirección 301 le dice a Google “esta página se mudó permanentemente a esta otra”. Es el mecanismo que transfiere el posicionamiento de la dirección vieja a la nueva, y es lo que hace que un cambio de estructura no te cueste meses de tráfico.',
            'El plan es literalmente una tabla: URL vieja, URL nueva. Se arma durante el proyecto, no el día del lanzamiento, y se prueba en un ambiente de staging antes de que el sitio salga al aire. Dos detalles que se pasan por alto seguido: evitar cadenas de redirecciones (que A vaya a B y B a C en lugar de A directo a C), y verificar que la redirección sea 301 permanente y no 302 temporal, porque la temporal no transfiere el valor.',
          ],
        },
        {
          heading: 'Paso 4: lo técnico que hay que revisar antes de lanzar',
          paragraphs: [
            'Esta es la lista mínima de verificación previa. Cualquiera de estos puntos, mal, cuesta tráfico.',
          ],
          bullets: [
            'Que el sitio nuevo no salga con `noindex` heredado del ambiente de pruebas. Es el error más común y el más caro.',
            'Que el `robots.txt` de producción no esté bloqueando el sitio entero.',
            'Que cada página tenga su canonical apuntando a sí misma y no a la versión de staging.',
            'Que los títulos y las descripciones no se hayan perdido en la migración.',
            'Que el sitemap XML esté actualizado con las URLs nuevas y no con las viejas.',
            'Si el sitio es bilingüe, que las etiquetas hreflang sigan siendo recíprocas entre las versiones.',
          ],
        },
        {
          heading: 'Paso 5: monitorear después, no solo antes',
          paragraphs: [
            'El lanzamiento no es el final. Durante las primeras semanas Google vuelve a rastrear el sitio y ahí aparecen los problemas que no se vieron en pruebas: una redirección que faltó, una página que quedó fuera del sitemap, un error 404 en una URL que sí tenía tráfico.',
            'Lo que hay que vigilar en Search Console es la cobertura —qué páginas quedaron indexadas y cuáles no— y el rendimiento por consulta comparado contra el mes anterior. Una caída pequeña las primeras semanas es normal mientras Google reprocesa. Una caída que a las ocho semanas no se recupera ya no se explica por el reprocesamiento, y ahí toca ir a buscar qué se rompió.',
          ],
        },
        {
          heading: 'Cuánto tarda en recuperarse',
          paragraphs: [
            'Con el trabajo hecho bien, el tráfico suele tardar hasta ocho semanas en estabilizarse. El plazo exacto depende de con qué frecuencia rastree Google tu sitio, que no lo controla nadie: sitios que se actualizan seguido se reprocesan antes que sitios que llevan años iguales. A partir de ahí el sitio nuevo tiende a rendir mejor que el viejo, porque normalmente es más rápido y está mejor estructurado.',
            'Sin el inventario previo, la recuperación puede tomar meses y a veces no es completa, porque los enlaces externos que apuntaban a URLs muertas no se recuperan solos. Por eso el paso que más se salta es justamente el que más cuesta saltarse.',
          ],
        },
      ],
      cta: {
        heading: '¿Vas a rediseñar y no quieres perder lo que ya ganaste?',
        text: 'Empezamos por el inventario: qué URLs te traen tráfico y por qué búsquedas apareces. De ahí sale el plan de migración antes de tocar el diseño.',
        label: 'Solicita una auditoría',
      },
      linkLabel: 'Rediseñar sin perder posicionamiento',
      breadcrumb: 'Rediseñar sin perder SEO',
    },
    en: {
      seo: {
        title: 'Redesign your website without losing Google rankings | Aurin',
        description:
          'The upfront inventory, the 301 redirect plan, and post-launch monitoring: the three steps that separate a good redesign from a traffic drop.',
        keywords:
          'website redesign without losing SEO, site migration rankings, 301 redirects, redesign website Google, traffic loss redesign',
      },
      title: 'How to redesign your site without losing rankings',
      excerpt:
        'Most redesigns that lose traffic skipped the same step, and it happens before anyone touches the design. Here is the full procedure.',
      intro: [
        'There is a story that repeats itself: a company redesigns its site, it looks far better, and three weeks later traffic has halved. The design was not to blame. What happened is that a new site launched without anyone knowing what was holding the old one up.',
        'A site that has been online for years accumulates something no screen shows: URLs Google already knows, pages that receive visits from specific searches, and links from other sites pointing at concrete addresses. If those addresses disappear without notice, all of it goes with them. The good news is that it is entirely avoidable, and the work that avoids it happens before anyone draws a single screen.',
      ],
      sections: [
        {
          heading: 'Step 1: the inventory almost nobody does',
          paragraphs: [
            'Before touching anything you have to answer three questions about the current site, with data rather than from memory.',
          ],
          bullets: [
            'Which URLs receive traffic today. It comes from Google Analytics and Search Console. You will find pages nobody remembered that bring visits every month.',
            'Which searches you appear for. Search Console gives you the real queries people arrive through. Those queries are what the new site has to keep covering.',
            'Which external sites link to you and to exactly which pages. If someone linked your 2019 case study and that URL stops existing, the link is lost and part of your authority with it.',
          ],
        },
        {
          heading: 'Step 2: decide what survives',
          paragraphs: [
            'With the inventory in hand, every URL falls into one of three categories, and you have to decide explicitly which one.',
            'The ones that keep the same address are the best: they need nothing. The ones that change address need a 301 redirect to their equivalent on the new site. And the ones that simply disappear —obsolete content that no longer applies— need a conscious decision: either redirect them to the closest page by topic, or let them die with an honest 404.',
            'The frequent mistake is redirecting everything to the homepage. Google treats that as a soft error: the redirect does not take the user to what they were looking for, so it transfers no value. A redirect only works when it points to equivalent content.',
          ],
        },
        {
          heading: 'Step 3: the 301 redirect plan',
          paragraphs: [
            'A 301 redirect tells Google “this page moved permanently to this other one”. It is the mechanism that transfers ranking from the old address to the new one, and it is what keeps a structural change from costing you months of traffic.',
            'The plan is literally a table: old URL, new URL. It gets built during the project, not on launch day, and it gets tested on staging before the site goes live. Two details that are frequently overlooked: avoid redirect chains (A going to B and B to C instead of A straight to C), and verify the redirect is a permanent 301 and not a temporary 302, because the temporary one transfers no value.',
          ],
        },
        {
          heading: 'Step 4: the technical checks before launch',
          paragraphs: [
            'This is the minimum pre-launch checklist. Any of these getting through wrong costs traffic.',
          ],
          bullets: [
            'That the new site does not launch with a `noindex` inherited from the staging environment. It is the most common mistake and the most expensive.',
            'That the production `robots.txt` is not blocking the entire site.',
            'That every page has a canonical pointing at itself and not at the staging version.',
            'That titles and descriptions did not get lost in the migration.',
            'That the XML sitemap is updated with the new URLs and not the old ones.',
            'If the site is bilingual, that hreflang tags remain reciprocal between versions.',
          ],
        },
        {
          heading: 'Step 5: monitor afterward, not only before',
          paragraphs: [
            'Launch is not the end. Over the first weeks Google re-crawls the site and that is when the problems testing did not catch show up: a missing redirect, a page left out of the sitemap, a 404 on a URL that did have traffic.',
            'What to watch in Search Console is coverage —which pages ended up indexed and which did not— and per-query performance compared against the previous month. A small dip in the first weeks is normal while Google reprocesses. A dip that has not recovered by week eight is no longer explained by reprocessing, and that is when you go find what broke.',
          ],
        },
        {
          heading: 'How long recovery takes',
          paragraphs: [
            'With the work done properly, traffic usually takes up to eight weeks to stabilize. How long exactly depends on how often Google recrawls your site, which nobody controls: sites that update frequently get reprocessed sooner than sites that have sat unchanged for years. From there the new site tends to outperform the old one, because it is normally faster and better structured.',
            'Without the upfront inventory, recovery can take months and is sometimes incomplete, because external links pointing at dead URLs do not come back on their own. Which is why the step most often skipped is precisely the one that costs most to skip.',
          ],
        },
      ],
      cta: {
        heading: 'Redesigning and don’t want to lose what you built?',
        text: 'We start with the inventory: which URLs bring you traffic and which searches you appear for. The migration plan comes out of that, before anyone touches the design.',
        label: 'Request an audit',
      },
      linkLabel: 'Redesign without losing rankings',
      breadcrumb: 'Redesign without losing SEO',
    },
  },
};
