import type { APIRoute } from 'astro';
import { sendContactEmail } from '@/lib/mailing/service';
import { leadContext } from '@/lib/mailing/leadContext';

/*
 * Registro del mini-formulario del botón de WhatsApp (nombre, teléfono, mensaje).
 * El navegador abre WhatsApp con el mensaje en paralelo; este correo es el
 * respaldo por si la persona no termina de enviarlo allá.
 */
const json = (body: object, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'JSON inválido' }, 400);
  }

  const nombre = String(data.nombre ?? '').trim().slice(0, 100);
  const telefono = String(data.telefono ?? '').trim().slice(0, 30);
  const mensaje = String(data.mensaje ?? '').trim().slice(0, 1000);
  const origen = String(data.origen ?? '').slice(0, 500);

  // Honeypot: campo invisible que solo llenan los bots. Se responde 200 para no darles pista.
  if (data.empresa) return json({ success: true }, 200);

  if (!nombre || !mensaje) return json({ error: 'Nombre y mensaje requeridos' }, 400);
  const digits = telefono.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return json({ error: 'Teléfono inválido' }, 400);

  const result = await sendContactEmail({
    titulo: 'Nuevo mensaje por WhatsApp',
    nombre,
    telefono,
    contacto: 'WhatsApp (se abrió el chat con este mensaje)',
    asunto: 'Mensaje por WhatsApp',
    mensaje,
    origen,
    referrer: String(data.referrer ?? 'Directo').slice(0, 500),
    ...leadContext(request, clientAddress),
  });

  if (!result.success) {
    console.error('Error enviando lead de WhatsApp:', result.error);
    return json({ error: 'No se pudo enviar' }, 500);
  }
  return json({ success: true }, 200);
};
