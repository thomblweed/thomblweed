import type { LinksFunction } from '@remix-run/node';

import { Section, links as sectionStyles } from '~/components/Section';
import aboutMeStyles from './about-me.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: aboutMeStyles },
  ...sectionStyles()
];

export const AboutMe = () => {
  return (
    <div className="about-grid">
      <Section>
        <div className="about-container">
          <picture className="profile-picture">
            <source
              media="(min-width: 48rem)"
              srcSet="/_static/images/thom-310.webp"
              type="image/webp"
            />
            <img
              src="/_static/images/thom-240.webp"
              itemType="image/webp"
              alt="thomas newman"
              className="profile-img"
            />
          </picture>
          <div className="about-me">
            <h2>about me</h2>
            <p>
              Frontend Developer, with a history of full stack development, over
              8 years experience and 5 years in the consulting field. Enjoys
              working in agile environments and promotes collaboration and code
              pairing. Passionate about learning new skills and has a history of
              being able to learn unfamiliar technology with new projects.
            </p>
          </div>
        </div>
      </Section>
      <Section color="dark-red">
        <div className="skill-container">
          <div className="skills-grid">
            <div>
              <h3>libraries</h3>
              <ul className="skills-list">
                <li>React</li>
                <li>React Router</li>
                <li>XState</li>
                <li>Redux</li>
                <li>Mobx</li>
                <li>React Hook Form</li>
                <li>Styled Components</li>
                <li>Material UI</li>
                <li>Chakra UI</li>
              </ul>
            </div>
            <div>
              <h3>frameworks</h3>
              <ul>
                <li>Remix</li>
                <li>Next</li>
                <li>Node</li>
                <li>Express</li>
                <li>Koa</li>
              </ul>
            </div>
            <div>
              <h3>testing</h3>
              <ul>
                <li>Jest</li>
                <li>Vitest</li>
                <li>Testing Library</li>
                <li>Playwright</li>
                <li>Cypress</li>
              </ul>
            </div>
            <div>
              <h3>languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3>database</h3>
              <ul>
                <li>Supabase</li>
                <li>DB2</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3>tools</h3>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Bitbucket</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
