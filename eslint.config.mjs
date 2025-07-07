import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import { parser } from 'typescript-eslint';

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  // 通用 JavaScript 推荐规则
  js.configs.recommended,

  // 👇 前端配置：React + TSX
  {
    files: ['client/**/*.ts', 'client/**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
  },

  // 👇 后端配置：NestJS (TS)
  {
    files: ['server/**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // ✅ 通用 Prettier 规则（可放最后以兜底）
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
