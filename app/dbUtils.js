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
}

function trimAroundComma(data) {
    if (typeof data === "string") {
        return data.replace(", ", ",").replace(" ,", ",");
    }
    return data;
}
/**
 * This is used to get data with its one-to-one relationships.
 * Any field like foo_: bar (mind the "_") will be replaced by object 
 * identified by the id "bar" from this table "foo"
 */
class RelationHandler {
    constructor(db, req) {
        this.relationMarker = "_";
        this.data = {};
        this.relations = [];
        this.db = db;
        this.req = req;
    }
    /**
     * @param {object} _replaceIDByData.data The data from the original query
     * @param {number|string} _replaceIDByData.item The field containing the id to look for
     */
    _replaceIDByData(data, item) {
        var dbQuery = false
        if (data[item] === false) {
            return dbQuery;
        } else if (typeof data[item] === "string") {
            var table = item.replace("_", "s");
            dbQuery = this.db.get(table).find({
                "id": data[item]
            }).value();
        } else if (typeof data[item] !== 'undefined') {
            table = item.replace("_", "");
            dbQuery = this.db.get(table).filter(function(o) {
                return data[item].indexOf(o.id) !== -1
            }).value();
        }
        return dbQuery;
    }
    _findRelationnalProperties(data, db) {

        for (var item in data) {
            var lastChar = item.substr(item.length - 1);
            if (data[item] !== null && typeof data[item] === "object" && data[item].hasOwnProperty("id")) {
                data[item] = this._findRelationnalProperties(data[item], db);
            } else if (lastChar === this.relationMarker) {
                var table = item.replace("_", "");

                data[table] = this._replaceIDByData(data, item);
            }
        }
        return data
    }
    _detachObject(data) {
        data = JSON.parse(JSON.stringify(data));
        return data;
    }

    //Public
    get() {
        var self = this;
        if (typeof this.req.params.elemID !== "undefined") {
            this.data = this.db.get(this.req.params.table).find({
                "id": this.req.params.elemID
            }).value();
        } else {
            this.data = this.db.get(this.req.params.table).filter(function(o) {
                return filterFromQuery(o, self.req.query);
            }).value();
        }

        return this;
    }
    getRelations() {
        if (typeof this.data === "undefined") {
            return this.data = false;
        }
        var data = this._detachObject(this.data);
        data = this._findRelationnalProperties(data, this.db);
        return data;
    }
}

//POST HANDLER
var DataWriteHandler = function(db, req) {

    var saveNewRelations = function(db, data) {
        data.forEach(function(element) {
            var table = element.type.replace("_", "");
            if (element.hasOwnProperty("id") && element.id) {
                db.get(table).push({
                    id: element.id,
                    name: element.name
                }).write();
            }
        });
    }
    var standardizePostData = function(data) {
        this.relations = [];
        this.data = data;

        data["id"] = shortid.generate();

        var addExistingID = function(item) {
            var attributeName = item.replace("existing_", "");
            data[attributeName] = data[item];
            delete data[item];
            return this;
        };
        var handleNewRelations = function(item) {
            if (data[item] === "") {
                return false;
            } else if (typeof data[item] === "string") {
                data[item] = data[item].split(',');
            }

            var newRelationsID = "";

            data[item].forEach(function(element) {
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
        var standardizeIdList = function(list) {
            if (list.charAt(0) === ',') {
                list = list.slice(1);
            }
            list = trimAroundComma(list);
            return list.split(',');
        }

        var populateRelations = function() {
            for (var item in data) {
                if (item.indexOf("existing_") !== -1) {
                    addExistingID(item);
                }
            }
            for (item in data) {
                if (item.indexOf("new_") !== -1) {
                    var attributeName = item.replace("new_", "");
                    if (!data[attributeName] && data[item] === "") {
                        data[attributeName] = false;
                    } else {
                        var relations = handleNewRelations(item);
                        var idList = data[attributeName] += relations;
                        data[attributeName] = standardizeIdList(idList);
                    }

                    delete data[item];

                }
            }
            return this
        }

        populateRelations();
        return this;
    }
    this.save = function() {
        var data = standardizePostData(req.body);
        db.get(req.params.app + '_' + req.params.table).push(
            data.data
        ).write();
        saveNewRelations(db, data.relations);
        return data;
    }
}
module.exports = {
    DataWriteHandler: DataWriteHandler,
    RelationHandler: RelationHandler
}