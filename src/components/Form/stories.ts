import { Story } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Form, FormProps } from '.';

export default { component: Form };

type FormStory = Story<FormProps>;

export const Empty: FormStory = {};

export const WithError: FormStory = {
  ...Empty,
  play: () => {
    userEvent.click(screen.getByRole('button', { name: /submit/i }));
  },
};

export const Filled: FormStory = {
  ...Empty,
  play: () => {
    userEvent.type(
      screen.getByRole('textbox', { name: 'email' }),
      'levir@codersclub.com',
    );
    userEvent.type(screen.getByLabelText('password'), 'codersclubedemais');
  },
};
