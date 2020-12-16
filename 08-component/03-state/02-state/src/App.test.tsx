import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter', () => {
  render(<App />);
  const linkElement = screen.getByText(/カウンター/);
  expect(linkElement).toBeInTheDocument();
});
