import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ['quill', 'chart.js/auto']
  },
  envDir:'./',
  build: {
    rollupOptions: {
      commonjsOptions: {
        include: [/quill/, /node_modules/, /chart.js/]
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },

});
