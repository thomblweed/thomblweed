/** @type {import('@remix-run/dev').AppConfig} */
export default {
  cacheDirectory: '../../node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
  serverBuildPath: 'server/index.mjs',
  serverModuleFormat: 'esm'
};
