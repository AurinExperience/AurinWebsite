## 1. Configuración de Assets e Infraestructura

- [x] 1.1 Limpiar `public/robots.txt` y eliminar el sitemap estático obsoleto `public/sitemap.txt`
- [x] 1.2 Configurar directivas correctas de bots de IA y motores de búsqueda en `public/robots.txt`


## 2. Actualización del Componente de SEO y Layouts

- [x] 2.1 Modificar `src/blocks/shared/SEO/AdvancedSEO.astro` para soportar tags `hreflang` y locales alternativos
- [x] 2.2 Integrar mapeo automático de rutas de idioma para las versiones en español e inglés
- [x] 2.3 Agregar etiquetas `<link rel="preconnect">` y `<link rel="dns-prefetch">` en el `<head>` de `src/layouts/Layout.astro` para mejorar Core Web Vitals (LCP y INP)
- [x] 2.4 Auditar y ajustar los componentes de página principales para garantizar que cada uno tenga exactamente un `<h1>` y estructura de headings semántica para RAG


## 3. Generación del Sitemap Dinámico

- [x] 3.1 Crear el endpoint de Astro `src/pages/sitemap.xml.ts`
- [x] 3.2 Implementar lógica en `sitemap.xml.ts` para renderizar rutas estáticas y consultar proyectos del CMS vía `PayloadAPI`
- [x] 3.3 Configurar las declaraciones del namespace `xmlns:xhtml` en el XML y mapear los enlaces de idiomas alternativos (`xhtml:link`) para todas las URL generadas


## 4. Verificación y Pruebas

- [x] 4.1 Levantar el servidor local y validar el formato XML de `/sitemap.xml` y la estructura de metatags
- [x] 4.2 Ejecutar `npm run build` para asegurar que el build de producción finaliza sin errores


