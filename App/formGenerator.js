var models = require('../models/models.js');

var createCheckbox = function(optionsList, name) {
	var html = '';
	optionsList.forEach(function(option) {
		html +=
			'<input @focus="createInput(\'name\')" v-model="inputData[\'' +
			name +
			'\']" name="' +
			name +
			'" type="checkbox" value="' +
			option.value +
			'">' +
			option.text;
	});
	return html;
};
var createTags = function(optionsList, table) {
	var html = '<rf-tags rf-model="' + table + '" :rf-data="rfData"></rf-tags>';
	return html;
};
var makeAttribute = function(attributesList) {
	var html = '';
	for (var attribute in attributesList) {
		html += ' ' + attribute + '="' + attributesList[attribute] + '"';
	}
	return html;
};
var populateValue = function populateValue(data, row) {
	if (data) {
		return ' value="' + data[row] + '"';
	} else {
		return '';
	}
};

var tableToForm = function tableToForm(params, data) {
	var id = params.id ? '/' + params.id : '';
	var method = params.method ? '?_method=' + params.method : '';
	var type = '';
	var html =
		'<form @submit.prevent="sendForm($event)" method="post" action="/api/' +
		params.app +
		'/' +
		params.table +
		id +
		method +
		'" class="' +
		'' +
		'">';
	var currentTable = models[params.app][params.table];

	for (var row in currentTable) {
		var tableRow = currentTable[row];
		var value = populateValue(data, row);

		html += '<label' + makeAttribute(tableRow.label.attributes) + '>' + tableRow.label.text;

		if (tableRow.type === 'checkbox') {
			html += createCheckbox(tableRow.options, row);
		}
		if (tableRow.type === 'tags') {
			html += createTags(tableRow.options, params.table);
			type = 'hasTags';
		} else {
			html +=
				'<input @focus="createInput(\'' +
				row +
				'\')"  v-model="inputData[\'' +
				row +
				'\']"' +
				makeAttribute(tableRow.attributes) +
				' name="' +
				row +
				'" type="' +
				tableRow.type +
				'"' +
				value +
				'>';
		}
		html += '</label>';
	}
	html += '<button>Envoyer</button></form>';
	return { template: html, type: type };
};
module.exports = tableToForm;
