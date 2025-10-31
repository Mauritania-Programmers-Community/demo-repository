export default [
  {
    ignores: [
      'node_modules/**',
      '.git/**',
      '.vscode/**',
      '.claude/**',
      '.playwright-mcp/**',
      '.github/**',
      'docs/**',
      'translations/**'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        IntersectionObserver: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setTimeout: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
      'eqeqeq': 'warn'
    }
  }
];
