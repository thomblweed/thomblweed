import { useLoaderData } from 'react-router';

import { BlogFeature } from '~/features/blog';

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
};

export type PostMeta = Frontmatter & {
  filename: string;
};

export const loader = async () => {
  const posts = import.meta.glob<{ frontmatter: Frontmatter }>(
    '../routes/blog.*.mdx',
    {
      eager: true
    }
  );
  const entries = Object.entries(posts).map(([file, post]) => {
    const filename = file.replace('./blog.', '').replace(/\.mdx$/, '');

    return {
      filename,
      ...post.frontmatter
    };
  });

  return Response.json(entries);
};

export default function BlogRoute() {
  const posts = useLoaderData<typeof loader>();

  return <BlogFeature posts={posts} />;
}
