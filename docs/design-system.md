# Design system

## Direction

A restrained technical journal: charcoal surfaces, coral accents, monospaced metadata, generous readable headings, a bounded grid, and real project screenshots. V2’s space/curiosity personality remains through the grid, mark, and closing motto.

## Foundations

Tokens live in `src/app/globals.css` and the Tailwind extension. Canvas #141414; surface #1c1c1c; primary text #f4f4f0; muted text #b0b0aa; accent #f2725d; borders #383836. The accent is brighter than v2 to improve visibility on dark backgrounds. Rubik is the default body font; Space Mono is used for branding, project names, and metadata. Local font assets use swap rendering and eliminate font-download dependencies during build.

Container: 1240px maximum with fluid gutters. Sections use normal grid/flex layout. Main body is at least 16px; secondary metadata is 12–14px. Interactive targets have clear focus outlines. Essential navigation wraps at 320px.

## States

Links: rest, hover, visible keyboard focus, current route. Copy: idle, pending, success, failure. Projects: image present/absent, demo present/absent, normal/long text. Motion: optional mark rotation on hover; reduced motion disables it. No hidden card content, auto-advancing experience, or global content opacity gate.

## Acceptance

Check 320, 390, 768, 1024, and 1440px; 200% zoom; keyboard-only navigation; reduced motion; clipboard denial; a failed image; unknown routes. Hiding overflow globally is not an acceptable fix for clipped text.
