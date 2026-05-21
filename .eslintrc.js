module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "eslint-config-expo",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-native",
    "@typescript-eslint",
    "react-hooks",
    "unused-imports",
    "import",
  ],
  env: {
    "react-native/react-native": true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "import/order": "off",
    "react/react-in-jsx-scope": "off",
    "react-native/no-inline-styles": "off",
    "react-native/no-color-literals": "off",
    "react-native/split-platform-components": "off",
    "expo/use-dom-exports": "off",

    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-tag-spacing": [
      "error",
      {
        beforeSelfClosing: "always",
      },
    ],
    "object-curly-spacing": ["error", "always"],
  },
};
