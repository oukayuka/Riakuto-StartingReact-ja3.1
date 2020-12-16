import { render, screen } from '@testing-library/react';
import App from './App';

test('renders timer', () => {
  render(<App />);
  const linkElement = screen.getByText(/タイマー/);
  expect(linkElement).toBeInTheDocument();
});
