## MODIFIED Requirements

### Requirement: Non-Overlapping Keywords Per Page
The `seo.keywords` field for each page SHALL contain 5–8 comma-separated terms. No keyword SHALL appear in more than one page's keyword list within the same locale. The five target service groups — (1) diseño UX/UI, (2) desarrollo web y aplicaciones móviles / ecommerce, (3) pruebas de usabilidad, (4) desarrollo de branding, (5) marketing digital y redes sociales — SHALL each appear at least once across all pages' keywords in each locale, distributed without repetition.

#### Scenario: All 5 service groups are covered across page keywords (ES)
- **WHEN** all `seo.keywords` fields in the `es` locale are concatenated
- **THEN** the result contains at least one term from each of: `diseño UX UI`, `desarrollo web`, `pruebas de usabilidad`, `desarrollo de branding`, `marketing digital`

#### Scenario: All 5 service groups are covered across page keywords (EN)
- **WHEN** all `seo.keywords` fields in the `en` locale are concatenated
- **THEN** the result contains at least one term from each of: `UX UI design`, `web development`, `usability testing`, `branding development`, `digital marketing`

#### Scenario: Keywords are unique per page within a locale
- **WHEN** all `seo.keywords` fields for the `es` locale are compared
- **THEN** no individual keyword appears in more than one page's list

### Requirement: Meta Description Length and CTA
Every page `seo.description` SHALL be between 120 and 155 characters, include at least one specific service term naturally integrated into a sentence (not as a bare keyword dump), and end with an implicit or explicit call to action.

#### Scenario: Description contains a service-specific term in natural language
- **WHEN** a user reads the description for the services or home page in search results
- **THEN** they can identify at least one concrete service (e.g., "diseño UX/UI", "desarrollo web", "branding") mentioned naturally within a sentence rather than listed in isolation

#### Scenario: Description within character range
- **WHEN** a developer reads any `seo.description` value in `translations.ts`
- **THEN** the string is between 120 and 155 characters inclusive
