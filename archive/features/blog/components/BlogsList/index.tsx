import { Outlet } from 'react-router';

import { BlogData } from '~/service/supabase/types';

import { BlogInfo } from './BlogInfo';

export const BlogsList = ({ data }: { data: BlogData[] | null }) => (
  <>
    <div className="blog-container">
      {data?.length ? (
        data.map(({ title, id }) => (
          <BlogInfo key={id + title} id={id} title={title} />
        ))
      ) : (
        <Outlet />
      )}
    </div>
  </>
);
