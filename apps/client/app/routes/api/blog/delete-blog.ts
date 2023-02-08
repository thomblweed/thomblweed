import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { createSupabaseServerClient } from '~/service/supabase/supabase.service';

export const loader: LoaderFunction = () =>
  json({ message: 'method not allow' }, 405);

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ message: 'method not allow' }, 405);
  }
  const formData = await request.formData();
  const id = formData.get('id');

  const supabase = createSupabaseServerClient(request);
  const { error } = await supabase.from('blogs').delete().match({ id });
  if (error) {
    console.error(error);
    return json({ message: 'bad request' }, 400);
  }

  return json({ message: 'success' }, 200);
};
