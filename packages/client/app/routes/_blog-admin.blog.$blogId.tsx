import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

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
      <div className="container">
        <Link to="/blog">Back to Blog</Link>
      </div>
      <Section>
        {blog ? <h2>{blog.title}</h2> : null}
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
