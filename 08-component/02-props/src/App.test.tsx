import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SLAM DUNK characters', () => {
  render(<App />);
  const linkElement = screen.getByText(/花道/i);
  expect(linkElement).toBeInTheDocument();
});
