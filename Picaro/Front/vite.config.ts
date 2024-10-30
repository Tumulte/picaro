import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify(),
    ],
    publicDir: path.resolve(__dirname, '../../static'),
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, './utils'),
            '@stores': path.resolve(__dirname, './stores'),
            '@components': path.resolve(__dirname, './src/components'),
            '@types': path.resolve(__dirname, './../Types'),
            '@libs': path.resolve(__dirname, './../Libs'),
            '/api/uploads': path.resolve(__dirname, './../Back/uploads'),
            '@data': path.resolve(__dirname, './../Data'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vuetify: ['vuetify'],
                    vuedraggable: ['vuedraggable']
                }
            }
        }
    }
})
