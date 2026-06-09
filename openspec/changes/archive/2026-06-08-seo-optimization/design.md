## Context

The current Aurin website uses Astro with Vercel server-side rendering (`output: 'server'`) and fetches dynamic project data from Payload CMS. Currently, page-level SEO utilizes a shared `<AdvancedSEO>` component, but it lacks several critical search capabilities:
1. Dynamic sitemaps referencing multilingual paths and dynamic CMS projects.
2. Automated `hreflang` meta tags to handle multi-locale relationships (`es` / `en`).
3. Explicit link tags for social rendering optimization.

## Goals / Non-Goals

**Goals:**
- Dynamically build and serve `/sitemap.xml` capturing all static routes and CMS-published projects with alternate language relationships (`xhtml:link`).
- Add automated, configurable `hreflang` alternate tags to `<AdvancedSEO>` for search engine locale targeting.
- Standardize OpenGraph and Twitter meta fields with structured properties (e.g. dimensions, locales).
- Verify compatibility of the robots.txt and sitemap configurations with major search engine and AI crawlers.
- Enforce semantic HTML5 structures and single-`<h1>` heading structures across layouts to align with Google AI Overviews / RAG parsing rules.
- Integrate critical domain preconnections (Google Fonts, Vercel analytics/speed insights) to improve Core Web Vitals (LCP and INP).

**Non-Goals:**
- Implementing internal page link structures or content copywriting changes.
- Setting up search console tracking accounts (handled externally).
- Modifying, refactoring, or disrupting existing page layouts, custom animations (GSAP/Motion), styling tokens, chatbot code, or CMS content queries.


## Decisions

### 1. Dynamic Sitemap Generation via Custom Endpoint vs. Static Build Sitemap Integration
- **Option A**: Use `@astrojs/sitemap` integration. This generates a sitemap at build time.
- **Option B**: Build a custom Astro API endpoint (`src/pages/sitemap.xml.ts`) that resolves sitemap requests at runtime.
- **Decision**: **Option B**. Since `prerender` is disabled for project detail pages (fetched on request from Payload CMS), a build-time sitemap won't capture projects published between builds. A custom server endpoint queries `PayloadAPI.getProjects()` on demand, ensuring real-time crawling accuracy.
- **Implementation**: Write `src/pages/sitemap.xml.ts` returning XML content with `Content-Type: application/xml`. The XML will declare `xmlns:xhtml="http://www.w3.org/1999/xhtml"` to support inline `xhtml:link` translations for Google's localized indexing.

### 2. Multi-language Hreflang Relationships
- **Decision**: Automated detection and override inside `<AdvancedSEO>`.
- **Rationale**: Manually maintaining alternate links on every page is error-prone. By mapping the current pathname through a path mapping helper (with a small mapping table for route translation anomalies like `appointment-confirmed` vs `appointment-confirmation`), we can automate `hreflang` and `x-default` injections globally.

### 3. Core Web Vitals & AI RAG Page Layout Optimization
- **Decision**: Add preconnect tags for external Google Fonts and Vercel services inside `Layout.astro`'s `<head>`.
- **Rationale**: Preconnecting to these endpoints saves dns/tcp roundtrips, speeding up resource delivery (LCP/INP improvement).
- **Decision**: Enforce proper single-`<h1>` structure on all page-level components. We will audit and adjust the page components (Index, About, Contact, Services, Projects, Terms, Privacy) to ensure a single `<h1>` is present for clear document outline chunking.

## Risks / Trade-offs

- **Risk**: CMS API failure during sitemap generation might cause the sitemap.xml to throw an error.
- **Mitigation**: Implement robust try-catch blocks in the endpoint. In the event of a CMS timeout, fallback to rendering static-only routes and log the error.

