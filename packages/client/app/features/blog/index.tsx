import { Link } from '@remix-run/react';

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
          <Link to={`${post.filename}`}>{post.title}</Link>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};
