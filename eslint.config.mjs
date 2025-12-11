/**
 * ESLint Configuration
 *
 * Code Style Conventions (see .cursorrules for full details):
 * - Use double quotes for strings
 * - No semicolons (except where required)
 * - Import order: React/Next.js → Third-party → Components → Utils → Types → Styles
 *
 * Note: Quote and semicolon rules are documented in .cursorrules rather than
 * enforced via ESLint due to compatibility issues with Next.js flat config.
 */

// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...storybook.configs["flat/recommended"]
];

export default eslintConfig;
