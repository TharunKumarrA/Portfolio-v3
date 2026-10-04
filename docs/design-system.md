# Design system

## Direction

A restrained technical journal: charcoal surfaces, coral accents, monospaced metadata, generous readable headings, a bounded grid, and real project screenshots. V2’s space/curiosity personality remains through the grid, mark, and closing motto.

## Foundations

Tokens live in `src/app/globals.css` and the Tailwind extension. Canvas #171313; surface #241b1a; primary text #f3ece1; muted text #c2b1a0; accent #d79a48; borders #493633. The burnished gold accent, oxblood-leaning surfaces, and parchment text form a restrained Fire Nation-inspired palette while retaining strong contrast on dark backgrounds. Rubik is the default body font; Space Mono is used for branding, project names, and metadata. Local font assets use swap rendering and eliminate font-download dependencies during build.

Container: 1240px maximum with fluid gutters. Sections use normal grid/flex layout. Main body is at least 16px; secondary metadata is 12–14px. Interactive targets have clear focus outlines. Essential navigation wraps at 320px.

## States

Links: rest, hover, visible keyboard focus, current route. Copy: idle, pending, success, failure. Projects: image present/absent, demo present/absent, normal/long text. Motion: optional mark rotation on hover; reduced motion disables it. No hidden card content, auto-advancing experience, or global content opacity gate.

## Acceptance

Check 320, 390, 768, 1024, and 1440px; 200% zoom; keyboard-only navigation; reduced motion; clipboard denial; a failed image; unknown routes. Hiding overflow globally is not an acceptable fix for clipped text.
