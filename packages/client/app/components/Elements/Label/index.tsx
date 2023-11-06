import type { FC, LabelHTMLAttributes } from 'react';

import './label.css';

type LabelProps = {
  text: string;
};

export const Label: FC<LabelProps & LabelHTMLAttributes<HTMLLabelElement>> = ({
  text,
  ...rest
}) => (
  <label className="label text-secondary" {...rest}>
    {text}
  </label>
);
