import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import type { AdminContext } from '~/features/blog/features/admin/types/AdminContext.type';
import { getCurrentUserRole } from '~/service/user.service';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const currentUserRole = await getCurrentUserRole(request);

  return json({
    currentUserRole
  });
};

export default function BlogAdminRoute() {
  const { currentUserRole } = useLoaderData<typeof loader>();
  const isAdmin = currentUserRole === 'admin';

  return <Outlet context={{ isAdmin } satisfies AdminContext} />;
}
