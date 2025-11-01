/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "config",
          "theme",
          "screen",
          "variants",
          "responsive",
          "custom-variant",
          "container",
        ],
      },
    ],
    "import-notation": "string",
    "selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^storybook-.*$",
    ],
  },
};

export default config;
