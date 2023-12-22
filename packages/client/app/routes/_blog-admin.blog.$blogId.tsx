import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Section } from '~/components/Section';
import { getBlogById } from '~/features/blog/service/blog.service';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { blogId } = params;

  if (!blogId) {
    console.error('blogId is required');
    return json({ message: 'bad request' }, 400);
  }

  const { blog, error } = await getBlogById(request, blogId);

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
