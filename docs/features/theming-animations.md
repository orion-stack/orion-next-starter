# Theming and Animations Setup

## Theming (Dark/Light Mode)

This project includes a theme system using `next-themes`:

- **Provider**: The `ThemeProvider` is set up in `src/providers/theme-provider.tsx`
- **Integration**: All providers are combined in `src/providers/index.tsx`
- **Usage**: The `ThemeToggle` component (`src/components/custom/theme-toggle`) allows users to switch between themes
- **Configuration**: Set to use `class` attribute with `dark` prefix for styling

## Animations

Framer Motion is available for animations:

- **Package**: `framer-motion` is installed and ready to use
- **Usage**: Import from the package and use components like `<motion.div>` for animated elements

## Component Structure

- **Custom Components**: All custom components are in `src/components/custom/`
- **Barrel Export**: Components can be imported using `@/components/custom` which exports both Button and ThemeToggle
- **Shadcn UI**: Base components are in `src/components/ui/`

## Examples in Action

- The home page (`src/app/page.tsx`) demonstrates both the theme toggle and custom button components
- The theme toggle is positioned in the top-right corner of the page
- The "Deploy Now" link uses the custom Button component with the `asChild` prop
