import React from 'react';
import { render, screen } from '@testing-library/react';
import Logout from '../Logout';

test('renders logout component', () => {
  render(<Logout />);
  const linkElement = screen.getByText(/logout/i);
  expect(linkElement).toBeInTheDocument();
});
