import { json } from '@remix-run/node';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () =>
  json({ message: 'method not allow' }, 405);

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ message: 'method not allow' }, 405);
  }

  return json({ message: 'success' }, 200);
};
