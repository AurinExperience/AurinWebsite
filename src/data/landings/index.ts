import type { Lang, Landing } from './types';
import { monterrey } from './monterrey';
import { queretaro } from './queretaro';
import { cdmx } from './cdmx';
import { morelos } from './morelos';
import { jalisco } from './jalisco';
import { quintanaRoo } from './quintana-roo';
import { puebla } from './puebla';
import { guanajuato } from './guanajuato';
import { yucatan } from './yucatan';
import { bajaCalifornia } from './baja-california';

export type { Lang, Landing, LandingCopy } from './types';
export type { ProofProject, ProofProjectId } from './projects';
export { PROOF_PROJECTS } from './projects';

/**
 * Las ÚNICAS landings geolocalizadas que existen. Para agregar una ciudad:
 * un archivo nuevo en esta carpeta y una línea en este arreglo. El sitemap, los
 * hreflang, el footer y los enlaces entre landings salen todos de aquí, así que
 * no hay ninguna lista que se pueda quedar desincronizada.
 *
 * Cualquier slug que no esté en esta lista NO genera página (ver las rutas
 * `diseno-web-[ciudad].astro` y `en/web-design-[city].astro`).
 */
const ALL_LANDINGS: Landing[] = [
  monterrey,
  queretaro,
  cdmx,
  morelos,
  jalisco,
  quintanaRoo,
  puebla,
  guanajuato,
  yucatan,
  bajaCalifornia,
];

/**
 * Las landings PUBLICADAS. Todo lo que mira al exterior —rutas, sitemap,
 * footer, enlaces cruzados— consume esta lista, así que una ciudad en `draft`
 * es invisible para Google y para el usuario sin tener que borrar su archivo.
 */
export const LANDINGS: Landing[] = ALL_LANDINGS.filter((l) => l.status === 'live');

const PREFIX: Record<Lang, string> = {
  es: '/diseno-web-',
  en: '/en/web-design-',
};

/** Ruta absoluta (sin dominio) de una landing en un idioma. */
export function landingPath(landing: Landing, lang: Lang): string {
  return `${PREFIX[lang]}${landing.slug[lang]}`;
}

/**
 * Busca la landing por el segmento de slug de la URL. Devuelve `undefined` para
 * cualquier valor desconocido — es lo que impide que se inventen URLs nuevas.
 */
export function findLanding(slug: string | undefined, lang: Lang): Landing | undefined {
  if (!slug) return undefined;
  return LANDINGS.find((landing) => landing.slug[lang] === slug);
}

/** Las demás landings, para el bloque de enlaces cruzados. */
export function siblingLandings(current: Landing): Landing[] {
  return LANDINGS.filter((landing) => landing.id !== current.id);
}

/**
 * Pares de rutas ES/EN de todas las landings, en el formato que espera
 * `slugExceptions` de i18n/utils. Sin esto el botón de idioma y los hreflang
 * apuntarían a URLs que no existen, porque estos slugs no se traducen solos.
 */
export const landingSlugPairs: Record<string, { es: string; en: string }> = Object.fromEntries(
  LANDINGS.flatMap((landing) => {
    const pair = { es: landingPath(landing, 'es'), en: landingPath(landing, 'en') };
    return [
      [pair.es, pair],
      [pair.en, pair],
    ];
  })
);
