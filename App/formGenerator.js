import models from "./../models/models.json"

export default function tableToForm(app, table) {
    var html = "";
    for (var row in models[app][table]) {
        console.info(models[app][table][row])
        html += '<input type="' + models[app][table][row].type + '" >';
    }
    return html;
}