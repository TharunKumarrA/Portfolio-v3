export const THEME_STORAGE_KEY = "tharun-theme";

export function preferredTheme(storedTheme, prefersDark) {
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return prefersDark ? "dark" : "light";
}

export function applyTheme(theme, documentElement) {
  documentElement.dataset.theme = theme;
  documentElement.style.colorScheme = theme;
}
