var utils = require('../utils');

var modifyTargetDOMStyle = function(selector, parameters) {
	var prefixId = '#rf-content-container ';
	if (selector === 'body') {
		selector = '';
		parameters += ';height: 100%';
	} else if (selector === 'html') {
		prefixId = '';
	}
	document.querySelectorAll(prefixId + utils.toHyphen(selector)).forEach(function(el) {
		el.setAttribute('style', parameters);
	});
};
var removeUnusedStyle = function(removedSelector) {
	for (var selector in removedSelector) {
		var prefixId = '#rf-content-container ';
		if (selector === 'body') {
			removedSelector[selector] = '';
		} else if (selector === 'html') {
			prefixId = '';
		}
		document.querySelectorAll(prefixId + removedSelector[utils.toHyphen(selector)]).forEach(function(el) {
			el.setAttribute('style', '');
		});
	}
};
var makeCssString = function(parameters, colorMapping) {
	var HTMLParameters = {};

	for (var parameter in parameters) {
		parameters = JSON.parse(JSON.stringify(parameters));
		if (typeof parameters[parameter] === 'object') {
			parameters[parameter] = colorMapping[JSON.stringify(parameters[parameter])];
		}
		HTMLParameters[utils.toHyphen(parameter)] = parameters[parameter];
	}
	var string = JSON.stringify(HTMLParameters);
	return string.replace(/,/g, ';').replace(/["{}]/g, '');
};
var extractRemovedSelector = function(selectorCollection, previousSelectorCollection) {
	previousSelectorCollection = JSON.parse(JSON.stringify(previousSelectorCollection));

	var removedSelector = [];
	if (typeof previousSelectorCollection !== 'object') {
		return false;
	}
	for (var key in previousSelectorCollection) {
		if (!(key in selectorCollection)) {
			removedSelector.push(key);
		}
	}
	return removedSelector;
};
var generateCss = function(selectorCollection) {
	selectorCollection = JSON.parse(JSON.stringify(selectorCollection));
	var removedSelector = false;
	this.previousSelectorCollection = selectorCollection ? selectorCollection : false;

	this.apply = function(selectorCollection, colorMapping) {
		removedSelector = extractRemovedSelector(selectorCollection, this.previousSelectorCollection);
		removeUnusedStyle(removedSelector);
		this.previousSelectorCollection = JSON.parse(JSON.stringify(selectorCollection));

		for (var selector in selectorCollection) {
			modifyTargetDOMStyle(selector, makeCssString(selectorCollection[selector], colorMapping));
		}
	};
};
module.exports = {
	generateCss: generateCss,
};
