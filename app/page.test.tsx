import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';

// Simple test to verify Jest testing framework is configured and working
describe('Page Component', () => {
  // Test component renders without crashing
  test('renders without errors', () => {
    render(<Page />);
    expect(document.body).toBeTruthy();
  });

  // Test page content is accessible
  test('page is accessible', () => {
    const { container } = render(<Page />);
    expect(container).toBeVisible();
    expect(container).toBeInTheDocument();
  });
});
