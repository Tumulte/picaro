var colors = require('../Ui/colorGenerator');

var render = function render(styleSet, colorSet) {
	var cssParameters = {};
	var cssParametersDefault = {
		'--font-size': styleSet.fontSize + 'px',
		'--font-family-main': styleSet.fontFamilyMain,
		'--color-dominant': styleSet.dominantColor,
	};
	var colorSet = new colors.generateColorSet(styleSet.dominantColor).generate(colorSet.combinationCollection);

	for (var i = 0; i < colorSet.combinationCollection.length; i++) {
		cssParametersDefault['--color-combination-' + i] = colorSet.combinationCollection[i].hex;
	}
	var parseToCssString = function() {
		var string = ':root{';
		for (var parameter in cssParametersDefault) {
			string += parameter + ':';
			if (cssParametersDefault[parameter].indexOf(' ') > -1) {
				string += '"' + cssParametersDefault[parameter] + '";';
			} else {
				string += cssParametersDefault[parameter] + ';';
			}
		}
		string += '}';

		return string;
	};
	cssParameters.fonts = [styleSet.fontFamilyMain];
	cssParameters.variables = parseToCssString(cssParametersDefault);

	return cssParameters;
};
module.exports = {
	render: render,
};
