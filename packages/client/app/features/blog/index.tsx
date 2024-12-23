import { Link } from '@remix-run/react';
import { formatDate } from 'date-fns';

import { PostMeta } from '~/routes/blog._index';

import './blog-feature.css';

// type BlogsProps = {
//   data: BlogData[] | null;
//   isAdmin: boolean;
// };

// export const BlogsFeature = ({ data, isAdmin }: BlogsProps) => (
//   <Section>
//     <h2>Blog</h2>
//     {isAdmin ? (
//       <BlogAdminLayout>
//         <BlogsList data={data} />
//       </BlogAdminLayout>
//     ) : (
//       <BlogsList data={data} />
//     )}
//   </Section>
// );

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
