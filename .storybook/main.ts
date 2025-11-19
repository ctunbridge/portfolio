import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    {
      directory: "../stories",
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: ""
    },
    {
      directory: "../components",
      files: "**/*.stories.@(js|jsx|mjs|ts|tsx)",
      titlePrefix: ""
    }
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: [
    "../public"
  ]
};
export default config;