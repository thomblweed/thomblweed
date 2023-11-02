import type { LinksFunction } from '@remix-run/node';
import { forwardRef, type ForwardedRef, type InputHTMLAttributes } from 'react';

import inputStyles from './input.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: inputStyles }
];

export const Input = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => <input ref={ref} className="input" {...props} />
);

Input.displayName = 'Input';
