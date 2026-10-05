import test from "node:test";
import assert from "node:assert/strict";
import { clippings, getPublishedClipping, getPublishedClippings } from "../src/content/clippings.js";
import { clippingPreview } from "../src/features/clippings/templates.js";

test("clippings expose only published entries in reverse chronological order", () => {
  const published = getPublishedClippings("2026-10-05");
  assert.ok(published.every((clipping) => clipping.status === "published"));
  assert.equal(published.length, 10);
  assert.equal(published[0].id, "spoke-to-my-younger-self");
  assert.equal(published.at(-1).id, "courage-and-trust");
  assert.equal(getPublishedClipping("not-a-clipping"), undefined);
});

test("clippings are intentionally text-only artifacts", () => {
  assert.ok(clippings.every((clipping) => !Object.hasOwn(clipping, "kind") && !Object.hasOwn(clipping, "source")));
});

test("archive snippets are length-limited while detail content remains intact", () => {
  assert.equal(clippingPreview("One two three four", 7), "One…");
  assert.equal(clippingPreview(clippings[0].body, 220), clippings[0].body.replace(/\s+/g, " ").trim());
  assert.match(clippingPreview(clippings.at(-2).body, 220), /…$/);
});
