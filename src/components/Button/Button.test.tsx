import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './stories';

describe('Components | Button', () => {
  const { Primary } = composeStories(stories);

  it('renders the label prop', () => {
    render(<Primary />);

    expect(
      screen.getByRole('button', { name: Primary.args?.label }),
    ).toBeInTheDocument();
  });

  it('runs onClick prop when clicked', () => {
    const onClick = jest.fn();
    render(<Primary onClick={onClick} label="Click me" />);

    userEvent.click(screen.getByRole('button', { name: /click me/i }));

    expect(onClick).toHaveBeenCalled();
  });

  it.todo('renders default type prop as type "button"');

  it.todo('renders type prop as type "submit"');

  it.todo('renders type prop as type "reset"');
});
