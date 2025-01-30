import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import viteCSS from 'vite-plugin-css';


export default defineConfig({
  plugins: [
    tailwindcss(),
    viteCSS(),
  ],
  build: {
    rollupOptions: {
      external: ['aos']
    }
  }
})