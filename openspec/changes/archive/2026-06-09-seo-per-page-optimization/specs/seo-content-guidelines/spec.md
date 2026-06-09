## ADDED Requirements

### Requirement: Title Format and Length
Every page title in `translations.ts` SHALL follow the pattern `Keyword Principal | Aurin` and be ≤ 60 characters. The home page MAY use `Aurin | <tagline>` when the brand itself is the primary search intent. Titles in English SHALL mirror the keyword intent of the Spanish version adapted for English-language searchers.

#### Scenario: Title within length limit
- **WHEN** a developer reads any `seo.title` value in `translations.ts`
- **THEN** the string is 60 characters or fewer

#### Scenario: Title uses pipe-separator pattern
- **WHEN** a developer reads any `seo.title` value in `translations.ts`
- **THEN** the string contains ` | Aurin` as a suffix (except for the home page which leads with the brand)

### Requirement: Meta Description Length and CTA
Every page `seo.description` SHALL be between 120 and 155 characters, include the primary keyword naturally, and end with an implicit or explicit call to action (e.g., "Cotiza ahora", "Descúbrelo", "Contáctanos").

#### Scenario: Description within character range
- **WHEN** a developer reads any `seo.description` value in `translations.ts`
- **THEN** the string is between 120 and 155 characters inclusive

#### Scenario: Description contains a call to action
- **WHEN** a user sees the page listed in Google search results
- **THEN** the snippet includes a verb or phrase that invites clicking

### Requirement: Non-Overlapping Keywords Per Page
The `seo.keywords` field for each page SHALL contain 5–8 comma-separated terms. No keyword SHALL appear in more than one page's keyword list within the same locale, to prevent keyword cannibalization.

#### Scenario: Keywords are unique per page within a locale
- **WHEN** all `seo.keywords` fields for the `es` locale are compared
- **THEN** no individual keyword appears in more than one page's list

#### Scenario: Keyword count is within bounds
- **WHEN** a developer reads any `seo.keywords` value in `translations.ts`
- **THEN** splitting by comma yields between 5 and 8 items

### Requirement: Parallel ES/EN SEO Content
Each page SHALL have SEO content in both `es` and `en` locales within `translations.ts`. The English version SHALL NOT be a literal translation but SHALL be adapted to reflect English-language search intent for the same topic.

#### Scenario: Both locales define SEO fields for every page
- **WHEN** the translations object is inspected
- **THEN** every page section that has `seo.title` in `es` also has `seo.title`, `seo.description`, and `seo.keywords` in `en`
