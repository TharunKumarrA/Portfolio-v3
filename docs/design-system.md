# Design system

## Direction

A dark editorial portfolio: warm off-white type on charcoal, coral reserved for emphasis and action, generous reading widths, and real project imagery. Personality comes from typography and calm composition, not decoration.

## Foundations

`src/app/globals.css` is the single source of visual tokens. The layout uses one container width, responsive gutters, and a four-step spacing scale: compact metadata, standard component spacing, section spacing, and hero spacing. Rubik is the reading font; Space Mono is restricted to labels, dates, navigation, and indices.

## States

Links have rest, hover, current-route, and visible keyboard-focus states. Copy has idle, pending, success, and failure states. Projects cover image present/absent and optional external links. The site is dark-only; it does not store visual preferences or render decorative overlays.

## Acceptance

Check 320, 390, 768, 1024, and 1440px; 200% zoom; keyboard-only navigation; reduced motion; clipboard denial; a failed image; and unknown routes. The spacing scale must be applied consistently rather than fixed with page-specific offsets.
