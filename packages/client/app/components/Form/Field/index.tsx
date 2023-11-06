import { forwardRef, type ForwardedRef } from 'react';

import { Input } from '~/components/Elements/Input';
import { Label } from '~/components/Elements/Label';

import type { InputType } from '../types';

import './field.css';

type FieldProps = {
  name: string;
  label: string;
  type: InputType;
  disabled: boolean;
  required: boolean;
};

export const Field = forwardRef(
  (
    { name, label, type, disabled, required }: FieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className="field" id={name} role="group">
      <Label text={label} htmlFor={name} />
      <Input
        ref={ref}
        aria-label={`${label}`}
        type={type}
        id={name}
        name={name}
        disabled={disabled}
        required={required}
      />
    </div>
  )
);

Field.displayName = 'Field';
