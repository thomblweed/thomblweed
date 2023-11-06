import { useOutletContext } from '@remix-run/react';

import { AdminContext } from '~/routes/_blog-admin';

import { DeleteBlog } from '../admin/actions/DeleteBlog';

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
