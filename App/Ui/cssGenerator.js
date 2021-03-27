import {generateColorSet} from "./colorGenerator";

const prefixClass = ".rf-content-container";
const headerTags = `${prefixClass} h1,
${prefixClass} h2,
${prefixClass} h3,
${prefixClass} h4,
${prefixClass} h5,
${prefixClass} h6`;
import {makeFontFamilyName, jsonToCss, makeRatio} from "../utils";

/**
 *
 * @param {string} coordinates,
 * @param {Object} colorSet The vueX colorSet object
 * @param {Object} colorSet.combinationCollection,
 * @param {string} colorSet.dominant
 * @returns {string} - the Hex of the color
 */
const getParameter = function (coordinates, styleSet, colorSet) {
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
        const ratioCollection = JSON.parse(styleSet.ratioCollectionString);
        coordinates = JSON.parse(coordinates);
        return makeRatio(ratioCollection[coordinates.data]).replace(/"/g, "");

    } else if (coordinates.includes("rem")) {
        return coordinates.replace(/"/g, "");
    }
    return makeFontFamilyName(coordinates);
};

/**
 *
 * @param {string} font The name of the google font.
 */
//TODO a condition for local fonts
const addGoogleFont = function (font) {
    return `@import url("https://fonts.googleapis.com/css?family=${encodeURI(font)}&display=swap");
`;
};
const getColorCSSVariables = function (colorSet) {

    let colorVariable = "";
    for (let i = 0; i < colorSet.combinationCollection.length; i++) {
        colorVariable += `    --color${i}: ${colorSet.combinationCollection[i].hex};\n`;
        for (let j = 0; j < colorSet.combinationCollection[i].subCombination.length; j++) {
            colorVariable += `    --color${i}-sub${j}: ${colorSet.combinationCollection[i].subCombination[j].hex};\n`;
        }
    }
    colorVariable = colorVariable.slice(0, -1); //remove last line break to prevent empty line
    return colorVariable;
};
/**
 * Writes the CSS file of the application in the corresponding static folder
 *
 * @param {string} appName The application name
 * @param {Object} styleSet The current selected app styleset
 */
export const generateCSS = function (styleSet) {
    const colorSet = new generateColorSet(styleSet.dominant).generate(
        JSON.parse(styleSet.colorSetParamString),
        parseInt(styleSet.variationLightAmt),
        parseInt(styleSet.variationSatAmt)
    );


    const customCSS = JSON.parse(styleSet.selectorSetParamString);
    let extraParameters = "";
    let htmlProperties = "";
    let headerProperties = "";
    for (const [selector, properties] of Object.entries(customCSS)) {
        let propertiesString = "";
        const selectorText = jsonToCss(selector).replace(/,/g, `,\n    ${prefixClass} `);

        if (selector === "body") {
            propertiesString = "    height: 100%;\n";
        }
        for (const [property, value] of Object.entries(properties)) {
            if (value && value !== "0rem") {
                propertiesString += `    ${jsonToCss(property)}: ${getParameter(JSON.stringify(value), styleSet, colorSet)};\n`;
            }
        }
        propertiesString = propertiesString.slice(0, -1); //remove last line break to avoid empty line
        if (selector === "html") {
            htmlProperties = `\n${propertiesString}`;
        } else if (selector === "h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6") {
            headerProperties = propertiesString;
        } else if (propertiesString) {
            extraParameters += `${prefixClass} ${selectorText} {
${propertiesString}
}\n`;
        }


    }
    let fontFace = "";
    if (styleSet.fontOrigin === "google") {
        fontFace =
            `${addGoogleFont(styleSet.fontFamilyMain)};
${addGoogleFont(styleSet.fontFamilyTitle)};`;
    } else if (styleSet.fontOrigin === "local") {
        fontFace =
            `@font-face {
    font-family: "${makeFontFamilyName(styleSet.fontFamilyMain)}";
    src: url("/fonts/${encodeURI(styleSet.fontFamilyMain)}");
}
@font-face {
    font-family: "${makeFontFamilyName(styleSet.fontFamilyTitle)}";
    src: url("/fonts/${encodeURI(styleSet.fontFamilyTitle)}");
}`;
    }
    return `/* START This is an automatically generated CSS, do not edit */
${fontFace}
:root {
    --dominant: ${styleSet.dominant};
${getColorCSSVariables(colorSet)}
}
html {
    font-size: ${styleSet.fontSize}px;
    font-family: ${makeFontFamilyName(styleSet.fontFamilyMain)};${htmlProperties}
}
${headerTags} {
${headerProperties}
}
${extraParameters}
/* END This was an automatically generated CSS, do not edit */`;


};