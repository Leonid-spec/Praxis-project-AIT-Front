import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Убедитесь, что здесь указан правильный базовый путь
  server: {
   
  },
});
