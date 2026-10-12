import { defineMiddleware } from 'astro:middleware';

/*
 * Cache del CDN para las páginas HTML. Sin esto cada visita (y cada bot) paga
 * el SSR, y la primera tras un rato paga además el arranque en frío de la
 * función: ~4.5 s en el home, justo lo que ve un crawler que llega de a una.
 *
 * `Vary: X-Vercel-IP-Country` porque PhoneInput (en el botón de WhatsApp, o sea
 * en todas las páginas) preselecciona la lada por país: sin él, el primer
 * visitante de Colombia le fijaría +57 a todos.
 * s-maxage=60: un cambio en Payload se ve en ~1 min (la visita que llega tras
 * ese minuto aún recibe la copia anterior y dispara la nueva; la siguiente ya
 * la ve). stale-while-revalidate sigue evitando que alguien espere el SSR.
 * ponytail: purga por webhook de Payload (Vercel cache tags) si 1 min estorba.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const isHtml = response.headers.get('content-type')?.includes('text/html');

  if (
    context.request.method === 'GET' &&
    response.status === 200 &&
    isHtml &&
    !context.url.pathname.startsWith('/api/') &&
    !response.headers.has('cache-control')
  ) {
    response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=86400');
    response.headers.set('Vary', 'X-Vercel-IP-Country');
  }

  return response;
});
