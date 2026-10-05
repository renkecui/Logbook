@AGENTS.md

# Logbook Architecture

## Product Goal

Logbook is an entertainment-tracking application for shows, movies, anime, manga, manhwa, and webtoons. Its intended home experience lets users browse and organize media by category, language, and genre, with compact item summaries that can expand into fuller details. The README also identifies login as a planned page.

## Current Implementation

- **Framework and runtime:** Next.js 16 App Router, React 19, TypeScript, and Node.js. The project is configured through the root `next.config.ts` and `tsconfig.json`; `@/*` resolves to `src/*`.
- **Route composition:** `src/app/layout.tsx` provides the shared HTML shell, font setup, metadata, and global stylesheet. `src/app/page.tsx` is the sole application route (`/`) and renders the dashboard.
- **Rendering and data:** The dashboard is currently a server-rendered React page. Its category list, featured items, library cards, and watchlist are hard-coded arrays in `page.tsx`. There are no client-side state handlers, API routes, database access, authentication, or external media catalog integrations yet.
- **Presentation:** `src/app/globals.css` contains Tailwind CSS v4 setup and global styles. Most layout and component styling is expressed with Tailwind utility classes in the page.
- **Validation and quality:** TypeScript is configured in strict mode. ESLint and build/lint scripts are defined in `package.json`. Zod is mentioned in the README as a possible validation library but is not currently installed or used.

## Intended Request Flow

The present prototype has no persistent request/data flow: Next.js renders the dashboard from its local sample data. As the application gains functionality, the intended flow is:

1. A user interacts with a route or media control in the App Router UI.
2. Server components or server-side application actions request data through a domain/data-access boundary.
3. That boundary reads the user's library from persistent storage and, where needed, queries a media catalog provider.
4. Validated results are mapped into UI-ready media and library records and rendered by the route.

Credentials and user-specific library records should be scoped to the authenticated user. External catalog metadata and a user's tracking state are separate concerns: catalog entries describe media, while library records describe that user's status, labels, and dates.

## Suggested Growth Boundaries

Keep the App Router responsible for routes, layouts, and page composition. As features are implemented, move reusable feature logic out of `page.tsx` into focused modules, for example:

- `src/features/media/` for media types, category/genre filters, and media presentation.
- `src/features/library/` for a user's tracked items, statuses, labels, and watch/read lists.
- `src/features/auth/` for sign-in flows and access control.
- `src/server/` for database access, catalog-provider integrations, and server-only services.
- `src/schemas/` for shared request and persisted-data validation, using Zod if selected.

These are proposed boundaries, not folders or integrations that exist today. Select the database, authentication provider, and external catalog data source before implementing persistence-dependent flows. Keep provider-specific APIs behind server-side adapters so the UI and user's library model are not coupled to one catalog service.

## Key Decisions Still Open

- Database and deployment/persistence strategy.
- Authentication provider, session strategy, and user-data ownership rules.
- Media metadata source(s), provider coverage, and attribution/usage constraints.
- Library status model (for example, planned, in progress, completed, or dropped) and how media types share or differ in tracking fields.
- Validation library and schemas for user input and provider responses.
