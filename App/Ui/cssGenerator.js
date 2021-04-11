import {generateColorSet} from "./colorGenerator";
import {webSafeFonts} from "../utils";

const prefixClass = ".rf-content-container";
const headerTags = `${prefixClass} h1,
${prefixClass} h2,
${prefixClass} h3,
${prefixClass} h4,
${prefixClass} h5,
${prefixClass} h6`;
import {makeFontFamilyName, makeRatio} from "../utils";

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
        const ratioCollection = styleSet.ratioCollection;
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
const addFont = function (font, type) {
    if (webSafeFonts.includes(font)) return "";
    if (type === "google") {
        return `@import url("https://fonts.googleapis.com/css?family=${encodeURI(font)}&display=swap");
`;
    } else if (type === "local") {
        return `@font-face {
    font-family: "${makeFontFamilyName(font)}";
    src: url("/fonts/${encodeURI(font)}");
}`;
    }
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
        styleSet.colorParameterCollection,
        parseInt(styleSet.variationLightAmt),
        parseInt(styleSet.variationSatAmt)
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
            if (value && value !== "0rem") {
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
    let fontFace = `${styleSet.fontFamilyMain ? addFont(styleSet.fontFamilyMain, styleSet.fontOrigin) : ""}
${styleSet.fontFamilyMain ? addFont(styleSet.fontFamilyTitle, styleSet.fontOrigin) : ""}
${styleSet.fontFamilyAlt ? addFont(styleSet.fontFamilyAlt, styleSet.fontOrigin) : ""}`;


    return `/* START This is an automatically generated CSS, do not edit */
${fontFace}
:root {
    --dominant: ${styleSet.dominant};
${getColorCSSVariables(colorSet)}
}
html{
${htmlProperties}
}
.rf-content-container {
    font-family: ${makeFontFamilyName(styleSet.fontFamilyMain)};${bodyProperties}
}
${headerTags} {
${headerProperties}
}
${extraParameters}
/* END This was an automatically generated CSS, do not edit */`;


};