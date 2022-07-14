import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const base = import.meta.env?.PROD ? '/thumbnail-maker/' : ''

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [svelte()]
})
