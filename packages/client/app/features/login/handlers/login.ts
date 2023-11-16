import { json, redirect } from '@remix-run/node';

import { createSupabaseServerClient } from '~/service/supabase/supabase.service';
import { getFormValuesFromRequest } from '~/utils';

import { LoginFields } from '../enums/login-fields.enum';

export const loginHandler = async (request: Request) => {
  const [email, password] = (await getFormValuesFromRequest(request, [
    LoginFields.EMAIL,
    LoginFields.PASSWORD
  ])) as string[];
  if (email == null || password == null) {
    return json({ loginError: 'email and/or password must be provided' });
  }

  const response = new Response();
  const supabase = createSupabaseServerClient(request, response);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error(error);
    return json(
      {
        loginError: 'An error occured when logging in'
      },
      {
        headers: response.headers
      }
    );
  }

  return redirect('/', {
    headers: response.headers
  });
};