# Architecture and ownership

## Visitor journeys

Home → selected project → case study → source/demo. Home → experience → résumé. About → email/LinkedIn.

## Invariants

1. Each project and experience has one canonical record and stable identity.
2. Main content never waits for client JavaScript or image loading.
3. Decorative elements do not position or obscure essential content.
4. Essential navigation uses semantic links; actions use buttons.
5. Missing optional data produces no empty/broken control.
6. Copy feedback is based on the completed operation.
7. Long content must wrap through normal layout.
8. Production origin is configured explicitly, never guessed from an old domain.

## Module interfaces

`getFeaturedProjects()` returns canonical records in editorial order. `ProjectCard({project})` owns the summary presentation and case-study navigation. `ExperienceList({experiences})` owns visible history presentation; it has no carousel state. `CopyEmailButton({email})` owns idle/copying/copied/error presentation. Its clipboard implementation returns a result and handles unavailable/denied clipboard access. `Container` owns the maximum width and gutters. `site.js` owns origin policy and shared navigation.

Routes are server-rendered by default. Navigation, copy, and the decorative accent are the only interactive client entrypoints. No state store, content API, database, or CMS is needed for repository-edited content.

## Extension rules

Add a content field only when a real presentation needs it. Derive views from canonical records. Extract shared behavior when it has an actual second caller or a meaningful independent responsibility. Keep a working vertical slice as new features are added. A gallery can be added later with an explicit selected-image state and semantic controls; it must not own navigation between jobs.
