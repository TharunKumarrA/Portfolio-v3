"use client";

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { applyTheme, preferredTheme, THEME_STORAGE_KEY } from "./preference";

export function ThemeToggle() {
  useEffect(() => {
    const nextTheme = preferredTheme(
      window.localStorage.getItem(THEME_STORAGE_KEY),
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
    applyTheme(nextTheme, document.documentElement);
  }, []);

  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme, document.documentElement);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle light and dark color theme" title="Toggle light and dark color theme">
      <FiSun className="theme-sun" aria-hidden="true" />
      <FiMoon className="theme-moon" aria-hidden="true" />
      <span className="theme-toggle-label">Theme</span>
    </button>
  );
}
