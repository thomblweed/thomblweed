import type { LinksFunction } from '@remix-run/node';

import { Section, links as sectionStyles } from '~/components/Section';
import aboutMeStyles from './about-me.css';
import { skillsData } from './data/skills.data';
import { Skills, links as skillsStyles } from './skills/Skills';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: aboutMeStyles },
  ...skillsStyles(),
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
              srcSet="/images/thom-310.webp"
              type="image/webp"
              width={310}
              height={310}
            />
            <img
              src="/images/thom-240.webp"
              itemType="image/webp"
              alt="thomas newman"
              width={240}
              height={240}
              className="profile-img"
            />
          </picture>
          <div className="about-me">
            <h2>about me</h2>
            <p>
              Frontend Developer, with a history of full stack development and
              over 8 years of industry experience including 5 years in
              consulting. Thrives in agile environments, fostering collaboration
              and code pairing. Demonstrates a strong passion for continuous
              learning and has a proven track record of quickly adapting to new
              technologies. Derives great satisfaction from thoroughly testing
              across all areas, including unit, integration, acceptance, and
              end-to-end, while utilising the principles of Test-Driven
              Development (TDD).
            </p>
          </div>
        </div>
      </Section>
      <Section color="dark-red">
        <Skills data={skillsData} />
      </Section>
    </div>
  );
};
