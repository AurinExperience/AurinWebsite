import type { Lang, LandingCopy, ProofProjectId } from '@/data/landings';
import { isPublished } from '@/data/landings';
import { medicos } from './medicos';
// Programados de 4 en 4 con `publishAt` (como las landings por estado): se
// revisan en `npm run dev` y se publican solos en su fecha.
import { dentistas } from './dentistas';
import { estetica } from './estetica';
import { inmobiliarias } from './inmobiliarias';
import { arquitectos } from './arquitectos';
import { constructoras } from './constructoras';
import { contadores } from './contadores';
import { hoteles } from './hoteles';
import { veterinarias } from './veterinarias';
import { uxFintech } from './ux-fintech';
import { uxSaas } from './ux-saas';
import { uxHealthtech } from './ux-healthtech';
import { uxBanca } from './ux-banca';
import { uxHealthcare } from './ux-healthcare';
import { uxGobierno } from './ux-gobierno';
import { uxSeguros } from './ux-seguros';
import { uxInversiones } from './ux-inversiones';
import { uxEcommerce } from './ux-ecommerce';
import { uxLogistica } from './ux-logistica';
import { uxEnergia } from './ux-energia';
import { uxProptech } from './ux-proptech';
import { uxTurismo } from './ux-turismo';
import { concesionarias } from './concesionarias';
import { hospitales } from './hospitales';
import { laboratorios } from './laboratorios';
import { agentesSeguros } from './agentes-seguros';
import { consultoras } from './consultoras';
import { salonesEventos } from './salones-eventos';
import { joyerias } from './joyerias';
import { energiaSolar } from './energia-solar';
import { agroindustria } from './agroindustria';
import { franquicias } from './franquicias';
import { agenciasViajes } from './agencias-viajes';

/**
 * Landings de diseño web por SECTOR ("diseño web para médicos"). Son la otra
 * mitad del cluster comercial: las landings por estado responden "dónde", estas
 * responden "para quién".
 *
 * Mismo contrato que src/data/landings: lista cerrada, un archivo por sector y
 * `status`/`publishAt` para soltarlas de a una. Comparten el copy (LandingCopy)
 * y los bloques de las landings por ciudad; lo que no tienen es geografía.
 *
 * Dos servicios, dos rutas, porque la URL contiene la búsqueda:
 * - web:  /diseno-web-para-medicos (comparte ruta con las ciudades; no chocan
 *   porque todos los slugs de sector empiezan con "para-" / "for-").
 * - uxui: /diseno-ux-ui-para-fintech (productos digitales: apps y plataformas).
 */
export type SectorService = 'web' | 'uxui';

export interface Sector {
  id: string;
  /** Qué se vende en la página. Sin valor = diseño web. */
  service?: SectorService;
  status: 'live' | 'draft';
  publishAt?: string;
  /** Segmento de URL tras el prefijo del servicio (ver PREFIX). */
  slug: Record<Lang, string>;
  /** Nombre corto para listas ("Médicos y consultorios"). */
  name: Record<Lang, string>;
  /** Proyectos reales del CMS del mismo sector o uno cercano. */
  proof: ProofProjectId[];
  /** Textos propios del formulario de cotización (el diseño es el de siempre). */
  lead?: Record<Lang, { heading: string; description: string; messagePlaceholder: string }>;
  copy: Record<Lang, LandingCopy>;
}

const ALL_SECTORS: Sector[] = [
  medicos,
  // 2026-10-14
  dentistas,
  estetica,
  inmobiliarias,
  arquitectos,
  // 2026-10-15
  constructoras,
  contadores,
  hoteles,
  veterinarias,
  // 2026-10-16
  uxFintech,
  uxSaas,
  uxHealthtech,
  uxBanca,
  // 2026-10-17
  uxHealthcare,
  uxGobierno,
  uxSeguros,
  uxInversiones,
  // 2026-10-18
  uxEcommerce,
  uxLogistica,
  uxEnergia,
  uxProptech,
  // 2026-10-19
  uxTurismo,
  concesionarias,
  hospitales,
  laboratorios,
  // 2026-10-20
  agentesSeguros,
  consultoras,
  salonesEventos,
  joyerias,
  // 2026-10-21
  energiaSolar,
  agroindustria,
  franquicias,
  agenciasViajes,
];

/** Misma regla que las landings (incluye ver borradores en `npm run dev`). */
export function publishedSectors(): Sector[] {
  return ALL_SECTORS.filter((s) => isPublished(s));
}

const PREFIX: Record<SectorService, Record<Lang, string>> = {
  web: { es: '/diseno-web-', en: '/en/web-design-' },
  uxui: { es: '/diseno-ux-ui-', en: '/en/ux-ui-design-' },
};

export const sectorService = (sector: Sector): SectorService => sector.service ?? 'web';

/** Los demás sectores publicados, para el bloque de enlaces del final. */
export function siblingSectors(current: Sector): Sector[] {
  return publishedSectors().filter((s) => s.id !== current.id);
}

export function sectorPath(sector: Sector, lang: Lang): string {
  return `${PREFIX[sectorService(sector)][lang]}${sector.slug[lang]}`;
}

/** Solo busca entre los sectores del servicio de la ruta: cada URL existe una sola vez. */
export function findSector(
  slug: string | undefined,
  lang: Lang,
  service: SectorService = 'web'
): Sector | undefined {
  if (!slug) return undefined;
  return publishedSectors().find((sector) => sectorService(sector) === service && sector.slug[lang] === slug);
}

/** Pares ES/EN para `slugExceptions` de i18n/utils, igual que las landings. */
export const sectorSlugPairs: Record<string, { es: string; en: string }> = Object.fromEntries(
  ALL_SECTORS.flatMap((sector) => {
    const pair = { es: sectorPath(sector, 'es'), en: sectorPath(sector, 'en') };
    return [
      [pair.es, pair],
      [pair.en, pair],
    ];
  })
);
