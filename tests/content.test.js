import test from "node:test";
import assert from "node:assert/strict";
import { projects } from "../src/content/projects.js";
import {
  getFeaturedProjects,
  getArchiveProjects,
  getProject,
} from "../src/features/projects/selectors.js";
import { dateRange } from "../src/lib/dates.js";
import { getSiteOrigin, pageMetadata } from "../src/lib/site.js";
test("featured and archived work partition the canonical catalogue", () => {
  const a = getFeaturedProjects(),
    b = getArchiveProjects();
  assert.equal(a.length, 3);
  assert.equal(new Set([...a, ...b].map((p) => p.slug)).size, projects.length);
  assert.deepEqual(
    a.map((p) => p.featuredOrder),
    [1, 2, 3],
  );
});
test("lookup returns canonical content; unknown slugs are absent", () => {
  assert.equal(getProject(projects[0].slug), projects[0]);
  assert.equal(getProject("not-a-project"), undefined);
});
test("dates are deterministic and only ongoing roles say Present", () => {
  assert.equal(dateRange("2026-01", "2026-06"), "Jan 2026 — Jun 2026");
  assert.equal(dateRange("2026-06", null), "Jun 2026 — Present");
});
test("site origin is explicit and normalizes paths", () => {
  assert.equal(
    getSiteOrigin("https://example.com/path"),
    "https://example.com",
  );
  assert.throws(() => getSiteOrigin("javascript:alert(1)"));
});
test("route metadata preserves a meaningful title and description", () => {
  const m = pageMetadata("Work", "Selected projects", "/projects");
  assert.equal(m.title, "Work");
  assert.equal(m.description, "Selected projects");
});
