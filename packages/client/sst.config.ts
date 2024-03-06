import type { SSTConfig } from 'sst';
import { RemixSite } from 'sst/constructs';

export default {
  config() {
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
      runtime: 'nodejs20.x'
    });
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, 'site', {
        customDomain: 'thomblweed.info',
        buildCommand: 'pnpm build',
        path: '.',
        runtime: 'nodejs20.x',
        edge: false,
        environment: {
          SUPABASE_URL: process.env.SUPABASE_URL || '',
          SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
          SUPABASE_COOKIE_DOMAIN: process.env.SUPABASE_COOKIE_DOMAIN || ''
        }
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
