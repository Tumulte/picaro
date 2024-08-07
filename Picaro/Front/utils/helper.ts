import {RatioParams} from "@types";

export function makeFontFamilyName(name) {
    if (name.family) {
        return name.family
    }
    return name;
}

export function makeRatio(sizes: RatioParams) {
    const ratio = parseFloat(sizes["line-height"]) + parseFloat(sizes["margin-top"]) + parseFloat(sizes["margin-bottom"]);
    return `${Math.round(ratio * 100) / 100}rem`;
}
