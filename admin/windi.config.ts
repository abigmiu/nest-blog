import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,js,css,html,ts,tsx}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})