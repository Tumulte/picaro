var models = require("./../models/models.js");
var createCheckbox = function createCheckbox(optionsList) {
    var html = "";
    optionsList.forEach(function(option) {
        html +=
            '<input type="checkbox" value="' + option.value + '">' + option.text;
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

var tableToForm = function tableToForm(params) {
    var html = '<form action="' + params.action + '" method="/api/' + models[params.app] + '/' + [params.table] + '" class="' + '' + '">';
    var currentTable = models[params.app][params.table];
    for (var row in currentTable) {
        var tableRow = currentTable[row];
        html +=
            "<label" +
            makeAttribute(tableRow.label.attributes) +
            ">" +
            tableRow.label.text;

        if (tableRow.type === "checkbox") {
            html += createCheckbox(tableRow.options);
        } else {
            html += '<input type="' + tableRow.type + '" >';
        }
        html += "</label>";
    }
    html += '</form>'
    return html;
}
module.exports = {
    tableToForm: tableToForm
}