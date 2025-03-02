/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    const isProduction = input?.stage === 'production';

    return {
      name: 'thomblweed-client',
      removal: isProduction ? 'retain' : 'remove',
      protect: isProduction,
      home: 'aws',
      providers: {
        aws: {
          region: 'eu-west-2'
        }
      }
    };
  },
  async run() {
    new sst.aws.React('site', {
      buildCommand: 'pnpm build',
      path: '.',
      domain: {
        name: 'thomblweed.dev',
        dns: sst.aws.dns({ zone: 'Z10479952V71QFTCNVY8Y' })
      }
    });
  }
});
