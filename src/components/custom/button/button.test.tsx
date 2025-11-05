import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import styles from "./button.module.scss";

describe("Custom Button", () => {
  it("should render with the custom class", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass(styles["custom-button"]);
  });
});
