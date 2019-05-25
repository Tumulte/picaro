var colorUtils = function() {
	var parseHex = function(hex) {
		return parseInt(hex, 16);
	};

	var toHex = function(number) {
		var hex = number.toString(16);
		if (hex.length === 1) {
			hex = '0' + hex;
		}
		return hex.toUpperCase();
	};
	this.hexToRgb = function(color) {
		this.color = color;

		if (this.color.red !== undefined) {
			return this.color;
		}
		var hex = this.color.replace('#', '');
		if (hex.length === 3) {
			//if 3 digit hex : double each digit
			hex = hex
				.split('')
				.map(function(letter) {
					return letter + letter + '';
				})
				.join('');
		}

		var red = parseHex(hex.substring(0, 2));
		var green = parseHex(hex.substring(2, 4));
		var blue = parseHex(hex.substring(4, 6));
		this.color = {
			red: red,
			green: green,
			blue: blue,
			type: 'rgb',
		};
		return this;
	};
	this.rgbToHex = function(color) {
		this.color = color;

		if (typeof this.color.red !== 'undefined') {
			this.color = '#' + toHex(this.color.red) + toHex(this.color.green) + toHex(this.color.blue);
		} else {
			//TODO generic errors for RBG or HEX
			/* eslint-disable-next-line no-console */
			console.error('The rgbToHex method require a "{red: XXX, green: YYY, blue: ZZZ}" object as input value');
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
				type: 'hsl',
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
			type: 'hsl',
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
				type: 'rgb',
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
			type: 'rgb',
		};

		return this;
	};
	this.hexToHsl = function(color) {
		color = this.hexToRgb(color).getValueCollection();

		color = this.rgbToHsl(color).getValueCollection();
		this.color = color;

		return this;
	};
	this.hslToHex = function(color) {
		color = this.hslToRgb(color).getValueCollection();

		color = this.rgbToHex(color).getValueCollection();
		this.color = color;
		return this;
	};
	this.getString = function(color, type) {
		if (color) {
			this.color = color;
			this.color.type = type;
		}
		if (typeof this.color === 'string') {
			return this.color;
		} else if (this.color.red === 'rgb') {
			var rgb = 'rgb(' + this.color.red + ',' + this.color.green + ',' + this.color.blue + ')';
			return rgb;
		} else if (this.color.type === 'hsl') {
			var hsl = 'hsl(' + this.color.hue + ',' + this.color.saturation + '%,' + this.color.light + '%)';
			return hsl;
		} else if (this.color.type === 'hex') {
			var hex = '#' + this.color.red + this.color.green + this.color.blue;
			return hex;
		}
	};
	this.getValueCollection = function() {
		var re = new RegExp(/^#([0-9a-f]{3}){1,2}$/i);

		if (typeof this.color === 'object') {
			return this.color;
		} else if (this.color.indexOf('rgb(') > -1) {
			var colorType = this.color.split('(')[0];
			var colorValues = this.color.split(')')[0].split(',');
			var colorObject = { type: colorType, red: colorValues[0], green: colorValues[1], blue: colorValues[2] };

			return colorObject;
		} else if (this.color.indexOf('hsl(') > -1) {
			colorType = this.color.split('(')[0];
			colorValues = this.color.split(')')[0].split(',');
			colorObject = {
				type: colorType,
				hue: colorValues[0],
				saturation: colorValues[1],
				light: colorValues[2],
			};
			return colorObject;
		} else if (re.test(this.color)) {
			var hex = this.color;
			colorObject = {
				type: 'hex',
				red: hex.substring(1, 3),
				green: hex.substring(3, 5),
				blue: hex.substring(5, 7),
			};
			return colorObject;
		}
	};
};

module.exports = {
	colorUtils: colorUtils,
};
