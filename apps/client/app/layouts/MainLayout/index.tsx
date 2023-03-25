import type { LinksFunction } from '@remix-run/node';
import type { ReactNode } from 'react';

import mainStyles from './main.css';
import { Footer, links as footerStyles } from '~/components/Footer';
import { Header } from '~/components/Header';
import { links as headerStyles } from '~/components/Header';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: mainStyles },
  ...headerStyles(),
  ...footerStyles()
];

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="container main">{children}</main>
    <Footer footerText="thomblweed" />
  </>
);
