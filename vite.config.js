import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/hillel_react_hw10/",
  plugins: [
    react(),
    alias({
      entries: [
        {find: '@', replacement: path.resolve(__dirname, 'src')},
        // додайте інші псевдоніми тут
      ]
    })
  ],
})
