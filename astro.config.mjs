// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Server configuration
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      },
      hmr: {
        clientPort: 3001
      },
      host: '0.0.0.0',
      strictPort: true
    },
    preview: {
      port: 3001,
      host: '0.0.0.0',
      strictPort: true,
      allowedHosts: ['spacetech.lyricut.com', 'localhost']
    }
  },
});
