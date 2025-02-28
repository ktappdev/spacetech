// vite.config.js
export default {
  server: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: true,
    cors: true, // Allow all origins in development
    hmr: {
      clientPort: 3001,
      host: 'spacetech.lyricut.com'
    },
    watch: {
      usePolling: true,
      interval: 1000
    },
    allowedHosts: ['spacetech.lyricut.com', '.lyricut.com', 'localhost']
  },
  preview: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: true,
    cors: true, // Allow all origins in preview
    allowedHosts: ['spacetech.lyricut.com', '.lyricut.com', 'localhost']
  },
  build: {
    // Ensure static files are properly handled
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  }
}
