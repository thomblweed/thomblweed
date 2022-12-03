import type { LoaderFunction } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async () => {
  const response = await fetch('http://localhost:2000/api/auth/get-user-role');
  // console.log({ response });
  return response;
};

export default function Role() {
  const { role } = useLoaderData();
  return <Outlet context={role} />;
}
