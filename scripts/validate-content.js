import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { projects } from "../src/content/projects.js";
import { experiences } from "../src/content/experiences.js";
const errors = [];
const slugs = new Set();
const ranks = new Set();
for (const p of projects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug) || slugs.has(p.slug))
    errors.push(`Invalid or duplicate slug: ${p.slug}`);
  slugs.add(p.slug);
  for (const key of ["title", "summary", "role", "category"])
    if (!p[key]?.trim()) errors.push(`${p.slug}: missing ${key}`);
  if (p.featuredOrder !== null) {
    if (ranks.has(p.featuredOrder)) errors.push("Duplicate featured order");
    ranks.add(p.featuredOrder);
    if (!p.image) errors.push("Featured projects need an image");
  }
  if (
    p.image &&
    (!p.image.alt ||
      !existsSync(
        fileURLToPath(new URL(`../public${p.image.src}`, import.meta.url)),
      ))
  )
    errors.push(`${p.slug}: missing image or alt`);
  for (const link of Object.values(p.links)) {
    try {
      if (new URL(link).protocol !== "https:")
        errors.push("Links must use HTTPS");
    } catch {
      errors.push(`Invalid link: ${link}`);
    }
  }
  for (const key of ["situation", "task", "result"])
    if (!p.caseStudy[key]?.trim()) errors.push(`${p.slug}: missing ${key}`);
  if (!p.caseStudy.actions.length) errors.push(`${p.slug}: no implementation`);
}
const ids = new Set();
for (const e of experiences) {
  if (ids.has(e.id)) errors.push(`Duplicate experience ${e.id}`);
  ids.add(e.id);
  for (const d of [e.startDate, e.endDate])
    if (d && !/^\d{4}-(0[1-9]|1[0-2])$/.test(d))
      errors.push(`Invalid date ${d}`);
  if (e.startDate && e.endDate && e.startDate > e.endDate)
    errors.push(`Reversed dates ${e.id}`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `Validated ${projects.length} projects and ${experiences.length} experiences.`,
  );
