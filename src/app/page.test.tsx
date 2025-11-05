import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("Home Page", async () => {
  // Page is an async server component, so we need to await it
  const PageComponent = await Page({});
  render(PageComponent);

  // Test for the main heading
  expect(
    screen.getByText("To get started, edit the page.tsx file."),
  ).toBeDefined();

  // Test for some key content
  expect(screen.getByText(/Templates/)).toBeDefined();
  expect(screen.getByText(/Learning/)).toBeDefined();
  expect(screen.getByText(/Documentation/)).toBeDefined();
});
