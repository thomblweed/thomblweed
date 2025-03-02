import { redirect } from 'react-router';

import { getFormValuesFromRequest } from '~/utils';

import { LoginFields } from '../enums/login-fields.enum';
import { loginUserWithEmailAndPassword } from '../service/auth.service';

export const loginHandler = async (request: Request) => {
  const [email, password] = (await getFormValuesFromRequest(request, [
    LoginFields.EMAIL,
    LoginFields.PASSWORD
  ])) as string[];
  if (email == null || password == null) {
    return {loginError: 'email and/or password must be provided' };
  }

  const { error, headers } = await loginUserWithEmailAndPassword(request, {
    email,
    password
  });

  if (error) {
    console.error({ loginError: error });
    return Response.json(
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
