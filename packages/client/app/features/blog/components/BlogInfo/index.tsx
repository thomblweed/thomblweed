import { useOutletContext } from '@remix-run/react';

import { DeleteBlog } from '../../admin/delete-blog';
import type { AdminContext } from '../../admin/types/AdminContext.type';
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
      {trimmmedTitle.length ? <h3>{trimmmedTitle}</h3> : null}
      {isAdmin ? <DeleteBlog id={id} /> : null}
    </article>
  );
};
