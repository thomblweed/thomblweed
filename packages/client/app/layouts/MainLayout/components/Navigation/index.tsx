import type { ReactNode } from 'react';

import './navigation.css';

type NavContent = {
  value: string;
  route: string;
};

type NavigationProps = {
  items: NavContent[];
  content: (props: NavContent) => ReactNode;
};

export const Navigation = ({ items, content }: NavigationProps) => (
  <nav aria-label="primary">
    <ul className="navigation-list">
      {items.map(({ value, route }) => (
        <li className="navigation-item" key={value}>
          {content({ value, route })}
        </li>
      ))}
    </ul>
  </nav>
);
