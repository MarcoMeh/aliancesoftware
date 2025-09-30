// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // <--- CHANGE THIS TO '/' for custom domains at the root
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    minify: 'esbuild',
    sourcemap: false
  }
});