const {defaultSettings, defaultStyleSet} = require("./dataConfig");
const {nanoid} = require("nanoid");
const fs = require('fs')
const {execSync} = require('child_process');
const path = require('path')
const {dbDeleteItem} = require('./dataUtils')
const {generateCSSFile} = require("./cssFileGenerator");


async function routes(fastify, options) {
    fastify.get("/all", async function (request, reply) {
        const allSettingsDb = fastify.db.getCollection('settings')
        const allStylesetsdB = fastify.db.getCollection('styleset')
        return {allSettings: allSettingsDb.find(), allStylesets: allStylesetsdB.find()}
    });
    fastify.post('/create/:name/:type', async (request, reply) => {
        const {name, type} = request.params;
        console.info('creating', name, type)
        if (!name || !type) {
            return reply.code(400).send({error: 'Missing name or type'})
        }
        const newApp = fastify.db.getCollection(name)

        if (newApp !== null) {
            console.log(`The app ${name} already exist`)
            return
        }
        const newSettings = {...defaultSettings}
        const id = nanoid(8)
        try {
            const settings = fastify.db.getCollection('settings')
            newSettings.id = id
            newSettings.applicationName = name
            newSettings.title = name
            settings.insert(newSettings)
            fastify.db.addCollection(name)
            console.log(`The app ${name} has been created`)
        } catch (err) {
            throw new Error(err)
        }
        try {
            fs.mkdirSync(`../../app${name}`)
            const newDir = path.join(__dirname, `../../app${name}`)
            const templates = path.join(__dirname, `appTemplates/${type}/*`)
            execSync(`cp -r ${templates} ${newDir}`, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            })
            console.log('Picaro created')
        } catch (err) {
            throw new Error(err)
        }
        reply.send({appCreatedId: id})
    })
    fastify.put('/update/settings', async (request, reply) => {
        try {
            const settings = fastify.db.getCollection('settings')
            settings.update(request.body)
        } catch (err) {
            throw new Error(err)
        }
    })
    fastify.delete('/delete/:name', async (request, reply) => {
        const {name} = request.params;
        const app = fastify.db.getCollection(name)
        if (app === null) {
            reply.send(`The app ${name} doesn't exist`)
        } else {
            try {
                fastify.db.removeCollection(name)
            } catch (err) {
                throw new Error(err)
            }
            dbDeleteItem(name, fastify.db.getCollection('settings'), 'applicationName')
            const appDir = path.join(__dirname, `../../app${name}`)
            if (fs.existsSync(appDir)) {
                try {
                    fs.rmdirSync(appDir, {recursive: true});
                } catch (err) {
                    throw new Error(err)
                }
            }
            reply.send(`The app ${name} has been deleted`)
        }
    })
    fastify.post('/create/styleset', async (request, reply) => {

        try {
            const styleset = fastify.db.getCollection('styleset')

            const result = styleset.insert(request.body.styleSet)
            generateCSSFile(request.body.generatedCSS, request.body.styleSet.id)
            console.log(`The style ${request.body.name} has been created`)
            return result
        } catch (err) {
            throw new Error(err)
        }
    })
    fastify.put('/update/styleset', async (request, reply) => {
        try {
            const styleset = fastify.db.getCollection('styleset')
            styleset.update(request.body.styleSet)
            generateCSSFile(request.body.generatedCSS, request.body.styleSet.id)

        } catch (err) {
            throw new Error(err)
        }
    })
}

module.exports = routes