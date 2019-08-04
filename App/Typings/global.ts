export type Color = { red: number; green: number; blue: number; hue: number; replace: Function };
//interface HSLColor { hue: number; saturation: number; lightness: number } interface RGBColor { red: number; green: number; blue: number } type Color = HSLColor | RGBColor;
