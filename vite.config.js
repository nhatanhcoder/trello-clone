import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// doi config vite
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './'
})
