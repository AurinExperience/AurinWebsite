## Context

El sitio ya tiene una arquitectura de SEO por idioma bien estructurada:
- `src/i18n/translations.ts` exporta un objeto `{ en: {...}, es: {...} }` con bloques `seo: { title, description, keywords }` por sección.
- Cada página component (e.g. `HomePage.astro`) lee `translations[currentLang].seo` y pasa los valores al `<Layout>`, que los inyecta en `<AdvancedSEO>`.
- El spec existente `seo-metadata` ya garantiza que el sistema renderice metadata única por ruta e idioma.

El problema es el **contenido** de esos campos: algunos titles superan 60 caracteres, las descriptions no tienen CTA claro, y las keywords se solapan entre páginas.

## Goals / Non-Goals

**Goals:**
- Titles ≤ 60 chars con keyword primaria al inicio
- Descriptions entre 120-155 chars con propuesta de valor + CTA implícito
- Keywords 5-8 por página, sin solapamiento entre páginas del mismo idioma
- Cobertura completa: todas las rutas estáticas en ES y EN
- Documentar reglas de redacción para mantener consistencia futura

**Non-Goals:**
- Cambiar el componente `AdvancedSEO.astro` o la estructura del sistema
- Modificar structured data / JSON-LD (ya cubierto por el spec `seo-metadata`)
- SEO técnico (Core Web Vitals, robots.txt, sitemap) — ya implementado
- Optimización para proyectos individuales (`/project/[slug]`) con metadata dinámica desde CMS — quedan como plantilla genérica con tokens del proyecto

## Decisions

### Decisión 1: Solo editar `translations.ts`, no el sistema

**Alternativas consideradas:**
- A) Crear un archivo separado `src/config/seo-content.ts` — más limpio semánticamente pero añade un nivel de indirección innecesario.
- B) Editar `translations.ts` directamente — es el single source of truth ya establecido, sin duplicación.

**Decisión:** Opción B. El sistema ya funciona, se respeta la convención existente.

### Decisión 2: Formato de title `Keyword Principal | Marca`

**Alternativas:**
- `Marca | Keyword` — la marca gana visibilidad pero la keyword queda al final donde tiene menos peso.
- `Keyword Principal | Aurin` — keyword primero maximiza relevancia SEO; la marca como sufijo es reconocida.

**Decisión:** `Keyword Principal | Aurin` para páginas de servicio/contenido. Home puede usar `Aurin | Diseño Gráfico y Branding en México` ya que en home la marca ES el producto.

### Decisión 3: Keywords no repetidas entre páginas

Cada página apunta a un grupo de keywords exclusivo para evitar canibalización. Home captura términos generales de agencia; Servicios captura términos de servicio específico; Proyectos captura portfolio; etc.

## Risks / Trade-offs

- **[Riesgo] Pérdida de posicionamiento actual** → Los titles/descriptions actuales ya tienen alguna indexación; cambiarlos puede causar fluctuación temporal en rankings. Mitigation: los cambios mejoran los valores sin salirse del tema de cada página.
- **[Riesgo] Titles en inglés que mencionan México** → Algunos clientes internacionales buscan "design agency Mexico" en inglés; mantener "Mexico" en títulos EN es intencional y correcto.
- **[Trade-off] Slug pages usan fallback genérico** → Los proyectos individuales usan un title/description genérico porque el contenido viene del CMS. Esto es aceptable para este cambio; una mejora futura puede inyectar el título y descripción del proyecto desde Payload.

## Migration Plan

1. Editar los bloques `seo:` en `translations.ts` — cambio de contenido puro, sin riesgo de build.
2. Verificar en dev (`npm run dev`) que los meta tags se rendericen correctamente en cada página.
3. Commit y deploy a Vercel — no requiere rollback especial; si hay problema, se revierte el commit.
