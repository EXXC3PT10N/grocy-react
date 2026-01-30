import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9283',
        rewrite: (path) => path.replace(/^\/api\/grocy/, '/api'),
        headers: {
            'GROCY-API-KEY': env.GROCY_API_KEY
          }
      }
    }
  }
}
})
