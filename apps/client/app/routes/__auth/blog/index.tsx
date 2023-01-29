import { Suspense } from 'react';
import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Await, useFetcher, useLoaderData } from '@remix-run/react';

import { createSupabaseClient } from '~/service/supabase/supabase.service';
import { Button, links as buttonStyles } from '~/components/Elements/Button';
import type { Database } from '@types';

type UserRole = Database['public']['Tables']['user_roles']['Row'];

type UserData = {
  data: {
    user_roles: UserRole;
  } | null;
};

export const links: LinksFunction = () => [...buttonStyles()];

export const loader = async ({ request }: DataFunctionArgs) => {
  const supabase = createSupabaseClient(request);
  // TODO: extract to service and promise all
  const { data: roleData } = (await supabase
    .from('user_profile')
    .select(`user_roles(role)`)
    .limit(1)
    .single()) as UserData;
  const { data: blogsData } = await supabase.from('blogs').select('*');

  return json({
    role: roleData?.user_roles.role || 'user',
    blogs: blogsData
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
