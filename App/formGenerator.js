import models from "./../models/models.json"

export default function tableToForm(app, table) {
    var html = "";
    var currentTable = models[app][table];
    for (var row in currentTable) {

        html += '<input type="' + currentTable[row].type + '" >';
    }
    return html;
}