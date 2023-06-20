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
        <div className="about-me">
          <h2 className="about-me-text">about me</h2>
          <p className="about-me-text">
            Hello! I am an experienced frontend and full stack developer with a
            passion for working in agile with cross-functional teams. With a
            solid background in JavaScript, TypeScript, React, and Node, I am
            dedicated to continuously expanding my knowledge and staying
            up-to-date with the latest technologies.
          </p>
        </div>
      </div>
    </Section>
  );
}
