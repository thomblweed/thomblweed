import { NavLink } from 'react-router';

import { Navigation } from '~/layouts/MainLayout/components/Navigation';

import { Logo } from '../Logo';

import './header.css';

export const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <Logo />
        <Navigation
          items={[
            { value: 'home', route: '/' },
            { value: 'blog', route: '/blog' }
          ]}
          content={({ value, route }) => (
            <NavLink
              className={({ isActive }) =>
                'nav-link '.concat(
                  isActive ? 'nav-link-active' : 'text-alternate'
                )
              }
              to={route}
              reloadDocument={true}
            >
              {value}
            </NavLink>
          )}
        />
      </div>
    </header>
  );
};
