// vite.config.js
export default {
  server: {
    port: 3001,
    host: true,
    allowedHosts: ['spacetech.lyricut.com', '.spacetech.lyricut.com']
  },
  preview: {
    allowedHosts: ['spacetech.lyricut.com', '.spacetech.lyricut.com']
  }
}
