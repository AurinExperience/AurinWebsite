## 1. Infraestructura de Tipos y SEO

- [x] 1.1 Agregar interfaces `FAQPageStructuredData`, `HowToStructuredData`, y `BreadcrumbListStructuredData` a `src/types/seo.ts` y actualizar el union type `StructuredData`
- [x] 1.2 Agregar prop `additionalStructuredData` a la interfaz `Props` de `src/layouts/Layout.astro` y renderizar los JSON-LD blocks adicionales en `AdvancedSEO.astro`

## 2. Contenido i18n

- [x] 2.1 Agregar claves de traducción para la landing page en `src/i18n/translations.ts` — sección `webDesignNL` con sub-objetos: `seo` (title, description, keywords), `hero`, `services`, `process`, `faq`, `socialProof`, `leadForm`
- [x] 2.2 Agregar las traducciones EN equivalentes (adaptadas a search intent inglés, no traducción literal)

## 3. Bloques de la Landing Page

- [x] 3.1 Crear bloque `src/blocks/landing-web-design/HeroLanding/HeroLanding.astro` + `.module.css` — hero con H1 geolocalizado, subtitle, description, CTA que ancla al formulario
- [x] 3.2 Crear bloque `src/blocks/landing-web-design/ServicesIncluded/ServicesIncluded.astro` + `.module.css` — grid de 4-6 servicios web con H2/H3 hierarchy y menciones locales contextuales
- [x] 3.3 Crear bloque `src/blocks/landing-web-design/ProcessSteps/ProcessSteps.astro` + `.module.css` — sección de proceso visual con pasos numerados (Discovery → Design → Development → Launch)
- [x] 3.4 Crear bloque `src/blocks/landing-web-design/SocialProof/SocialProof.astro` + `.module.css` — testimonios con atribución y logos de clientes
- [x] 3.5 Crear bloque `src/blocks/landing-web-design/FaqSection/FaqSection.astro` + `.module.css` — accordion de 5-8 FAQs con respuestas concisas (40-80 palabras cada una)
- [x] 3.6 Crear bloque `src/blocks/landing-web-design/LeadForm/LeadForm.astro` + `.module.css` — formulario inline (nombre, email, teléfono, tipo proyecto, mensaje) que envía a `/api/contact` con `source: "landing-diseno-web-nl"`
- [x] 3.7 Crear barrel export `src/blocks/landing-web-design/index.ts`

## 4. Page Component y Rutas

- [x] 4.1 Crear page component `src/components/pages/WebDesignNLPage.astro` — componer Layout con todos los bloques, structured data multi-schema (`Service` + `FAQPage` + `BreadcrumbList` + `HowTo`), speakable selectors, y keywords geolocalizados
- [x] 4.2 Crear ruta ES `src/pages/diseno-web-nuevo-leon.astro` que importa y renderiza `WebDesignNLPage`
- [x] 4.3 Crear ruta EN `src/pages/en/web-design-nuevo-leon.astro` que importa y renderiza `WebDesignNLPage`

## 5. Integración con Sistema Existente

- [x] 5.1 Agregar la nueva ruta al array `staticPages` en `src/pages/sitemap.xml.ts` con `priority: '0.9'` y `changefreq: 'weekly'`
- [x] 5.2 Verificar que el formulario de lead funciona con el endpoint `/api/contact` existente — agregar manejo del campo `source` si es necesario

## 6. Verificación y QA

- [ ] 6.1 Verificar build (`npm run build`) sin errores de TypeScript ni warnings
- [ ] 6.2 Verificar que la página renderiza correctamente en dev server (`npm run dev`) — ambos idiomas
- [ ] 6.3 Validar structured data con Google Rich Results Test (manual) — verificar que FAQPage, HowTo, BreadcrumbList, y Service schemas son válidos
- [ ] 6.4 Verificar responsive layout en viewports 375px, 768px, 1280px, 1440px
- [ ] 6.5 Verificar heading hierarchy (exactamente un H1, H2s correctos, H3s anidados)
- [ ] 6.6 Verificar que keywords de la landing no se superponen con keywords de páginas existentes
- [ ] 6.7 Verificar que hreflang alternates apuntan a las URLs correctas en ambos idiomas
