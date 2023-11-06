import { NavLink } from '@remix-run/react';

import { Logo } from '~/layouts/MainLayout/components/Logo';
import { Navigation } from '~/layouts/MainLayout/components/Navigation';

import './desktop-header.css';

const DesktopHeader = () => {
  return (
    <header>
      <div className="header-container">
        <Logo />
        <Navigation
          items={[
            { value: 'Home', route: '/' },
            { value: 'Blog', route: '/blog' }
          ]}
          content={({ value, route }) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-item --active' : 'nav-item | text-alternate'
              }
              to={route}
            >
              {value}
            </NavLink>
          )}
        />
      </div>
    </header>
  );
};

export default DesktopHeader;
