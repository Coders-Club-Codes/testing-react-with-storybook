/* eslint-disable react/button-has-type */
import { ComponentPropsWithoutRef } from 'react';

type BaseDOMProps = ComponentPropsWithoutRef<'button'>;

export type ButtonProps = Omit<BaseDOMProps, 'children'> & {
  label: string;
};

export const Button = (props: ButtonProps) => {
  const { label, type = 'button', ...attrs } = props;

  return (
    <button type={type} {...attrs}>
      {label}
    </button>
  );
};
