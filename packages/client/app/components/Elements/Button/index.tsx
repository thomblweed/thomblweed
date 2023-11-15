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
  className?: string;
};

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ width = 'normal', className, ...rest }) => {
  const buttonClasses = ['button', buttonWidth[width], className]
    .filter(Boolean)
    .join(' ');

  return <button className={buttonClasses} {...rest} />;
};
