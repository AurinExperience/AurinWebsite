import type { Lang, LandingCopy, ProofProjectId } from '@/data/landings';
import { COMMON } from '@/data/landings/common';
import type { Sector, SectorService } from './index';
import { SECTOR_COMMON } from './common';

/**
 * Arma un sector a partir de lo único que tiene (ángulo, servicios, preguntas
 * propias, prueba social). El esqueleto —títulos derivados, proceso, preguntas
 * compartidas, bloque de sectores— sale de aquí para que los 20+ sectores no
 * repitan 150 líneas de lo mismo y no se desincronicen.
 *
 * Los primeros sectores (medicos, dentistas…) están escritos a mano y no usan
 * esto; el resultado es el mismo tipo `Sector`.
 */

type Faq = LandingCopy['faq']['items'][number];
type Item = LandingCopy['services']['items'][number];

export interface LangSpec {
  /** Título SEO sin " | Aurin". También es el nombre del servicio en el schema. */
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  /** H1 visible (y línea pequeña sobre él). */
  subtitle: string;
  /** Segunda línea del H1, en amarillo: "Concesionarias". */
  accent: string;
  /** Para quién, en plural y minúsculas: "concesionarias". Alimenta encabezados y enlaces. */
  target: string;
  hero: string;
  /** Dato de prueba real del sector ("ya trabajamos con…"). Sin él se usan los genéricos. */
  stat?: { value: string; label: string };
  intro: string;
  items: Item[];
  /** Web: texto del paso "Diagnóstico". */
  diagnosis?: string;
  /** Web: lista de páginas del paso "Estructura" ("inventario, sucursales y contacto"). */
  pages?: string;
  /** UX/UI: texto del paso "Investigación". */
  research?: string;
  /** Alcance que mueve el precio, para la pregunta de costo. */
  costScope: string;
  costQuestion: string;
  /** 2-3 preguntas propias del sector. */
  faqs: Faq[];
  /** Web: "mi concesionaria" para la pregunta de IA. */
  aiSubject?: string;
  /** "concesionarias" para la pregunta de trabajo a distancia. */
  remoteWho: string;
  proofText: string;
  /** "el sitio web de una concesionaria". */
  howTo: string;
  lead: { heading: string; description: string; messagePlaceholder: string };
}

export interface SectorDef {
  id: string;
  service?: SectorService;
  /** 'US' = para empresas de Estados Unidos (ver Sector.country). */
  country?: 'MX' | 'US';
  publishAt: string;
  slug: Record<Lang, string>;
  name: Record<Lang, string>;
  proof: ProofProjectId[];
  es: LangSpec;
  en: LangSpec;
}

const WORDS = {
  es: {
    web: { lead: 'Diseño Web para', link: 'Diseño web para', services: 'Diseño web para', servicesTail: 'lo que puede incluir tu sitio', topic: 'diseño web', cta: 'Cotiza tu sitio' },
    uxui: { lead: 'Diseño UX/UI para', link: 'Diseño UX/UI para', services: 'Diseño UX/UI para', servicesTail: 'lo que puede incluir tu proyecto', topic: 'diseño UX/UI', cta: 'Cotiza tu proyecto' },
    secondary: 'Ver cómo trabajamos',
    faqHeading: (topic: string, target: string) => `Preguntas frecuentes sobre ${topic} para ${target}`,
    faqDescription: (target: string) => `Lo que nos preguntan ${target} antes de contratar.`,
    cost: (scope: string) => `Depende del alcance: ${scope}. Después de una llamada te mandamos una cotización desglosada.`,
    diagnosisName: 'Diagnóstico',
    structure: (pages: string) => ({
      name: 'Estructura',
      text: `Definimos las páginas: ${pages}. Todo organizado para que Google y los buscadores con IA lo entiendan.`,
    }),
    howTo: (what: string) => `Proceso paso a paso para diseñar ${what}.`,
  },
  en: {
    web: { lead: 'Web Design for', link: 'Web design for', services: 'Web design for', servicesTail: 'what your site can include', topic: 'web design', cta: 'Request a quote' },
    uxui: { lead: 'UX/UI Design for', link: 'UX/UI design for', services: 'UX/UI design for', servicesTail: 'what your project can include', topic: 'UX/UI design', cta: 'Request a quote' },
    secondary: 'See how we work',
    faqHeading: (topic: string, target: string) => `Frequently asked questions about ${topic} for ${target}`,
    faqDescription: (target: string) => `What ${target} ask us before signing.`,
    cost: (scope: string) => `It depends on scope: ${scope}. After a call we send an itemized quote.`,
    diagnosisName: 'Discovery call',
    structure: (pages: string) => ({
      name: 'Structure',
      text: `We define the pages: ${pages}. All organized so Google and AI search tools can understand it.`,
    }),
    howTo: (what: string) => `Step-by-step process to design ${what}.`,
  },
};

function buildCopy(spec: LangSpec, lang: Lang, service: SectorService, us: boolean): LandingCopy {
  const w = WORDS[lang];
  const kind = w[service];
  const c = COMMON[lang];
  const s = SECTOR_COMMON[lang];
  const ux = service === 'uxui';
  // EE. UU.: el dato de "nearshore" y la pregunta de trabajar desde México
  if (us) spec = { ...spec, stat: spec.stat ?? s.us.stat };
  const remote = us ? s.us.faqRemote(spec.remoteWho) : s.faqRemote(spec.remoteWho);

  const stats = ux
    ? [c.stats[0], s.ux.stats, spec.stat ?? c.stats[1]]
    : spec.stat
      ? [c.stats[0], c.stats[2], spec.stat]
      : c.stats;

  const steps = ux
    ? [s.ux.stepResearch(spec.research ?? ''), s.ux.stepFlows, s.ux.stepUi, s.ux.stepHandoff]
    : [{ name: w.diagnosisName, text: spec.diagnosis ?? '' }, w.structure(spec.pages ?? ''), c.stepDesign, c.stepLaunch];

  const cost: Faq = { question: spec.costQuestion, answer: w.cost(spec.costScope) };
  // EE. UU.: además, cómo usamos la IA en el proceso (rapidez sin bajar la calidad)
  const faqs = us ? [...spec.faqs, s.us.faqAiProcess] : spec.faqs;
  const faqItems = ux
    ? [cost, ...faqs, s.ux.faqDev, s.ux.faqTeam, c.faqPayment, remote]
    : [cost, ...faqs, s.faqAi(spec.aiSubject ?? ''), c.faqPayment, remote, c.faqLanguages];

  return {
    seo: { title: `${spec.seoTitle} | Aurin`, description: spec.seoDescription, keywords: spec.keywords },
    hero: {
      subtitle: spec.subtitle,
      titleLead: kind.lead,
      titleAccent: spec.accent,
      description: spec.hero,
      cta: kind.cta,
      ctaSecondary: w.secondary,
      stats,
    },
    services: { heading: `${kind.services} ${spec.target}: ${kind.servicesTail}`, intro: spec.intro, items: spec.items },
    process: {
      heading: ux ? s.ux.processHeading : c.processHeading,
      description: ux ? s.ux.processDescription : c.processDescription,
      steps,
    },
    faq: {
      heading: w.faqHeading(kind.topic, spec.target),
      description: w.faqDescription(spec.target),
      items: faqItems,
    },
    socialProof: { heading: c.proofHeading, description: spec.proofText },
    nearby: us ? s.us.nearby : s.nearby,
    linkLabel: `${kind.link} ${spec.target}`,
    breadcrumb: `${kind.lead} ${spec.accent}`,
    serviceName: spec.seoTitle,
    howToDescription: w.howTo(spec.howTo),
  };
}

export function defineSector(def: SectorDef): Sector {
  const service = def.service ?? 'web';
  return {
    id: def.id,
    service,
    country: def.country,
    status: 'live',
    publishAt: def.publishAt,
    slug: def.slug,
    name: def.name,
    proof: def.proof,
    lead: { es: def.es.lead, en: def.en.lead },
    copy: { es: buildCopy(def.es, 'es', service, def.country === 'US'), en: buildCopy(def.en, 'en', service, def.country === 'US') },
  };
}
