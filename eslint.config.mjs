import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'

// Get the current directory for the compat layer
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Create compat instance for using old configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

// Convert Next.js config to flat config format
const nextConfig = compat.extends('next/core-web-vitals')

const config = [
  // Ignore patterns
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/.open-next/**',
      '**/out/**',
      '**/public/**',
      '**/.git/**',
      '**/coverage/**',
      '**/dist/**',
      '**/*.min.js',
      '**/build/**',
    ],
  },
  
  // Apply Next.js config to all relevant files
  ...nextConfig.map(config => ({
    ...config,
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
  })),
  
  // Custom rules and overrides
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add any custom rules here
      // For example:
      // 'no-console': 'warn',
      // 'no-unused-vars': 'error',
    },
  },
  
  // Configuration files (more lenient rules)
  {
    files: ['*.config.{js,cjs,mjs}', 'eslint.config.js'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
]

export default config