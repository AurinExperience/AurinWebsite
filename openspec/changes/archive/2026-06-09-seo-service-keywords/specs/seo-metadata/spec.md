## MODIFIED Requirements

### Requirement: Localized Page Metadata
The system SHALL render unique meta titles, descriptions, canonical links, and OpenGraph tags for every route, dynamically resolving the language locale. Metadata for the Home, Services, and Projects pages SHALL explicitly reflect Aurin's five core service areas — UX/UI design, web and mobile development, usability testing, branding development, and digital marketing — distributed across those pages without repetition, integrated naturally in prose rather than as bare keyword lists.

#### Scenario: Services page description names specific services naturally
- **WHEN** a search engine reads the meta description of the `/services` (ES) or `/en/services` (EN) page
- **THEN** the description mentions at least three of the five core services (UX/UI, web development, branding, usability testing, digital marketing) in natural sentence flow

#### Scenario: Home page description names concrete services
- **WHEN** a search engine reads the meta description of the root `/` or `/en/` page
- **THEN** the description includes at least two concrete service terms rather than only abstract agency descriptors

#### Scenario: Projects page description reflects service categories
- **WHEN** a search engine reads the meta description of the `/projects` or `/en/projects` page
- **THEN** the description references the types of projects (e.g., UX/UI, branding, web development) to signal portfolio breadth
