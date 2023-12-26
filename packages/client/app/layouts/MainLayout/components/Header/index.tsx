import { NavLink } from '@remix-run/react';

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
            { value: 'blogs', route: '/blogs' }
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
