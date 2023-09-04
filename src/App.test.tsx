import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders about link', () => {
  render(<App />);
  const linkElement = screen.getByText('About');
  expect(linkElement).toBeInTheDocument();
});

test('renders input element', () => {
  render(<App />);
  const inputElement = screen.getByRole('button', { name: 'Submit' })
  expect(inputElement).toBeInTheDocument();
})
