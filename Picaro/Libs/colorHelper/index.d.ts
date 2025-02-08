export type ColorHex = {
    hexred: string,
    hexgreen: string,
    hexblue: string,
}
export type ColorRGB = {
    red: number,
    green: number,
    blue: number,
}
export type ColorHSL = {
    hue: number,
    saturation: number,
    light: number,
}
export type ColorObject = ColorHex | ColorRGB | ColorHSL
export type Color = ColorObject | string

export interface ColorHelperType {
    getValueCollection: (color?: Color) => ColorObject,
    hexToRgb: Function,
    rgbToHex: Function,
    hslToRgb: (color: Color) => ColorHelperType,
    rgbToHsl: (color: Color) => ColorHelperType,
    getString: (color: Color) => string,
    hexToHsl: (color: Color) => ColorHelperType,
    hslToHex: (color: Color) => ColorHelperType,
    color: Color | undefined,
}

declare module '@picaro/colorhelper/index.d.ts';
