import type { LinksFunction, V2_MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import type { ReactNode } from 'react';

import { MainLayout, links as mainLayoutStyles } from '~/layouts/MainLayout';
import fontStyles from '~/styles/font.css';
import resetStyles from '~/styles/reset.css';
import styles from '~/styles/styles.css';

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    href: '/_static/images/space-city-1920.jpg',
    // imagesrcset:
    //   '/images/space-city-480.jpg 480w, /images/space-city-960.jpg 960w, /images/space-city-1440.jpg 1440w, /images/space-city-1920.jpg 1920w, /images/space-city-2400.jpg 2400w',
    as: 'image',
    type: 'image/jpg'
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/_static/favicon.ico'
  },
  { rel: 'stylesheet', href: resetStyles },
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: fontStyles },
  ...mainLayoutStyles()
];

export const meta: V2_MetaFunction = () => [
  { charset: 'utf-8' },
  { title: 'thomblweed' },
  { name: 'viewport', viewport: 'width=device-width,initial-scale=1' }
];

const Document = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
    </body>
  </html>
);

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
