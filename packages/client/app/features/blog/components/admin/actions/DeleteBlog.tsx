import { useFetcher } from '@remix-run/react';

import { Button } from '~/components/Elements/Button';

export const DeleteBlog = ({ id }: { id: number }) => {
  const { submit } = useFetcher();

  const handleSubmit = (id: number) => {
    const formData = new FormData();
    formData.set('id', id.toString());
    submit(formData, { method: 'post', action: '/api/blog/delete-blog' });
  };

  return (
    <Button type="button" onClick={() => handleSubmit(id)}>
      Delete
    </Button>
  );
};
