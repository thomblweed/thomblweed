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
    <main className="main">{children}</main>
    <Footer footerText="thomblweed" />
  </>
);
