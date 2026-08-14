## Context

Aurin es un sitio Astro 5 SSR (desplegado en Vercel) con React islands, CSS Modules, i18n ES/EN, y un sistema robusto de SEO (`AdvancedSEO.astro` + `GlobalSchema.astro`). Las páginas siguen un patrón consistente: un route file en `src/pages/` delega a un page component en `src/components/pages/`, que a su vez compone bloques de `src/blocks/`. Cada bloque es un directorio con un `.astro` y un `.module.css` co-localizado. El sistema ya soporta structured data (JSON-LD), speakable markup, hreflang alternates, y meta tags para bots de IA.

El objetivo es crear una landing page de servicio geolocalizado (Diseño Web para Nuevo León) que funcione como piloto para una estrategia de SEO local escalable. La arquitectura debe ser reutilizable para que se puedan crear fácilmente landing pages para otros servicios (branding, UX/UI) y otras regiones (CDMX, Jalisco, etc.).

## Goals / Non-Goals

**Goals:**
- Posicionar para búsquedas locales de diseño web en Nuevo León (SEO local).
- Optimizar para respuestas en motores de IA — featured snippets, People Also Ask, asistentes de voz (AEO).
- Incluir señales de geolocalización para motores generativos que consideren proximidad (GEO).
- Maximizar la conversión de leads con un diseño persuasivo y un formulario simplificado.
- Crear una arquitectura escalable y reutilizable para futuras landing pages geo-localizadas.
- Mantener coherencia con el sistema de diseño existente (CSS tokens, tipografía, color palette).

**Non-Goals:**
- No se creará un sistema dinámico de generación de landing pages — por ahora son páginas estáticas por cada servicio/región.
- No se implementará Google Business Profile integration ni Google Maps embed en esta iteración.
- No se modificará la estructura de navegación principal (MegaMenu) — las landing pages no necesitan aparecer en la nav principal.
- No se implementará A/B testing framework.
- No se creará un CRM o lead management system — el formulario usa la infraestructura existente de Resend.

## Decisions

### 1. Arquitectura de Rutas: Slug Descriptivo vs. Jerarquía Anidada

**Decisión**: Usar slug plano descriptivo `/diseno-web-nuevo-leon` (ES) y `/en/web-design-nuevo-leon` (EN).

**Alternativas consideradas**:
- `/servicios/diseno-web/nuevo-leon` (jerarquía de breadcrumbs) — más semántica pero diluye la keyword density en la URL y añade complejidad innecesaria al routing.
- `/nl/diseno-web` (prefijo región) — confuso para SEO porque `/nl` podría interpretarse como idioma neerlandés.

**Rationale**: Las URLs planas con keywords concentradas tienen mejor rendimiento en SERPs según estudios de Ahrefs/Moz. El BreadcrumbList schema compensa la falta de jerarquía visual en la URL.

### 2. Patrón de Bloques: Dedicados vs. Genéricos Parametrizados

**Decisión**: Crear bloques dedicados en `src/blocks/landing-web-design/` que reciban datos vía i18n, pero con estructura reutilizable para futuras landings.

**Alternativas consideradas**:
- Bloques genéricos compartidos con props para todo — demasiada abstracción prematura que dificulta el SEO content tuning por página.
- Copiar bloques existentes de services — viola DRY sin beneficio real.

**Rationale**: Los bloques dedicados permiten content tuning granular (crucial para SEO), mientras que el patrón de recibir datos vía translations mantiene la reutilización del template visual. Cuando se creen más landings, se podrá extraer un `LandingPageTemplate` componente.

### 3. Structured Data Strategy: Multi-Schema Graph

**Decisión**: Usar `@graph` con múltiples schemas interconectados: `Service`, `LocalBusiness`, `FAQPage`, `BreadcrumbList`, y `HowTo`.

**Alternativas consideradas**:
- Schema único de `WebPage` — insuficiente para rich snippets específicos.
- Schemas separados sin `@graph` — genera duplicación de entidades (Organization repetida).

**Rationale**: `@graph` con `@id` references es la práctica recomendada por Google y permite reutilizar la entidad Organization sin duplicarla. FAQPage es el schema más efectivo para AEO (genera expandable FAQ en SERPs y alimenta respuestas de LLMs).

### 4. Formulario de Captación: Simplificado vs. Multi-Step

**Decisión**: Formulario inline simplificado (nombre, email, teléfono, tipo de proyecto, mensaje) integrado directamente en la landing, NO un redirect a `/contact`.

**Alternativas consideradas**:
- Redirect al formulario de contacto existente — pierde contexto y aumenta abandono.
- Multi-step wizard — over-engineering para el volumen actual.

**Rationale**: El formulario simplificado reduce fricción y mantiene el contexto "diseño web". Reutiliza el endpoint API existente de contacto (`/api/contact`) con un campo adicional de `source` para tracking.

### 5. AEO Content Strategy: FAQ con Natural Language

**Decisión**: Sección FAQ con preguntas naturales basadas en "People Also Ask" y búsquedas de voz, marcadas con `FAQPage` schema y `speakable` specification.

**Alternativas consideradas**:
- Solo content blocks sin FAQ — pierde la oportunidad de featured snippets y PAA.
- FAQ en accordion genérico — pierde el beneficio de structured data.

**Rationale**: Las FAQs con schema `FAQPage` son la forma más directa de aparecer en PAA boxes y featured snippets. El speakable markup complementa para asistentes de voz. Las respuestas deben ser concisas (40-60 palabras) para que los LLMs las puedan citar directamente.

### 6. GEO Signals: Granularidad de Ubicación

**Decisión**: Usar `AdministrativeArea` para Nuevo León como `areaServed`, con `GeoCoordinates` del centro de Monterrey, y menciones contextuales de municipios clave en el contenido.

**Alternativas consideradas**:
- Solo `areaServed: "MX"` genérico — ya existe en el schema global, no diferencia.
- Coordenadas de múltiples ciudades — over-specified para Schema sin beneficio probado.

**Rationale**: Los motores generativos como Google SGE y Perplexity usan `areaServed` y coordenadas para determinar relevancia geográfica. Las menciones contextuales de municipios (Monterrey, San Pedro Garza García, San Nicolás de los Garza, etc.) refuerzan la señal sin parecer spam.

## Risks / Trade-offs

- **[Contenido duplicado con `/services`]** → Mitigación: El contenido de la landing es sustancialmente diferente (geo-específico, FAQs únicas, schema diferente). Se pueden agregar `rel="canonical"` self-referencing para reforzar.
- **[Mantenimiento de múltiples landing pages]** → Mitigación: La arquitectura de i18n permite mantener contenido centralizado. En el futuro, si se escala a muchas regiones, se puede crear un template parametrizado.
- **[Keyword cannibalization]** → Mitigación: Keywords de la landing son geo-específicos ("diseño web Monterrey") vs. keywords genéricos de services ("diseño web México"). Se valida que no se superpongan en `seo-content-guidelines`.
- **[Performance de la landing]** → Mitigación: Sin dependencias nuevas de npm. Imágenes en WebP desde R2. CSS Modules previenen CSS no usado.

## File Architecture

```
src/
├── pages/
│   ├── diseno-web-nuevo-leon.astro         # ES route
│   └── en/
│       └── web-design-nuevo-leon.astro     # EN route
├── components/
│   └── pages/
│       └── WebDesignNLPage.astro           # Shared page component
├── blocks/
│   └── landing-web-design/
│       ├── HeroLanding/
│       │   ├── HeroLanding.astro
│       │   └── HeroLanding.module.css
│       ├── ServicesIncluded/
│       │   ├── ServicesIncluded.astro
│       │   └── ServicesIncluded.module.css
│       ├── ProcessSteps/
│       │   ├── ProcessSteps.astro
│       │   └── ProcessSteps.module.css
│       ├── SocialProof/
│       │   ├── SocialProof.astro
│       │   └── SocialProof.module.css
│       ├── FaqSection/
│       │   ├── FaqSection.astro
│       │   └── FaqSection.module.css
│       ├── LeadForm/
│       │   ├── LeadForm.astro
│       │   └── LeadForm.module.css
│       └── index.ts                        # Barrel export
└── types/
    └── seo.ts                              # Add FAQPage, HowTo, BreadcrumbList types
```
