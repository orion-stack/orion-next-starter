import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TranslatedContent } from "./translated-content";

// Mock next-intl hooks
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => `Translated: ${key}`,
}));

describe("TranslatedContent", () => {
  it("renders without crashing", () => {
    render(<TranslatedContent />);
    const translatedElements = screen.getAllByText(/Translated:/);
    expect(translatedElements.length).toBeGreaterThan(0);
  });

  it("renders title and description", () => {
    render(<TranslatedContent />);
    expect(screen.getByText("Translated: title")).toBeInTheDocument();
    expect(screen.getByText("Translated: description")).toBeInTheDocument();
  });
});
