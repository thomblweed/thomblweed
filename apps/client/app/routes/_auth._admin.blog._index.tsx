import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';

import { Section, links as sectionStyles } from '~/components/Section';
import {
  BlogInfo,
  links as blogInfoStyles
} from '~/features/blog/components/BlogInfo';
import {
  createSupabaseServerClient,
  getAllBlogs
} from '~/service/supabase/supabase.service';
import blogStyles from '~/styles/routes/blog.css';
import type { AdminContext } from './_auth._admin';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: blogStyles },
  ...sectionStyles(),
  ...blogInfoStyles()
];

export const loader = async ({ request }: DataFunctionArgs) => {
  const supabase = createSupabaseServerClient(request);
  const blogs = await getAllBlogs(supabase);

  return json({
    blogs
  });
};

export default function Blog() {
  const { blogs } = useLoaderData<typeof loader>();
  const { isAdmin } = useOutletContext<AdminContext>();

  return (
    <Section>
      <h2>Blog</h2>
      <div className="blog-container">
        {blogs?.map(({ title, id }) => (
          <BlogInfo key={id} isAdmin={isAdmin} id={id} title={title} />
        ))}
      </div>
    </Section>
  );
}
