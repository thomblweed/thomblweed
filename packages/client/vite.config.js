import mdx from '@mdx-js/rollup';
import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    mdx({
      rehypePlugins: [rehypeHighlight]
    }),
    remix({
      cacheDirectory: '../../node_modules/.cache/remix',
      ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
      serverModuleFormat: 'esm',
      assetsBuildDirectory: 'public/build',
      publicPath: '/build/',
      serverBuildDirectory: 'build',
      serverBuildFile: 'index.js'
    }),
    tsconfigPaths()
  ]
});
