import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { createSupabaseClient } from '~/service/supabase/supabase.service';
import type { Database } from '@types';

type UserRoles = {
  data: {
    user_roles: Database['public']['Tables']['user_roles']['Row'];
  } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response();
  const supabase = createSupabaseClient(request, response);
  const { data } = (await supabase
    .from('user_profile')
    .select(`user_roles(role)`)
    .limit(1)
    .single()) as unknown as UserRoles;
  if (data == null) {
    return json({ role: 'user' });
  }
  const {
    user_roles: { role },
  } = data;
  return json({ role });
};

export default function Role() {
  const { role } = useLoaderData();
  return <Outlet context={role} />;
}
