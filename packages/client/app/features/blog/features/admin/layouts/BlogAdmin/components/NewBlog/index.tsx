import { Form, useFetcher } from 'react-router';
import { useEffect, useRef } from 'react';

import { Button } from '~/components/Elements/Button';
import { Field } from '~/components/Form/Field';

import './new-blog.css';

export const NewBlog = () => {
  const fetcher = useFetcher();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fieldInputRef = useRef<HTMLInputElement>(null);
  const isBusy = fetcher.state !== 'idle';
  const shouldCloseDialog =
    fetcher.formData?.get('title') &&
    dialogRef.current &&
    fieldInputRef.current;

  useEffect(() => {
    if (shouldCloseDialog) {
      handleClose();
    }
  }, [shouldCloseDialog]);

  const handleClose = () => {
    if (dialogRef.current && fieldInputRef.current) {
      dialogRef.current.close();
      fieldInputRef.current.value = '';
    }
  };

  const newBlogDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.showModal();
  };

  return (
    <>
      <Button type="button" disabled={isBusy} onClick={newBlogDialog}>
        New +
      </Button>
      <dialog className="new-blog-dialog" ref={dialogRef}>
        <h2>New Blog</h2>
        <Form method="post">
          <Field
            ref={fieldInputRef}
            label="Title"
            name="title"
            type="text"
            disabled={isBusy}
            required
          />
          <div className="new-blog-buttons">
            <Button type="submit" disabled={isBusy}>
              Create Blog
            </Button>
            <Button
              type="button"
              disabled={isBusy}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </dialog>
    </>
  );
};
