'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const fs = require('fs');
const addFontData = require('./utils').addFontData
const fastifyStatic = require('@fastify/static')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
    await fastify.decorate('conf', require('./picaro-back.json'))
    fastify.register(require('@fastify/cors'), {
        origin: true,
        allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
        methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
    })

    await fastify.register(require(`./${fastify.conf.db}`))


    fastify.register(fastifyStatic, {
        root: path.join(__dirname, `../Front/dist/assets`),
        prefix: '/assets/',
    })

    fastify.register(fastifyStatic, {
        root: path.join(__dirname, `../../static/fonts`),
        prefix: '/fonts/',
        decorateReply: false
    })

    fastify.register(fastifyStatic, {
        root: path.join(__dirname, `../../static/images`),
        prefix: '/images/',
        decorateReply: false
    })

    fastify.register(fastifyStatic, {
        root: path.join(__dirname, `../../static/css`),
        prefix: '/css/',
        decorateReply: false
    })

    fastify.get('/', async (request, reply) => {
        const bufferIndexHtml = fs.readFileSync(path.join(__dirname, `../Front/dist/index.html`))
        reply.type('text/html').send(bufferIndexHtml)
    })

    fastify.register(require('./crudSettings'), {prefix: `${process.env.NODE_ENV === 'development' ? '' : '/api'}/setup`})
    fastify.register(require('./crud'), {prefix: `${process.env.NODE_ENV === 'development' ? '' : '/api'}/data`})

    fastify.get('/fonts', async (request, reply) => {
        const formatedFonts = []

        const fonts = await fs.promises.readdir(path.join(__dirname, '../../static/fonts'))
        const filteredFonts = fonts
            .filter(font => font.match(/\.(woff|woff2|ttf|otf)$/i))
            .sort((a, b) => a.localeCompare(b))


        for (const font of filteredFonts) {
            const fontFullName = font.split('.')[0].split('-');
            const family = fontFullName[0]
            const descr = fontFullName.join('');
            if (formatedFonts.find(f => f.family === family)) {
                const fontParams = {src: font}
                addFontData(fontParams, descr)
                const currentFont = formatedFonts.find(f => f.family === family)
                currentFont.variants.push(fontParams)
            } else {
                const fontParams = {src: font}
                addFontData(fontParams, descr)
                formatedFonts.push({family, variants: [fontParams]})

            }
        }

        return formatedFonts
    })

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts)
    })

    // This loads all plugins defined in routes
    // define your routes in one of these
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({}, opts)
    })
}

