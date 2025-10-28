// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Change from './' to '/' for custom domain
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    minify: 'esbuild',
    sourcemap: false
  },
  // Add this 'server' block
  server: {
    host: true, // This tells Vite to expose the server to the network
  },
});