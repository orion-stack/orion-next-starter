// stories/UserProfile.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { http, HttpResponse } from "msw";
import { UserProfile } from "./UserProfile"; // Assuming this component exists or will be created

const meta = {
  title: "Components/UserProfile",
  component: UserProfile,
  parameters: {
    // Define MSW handlers for this story
    msw: {
      handlers: [
        http.get("/api/users/1", () => {
          return HttpResponse.json({
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "admin",
          });
        }),
      ],
    },
  },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// Success state - user data loads successfully
export const Loaded: Story = {
  args: {
    userId: 1,
  },
};

// Error state - API returns 404
export const NotFound: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users/999", () => {
          return new HttpResponse(null, { status: 404 });
        }),
      ],
    },
  },
  args: {
    userId: 999,
  },
};

// Loading state - API takes time to respond
export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/users/1", async () => {
          // Simulate network delay
          await new Promise((resolve) => setTimeout(resolve, 2000));
          return HttpResponse.json({
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "admin",
          });
        }),
      ],
    },
  },
  args: {
    userId: 1,
  },
};
