import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

// Simple test to verify react-testing-library is installed and configured correctly
test("renders page component", () => {
  render(<Page />);
  expect(screen.getByText("Welcome to Acme.")).toBeInTheDocument();
});
