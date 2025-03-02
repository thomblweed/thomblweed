import { Link } from '@remix-run/react';
import { formatDate } from 'date-fns';

import { type PostMeta } from '~/routes/blog._index';

import './blog-feature.css';

export const BlogFeature = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.title}>
          <Link className="text-medium" to={`${post.filename}`}>
            {post.title}
          </Link>
          <div className="text-secondary">
            {formatDate(new Date(post.date), 'do MMMM yyyy')}
          </div>
          <p className="blog-description">{post.description}</p>
        </li>
      ))}
    </ul>
  );
};
