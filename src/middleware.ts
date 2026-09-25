import { defineMiddleware } from 'astro:middleware';

/*
 * Cache del CDN para las páginas HTML. Sin esto cada visita (y cada bot) paga
 * el SSR, y la primera tras un rato paga además el arranque en frío de la
 * función: ~4.5 s en el home, justo lo que ve un crawler que llega de a una.
 *
 * `Vary: X-Vercel-IP-Country` porque PhoneInput (en el botón de WhatsApp, o sea
 * en todas las páginas) preselecciona la lada por país: sin él, el primer
 * visitante de Colombia le fijaría +57 a todos.
 * ponytail: proyectos de Payload tardan hasta 1 h en verse; bajar s-maxage o
 * revalidar desde un webhook de Payload si eso estorba.
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
    response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
    response.headers.set('Vary', 'X-Vercel-IP-Country');
  }

  return response;
});
