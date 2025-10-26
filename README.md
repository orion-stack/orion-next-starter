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

## License

This project is licensed under the MIT License.