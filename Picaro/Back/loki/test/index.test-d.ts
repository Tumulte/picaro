import fastify from 'fastify'
import example from '../index'
import {expectType} from 'tsd'

let app
try {
    app = fastify()
    await app.ready()
    app.register(example)
    expectType<() => string>(app.exampleDecorator)
} catch (err) {
    console.error(err)
}
