/* eslint-disable react/button-has-type */
import { ComponentPropsWithoutRef, FormEventHandler, useState } from 'react';

import { Button } from '../Button';

type BaseDOMProps = ComponentPropsWithoutRef<'form'>;

export type FormProps = Omit<BaseDOMProps, 'children'>;

export const Form = (props: FormProps) => {
  const { ...attrs } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateFields: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setErrors({
      email: email ? '' : 'Please fill in your email',
      password: password ? '' : 'Please fill in your password',
    });
  };

  return (
    <form onSubmit={validateFields} {...attrs}>
      <label htmlFor="email">
        <span>email</span>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </label>

      <label htmlFor="password">
        <span>password</span>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </label>

      <Button label="Submit" type="submit" />
    </form>
  );
};
