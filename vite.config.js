import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    tailwindcss(),
    nodeResolve()
  ],
  optimizeDeps: {
    include: ['aos']
  },
  resolve: {
    alias: {
      'aos': 'aos'
    }
  }
})