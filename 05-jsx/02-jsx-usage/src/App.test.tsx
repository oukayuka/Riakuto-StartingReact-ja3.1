import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const textElements = getAllByText(/Hello,/i);
  expect(textElements[0]).toBeInTheDocument();
});
