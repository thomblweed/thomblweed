import type { LinksFunction } from '@remix-run/node';

import { LoginForm, links as loginFormStyles } from './LoginForm';

export const links: LinksFunction = () => [...loginFormStyles()];

export const AdminLogin = () => {
  return (
    <div className="center">
      <div>
        <h2>Admin Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};
