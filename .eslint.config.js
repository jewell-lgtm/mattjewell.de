module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "next/core-web-vitals",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
  ],
  rules: {
    "unicorn/no-array-for-each": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prefer-optional-catch-binding": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": "off",
    "import/no-extraneous-dependencies": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: ["builtin", "external", "internal", "parent", "sibling"],
      },
    ],
    "react/function-component-definition": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": ["error", "never"],
    "object-shorthand": ["error", "always"],
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
  },
};
