import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';

import {
  createSupabaseServerClient,
  getAllBlogs
} from '~/service/supabase/supabase.service';
import {
  BlogInfo,
  links as blogInfoStyles
} from '~/features/blog/components/BlogInfo';
import type { AdminContext } from '../../__admin';
import blogStyles from '~/styles/routes/blog.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: blogStyles },
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
    <section className="container">
      <h2>Blog</h2>
      <div className="blog-container">
        {blogs?.map(({ title, id }) => (
          <BlogInfo key={id} isAdmin={isAdmin} id={id} title={title} />
        ))}
      </div>
    </section>
  );
}
