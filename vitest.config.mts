import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts", "./msw/msw.setup.ts"],
    include: [
      "src/app/**/*.test.{ts,tsx}",
      "src/lib/**/*.test.{ts,tsx}",
      "src/components/**/*.test.{ts,tsx}",
    ],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache", "tests-e2e"],
  },
});
