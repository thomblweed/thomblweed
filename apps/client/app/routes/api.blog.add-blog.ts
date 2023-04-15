import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { createSupabaseServerClient } from '~/service/supabase/supabase.service';

export const loader: LoaderFunction = () =>
  json({ message: 'method not allow' }, 405);

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ message: 'method not allow' }, 405);
  }
  const supabase = createSupabaseServerClient(request);
  const { data, error: userError } = await supabase.auth.getUser();
  if (userError) {
    console.error(userError);
    return json({ message: 'bad request' }, 400);
  }
  const { id } = data.user;
  const { error } = await supabase.from('blogs').insert({
    title: 'new blog',
    created_on: new Date().toDateString(),
    created_by: id
  });

  if (error) {
    console.error(error);
    return json({ message: 'bad request' }, 400);
  }

  return json({ message: 'success' }, 201);
};
