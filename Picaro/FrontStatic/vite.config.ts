import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    publicDir: path.resolve(__dirname, '../../static'),
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, '../Front/utils'),
            '@stores': path.resolve(__dirname, '../Front/stores'),
            '@components': path.resolve(__dirname, '../Front/src/components'),
            '@types': path.resolve(__dirname, './../Types'),
            '@libs': path.resolve(__dirname, './../Libs'),
            '/api/uploads': path.resolve(__dirname, './../Back/uploads'),
            '@data': path.resolve(__dirname, './../Data'),
        },
        dedupe: ['pinia', 'vue-router']
    },
    build: {
        rollupOptions: {
            external: [
                /prosemirror*/,
                /@tiptap*/,
            ]
        }
    }
})
