import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';

import {
  createSupabaseClient,
  getAllBlogs,
  getRoleForCurrentUser
} from '~/service/supabase/supabase.service';
import { Button, links as buttonStyles } from '~/components/Elements/Button';

export const links: LinksFunction = () => [...buttonStyles()];

export const loader = async ({ request }: DataFunctionArgs) => {
  const supabase = createSupabaseClient(request);
  const [roleData, blogs] = await Promise.all([
    getRoleForCurrentUser(supabase),
    getAllBlogs(supabase)
  ]);

  return json({
    role: roleData?.role || 'user',
    blogs
  });
};

export default function Blog() {
  const { role, blogs } = useLoaderData<typeof loader>();
  const { submit, state } = useFetcher();

  const addBlog = () => {
    submit({}, { method: 'post', action: '/api/blog/add-blog' });
  };

  return (
    <section>
      <h2>Blog</h2>
      {role === 'admin' ? (
        <Button
          width="normal"
          type="button"
          disabled={state === 'submitting' || state === 'loading'}
          onClick={addBlog}
        >
          Add Blog
        </Button>
      ) : null}
      {blogs?.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </section>
  );
}
