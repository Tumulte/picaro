// @ts-nocheck
import {FontStyleParams, RatioParams} from "@types";

export function makeFontFamilyName(name: FontStyleParams) {
    if (name.family) {
        return name.family
    }
    return name;
}

export function makeRatio(sizes: RatioParams) {
    const ratio = parseFloat(sizes["line-height"]) + parseFloat(sizes["margin-top"]) + parseFloat(sizes["margin-bottom"]);
    return `${Math.round(ratio * 100) / 100}rem`;
}

export function setCSSLink(path: string) {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = path
    document.head.appendChild(link)
}
