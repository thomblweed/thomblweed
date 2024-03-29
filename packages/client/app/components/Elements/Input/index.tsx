import { forwardRef, type ForwardedRef, type InputHTMLAttributes } from 'react';

import './input.css';

export const Input = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => <input ref={ref} className="input" {...props} />
);

Input.displayName = 'Input';
