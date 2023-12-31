import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('renders login component', () => {
  render(<Login />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
