import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Section } from '~/components/Section';
import { createSupabaseServerClient } from '~/service/supabase/supabase.service';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { blogId } = params;
  const { supabase } = createSupabaseServerClient(request);
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', `${blogId}`)
    .single();

  if (error) {
    console.error(error);
    return json({ message: 'bad request' }, 400);
  }

  return json({ blog }, 200);
};

export default function BlogItem() {
  const { blog, message } = useLoaderData<typeof loader>();

  return (
    <Section>
      {blog ? <h2>{blog.title}</h2> : null}
      {message ? <span>{message}</span> : null}
    </Section>
  );
}

// export const handle = { hydrate: true };
