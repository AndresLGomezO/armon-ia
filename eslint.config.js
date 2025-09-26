// eslint-disable-next-line @typescript-eslint/no-require-imports
const prettier = require('eslint-config-prettier')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tseslint = require('typescript-eslint')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const noOnlyTests = require('eslint-plugin-no-only-tests')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const reactCompiler = require('eslint-plugin-react-compiler')

module.exports = tseslint.config(
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      'no-only-tests': noOnlyTests,
      'react-compiler': reactCompiler,
    },
    rules: {
      'no-console': 'error',
      curly: 'error',
      'nonblock-statement-body-position': ['error', 'below'],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        { 'ts-expect-error': false },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/scripts/**/*.{js,ts,tsx}'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: [
      '**/node_modules/*',
      '**/dist/*',
      '**/.react-router/*',
      '**/build/*',
      '**/.vercel/*',
    ],
  }
)
