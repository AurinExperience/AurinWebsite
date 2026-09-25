import type { APIRoute } from 'astro';
import { ALL_LANDINGS, isPublished, landingPath } from '@/data/landings';
import { GUIDES, guidePath } from '@/data/guides';
import { PayloadAPI } from '@/lib/payload';

export const prerender = false;

/*
 * Cron diario de Vercel (vercel.json, 06:10 UTC = 00:10 en el centro de
 * México). Avisa a IndexNow de lo que es nuevo o cambió; IndexNow lo reparte a
 * Bing, Yandex, Seznam, Naver… y por Bing llega a ChatGPT Search y Copilot.
 * Google no usa IndexNow: a Google le llega por el sitemap y su lastmod.
 *
 * Qué manda, por día de calendario en hora del centro, para que cada URL se
 * avise una sola vez aunque el cron corra unos minutos antes o después:
 * - Landings cuya `publishAt` es HOY (se publican a las 00:00).
 * - Guías con `updated` = AYER (se publican con deploy durante el día).
 * - Proyectos del CMS con `updatedAt` de AYER (aparecen sin deploy).
 *
 * Solo URLs nuevas o cambiadas, nunca el sitio completo: reenviar lo que no
 * cambió es justo lo que IndexNow pide no hacer. El envío completo sigue
 * disponible a mano: `npm run indexnow`.
 *
 * Protegido con CRON_SECRET (Vercel lo manda como `Authorization: Bearer …`).
 * Sin la variable configurada no hace nada, para que nadie use la llave.
 */
const KEY = '2bcfbf863a59562549f2fcd14e3a17be'; // la misma de scripts/indexnow.mjs y public/<KEY>.txt
const HOST = 'aurin.mx';
const DAY_MS = 24 * 60 * 60 * 1000;

/** 'YYYY-MM-DD' en hora del centro de México. */
const cdmxDate = (ms: number) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Mexico_City' }).format(ms);

export const GET: APIRoute = async ({ request }) => {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const now = Date.now();
  const today = cdmxDate(now);
  const yesterday = cdmxDate(now - DAY_MS);
  const url = (path: string) => `https://${HOST}${path}`;

  const landings = ALL_LANDINGS.filter(
    // isPublished descarta fechas futuras: nunca se avisa de un 404.
    (l) => l.publishAt && isPublished(l, now) && cdmxDate(Date.parse(l.publishAt)) === today
  ).flatMap((l) => [url(landingPath(l, 'es')), url(landingPath(l, 'en'))]);

  const guides = GUIDES.filter((g) => g.updated === yesterday).flatMap((g) => [
    url(guidePath(g, 'es')),
    url(guidePath(g, 'en')),
  ]);

  // Si el CMS falla, se avisa lo demás igual.
  const projects: string[] = [];
  try {
    const [es, en] = await Promise.all([PayloadAPI.getProjects('es'), PayloadAPI.getProjects('en')]);
    for (const p of es) {
      if (p.updatedAt && cdmxDate(Date.parse(p.updatedAt)) === yesterday) {
        projects.push(url(`/project/${encodeURIComponent(p.slug)}`));
      }
    }
    for (const p of en) {
      if (p.updatedAt && cdmxDate(Date.parse(p.updatedAt)) === yesterday) {
        projects.push(url(`/en/project/${encodeURIComponent(p.slug)}`));
      }
    }
  } catch (error) {
    console.error('IndexNow: no se pudieron leer los proyectos de Payload', error);
  }

  const urlList = [...new Set([...landings, ...guides, ...projects])];
  if (urlList.length === 0) return Response.json({ sent: 0 });

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });

  // 200 = recibido, 202 = recibido y validando la llave.
  return Response.json(
    { sent: urlList.length, urls: urlList, indexnow: res.status },
    { status: res.ok ? 200 : 502 }
  );
};
