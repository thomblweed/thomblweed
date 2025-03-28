import { useActionData, useNavigation } from 'react-router';

import { Form } from '~/components/Form';

import { LoginFields } from '../enums/login-fields.enum';

export const LoginForm = () => {
  const { state } = useNavigation();
  const actionData = useActionData<{ loginError?: string }>();

  return (
    <Form
      method="post"
      schema={{
        fields: [
          {
            type: 'email',
            name: LoginFields.EMAIL,
            label: 'Email Address',
            required: true
          },
          {
            type: 'password',
            name: LoginFields.PASSWORD,
            label: 'Password',
            required: true
          }
        ],
        buttons: [
          {
            label: 'Login',
            type: 'submit',
            id: 'login-button'
          }
        ]
      }}
      busy={state === 'submitting' || state === 'loading'}
      error={actionData?.loginError}
    />
  );
};
