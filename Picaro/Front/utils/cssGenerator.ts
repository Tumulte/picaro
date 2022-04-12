import {GenerateColorSet} from "@libs/colorGenerator";
import {webSafeFonts} from "./const";
import type {StyleSet} from "@types";

const prefixClass = ".pic-content-container";
const headerTags = `${prefixClass} h1,
${prefixClass} h2,
${prefixClass} h3,
${prefixClass} h4,
${prefixClass} h5,
${prefixClass} h6`;
import {makeFontFamilyName, makeRatio} from "./helper";

function getParameter(coordinates: string, styleSet: StyleSet, colorSet): string {
    if (coordinates.includes("{\"type\":\"color\",")) {
        coordinates = JSON.parse(coordinates);
        const coordinate = coordinates.data[0];
        const subCoordinate = coordinates.data[1];
        if (typeof coordinate === "string") {
            return colorSet[`${coordinate}SubCollection`][subCoordinate].hex;
        } else {
            return colorSet.combinationCollection[coordinate].subCombination[subCoordinate].hex;
        }
    } else if (coordinates.includes("{\"type\":\"ratio\",")) {
        const ratioCollection = styleSet.ratioCollection;
        coordinates = JSON.parse(coordinates);
        return makeRatio(ratioCollection[coordinates.data]).replace(/"/g, "");

    } else if (coordinates.includes("rlh")) {
        return coordinates.replace(/"/g, "");
    }
    return makeFontFamilyName(coordinates);
}

function makeFontRatio(styleSet) {
    const ratioCollection = styleSet.ratioCollection;
    let fontRatio = "";
    for (const [header, sizes] of Object.entries(ratioCollection)) {
        if (header !== "html") {
            fontRatio += `   --ratio${header}: ` + makeRatio(sizes).replace(/"/g, "") + ";\n";
        }
    }
    return fontRatio;
}

function headerSize(styleSet: StyleSet) {
    const ratioCollection = styleSet.ratioCollection;
    let headerSize = "";
    for (const [header, sizes] of Object.entries(ratioCollection)) {
        if (header !== "html") {
            headerSize += `${prefixClass} ${header} {
    font-size: ${sizes["font-size"]}rem;
    line-height: ${sizes["line-height"]}rlh;
    margin-top: ${sizes["margin-top"]}rlh;
    margin-bottom: ${sizes["margin-bottom"]}rlh;
}
`;
        }
    }
    return headerSize;
}

/**
 *
 * @param {string} font The name of the google font.
 */
//TODO a condition for local fonts
const addFont = function (font, fontName: string) {
    if (webSafeFonts.includes(font.font.family)) return "";
    if (font.origin === "google") {
        let params = "";
        let italic = false;
        if (font.font.variants.find(variant => variant === "italic")) {
            params += ":ital";
            italic = true;
        }
        const weights = font.font.variants.filter((variant: string) => /^\d+$/.test(variant)).sort((a: number, b: number) => a - b);
        if (weights.length > 0) {
            if (!italic) params += `:wght@${weights.join(";")}`;
            else {
                params += `,wght@`;
                for (const weight of weights) {
                    params += `0,${weight};`;
                }
                for (const weight of weights) {
                    params += `1,${weight};`;
                }
                //remove last semicolon
                params = params.slice(0, -1);
            }
        } else if (italic) {
            params += `@0;1`;
        }

        return `@import url("https://fonts.googleapis.com/css2?family=${encodeURI(font.font.family)}${params}&display=swap");
`;
    } else if (font.origin === "local") {
        let fontSrc = "";
        for (const variant of font.font.variants) {
            fontSrc += `@font-face {
    font-family: ${font.font.family};
    src: url("/fonts/${variant.src}");
    font-weight: ${variant.weight};
    font-style: ${variant.style};
}
`
        }
        return fontSrc;
    }

    return "";
};

function getColorCSSVariables(colorSet) {

    const colorType = ["dominant", "alert", "gray", "info", "success", "warning"];

    let colorVariable = "";

    for (const type of colorType) {
        for (const [index, color] of colorSet[`${type}SubCollection`].entries()) {
            colorVariable += `    --${type}-${index}: ${color.hex};\n`;
        }
        for (const [index, color] of colorSet[`${type}TextSubCollection`].entries()) {
            colorVariable += `    --${type}-text-${index}: ${color.hex};\n`;
        }
    }

    for (let i = 0; i < colorSet.combinationCollection.length; i++) {
        colorVariable += `    --color${i}: ${colorSet.combinationCollection[i].hex};\n`;
        for (let j = 0; j < colorSet.combinationCollection[i].subCombination.length; j++) {
            colorVariable += `    --color${i}-sub${j}: ${colorSet.combinationCollection[i].subCombination[j].hex};\n`;
        }
    }

    for (const [index, color] of colorSet.graySubCollection.entries()) {
        colorVariable += `    --gray-${index}: ${color.hex};\n`;
    }
    colorVariable = colorVariable.slice(0, -1); //remove last line break to prevent empty line
    return colorVariable;
}

/**
 * Writes the CSS file of the application in the corresponding static folder
 *
 * @param {string} appName The application name
 * @param {Object} styleSet The current selected app styleset
 */
export function generateCSS(styleSet: StyleSet) {
    const colorSet = new GenerateColorSet(styleSet.dominant).generate(
        styleSet.colorParameterCollection,
        styleSet.colorGeneratorParams
    );


    const customCSS = styleSet.selectorCollection;
    let extraParameters = "";
    let htmlProperties = "";
    let bodyProperties = "";
    let headerProperties = "";
    for (const [selector, properties] of Object.entries(customCSS)) {
        let propertiesString = "";
        const selectorText = selector.replace(/,/g, `,\n    ${prefixClass} `);

        if (selector === "body") {
            propertiesString = "    height: 100%;\n";
        }
        for (const [property, value] of Object.entries(properties)) {
            if (value && value !== "0rlh") {
                propertiesString += `    ${property}: ${getParameter(JSON.stringify(value), styleSet, colorSet)};\n`;
            }
        }
        propertiesString = propertiesString.slice(0, -1); //remove last line break to avoid empty line
        if (selector === "body") {
            bodyProperties = `\n${propertiesString}`;
        } else if (selector === "html") {
            htmlProperties = `${propertiesString}`;
        } else if (selector === "h1, h2, h3, h4, h5, h6") {
            headerProperties = propertiesString;
        } else if (propertiesString) {
            extraParameters += `${prefixClass} ${selectorText} {
${propertiesString}
}\n`;
        }


    }
    const fontFace = [addFont(styleSet.fontFamilyMain), addFont(styleSet.fontFamilyTitle), addFont(styleSet.fontFamilyAlt)]

    fontFace.forEach(function (item, i) {
        if (item.includes('@import')) {
            fontFace.splice(i, 1);
            fontFace.unshift(item);
        }
    });

    const css = `/* START This is an automatically generated CSS, do not edit */
${fontFace[0]}
${fontFace[1]}
${fontFace[2]}

:root {
    --dominant: ${styleSet.dominant};
${getColorCSSVariables(colorSet)}
    --font-main: "${makeFontFamilyName(styleSet.fontFamilyMain.font)}";
    --font-title: "${makeFontFamilyName(styleSet.fontFamilyTitle.font)}";
    --font-alt: "${makeFontFamilyName(styleSet.fontFamilyAlt.font)}";
${makeFontRatio(styleSet)}
}
html{
    font-size: ${styleSet.ratioCollection.html["font-size"]}px !important;
    line-height: ${styleSet.ratioCollection.html["line-height"]}px !important;
${htmlProperties}
}
.pic-content-container {
    font-family: var(--font-main);${bodyProperties}
    font-size: ${styleSet.ratioCollection.html["font-size"]}px;
    line-height: ${styleSet.ratioCollection.html["line-height"]}px;
}

${headerSize(styleSet)}

${headerTags} {
    font-family: var(--font-title);${headerProperties}
}
${extraParameters}
/* END This was an automatically generated CSS, do not edit */`;
    return css;
}
