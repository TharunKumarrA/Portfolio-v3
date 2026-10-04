"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scrambledWord(word, resolvedCharacters) {
  return [...word]
    .map((character, index) => (
      !/[a-z]/i.test(character) || index < resolvedCharacters
        ? character
        : glyphs[Math.floor(Math.random() * glyphs.length)]
    ))
    .join("");
}

export function HeroTypefaceWord({ word, delay = 2200 }) {
  const reduceMotion = useReducedMotion();
  const [displayedWord, setDisplayedWord] = useState(word);
  const [isPixel, setIsPixel] = useState(false);
  const displayedAsPixel = reduceMotion || isPixel;

  useEffect(() => {
    if (reduceMotion) return undefined;

    let timeout;
    let frame;
    let cancelled = false;
    let nextIsPixel = false;

    const startCycle = () => {
      nextIsPixel = !nextIsPixel;
      const startedAt = performance.now();
      const duration = 460;

      const scramble = (now) => {
        if (cancelled) return;
        const progress = Math.min((now - startedAt) / duration, 1);
        const resolvedCharacters = Math.floor(progress * word.length);

        setDisplayedWord(scrambledWord(word, resolvedCharacters));
        if (progress >= 0.5) setIsPixel(nextIsPixel);

        if (progress < 1) {
          frame = requestAnimationFrame(scramble);
          return;
        }

        setDisplayedWord(word);
        timeout = window.setTimeout(startCycle, 4200);
      };

      frame = requestAnimationFrame(scramble);
    };

    timeout = window.setTimeout(startCycle, delay);
    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [delay, reduceMotion, word]);

  return (
    <span className={`hero-typeface-word${displayedAsPixel ? " hero-typeface-word--pixel" : ""}`} aria-label={word}>
      <span aria-hidden="true">{displayedWord}</span>
    </span>
  );
}
