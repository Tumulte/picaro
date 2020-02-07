import shortid from "shortid";
import {makeTableName} from "./utils";

const filterFromQuery = function filterFromQuery(o, query) {
    for (let property in query) {
        const reqQuery = query[property];
        if (property === "tag_" && o.tags_) {
            return o.tags_.indexOf(reqQuery) !== -1;
        } else if (query) {
            return o[property] === reqQuery;
        }
    }
    return true;
};
const trimAroundComma = function (data) {
    if (typeof data === "string") {
        return data.replace(", ", ",").replace(" ,", ",");
    }
    return data;
};
/**
 * This is used to get data with its one-to-one relationships.
 * Any field like foo_: bar (mind the "_") will be replaced by object
 * identified by the id "bar" from this table "foo"
 */
/**
 *
 * @param {*} db
 * @param {*} req
 * @class
 */
const RelationHandler = function RelationHandler(db, req) {
    this.data = {};
    const appName = req.params.app;

    const relationEndMarker = "_";
    const replaceIDByData = function (data, item, db) {
        let dbQuery = false;
        if (data[item] === false) {
            return dbQuery;
        } else if (typeof data[item] === "string") {
            let table = item.replace("_", "s");

            dbQuery = db
                .get(`${appName}_${table}`)
                .find({
                    id: data[item],
                })
                .value();
        } else if (typeof data[item] !== "undefined") {
            table = item.replace("_", "s");

            dbQuery = db
                .get(`${appName}_${table}`)
                .filter(function (o) {
                    return data[item].indexOf(o.id) !== -1;
                })
                .value();
        }
        return dbQuery;
    };
    const findRelationnalProperties = function (data, db) {
        for (let item in data) {
            const lastChar = item.substr(item.length - 1);
            if (data[item] !== null && typeof data[item] === "object" && data[item].hasOwnProperty("id")) {
                data[item] = findRelationnalProperties(data[item], db);
            } else if (lastChar === relationEndMarker) {
                const table = item.replace("_", "s");

                data[table] = replaceIDByData(data, item, db);
            }
        }
        return data;
    };
    const detachObject = function (data) {
        data = JSON.parse(JSON.stringify(data));
        return data;
    };
    this.get = function () {
        if (typeof req.params.itemId !== "undefined") {
            this.data = db
                .get(makeTableName(req))
                .find({
                    id: req.params.itemId,
                })
                .value();
        } else {
            this.data = db
                .get(makeTableName(req))
                .filter(function (o) {
                    return filterFromQuery(o, req.query);
                })
                .value();
        }

        return this;
    };
    this.getRelations = function () {
        if (typeof this.data === "undefined") {
            return (this.data = false);
        }
        const data = detachObject(this.data);
        this.data = findRelationnalProperties(data, db);
        return this.data;
    };
};

//POST HANDLER
const DataWriteHandler = function DataWriteHandler(db, req) {
    const saveNewRelations = function (db, data, appname) {
        data.forEach(function (element) {
            const table = element.type.replace("_", "s");
            if (element.hasOwnProperty("id") && element.id) {
                db.get(`${appname}_${table}`)
                    .push({
                        id: element.id,
                        name: element.name,
                        model: element.model,
                    })
                    .write();
            }
        });
    };
    const standardizePostData = function (data) {
        this.data = data;
        this.relations = [];

        this.data["id"] = shortid.generate();

        const addExistingID = function (item) {
            const attributeName = item.replace("existing_", "");
            let idCollection = this.data[item].split("__")[1];
            if (idCollection.indexOf(",") !== -1) {
                idCollection = idCollection.split(",");
            }
            this.data[attributeName] = idCollection;
            delete this.data[item];
            return this;
        };
        const handleNewRelations = function (item) {
            if (this.data[item] === "") {
                return false;
            } else if (typeof this.data[item] === "string") {
                let relationCollection = this.data[item].split("__");
                this.data[item] = relationCollection[1].split(",");
            }

            const newRelationsID = [];

            this.data[item].forEach(function (element) {
                const id = shortid.generate();
                newRelationsID.push(id);
                this.relations.push({
                    id: id,
                    name: element.trim(),
                    type: item.replace("new_", ""),
                    model: relationCollection[0],
                });
            });

            return newRelationsID.join();
        };
        const standardizeIdList = function (list) {
            if (list.charAt(0) === ",") {
                list = list.slice(1);
            }
            list = trimAroundComma(list);
            return list.split(",");
        };
        const concatenate = function (existingData, newData) {
            if (!existingData) {
                return newData;
            } else if (!newData) {
                return existingData;
            }
            if (typeof existingData === "string") {
                existingData = existingData.split(",");
            }

            return existingData.concat(newData);
        };
        const populateRelations = function () {
            for (let item in data) {
                if (item.indexOf("existing_") !== -1 && this.data[item] !== "") {
                    addExistingID(item);
                }
            }
            for (item in data) {
                if (item.indexOf("new_") !== -1) {
                    const attributeName = item.replace("new_", "");

                    if (!this.data[attributeName] && this.data[item] === "") {
                        this.data[attributeName] = false;
                    } else if (this.data[item] !== "") {
                        const relations = handleNewRelations(item);
                        this.data[attributeName] = concatenate(this.data[attributeName], standardizeIdList(relations));
                    }

                    delete this.data[item];
                }
            }
            return this;
        };

        populateRelations();
        return this;
    };

    this.save = function () {
        const data = standardizePostData(req.body);
        db.get(makeTableName(req))
            .push(data.data)
            .write();
        saveNewRelations(db, data.relations, req.params.app);
        return data;
    };
};

export default {
    DataWriteHandler: DataWriteHandler,
    RelationHandler: RelationHandler,
};
