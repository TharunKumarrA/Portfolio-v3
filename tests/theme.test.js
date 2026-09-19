import test from "node:test";
import assert from "node:assert/strict";
import { preferredTheme, applyTheme } from "../src/features/theme/preference.js";

test("theme uses a saved valid preference before system preference", () => {
  assert.equal(preferredTheme("light", true), "light");
  assert.equal(preferredTheme("dark", false), "dark");
  assert.equal(preferredTheme("unknown", true), "dark");
  assert.equal(preferredTheme(null, false), "light");
});

test("theme application updates the document theme and browser color scheme", () => {
  const documentElement = { dataset: {}, style: {} };
  applyTheme("light", documentElement);
  assert.deepEqual(documentElement, { dataset: { theme: "light" }, style: { colorScheme: "light" } });
});
