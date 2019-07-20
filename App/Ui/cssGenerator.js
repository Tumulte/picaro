var utils = require('../utils');

/**
 *
 * @param {string} selector
 * @param {string} parameters
 */
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

/**
 *
 * @param {object} removedSelector
 */
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

/**
 *
 * @param {object} parameters The css parameters
 * @param {object} colorMapping A dictionary with the color corresponding to the position
 */
var makeCssString = function(parameters, colorMapping) {
	/**
	 * @type {object} an empty object to be filled with the new CSS parameters
	 */
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
/**
 *
 * @param {array} selectorCollection current selector collection
 * @param {array|false} previousSelectorCollection selector collection from the previous call of the method
 * @returns {array|false}
 */
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

/**
 *
 * @param {object} selectorCollection
 * @class
 */
var generateCss = function(selectorCollection) {
	selectorCollection = JSON.parse(JSON.stringify(selectorCollection));

	/**
	 * @type {array|false}
	 */
	var removedSelector = false;

	this.previousSelectorCollection = selectorCollection ? selectorCollection : false;

	/**
	 * @param {array} selectorCollection
	 * @param {object} colorMapping
	 */
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
