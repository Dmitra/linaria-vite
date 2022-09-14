import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import linaria from '@linaria/rollup'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
      linaria(),
    ],
  }
})