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
    ['Inicio', '/', 'Diseño UX/UI, branding y desarrollo web en México.'],
    ['Nosotros', '/about', 'Equipo, enfoque y metodología de la agencia.'],
    ['Servicios', '/services', 'Diseño UX/UI, branding, identidad corporativa, diseño y desarrollo web.'],
    ['Portafolio', '/projects', 'Proyectos y casos de estudio.'],
    ['Contacto', '/contact', 'Formulario de contacto y agenda de citas.'],
  ],
  en: [
    ['Home', '/en', 'UX/UI design, branding and web development in Mexico.'],
    ['About', '/en/about', 'Team, approach and methodology.'],
    ['Services', '/en/services', 'UX/UI design, branding, corporate identity, web design and development.'],
    ['Portfolio', '/en/projects', 'Projects and case studies.'],
    ['Contact', '/en/contact', 'Contact form and appointment booking.'],
  ],
} as const;

const line = (title: string, path: string, note: string) => `- [${title}](${SITE.url}${path}): ${note}`;

/* Portafolio: es lo que permite a una IA citar a Aurin por casos concretos
   ("¿quién hizo el sitio de X?"). Si Payload falla, la sección se omite y el
   resto del archivo se sirve igual. */
async function projectLines(): Promise<string[]> {
  try {
    const projects = await PayloadAPI.getProjects('es');
    if (!projects.length) return [];
    return [
      '## Portafolio (ES)',
      '',
      ...projects.map((p) => {
        const services = p.hero?.services?.map((s) => s.name).join(', ');
        const client = p.client?.name && `Cliente: ${p.client.name}${p.client.industry ? ` (${p.client.industry})` : ''}`;
        const summary = p.seo?.metaDescription?.trim() || metaDescription(renderRichText(p.hero?.description), 140);
        const note = [client, services, summary].filter(Boolean).join(' — ') || 'Caso de estudio.';
        return line(p.title, `/project/${encodeURIComponent(p.slug)}`, note);
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
    `> Aurin es una agencia mexicana de diseño UX/UI, branding y desarrollo web, fundada en 1998 y con oficina en ${SITE.address.addressLocality}, ${SITE.address.addressRegion}. Trabaja a distancia: tiene clientes en México y República Dominicana y diseña para empresas de Estados Unidos, Canadá, España y Latinoamérica.`,
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
    ...(await projectLines()),
    '## Legal',
    '',
    `- [Aviso de Privacidad](${SITE.url}/privacy)`,
    `- [Términos y Condiciones](${SITE.url}/terms)`,
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
