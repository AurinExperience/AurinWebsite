import type { APIRoute } from 'astro';
import { dangerouslyDeleteByTag } from '@vercel/functions';
import { CMS_CACHE_TAG } from '@/lib/cache';

export const prerender = false;

/*
 * Payload llama aquí al guardar o borrar un proyecto o una imagen. Borra del
 * CDN todas las páginas etiquetadas con CMS_CACHE_TAG (las marca el middleware),
 * así la siguiente visita ya las genera con los datos nuevos: el cambio se ve al
 * instante en lugar de esperar al s-maxage.
 *
 * Se borra el sitio completo y no solo la página del proyecto: el home, el
 * portafolio, Nosotros y Servicios también listan proyectos. Son pocas páginas.
 *
 * Protegido con REVALIDATE_SECRET (la misma variable en el proyecto de Payload).
 * Sin la variable configurada responde 401, para que nadie vacíe la caché.
 */
export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  await dangerouslyDeleteByTag(CMS_CACHE_TAG);
  return Response.json({ purged: CMS_CACHE_TAG });
};
