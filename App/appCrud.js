var express = require('express');
var fs = require('fs');
var path = require('path');

/**
 *
 * @param {Object} appDb
 * @param {function} appDb.get
 * @param {Object} currentApp
 */
var appCrud = function appCrud(appDb, currentApp) {
	var dataRouter = express.Router();
	dataRouter.route('/all').get(function(req, res) {
		res.json(appDb.get(currentApp.applicationName).value());
	});
	dataRouter.route('/config/:id').put(function(req, res) {
		appDb
			.get('config')
			// @ts-ignore
			.find({ id: req.body.id })
			.assign(req.body)
			.write();
		res.send('Config modified successfully');
	});
	dataRouter.route('/').get(function(req, res) {
		/**
		 * @type {object}
		 */
		var data = {};
		data = appDb
			.get(currentApp.applicationName)
			.find({ id: currentApp.styleSet })
			.value();
		if (!data) {
			res.status(404).send('No style collection named ' + req.params.styleId);
		}
		data.storedColorSet = appDb
			.get('colorSetPresets')
			.find({ id: data.colorCombinationId })
			.value();
		res.json(data);
	});
	dataRouter.route('/fonts').get(function(req, res) {
		const directoryPath = path.join(__dirname, '../static/fonts');
		/**
		 * @type {array}
		 */
		var localFonts = [];
		fs.readdir(directoryPath, function(err, files) {
			if (err) {
				res.status(403).send('The fonts could not be found ' + err);
			}
			files.forEach(function(file) {
				localFonts.push({ family: file });
			});
			res.json(localFonts);
		});
	});
	dataRouter
		.route('/:styleId/')
		.get(function(req, res) {
			/**
			 * @type {object}
			 */
			var data = {};
			data = appDb
				.get(currentApp.applicationName)
				.find({ id: req.params.styleId })
				.value();
			if (!data.styleCollection) {
				res.status(404).send('No style collection named ' + req.params.styleId);
			}
			data.storedColorSet = appDb
				.get('colorSetPresets')
				.find({ id: data.styleCollection.colorCombinationId })
				.value();
			res.json(data);
		})
		.delete(function(req, res) {
			//TODO double check this can't be done without being logged
			if (
				appDb
					.get(currentApp.applicationName)
					.find({ id: req.params.styleId })
					.value()
			) {
				appDb
					.get(currentApp.applicationName)
					.remove({ id: req.params.styleId })
					.write();
				res.send('styleset ' + req.params.styleId + ' DELETE');
			} else {
				res.status(500).send('This style set does not exist or has already been deleted');
				return;
			}
		});

	return dataRouter;
};
module.exports = appCrud;
