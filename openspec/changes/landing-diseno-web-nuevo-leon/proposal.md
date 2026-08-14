## Why

Aurin necesita una landing page dedicada exclusivamente al servicio de **Diseño Web** geolocalizada para **Nuevo León**, México. Actualmente el sitio tiene una página genérica de servicios (`/services`) que agrupa todos los servicios sin diferenciación geográfica ni keyword targeting específico. Esta landing es el piloto de una estrategia de **SEO local + AEO (Answer Engine Optimization) + GEO (Generative Engine Optimization)** para captar clientes que buscan activamente "diseño web en Nuevo León", "agencia de diseño web en Monterrey" y variantes similares. El objetivo es posicionar a Aurin en los primeros resultados orgánicos, featured snippets y respuestas de motores de IA para búsquedas de diseño web en esa región.

## What Changes

- **Nueva ruta `/diseno-web-nuevo-leon`** (ES) y `/en/web-design-nuevo-leon` (EN) — landing page de servicio geolocalizado.
- **Nuevo page component** `WebDesignNuevoLeonPage.astro` siguiendo el patrón existente en `src/components/pages/`.
- **Nuevos bloques dedicados** en `src/blocks/landing-web-design/` con secciones optimizadas para conversión y SEO local:
  - Hero con propuesta de valor geolocalizada
  - Sección de servicios incluidos (paquetes web)
  - Social proof (testimonios y logos de clientes de NL)
  - Proceso de trabajo (cómo funciona)
  - FAQ estructurada (schema FAQPage para AEO)
  - CTA de conversión con formulario simplificado
- **Schema.org estructurado** con `LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList` y `HowTo` — optimizado para rich snippets y respuestas en motores de IA.
- **Contenido optimizado para AEO** — respuestas directas a preguntas frecuentes, speakable markup, contenido semántico con heading hierarchy (`h1` → `h2` → `h3`).
- **GEO signals** — `GeoCoordinates`, `areaServed` con `AdministrativeArea` para Nuevo León, menciones contextuales de ciudades del estado (Monterrey, San Pedro, San Nicolás, Apodaca, etc.).
- **Actualización del sitemap** para incluir la nueva ruta con alta prioridad.
- **Traducciones i18n** agregadas a `translations.ts` para el contenido de la landing.

## Capabilities

### New Capabilities
- `landing-web-design-page`: Página de servicio geolocalizada con arquitectura SEO/AEO/GEO completa, bloques de conversión, structured data local, FAQ schema, y formulario de captación de leads.

### Modified Capabilities
- `seo-metadata`: Agregar soporte para structured data de tipo `FAQPage`, `HowTo`, y `BreadcrumbList` en el sistema de SEO existente.

## Impact

- **Nuevos archivos**: ~10-12 archivos (page, page component, 5-6 bloques con sus CSS modules, types de SEO adicionales).
- **Archivos modificados**: `translations.ts` (nuevas claves), `sitemap.xml.ts` (nueva ruta), `seo.ts` (nuevos types de schema), `AdvancedSEO.astro` (soporte BreadcrumbList).
- **Sin breaking changes** — es una adición pura que no afecta páginas existentes.
- **Dependencias**: Ninguna dependencia nueva de npm — se usa el stack existente de Astro + CSS Modules + GSAP/Motion.
