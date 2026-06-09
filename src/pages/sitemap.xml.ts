import type { APIRoute } from 'astro';
import { PayloadAPI } from '@/lib/payload';

export const prerender = false;

interface SitemapEntry {
  loc: string;
  alternates: { hreflang: string; href: string }[];
  lastmod?: string;
  priority: string;
  changefreq: string;
}

const staticPages = [
  { es: '/', en: '/en' },
  { es: '/about', en: '/en/about' },
  { es: '/services', en: '/en/services' },
  { es: '/projects', en: '/en/projects' },
  { es: '/contact', en: '/en/contact' },
  { es: '/privacy', en: '/en/privacy' },
  { es: '/terms', en: '/en/terms' },
  { es: '/appointment-confirmed', en: '/en/appointment-confirmation' }
];

const baseUrl = 'https://aurin.mx';

export const GET: APIRoute = async () => {
  const entries: SitemapEntry[] = [];

  // 1. Add static pages to the sitemap with alternates mapping
  for (const page of staticPages) {
    const esUrl = `${baseUrl}${page.es}`;
    const enUrl = `${baseUrl}${page.en}`;

    const alternates = [
      { hreflang: 'es', href: esUrl },
      { hreflang: 'en', href: enUrl },
      { hreflang: 'x-default', href: esUrl }
    ];

    entries.push({
      loc: esUrl,
      alternates,
      priority: page.es === '/' ? '1.0' : '0.8',
      changefreq: 'weekly'
    });

    entries.push({
      loc: enUrl,
      alternates,
      priority: page.en === '/en' ? '1.0' : '0.8',
      changefreq: 'weekly'
    });
  }

  // 2. Fetch dynamic projects from Payload CMS and add them with cross-locale mappings
  try {
    const [projectsEs, projectsEn] = await Promise.all([
      PayloadAPI.getProjects('es'),
      PayloadAPI.getProjects('en')
    ]);

    const projectsMap = new Map<string, { es?: typeof projectsEs[0]; en?: typeof projectsEn[0] }>();

    for (const p of projectsEs) {
      projectsMap.set(p.id, { ...projectsMap.get(p.id), es: p });
    }

    for (const p of projectsEn) {
      const existing = projectsMap.get(p.id) || {};
      projectsMap.set(p.id, { ...existing, en: p });
    }

    for (const [_, value] of projectsMap.entries()) {
      const { es, en } = value;
      const lastmodDate = es?.updatedAt || en?.updatedAt;
      const formattedLastmod = lastmodDate ? new Date(lastmodDate).toISOString().split('T')[0] : undefined;

      const alternates: { hreflang: string; href: string }[] = [];
      let esUrl = '';
      let enUrl = '';

      if (es) {
        esUrl = `${baseUrl}/project/${es.slug}`;
        alternates.push({ hreflang: 'es', href: esUrl });
      }

      if (en) {
        enUrl = `${baseUrl}/en/project/${en.slug}`;
        alternates.push({ hreflang: 'en', href: enUrl });
      }

      // Add x-default pointing to Spanish as fallback
      if (esUrl) {
        alternates.push({ hreflang: 'x-default', href: esUrl });
      } else if (enUrl) {
        alternates.push({ hreflang: 'x-default', href: enUrl });
      }

      if (es) {
        entries.push({
          loc: esUrl,
          alternates,
          lastmod: formattedLastmod,
          priority: '0.7',
          changefreq: 'monthly'
        });
      }

      if (en) {
        entries.push({
          loc: enUrl,
          alternates,
          lastmod: formattedLastmod,
          priority: '0.7',
          changefreq: 'monthly'
        });
      }
    }
  } catch (error) {
    console.error('❌ Error rendering dynamic projects in sitemap.xml:', error);
  }

  // 3. Construct sitemap XML structure with xmlns:xhtml namespace declarations
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${entries.map(entry => `
  <url>
    <loc>${entry.loc}</loc>
    ${entry.alternates.map(alt => `<xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n    ')}
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
};
