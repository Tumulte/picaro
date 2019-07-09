var modifyTargetDOMStyle = function(selector, parameters) {
	document.querySelectorAll(selector).forEach(function(el) {
		el.setAttribute('style', parameters);
	});
};
var removeUnusedStyle = function(removedSelector) {
	for (var selector in removedSelector) {
		document.querySelectorAll('#content-container ' + removedSelector[selector]).forEach(function(el) {
			el.setAttribute('style', '');
		});
	}
};
var makeCssString = function(parameters, colorMapping) {
	for (var parameter in parameters) {
		parameters = JSON.parse(JSON.stringify(parameters));
		if (typeof parameters[parameter] === 'object') {
			parameters[parameter] = colorMapping[JSON.stringify(parameters[parameter])];
		}
	}
	var string = JSON.stringify(parameters);
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
