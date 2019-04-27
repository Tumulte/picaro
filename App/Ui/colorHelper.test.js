var colorUtils = require('./colorHelper').colorUtils;

var pink = '#EA05CA';
var grey = '777777';
var green = '4B2';
var darkBlue = '#148';

colorUtils = new colorUtils();

describe('hexadecimal is converted to decimal', () => {
	it('return the decimal values', () => {
		var rgb = colorUtils.hexToRgb(pink).getValueCollection();
		expect(rgb.red).toEqual(234);
		expect(rgb.green).toEqual(5);
		expect(rgb.blue).toEqual(202);
	});
});

describe('The hexa is converted to HSL', () => {
	it('return the HSL of a clear value', () => {
		expect(colorUtils.hexToHsl(pink).getValueCollection()).toEqual({
			light: 47,
			saturation: 96,
			hue: 308,
			type: 'hsl',
		});
	});
	it('return the HSL of a 3 digit dark value', () => {
		expect(colorUtils.hexToHsl(darkBlue).getValueCollection()).toEqual({
			light: 30,
			saturation: 78,
			hue: 214,
			type: 'hsl',
		});
	});
	it('return the HSL of a 3 digit value with no #', () => {
		expect(colorUtils.hexToHsl(green).getValueCollection()).toEqual({
			light: 43,
			saturation: 69,
			hue: 107,
			type: 'hsl',
		});
	});
	it('return the HSL of achromatic color with no #', () => {
		expect(colorUtils.hexToHsl(grey).getValueCollection()).toEqual({
			light: 47,
			saturation: 0,
			hue: 0,
			type: 'hsl',
		});
	});
});
describe('The HSL is converted to RGB', () => {
	it('return the HSL of achromatic color with no #', () => {
		expect(
			colorUtils
				.hslToRgb({
					hue: 17,
					saturation: 19,
					light: 63,
				})
				.getValueCollection()
		).toEqual({
			red: 179,
			green: 153,
			blue: 143,
			type: 'rgb',
		});
	});
	it('return the HSL of achromatic color', () => {
		var gray = colorUtils
			.hslToRgb({
				hue: 0,
				saturation: 0,
				light: 47,
			})
			.getValueCollection();
		expect(gray).toEqual({
			red: 120,
			green: 120,
			blue: 120,
			type: 'rgb',
		});
	});
});
describe('Decimal is converted to hexa', () => {
	it('return the hexa values', () => {
		expect(
			colorUtils
				.rgbToHex({
					red: 2,
					green: 46,
					blue: 148,
				})
				.getString()
		).toEqual('#022E94');
	});
});
