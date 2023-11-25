import { LoaderFunctionArgs, json } from '@remix-run/node';

import { Section } from '~/components/Section';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // const supabase = createSupabaseServerClient(request);
  // const blogsData = await getAllBlogs(supabase);
  // return json({
  //   blogsData
  // });
  console.log({ params });

  return json({ message: 'hello' }, 200);
};

export default function BlogItem() {
  return (
    <Section>
      <h2>Hello</h2>
    </Section>
  );
}

// export const handle = { hydrate: true };
