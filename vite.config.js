import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // IPv4 주소 사용
    port: 3000,          // 사용 가능한 포트로 변경
  }
})


