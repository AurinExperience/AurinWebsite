## Why

The current website lacks automated dynamic sitemap generation, structured schema markup, localized page-specific metadata, and comprehensive crawler declarations. Implementing a modern SEO and AI-optimization framework will ensure the site is correctly indexed by traditional search engines and accurately synthesized/referred to by AI discovery tools (such as ChatGPT, Gemini, Perplexity, and Claude).

## What Changes

- Add dynamic sitemap.xml generation mapping both static paths and dynamic CMS pages.
- Extend the `<AdvancedSEO>` component to support granular metadata configurations, localizations, and AI bot settings.
- Define and implement page-level meta configuration across all pages (Index, About, Contact, Services, Projects, Terms, and Privacy) for both Spanish and English versions.
- Embed structured JSON-LD schemas (`WebSite`, `Organization`, `ProfessionalService`, and `ItemList` for projects) to enable rich results and better semantic comprehension by AI engines.
- Keep the `robots.txt` updated to explicitly allow AI search crawls and link to the generated dynamic sitemap.xml.
- **Retrocompatibility & Non-Breaking Guarantee**: All current layouts, styles, visual assets, interactive functionalities (such as animations or chatbot), and Payload CMS dynamic data connections MUST remain completely untouched and function exactly as they do today.

## Capabilities

### New Capabilities
- `seo-metadata`: Core page-level SEO properties, social graphics, JSON-LD schemas, search indexing instructions, and sitemap registration for all routes.

### Modified Capabilities
<!-- None -->

## Impact

- **Affected Code**: `src/layouts/Layout.astro`, `src/blocks/shared/SEO/AdvancedSEO.astro`, and all files in `src/pages/` (including multilingual sub-folders).
- **Dependencies**: Add `@astrojs/sitemap` to dependencies.
- **Config**: Update `astro.config.mjs` to register the sitemap integration.
- **Static Assets**: Remove/override static `public/sitemap.txt` in favor of dynamic `sitemap-index.xml`.
