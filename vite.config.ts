import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 5173,
    proxy: {
      '/api': 'http://127.0.0.1:58888'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [react()],
})
