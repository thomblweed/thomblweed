import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getSupabaseClient } from '~/service/supabase.service';
import type { Database } from '@types';

type UserRoles = {
  data: {
    user_roles: Database['public']['Tables']['user_roles']['Row'];
  } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response();
  const supabase = getSupabaseClient(request, response);
  const { data } = (await supabase
    .from('user_profile')
    .select(`user_roles(role)`)
    .single()) as unknown as UserRoles;
  console.log({ data });
  if (data == null) {
    return response;
  }

  const {
    user_roles: { role },
  } = data;
  return json({ role });
};

export default function Index() {
  return (
    <section>
      <p>
        Hello! I&apos;m a web developer and welcome to my site with nothing in
        it :-)
      </p>
    </section>
  );
}
