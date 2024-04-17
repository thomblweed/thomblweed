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
        aria-label="Read more about my experience on my LinkedIn profile"
      >
        <LinkedInSVG />
      </a>
      <a
        href="https://github.com/thomblweed"
        target="_blank"
        rel="noreferrer"
        aria-label="Read more about this website source code on my github profile"
      >
        <GitHubSVG />
      </a>
    </div>
  );
};
