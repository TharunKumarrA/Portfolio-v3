"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayerNameplate } from "./PlayerNameplate";

const portraits = {
  photo: {
    src: "/images/tharun.webp",
    alt: "Tharun Kumar A",
    nextLabel: "Switch to Minecraft portrait",
  },
  minecraft: {
    src: "/images/tharun-minecraft-avatar.png",
    alt: "Minecraft player-skin portrait of Tharun Kumar A",
    nextLabel: "Switch to photo",
  },
};

export function ProfileImageSwitcher() {
  const [portrait, setPortrait] = useState("minecraft");
  const [hasInteracted, setHasInteracted] = useState(false);
  const activePortrait = portraits[portrait];

  function togglePortrait() {
    setHasInteracted(true);
    setPortrait((current) => (current === "photo" ? "minecraft" : "photo"));
  }

  return (
    <div className="portrait-frame">
      <PlayerNameplate displayName="Tharun" />
      <Image
        key={portrait}
        className="about-photo profile-image"
        src={activePortrait.src}
        alt={activePortrait.alt}
        width={760}
        height={760}
        sizes="(min-width: 768px) 300px, min(100vw - 4rem, 300px)"
      />
      <button
        type="button"
        className={`portrait-toggle${hasInteracted ? "" : " portrait-toggle--labelled"}`}
        onClick={togglePortrait}
        aria-label={activePortrait.nextLabel}
        title={activePortrait.nextLabel}
      >
        {!hasInteracted && <span className="portrait-toggle-label">Switch to photo</span>}
        <span className="portrait-toggle-glyph" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M20 11A8 8 0 0 0 6 6L4 8" />
            <path d="M4 4v4h4" />
            <path d="M4 13a8 8 0 0 0 14 5l2-2" />
            <path d="M20 20v-4h-4" />
          </svg>
        </span>
        <span className="sr-only">{activePortrait.nextLabel}</span>
      </button>
    </div>
  );
}
