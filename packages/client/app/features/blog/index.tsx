import { Link } from '@remix-run/react';

import './blog.css';
import { PostMeta } from '~/routes/_blog-admin.blog._index';

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
          <Link className="blog-link" to={`${post.filename}`}>
            {post.title}
          </Link>{' '}
          <p className="blog-description">{post.description}</p>
        </li>
      ))}
    </ul>
  );
};
