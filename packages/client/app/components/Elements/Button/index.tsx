import type { ButtonHTMLAttributes, FC } from 'react';

import './button.css';

type ButtonWidthType = 'full' | 'normal' | 'none';

const buttonWidth = {
  full: 'button-width-full',
  normal: 'button-width-normal',
  none: 'button-width-none'
};

type ButtonProps = {
  width?: ButtonWidthType;
};

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ width = 'normal', ...rest }) => {
  const buttonClasses = 'button'.concat(' ').concat(buttonWidth[width]);

  return <button className={buttonClasses} {...rest} />;
};
