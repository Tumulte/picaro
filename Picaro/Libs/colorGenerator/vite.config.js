const path = require('path')
const {defineConfig} = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ColorGenerator',
            fileName: (format) => `colorGenerator.${format}.js`
        },

    },
    resolve: {
        alias: {
            '@libs': path.resolve(__dirname, './../../../BITE'),
        },
    },
})
