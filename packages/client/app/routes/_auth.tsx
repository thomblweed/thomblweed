import type { LoaderFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import { createSupabaseServerClient } from '~/service/supabase/supabase.service';

export const loader: LoaderFunction = async ({ request }) => {
  const supabase = createSupabaseServerClient(request);
  const { data } = await supabase.auth.getSession();
  const refresh_token = data?.session?.refresh_token;
  if (refresh_token) {
    try {
      await supabase.auth.refreshSession({
        refresh_token
      });
    } catch (error) {
      console.error('Error refreshing session');
    }
  }

  return new Response();
};

export default function Auth() {
  return <Outlet />;
}
