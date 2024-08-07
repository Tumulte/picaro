const {test} = require('tap')

test('should register the correct decorator', async t => {
    t.plan(1)

    const app = require('fastify')()

    app.register(require('../index'))

    await app.ready()

    t.same(app.exampleDecorator(), 'decorated')
})
