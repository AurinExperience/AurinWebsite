## ADDED Requirements

### Requirement: Localized Page Metadata
The system SHALL render unique meta titles, descriptions, canonical links, and OpenGraph tags for every route, dynamically resolving the language locale (Spanish/English).

#### Scenario: Home page localized metadata rendering
- **WHEN** a client requests the Spanish root page `/` or English root page `/en/`
- **THEN** the HTML response contains localized `<title>`, `<meta name="description">`, and `og:locale` tags matching the language.

#### Scenario: Subpage custom meta mapping
- **WHEN** a client requests a specific page (e.g., `/servicios` or `/proyectos`)
- **THEN** the HTML contains metadata specific to that page rather than generic fallback values.

### Requirement: Structured JSON-LD Schema
The system SHALL embed structured JSON-LD schemas representing `WebSite`, `Organization`, `ProfessionalService`, and project items to enable rich results and better semantic comprehension by AI engines.

#### Scenario: Structured data on Homepage
- **WHEN** a crawler fetches the home page HTML
- **THEN** the response contains a `<script type="application/ld+json">` element detailing the Aurin organization, its brand profile, and contact details.

### Requirement: Dynamic Sitemap Generation with Hreflang Relationships
The system SHALL dynamically build and export a valid XML sitemap including all pages, multilingual routes, and project details, establishing explicit `xhtml:link` elements for language alternates inside the sitemap.

#### Scenario: Crawler reads sitemap index
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** the system returns a valid XML index referencing the sub-sitemaps or directly listing URLs with cross-language `xhtml:link` alternate declarations.

### Requirement: Robots Directives and AI Crawler Optimization
The system SHALL configure `/robots.txt` and HTML header metadata to explicitly grant access to AI crawler bots and search engines, while indicating the sitemap location.

#### Scenario: AI Search Bot checks robots.txt
- **WHEN** an AI agent (such as `GPTBot`, `GeminiBot`, `PerplexityBot`, or `ClaudeBot`) reads `/robots.txt`
- **THEN** the instructions show `Allow: /` and point to the dynamic sitemap URL.

### Requirement: Semantic Content Structure for AI Chunking
Every page layout SHALL structure content using semantic HTML5 tags (e.g., `<main>`, `<header>`, `<footer>`, `<section>`) and maintain a single `<h1>` tag per page with clear hierarchical headings to facilitate RAG (Retrieval-Augmented Generation) document parsing.

#### Scenario: AI crawler parses the homepage
- **WHEN** a crawler processes the HTML layout of the homepage
- **THEN** it finds exactly one `<h1>` element, followed by nested `<section>` elements and `<h2>`/`<h3>` subheadings.

### Requirement: Performance and Core Web Vitals Optimization
The main page layout SHALL preconnect to critical external hosts (e.g., Google Fonts, analytics, speed insights) and preload above-the-fold visual elements to minimize Largest Contentful Paint (LCP) and maximize Interaction to Next Paint (INP) readiness.

#### Scenario: Client loads the main layout
- **WHEN** a browser processes the `<head>` of the main layout
- **THEN** it executes `<link rel="preconnect">` for fonts/external servers and `<link rel="preload">` for the primary logo.

