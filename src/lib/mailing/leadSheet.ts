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
  const sheetId = import.meta.env.LEADS_SHEET_ID;
  if (!sheetId) return;
  try {
    const auth = new JWT({
      email: import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: import.meta.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const { token } = await auth.getAccessToken();
    // RAW: un nombre que empiece con "=" no se vuelve fórmula
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Leads!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ values: [leadSheetRow(data)] }),
    });
    if (!response.ok) throw new Error(`${response.status} ${await response.text()}`);
  } catch (error) {
    // Va en paralelo al correo: perder la fila no debe tumbar el formulario
    console.error('No se pudo registrar el lead en Sheets:', error);
  }
}
