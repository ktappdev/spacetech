import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,
    host: true,
    cors: true,
    strictPort: true,
    hmr: {
      host: 'spacetech.lyricut.com'
    }
  },
  preview: {
    port: 3001,
    host: true,
    strictPort: true,
    allowedHosts: ['spacetech.lyricut.com']
  }
});
