## MSW (Mock Service Worker) Setup

Mock Service Worker (MSW) is set up in this project to provide API mocking for both development and testing.

### Directory Structure

```
msw/
├── index.ts          # Main MSW setup (browser & server)
├── db/               # Mock data factories
│   ├── index.ts
│   └── user.ts       # Example user mock data
└── handlers/         # Request handlers
    ├── index.ts
    ├── user.ts       # User API handlers
    └── auth.ts       # Authentication API handlers
```

### Adding New Mocks

To add new API mocks:

1. Create a new handler file in `msw/handlers/` (e.g., `product.ts`)
2. Define your request handlers using MSW's `http` methods
3. Export the handlers from your file
4. Import and add them to the `handlers` array in `msw/handlers/index.ts`

### Using MSW in Stories

In Storybook stories, you can mock API requests like this:

```ts
// MyComponent.stories.ts
import { http, HttpResponse } from "msw";

export default {
  title: "Components/MyComponent",
  component: MyComponent,
  parameters: {
    msw: {
      handlers: [
        http.get("/api/data", () => {
          return HttpResponse.json({ message: "Mocked data" });
        }),
      ],
    },
  },
};
```

### Using MSW in Tests

In Vitest tests, MSW is automatically set up via the `vitest.setup.ts` file. API calls made in tests will be intercepted by the handlers defined in the `msw/handlers/` directory.

### Initializing MSW in Development

To enable MSW in your Next.js application during development, call the `initMsw()` function in your application's root layout or component:

```ts
import { initMsw } from "@/lib";

// In your main application component or root layout
if (typeof window !== "undefined") {
  initMsw();
}
```

This will start the MSW service worker in the browser, enabling API mocking in development mode.
