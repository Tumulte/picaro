var express = require('express');
var dbUtils = require('./dbUtils');
var RelationHandler = dbUtils.RelationHandler;
var DataWriteHandler = dbUtils.DataWriteHandler;


var updateItem = function updateItem(req, res) {
    req.elemID
        .assign(req.body)
        .write()
    res.send("updated !");
}
var crud = function crud(db) {
    var dataRouter = express.Router();
    dataRouter.use(':app/:table/:elemID', function(req, res, next) {
        if (db.has(req.params.table).value()) {
            var data = new RelationHandler(db, req);
            data = data.get().getRelations();
            if (data === false) {
                res.status(404).send('Item "' + req.params.elemID + '" does not exist');
            } else {
                req.data = data;
                next();
            }
        } else {
            res.status(404).send('this data ' + req.params.app + '_' + req.params.table + ' does not exist');
        }
    })

    dataRouter.route('/:app/:table').get(function(req, res) {
            if (db.has(req.params.app + '_' + req.params.table).value()) {
                var data = new RelationHandler(db, req);
                res.json(data.get().getRelations());
            } else {
                res.status(404).send("There is no table named " + req.params.app + "_" + req.params.table)
            }
        })
        .post(function(req, res) {
            var data = new DataWriteHandler(db, req);
            data.save();
            res.send("Sauvegardé")
        })
    dataRouter.route('/:table/:elemID')
        .get(function(req, res) {
            res.json(req.data)
        })
        .put(function(req, res) {
            updateItem(req, res);
        })
        .patch(function(req, res) {
            updateItem(req, res);
        })
        .delete(function(req, res) {
            db.get('posts')
                .remove({
                    "id": req.params.elemID
                })
                .write()
            res.send("ok");
        });
    return dataRouter;
}
module.exports = {
    crud: crud
}