import './skills.css';
import type { SkillsData } from './types';

type SkillsProps = {
  data: SkillsData[];
};

export const Skills = ({ data }: SkillsProps) => (
  <>
    <div className="skill-container">
      <div className="skills-grid">
        {data.map(({ heading, skills }) => (
          <div key={heading}>
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
