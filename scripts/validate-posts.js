import { getAllPosts } from '../src/features/blog/posts.js';
import { renderPost } from '../src/features/blog/mdx.js';
const posts = await getAllPosts();
for (const post of posts) {
  try { await renderPost(post.body); }
  catch (error) { throw new Error(`${post.slug}: invalid MDX: ${error.message}`, { cause: error }); }
}
console.log(`Validated metadata and MDX for ${posts.length} posts, including drafts.`);
