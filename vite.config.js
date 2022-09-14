import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup'

export default defineConfig(({ command, mode }) => {
  return {
    server: {
      port: 8080,
    },
    plugins: [
      react(),
      {
        ...linaria.default({
          include: ['**/*.{js,jsx}'],
        }),
        enforce: 'pre',
      }
    ],
  }
})