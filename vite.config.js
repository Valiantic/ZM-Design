import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default defineConfig({
  plugins: [
    tailwindcss(),
    nodeResolve({
      extensions: ['.js', '.jsx', '.css'] // Allow CSS resolution
    }),
  ],
  build: {
    rollupOptions: {
      external: ['aos'],
    },
  },
})