import { BlogData } from '~/service/supabase/types';

import { BlogInfo } from '../BlogInfo';

export const Blogs = ({ data }: { data: BlogData[] | null }) => (
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
