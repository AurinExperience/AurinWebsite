import type { APIRoute } from 'astro';
import { ALL_LANDINGS, isPublished, landingPath } from '@/data/landings';

export const prerender = false;

/*
 * Cron diario de Vercel (vercel.json, 06:10 UTC = 00:10 en el centro de
 * México): avisa a IndexNow de las landings que se publicaron solas por
 * `publishAt` en las últimas horas. IndexNow reparte el aviso a Bing, Yandex,
 * Seznam, Naver… y por Bing llega a ChatGPT Search y Copilot. Google no usa
 * IndexNow: a Google le llega por el sitemap (lastmod = publishAt).
 *
 * Solo manda URLs nuevas, nunca el sitio completo: reenviar lo que no cambió es
 * justo lo que IndexNow pide no hacer. El envío completo tras un deploy sigue
 * siendo manual: `npm run indexnow`.
 *
 * Protegido con CRON_SECRET (Vercel lo manda como `Authorization: Bearer …`).
 * Sin la variable configurada no hace nada, para que nadie use la llave.
 */
const KEY = '2bcfbf863a59562549f2fcd14e3a17be'; // la misma de scripts/indexnow.mjs y public/<KEY>.txt
const HOST = 'aurin.mx';
// 26 h y no 24: un cron que corre unos minutos tarde no se salta el día.
const WINDOW_MS = 26 * 60 * 60 * 1000;

export const GET: APIRoute = async ({ request }) => {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const now = Date.now();
  const fresh = ALL_LANDINGS.filter((l) => {
    if (!l.publishAt || !isPublished(l, now)) return false;
    const age = now - Date.parse(l.publishAt);
    return age >= 0 && age < WINDOW_MS; // nunca una fecha futura: sería avisar de un 404
  });
  const urlList = fresh.flatMap((l) => [
    `https://${HOST}${landingPath(l, 'es')}`,
    `https://${HOST}${landingPath(l, 'en')}`,
  ]);

  if (urlList.length === 0) return Response.json({ sent: 0 });

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });

  // 200 = recibido, 202 = recibido y validando la llave.
  return Response.json({ sent: urlList.length, urls: urlList, indexnow: res.status }, { status: res.ok ? 200 : 502 });
};
