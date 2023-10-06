import type { SSTConfig } from 'sst';
import { RemixSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      stage: 'dev',
      name: 'thomblweed-client',
      region: 'eu-west-2',
      cdk: {
        fileAssetsBucketName: 'thomblweed-cdk-toolkit'
      }
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: 'nodejs18.x'
    });
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, 'site', {
        buildCommand: 'pnpm build',
        path: '.',
        runtime: 'nodejs18.x',
        edge: false
      });
      stack.addOutputs({
        url: site.url
      });
    });
    if (app.stage !== 'prod') {
      app.setDefaultRemovalPolicy('destroy');
    }
  }
} satisfies SSTConfig;
