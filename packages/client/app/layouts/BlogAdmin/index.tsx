import type { LinksFunction } from '@remix-run/node';
import { type ReactNode } from 'react';

import { NewBlog, links as newBlogStyles } from '~/features/new-blog';
import adminStyles from './admin.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: adminStyles },
  ...newBlogStyles()
];

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
