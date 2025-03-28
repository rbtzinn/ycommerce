import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    nodePolyfills(),
  ],
  optimizeDeps: {
    include: ['react-bootstrap']
  }
})
