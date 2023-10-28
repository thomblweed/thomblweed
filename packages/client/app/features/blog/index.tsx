import { LinksFunction } from '@remix-run/node';

import type { BlogData } from '~/service/supabase/types';
import blogStyles from './blog.css';
import { BlogInfo } from './components/BlogInfo';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: blogStyles }
];

type BlogProps = {
  data: BlogData[] | null;
  isAdmin: boolean;
};

export const Blog = ({ data, isAdmin }: BlogProps) => {
  return (
    <>
      <div className="blog-container">
        {data?.map(({ title, id }) => (
          <BlogInfo key={id} isAdmin={isAdmin} id={id} title={title} />
        ))}
        coming soon...
      </div>
    </>
  );
};
