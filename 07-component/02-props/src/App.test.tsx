import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/翔陽/i);
  expect(textElement).toBeInTheDocument();
});
