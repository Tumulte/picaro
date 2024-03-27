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
        .get(`/:app/:model`, async (request, reply) => {
            const appDb = fastify.db.getCollection(request.params.app)
            const data = appDb.find({modelId: request.params.model});
            reply.send(data)
        })
}

module.exports = routes
