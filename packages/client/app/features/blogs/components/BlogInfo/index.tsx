import { Link, useOutletContext } from '@remix-run/react';

import { DeleteBlog } from '../../composables/admin/delete-blog';
import type { AdminContext } from '../../composables/admin/types/AdminContext.type';
import './blog-info.css';

type BlogInfoProps = {
  id: number;
  title: string;
};

export const BlogInfo = ({ id, title }: BlogInfoProps) => {
  const { isAdmin } = useOutletContext<AdminContext>();
  const trimmmedTitle = title.trim();

  return (
    <article className="blog-info">
      {trimmmedTitle.length ? (
        <Link to={`/blogs/${id}`}>
          <h3>{trimmmedTitle}</h3>
        </Link>
      ) : null}
      {isAdmin ? <DeleteBlog id={id} /> : null}
    </article>
  );
};
