import { json, redirect } from '@remix-run/node';

import { getFormValuesFromRequest } from '~/utils';

import { LoginFields } from '../enums/login-fields.enum';
import { loginUserWithEmailAndPassword } from '../service/auth.service';

export const loginHandler = async (request: Request) => {
  const [email, password] = (await getFormValuesFromRequest(request, [
    LoginFields.EMAIL,
    LoginFields.PASSWORD
  ])) as string[];
  if (email == null || password == null) {
    return json({ loginError: 'email and/or password must be provided' });
  }

  const { error, headers } = await loginUserWithEmailAndPassword(request, {
    email,
    password
  });

  if (error) {
    console.error({ loginError: error });
    return json(
      {
        loginError: 'An error occured when logging in'
      },
      {
        headers
      }
    );
  }

  return redirect('/blog', {
    headers
  });
};
