var makeTableName = function(req) {
    return req.params.app + "_" + req.params.table
}

module.exports = {
    makeTableName: makeTableName
}