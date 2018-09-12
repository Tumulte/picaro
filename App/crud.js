var express = require('express');
var dbHandler = require('../utils/db');
var dataHandler = dbHandler.dataHandler;
var dataWriteHandler = dbHandler.dataWriteHandler;


var crud = function (db) {
  var dataRouter = express.Router();
  dataRouter.use('/:table/:quoteId', function (req, res, next) {
    if (db.has(req.params.table).value()) {
      var data = new dataHandler(db, req);
      data = data.get().getRelations();
      if (data === false) {
        res.status(404).send('Item "' + req.params.quoteId + '" does not exist');
      } else {
        req.data = data;
        next();
      }

    } else {
      res.status(404).send('this data ' + req.params.table + ' does not exist');
    }
  })

  dataRouter.route('/:table').get(function (req, res) {
      if (db.has(req.params.table).value()) {
        var data = new dataHandler(db, req);
        res.json(data.get().getRelations());
      } else {
        res.status(404).send("There is no table named " + req.params.table)
      }
    })
    .post(function (req, res) {
      var data = new dataWriteHandler(db, req);
      res.send(data.save());
    })
  dataRouter.route('/:table/:quoteId')
    .get(function (req, res) {
      res.json(req.data)
    })
    .put(function (req, res) {
      updateItem(req, res);
    })
    .patch(function (req, res) {
      updateItem(req, res);
    })
    .delete(function (req, res) {
      db.get('posts')
        .remove({
          "id": req.params.quoteId
        })
        .write()
      res.send("ok");
    });
  return dataRouter;
};
var updateItem = function (req, res) {
  req.quote
    .assign(req.body)
    .write()
  res.send("updated !");
}
module.exports = {
  "crud": crud,
};