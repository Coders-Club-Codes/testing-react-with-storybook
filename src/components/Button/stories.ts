import { Story } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button, ButtonProps } from '.';

export default { component: Button };

type ButtonStory = Story<ButtonProps>;

export const Primary: ButtonStory = {
  args: {
    label: 'Hey, eu sou o Goku',
  },
};

export const TypeSubmit: ButtonStory = {
  args: {
    label: 'Type submit',
    type: 'submit',
    onClick: () => {
      setTimeout(
        // eslint-disable-next-line no-alert
        () => alert('Interacoes com storybook e testing library'),
        250,
      );
    },
  },
  play: () => {
    userEvent.click(screen.getByRole('button', { name: /type submit/i }));
  },
};

export const TypeReset: ButtonStory = {
  args: {
    label: 'Type reset',
    type: 'reset',
  },
};
