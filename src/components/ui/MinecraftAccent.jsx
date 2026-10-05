const iconPaths = {
  compass: (
    <>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <path d="m15.5 8.5-2.1 4.8-4.8 2.1 2.1-4.8 4.8-2.1Z" />
      <path d="M5 5h2v2H5zM17 5h2v2h-2zM5 17h2v2H5zM17 17h2v2h-2z" />
    </>
  ),
  book: (
    <>
      <path d="M3 5.5c3.2-1.2 5.6-.7 9 1.1v12.3c-3.4-1.8-5.8-2.3-9-1.1V5.5Z" />
      <path d="M21 5.5c-3.2-1.2-5.6-.7-9 1.1v12.3c3.4-1.8 5.8-2.3 9-1.1V5.5Z" />
      <path d="M6 9h3M15 9h3" />
    </>
  ),
  map: (
    <>
      <path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2V5Z" />
      <path d="M9 3v16M15 5v16" />
      <path d="m5 8 2 1m9 5 3-2" />
    </>
  ),
  crafting: (
    <>
      <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
      <path d="m5 19 5-5 2 2 6-7" />
    </>
  ),
  bookmark: (
    <>
      <path d="M6 3h12v18l-6-4-6 4V3Z" />
      <path d="M9 7h6M9 10h4" />
    </>
  ),
};

/** A small, original pixel-line accent for page-level labels and links. */
export function MinecraftAccent({ icon = "compass", label, decorative = false, className = "" }) {
  const accessible = decorative || !label ? { "aria-hidden": true } : { role: "img", "aria-label": label };

  return (
    <span className={`minecraft-accent ${className}`.trim()} {...accessible}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
        {iconPaths[icon] || iconPaths.compass}
      </svg>
    </span>
  );
}
