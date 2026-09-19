# Design system

## Direction

A personal field system: structured layouts, coral emphasis, readable headings, real project screenshots, and restrained orbit details. The visual system signals space and curiosity without using generic AI motifs, particles, glass panels, or decorative gradients.

## Foundations

Tokens live in `src/app/globals.css`. Dark and light palettes share coral as the highlight color; each gives equal contrast and hierarchy to the same content. Rubik is the default body font; Space Mono is reserved for branding, labels, dates, indices, and orbit annotations. Local font assets use swap rendering and eliminate font-download dependencies during build.

Container: 1240px maximum with fluid gutters. Sections use normal grid/flex layout. Main body is at least 16px; secondary metadata is 12–14px. Interactive targets have clear focus outlines. Essential navigation wraps at 320px.

## States

Links: rest, hover, visible keyboard focus, current route. Copy: idle, pending, success, failure. Projects: image present/absent, demo present/absent, normal/long text. Theme defaults to the device preference, then persists a visitor’s explicit light/dark choice locally. Orbit marks are decorative, never animated, and never cover text. Reduced motion disables optional mark rotation. No hidden card content, auto-advancing experience, or global content opacity gate.

## Acceptance

Check 320, 390, 768, 1024, and 1440px; 200% zoom; keyboard-only navigation; reduced motion; clipboard denial; a failed image; unknown routes. Hiding overflow globally is not an acceptable fix for clipped text.
