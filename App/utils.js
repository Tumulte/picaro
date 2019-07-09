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
function parseMessage(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}
module.exports = {
	makeTableName: makeTableName,
    idAsKey: idAsKey,
    parseMessage:parseMessage
};
