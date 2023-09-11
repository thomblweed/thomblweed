import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useOutletContext } from '@remix-run/react';

import { Section, links as sectionStyles } from '~/components/Section';
import { Blog } from '~/features/blog';
import { links as blogInfoStyles } from '~/features/blog/components/BlogInfo';
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
  const blogsData = await getAllBlogs(supabase);

  return json({
    blogsData
  });
};

export default function BlogRoute() {
  const { blogsData } = useLoaderData<typeof loader>();
  const { isAdmin } = useOutletContext<AdminContext>();

  return (
    <Section>
      <Blog data={blogsData} isAdmin={isAdmin} />
    </Section>
  );
}
