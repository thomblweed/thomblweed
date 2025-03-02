import { Link, useOutletContext } from 'react-router';

import { DeleteBlog } from '../../../features/admin/delete-blog';
import type { AdminContext } from '../../../features/admin/types/AdminContext.type';
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
        <Link to={`../${id}`}>
          <h3>{trimmmedTitle}</h3>
        </Link>
      ) : null}
      {isAdmin ? <DeleteBlog id={id} /> : null}
    </article>
  );
};
