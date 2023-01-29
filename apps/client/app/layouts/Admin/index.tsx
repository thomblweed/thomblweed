import { useFetcher } from '@remix-run/react';
import type { ReactNode } from 'react';

import { Button } from '~/components/Elements/Button';

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { submit, state } = useFetcher();

  const addBlog = () => {
    submit({}, { method: 'post', action: '/api/blog/add-blog' });
  };

  return (
    <div>
      <Button
        width="normal"
        type="button"
        disabled={state === 'submitting' || state === 'loading'}
        onClick={addBlog}
      >
        Add Blog
      </Button>
      {children}
    </div>
  );
};
