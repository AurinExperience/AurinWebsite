# seo-content-guidelines Specification

## Purpose
Rules for writing SEO metadata content (titles, descriptions, keywords) across all pages in both ES and EN locales. Ensures quality, uniqueness, and discoverability without keyword stuffing.

## Requirements

### Requirement: Title Format and Length
Every page title in `translations.ts` SHALL follow the pattern `Keyword Principal | Aurin` and be ≤ 60 characters. The home page MAY use `Aurin | <tagline>` when the brand itself is the primary search intent. Titles in English SHALL mirror the keyword intent of the Spanish version adapted for English-language searchers.

#### Scenario: Title within length limit
- **WHEN** a developer reads any `seo.title` value in `translations.ts`
- **THEN** the string is 60 characters or fewer

#### Scenario: Title uses pipe-separator pattern
- **WHEN** a developer reads any `seo.title` value in `translations.ts`
- **THEN** the string contains ` | Aurin` as a suffix (except for the home page which leads with the brand)

### Requirement: Meta Description Length and CTA
Every page `seo.description` SHALL be between 120 and 155 characters, include at least one specific service term naturally integrated into a sentence (not as a bare keyword dump), and end with an implicit or explicit call to action (e.g., "Cotiza ahora", "Descúbrelo", "Contáctanos").

#### Scenario: Description within character range
- **WHEN** a developer reads any `seo.description` value in `translations.ts`
- **THEN** the string is between 120 and 155 characters inclusive

#### Scenario: Description contains a call to action
- **WHEN** a user sees the page listed in Google search results
- **THEN** the snippet includes a verb or phrase that invites clicking

#### Scenario: Description contains a service-specific term in natural language
- **WHEN** a user reads the description for the services or home page in search results
- **THEN** they can identify at least one concrete service (e.g., "diseño UX/UI", "desarrollo web", "branding") mentioned naturally within a sentence rather than listed in isolation

### Requirement: Non-Overlapping Keywords Per Page
The `seo.keywords` field for each page SHALL contain 5–8 comma-separated terms. No keyword SHALL appear in more than one page's keyword list within the same locale. The five target service groups — (1) diseño UX/UI, (2) desarrollo web y aplicaciones móviles / ecommerce, (3) pruebas de usabilidad, (4) desarrollo de branding, (5) marketing digital y redes sociales — SHALL each appear at least once across all pages' keywords in each locale, distributed without repetition.

#### Scenario: Keywords are unique per page within a locale
- **WHEN** all `seo.keywords` fields for the `es` locale are compared
- **THEN** no individual keyword appears in more than one page's list

#### Scenario: Keyword count is within bounds
- **WHEN** a developer reads any `seo.keywords` value in `translations.ts`
- **THEN** splitting by comma yields between 5 and 8 items

#### Scenario: All 5 service groups are covered across page keywords (ES)
- **WHEN** all `seo.keywords` fields in the `es` locale are concatenated
- **THEN** the result contains at least one term from each of: `diseño UX UI`, `desarrollo web`, `pruebas de usabilidad`, `desarrollo de branding`, `marketing digital`

#### Scenario: All 5 service groups are covered across page keywords (EN)
- **WHEN** all `seo.keywords` fields in the `en` locale are concatenated
- **THEN** the result contains at least one term from each of: `UX UI design`, `web development`, `usability testing`, `branding development`, `digital marketing`

### Requirement: Parallel ES/EN SEO Content
Each page SHALL have SEO content in both `es` and `en` locales within `translations.ts`. The English version SHALL NOT be a literal translation but SHALL be adapted to reflect English-language search intent for the same topic.

#### Scenario: Both locales define SEO fields for every page
- **WHEN** the translations object is inspected
- **THEN** every page section that has `seo.title` in `es` also has `seo.title`, `seo.description`, and `seo.keywords` in `en`
