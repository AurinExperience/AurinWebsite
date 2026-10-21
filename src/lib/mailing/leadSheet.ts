/**
 * Registro de leads en Google Sheets: una fila por lead con su atribución.
 * Las últimas columnas (Contrató, Monto, Notas) se llenan a mano, y Looker
 * Studio lee la hoja para cruzar fuente → lead → venta.
 *
 * Usa la misma cuenta de servicio que Calendar; la hoja debe estar compartida
 * con ese correo como editor. Sin LEADS_SHEET_ID no hace nada.
 */
import { JWT } from 'google-auth-library';
import type { ContactFormData } from './types';

/*
 * Encabezados de la pestaña "Leads", en este orden:
 * Fecha | ID del lead | Formulario | Nombre | Correo | Teléfono | Servicio | Fuente |
 * Medio | Campaña | Primera página | Página del formulario | Primera visita |
 * Ubicación | Contrató | Monto | Notas
 */
export function leadSheetRow(data: ContactFormData, now = new Date()): string[] {
  const lead = data.lead ?? {};
  return [
    now.toISOString(),
    lead.lead_id ?? '',
    lead.lead_source ?? '',
    data.nombre,
    data.correo ?? '',
    data.telefono ?? '',
    data.servicio ?? '',
    lead.first_source ?? '',
    lead.first_medium ?? '',
    lead.first_campaign ?? '',
    lead.first_landing ?? '',
    lead.form_page ?? data.origen ?? '',
    lead.first_visit ?? '',
    data.ubicacion ?? '',
    '', '', '',
  ];
}

export async function appendLeadRow(data: ContactFormData): Promise<void> {
  await appendSheetRow('Leads', leadSheetRow(data));
}

async function sheetsToken(): Promise<string | null | undefined> {
  const auth = new JWT({
    email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: import.meta.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return (await auth.getAccessToken()).token;
}

/**
 * Reemplaza el contenido de varias pestañas (encabezado incluido). Para datos
 * que se recalculan completos cada vez, como las estadísticas de Bing. Crea
 * las pestañas que falten. Sí lanza: el que llama decide qué hacer.
 */
export async function replaceSheetTabs(tabs: Record<string, (string | number)[][]>): Promise<void> {
  const sheetId = import.meta.env.LEADS_SHEET_ID;
  if (!sheetId) throw new Error('Falta LEADS_SHEET_ID');
  const token = await sheetsToken();
  const sheet = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}`;
  const base = `${sheet}/values`;
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
  const ranges = Object.keys(tabs).map((tab) => `'${tab}'`);

  const meta = await fetch(`${sheet}?fields=sheets.properties.title`, { headers });
  if (!meta.ok) throw new Error(`${meta.status} ${await meta.text()}`);
  const existing = new Set(
    ((await meta.json()).sheets ?? []).map((s: { properties: { title: string } }) => s.properties.title)
  );
  const missing = Object.keys(tabs).filter((tab) => !existing.has(tab));
  if (missing.length) {
    const add = await fetch(`${sheet}:batchUpdate`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ requests: missing.map((title) => ({ addSheet: { properties: { title } } })) }),
    });
    if (!add.ok) throw new Error(`${add.status} ${await add.text()}`);
  }

  const clear = await fetch(`${base}:batchClear`, { method: 'POST', headers, body: JSON.stringify({ ranges }) });
  if (!clear.ok) throw new Error(`${clear.status} ${await clear.text()}`);

  const update = await fetch(`${base}:batchUpdate`, {
    method: 'POST',
    headers,
    // RAW: una búsqueda que empiece con "=" no se vuelve fórmula
    body: JSON.stringify({
      valueInputOption: 'RAW',
      data: Object.entries(tabs).map(([tab, values]) => ({ range: `'${tab}'!A1`, values })),
    }),
  });
  if (!update.ok) throw new Error(`${update.status} ${await update.text()}`);
}

/** Agrega una fila al final de una pestaña. Nunca lanza: registrar es secundario. */
export async function appendSheetRow(tab: string, row: string[]): Promise<void> {
  const sheetId = import.meta.env.LEADS_SHEET_ID;
  if (!sheetId) return;
  try {
    const token = await sheetsToken();
    // RAW: un nombre que empiece con "=" no se vuelve fórmula
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${tab}!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [row] }),
    });
    if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
  } catch (error) {
    // Va en paralelo al correo: perder la fila no debe tumbar el formulario
    console.error(`No se pudo registrar la fila en Sheets (${tab}):`, error);
  }
}
