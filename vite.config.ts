import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/react/src/main.scss', 'resources/react/src/main.tsx'],
      refresh: true,
    }),
    react(),
  ],
});
