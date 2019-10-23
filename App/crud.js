var express = require('express');
var dbUtils = require('./dbUtils');

var RelationHandler = dbUtils.RelationHandler;
var DataWriteHandler = dbUtils.DataWriteHandler;
var makeTableName = require('./utils').makeTableName;
var multer = require('multer');

var upload = multer();

var updateItem = function updateItem(db, req) {
	db.assign(req.body).write();
};
var crud = function crud(db) {
	var dataRouter = express.Router();
	dataRouter.use('/:app/:table/:itemId', function(req, res, next) {
		if (db.has(makeTableName(req)).value()) {
			var data = new RelationHandler(db, req);
			data = data.get().getRelations();
			if (data === false) {
				res.status(404).send('Item "' + req.params.itemId + '" does not exist');
			} else {
				req.data = data;
				next();
			}
		} else {
			res.status(404).send('this data ' + makeTableName(req) + ' does not exist');
		}
	});

	dataRouter
		.route('/:app/:table')
		.get(function(req, res) {
			if (db.has(makeTableName(req)).value()) {
				var data = new RelationHandler(db, req);
				res.json(data.get().getRelations());
			} else {
				res.status(404).send('There is no table named ' + makeTableName(req));
			}
		})
		.post(upload.none(), function(req, res) {
			var data = new DataWriteHandler(db, req);
			data.save();
			res.send('Sauvegardé');
		});
	dataRouter
		.route('/:app/:table/:itemId')
		.get(function(req, res) {
			res.json(req.data);
		})

		.put(function(req, res) {
			db.get(makeTableName(req))
				.find({
					id: req.params.itemId,
				})
				.assign(req.body)
				.write();
			res.send('updated !');
		})
		.patch(function(req, res) {
			updateItem(db, req);
			res.send('updated !');
		})
		.delete(function(req, res) {
			db.get('posts')
				.remove({
					id: req.params.itemId,
				})
				.write();
			res.send('ok');
		});
	return dataRouter;
};
module.exports = crud;
