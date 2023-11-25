import { type ReactNode } from 'react';

import { NewBlog } from '~/features/blog/admin/new-blog';

import './admin.css';

export const BlogAdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="admin-container">
        <NewBlog />
      </div>
      {children}
    </>
  );
};
