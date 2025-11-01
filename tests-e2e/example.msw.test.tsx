// tests-e2e/example.msw.test.ts
import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { UserProfile } from "../stories/UserProfile";

describe("UserProfile with MSW", () => {
  it("should display user data when API call is successful", async () => {
    render(<UserProfile userId={1} />);

    // Initially shows loading state
    expect(screen.getByText("Loading user...")).toBeInTheDocument();

    // Wait for the mocked API response
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("Role: admin")).toBeInTheDocument();
  });

  it("should display error when API returns 404", async () => {
    // This test would require runtime handler setup or a different story
    render(<UserProfile userId={999} />);

    expect(screen.getByText("Loading user...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });
  });
});
