import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [exportDirectory] = process.argv.slice(2);
if (!exportDirectory) throw new Error('Usage: node scripts/import-medium-export.js <extracted-export-directory>');

const postsDirectory = path.join(exportDirectory, 'posts');
const destinationDirectory = path.join(process.cwd(), 'content/posts');
const entityMap = {
  amp: '&', apos: "'", quot: '"', lt: '<', gt: '>', nbsp: ' ', ndash: '–', mdash: '—',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', hellip: '…', copy: '©',
};

function decode(value) {
  return value.replace(/&#(x[\da-f]+|\d+);|&([a-z]+);/gi, (_, numeric, named) => {
    if (numeric) return String.fromCodePoint(numeric[0].toLowerCase() === 'x' ? Number.parseInt(numeric.slice(1), 16) : Number(numeric));
    return entityMap[named.toLowerCase()] ?? `&${named};`;
  });
}

function text(value) {
  return decode(value.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

function inline(value) {
  return decode(value)
    .replace(/<br\s*\/?>/gi, '  \n')
    .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, label) => `[${text(label)}](${href})`)
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, '**$2**')
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, '*$2*')
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, '`$1`')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .trim();
}

function slugify(title) {
  return title.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function bodyFrom(html) {
  const content = html.split('<footer>')[0].match(/<section data-field="body"[^>]*>([\s\S]*)$/i)?.[1] ?? '';
  const blocks = [];
  const pattern = /<(h[1-6]|p|blockquote|li)\b([^>]*)>([\s\S]*?)<\/\1>|<img\b([^>]*)\/?>/gi;
  for (const match of content.matchAll(pattern)) {
    const tag = match[1]?.toLowerCase();
    const attributes = match[2] ?? match[4] ?? '';
    if (!tag) {
      const src = attributes.match(/\bsrc="([^"]+)"/i)?.[1];
      if (src) blocks.push(`![Medium article image](${src})`);
      continue;
    }
    if (/graf--title/.test(attributes)) continue;
    const value = inline(match[3]);
    if (!value) continue;
    if (/^h[1-6]$/.test(tag)) blocks.push(`${'#'.repeat(Number(tag[1]) - 1 || 2)} ${value}`);
    else if (tag === 'blockquote') blocks.push(value.split('\n').map(line => `> ${line}`).join('\n'));
    else if (tag === 'li') blocks.push(`- ${value}`);
    else blocks.push(value);
  }
  return blocks.join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
}

const files = (await readdir(postsDirectory)).filter(file => /^\d{4}-\d{2}-\d{2}_.+\.html$/.test(file));
const existingFiles = (await readdir(destinationDirectory)).filter(file => /\.mdx?$/.test(file));
const existing = new Set(existingFiles.map(file => file.replace(/\.mdx?$/, '')));
const existingTitles = new Set(await Promise.all(existingFiles.map(async file => {
  const source = await readFile(path.join(destinationDirectory, file), 'utf8');
  const title = source.match(/^title:\s*["'](.+)["']\s*$/m)?.[1];
  return title ? slugify(title) : '';
})));
const imported = [];

for (const file of files) {
  const html = await readFile(path.join(postsDirectory, file), 'utf8');
  const title = text(html.match(/<h1 class="p-name">([\s\S]*?)<\/h1>/i)?.[1] ?? '');
  const description = text(html.match(/<section data-field="subtitle"[^>]*>([\s\S]*?)<\/section>/i)?.[1] ?? '');
  const publishedAt = file.slice(0, 10);
  const slug = slugify(title);
  const body = bodyFrom(html);
  if (!title || !slug || !body) throw new Error(`Could not convert ${file}`);
  if (existing.has(slug) || existingTitles.has(slug)) continue;
  const summary = description || body.split(/\n\n/).find(part => !part.startsWith('#') && !part.startsWith('!['))?.replace(/\n/g, ' ') || title;
  const frontmatter = `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(summary.slice(0, 300))}\npublishedAt: "${publishedAt}"\ntags: []\ndraft: false\n---\n\n`;
  await writeFile(path.join(destinationDirectory, `${slug}.mdx`), `${frontmatter}${body}\n`);
  imported.push(slug);
}

console.log(`Imported ${imported.length} posts: ${imported.join(', ')}`);
