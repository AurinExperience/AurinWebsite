import { defineMiddleware } from 'astro:middleware';
import { addCacheTag } from '@vercel/functions';
import { CMS_CACHE_TAG } from '@/lib/cache';

/*
 * Cache del CDN para las páginas HTML. Sin esto cada visita (y cada bot) paga
 * el SSR, y la primera tras un rato paga además el arranque en frío de la
 * función: ~4.5 s en el home, justo lo que ve un crawler que llega de a una.
 *
 * Sin `Vary` por país: una sola copia por página para todos los visitantes.
 * Las páginas llevan la etiqueta CMS_CACHE_TAG: Payload avisa a /api/revalidate
 * al guardar y se borran del CDN al instante. s-maxage=60 queda de respaldo por
 * si un aviso falla (el cambio sale igual en ~1 min).
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
    await addCacheTag(CMS_CACHE_TAG); // fuera de Vercel no hace nada
  }

  return response;
});
