import type { BlogData } from '~/service/supabase/types';

import './blog.css';
import { BlogInfo } from './components/BlogInfo';

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
