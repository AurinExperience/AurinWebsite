import type { Lang, Guide } from './types';
import { costoPaginaWeb } from './costo-pagina-web';
import { elegirAgencia } from './elegir-agencia';
import { redisenarSinPerderSeo } from './redisenar-sin-perder-seo';
import { sitioWebBilingue } from './sitio-web-bilingue';

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

export function siblingGuides(current: Guide): Guide[] {
  return GUIDES.filter((guide) => guide.id !== current.id);
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
