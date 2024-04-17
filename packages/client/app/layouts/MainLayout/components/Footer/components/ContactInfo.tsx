import { GitHubSVG } from './svg/GitHubSVG';
import { LinkedInSVG } from './svg/LinkedInSVG';

import './contact-info.css';

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <a
        href="https://www.linkedin.com/in/thomas-newman-5a50b829/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInSVG />
      </a>
      <a href="https://github.com/thomblweed" target="_blank" rel="noreferrer">
        <GitHubSVG />
      </a>
    </div>
  );
};
