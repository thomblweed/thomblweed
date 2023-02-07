import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

// import { createSupabaseServerClient } from '~/service/supabase/supabase.service';

export const loader: LoaderFunction = () =>
  json({ message: 'method not allow' }, 405);

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== 'POST') {
    return json({ message: 'method not allow' }, 405);
  }
  console.log({ request });
  // const payload = await request.formData();
  // console.log({ payload });
  //   const supabase = createSupabaseServerClient(request);

  return json({ message: 'success' }, 201);
};
