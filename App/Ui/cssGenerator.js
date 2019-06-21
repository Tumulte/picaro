var modifyTargetDOMStyle = function(selector, parameters) {
	document.querySelectorAll('#content-container ' + selector).forEach(function(el) {
		el.setAttribute('style', parameters);
	});
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
var generateCss = function(selectorCollection, colorMapping) {
	for (var selector in selectorCollection) {
		modifyTargetDOMStyle(selector, makeCssString(selectorCollection[selector], colorMapping));
	}
};
module.exports = {
	generateCss: generateCss,
};
