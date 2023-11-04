import type { LinksFunction } from '@remix-run/node';
import type { ReactNode } from 'react';

import { Footer, links as footerStyles } from './components/Footer';
import { Header, links as headerStyles } from './components/Header';
import mainLayoutStyles from './main-layout.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: mainLayoutStyles },
  ...headerStyles(),
  ...footerStyles()
];

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <picture className="picture-background">
      <source
        media="(min-width: 2400px)"
        srcSet="/images/space-city-2400.webp"
      />
      <source
        media="(min-width: 1920px)"
        srcSet="/images/space-city-1920.webp"
      />
      <source
        media="(min-width: 1280px)"
        srcSet="/images/space-city-1440.webp"
      />
      <source media="(min-width: 500px)" srcSet="/images/space-city-960.webp" />
      <img
        src="/images/space-city-480.webp"
        alt="space city"
        className="image-background"
      />
    </picture>
    <Header />
    <main className="main">{children}</main>
    <Footer footerText="thomas newman" />
  </>
);
