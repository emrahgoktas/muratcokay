import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const headingOrderRule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow skipped heading levels in JSX",
    },
    messages: {
      skipped:
        "Heading level h{{current}} cannot follow h{{previous}} without an intermediate level.",
    },
    schema: [],
  },
  create(context) {
    let previousLevel = null;

    return {
      JSXOpeningElement(node) {
        const name = node.name?.name;

        if (typeof name !== "string" || !/^h[1-6]$/.test(name)) {
          return;
        }

        const currentLevel = Number(name.slice(1));

        if (
          previousLevel !== null &&
          currentLevel > previousLevel + 1
        ) {
          context.report({
            node,
            messageId: "skipped",
            data: {
              current: currentLevel,
              previous: previousLevel,
            },
          });
        }

        previousLevel = currentLevel;
      },
    };
  },
};

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended",
  ),
  {
    plugins: {
      local: {
        rules: {
          "heading-order": headingOrderRule,
        },
      },
    },
    rules: {
      "jsx-a11y/heading-has-content": "error",
      "local/heading-order": "error",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
