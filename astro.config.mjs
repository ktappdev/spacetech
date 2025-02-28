// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Server configuration
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
