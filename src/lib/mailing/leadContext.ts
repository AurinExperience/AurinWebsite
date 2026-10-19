/** Ubicación e IP del visitante desde los headers de Vercel (vacíos en local). */
export function leadContext(request: Request, clientAddress?: string) {
  const h = request.headers;
  const city = h.get('x-vercel-ip-city');
  const ubicacion =
    [city ? decodeURIComponent(city) : null, h.get('x-vercel-ip-country-region'), h.get('x-vercel-ip-country')]
      .filter(Boolean)
      .join(', ') || 'No disponible';
  const ip = h.get('x-vercel-forwarded-for') || h.get('x-forwarded-for') || clientAddress || 'No disponible';
  return { ubicacion, ip };
}

const LEAD_KEYS = [
  'lead_id',
  'lead_source',
  'form_page',
  'first_source',
  'first_medium',
  'first_campaign',
  'first_landing',
  'first_referrer',
  'first_visit',
] as const;

export type LeadAttribution = Partial<Record<(typeof LEAD_KEYS)[number], string>>;

/**
 * Atribución que arma `window.aurinLead` (Layout.astro). Viene del navegador:
 * solo se aceptan las llaves conocidas, como texto y recortadas.
 */
export function leadAttribution(raw: unknown): LeadAttribution | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const lead: LeadAttribution = {};
  for (const key of LEAD_KEYS) {
    const value = (raw as Record<string, unknown>)[key];
    if (value) lead[key] = String(value).slice(0, 500);
  }
  return Object.keys(lead).length ? lead : undefined;
}
