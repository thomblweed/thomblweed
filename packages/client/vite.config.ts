import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight]
    }),
    reactRouter(),
    tsconfigPaths()
  ]
});
