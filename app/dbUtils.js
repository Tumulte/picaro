var shortid = require('shortid');

var filterFromQuery = function filterFromQuery(o, query) {
    for (var property in query) {
        var reqQuery = query[property];
        if (property === "tag_" && o.tags_) {
            return o.tags_.indexOf(reqQuery) !== -1;
        } else if (query) {
            return o[property] === reqQuery;
        }
    }
    return true;
};
var trimAroundComma = function trimAroundComma(data) {
    if (typeof data === "string") {
        return data.replace(", ", ",").replace(" ,", ",");
    }
    return data;
}
//GET HANDLER
var dataHandler = function (db, req) {

    this.data = {};

    var relationEndMarker = "_";
    var replaceIDByData = function (data, item, db) {
        var dbQuery = false
        if (data[item] === false) {
            return dbQuery;
        } else if (typeof data[item] === "string") {
            var table = item.replace("_", "s");
            dbQuery = db.get(table).find({
                "id": data[item]
            }).value();
        } else if (typeof data[item] !== 'undefined') {
            table = item.replace("_", "");
            dbQuery = db.get(table).filter(function (o) {
                return data[item].indexOf(o.id) !== -1
            }).value();
        }
        return dbQuery;
    }
    var findRelationnalProperties = function (data, db) {

        for (var item in data) {
            var lastChar = item.substr(item.length - 1);
            if (data[item] !== null && typeof data[item] === "object" && data[item].hasOwnProperty("id")) {
                data[item] = findRelationnalProperties(data[item], db);
            } else if (lastChar === relationEndMarker) {
                var table = item.replace("_", "");

                data[table] = replaceIDByData(data, item, db);
            }
        }
        return data
    }
    var detachObject = function (data) {
        data = JSON.parse(JSON.stringify(data));
        return data;
    }
    this.get = function () {
        if (typeof req.params.quoteId !== "undefined") {
            this.data = db.get(req.params.table).find({
                "id": req.params.quoteId
            }).value();
        } else {
            this.data = db.get(req.params.table).filter(function (o) {
                return filterFromQuery(o, req.query);
            }).value();
        }

        return this;
    }
    this.getRelations = function () {
        if (typeof this.data === "undefined") {
            return this.data = false;
        }
        var data = detachObject(this.data);
        this.data = findRelationnalProperties(data, db);
        return this.data;
    }
}

//POST HANDLER
var dataWriteHandler = function (db, req) {
    var saveNewRelations = function (db, data) {
        data.forEach(function (element) {
            var table = element.type.replace("_", "");
            if (element.hasOwnProperty("id") && element.id) {
                db.get(table).push({
                    id: element.id,
                    name: element.name
                }).write();
            }
        });
    }
    var standardizePostData = function (data) {
        this.data = data;
        this.relations = [];

        this.data["id"] = shortid.generate();


        var addExistingID = function (item) {
            var attributeName = item.replace("existing_", "");
            this.data[attributeName] = this.data[item];
            delete this.data[item];
            return this;
        };
        var handleNewRelations = function (item) {
            if (this.data[item] === "") {
                return false;
            } else if (typeof this.data[item] === "string") {
                this.data[item] = this.data[item].split(',');
            }

            var newRelationsID = "";

            this.data[item].forEach(function (element) {
                var id = shortid.generate();
                newRelationsID += "," + id;
                this.relations.push({
                    "id": id,
                    "name": element.trim(),
                    "type": item.replace("new_", "")
                });
            });
            return newRelationsID

        };
        var standardizeIdList = function (list) {
            if (list.charAt(0) === ',') {
                list = list.slice(1);
            }
            list = trimAroundComma(list);
            return list.split(',');
        }

        var populateRelations = function () {
            for (var item in data) {
                if (item.indexOf("existing_") !== -1) {
                    addExistingID(item);
                }
            }
            for (item in data) {
                if (item.indexOf("new_") !== -1) {
                    var attributeName = item.replace("new_", "");
                    if (!this.data[attributeName] && this.data[item] === "") {
                        this.data[attributeName] = false;
                    } else {
                        var relations = handleNewRelations(item);
                        var idList = this.data[attributeName] += relations;
                        this.data[attributeName] = standardizeIdList(idList);
                    }

                    delete this.data[item];

                }
            }
            return this
        }

        populateRelations();
        return this;
    }


    this.save = function () {
        var data = standardizePostData(req.body);
        db.get(req.params.table).push(
            data.data
        ).write();
        saveNewRelations(db, data.relations);
        return data;
    }
}

module.exports = {
    "dataHandler": dataHandler,
    "dataWriteHandler": dataWriteHandler
};