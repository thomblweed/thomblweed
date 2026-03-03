import type { ActionFunction } from 'react-router';
import { isRouteErrorResponse, useRouteError } from 'react-router';

import { loginHandler } from '~/features/login/handlers/login';
import { Login } from '~/features/login/Login';

export const action: ActionFunction = async ({ request }) =>
  loginHandler(request);

export default function LoginRoute() {
  return <Login />;
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
