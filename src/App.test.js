import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application heading', () => {
  render(<App />);

  const headingElement = screen.getByText(
    /save time and write with confidence/i
  );

  expect(headingElement).toBeInTheDocument();
});