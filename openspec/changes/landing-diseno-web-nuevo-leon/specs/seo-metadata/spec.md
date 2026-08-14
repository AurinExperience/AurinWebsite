## ADDED Requirements

### Requirement: FAQPage Structured Data Support
The SEO type system SHALL include a `FAQPageStructuredData` TypeScript interface that models the Schema.org FAQPage type with `mainEntity` containing an array of `Question` items, each with an `acceptedAnswer` of type `Answer`.

#### Scenario: FAQPage type is available for landing pages
- **WHEN** a developer imports `FAQPageStructuredData` from `@/types/seo`
- **THEN** TypeScript validates the structured data object against the FAQPage schema with `Question` and `Answer` types

### Requirement: HowTo Structured Data Support
The SEO type system SHALL include a `HowToStructuredData` TypeScript interface that models the Schema.org HowTo type with `step` containing an array of `HowToStep` items, each with `name`, `text`, and optional `url` and `image` fields.

#### Scenario: HowTo type is available for process sections
- **WHEN** a developer imports `HowToStructuredData` from `@/types/seo`
- **THEN** TypeScript validates the structured data object against the HowTo schema with `HowToStep` entries

### Requirement: BreadcrumbList Structured Data Support
The SEO type system SHALL include a `BreadcrumbListStructuredData` TypeScript interface that models the Schema.org BreadcrumbList type with `itemListElement` containing an array of `ListItem` entries with `position`, `name`, and `item` (URL) fields.

#### Scenario: BreadcrumbList type is available for navigation hierarchy
- **WHEN** a developer imports `BreadcrumbListStructuredData` from `@/types/seo`
- **THEN** TypeScript validates the structured data object against the BreadcrumbList schema with ordered `ListItem` entries

### Requirement: Multiple Structured Data Schemas Per Page
The `Layout.astro` component SHALL accept an optional `additionalStructuredData` prop (array of objects) alongside the existing `structuredData` prop, allowing pages to emit multiple independent JSON-LD script blocks for different schema types (e.g., Service + FAQPage + BreadcrumbList + HowTo on a single page).

#### Scenario: Landing page emits multiple JSON-LD blocks
- **WHEN** a page passes both `structuredData` and `additionalStructuredData` props to the Layout
- **THEN** the rendered HTML contains separate `<script type="application/ld+json">` blocks for each schema object

#### Scenario: Pages without additional schemas are unaffected
- **WHEN** an existing page passes only `structuredData` without `additionalStructuredData`
- **THEN** the page renders exactly as before with a single JSON-LD block

## MODIFIED Requirements

### Requirement: Structured JSON-LD Schema
The system SHALL embed structured JSON-LD schemas representing `WebSite`, `Organization`, `ProfessionalService`, and project items to enable rich results and better semantic comprehension by AI engines. Additionally, the system SHALL support page-specific schemas including `FAQPage`, `HowTo`, `BreadcrumbList`, and `LocalBusiness`/`Service` with geolocation data, emitting them as separate JSON-LD script blocks when provided via the `additionalStructuredData` prop.

#### Scenario: Structured data on Homepage
- **WHEN** a crawler fetches the home page HTML
- **THEN** the response contains a `<script type="application/ld+json">` element detailing the Aurin organization, its brand profile, and contact details.

#### Scenario: Multiple schemas on landing page
- **WHEN** a crawler fetches a geotargeted landing page HTML
- **THEN** the response contains separate JSON-LD script blocks for `Service`, `FAQPage`, `BreadcrumbList`, and `HowTo` schemas in addition to the global Organization/WebSite schema
