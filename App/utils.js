var makeTableName = function(req) {
	return req.params.app + '_' + req.params.table;
};
var idAsKey = function(table) {
	var collection = {};
	for (var row in table) {
		collection[table[row].id] = table[row];
	}
	return collection;
};
var parseMessage = function(str) {
	var args = [].slice.call(arguments, 1),
		i = 0;

	return str.replace(/%s/g, () => args[i++]);
};
var cssToJson = function(text) {
	if (text.indexOf('.') === 0) {
		text = text.replace('.', 'mkClss');
	}
	text = text.replace(',', '_AND_');
	text = text.replace(' ', '');

	return text.replace(/-([a-z])/g, function(g) {
		return g[1].toUpperCase();
	});
};
var jsonToCss = function(text) {
	if (text.indexOf('mkClss') === 0) {
		text = text.replace('mkClss', '.');
	}
	text = text.replace('_AND_', ',');

	return text.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
};
module.exports = {
	makeTableName: makeTableName,
	idAsKey: idAsKey,
	parseMessage: parseMessage,
	jsonToCss: jsonToCss,
	cssToJson: cssToJson,
};
