import type { LinksFunction } from '@remix-run/node';
import skillsStyles from './skills.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: skillsStyles }
];

export const Skills = () => (
  <div className="skill-container">
    <div className="skills-grid">
      <div className="skills-item">
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
      <div className="skills-item">
        <h3>frameworks</h3>
        <ul className="skills-list">
          <li>Remix</li>
          <li>Next</li>
          <li>Node</li>
          <li>Express</li>
          <li>Koa</li>
        </ul>
      </div>
      <div className="skills-item">
        <h3>testing</h3>
        <ul className="skills-list">
          <li>Jest</li>
          <li>Vitest</li>
          <li>Testing Library</li>
          <li>Playwright</li>
          <li>Cypress</li>
        </ul>
      </div>
      <div className="skills-item">
        <h3>languages</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
        </ul>
      </div>
      <div className="skills-item">
        <h3>database</h3>
        <ul className="skills-list">
          <li>Supabase</li>
          <li>DB2</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="skills-item">
        <h3>tools</h3>
        <ul className="skills-list">
          <li>Git</li>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Bitbucket</li>
          <li>VS Code</li>
        </ul>
      </div>
    </div>
  </div>
);
