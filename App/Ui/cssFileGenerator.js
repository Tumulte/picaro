var fs = require('fs');
var colors = require('./colorGenerator');
var getColor = function(coordinates, colorSet) {
	if (/^\[\d,\d\]$/.test(JSON.stringify(coordinates))) {
		return colorSet.combinationCollection[coordinates[0]].subCombination[coordinates[1]].hex;
	}
	return coordinates;
};
var generateCSSFile = function(appName, styleSet) {
	var customCSS = JSON.parse(styleSet.selectorSetParamString);
	var colorSet = new colors.generateColorSet(styleSet.dominant).generate(
		JSON.parse(styleSet.colorSetParamString),
		parseInt(styleSet.variationLightAmt),
		parseInt(styleSet.variationSatAmt)
	);
	var colorVariable = '';
	for (var i = 0; i < colorSet.combinationCollection.length; i++) {
		colorVariable += '  --combination' + i + ':' + colorSet.combinationCollection[i].hex + ';\n';
		for (var j = 0; j < colorSet.combinationCollection[i].subCombination.length; j++) {
			colorVariable +=
				'  --combination' + i + '-' + j + ':' + colorSet.combinationCollection[i].subCombination[j].hex + ';\n';
		}
	}

	var generatedCSS = '/* This is automatically generated CSS, do not edit */\n';
	generatedCSS += ':root {\n';
	generatedCSS += '  --dominant : ' + styleSet.dominant + ';\n';
	generatedCSS += colorVariable;
	generatedCSS += '}\n';

	for (var selector in customCSS) {
		generatedCSS += selector + '{\n';
		for (var property in customCSS[selector]) {
			generatedCSS += '  ' + property + ':' + getColor(customCSS[selector][property], colorSet) + ';\n';
		}
		generatedCSS += '}\n';
	}
	generatedCSS += '/* This is automatically generated CSS, do not edit */';

	fs.writeFile(__dirname + '../../../static/' + appName + '/baseStyle.css', generatedCSS, function(err) {
		throw err;
	});
};

module.exports = {
	generateCSSFile: generateCSSFile,
};
