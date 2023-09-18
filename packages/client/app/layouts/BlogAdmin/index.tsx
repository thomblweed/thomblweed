import type { LinksFunction } from '@remix-run/node';
import { useFetcher, useNavigation } from '@remix-run/react';
import { useEffect, useRef, type ReactNode } from 'react';

import { Button } from '~/components/Elements/Button';
import { Field } from '~/components/Form/Field';
import adminStyles from './admin.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: adminStyles }
];

export const BlogAdminLayout = ({ children }: { children: ReactNode }) => {
  const fetcher = useFetcher();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isBusy = fetcher.state !== 'idle';
  const canCloseDialog = fetcher.formData?.get('title') && dialogRef.current;

  useEffect(() => {
    if (canCloseDialog) {
      dialogRef.current.close();
    }
  }, [canCloseDialog]);

  const newBlogDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.showModal();
  };

  return (
    <>
      <div className="admin-container container">
        <Button type="button" disabled={isBusy} onClick={newBlogDialog}>
          New +
        </Button>
        <dialog ref={dialogRef}>
          <h2>New Blog</h2>
          <fetcher.Form method="post" action="/api/blog/add-blog">
            <Field
              label="Title"
              name="title"
              type="text"
              disabled={isBusy}
              required
            />
            <Button type="submit" disabled={isBusy}>
              Create Blog
            </Button>
          </fetcher.Form>
        </dialog>
      </div>
      {children}
    </>
  );
};
