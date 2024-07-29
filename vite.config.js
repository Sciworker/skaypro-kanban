import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      // Добавляем поддержку для старых браузеров, если нужно
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
