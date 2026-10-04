"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function scrambleLabel(label, progress) {
  const resolvedCharacters = Math.floor(progress * label.length);
  return [...label]
    .map((character, index) => (
      index < resolvedCharacters || character === " "
        ? character
        : glyphs[Math.floor(Math.random() * glyphs.length)]
    ))
    .join("");
}

function AnimatedNavLink({ active, href, label }) {
  const reduceMotion = useReducedMotion();
  const [displayedLabel, setDisplayedLabel] = useState(label);
  const [isPixel, setIsPixel] = useState(false);
  const timeoutRef = useRef();
  const frameRef = useRef();

  function cancelAnimation() {
    window.clearTimeout(timeoutRef.current);
    cancelAnimationFrame(frameRef.current);
  }

  function showPixel() {
    cancelAnimation();
    setDisplayedLabel(label);
    setIsPixel(true);
  }

  function returnToRegular() {
    cancelAnimation();
    if (reduceMotion) {
      setDisplayedLabel(label);
      setIsPixel(false);
      return;
    }

    const startedAt = performance.now();
    const duration = 280;
    const scramble = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setDisplayedLabel(scrambleLabel(label, progress));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(scramble);
        return;
      }
      setDisplayedLabel(label);
      setIsPixel(false);
    };
    frameRef.current = requestAnimationFrame(scramble);
  }

  useEffect(() => () => cancelAnimation(), []);

  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      onMouseEnter={showPixel}
      onMouseLeave={returnToRegular}
      onFocus={showPixel}
      onBlur={returnToRegular}
    >
      <span className="nav-scramble" aria-hidden="true">
        <span className={`nav-scramble__text${isPixel ? " nav-scramble__text--pixel" : ""}`}>
          {displayedLabel}
        </span>
      </span>
    </Link>
  );
}

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation">
      <ul className="nav-list">
        {navigation.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <AnimatedNavLink active={active} href={item.href} label={item.label} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
