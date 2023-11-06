import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Section } from '~/components/Section';
import { Blog } from '~/features/blog';
import {
  createSupabaseServerClient,
  getAllBlogs
} from '~/service/supabase/supabase.service';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = createSupabaseServerClient(request);
  const blogsData = await getAllBlogs(supabase);

  return json({
    blogsData
  });
};

export default function BlogRoute() {
  const { blogsData } = useLoaderData<typeof loader>();

  return (
    <Section>
      <h2>Blog</h2>
      <Blog data={blogsData} />
    </Section>
  );
}

export const handle = { hydrate: true };
