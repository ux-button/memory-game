import { render, screen } from '@testing-library/react';

import { Game } from '../src/App';

describe('App', () => {
  it('renders headline', () => {
    render(<Game title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});