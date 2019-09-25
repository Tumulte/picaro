/**
 * @class
 */
var colorUtils = function() {
	/**
	 * @type {import("../Typings/global").Color}
	 */
	this.color;
	/**
	 *
	 * @param {string} hex #RRGGBB
	 */
	var parseHex = function(hex) {
		return parseInt(hex, 16);
	};
	/**
	 *
	 * @param {number} number
	 */
	var toHex = function(number) {
		var hex = number.toString(16);
		if (hex.length === 1) {
			hex = '0' + hex;
		}
		return hex.toUpperCase();
	};
	/**
	 * @param {import("../Typings/global").Color} color
	 */
	this.hexToRgb = function(color) {
		this.color = color;
		if (this.color.red !== undefined) {
			return this;
		}
		var hex = this.color.replace('#', '');
		if (hex.length === 3) {
			//if 3 digit hex : double each digit
			hex = hex
				.split('')
				.map(
					/**
					 *
					 * @param {string} letter
					 */
					function(letter) {
						return letter + letter + '';
					}
				)
				.join('');
		}

		var red = parseHex(hex.substring(0, 2));
		var green = parseHex(hex.substring(2, 4));
		var blue = parseHex(hex.substring(4, 6));
		this.color = {
			red: red,
			green: green,
			blue: blue,
		};
		return this;
	};
	/**
	 * @param  {import("../Typings/global").Color} color
	 */
	this.rgbToHex = function(color) {
		this.color = color;

		if (typeof this.color.red !== 'undefined') {
			this.color = '#' + toHex(this.color.red) + toHex(this.color.green) + toHex(this.color.blue);
		} else {
			//TODO generic errors for RBG or HEX
			throw new Error('The rgbToHex method require a "{red: XXX, green: YYY, blue: ZZZ}" object as input value');
		}
		return this;
	};

	this.rgbToHsl = function(color) {
		this.color = color;

		var rgbArray = [this.color.red / 255, this.color.green / 255, this.color.blue / 255];
		rgbArray.sort(function(a, b) {
			return a - b;
		});
		var min = rgbArray[0];
		var mid = rgbArray[1];
		var max = rgbArray[2];

		var light = Math.round(((min + max) * 100) / 2);
		//In case on gray
		if (max === min && mid === min) {
			this.color = {
				light: light,
				saturation: 0,
				hue: 0,
			};
			return this;
		}
		var saturation;
		if (light > 50) {
			saturation = (max - min) / (2 - max - min);
		} else {
			saturation = (max - min) / (max + min);
		}
		saturation = Math.round(saturation * 100);
		var hue;
		if (max === this.color.red / 255) {
			hue = (this.color.green - this.color.blue) / 255 / (max - min);
		} else if (max === this.color.green / 255) {
			hue = 2 + (this.color.blue - this.color.red) / 255 / (max - min);
		} else {
			hue = 4 + (this.color.red - this.color.green) / 255 / (max - min);
		}
		if (hue < 0) {
			hue = Math.round(hue * 60) + 360;
		} else {
			hue = Math.round(hue * 60);
		}

		this.color = {
			light: light,
			saturation: saturation,
			hue: hue,
		};
		return this;
	};

	this.hslToRgb = function(color) {
		this.color = color;
		var light = this.color.light / 100;
		var sat = this.color.saturation / 100;
		var hue = this.color.hue / 360;
		if (this.color.saturation === 0) {
			var lightTo255 = Math.round(light * 255);
			this.color = {
				red: lightTo255,
				green: lightTo255,
				blue: lightTo255,
			};
			return this;
		}

		var tempFormula; //I can't find what this is formula is supposed to be.
		if (light < 0.5) {
			tempFormula = light * (1 + sat);
		} else {
			tempFormula = light + sat - light * sat;
		}
		var tempFormula2 = 2 * light - tempFormula;
		var hueToRgb = function(tempFormula, tempFormula2, hue) {
			if (hue < 0) {
				hue += 1;
			} else if (hue > 1) {
				hue -= 1;
			}
			if (hue < 1 / 6) {
				return tempFormula + (tempFormula2 - tempFormula) * 6 * hue;
			} else if (hue < 1 / 2) {
				return tempFormula2;
			} else if (hue < 2 / 3) {
				return tempFormula + (tempFormula2 - tempFormula) * (2 / 3 - hue) * 6;
			} else {
				return tempFormula;
			}
		};
		var red = hueToRgb(tempFormula2, tempFormula, hue + 1 / 3);
		var green = hueToRgb(tempFormula2, tempFormula, hue);
		var blue = hueToRgb(tempFormula2, tempFormula, hue - 1 / 3);
		this.color = {
			red: Math.round(red * 255),
			green: Math.round(green * 255),
			blue: Math.round(blue * 255),
		};

		return this;
	};
	/**
	 *  @returns {colorUtils} this
	 */
	this.hexToHsl = function(color) {
		color = this.hexToRgb(color).getValueCollection();
		color = this.rgbToHsl(color).getValueCollection();
		this.color = color;

		return this;
	};
	/**
	 *  @returns {colorUtils} this
	 */
	this.hslToHex = function(color) {
		color = this.hslToRgb(color).getValueCollection();
		color = this.rgbToHex(color).getValueCollection();
		this.color = color;

		return this;
	};
	/**
	 *  @returns {colorUtils} this
	 */
	this.getString = function(color) {
		if (color) {
			this.color = color;
		}

		if (typeof this.color === 'string') {
			return this.color;
		} else if (this.color.red) {
			var rgb = 'rgb(' + this.color.red + ',' + this.color.green + ',' + this.color.blue + ')';
			return rgb;
		} else if (this.color.hue) {
			var hsl = 'hsl(' + this.color.hue + ',' + this.color.saturation + '%,' + this.color.light + '%)';
			return hsl;
		} else if (this.color.hexred) {
			var hex = '#' + this.color.hexred + this.color.hexgreen + this.color.hexblue;
			return hex;
		} else {
			throw new Error(
				'The getString method only takes Objects with the following keys : "hue, saturation, light" (with HSL values) - "hexblue, hexgreen, hexred" (with Hexadecimal RGB), "red, green, blue" (with base 256 RGB)'
			);
		}
	};
	/**
	 * @returns {Object}
	 * @param {Object=} color
	 */
	this.getValueCollection = function(color) {
		if (typeof color !== 'undefined') {
			this.color = color;
		}
		var re = new RegExp(/^#([0-9a-f]{3}){1,2}$/i);

		if (typeof this.color === 'object') {
			return this.color;
		} else if (this.color.indexOf('rgb(') > -1) {
			var colorValues = this.color.split(')')[0].split(',');
			var colorObject = { red: colorValues[0], green: colorValues[1], blue: colorValues[2] };

			return colorObject;
		} else if (this.color.indexOf('hsl(') > -1) {
			colorValues = this.color
				.split('(')[1]
				.split(')')[0]
				.split(',');
			colorObject = {
				hue: parseInt(colorValues[0]),
				saturation: parseInt(colorValues[1]),
				light: parseInt(colorValues[2]),
			};
			return colorObject;
		} else if (re.test(this.color)) {
			var hex = this.color;
			colorObject = {
				hexred: hex.substring(1, 3),
				hexgreen: hex.substring(3, 5),
				hexblue: hex.substring(5, 7),
			};
			return colorObject;
		}
	};
};

module.exports = {
	colorUtils: colorUtils,
};
