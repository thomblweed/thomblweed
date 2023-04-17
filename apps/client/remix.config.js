/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  publicPath: '/_static/build/',
  server: './server.ts',
  serverBuildPath: 'server/index.js',
  serverMainFields: ['main', 'module'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  }
};
