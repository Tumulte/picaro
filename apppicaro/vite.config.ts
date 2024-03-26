import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vuetify()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@Picaro': fileURLToPath(new URL('./../Picaro/Front/src', import.meta.url)),
            '@types': fileURLToPath(new URL('./../Picaro/Front/types', import.meta.url)),
            '@stores': fileURLToPath(new URL('./../Picaro/Front/stores', import.meta.url)),
            '@utils': fileURLToPath(new URL('./../Picaro/Front/utils', import.meta.url)),
            '@components': fileURLToPath(new URL('./../Picaro/Front/src/components', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    }
})
