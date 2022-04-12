'use strict'

const loki = require('lokijs')
const lfsa = require('lokijs/src/loki-fs-structured-adapter.js')
const path = require('path')
const fs = require('fs')
const EventEmitter = require('events');
const adapter = new lfsa()
const eventEmitter = new EventEmitter();
let db

eventEmitter.addListener('autoloaded', () => {
    console.info('listening to autoload')
})
eventEmitter.addListener('dbCreated', () => {
    console.info('listening to db creation')
})


eventEmitter.on('dbCreated', () => {
    console.log('Db exists')
    if (process.env.NODE_ENV === 'test') {
        const getLoki = new loki('../../Data/Test/PicData.db', {
            adapter: adapter,
        })
    } else {
        db = new loki(path.join(__dirname, '../../Data/picData.db'), {
            adapter: adapter,
            autoload: true,
            autoloadCallback: function () {
                eventEmitter.emit('autoloaded')
            },
            autosave: true,
            autosaveInterval: 4000
        })
    }

})
const fp = require('fastify-plugin')
module.exports = fp(function (fastify, opts, done) {
    return new Promise((resolve, reject) => {
        eventEmitter.on('autoloaded', () => {
            fastify.decorate('db', db)
            resolve()
        })
    })
}, {fastify: '^4.x'})

if (!fs.existsSync(path.join(__dirname, '../../Data/picData.db'))) {
    fs.writeFile(path.join(__dirname, '../../Data/picData.db'), "", {flag: 'wx'}, function (err) {
        if (err) throw err;
        console.log("db created");
    });
}
if (!fs.existsSync(path.join(__dirname, '../../Data/picData.db.0'))) {
    //first init
    const dbInit = new loki(path.join(__dirname, '../../Data/picData.db'), {
        adapter: adapter,
    })
    dbInit.addCollection('settings', {unique: ['id']})
    dbInit.addCollection('users', {unique: ['id', 'username']})
    dbInit.addCollection('styleset', {unique: ['id']})
    dbInit.addCollection('files', {unique: ['id']})
    const styleset = dbInit.getCollection('styleset')

    dbInit.saveDatabase(err => {
        if (err) {
            console.log("error : " + err);
        } else {
            eventEmitter.emit('dbCreated')

            console.log("database saved.");
        }
    });
    console.log('Database first init')
} else {
    console.log('Database already exists')
    eventEmitter.emit('dbCreated')
}