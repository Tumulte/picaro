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
module.exports = {
	makeTableName: makeTableName,
	idAsKey: idAsKey,
};
