import type { LinksFunction } from '@remix-run/node';

import { AboutMe, links as aboutMeStyles } from '~/features/about-me/AboutMe';

export const links: LinksFunction = () => [...aboutMeStyles()];

export default function Home() {
  return <AboutMe />;
}
