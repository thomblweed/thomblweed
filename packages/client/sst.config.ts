import type { SSTConfig } from 'sst';
import { RemixSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'thomblweed-client',
      region: 'eu-west-2'
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, 'site');
      stack.addOutputs({
        url: site.url
      });
      if (app.stage !== 'prod') {
        app.setDefaultRemovalPolicy('destroy');
      }
    });
  }
} satisfies SSTConfig;
