import { LinksFunction } from '@remix-run/node';

import type { BlogData } from '~/service/supabase/types';
import blogStyles from './blog.css';
import { BlogInfo } from './components/BlogInfo';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: blogStyles }
];

type BlogProps = {
  data: BlogData[] | null;
};

export const Blog = ({ data }: BlogProps) => (
  <>
    <div className="blog-container">
      {data?.length ? (
        data.map(({ title, id }) => (
          <BlogInfo key={id + title} id={id} title={title} />
        ))
      ) : (
        <span>coming soon...</span>
      )}
    </div>
  </>
);
