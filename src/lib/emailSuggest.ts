/**
 * Sugiere el dominio correcto cuando el correo trae un dedazo en un proveedor
 * común ("juan@gmial.com" → "juan@gmail.com"). Corre en el navegador.
 */

// ponytail: lista de proveedores comunes en MX/EE. UU./España; agregar aquí si vemos dedazos de otros.
const DOMAINS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'yahoo.com',
  'icloud.com',
  'live.com',
  'hotmail.es',
  'outlook.es',
  'yahoo.es',
  'yahoo.com.mx',
  'live.com.mx',
  'prodigy.net.mx',
  'msn.com',
  'aol.com',
  'protonmail.com',
];

/** Levenshtein con transposición (gmial → gmail cuesta 1). */
function distance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

/** El correo corregido, o null si no hay nada que sugerir. */
export function suggestEmail(email: string): string | null {
  const at = email.trim().lastIndexOf('@');
  if (at < 1) return null;
  const user = email.trim().slice(0, at);
  const domain = email.trim().slice(at + 1).toLowerCase();
  if (!domain || DOMAINS.includes(domain)) return null;

  let best: string | null = null;
  let bestDistance = Infinity;
  for (const candidate of DOMAINS) {
    const dist = distance(domain, candidate);
    if (dist < bestDistance) [best, bestDistance] = [candidate, dist];
  }
  // Dominios cortos toleran menos: con 2 cambios, "aol.com" atraparía casi cualquier dominio corto.
  const maxDistance = best!.length >= 9 ? 2 : 1;
  return bestDistance <= maxDistance ? `${user}@${best}` : null;
}
