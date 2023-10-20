import type { LinksFunction } from '@remix-run/node';
import type { ButtonHTMLAttributes, FC } from 'react';

import buttonStyles from './button.css';

type ButtonWidthType = 'full' | 'normal' | 'none';

const buttonWidth = {
  full: 'button-width-full',
  normal: 'button-width-normal',
  none: 'button-width-none'
};

type ButtonProps = {
  width?: ButtonWidthType;
};

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: buttonStyles }
];

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ width = 'normal', ...rest }) => {
  let buttonClasses = 'button'.concat(' ').concat(buttonWidth[width]);

  return <button className={buttonClasses} {...rest} />;
};
