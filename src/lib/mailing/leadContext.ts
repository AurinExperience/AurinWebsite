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
