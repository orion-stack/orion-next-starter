import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageSwitcher } from "./language-switcher";

// Mock next-intl hooks
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => "en",
  usePathname: () => "/",
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

describe("LanguageSwitcher", () => {
  it("renders without crashing", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText("label")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
