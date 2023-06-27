import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname,'/src')
		}
	},
	server: {
		host: 'localhost',
		port: 9999,
		proxy: {
			'/api': {
				target: 'http://localhost:58999',
			}
		}
	},
})
