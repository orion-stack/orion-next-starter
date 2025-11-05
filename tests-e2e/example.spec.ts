import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", {
      name: "To get started, edit the page.tsx file.",
    }),
  ).toBeVisible();
});
