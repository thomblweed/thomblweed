import type { RefAttributes } from 'react';
import type { FormMethod } from 'react-router';
import { Form as RemixForm } from 'react-router';

import { Button } from '../Elements/Button';

import { Field } from './Field';
import './form.css';
import type { FormField, FormSchema } from './types';

type FormProps = {
  schema: FormSchema;
  method: FormMethod;
  busy: boolean;
  action?: string;
  error?: string;
  className?: string;
};

export const Form = ({
  schema,
  busy = false,
  method,
  action,
  error,
  ...rest
}: FormProps & RefAttributes<HTMLFormElement>) => (
  <RemixForm method={method} action={action} className="form" {...rest}>
    {schema.fields?.map((field: FormField) => (
      <Field
        key={field.name}
        name={field.name}
        label={field.label}
        type={field.type}
        disabled={busy}
        required={field.required}
      />
    ))}
    {schema.buttons?.map(({ id, type, label }) => (
      <Button key={id} disabled={busy} type={type} width="full">
        {label}
      </Button>
    ))}
    {error ? <p>{error}</p> : null}
  </RemixForm>
);
