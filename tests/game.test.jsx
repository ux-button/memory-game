import { render, screen } from '@testing-library/react';

import { Game } from '../src/App';
import { expect } from 'vitest';

describe('Game component', () => {
  it('render snapshot correctly', () => {
    const { container } = render(<Game />);
    expect(container).toMatchSnapshot();
  });
  it('start with loading state', () => {
    render(<Game />);
    expect(screen.getByTestId('001')).toHaveTextContent('Loading')
    expect(screen.getByTestId('001')).toBeVisible()
  })
});