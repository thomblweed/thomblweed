import type { LinksFunction } from '@remix-run/node';
import { useFetcher } from '@remix-run/react';

import { Button, links as buttonStyles } from '~/components/Elements/Button';

export const links: LinksFunction = () => [...buttonStyles()];

export const DeleteBlog = ({ id }: { id: number }) => {
  const { submit } = useFetcher();

  const handleSubmit = (id: number) => {
    const formData = new FormData();
    formData.set('id', id.toString());
    submit(formData, { method: 'post', action: '/api/blog/delete-blog' });
  };

  return (
    <Button type="button" width="none" onClick={() => handleSubmit(id)}>
      &#10005;
    </Button>
  );
};
