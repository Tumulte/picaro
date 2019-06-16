var colorUtils = require('../colorHelper').colorUtils;

var modifyTargetDOMStyle = function(selector, parameters) {
	document.querySelectorAll('#content-container ' + selector).forEach(function(el) {
		el.setAttribute('style', parameters);
	});
};
var generateCssString = function(target, parameters, color, self) {
	var parametersString = '';
	var targetParameters = self.selectorCollection[target];

	parameters.forEach(function(item) {
		if (targetParameters && targetParameters.indexOf(item) > -1) {
			var length = item.length;
			var pos = targetParameters.indexOf(item);
			var duplicate = targetParameters.slice(pos, length + pos + 9);
			targetParameters = targetParameters.replace(duplicate, '');
		}
		parametersString += item + ':' + colorUtils.hslToHex(color).getString() + ';';
	});
	return parametersString;
};

var updateVueselectorCollection = function(target, parametersString, self) {
	if (self.selectorCollection[target]) {
		self.selectorCollection[target] += parametersString;
	} else {
		self.selectorCollection[target] = parametersString;
	}
};
var updateEachVueColorTargets = function(item, coordinates, self) {
	self.colorSet.combinationCollection[coordinates[0]].subCombination[coordinates[1]].targetCollection = item;
	self.selectorCollection.currentTarget = {};
	self.selectorCollection.currentTarget[item] = coordinates;
};
var generateCSS = function(color, index, subIndex) {
	if (!color.targetCollection) {
		return;
	}
	var coordinates = [index, subIndex];
	var targetCollection = color.targetCollection.split('|');
	var self = this;
	targetCollection.forEach(function(item) {
		var targetParameters = item.split(':');
		if (targetParameters.length < 2) {
			return;
		}
		var target = targetParameters[0];
		var parameters = targetParameters[1].split(',');
		updateEachVueColorTargets(item, coordinates, self);

		var parametersString = generateCssString(target, parameters, color, self);
		updateVueselectorCollection(target, parametersString, self);
		modifyTargetDOMStyle(target, self);
	});
};
var generateCss = function(selectorCollection) {
	for (selector in selectorCollection) {
		modifyTargetDOMStyle(selector, parameters);
	}
};
var selectorComponent = {
	data: function() {
		return {
			/* eslint-disable-next-line no-undef */
			selectorCollection: this.$store.getters.getSelectorDataCollection,
			currentSelectorProperty: {},
		};
	},
	methods: {
		storeSelectorAndProperty: function(selector, property) {
			//this.$store.commit('currentSelectorCollection', this.selectorCollection);

			this.$store.commit('currentSelector', { selector: selector, property: property });
		},
	},
	mounted: function() {
		generateCss(this.selectorCollection);
	},
};
module.exports = {
	selectorComponent: selectorComponent,
};
