import type { APIRoute } from 'astro';
import { replaceSheetTabs } from '@/lib/mailing/leadSheet';

export const prerender = false;

/*
 * Cron diario de Vercel (vercel.json). Baja las estadísticas de Bing Webmaster
 * Tools y reescribe cuatro pestañas de la hoja de leads para Looker Studio:
 * - "Bing": clics e impresiones por día.
 * - "Bing consultas" y "Bing páginas": por semana, con posición promedio.
 * - "Bing rastreo": páginas en el índice, rastreadas, errores y enlaces por día.
 *
 * Se reescriben completas (Bing da unos 6 meses de historia) en vez de agregar
 * filas: Bing corrige los últimos días con retraso y así no hay duplicados.
 * Google no necesita esto: Looker Studio tiene conector nativo de Search Console.
 *
 * Protegido con CRON_SECRET igual que /api/indexnow. Necesita
 * BING_WEBMASTER_API_KEY (Bing Webmaster → Configuración → Acceso a la API).
 */
const SITE = 'https://aurin.mx/';

type BingRow = Record<string, string | number>;

async function bing(method: string, key: string): Promise<BingRow[]> {
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${method}?siteUrl=${encodeURIComponent(SITE)}&apikey=${key}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Bing ${method}: ${res.status} ${await res.text()}`);
  return (await res.json()).d ?? [];
}

/** "/Date(1316156400000-0700)/" → "2011-09-16". Bing marca medianoche del Pacífico, que en UTC cae el mismo día. */
const day = (bingDate: string | number) =>
  new Date(Number(/\d+/.exec(String(bingDate))?.[0])).toISOString().slice(0, 10);

const byDate = (a: BingRow, b: BingRow) => String(a.Date).localeCompare(String(b.Date));

export const GET: APIRoute = async ({ request }) => {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 });
  }
  const key = process.env.BING_WEBMASTER_API_KEY;
  if (!key) return Response.json({ error: 'Falta BING_WEBMASTER_API_KEY' }, { status: 500 });

  try {
    const [traffic, queries, pages, crawl] = await Promise.all(
      ['GetRankAndTrafficStats', 'GetQueryStats', 'GetPageStats', 'GetCrawlStats'].map((m) => bing(m, key))
    );
    const weekly = (label: string, rows: BingRow[]) => [
      ['Semana', label, 'Clics', 'Impresiones', 'Posición promedio'],
      ...rows.map((r) => [day(r.Date), r.Query, r.Clicks, r.Impressions, r.AvgImpressionPosition]),
    ];

    await replaceSheetTabs({
      Bing: [
        ['Fecha', 'Clics', 'Impresiones'],
        ...traffic.sort(byDate).map((r) => [day(r.Date), r.Clicks, r.Impressions]),
      ],
      'Bing consultas': weekly('Consulta', queries),
      'Bing páginas': weekly('Página', pages),
      'Bing rastreo': [
        ['Fecha', 'En el índice', 'Rastreadas', 'Errores de rastreo', 'Enlaces entrantes'],
        ...crawl.sort(byDate).map((r) => [day(r.Date), r.InIndex, r.CrawledPages, r.CrawlErrors, r.InLinks]),
      ],
    });
    return Response.json({ traffic: traffic.length, queries: queries.length, pages: pages.length, crawl: crawl.length });
  } catch (error) {
    console.error('Bing stats:', error);
    return Response.json({ error: String(error) }, { status: 502 });
  }
};
