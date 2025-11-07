### `orion-next-starter` (Base Starter) - current project.

This is teh current project. i will clone this project and create the other projects from this one.
This is the minimal, unopinionated foundation. It provides a complete set of professional development tools, a scalable project structure, and the initial setup for UI components. It intentionally omits choices for state management and data fetching, allowing developers to choose their own stack. It's the perfect starting point for any type of Next.js project (SSR, SSG, or SPA).

#### **Core Features**

- **Project Structure:** A clean, minimal, and scalable folder structure designed for growth.
- **Styling & UI:**
  - **Tailwind CSS:** Pre-configured for utility-first styling.
  - **Shadcn UI:** Initialized and ready to go. You can easily add any component you need with the CLI, keeping the project lightweight and owning the component code.
  - **next-themes:** Basic setup for implementing light/dark mode.

#### **Developer Experience & Tooling**

- **Code Quality & Consistency:**
  - **ESLint:** Configured with modern rules for Next.js and TypeScript.
  - **Prettier:** Set up to automatically format code and maintain a consistent style.
- **Git Hooks Automation:**
  - **Husky:** Manages git hooks to automate quality checks.
  - **lint-staged:** Ensures that linters and formatters run only on staged files before each commit.
  - **Commitlint:** Enforces a conventional commit message format for a clean and understandable version history.
- **Testing Foundation:**
  - **Vitest:** Core setup for unit and integration testing.
  - **Playwright:** Core setup for end-to-end testing across browsers.

---

### **Common Features Added to Specialized Templates**

The following features are added on top of the `orion-next-starter` for the `private`, `selfhosted`, and `saas` templates. This creates a more opinionated but feature-rich starting point for application development.

#### **Frontend Stack**

- **State Management:**
  - **Zustand:** A simple and powerful state management solution is set up and ready to use.
- **Data Fetching & Caching:**
  - **Tanstack Query (React Query):** Pre-configured for robust server-state management, including data fetching, caching, and synchronization.
- **Schema Validation:**
  - **Zod:** Integrated for type-safe data validation from forms and API responses.
- **API Mocking:**
  - **MSW.js (Mock Service Worker):** Set up to allow for mocking API endpoints during development and testing, enabling frontend work without a live backend.
- **Component Development:**
  - **Storybook:** Configured for developing and documenting UI components in isolation.

#### **Application Features**

- **Authentication:**
  - Powered by **`better-auth`**, providing a complete set of pre-built authentication pages (sign-up, sign-in, password reset). The UI is minimal, designed to be easily customized or completely replaced.
- **User Profile:**
  - A minimal user profile page is included, allowing users to view and manage their basic information.
- **Application Settings:**
  - A basic page for app-level settings or user preferences.

---

### **Unique Features for Specialized Templates**

These templates include everything from the `orion-next-starter` and the `Common Features` listed above, plus their own unique functionalities.

### `orion-next-private`

**Description:** Built for apps used by a single user or a small internal team. It's a full-featured frontend application starter without a public-facing admin backend.

- **Key Features:**
  - Includes the full **Frontend Stack** and **Application Features** (Authentication, Profile).
  - **No Admin Panel:** Intentionally kept lightweight by omitting a separate backend admin interface.
  - **Simplified Logic:** Designed for direct interaction with APIs without the complexity of multi-role systems.

### `orion-next-selfhosted`

**Description:** For applications that users will deploy and manage themselves, such as a blog, CMS, or internal management system.

- **Unique Features:**
  - **Admin Dashboard:** A functional, pre-built admin panel for managing the application's data.
  - **Multi-Role User Management:** A pre-configured system for roles and permissions (e.g., admin, editor, user).
  - **Database Integration:** Comes with boilerplate for connecting to and interacting with a database (e.g., PostgreSQL with Prisma ORM).

### `orion-next-saas`

**Description:** The most feature-rich template, designed for building commercial Software as a Service applications.

- **Unique Features:**
  - **Payment Integration:** Pre-configured with **Stripe** to handle subscriptions, billing, and webhooks.
  - **Multi-Tenancy Architecture:** Built with a foundation to support multiple isolated customer accounts (tenants).
  - **Subscription Management:** Includes the logic and UI for handling different pricing plans, upgrades, downgrades, and cancellations.
  - **Enhanced Admin Panel:** An admin dashboard expanded to include customer and subscription management.
  - **Reporting & Analytics:** A basic dashboard for admins to track key SaaS metrics like revenue and user growth.

Of course. Here is the updated feature list, now including use cases, example applications for each template, and real-world apps with similar architectures to provide context.

---

### `orion-next-starter` (Base Starter)

This is the minimal, unopinionated foundation. It provides a complete set of professional development tools, a scalable project structure, and the initial setup for UI components. It intentionally omits choices for state management and data fetching, allowing developers to choose their own stack.

- **Use Cases:**
  - Quick prototypes and proof-of-concepts.
  - Hackathon projects.
  - Landing pages and simple marketing websites.
  - Projects where developers want full control to select their own libraries for state management and data fetching.
- **Example Apps:**
  - A company marketing landing page.
  - A personal portfolio or resume site.
  - A simple blog built with Markdown or a headless CMS.
  - The frontend for any project where the backend is completely separate.
- **Apps with Similar Architecture:**
  - The marketing websites for companies like **Vercel** or **Stripe** are great examples. They are highly performant, often statically generated frontends focused on presenting information, separate from the complex logic of their actual application dashboards.

#### Core Features & Tooling

- **Project Structure:** Clean, minimal, and scalable.
- **Styling & UI:** Tailwind CSS, Shadcn UI (initialized), `next-themes`.
- **Dev Experience:** ESLint, Prettier, Husky, lint-staged, Commitlint.
- **Testing:** Vitest, Playwright.

---

### `orion-next-private`

Built on the `starter`, this template is for feature-rich applications used by a single user or a small internal team. It includes a complete frontend stack and user features but lacks a public-facing admin backend.

- **Use Cases:**
  - Internal tools for company employees.
  - Personal dashboards to track data from various sources.
  - Client-specific web applications with a limited, known user base.
- **Example Apps:**
  - A personal finance tracker.
  - A custom analytics dashboard for a marketing team.
  - An internal tool for managing company inventory or assets.
  - A private knowledge base for a small team.
- **Apps with Similar Architecture:**
  - **Notion (for personal/small team use):** Users interact with their own private workspace. There isn't an "admin panel" in the traditional sense for the end-user.
  - **Superhuman:** A mail client for a single user, providing a powerful interface to their own data.
  - Many internal tools built with frameworks like **Retool** follow this pattern of being a feature-rich frontend for a specific group without a complex admin backend.

#### Features (Includes everything from `orion-next-starter` plus):

- **Frontend Stack:** Zustand, Tanstack Query, Zod, MSW.js, Storybook.
- **Application Features:** Authentication (`better-auth`), User Profile page, Application Settings page.
- **Key Differentiator:** No admin panel.

---

### `orion-next-selfhosted`

This template is for building applications that users can download, deploy, and manage on their own servers. It includes an admin dashboard and multi-role user management.

- **Use Cases:**
  - Creating open-source software that others can host.
  - Building on-premise solutions for clients with strict data privacy requirements (e.g., in healthcare or finance).
  - Developing a product sold with a one-time license for self-hosting.
- **Example Apps:**
  - A self-hosted blogging platform or CMS.
  - An open-source project management tool.
  - A school or hospital management system installed on the institution's own servers.
  - A self-hosted photo gallery or file-sharing service.
- **Apps with Similar Architecture:**
  - **WordPress.org:** The classic example of powerful, self-hosted software.
  - **Ghost:** A modern, open-source publishing platform designed for self-hosting.
  - **GitLab (Self-Managed):** Companies can host their own instance of the entire GitLab DevOps platform.
  - **Plane:** An open-source project management tool alternative to Jira.

#### Unique Features (Includes everything from `private` plus):

- **Admin Dashboard:** A functional, pre-built admin panel for managing users and application data.
- **Multi-Role User Management:** Pre-configured system for roles and permissions (e.g., admin, editor, user).
- **Database Integration:** Boilerplate for connecting to a database (e.g., PostgreSQL with Prisma ORM).

---

### `orion-next-saas`

The most feature-rich template, designed for building commercial, multi-tenant Software as a Service applications with subscription models.

- **Use Cases:**
  - Launching a subscription-based product.
  - Building multi-user web applications where users sign up and pay for access.
  - Creating platforms with different pricing tiers and feature levels.
- **Example Apps:**
  - A SaaS project management tool.
  - A CRM (Customer Relationship Management) system.
  - An online booking or reservation platform.
  - An email marketing service.
- **Apps with Similar Architecture:**
  - **Linear:** A prime example of a modern, polished SaaS application for issue tracking.
  - **Figma:** A collaborative design tool with team-based accounts and subscription tiers.
  - **Slack:** A communication platform with workspaces (tenants) and various pricing plans.
  - **Vercel:** A platform for hosting web applications, managing teams, and handling billing.

#### Unique Features (Includes everything from `selfhosted` plus):

- **Payment Integration:** Pre-configured with **Stripe** for subscriptions and billing.
- **Multi-Tenancy Architecture:** Foundation to support multiple isolated customer accounts.
- **Subscription Management:** Logic and UI for handling different pricing plans.
- **Enhanced Admin Panel:** Expanded to include customer and subscription management.
- **Reporting & Analytics:** Basic dashboard for tracking key SaaS metrics (revenue, user growth).
