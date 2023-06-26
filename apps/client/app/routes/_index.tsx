import type { LinksFunction } from '@remix-run/node';

import { Section, links as sectionStyles } from '~/components/Section';
import homeStyles from '~/styles/routes/home.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: homeStyles },
  ...sectionStyles()
];

export default function Home() {
  return (
    <div className="about-grid">
      <div className="about-center">
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
                I am a Fullstack Developer with over 8 years experience. I
                started out in late 2014 in the Microsoft SharePoint and CRM
                development space before moving on to web development in 2018. I
                am passionate about agile methodology and constantly strive to
                expand my knowledge and skills.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
