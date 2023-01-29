import type { DataFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { AdminLayout } from '~/layouts/Admin';

import {
  createSupabaseClient,
  getRoleDataForCurrentUser
} from '~/service/supabase/supabase.service';

export const loader = async ({ request }: DataFunctionArgs) => {
  const supabase = createSupabaseClient(request);
  const roleData = await getRoleDataForCurrentUser(supabase);

  return json({
    currentUserRole: roleData?.role || 'user'
  });
};

export default function Admin() {
  const { currentUserRole } = useLoaderData<typeof loader>();

  return currentUserRole === 'admin' ? (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ) : (
    <Outlet />
  );
}
