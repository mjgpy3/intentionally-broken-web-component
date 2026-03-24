import {defineConfig} from 'vite'

export default defineConfig({
  appType: 'spa',
  server: {
    port: 5000,
    open: true,
  },
  preview: {
    open: true,
  },
})
