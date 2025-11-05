# Orion Next.js Starter - Usage Guide

Welcome to the Orion Next.js Starter! This guide will help you get started building your own applications using this comprehensive starter template.

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- Yarn package manager
- Git

### Installation

1. Clone or create a new project from this template
2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

Your application will be available at `http://localhost:3000`

## Project Structure

```
/orion-next-starter
├── app/                    # Next.js App Router pages and layouts
│   ├── (auth)/            # Authentication-related pages
│   ├── (main)/            # Main application pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── common/            # General purpose components
│   ├── forms/             # Form components
│   ├── layouts/           # Layout wrappers
│   └── ui/                # Shadcn UI components
├── lib/                   # Shared utilities and business logic
├── hooks/                 # Custom React hooks
├── providers/             # React context providers
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
├── msw/                   # MSW setup for API mocking
├── stories/               # Storybook component stories
└── tests-e2e/            # End-to-end tests
```

## Adding New Pages

To add a new page using the App Router:

1. Create a new directory in `app/` with your page name
2. Add a `page.tsx` file in that directory

Example: Creating an "About" page

```bash
mkdir app/about
```

Create `app/about/page.tsx`:

```tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

The page will be accessible at `/about`.

## Adding New Components

The project has two main directories for components:

- `components/ui`: This directory contains raw UI components installed via the Shadcn CLI. **Do not modify these files directly**, as they can be updated and overwritten by the CLI.
- `components/custom`: This is where you will create your own custom components. These components often wrap and extend the functionality of the base components from `components/ui`.

See the section on [Creating Custom Components](#creating-custom-components) for a detailed guide on how to structure your custom components.

### Using Shadcn Components

The project comes with Shadcn UI preconfigured. To add new Shadcn components to the `components/ui` directory, run the following command:

```bash
yarn dlx shadcn-ui@latest add [component-name]
```

Examples:

- `yarn dlx shadcn-ui@latest add button`
- `yarn dlx shadcn-ui@latest add card`
- `yarn dlx shadcn-ui@latest add input`

## Adding New Routes

The project uses Next.js App Router:

1. Create a new directory in `app/` for each route segment
2. Add `page.tsx` for the main page component
3. Add `layout.tsx` if you need a specific layout for the route group

Example directory structure:

```
app/
├── dashboard/
│   ├── page.tsx
│   └── settings/
│       └── page.tsx
├── blog/
│   └── [slug]/
│       └── page.tsx
└── api/
    └── route.ts
```

This creates routes:

- `/dashboard`
- `/dashboard/settings`
- `/blog/[slug]` (dynamic route)

## Creating Custom Components

Custom components should be placed in the `components/custom` directory. Each component should have its own folder containing all related files.

### File Structure

For a new `AwesomeButton` component, the structure should be:

```
components/
└── custom/
    └── awesome-button/
        ├── awesome-button.tsx
        ├── awesome-button.module.scss
        ├── awesome-button.test.tsx
        ├── awesome-button.story.tsx
        └── index.ts
```

- `awesome-button.tsx`: The component itself, likely importing and wrapping a base component from `components/ui`.
- `awesome-button.module.scss`: Component-specific styles.
- `awesome-button.test.tsx`: Unit tests for the component.
- `awesome-button.story.tsx`: Storybook story for the component.
- `index.ts`: Barrel file to export the component (`export * from './awesome-button'`).

### Example: Creating a Custom Button

1.  **Component (`awesome-button.tsx`):**

    ```tsx
    import { Button as ShadcnButton } from "@/components/ui/button";
    import type { ButtonProps } from "@/components/ui/button";
    import styles from "./awesome-button.module.scss";

    export const AwesomeButton = ({ className, ...props }: ButtonProps) => {
      const combinedClassName =
        `${styles.customButton} ${className || ""}`.trim();

      return <ShadcnButton className={combinedClassName} {...props} />;
    };
    ```

2.  **Styles (`awesome-button.module.scss`):**

    ```scss
    .customButton {
      border: 2px solid #0070f3;
      box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
    }
    ```

3.  **Test (`awesome-button.test.tsx`):**

    ```tsx
    import { render, screen } from "@testing-library/react";
    import { AwesomeButton } from "./awesome-button";
    import styles from "./awesome-button.module.scss";

    describe("AwesomeButton", () => {
      it("should render with the custom class", () => {
        render(<AwesomeButton>Click me</AwesomeButton>);
        const button = screen.getByRole("button");
        expect(button).toHaveClass(styles.customButton);
      });
    });
    ```

4.  **Story (`awesome-button.story.tsx`):**

    ```tsx
    import type { Meta, StoryObj } from "@storybook/react";
    import { AwesomeButton } from "./awesome-button";

    const meta: Meta<typeof AwesomeButton> = {
      title: "Custom/AwesomeButton",
      component: AwesomeButton,
    };

    export default meta;
    type Story = StoryObj<typeof AwesomeButton>;

    export const Default: Story = {
      args: {
        children: "Awesome Button",
      },
    };
    ```

5.  **Index (`index.ts`):**

    ```ts
    export * from "./awesome-button";
    ```

## Testing

### Running Tests

- Run all unit tests: `yarn test:unit`
- Run unit tests in watch mode: `yarn test:unit:watch`
- Run all end-to-end tests: `yarn test:e2e`
- Run all tests (unit and e2e) in CI mode: `yarn test:ci`

### Writing Tests

Unit and component tests are co-located with the files they test. For a component like `MyComponent.tsx`, the test file should be named `MyComponent.test.tsx` and placed in the same directory.

#### Unit Tests

Here is an example of a unit test for a utility function in `lib/utils.ts`:

```tsx
// lib/utils.test.ts
import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("should merge class names correctly", () => {
    expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
  });
});
```

#### Component Tests

Use React Testing Library for component testing. Here is an example for a `Button` component:

```tsx
// components/ui/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

it("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});
```

#### End-to-End Tests

Place end-to-end tests in the `tests-e2e/` directory. These tests use Playwright to simulate user interactions in a real browser.

```ts
// tests-e2e/example.spec.ts
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Create Next App/);
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "To get started, edit the page.tsx file.",
    }),
  ).toBeVisible();
});
```

## Using API Mocking (MSW)

The project includes MSW (Mock Service Worker) for API mocking:

1. Create handlers in `msw/handlers/`
2. Add mock data in `msw/db/`
3. Use in components, stories, and tests

Example handler:

```ts
// msw/handlers/user.ts
import { http, HttpResponse } from "msw";

export const userHandlers = [
  http.get("/api/users", () => {
    return HttpResponse.json([{ id: 1, name: "John Doe" }]);
  }),
];
```

## Styling with Tailwind CSS

The project uses Tailwind CSS v4:

- Configure in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Use `cn()` utility from `lib/utils.ts` for conditional classes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The project is compatible with any platform that supports Next.js 16:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Heroku (with configuration)

### Build Command

```bash
yarn build
```

### Production Start

```bash
yarn start
```

## Useful Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn storybook` - Start Storybook
- `yarn test` - Run all tests

## Next Steps

This starter provides a solid foundation. As you build your application, consider:

- Setting up authentication (Better Auth is preconfigured)
- Adding database integration
- Setting up environment variables
- Adding error monitoring
- Setting up analytics
- Configuring environment-specific settings

Check out the development documentation for more advanced topics and contributing guidelines.
