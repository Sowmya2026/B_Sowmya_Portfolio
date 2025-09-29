import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/B_Sowmya_Portfolio/',
  server: {
    port: 3000,
  },
})

