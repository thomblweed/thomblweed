import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from '@remix-run/react';
import type { ReactNode } from 'react';

import { MainLayout } from '~/layouts/MainLayout';
import '~/styles/font.css';
import '~/styles/reset.css';
import '~/styles/styles.css';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: 'favicon.ico'
  },
  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/roboto-mono-v22-latin-regular.woff2',
    as: 'font',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/roboto-mono-v22-latin-700.woff2',
    as: 'font',
    crossOrigin: 'anonymous'
  }
];

export const meta: MetaFunction = () => [
  { charset: 'utf-8' },
  { title: 'thomas newman' },
  { name: 'viewport', content: 'width=device-width, minimum-scale=1' }
];

type Hydrate = { handle: { hydrate?: boolean } };

const Document = ({ children }: { children: ReactNode }) => {
  const matches = useMatches() as Hydrate[];
  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <LiveReload />
        {includeScripts ? <Scripts /> : null}
      </body>
    </html>
  );
};

export default function Root() {
  return (
    <Document>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Document>
  );
}

export const ErrorBoundary = () => (
  <Document>
    <MainLayout>
      <div>Bad things have happened</div>
    </MainLayout>
  </Document>
);
