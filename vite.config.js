import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true, // Minifica o código
    chunkSizeWarningLimit: 1000, // Ajusta o limite de tamanho dos chunks
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // Separa o React em um chunk próprio
          bootstrap: ['bootstrap'], // Separa o Bootstrap em um chunk próprio
        },
      },
    },
  },
});