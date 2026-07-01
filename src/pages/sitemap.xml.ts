import type { APIRoute } from 'astro';
import { PayloadAPI } from '@/lib/payload';

export const prerender = false;

interface SitemapEntry {
  loc: string;
  alternates: { hreflang: string; href: string }[];
  lastmod: string;
  priority: string;
  changefreq: string;
}

// Indexable static pages (ES + EN). Utility/transactional pages
// (appointment confirmation, 404, etc.) are intentionally excluded so they
// don't waste crawl budget or get flagged as thin content.
const staticPages = [
  { es: '/', en: '/en', priority: '1.0', changefreq: 'weekly' },
  { es: '/about', en: '/en/about', priority: '0.8', changefreq: 'monthly' },
  { es: '/services', en: '/en/services', priority: '0.8', changefreq: 'monthly' },
  { es: '/projects', en: '/en/projects', priority: '0.9', changefreq: 'weekly' },
  { es: '/contact', en: '/en/contact', priority: '0.7', changefreq: 'monthly' },
  { es: '/privacy', en: '/en/privacy', priority: '0.3', changefreq: 'yearly' },
  { es: '/terms', en: '/en/terms', priority: '0.3', changefreq: 'yearly' }
];

const baseUrl = 'https://aurin.mx';

// W3C Datetime (ISO 8601, seconds precision, UTC) — the format the sitemaps.org
// protocol specifies for <lastmod>. e.g. 2026-07-01T12:34:56+00:00
const toW3C = (date: Date) => date.toISOString().replace(/\.\d{3}Z$/, '+00:00');

// Stable deploy-time value for static pages. Evaluated once per cold start
// (≈ deploy time) rather than per request, so lastmod isn't "always now"
// (which search engines distrust as a spam signal).
// ponytail: cold-start time; wire to build/commit date if per-page precision matters.
const BUILD_DATE = toW3C(new Date());

// Escape the 5 XML entities so a stray "&" in a slug can't break the whole feed.
const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]!)
  );

export const GET: APIRoute = async () => {
  const entries: SitemapEntry[] = [];

  // 1. Static pages with reciprocal hreflang alternates
  for (const page of staticPages) {
    const esUrl = `${baseUrl}${page.es}`;
    const enUrl = `${baseUrl}${page.en}`;

    const alternates = [
      { hreflang: 'es', href: esUrl },
      { hreflang: 'en', href: enUrl },
      { hreflang: 'x-default', href: esUrl }
    ];

    entries.push({ loc: esUrl, alternates, lastmod: BUILD_DATE, priority: page.priority, changefreq: page.changefreq });
    entries.push({ loc: enUrl, alternates, lastmod: BUILD_DATE, priority: page.priority, changefreq: page.changefreq });
  }

  // 2. Dynamic projects from Payload, with cross-locale hreflang mappings
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
      projectsMap.set(p.id, { ...projectsMap.get(p.id), en: p });
    }

    for (const { es, en } of projectsMap.values()) {
      const lastmodDate = es?.updatedAt || en?.updatedAt;
      const lastmod = lastmodDate ? new Date(lastmodDate).toISOString().split('T')[0] : BUILD_DATE;

      // encodeURIComponent keeps the URL valid even if a CMS slug has spaces
      // or accents (e.g. "Fruit Academy" → "Fruit%20Academy").
      const esUrl = es ? `${baseUrl}/project/${encodeURIComponent(es.slug)}` : '';
      const enUrl = en ? `${baseUrl}/en/project/${encodeURIComponent(en.slug)}` : '';

      const alternates: { hreflang: string; href: string }[] = [];
      if (esUrl) alternates.push({ hreflang: 'es', href: esUrl });
      if (enUrl) alternates.push({ hreflang: 'en', href: enUrl });
      // x-default falls back to Spanish, or English if there's no Spanish version
      alternates.push({ hreflang: 'x-default', href: esUrl || enUrl });

      if (esUrl) entries.push({ loc: esUrl, alternates, lastmod, priority: '0.7', changefreq: 'monthly' });
      if (enUrl) entries.push({ loc: enUrl, alternates, lastmod, priority: '0.7', changefreq: 'monthly' });
    }
  } catch (error) {
    // Never fail the sitemap on a CMS hiccup — static pages still get served.
    console.error('❌ Error rendering dynamic projects in sitemap.xml:', error);
  }

  // 3. Build the XML (no blank lines, all URLs escaped)
  const urls = entries
    .map((entry) => {
      const links = entry.alternates
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${escapeXml(alt.href)}" />`)
        .join('\n');
      return [
        '  <url>',
        `    <loc>${escapeXml(entry.loc)}</loc>`,
        links,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        '  </url>'
      ].join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
    }
  });
};
