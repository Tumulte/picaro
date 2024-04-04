const {defaultSettings, defaultStyleSet} = require("./dataConfig");
const {nanoid} = require("nanoid");
const fs = require('fs')
const {execSync} = require('child_process');
const path = require('path')
const {dbDeleteItem} = require('./dataUtils')
const {generateCSSFile} = require("./cssFileGenerator");


async function routes(fastify, options) {
    fastify.get(`/all`, async function (request, reply) {
        const allSettingsDb = fastify.db.getCollection('settings')
        const allStyleSetsdB = fastify.db.getCollection('styleset')
        return {allSettings: allSettingsDb.find(), allStyleSets: allStyleSetsdB.find()}
    });
    fastify.post(`/create/:name`, {
        preHandler: [fastify.authenticate],
    }, async (request, reply) => {
        const {id, name} = request.params;
        console.info('creating', id)
        if (!id) {
            return reply.code(400).send({error: 'Missing name'})
        }
        const newApp = fastify.db.getCollection(id)

        if (newApp !== null) {
            console.log(`The app ${id} already exist`)
            return
        }
        const newSettings = {...defaultSettings}
        const settingsId = nanoid(8)
        try {
            const settings = fastify.db.getCollection('settings')
            newSettings.id = settingsId
            newSettings.applicationName = name
            newSettings.title = id
            settings.insert(newSettings)
            fastify.db.addCollection(id)
            console.log(`The app ${name} has been created`)
        } catch (err) {
            throw new Error(err)
        }
        reply.send({appCreatedId: id})
    })
    fastify.put(`/update/settings`, async (request, reply) => {
        try {
            const settings = fastify.db.getCollection('settings')
            settings.update(request.body.settings)

        } catch (err) {
            throw new Error(err)
        }
    })
    fastify.delete(`/delete/:name`, {
        preHandler: [fastify.authenticate],
    }, async (request, reply) => {
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
            reply.send(`The app ${name} has been deleted`)
        }
    })
    fastify.post(`/create/styleset`, {
        preHandler: [fastify.authenticate],
    }, async (request, reply) => {

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
    fastify.put(`/update/styleset`, {
        preHandler: [fastify.authenticate],
    }, async (request, reply) => {
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
