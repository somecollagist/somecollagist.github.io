import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ViteToml } from 'vite-plugin-toml';

import emitFiles from 'rollup-plugin-emit-files';
import image from 'rollup-plugin-img';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ViteToml(),
    emitFiles({
      src: "src",
      include: [
        "assets/data/blog/images/**/*",
        "assets/data/socials/*.svg"
      ]
    }),
    image()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
