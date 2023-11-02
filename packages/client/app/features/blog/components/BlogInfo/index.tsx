import type { LinksFunction } from '@remix-run/node';
import { useOutletContext } from '@remix-run/react';

import { AdminContext } from '~/routes/_admin';

import {
  DeleteBlog,
  links as deleteBlogStyles
} from '../admin/actions/DeleteBlog';

import blogInfoStyles from './blog-info.css';

type BlogInfoProps = {
  id: number;
  title: string;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: blogInfoStyles },
  ...deleteBlogStyles()
];

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
