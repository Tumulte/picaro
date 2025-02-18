const {dbDeleteItem} = require("./dataUtils");

async function routes(fastify) {

    fastify.post(`/:app/:model`, async (request, reply) => {

        const appDb = fastify.db.getCollection(request.params.app)
        appDb.insert(request.body)
        reply.send({status: 'ok'})
    })
        .put(`/:app/:model`, {
            preHandler: [fastify.authenticate],
        }, async (request, reply) => {
            const appDb = fastify.db.getCollection(request.params.app)
            appDb.update(request.body)
            reply.send({status: 'ok'})
        })
        .delete(`/:app/:model`, {
            preHandler: [fastify.authenticate],
        }, async (request, reply) => {
            const appDb = fastify.db.getCollection(request.params.app)
            appDb.findAndRemove(request.body)
            reply.send({status: `Content ${request.params.model} successfully deleted`})
        })
        .get(`/:app/:model`, async (request, reply) => {
            const appDb = fastify.db.getCollection(request.params.app)
            const data = appDb.find({modelId: request.params.model});
            reply.send(data)
        })
}

module.exports = routes
