import type { Lang, Guide } from './types';
import { costoPaginaWeb } from './costo-pagina-web';
import { elegirAgencia } from './elegir-agencia';
import { redisenarSinPerderSeo } from './redisenar-sin-perder-seo';
import { sitioWebBilingue } from './sitio-web-bilingue';
import { costoBranding } from './costo-branding';
import { wixWordpressAMedida } from './wix-wordpress-a-medida';
import { paginaWebHotel } from './pagina-web-hotel';
import { tiempoPaginaWeb } from './tiempo-pagina-web';
import { costoUxUi } from './costo-ux-ui';
import { nearshoreMexico } from './nearshore-mexico';
import { briefPaginaWeb } from './brief-pagina-web';

export type { Lang, Guide, GuideCopy, GuideSection } from './types';

/**
 * Las guías publicadas. Mismo contrato que las landings: lista cerrada, y lo
 * que esté en `draft` no existe para el usuario ni para Google.
 */
const ALL_GUIDES: Guide[] = [
  costoPaginaWeb,
  elegirAgencia,
  redisenarSinPerderSeo,
  sitioWebBilingue,
  costoBranding,
  wixWordpressAMedida,
  paginaWebHotel,
  tiempoPaginaWeb,
  costoUxUi,
  nearshoreMexico,
  briefPaginaWeb,
];

export const GUIDES: Guide[] = ALL_GUIDES.filter((g) => g.status === 'live');

const PREFIX: Record<Lang, string> = {
  es: '/guias/',
  en: '/en/guides/',
};

/** Índice de la sección, por idioma. */
export const guidesIndexPath: Record<Lang, string> = {
  es: '/guias',
  en: '/en/guides',
};

export function guidePath(guide: Guide, lang: Lang): string {
  return `${PREFIX[lang]}${guide.slug[lang]}`;
}

/** `undefined` para cualquier slug desconocido: no se inventan URLs. */
export function findGuide(slug: string | undefined, lang: Lang): Guide | undefined {
  if (!slug) return undefined;
  return GUIDES.find((guide) => guide.slug[lang] === slug);
}

/**
 * Las guías que siguen a `current`, dando la vuelta al final de la lista. Con un
 * simple filtro, "Otras guías" mostraba siempre las primeras tres y las guías
 * nuevas, al final de la lista, no recibían enlaces de ninguna otra.
 */
export function siblingGuides(current: Guide): Guide[] {
  const i = GUIDES.findIndex((guide) => guide.id === current.id);
  return [...GUIDES.slice(i + 1), ...GUIDES.slice(0, i)];
}

/**
 * Pares ES/EN para `slugExceptions` de i18n/utils, igual que las landings: los
 * slugs de las guías tampoco se traducen solos.
 */
export const guideSlugPairs: Record<string, { es: string; en: string }> = Object.fromEntries(
  [
    ...GUIDES.map((guide) => ({
      es: guidePath(guide, 'es'),
      en: guidePath(guide, 'en'),
    })),
    { es: guidesIndexPath.es, en: guidesIndexPath.en },
  ].flatMap((pair) => [
    [pair.es, pair],
    [pair.en, pair],
  ])
);
