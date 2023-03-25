import type { LinksFunction } from '@remix-run/node';

import {
  DeleteBlog,
  links as deleteBlogStyles
} from '../admin/actions/DeleteBlog';
import blogInfoStyles from './blog-info.css';

type BlogInfoProps = {
  isAdmin: boolean;
  id: number;
  title: string;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: blogInfoStyles },
  ...deleteBlogStyles()
];

export const BlogInfo = ({ isAdmin, id, title }: BlogInfoProps) => {
  return (
    <article key={id} className="blog-info">
      <h3>{title}</h3>
      {isAdmin ? <DeleteBlog id={id} /> : null}
    </article>
  );
};
