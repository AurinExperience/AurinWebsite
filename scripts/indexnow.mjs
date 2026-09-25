/*
 * Avisa a IndexNow (Bing, Yandex, Seznam… y por Bing, a ChatGPT Search) de
 * todas las URLs del sitemap en vivo. Correr después de un deploy a producción:
 *   npm run indexnow
 * La llave vive en public/<KEY>.txt; si se cambia, cambiar ambos.
 */
const KEY = '2bcfbf863a59562549f2fcd14e3a17be';
const HOST = 'aurin.mx';

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replaceAll('&amp;', '&'));

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

// 200 = recibido, 202 = recibido y la llave se está validando.
console.log(`IndexNow: ${urlList.length} URLs → ${res.status} ${res.statusText}`);
if (!res.ok) process.exit(1);
