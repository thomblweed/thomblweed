import type { ActionFunction, LinksFunction } from '@remix-run/node';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';

import {
  AdminLogin,
  links as adminLoginStyles
} from '~/features/admin-login/AdminLogin';
import { loginHandler } from '~/features/admin-login/handlers/login';

export const links: LinksFunction = () => [...adminLoginStyles()];

export const action: ActionFunction = async ({ request }) =>
  loginHandler(request);

export default function Login() {
  return <AdminLogin />;
}

export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>
          {error.status} {error.statusText}
        </h2>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <div>Unknown Error</div>;
  }
};
