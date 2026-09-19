import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

// Only repository-authored MDX is executable. Never pass remote or reader input here.
export async function renderPost(body) {
  const { default: Content } = await evaluate(body, {
    ...runtime, remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHighlight],
  });
  return Content;
}
