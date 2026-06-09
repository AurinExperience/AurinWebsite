## Why

El SEO por página es genérico: los titles son demasiado largos o no priorizan la keyword principal, las meta descripciones no tienen llamada a la acción clara, y algunas keywords son repetitivas entre páginas. Mejorar este contenido aumenta el CTR en resultados de búsqueda y ayuda a Google a entender la intención de cada página.

## What Changes

- Reescritura de `title`, `description` y `keywords` para cada página en ES y EN dentro de `src/i18n/translations.ts`
- Nuevas reglas de redacción SEO documentadas como spec para que futuros cambios sigan el mismo estándar
- La arquitectura existente (translations.ts → page components → Layout → AdvancedSEO) **no cambia**; solo se actualiza el contenido

Páginas afectadas (8 rutas, 2 idiomas cada una = 16 bloques SEO):
- Home (`/` y `/en/`)
- Nosotros / About (`/about` y `/en/about`)
- Servicios / Services (`/services` y `/en/services`)
- Proyectos / Projects (`/projects` y `/en/projects`)
- Contacto / Contact (`/contact` y `/en/contact`)
- Privacidad / Privacy (`/privacy` y `/en/privacy`)
- Términos / Terms (`/terms` y `/en/terms`)
- Proyecto individual / Project slug (`/project/[slug]` y `/en/project/[slug]`)

## Capabilities

### New Capabilities
- `seo-content-guidelines`: Reglas de redacción para titles (max 60 chars, keyword primero), descriptions (max 155 chars, incluye CTA), y keywords (5-8 términos sin repetición entre páginas hermanas).

### Modified Capabilities
- `seo-metadata`: Los valores de título, descripción y keywords cambian para todas las rutas (no cambia el comportamiento del sistema, solo el contenido de los metadatos).

## Impact

- Solo se edita `src/i18n/translations.ts` (los bloques `seo:` de cada sección en `en` y `es`)
- No hay cambios en componentes, layouts ni lógica de i18n
- El cambio es puramente de contenido; no rompe nada ni requiere build especial
