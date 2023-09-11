import type { BlogData } from '~/service/supabase/types';
import { BlogInfo } from './components/BlogInfo';

type BlogProps = {
  data: BlogData[] | null;
  isAdmin: boolean;
};

export const Blog = ({ data, isAdmin }: BlogProps) => {
  return (
    <>
      <h2>blog</h2>
      <div className="blog-container">
        {data?.map(({ title, id }) => (
          <BlogInfo key={id} isAdmin={isAdmin} id={id} title={title} />
        ))}
        coming soon...
      </div>
    </>
  );
};
