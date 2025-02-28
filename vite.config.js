// vite.config.js
export default {
  server: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: true,
    cors: {
      origin: [
        'http://localhost:3001',
        'http://spacetech.lyricut.com',
        'https://spacetech.lyricut.com'
      ]
    },
    hmr: {
      clientPort: 3001,
      host: 'spacetech.lyricut.com'
    },
    watch: {
      usePolling: true,
      interval: 1000
    },
    allowedHosts: ['spacetech.lyricut.com', '.lyricut.com']
  },
  preview: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: ['spacetech.lyricut.com', '.lyricut.com']
  }
}
