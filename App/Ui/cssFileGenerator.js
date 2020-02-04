var fs = require('fs');
var colors = require('./colorGenerator');
var utils = require('../utils');

/**
 *
 * @param {string} coordinates,
 * @param {Object} colorSet The vueX colorSet object
 * @param {Object} colorSet.combinationCollection,
 * @param {string} colorSet.dominant
 * @returns {string} - the Hex of the color
 */
var getParameter = function (coordinates, styleSet) {
	if (coordinates.includes('{"type":"color",')) {
		coordinates = JSON.parse(coordinates);
		var coordinate = coordinates.data[0]
		var subCoordinate = coordinates.data[1]
		if (typeof coordinate === 'string') {
			return styleSet[coordinate + 'SubCollection'][subCoordinate].hex
		} else {
			return styleSet.combinationCollection[coordinate].subCombination[subCoordinate].hex;
		}
	} else if (coordinates.includes('{"type":"ratio",')) {
		var ratioCollection = JSON.parse(styleSet.ratioCollectionString);
		coordinates = JSON.parse(coordinates);
		return utils.makeRatio(ratioCollection[coordinates.data])

	}
	return coordinates;
};

/**
 *
 * @param {string} font The name of the google font.
 */
var addGoogleFont = function (font) {
	return '@import url("https://fonts.googleapis.com/css?family=' + encodeURI(font) + '&display=swap");\n';
};

/**
 * Writes the CSS file of the application in the corresponding static folder
 *
 * @param {string} appName The application name
 * @param {Object} styleSet The current selected app styleset
 */
var generateCSSFile = function (appName, styleSet) {
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
	generatedCSS += addGoogleFont(styleSet.fontFamilyMain);
	generatedCSS += addGoogleFont(styleSet.fontFamilyTitle);

	generatedCSS += 'html {\n';
	generatedCSS += '  font-size: ' + styleSet.fontSize + ';\n';
	generatedCSS += '  font-family: "' + styleSet.fontFamilyMain + '";\n';
	generatedCSS += '}\n';
	generatedCSS += 'h1, h2, h3, h4, h5, h6 {\n';
	generatedCSS += '  font-family: "' + styleSet.fontFamilyTitle + '";\n';
	generatedCSS += '}\n';
	for (var selector in customCSS) {
		var prefixId = '.rf-content-container ';
		var selectorText = utils.jsonToCss(selector);
		var extraParameters = '';
		if (selector === 'body') {
			selectorText = '';
			extraParameters = '  height: 100%;\n';
		} else if (selector === 'html') {
			prefixId = '';
		}
		generatedCSS += prefixId + selectorText + '{\n';
		for (var property in customCSS[selector]) {
			generatedCSS +=
				'  ' +
				utils.jsonToCss(property) +
				':' +
				getParameter(JSON.stringify(customCSS[selector][property]), colorSet) +
				';\n';
		}
		generatedCSS += extraParameters;
		generatedCSS += '}\n';
	}
	generatedCSS += '/* This is automatically generated CSS, do not edit */';
	generatedCSS = utils.makeFontFamilyName(generatedCSS);

	fs.writeFile(__dirname + '../../../static/' + appName + '/baseStyle.css', generatedCSS, function (err) {
		throw err;
	});
};

module.exports = {
	generateCSSFile: generateCSSFile,
};