# Orion Next.js Starter

An enterprise-grade Next.js 16 starter template with modern development tooling and best practices pre-configured.

## Features

- **Next.js 16** - Latest Next.js framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Static type checking
- **Shadcn UI** - Accessible UI components
- **Framer Motion** - Production-ready animations
- **Zod** - Schema validation
- **Zustand** - State management
- **TanStack Query** - Server state management
- **Next Themes** - Dark mode support
- **ESLint & Prettier** - Code linting and formatting
- **Husky & Lint Staged** - Pre-commit hooks
- **Commit Lint** - Conventional commit enforcement
- **GitHub Actions** - CI/CD workflows
- **Vitest & Playwright** - Testing framework
- **Storybook** - Component documentation
- **Better Auth** - Authentication solution
- **React Hook Forms** - Form management
- **MSW (Mock Service Worker)** - API mocking
- **Yarn v4** - Modern package management
- **Stylelint** - Style linting

## Project Structure

```
/orion-next-starter
├── .github/
├── .husky/
├── .storybook/
├── public/
├── src/
│   ├── app/
│   │   ├── (auth)/                     # Route group for auth pages
│   │   │   ├── login/                  # Co-located page structure
│   │   │   │   ├── components/         # Components ONLY for the login page
│   │   │   │   │   └── login-form.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   └── reset-password/
│   │   │       └── page.tsx
│   │   ├── (main)/                     # Route group for the main app (requires auth)
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   │   └── stats-card.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── settings/
│   │   │   │   ├── components/
│   │   │   │   │   ├── update-profile-form.tsx
│   │   │   │   │   └── change-password-form.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx              # Layout specific to the main app (e.g., with sidebar)
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...better-auth]/   # Route handler for better-auth
│   │   │           └── route.ts
│   │   ├── layout.tsx                  # Root layout (providers configured here)
│   │   └── page.tsx                    # Homepage
│   ├── components/
│   │   ├── common/                     # Custom, highly reusable components
│   │   │   ├── page-header/
│   │   │   │   ├── index.ts            # -> export * from './page-header'
│   │   │   │   └── page-header.tsx
│   │   │   └── index.ts                # -> export * from './page-header'
│   │   ├── forms/                      # Custom form elements (e.g., file uploader)
│   │   ├── layouts/                    # Reusable layout wrappers (e.g., AuthLayout)
│   │   ├── ui/                         # Unstyled shadcn components (Button, Input)
│   │   └── index.ts                    # Main barrel file exporting all custom components
│   ├── features/
│   │   └── ...                         # Feature-based modules
│   ├── lib/
│   │   ├── auth.ts                     # better-auth configuration and options
│   │   ├── query-client.ts
│   │   ├── store.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   └── index.ts                    # Export hooks for easy importing
│   ├── providers/
│   │   └── index.ts                    # Export all providers for app layout
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── global.d.ts                 # Global TypeScript declarations
├── tests-e2e/
├── msw/                                # Mock Service Worker setup
│   ├── db/                             # Mock data and factories
│   │   ├── index.ts
│   │   └── user.ts                     # e.g., mock user data factory
│   ├── handlers/                       # Mock API route handlers
│   │   ├── auth.ts                     # Mock auth endpoints
│   │   ├── user.ts                     # Mock user endpoints
│   │   └── index.ts                    # Barrel file exporting all handlers
│   └── index.ts                        # Main MSW setup (browser/server)
```

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Contributing

This project follows conventional commits and code of conduct. Please read our contributing guidelines before submitting pull requests.

## MSW (Mock Service Worker) Usage

Mock Service Worker (MSW) is integrated into this project for API mocking during development and testing.

### Directory Structure

```
msw/
├── browser.ts            # Browser-specific MSW setup
├── server.ts             # Node.js-specific MSW setup
├── index.ts              # Main export file
├── db/                   # Mock data factories
│   ├── index.ts
│   └── user.ts           # Example user data factory
└── handlers/             # Request handlers
    ├── index.ts
    ├── user.ts           # User API handlers
    └── auth.ts           # Authentication API handlers
```

### Adding New Mocks

To add new API mocks:

1. Create a new handler file in `msw/handlers/` (e.g., `product.ts`)
2. Define your request handlers using MSW's `http` methods:

```ts
// msw/handlers/product.ts
import { http, HttpResponse } from "msw";

export const productHandlers = [
  http.get("/api/products", () => {
    return HttpResponse.json([
      { id: 1, name: "Product 1", price: 9.99 },
      { id: 2, name: "Product 2", price: 19.99 },
    ]);
  }),

  http.get("/api/products/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      id: Number(id),
      name: `Product ${id}`,
      price: 9.99,
    });
  }),
];
```

3. Export the handlers in your file
4. Import and add them to the exports in `msw/handlers/index.ts`

### Using MSW in Components

To enable MSW in your Next.js application during development, call the `initMsw()` function in your main application wrapper or layout:

```ts
// Example in your root layout or App wrapper
import { useEffect } from 'react';
import { initMsw } from '@/lib';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize MSW for API mocking in development
    if (process.env.NODE_ENV === 'development') {
      initMsw();
    }
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Using MSW in Storybook

In Storybook stories, you can mock API requests using the `parameters.msw.handlers`:

```ts
// stories/ProductList.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { http, HttpResponse } from "msw";
import { ProductList } from "./ProductList";

const meta = {
  title: "Components/ProductList",
  component: ProductList,
  parameters: {
    msw: {
      handlers: [
        http.get("/api/products", () => {
          return HttpResponse.json([
            { id: 1, name: "Sample Product", price: 29.99 },
          ]);
        }),
      ],
    },
  },
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// Error state story
export const ErrorState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("/api/products", () => {
          return new HttpResponse(null, { status: 500 });
        }),
      ],
    },
  },
};
```

### Using MSW in Vitest Tests

For Node.js-based unit tests, MSW is automatically configured via `tests/unit/msw.setup.ts`. Create your tests like this:

```ts
// tests/unit/api.test.ts
// @vitest-environment node
import { describe, it, expect } from "vitest";
import { server } from "../tests/unit/msw.setup";
import { http, HttpResponse } from "msw";

describe("API Integration", () => {
  it("should return user data", async () => {
    server.use(
      http.get("/api/users/1", () => {
        return HttpResponse.json({ id: 1, name: "John Doe" });
      }),
    );

    const response = await fetch("/api/users/1");
    const data = await response.json();

    expect(data).toEqual({ id: 1, name: "John Doe" });
  });

  it("should handle error responses", async () => {
    server.use(
      http.get("/api/users/999", () => {
        return new HttpResponse(null, { status: 404 });
      }),
    );

    const response = await fetch("/api/users/999");
    expect(response.status).toBe(404);
  });
});
```

### Running Tests with MSW

- Unit tests with MSW: `yarn test --run tests/unit/`
- Storybook tests with MSW: `yarn test` (includes Storybook integration tests)

## MSW Browser vs Node.js Usage

Mock Service Worker provides two different implementations for different environments:

### Browser Environment (msw/browser)

Use the browser implementation during:

- Development (enables API mocking in the actual browser)
- Component development in Storybook
- Browser-based integration tests
- Manual testing in the development environment

**Example use case:**

```ts
// lib/msw.ts
import { worker } from "../msw/browser";

export const initMsw = async () => {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    await worker.start({
      onUnhandledRequest: "bypass", // Don't log unhandled requests
    });
    console.log("MSW: Mocking enabled");
  }
};
```

### Node.js Environment (msw/node)

Use the Node.js implementation during:

- Unit/integration tests with Vitest
- Server-side rendering tests
- API contract testing
- CI/CD pipelines

**Example use case:**

```ts
// tests/unit/msw.setup.ts
import { setupServer } from "msw/node";
import { handlers } from "../../msw/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

### Developer Use Case: Full-Stack Development with MSW

Let's follow Maya, a frontend developer working on a user dashboard:

1. **Development Phase**: Maya runs `yarn dev` and MSW browser worker automatically starts in development mode, mocking API calls to `/api/users` and `/api/settings`. She can develop components without waiting for the backend team to implement those endpoints.

2. **Component Storybook**: Maya creates a story for her `UserDashboard` component and uses MSW to mock different states: successful data loading, loading states, error states, and empty states. This allows her to showcase all possible UI states in Storybook.

3. **Unit Testing**: Maya writes unit tests for her data fetching logic, using the Node.js MSW server to mock API responses and verify that her error handling works correctly.

4. **CI/CD Pipeline**: When the code is pushed, the automated tests run with MSW Node.js server, ensuring all components work as expected with mocked API responses.

## License

This project is licensed under the MIT License.
