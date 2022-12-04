import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';

import { createSupabaseClient } from '~/service/supabase/supabase.service';
import { Button, links as buttonStyles } from '~/components/Elements/Button';
import type { Database } from '@types';

type UserRoles = {
  data: {
    user_roles: Database['public']['Tables']['user_roles']['Row'];
  } | null;
};

export const links: LinksFunction = () => [...buttonStyles()];

export const loader: LoaderFunction = async ({ request }) => {
  const supabase = createSupabaseClient(request);
  const { data } = (await supabase
    .from('user_profile')
    .select(`user_roles(role)`)
    .limit(1)
    .single()) as unknown as UserRoles;

  if (data == null) {
    return json({ role: 'user' });
  }
  const {
    user_roles: { role }
  } = data;
  return json({ role });
};

export default function Blog() {
  const { role } = useLoaderData();
  const { submit, state } = useFetcher();

  return (
    <section>
      <h2>Blog</h2>
      {role === 'admin' ? (
        <Button
          width="normal"
          type="button"
          disabled={state === 'submitting' || state === 'loading'}
          onClick={() => {
            submit({}, { method: 'post', action: '/api/blog/add-blog' });
          }}
        >
          Add Blog
        </Button>
      ) : null}
    </section>
  );
}
