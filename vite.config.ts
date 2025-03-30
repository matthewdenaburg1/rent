import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  build: {
    target: 'es6',
    cssMinify: false,
    sourcemap: false,
    emptyOutDir: true,
  },

  css: {
    devSourcemap: false,
    modules: {
      localsConvention: 'camelCase',
    },
  },

  server: {
    open: true,
  },

  plugins: [
    react(),
  ],
});
