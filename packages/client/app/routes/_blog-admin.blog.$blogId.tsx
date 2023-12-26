import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

import { Section } from '~/components/Section';
import { Blog } from '~/features/blog/components/blog';
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
    return json(
      {
        message: `There has been an issue getting blog details using id: ${blogId}`
      },
      400
    );
  }

  return json({ blog }, 200);
};

export default function BlogItemPage() {
  const { blog, message } = useLoaderData<typeof loader>();

  return (
    <>
      <Section>
        <Link to="/blog">Back to Blog</Link>
        {blog != null ? <Blog blog={blog} /> : null}
        {message ? (
          <>
            <div>{message}</div>
          </>
        ) : null}
      </Section>
    </>
  );
}

// export const handle = { hydrate: true };
