import type { APIRoute } from 'astro';
import { appendSheetRow } from '@/lib/mailing/leadSheet';

/*
 * Cuenta quién acepta o rechaza las cookies, en la pestaña "Cookies" de la hoja de leads
 * (Looker Studio la lee). Va aparte de GA4 a propósito: quien rechaza no carga GA4, y
 * mandarle a Google un evento de alguien que dijo "no" sería justo lo que rechazó.
 * Sin IP, sin ID ni cookies: solo la decisión y de dónde, aprox. (la zona horaria).
 *
 * Encabezados de la pestaña "Cookies":
 * Fecha | Decisión | Región | Aviso | Zona horaria | Página
 */
const CHOICES: Record<string, string> = { granted: 'Aceptó', denied: 'Rechazó' };
const MODES: Record<string, string> = { ask: 'Pregunta', notice: 'Informativo', settings: 'Preferencias' };

export const POST: APIRoute = async ({ request, url }) => {
  // ponytail: solo filtra peticiones de otros sitios; si alguien llena la hoja a mano, rate limit en Vercel
  // (por host y no por origin: detrás del proxy de Vercel el protocolo interno puede no ser https)
  if (request.headers.get('origin')?.replace(/^https?:\/\//, '') !== url.host) {
    return new Response(null, { status: 403 });
  }

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(await request.text()); // sendBeacon manda text/plain
  } catch {
    return new Response(null, { status: 400 });
  }
  const choice = CHOICES[String(data.choice)];
  if (!choice) return new Response(null, { status: 400 });

  await appendSheetRow('Cookies', [
    new Date().toISOString(),
    choice,
    data.optIn ? 'Europa/Canadá' : 'Resto',
    MODES[String(data.mode)] ?? '',
    String(data.tz ?? '').slice(0, 50),
    String(data.page ?? '').slice(0, 200),
  ]);
  return new Response(null, { status: 204 });
};
