## ADDED Requirements

### Requirement: Geotargeted Landing Page Routing
The system SHALL serve a dedicated landing page at `/diseno-web-nuevo-leon` (ES) and `/en/web-design-nuevo-leon` (EN), following the existing page component pattern where route files delegate to a shared page component.

#### Scenario: Spanish route renders landing page
- **WHEN** a client requests `/diseno-web-nuevo-leon`
- **THEN** the server renders the `WebDesignNLPage.astro` component with Spanish locale content

#### Scenario: English route renders landing page
- **WHEN** a client requests `/en/web-design-nuevo-leon`
- **THEN** the server renders the `WebDesignNLPage.astro` component with English locale content

#### Scenario: Hreflang alternate links are present
- **WHEN** a crawler reads the HTML head of the landing page in either locale
- **THEN** it finds `<link rel="alternate" hreflang="es">`, `<link rel="alternate" hreflang="en">`, and `<link rel="alternate" hreflang="x-default">` pointing to the correct counterpart URLs

### Requirement: SEO-Optimized Page Metadata
The landing page SHALL have unique meta title (≤ 60 chars), meta description (120–155 chars with CTA), and keywords (5–8 terms) that target local web design search intent for Nuevo León. Keywords SHALL NOT overlap with existing pages' keyword lists.

#### Scenario: Title contains geo-keyword and brand
- **WHEN** a search engine reads the `<title>` of the ES landing page
- **THEN** the title contains "Diseño Web" and "Nuevo León" and ends with "| Aurin", and is ≤ 60 characters

#### Scenario: Description contains local CTA
- **WHEN** a search engine reads the meta description of the ES landing page
- **THEN** the description is 120–155 chars, mentions "diseño web" and a geographic reference (Monterrey or Nuevo León), and contains a call to action

#### Scenario: Keywords are unique to this landing page
- **WHEN** the landing page keywords are compared against all existing page keywords in `translations.ts`
- **THEN** no keyword from this landing appears in any other page's keyword list within the same locale

### Requirement: Hero Section with Geotargeted Value Proposition
The landing page SHALL display a hero section with a single `<h1>` containing the primary keyword ("Diseño Web en Nuevo León" / "Web Design in Nuevo León"), a subtitle with secondary keywords, a benefit-oriented description paragraph, and a primary CTA button.

#### Scenario: H1 contains primary local keyword
- **WHEN** a crawler parses the landing page HTML
- **THEN** there is exactly one `<h1>` element containing "Diseño Web" and "Nuevo León" (ES) or "Web Design" and "Nuevo León" (EN)

#### Scenario: Hero CTA links to lead form
- **WHEN** a user clicks the hero CTA button
- **THEN** the page scrolls smoothly to the lead capture form section

### Requirement: Services Included Section
The landing page SHALL display a section listing 4–6 web design service packages/capabilities (e.g., responsive design, e-commerce, custom development, maintenance) with descriptive text for each, structured with `<h2>` heading and semantic HTML.

#### Scenario: Services section uses proper heading hierarchy
- **WHEN** a crawler parses the services section
- **THEN** it finds an `<h2>` heading followed by individual service items with `<h3>` sub-headings

#### Scenario: Services mention local relevance
- **WHEN** a user reads the services section content
- **THEN** at least one service description contextually references businesses in Nuevo León or the local market

### Requirement: Process Steps Section (HowTo Schema)
The landing page SHALL display a step-by-step process section (e.g., Discovery → Design → Development → Launch) with `HowTo` structured data schema that describes how the web design process works.

#### Scenario: HowTo schema is present in structured data
- **WHEN** a crawler reads the JSON-LD structured data on the page
- **THEN** it finds a `HowTo` schema with at least 4 `HowToStep` entries, each with a `name` and `text` field

#### Scenario: Process section is visually sequential
- **WHEN** a user views the process section
- **THEN** the steps are displayed in a numbered or visually sequential order with clear progression

### Requirement: FAQ Section with FAQPage Schema
The landing page SHALL display a FAQ section with 5–8 questions and answers targeting "People Also Ask" queries and voice search patterns related to web design in Nuevo León. Each FAQ item SHALL be marked up with `FAQPage` structured data.

#### Scenario: FAQ schema is valid
- **WHEN** a crawler reads the JSON-LD structured data on the page
- **THEN** it finds a `FAQPage` schema with `mainEntity` containing 5–8 `Question` entries, each with an `acceptedAnswer` of type `Answer`

#### Scenario: FAQ answers are concise for LLM citation
- **WHEN** an AI engine parses the FAQ answers
- **THEN** each answer is between 40 and 80 words — concise enough to be cited as a direct answer

#### Scenario: FAQ questions use natural language
- **WHEN** a user reads the FAQ section
- **THEN** each question reads as a natural question a person would ask (e.g., "¿Cuánto cuesta una página web en Monterrey?" not "Costo diseño web Monterrey")

### Requirement: Social Proof Section
The landing page SHALL display a social proof section with client testimonials and/or logos of companies the agency has worked with, prioritizing Nuevo León-based clients when available.

#### Scenario: Social proof section renders testimonials
- **WHEN** a user views the social proof section
- **THEN** at least 2 testimonial quotes are displayed with attribution (name/company)

### Requirement: Lead Capture Form
The landing page SHALL include an inline lead capture form with fields for: name (required), email (required), phone (optional), project type dropdown (required), and message (optional). The form SHALL submit to the existing contact API endpoint with a `source` field identifying the landing page origin.

#### Scenario: Form submits to existing API
- **WHEN** a user fills out and submits the lead form
- **THEN** the form data is sent to `/api/contact` with an additional `source: "landing-diseno-web-nl"` field

#### Scenario: Form validation prevents incomplete submissions
- **WHEN** a user attempts to submit the form without filling required fields
- **THEN** the browser prevents submission and highlights the invalid fields

#### Scenario: Success state confirms submission
- **WHEN** a user successfully submits the form
- **THEN** the form displays a success message confirming the inquiry was received

### Requirement: BreadcrumbList Schema
The landing page SHALL include `BreadcrumbList` structured data with the path: Home → Servicios → Diseño Web Nuevo León.

#### Scenario: BreadcrumbList schema is present
- **WHEN** a crawler reads the JSON-LD structured data on the page
- **THEN** it finds a `BreadcrumbList` schema with 3 `ListItem` entries representing the navigation hierarchy

### Requirement: LocalBusiness + Service Structured Data
The landing page SHALL include a `Service` schema nested within the Organization graph, with `areaServed` set to `AdministrativeArea` for Nuevo León with `GeoCoordinates` for Monterrey (25.6866, -100.3161).

#### Scenario: Service schema has local area served
- **WHEN** a crawler reads the structured data on the page
- **THEN** the `Service` schema has `areaServed` with `@type: "AdministrativeArea"`, `name: "Nuevo León"`, and `geo` with latitude 25.6866 and longitude -100.3161

#### Scenario: Service provider references Organization
- **WHEN** a crawler reads the Service schema
- **THEN** the `provider` field references the Aurin Organization entity via `@id`

### Requirement: Speakable Content Markup
The landing page SHALL define `speakable` CSS selectors targeting the hero description, FAQ answers, and service descriptions — optimized for voice assistant consumption.

#### Scenario: Speakable specification includes key content
- **WHEN** a voice assistant processes the page's speakable specification
- **THEN** it can read aloud the hero value proposition, at least 3 FAQ answers, and the services overview

### Requirement: Sitemap Integration
The new landing page routes SHALL be included in the dynamic sitemap (`/sitemap.xml`) with `priority: 0.9`, `changefreq: weekly`, and proper hreflang alternate links.

#### Scenario: Landing page appears in sitemap
- **WHEN** a crawler requests `/sitemap.xml`
- **THEN** it finds entries for both `/diseno-web-nuevo-leon` and `/en/web-design-nuevo-leon` with cross-locale `xhtml:link` alternates

### Requirement: Page Content Includes Contextual City Mentions
The landing page content SHALL naturally mention at least 4 municipalities of the Nuevo León metropolitan area (Monterrey, San Pedro Garza García, San Nicolás de los Garza, Apodaca, Guadalupe, Santa Catarina, etc.) within the page copy to reinforce geographic relevance for search engines and AI models.

#### Scenario: Content mentions multiple municipalities
- **WHEN** a search engine analyzes the full text content of the landing page
- **THEN** it finds natural mentions of at least 4 different municipalities within Nuevo León's metropolitan area

### Requirement: Responsive Design
The landing page SHALL be fully responsive following the existing desktop-first breakpoint system (1280 → 992 → 768 → 480px) and maintain visual coherence with the rest of the Aurin site.

#### Scenario: Mobile viewport renders properly
- **WHEN** a user views the landing page on a 375px-wide mobile viewport
- **THEN** all sections are readable, the form is usable, and no horizontal scrolling occurs

#### Scenario: Tablet viewport renders properly
- **WHEN** a user views the landing page on a 768px-wide tablet viewport
- **THEN** the layout adapts with appropriate column adjustments and touch-friendly tap targets

### Requirement: Performance Optimization
The landing page SHALL achieve Core Web Vitals thresholds: LCP < 2.5s, INP < 200ms, CLS < 0.1. Above-the-fold images SHALL use `fetchpriority="high"` and be in WebP format.

#### Scenario: LCP element loads within threshold
- **WHEN** a performance audit runs on the landing page
- **THEN** the Largest Contentful Paint metric is under 2.5 seconds

#### Scenario: No layout shift from dynamic content
- **WHEN** the page finishes loading all content including images and fonts
- **THEN** the Cumulative Layout Shift is less than 0.1
