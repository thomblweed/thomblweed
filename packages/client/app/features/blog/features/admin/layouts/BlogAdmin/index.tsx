import { type ReactNode } from 'react';

import './admin.css';
import { NewBlog } from './components/NewBlog';

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
