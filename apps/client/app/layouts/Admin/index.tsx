import type { LinksFunction } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';
import type { ReactNode } from 'react';

import { Button } from '~/components/Elements/Button';
import adminStyles from './admin.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: adminStyles }
];

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { submit, state } = useFetcher();

  const addBlog = () => {
    submit({}, { method: 'post', action: '/api/blog/add-blog' });
  };

  return (
    <>
      <div className="admin-container container">
        <Button
          type="button"
          disabled={state === 'submitting' || state === 'loading'}
          onClick={addBlog}
        >
          New +
        </Button>
      </div>
      {children}
    </>
  );
};
