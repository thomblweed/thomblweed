import mdx from '@mdx-js/rollup';
import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight]
    }),
    remix({
      ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
      serverBuildFile: 'index.js'
    }),
    tsconfigPaths()
  ]
});
