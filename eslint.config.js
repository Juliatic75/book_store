import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
    plugins: {
      '@stylistic': stylistic
    }
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
    }
  },

  {
    ...stylistic.configs.recommended,
    rules: {
      '@stylistic/indent': ['error', 2],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-extra-semi': 'off',
      '@stylistic/space-before-function-paren': ['error', 'always'],
      '@stylistic/semi': ['error', 'never']
    }
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
])
