## MODIFIED Requirements

### Requirement: Localized Page Metadata
The system SHALL render unique meta titles, descriptions, canonical links, and OpenGraph tags for every route, dynamically resolving the language locale (Spanish/English). Each page's title SHALL follow the `Keyword Principal | Aurin` format (≤ 60 chars), descriptions SHALL be 120–155 chars with a CTA, and keywords SHALL be non-overlapping across pages within the same locale.

#### Scenario: Home page localized metadata rendering
- **WHEN** a client requests the Spanish root page `/` or English root page `/en/`
- **THEN** the HTML response contains localized `<title>`, `<meta name="description">`, and `og:locale` tags matching the language

#### Scenario: Subpage custom meta mapping
- **WHEN** a client requests a specific page (e.g., `/services` or `/projects`)
- **THEN** the HTML contains metadata specific to that page rather than generic fallback values, with title ≤ 60 chars and description between 120–155 chars

#### Scenario: English pages have adapted (not translated) SEO content
- **WHEN** a client requests any `/en/*` route
- **THEN** the title and description reflect English-language search intent, not a word-for-word translation from Spanish
