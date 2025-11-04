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

### Creating a New UI Component

1. Create your component in the `components/` directory
2. For reusable UI components, place them in `components/ui/`
3. For custom components, create a new subdirectory

Example: Creating a Card component

```tsx
// components/ui/card.tsx
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className,
      )}
      {...props}
    />
  );
}
```

### Using Shadcn Components

The project comes with Shadcn UI preconfigured. To add new Shadcn components:

```bash
npx shadcn-ui@latest add [component-name]
```

Examples:

- `npx shadcn-ui@latest add button`
- `npx shadcn-ui@latest add card`
- `npx shadcn-ui@latest add input`

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

## Testing

### Running Tests

- Run all tests: `yarn test`
- Run tests in watch mode: `yarn test --watch`
- Run unit tests: `yarn test tests/unit/`
- Run Storybook tests: `yarn test --project=storybook`

### Writing Tests

#### Unit Tests

Place unit tests in `tests/unit/` directory:

```tsx
// tests/unit/example.test.ts
import { describe, it, expect } from "vitest";

describe("Example component", () => {
  it("should work correctly", () => {
    expect(1 + 1).toBe(2);
  });
});
```

#### Component Tests

Use React Testing Library for component testing:

```tsx
// components/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

it("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
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
