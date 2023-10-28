import type { LinksFunction } from '@remix-run/node';

import skillsStyles from './skills.css';
import { type SkillsData } from './types';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: skillsStyles }
];

type SkillsProps = {
  data: SkillsData[];
};

export const Skills = ({ data }: SkillsProps) => (
  <>
    <div className="skill-container">
      <div className="skills-grid">
        {data.map(({ heading, skills }) => (
          <div key={heading} className="skills-item">
            <h3>{heading}</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </>
);
