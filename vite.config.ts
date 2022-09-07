import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dynamicBase } from 'vite-plugin-dynamic-base'

const isProduction = process.env.NODE_ENV === 'production'
// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? '/__dynamic_base__/' : '/',
  plugins: [
    dynamicBase({
      transformIndexHtml: true
    }),
    react()
  ]
})
