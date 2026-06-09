## Why

Las keywords actuales giran en torno a "branding" y "diseño gráfico" como conceptos genéricos, pero los clientes potenciales buscan servicios concretos: "diseño UX/UI", "desarrollo web", "pruebas de usabilidad", "desarrollo de branding" o "marketing digital". El sitio ya ofrece estos servicios pero no los menciona con suficiente claridad ni especificidad en titles, descriptions y keywords, por lo que se pierde tráfico cualificado de búsquedas de servicio específico.

El reto es integrar estas keywords de forma natural — que suenen a conversación real con un cliente, no a una lista de términos SEO forzada.

## What Changes

- Actualizar los bloques `seo` de las páginas **Servicios** (ES y EN) para que cada uno de los 5 servicios quede explícitamente nombrado en description y keywords
- Actualizar los bloques `seo` de **Home** (ES y EN) para incluir 2-3 servicios específicos en la description como ejemplos concretos del trabajo de Aurin
- Actualizar los bloques `seo` de **Proyectos** (ES y EN) para reflejar que el portafolio cubre estas 5 categorías de servicio
- Añadir variantes long-tail de cada keyword (e.g., "agencia UX UI México", "desarrollo ecommerce a medida") para capturar búsquedas más específicas

Solo se edita `src/i18n/translations.ts`. No cambia arquitectura ni componentes.

## Capabilities

### New Capabilities
*(ninguna — es solo actualización de contenido)*

### Modified Capabilities
- `seo-content-guidelines`: Las reglas de keywords se amplían para incluir los 5 grupos de servicio objetivo y sus variantes long-tail. Las descriptions deben nombrar al menos dos servicios concretos con lenguaje natural.
- `seo-metadata`: El contenido de metadata de Home, Servicios y Proyectos cambia para incorporar los servicios específicos.

## Impact

- Solo se edita `src/i18n/translations.ts` (bloques `seo` de `home`, `services` y `projects`, en `es` y `en`)
- Cambio puramente de contenido; sin riesgo de regresiones técnicas
- Las keywords anteriores (branding, identidad corporativa) se mantienen pero se complementan con los 5 servicios específicos
