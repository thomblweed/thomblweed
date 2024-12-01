import { Section } from '~/components/Section';
import './about-me.css';

import { Tooling } from './components/Tooling';
import { skillsData } from './data/skills.data';
import { Skills } from './skills/Skills';

export const AboutMe = () => (
  <div className="about-container">
    <Section>
      <div className="about-section">
        <div className="about-me">
          <h2>Hi, I&apos;m Thom!</h2>
          <p>
            I&apos;m a developer based in Edinburgh with 10 years experience.
            Although my background encompasses fullstack development, I have
            been focussing in the frontend space for the past 3 years. I have an
            enthusiasm for learning, and have a track record of adapting to new
            technologies.
          </p>
        </div>
        <Tooling />
        {/* <picture className="profile-picture"> */}
        {/*   <source */}
        {/*     media="(min-width: 48rem)" */}
        {/*     srcSet="/images/thom-620.webp" */}
        {/*     type="image/webp" */}
        {/*     width={310} */}
        {/*     height={310} */}
        {/*   /> */}
        {/*   <img */}
        {/*     src="/images/thom-620.webp" */}
        {/*     itemType="image/webp" */}
        {/*     alt="thomas newman" */}
        {/*     width={240} */}
        {/*     height={240} */}
        {/*     className="profile-img" */}
        {/*   /> */}
        {/* </picture> */}
      </div>
    </Section>
    <Section color="dark-red">
      <Skills data={skillsData} />
    </Section>
  </div>
);
