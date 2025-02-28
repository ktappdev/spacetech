// vite.config.mjs
import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: 'spacetech.lyricut.com'
  },
  server: {
    allowedHosts: 'spacetech.lyricut.com'
  }
});
