/** @type {import('@remix-run/dev').AppConfig} */
export default {
  cacheDirectory: '../../node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
  serverModuleFormat: 'esm',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'build',
  serverBuildFile: 'index.js'
};
