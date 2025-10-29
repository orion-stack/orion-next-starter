import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("Home Page", () => {
  render(<Page />);

  // Test for the main heading
  expect(
    screen.getByText("To get started, edit the page.tsx file."),
  ).toBeDefined();

  // Test for some key content
  expect(screen.getByText(/Templates/)).toBeDefined();
  expect(screen.getByText(/Learning/)).toBeDefined();
  expect(screen.getByText(/Documentation/)).toBeDefined();
});
