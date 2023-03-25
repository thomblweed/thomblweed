import type { LinksFunction } from '@remix-run/node';
import type { ButtonHTMLAttributes, FC } from 'react';

import buttonStyles from './button.css';

type ButtonType = 'full' | 'normal' | 'none';

const buttonType = {
  full: 'button-width-full',
  normal: 'button-width-normal',
  none: 'button-width-none'
};

type ButtonProps = {
  width?: ButtonType;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: buttonStyles }
];

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ width = 'normal', ...rest }) => {
  const buttonClasses = 'button'.concat(' ').concat(buttonType[width]);

  return <button className={buttonClasses} {...rest} />;
};
