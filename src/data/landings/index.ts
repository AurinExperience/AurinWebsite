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
import { houston } from './houston';
import { sanAntonio } from './san-antonio';
import { inlandEmpire } from './inland-empire';
import { phoenix } from './phoenix';
import { dallas } from './dallas';
// Estados de México en borrador (status: 'draft'): se revisan en dev/preview y se sueltan de a poco.
import { aguascalientes } from './aguascalientes';
import { bajaCaliforniaSur } from './baja-california-sur';
import { campeche } from './campeche';
import { chiapas } from './chiapas';
import { chihuahua } from './chihuahua';
import { coahuila } from './coahuila';
import { colima } from './colima';
import { durango } from './durango';
import { estadoDeMexico } from './estado-de-mexico';
import { guerrero } from './guerrero';
import { hidalgo } from './hidalgo';
import { michoacan } from './michoacan';
import { nayarit } from './nayarit';
import { oaxaca } from './oaxaca';
import { sanLuisPotosi } from './san-luis-potosi';
import { sinaloa } from './sinaloa';
import { sonora } from './sonora';
import { tabasco } from './tabasco';
import { tamaulipas } from './tamaulipas';
import { tlaxcala } from './tlaxcala';
import { veracruz } from './veracruz';
import { zacatecas } from './zacatecas';

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
  // EE. UU. (country: 'US'): se enlazan solo entre ellas.
  houston,
  sanAntonio,
  inlandEmpire,
  phoenix,
  dallas,
  // México, borradores.
  aguascalientes,
  bajaCaliforniaSur,
  campeche,
  chiapas,
  chihuahua,
  coahuila,
  colima,
  durango,
  estadoDeMexico,
  guerrero,
  hidalgo,
  michoacan,
  nayarit,
  oaxaca,
  sanLuisPotosi,
  sinaloa,
  sonora,
  tabasco,
  tamaulipas,
  tlaxcala,
  veracruz,
  zacatecas,
];

/**
 * Las landings PUBLICADAS. Todo lo que mira al exterior —rutas, sitemap,
 * footer, enlaces cruzados— consume esta lista, así que una ciudad en `draft`
 * es invisible para Google y para el usuario sin tener que borrar su archivo.
 *
 * Excepción: en `npm run dev` y en los previews de Vercel también se muestran
 * los `draft`, para revisarlos antes de publicarlos. Producción nunca los ve,
 * y Vercel ya marca los previews como noindex.
 */
const SHOW_DRAFTS = import.meta.env.DEV || process.env.VERCEL_ENV === 'preview';

export const LANDINGS: Landing[] = ALL_LANDINGS.filter(
  (l) => l.status === 'live' || SHOW_DRAFTS
);

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

/** Las demás landings del mismo país, para el bloque de enlaces cruzados. */
export function siblingLandings(current: Landing): Landing[] {
  const country = current.country ?? 'MX';
  return LANDINGS.filter(
    (landing) => landing.id !== current.id && (landing.country ?? 'MX') === country
  );
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
