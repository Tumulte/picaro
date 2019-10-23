var models = require('../models/models.js');
var createCheckbox = function createCheckbox(optionsList, name) {
	var html = '';
	optionsList.forEach(function(option) {
		html += '<input name="' + name + '" type="checkbox" value="' + option.value + '">' + option.text;
	});
	return html;
};
var createTags = function createCheckbox(optionsList, name) {
	var html =
		'<span v-for="(tag, index) in tagCollection">{{tag}}<span @click="removeTag(index)">(remove)</span></span>';

	html += '<input type="text"  @keypress.enter.stop.prevent="addTag($event)">';
	html += '<input type="text" name="new_tag_" v-model="tagStringCollection">';

	return html;
};
var makeAttribute = function makeAttribute(attributesList) {
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
			html += createTags(tableRow.options, row);
		} else {
			html +=
				'<input ' +
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
	return html;
};
module.exports = tableToForm;
