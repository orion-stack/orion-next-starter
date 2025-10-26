next js v16
tailwindcss v4
shadcn
motion
zod
zustand
tanstack query
next theme
commitlin
eslint
husky
stylelint
github actions
vitest
playwright
zustand
better auth
storybooks
yarn v4
react hook forms
prettier
msw js
lintstaged


and will have the ff structure
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
│   ├── providers/
│   ├── styles/
│   └── types/
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
├── .commitlintrc.js
├── .eslintrc.js
├── .gitignore
├── .lintstagedrc.js
├── .prettierrc
├── .stylelintrc.js
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.ts