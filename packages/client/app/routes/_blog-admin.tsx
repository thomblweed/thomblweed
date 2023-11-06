import type { DataFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { BlogAdminLayout } from '~/layouts/BlogAdmin';
import {
  createSupabaseServerClient,
  getRoleDataForCurrentUser
} from '~/service/supabase/supabase.service';

export type AdminContext = { isAdmin: boolean };

export const loader = async ({ request }: DataFunctionArgs) => {
  const supabase = createSupabaseServerClient(request);
  const roleData = await getRoleDataForCurrentUser(supabase);

  return json({
    currentUserRole: roleData?.role || 'user'
  });
};

export default function Admin() {
  const { currentUserRole } = useLoaderData<typeof loader>();
  const isAdmin = currentUserRole === 'admin';

  return isAdmin ? (
    <BlogAdminLayout>
      <Outlet context={{ isAdmin }} />
    </BlogAdminLayout>
  ) : (
    <Outlet context={{ isAdmin }} />
  );
}
