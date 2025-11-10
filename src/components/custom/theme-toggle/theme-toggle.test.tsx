import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./theme-toggle";

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({
    setTheme: vi.fn(),
    theme: "system",
  }),
}));

describe("ThemeToggle", () => {
  it("renders without crashing", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toHaveAccessibleName("Toggle theme");
  });

  it("has light, dark, and system options", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    // Click the dropdown to open it
    await user.click(screen.getByRole("button"));

    expect(await screen.findByText("Light")).toBeInTheDocument();
    expect(await screen.findByText("Dark")).toBeInTheDocument();
    expect(await screen.findByText("System")).toBeInTheDocument();
  });
});
