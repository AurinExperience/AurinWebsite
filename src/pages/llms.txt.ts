import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';
import { LANDINGS, landingPath } from '@/data/landings';
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
    ['Servicios', '/services', 'Diseño UX/UI, branding, identidad corporativa, diseño web y desarrollo de aplicaciones.'],
    ['Portafolio', '/projects', 'Proyectos y casos de estudio.'],
    ['Contacto', '/contact', 'Formulario de contacto y agenda de citas.'],
  ],
  en: [
    ['Home', '/en', 'UX/UI design, branding and web development in Mexico.'],
    ['About', '/en/about', 'Team, approach and methodology.'],
    ['Services', '/en/services', 'UX/UI design, branding, corporate identity, web design and app development.'],
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
        const services = p.hero.services?.map((s) => s.name).join(', ');
        const summary = metaDescription(renderRichText(p.hero.description), 140);
        const note = [services, summary].filter(Boolean).join(' — ') || 'Caso de estudio.';
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
  const body = [
    `# ${SITE.name}`,
    '',
    `> Aurin es una agencia mexicana de diseño UX/UI, branding y desarrollo web y de aplicaciones, con más de 20 años de experiencia y oficina en ${SITE.address.addressLocality}, ${SITE.address.addressRegion}. Atiende clientes en todo México de forma remota.`,
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
    ...LANDINGS.map((l) => line(l.copy.es.breadcrumb, landingPath(l, 'es'), l.copy.es.seo.description)),
    '',
    '## Web design by city (EN)',
    '',
    ...LANDINGS.map((l) => line(l.copy.en.breadcrumb, landingPath(l, 'en'), l.copy.en.seo.description)),
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
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
};
