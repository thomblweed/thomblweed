import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { createSupabaseServerClient } from '~/service/supabase/supabase.service';
import { getFormValuesFromRequest } from '~/utils';

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
  const [title] = (await getFormValuesFromRequest(request, [
    'title'
  ])) as string[];
  if (title == null) {
    console.error('blog title is null');
    return json({ message: 'bad request' }, 400);
  }

  const { error } = await supabase.from('blogs').insert({
    title: title.trim(),
    created_on: new Date().toDateString(),
    created_by: id
  });

  if (error) {
    console.error(error);
    return json({ message: 'bad request' }, 400);
  }

  return json({ message: 'success' }, 201);
};
