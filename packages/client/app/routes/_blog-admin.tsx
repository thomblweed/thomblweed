import type { DataFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { BlogAdminLayout } from '~/features/blog/admin/layouts/BlogAdmin';
import type { AdminContext } from '~/features/blog/admin/types/AdminContext.type';
import { getCurrentUserRole } from '~/service/user.service';

export const loader = async ({ request }: DataFunctionArgs) => {
  const currentUserRole = await getCurrentUserRole(request);

  return json({
    currentUserRole
  });
};

export default function BlogAdminRoute() {
  const { currentUserRole } = useLoaderData<typeof loader>();
  const isAdmin = currentUserRole === 'admin';

  return isAdmin ? (
    <BlogAdminLayout>
      <Outlet context={{ isAdmin } satisfies AdminContext} />
    </BlogAdminLayout>
  ) : (
    <Outlet context={{ isAdmin } satisfies AdminContext} />
  );
}
