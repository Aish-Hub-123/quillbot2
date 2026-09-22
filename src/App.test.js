import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application heading', () => {
  render(<App />);

  const headingElements = screen.getAllByText(
    /save time and write with confidence/i
  );

  expect(headingElements.length).toBeGreaterThan(0);
});