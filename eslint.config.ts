import { dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Linter } from 'eslint';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['public/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
] satisfies Linter.Config[];

export default eslintConfig;
