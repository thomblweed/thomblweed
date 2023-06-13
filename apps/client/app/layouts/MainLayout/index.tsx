import type { LinksFunction } from '@remix-run/node';
import type { ReactNode } from 'react';

import { Footer, links as footerStyles } from '~/components/Footer';
import { Header, links as headerStyles } from '~/components/Header';
import mainStyles from './main.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: mainStyles },
  ...headerStyles(),
  ...footerStyles()
];

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <picture
      style={{
        position: 'absolute',
        zIndex: '-1',
        inset: 0,
        mixBlendMode: 'soft-light'
      }}
    >
      <source
        media="(min-width: 2400px)"
        srcSet="/_static/images/space-city-2400.jpg"
      />
      <source
        media="(min-width: 1920px)"
        srcSet="/_static/images/space-city-1920.jpg"
      />
      <source
        media="(min-width: 1440px)"
        srcSet="/_static/images/space-city-1440.jpg"
      />
      <source
        media="(min-width: 500px)"
        srcSet="/_static/images/space-city-960.jpg"
      />
      <img
        src="/_static/images/space-city-480.jpg"
        alt="space city"
        style={{ objectFit: 'cover', minWidth: '100%', minHeight: '100%' }}
      />
    </picture>
    <main className="main">{children}</main>
    <Footer footerText="thomas newman" />
  </>
);
