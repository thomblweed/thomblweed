import { type ReactNode } from 'react';

import { NewBlog } from '~/features/new-blog';

import './admin.css';

export const BlogAdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="admin-container container">
        <NewBlog />
      </div>
      {children}
    </>
  );
};
