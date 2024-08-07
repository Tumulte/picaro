const path = require('path')
const {defineConfig} = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'ColorHelper',
            fileName: (format) => `colorHelper.${format}.js`
        }
    }
})
