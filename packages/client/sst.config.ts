/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'thomblweed-client',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws'
    };
  },
  async run() {
    new sst.aws.Remix('site', {
      buildCommand: 'pnpm build',
      path: '.',
      edge: false
    });
  }
});
