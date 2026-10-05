import test from "node:test";
import assert from "node:assert/strict";
import { navigation } from "../src/lib/site.js";

test("navigation leads with portfolio proof before personal context", () => {
  assert.deepEqual(navigation.map(({ label }) => label), [
    "Work", "Experience", "Writing", "Clippings", "About", "Résumé",
  ]);
  assert.equal(new Set(navigation.map(({ href }) => href)).size, navigation.length);
});
