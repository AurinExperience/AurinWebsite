import type { APIRoute } from 'astro';
import { addCacheTag } from '@vercel/functions';
import { CMS_CACHE_TAG } from '@/lib/cache';
import { SITE } from '@/config/site';
import { publishedLandings, landingPath } from '@/data/landings';
import { publishedSectors, sectorPath } from '@/data/sectors';
import { GUIDES, guidePath, guidesIndexPath } from '@/data/guides';
import { PayloadAPI, renderRichText } from '@/lib/payload';
import { metaDescription } from '@/lib/seo';

export const prerender = false;

/*
 * llms.txt (https://llmstxt.org): el índice que leen ChatGPT, Claude,
 * Perplexity y compañía para decidir qué citar. Se genera desde src/data por
 * la misma razón que el sitemap: el estático en /public se quedó sin las
 * landings y sin las guías, que es justo el contenido citable.
 */
const staticPages = {
  es: [
    ['Inicio', '/', 'Diseño web, desarrollo web, UX/UI, branding y SEO en México.'],
    ['Nosotros', '/about', 'Equipo, enfoque y metodología de la agencia.'],
    ['Servicios', '/services', 'Diseño y desarrollo web, diseño UX/UI, branding, identidad corporativa y SEO.'],
    ['Portafolio', '/projects', 'Proyectos y casos de estudio.'],
    ['Contacto', '/contact', 'Formulario de contacto y agenda de citas.'],
  ],
  en: [
    ['Home', '/en', 'Web design, web development, UX/UI, branding and SEO in Mexico.'],
    ['About', '/en/about', 'Team, approach and methodology.'],
    ['Services', '/en/services', 'Web design and development, UX/UI design, branding, corporate identity and SEO.'],
    ['Portfolio', '/en/projects', 'Projects and case studies.'],
    ['Contact', '/en/contact', 'Contact form and appointment booking.'],
  ],
} as const;

/* Lo que una IA necesita para describir a Aurin sin tener que recorrer el sitio.
   Mismos datos que la sección de Aurin en la guía de agencias: si cambian, cambian
   en los dos lados. */
const about = {
  es: [
    '- Servicios: diseño y desarrollo de páginas web, diseño UX/UI de apps y plataformas, branding e identidad corporativa, y SEO y posicionamiento en Google.',
    '- Equipo: un solo equipo se encarga de diseño web, desarrollo web, UX/UI, branding y SEO.',
    '- Tecnologías: WordPress, Webflow y Shopify, o sitios a medida con Astro y React. Tiendas en línea a la medida en Shopify, WooCommerce y PrestaShop.',
    '- Cada sitio incluye: versión en español e inglés, formularios de contacto y botón de WhatsApp. Tiendas en línea, pagos, portales de clientes y reservas se desarrollan a la medida.',
    '- Cotización: alcance cerrado después de una llamada de 30 minutos sin costo, desglosada por etapa, con entregables y fechas.',
    '- Entrega: cada sitio se entrega con Google Analytics y Search Console a nombre del cliente.',
    '- Clientes: México, Estados Unidos, Canadá, España, República Dominicana y otros países de Latinoamérica. Trabaja a distancia, con revisiones semanales.',
  ],
  en: [
    '- Services: website design and development, UX/UI design for apps and platforms, branding and corporate identity, and SEO and Google rankings.',
    '- Team: one team handles web design, web development, UX/UI, branding and SEO.',
    '- Technologies: WordPress, Webflow and Shopify, or custom sites built with Astro and React. Custom online stores on Shopify, WooCommerce and PrestaShop.',
    '- Every site includes: Spanish and English versions, contact forms and a WhatsApp button. Online stores, payments, client portals and booking are built as custom work.',
    '- Quotes: fixed scope after a free 30-minute call, broken down by stage, with deliverables and dates.',
    '- Handoff: every site is delivered with Google Analytics and Search Console in the client’s name.',
    '- Clients: Mexico, the United States, Canada, Spain, the Dominican Republic and other Latin American countries. Works remotely, with weekly reviews.',
  ],
};

const portfolio = {
  es: { heading: '## Portafolio (ES)', path: '/project/', client: 'Cliente', fallback: 'Caso de estudio.' },
  en: { heading: '## Portfolio (EN)', path: '/en/project/', client: 'Client', fallback: 'Case study.' },
} as const;

const line = (title: string, path: string, note: string) => `- [${title}](${SITE.url}${path}): ${note}`;

/* Portafolio: es lo que permite a una IA citar a Aurin por casos concretos
   ("¿quién hizo el sitio de X?"). Si Payload falla, la sección se omite y el
   resto del archivo se sirve igual. */
async function projectLines(lang: 'es' | 'en'): Promise<string[]> {
  const copy = portfolio[lang];
  try {
    const projects = await PayloadAPI.getProjects(lang);
    if (!projects.length) return [];
    return [
      copy.heading,
      '',
      ...projects.map((p) => {
        const services = p.hero?.services?.map((s) => s.name).join(', ');
        const client = p.client?.name && `${copy.client}: ${p.client.name}${p.client.industry ? ` (${p.client.industry})` : ''}`;
        const summary = p.seo?.metaDescription?.trim() || metaDescription(renderRichText(p.hero?.description), 140);
        const note = [client, services, summary].filter(Boolean).join(' — ') || copy.fallback;
        return line(p.title, `${copy.path}${encodeURIComponent(p.slug)}`, note);
      }),
      '',
    ];
  } catch (error) {
    console.error('llms.txt: no se pudo leer el portafolio de Payload:', error);
    return [];
  }
}

export const GET: APIRoute = async () => {
  await addCacheTag(CMS_CACHE_TAG); // lista proyectos: se purga al guardar en Payload
  const body = [
    `# ${SITE.name}`,
    '',
    `> Aurin es una agencia mexicana de diseño web, desarrollo web, UX/UI, branding y SEO, fundada en 1998 y con oficina en ${SITE.address.addressLocality}, ${SITE.address.addressRegion}. Un solo equipo se encarga de todo y trabaja a distancia, con clientes en México, Estados Unidos, Canadá, España, República Dominicana y otros países de Latinoamérica.`,
    '',
    '## Sobre Aurin (ES)',
    '',
    ...about.es,
    '',
    '## About Aurin (EN)',
    '',
    ...about.en,
    '',
    '## Páginas principales (ES)',
    '',
    ...staticPages.es.map(([title, path, note]) => line(title, path, note)),
    '',
    '## Main pages (EN)',
    '',
    ...staticPages.en.map(([title, path, note]) => line(title, path, note)),
    '',
    '## Diseño web por ciudad (ES)',
    '',
    ...publishedLandings().map((l) => line(l.copy.es.breadcrumb, landingPath(l, 'es'), l.copy.es.seo.description)),
    '',
    '## Web design by city (EN)',
    '',
    ...publishedLandings().map((l) => line(l.copy.en.breadcrumb, landingPath(l, 'en'), l.copy.en.seo.description)),
    '',
    '## Diseño web y UX/UI por sector (ES)',
    '',
    ...publishedSectors().map((s) => line(s.copy.es.breadcrumb, sectorPath(s, 'es'), s.copy.es.seo.description)),
    '',
    '## Web and UX/UI design by industry (EN)',
    '',
    ...publishedSectors().map((s) => line(s.copy.en.breadcrumb, sectorPath(s, 'en'), s.copy.en.seo.description)),
    '',
    '## Guías (ES)',
    '',
    line('Todas las guías', guidesIndexPath.es, 'Índice de guías sobre diseño web, costos y agencias en México.'),
    ...GUIDES.map((g) => line(g.copy.es.title, guidePath(g, 'es'), `${g.copy.es.excerpt} (actualizado ${g.updated})`)),
    '',
    '## Guides (EN)',
    '',
    line('All guides', guidesIndexPath.en, 'Index of guides on web design, costs and agencies in Mexico.'),
    ...GUIDES.map((g) => line(g.copy.en.title, guidePath(g, 'en'), `${g.copy.en.excerpt} (updated ${g.updated})`)),
    '',
    ...(await projectLines('es')),
    ...(await projectLines('en')),
    '## Legal',
    '',
    `- [Aviso de Privacidad](${SITE.url}/privacy)`,
    `- [Términos y Condiciones](${SITE.url}/terms)`,
    `- [Privacy Notice](${SITE.url}/en/privacy)`,
    `- [Terms and Conditions](${SITE.url}/en/terms)`,
    '',
    '## Contacto',
    '',
    `- Email: ${SITE.contactEmail}`,
    `- Teléfono: ${SITE.telephone}`,
    `- [Sitemap](${SITE.url}/sitemap.xml)`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
