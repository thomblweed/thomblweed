import { Section } from '~/components/Section';

import ComingSoon from './content/ComingSoon.mdx';

import 'highlight.js/styles/base16/dark-violet.css';
import './blogs.css';

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

export const BlogFeature = () => {
  return (
    <Section>
      <ComingSoon />
    </Section>
  );
};
