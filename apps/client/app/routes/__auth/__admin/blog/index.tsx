import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useFetcher, useLoaderData, useOutletContext } from '@remix-run/react';

import {
  createSupabaseServerClient,
  getAllBlogs
} from '~/service/supabase/supabase.service';
import { Button, links as buttonStyles } from '~/components/Elements/Button';
import type { AdminContext } from '../../__admin';

export const links: LinksFunction = () => [...buttonStyles()];

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
  const { submit, state } = useFetcher();
  console.log({ state });

  const handleDeleteBlog = (id: number) => {
    console.log({ id });
    const iD = id.toString();
    console.log({ iD });
    submit({}, { method: 'post', action: '/api/blog/delete-blog' });
  };

  return (
    <section>
      <h2>Blog</h2>
      {blogs?.map(({ title, id }) => (
        <div key={id}>
          <div>{title}</div>
          {isAdmin ? (
            <Button
              type="button"
              width="none"
              onClick={() => handleDeleteBlog(id)}
            >
              &#10005;
            </Button>
          ) : null}
        </div>
      ))}
    </section>
  );
}
