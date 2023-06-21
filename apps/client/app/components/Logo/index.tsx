import type { LinksFunction } from '@remix-run/node';

import logoStyles from './logo.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: logoStyles }
];

export const Logo = () => (
  <div>
    <div className="text-primary text-large text-logo">thomas newman</div>
    <div className="text-secondary text-medium sub-logo-text">
      {'> web developer'}
    </div>
  </div>
);
