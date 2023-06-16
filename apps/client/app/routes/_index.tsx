import type { LinksFunction } from '@remix-run/node';

import { Section, links as sectionStyles } from '~/components/Section';
import homeStyles from '~/styles/routes/home.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: homeStyles },
  ...sectionStyles()
];

export default function Home() {
  return (
    <Section>
      <div className="about-container">
        <picture className="profile-picture">
          <img
            src="/_static/images/thom.jpg"
            alt="thomas newman"
            className="profile-img"
          />
        </picture>
        <p className="about-me-text">
          Hello! I&apos;m a web developer and welcome to my site.
        </p>
      </div>
    </Section>
  );
}
