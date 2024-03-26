const {defaultSettings, defaultStyleSet} = require("./dataConfig");
const {nanoid} = require("nanoid");
const fs = require('fs')
const {execSync} = require('child_process');
const path = require('path')
const {dbDeleteItem} = require('./dataUtils')

async function routes(fastify, options) {
    fastify.post('/:app/:model', async (request, reply) => {
        const appDb = fastify.db.getCollection(request.params.app)
        appDb.insert(request.body)
        reply.send({status: 'ok'})
    })
        .put('/:app/:model', async (request, reply) => {
            const appDb = fastify.db.getCollection(request.params.app)
            appDb.update(request.body)
            reply.send({status: 'ok'})
        })
        .get('/:app/:model', async (request, reply) => {
            const appDb = fastify.db.getCollection(request.params.app)
            const data = appDb.find({modelId: request.params.model});
            reply.send(data)
        })
}

module.exports = routes
