import type { ActionFunction, LinksFunction } from '@remix-run/node';
import { useActionData, useTransition } from '@remix-run/react';

import { Form, links as formStyles } from '~/components/Form';
import { ButtonType, FieldType } from '~/components/Form/enums';
import { Section, links as sectionStyles } from '~/components/Section';
import { LoginFields } from '~/enums/login-fields.enum';
import { loginHandler } from '~/handlers/login';
import loginStyles from '~/styles/routes/login.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: loginStyles },
  ...sectionStyles(),
  ...formStyles()
];

export const action: ActionFunction = async ({ request }) =>
  loginHandler(request);

export default function Login() {
  const { state } = useTransition();
  const actionData = useActionData<{ loginError?: string }>();
  return (
    <Section>
      <h2>Admin Login</h2>
      <div className="formContainer">
        <Form
          method="post"
          schema={{
            fields: [
              {
                type: FieldType.EMAIL,
                name: LoginFields.EMAIL,
                label: 'Email Address',
                required: true
              },
              {
                type: FieldType.PASSWORD,
                name: LoginFields.PASSWORD,
                label: 'Password',
                required: true
              }
            ],
            buttons: [
              {
                label: 'Login',
                type: ButtonType.SUBMIT,
                id: 'login-button'
              }
            ]
          }}
          busy={state === 'submitting' || state === 'loading'}
          error={actionData?.loginError}
        />
      </div>
    </Section>
  );
}

// eslint-disable-next-line react/prop-types
// export const ErrorBoundary: V2_ErrorBoundaryComponent = ({ error }) => (
//   <div>
//     {/* eslint-disable-next-line react/prop-types */}
//     <div>{error.message}</div>
//   </div>
// );
