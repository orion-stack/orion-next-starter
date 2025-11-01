// tests/unit/example.api.test.ts
// @vitest-environment node
import { describe, it, expect } from "vitest";
import { server } from "./msw.setup";
import { http, HttpResponse } from "msw";

describe("API testing with MSW", () => {
  it("should mock API response correctly", async () => {
    // Add a runtime handler for this specific test
    server.use(
      http.get("https://api.example.com/user", () => {
        return HttpResponse.json({
          id: "abc-123",
          firstName: "John",
          lastName: "Maverick",
        });
      }),
    );

    const response = await fetch("https://api.example.com/user");
    const data = await response.json();

    expect(data).toEqual({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  });

  it("should handle error responses", async () => {
    // Override with an error response for this test
    server.use(
      http.get("https://api.example.com/user", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    const response = await fetch("https://api.example.com/user");

    expect(response.status).toBe(500);
  });
});
