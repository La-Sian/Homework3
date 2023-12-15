import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginUnsuccessful from '../LoginUnsuccessful';

test('renders login unsuccessful component', () => {
  render(<LoginUnsuccessful />);
  const linkElement = screen.getByText(/login unsuccessful/i);
  expect(linkElement).toBeInTheDocument();
});
