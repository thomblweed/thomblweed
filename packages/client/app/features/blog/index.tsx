import { Section } from '~/components/Section';
import { Frontmatter } from '~/routes/_blog-admin.blog._index';

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

// export const loadPosts = async () => { const posts = import.meta.glob<{ frontmatter: Frontmatter }>(
//     './content/*.mdx',
//     { eager: true }
//   );
//
//   return posts;
// };

export const BlogFeature = ({ posts }: { posts: Frontmatter[] }) => {
  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.title}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
};
