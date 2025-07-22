import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ESSENCIAL: Permite que o servidor Vite seja acessível de fora do contêiner
    port: 5173, // Garante que o Vite escute na porta 3000, conforme seu docker-compose.yml
    watch: {
      usePolling: true, // ESSENCIAL para ambientes Docker/WSL onde o hot reload não funciona
    },
  }
})