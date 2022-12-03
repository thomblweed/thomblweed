import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getSupabaseClient } from '~/service/supabase.service';
import type { Database } from '@types';

type UserRoles = {
  data: {
    user_roles: Database['public']['Tables']['user_roles']['Row'];
  } | null;
};

export const loader: ActionFunction = async ({ request }) => {
  const response = new Response();
  const supabase = getSupabaseClient(request, response);
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
