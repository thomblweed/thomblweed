/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { json, redirect } from '@remix-run/node';
import { createServerClient } from '@supabase/auth-helpers-remix';

import { LoginFields } from '~/enums/login-fields.enum';
import { getFormValuesFromRequest } from '~/utils';

export const loginHandler = async (request: Request) => {
  const [email, password] = (await getFormValuesFromRequest(request, [
    LoginFields.EMAIL,
    LoginFields.PASSWORD,
  ])) as string[];
  if (email == null || password == null) {
    return json({ loginError: 'email and/or password must be provided' });
  }

  const response = new Response();
  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  );

  const { error, data } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return json(
      {
        loginError: 'An error occured when logging in',
      },
      {
        headers: {
          'set-cookie':
            'supabase-auth-token= ; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
        },
      }
    );
  }

  return redirect('/', {
    headers: {
      'set-cookie': `supabase-auth-token=${data.session?.access_token}; Max-Age=48000; HttpOnly; secure; path="/";`,
    },
  });
};
