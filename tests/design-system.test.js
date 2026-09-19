import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const stylesheet = new URL("../src/app/globals.css", import.meta.url);

test("the editorial stylesheet has one dark palette and shared spacing tokens", async () => {
  const css = await readFile(stylesheet, "utf8");
  for (const token of ["--s1", "--s2", "--s3", "--s4", "--gutter", "--content", "--reading"]) {
    assert.match(css, new RegExp(`${token}:`));
  }
  assert.match(css, /color-scheme:dark/);
  assert.doesNotMatch(css, /data-theme|orbit-|ellipse|radial-gradient/);
});

test("the shared layout uses the spacing scale instead of page-specific theme controls", async () => {
  const css = await readFile(stylesheet, "utf8");
  assert.match(css, /\.section-space \{ padding-top:var\(--s3\)/);
  assert.match(css, /\.hero \{ padding-block:var\(--s4\) var\(--s3\)/);
  assert.doesNotMatch(css, /\.theme-toggle|\.orbit-mark/);
});
