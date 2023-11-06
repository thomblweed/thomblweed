import type { FC, ReactNode } from 'react';

import './section.css';

type SectionProps = {
  children: ReactNode;
  color?: 'dark' | 'dark-red';
};

export const Section: FC<SectionProps> = ({ children, color = 'dark' }) => (
  <section className={`color-dark${color === 'dark-red' ? '--red' : ''}`}>
    <div className="inner-section container">{children}</div>
  </section>
);
