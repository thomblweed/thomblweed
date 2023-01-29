import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import {
  createSupabaseClient,
  getAllBlogs
} from '~/service/supabase/supabase.service';
import { links as buttonStyles } from '~/components/Elements/Button';

export const links: LinksFunction = () => [...buttonStyles()];

export const loader = async ({ request }: DataFunctionArgs) => {
  const supabase = createSupabaseClient(request);

  const blogs = await getAllBlogs(supabase);

  return json({
    blogs
  });
};

export default function Blog() {
  const { blogs } = useLoaderData<typeof loader>();

  return (
    <section>
      <h2>Blog</h2>
      {blogs?.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </section>
  );
}
