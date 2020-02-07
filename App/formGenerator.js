import models from "../models/models.js";

const createCheckbox = function (optionsList, name) {
    let html = "";
    optionsList.forEach(function (option) {
        html +=
            `<input @focus="createInput('name')" v-model="inputData['${name}']" name="${name}" type="checkbox" value="${option.value}">${option.text}`;
    });
    return html;
};
const createTags = function (optionsList, table) {
    return `<rf-tags rf-model="${table}" :rf-data="rfData"></rf-tags>`;
};
const makeAttribute = function (attributesList) {
    let html = "";
    for (let attribute in attributesList) {
        html += ` ${attribute}="${attributesList[attribute]}"`;
    }
    return html;
};
const populateValue = function populateValue(data, row) {
    if (data) {
        return ` value="${data[row]}"`;
    } else {
        return "";
    }
};

const tableToForm = function tableToForm(params, data) {
    const id = params.id ? `/${params.id}` : "";
    const method = params.method ? `?_method=${params.method}` : "";
    let type = "";
    let html =
        `<form @submit.prevent="sendForm($event)" method="post" action="/api/${params.app}/${params.table}${id}${method}" class="">`;
    const currentTable = models[params.app][params.table];

    for (let row in currentTable) {
        const tableRow = currentTable[row];
        const value = populateValue(data, row);

        html += `<label${makeAttribute(tableRow.label.attributes)}>${tableRow.label.text}`;

        if (tableRow.type === "checkbox") {
            html += createCheckbox(tableRow.options, row);
        }
        if (tableRow.type === "tags") {
            html += createTags(tableRow.options, params.table);
            type = "hasTags";
        } else {
            html +=
                `<input @focus="createInput('${row}')"  v-model="inputData['${row}']"${makeAttribute(tableRow.attributes)} name="${row}" type="${tableRow.type}"${value}>`;
        }
        html += "</label>";
    }
    html += "<button>Envoyer</button></form>";
    return {template: html, type: type};
};
export default tableToForm;
