import type { DataFunctionArgs, LinksFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { AdminLayout, links as adminStyles } from '~/layouts/Admin';
import {
  createSupabaseServerClient,
  getRoleDataForCurrentUser
} from '~/service/supabase/supabase.service';

export type AdminContext = { isAdmin: boolean };

export const links: LinksFunction = () => [...adminStyles()];

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
    <AdminLayout>
      <Outlet context={{ isAdmin }} />
    </AdminLayout>
  ) : (
    <Outlet context={{ isAdmin }} />
  );
}