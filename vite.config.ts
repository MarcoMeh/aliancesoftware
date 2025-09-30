// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aliancesoftware.space/', // <--- ADD THIS BACK
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