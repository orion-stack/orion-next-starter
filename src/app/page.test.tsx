import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("Home Page", async () => {
  // Page is an async server component, so we need to await it
  const PageComponent = await Page({});
  render(PageComponent);

  // Test for the main heading
  expect(screen.getByText("Welcome to Orion Next.js Starter")).toBeDefined();

  // Test for some key content
  expect(screen.getByText(/production-ready starter template/)).toBeDefined();
  expect(screen.getByText(/Documentation/)).toBeDefined();
});
