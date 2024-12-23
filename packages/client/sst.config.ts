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
      edge: false,
      domain: {
        name: 'thomblweed.dev',
        dns: sst.aws.dns({ zone: 'Z10479952V71QFTCNVY8Y' })
      }
    });
  }
});
