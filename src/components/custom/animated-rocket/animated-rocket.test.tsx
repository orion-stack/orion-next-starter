import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AnimatedRocket } from "./animated-rocket";

describe("AnimatedRocket", () => {
  it("renders without crashing", () => {
    render(<AnimatedRocket />);
    const image = screen.getByAltText("Rocket");
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("rocket.png");
  });

  it("has the correct dimensions", () => {
    render(<AnimatedRocket />);
    const image = screen.getByAltText("Rocket");
    expect(image).toHaveAttribute("width", "200");
    expect(image).toHaveAttribute("height", "200");
  });
});
