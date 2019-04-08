var render = function render(currentApplicationName, currentApplicationSettings, appDb) {
	var currentStyleset = currentApplicationSettings.styleSet;
	var styleSet = appDb
		.get(currentApplicationName)
		.find({ id: currentStyleset })
		.value();
	var cssParameters = {};
	cssParameters.fonts = [styleSet.fontFamilyMain];
	cssParameters.variables =
		':root{--font-size:' + styleSet.fontSize + 'px; --font-family-main:' + styleSet.fontFamilyMain + '}';
	return cssParameters;
};
module.exports = {
	render: render,
};
