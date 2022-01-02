"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.array.find.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.slice.js");

var _nanoid = require("nanoid");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var RelationHandler = function RelationHandler(db, req) {
  this.data = {};
  var appName = req.params.app;
  var relationEndMarker = "_";

  var replaceIDByData = function replaceIDByData(data, item, db) {
    var dbQuery = false;

    if (data[item] === false) {
      return dbQuery;
    } else if (typeof data[item] === "string") {
      var table = item.replace("_", "s");
      dbQuery = db.get("".concat(appName, "_").concat(table)).find({
        id: data[item]
      }).value();
    } else if (typeof data[item] !== "undefined") {
      var _table = item.replace("_", "s");

      dbQuery = db.get("".concat(appName, "_").concat(_table)).filter(function (o) {
        return data[item].indexOf(o.id) !== -1;
      }).value();
    }

    return dbQuery;
  };

  var detachObject = function detachObject(data) {
    data = JSON.parse(JSON.stringify(data));
    return data;
  };

  this.get = function () {
    if (typeof req.params.itemId !== "undefined") {
      this.data = db.get((0, _utils.makeTableName)(req)).find({
        id: req.params.itemId
      }).value();
    } else {
      this.data = db.get((0, _utils.makeTableName)(req)).filter(function (o) {
        return filterFromQuery(o, req.query);
      }).value();
    }

    return this;
  };

  this.getRelations = function () {
    if (typeof this.data === "undefined") {
      return this.data = false;
    }

    var data = detachObject(this.data);
    this.data = findRelationnalProperties(data, db);
    return this.data;
  };
}; //POST HANDLER


var DataWriteHandler = /*#__PURE__*/function () {
  function DataWriteHandler(db, req) {
    _classCallCheck(this, DataWriteHandler);

    this.db = db;
    this.req = req;
  }

  _createClass(DataWriteHandler, [{
    key: "standardizePostData",
    value: function standardizePostData(data) {
      this.data = data;
      this.relations = [];
      this.data["id"] = (0, _nanoid.nanoid)();

      var addExistingID = function addExistingID(item) {
        var attributeName = item.replace("existing_", "");
        var idCollection = this.data[item].split("__")[1];

        if (idCollection.indexOf(",") !== -1) {
          idCollection = idCollection.split(",");
        }

        this.data[attributeName] = idCollection;
        delete this.data[item];
        return this;
      };

      var handleNewRelations = function handleNewRelations(item) {
        if (this.data[item] === "") {
          return false;
        } else if (typeof this.data[item] === "string") {
          var relationCollection = this.data[item].split("__");
          this.data[item] = relationCollection[1].split(",");
        }

        var newRelationsID = [];
        this.data[item].forEach(function (element) {
          var id = (0, _nanoid.nanoid)();
          newRelationsID.push(id);
          this.relations.push({
            id: id,
            name: element.trim(),
            type: item.replace("new_", "")
          });
        });
        return newRelationsID.join();
      };

      var standardizeIdList = function standardizeIdList(list) {
        if (list.charAt(0) === ",") {
          list = list.slice(1);
        }

        list = trimAroundComma(list);
        return list.split(",");
      };

      var concatenate = function concatenate(existingData, newData) {
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

      var populateRelations = function populateRelations() {
        for (var item in data) {
          if (item.indexOf("existing_") !== -1 && this.data[item] !== "") {
            addExistingID(item);
          }
        }

        for (var _item in data) {
          if (_item.indexOf("new_") !== -1) {
            var attributeName = _item.replace("new_", "");

            if (!this.data[attributeName] && this.data[_item] === "") {
              this.data[attributeName] = false;
            } else if (this.data[_item] !== "") {
              var relations = handleNewRelations(_item);
              this.data[attributeName] = concatenate(this.data[attributeName], standardizeIdList(relations));
            }

            delete this.data[_item];
          }
        }

        return this;
      };

      populateRelations();
      return this;
    }
  }, {
    key: "save",
    value: function save() {
      var data = this.standardizePostData(this.req.body);
      this.db.get((0, _utils.makeTableName)(this.req)).push(data.data).write();
      this.saveNewRelations(this.db, data.relations, this.req.params.app);
      return data;
    }
  }]);

  return DataWriteHandler;
}();

var _default = {
  DataWriteHandler: DataWriteHandler,
  RelationHandler: RelationHandler
};
exports.default = _default;