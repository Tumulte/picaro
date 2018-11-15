var models = require("./../models/models.js");
var createCheckbox = function createCheckbox(optionsList, name) {
    var html = "";
    optionsList.forEach(function(option) {
        html +=
            '<input name="' + name + '" type="checkbox" value="' + option.value + '">' + option.text;
    });
    return html;
};
var makeAttribute = function makeAttribute(attributesList) {
    var html = "";
    for (var attribute in attributesList) {
        html += " " + attribute + '="' + attributesList[attribute] + '"';
    }
    return html;
};
var populateValue = function populateValue(data, row) {
    if (data) {
        console.info(data[row]);

        return ' value="' + data[row] + '"'
    } else {
        return "";
    }
}

var tableToForm = function tableToForm(params, data) {
    var id = params.id ? "/" + params.id : "";
    var method = params.method ? '?_method=' + params.method : '';

    var html = '<form method="post" action="/api/' + params.app + '/' + params.table + id + method + '" class="' + '' + '">';
    var currentTable = models[params.app][params.table];

    for (var row in currentTable) {
        var tableRow = currentTable[row];
        var value = populateValue(data, row);

        html +=
            "<label" +
            makeAttribute(tableRow.label.attributes) +
            ">" +
            tableRow.label.text;

        if (tableRow.type === "checkbox") {
            html += createCheckbox(tableRow.options, row);
        } else {
            html += '<input name="' + row + '" type="' + tableRow.type + '"' + value + '>';
        }
        html += "</label>";
    }
    html += '<button>Envoyer</button></form>'
    return html;
}
module.exports = {
    tableToForm: tableToForm
}