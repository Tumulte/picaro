const fs = require("fs");
import {generateColorSet} from "./colorGenerator";

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
    return coordinates;
};

/**
 *
 * @param {string} font The name of the google font.
 */
const addGoogleFont = function (font) {
    return `@import url("https://fonts.googleapis.com/css?family=${encodeURI(font)}&display=swap");
`;
};

/**
 * Writes the CSS file of the application in the corresponding static folder
 *
 * @param {string} appName The application name
 * @param {Object} styleSet The current selected app styleset
 */
const generateCSSFile = function (appName, styleSet) {
    const customCSS = JSON.parse(styleSet.selectorSetParamString);
    const colorSet = new generateColorSet(styleSet.dominant).generate(
        JSON.parse(styleSet.colorSetParamString),
        parseInt(styleSet.variationLightAmt),
        parseInt(styleSet.variationSatAmt)
    );
    let colorVariable = "";
    for (let i = 0; i < colorSet.combinationCollection.length; i++) {
        colorVariable += `  --combination${i}:${colorSet.combinationCollection[i].hex};
`;
        for (let j = 0; j < colorSet.combinationCollection[i].subCombination.length; j++) {
            colorVariable +=
                `  --combination${i}-${j}:${colorSet.combinationCollection[i].subCombination[j].hex};
`;
        }
    }
    let generatedCSS = "/* This is automatically generated CSS, do not edit */\n";
    generatedCSS += ":root {\n";
    generatedCSS += `  --dominant : ${styleSet.dominant};
`;
    generatedCSS += colorVariable;
    generatedCSS += "}\n";
    generatedCSS += addGoogleFont(styleSet.fontFamilyMain);
    generatedCSS += addGoogleFont(styleSet.fontFamilyTitle);

    generatedCSS += "html {\n";
    generatedCSS += `  font-size: ${styleSet.fontSize}px;
`;
    generatedCSS += `  font-family: "${styleSet.fontFamilyMain}";
`;
    generatedCSS += "}\n";
    generatedCSS += "h1, h2, h3, h4, h5, h6 {\n";
    generatedCSS += `  font-family: "${styleSet.fontFamilyTitle}";
`;
    generatedCSS += "}\n";
    for (let selector in customCSS) {
        let prefixId = ".rf-content-container ";
        let selectorText = jsonToCss(selector);
        let extraParameters = "";
        if (selector === "body") {
            selectorText = "";
            extraParameters = "  height: 100%;\n";
        } else if (selector === "html") {
            prefixId = "";
        }
        generatedCSS += `${prefixId + selectorText}{\n`;
        for (let property in customCSS[selector]) {
            console.info(customCSS[selector][property]);
            if (customCSS[selector][property] !== "" && customCSS[selector][property] !== "0rem") {
                generatedCSS +=
                    `  ${jsonToCss(property)}:${getParameter(JSON.stringify(customCSS[selector][property]), styleSet, colorSet)};\n`;
            }

        }
        generatedCSS += extraParameters;
        generatedCSS += "}\n";
    }
    generatedCSS += "/* This is automatically generated CSS, do not edit */";
    generatedCSS = makeFontFamilyName(generatedCSS);
    fs.writeFile(`${__dirname}/../../static/${appName.toLowerCase()}/baseStyle.css`, generatedCSS, function (err) {
        if (err) {
            console.debug(err);
        }
    });
};

export default {
    generateCSSFile: generateCSSFile,
};