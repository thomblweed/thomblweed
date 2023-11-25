import {
  json,
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs
} from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';

import { Section } from '~/components/Section';
import { Blog } from '~/features/blog';
import { BlogAdminLayout } from '~/features/blog/admin/layouts/BlogAdmin';
import { type AdminContext } from '~/features/blog/admin/types/AdminContext.type';
import {
  createSupabaseServerClient,
  getAllBlogs
} from '~/service/supabase/supabase.service';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase } = createSupabaseServerClient(request);
  const blogsData = await getAllBlogs(supabase);

  return json({
    blogsData
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { title } = Object.fromEntries(formData);
  if (title == null || typeof title !== 'string') {
    console.error('blog title is null, undefined or not a string');
    return json({ message: 'bad request' }, 400);
  }

  const { supabase } = createSupabaseServerClient(request);
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    console.error({ userError });
    return json({ message: 'bad request' }, 400);
  }

  const { data: blog, error } = await supabase
    .from('blogs')
    .insert({
      title: title.trim(),
      created_on: new Date().toDateString(),
      created_by: userData.user.id
    })
    .select('id')
    .single();

  if (error) {
    console.error(error);
    return json({ message: 'bad request' }, 400);
  }

  return redirect(`/blog/${blog.id}`);
};

export default function BlogRoute() {
  const { blogsData } = useLoaderData<typeof loader>();
  const { isAdmin } = useOutletContext<AdminContext>();

  return (
    <Section>
      <h2>Blog</h2>
      {isAdmin ? (
        <BlogAdminLayout>
          <Blog data={blogsData} />
        </BlogAdminLayout>
      ) : (
        <Blog data={blogsData} />
      )}
    </Section>
  );
}

export const handle = { hydrate: true };
