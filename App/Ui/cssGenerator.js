import {jsonToCss, makeFontFamilyName, makeRatio} from "../utils";

/**
 *
 * @param {string} selector
 * @param {string} parameters
 */
const modifyTargetDOMStyle = function (selector, parameters) {
    let prefixId = ".rf-content-container ";
    if (selector === "body") {
        selector = "";
        parameters += ";height: 100%";
    } else if (selector === "html") {
        prefixId = "";
    }
    parameters = makeFontFamilyName(parameters);
    document.querySelectorAll(prefixId + jsonToCss(selector)).forEach(function (el) {
        el.setAttribute("style", parameters);
    });
};

/**
 *
 * @param {object} removedSelector
 */
const removeUnusedStyle = function (removedSelector) {
    for (let selector in removedSelector) {
        let prefixId = ".rf-content-container ";
        if (selector === "body") {
            removedSelector[selector] = "";
        } else if (selector === "html") {
            prefixId = "";
        }
        document.querySelectorAll(prefixId + removedSelector[jsonToCss(selector)]).forEach(function (el) {
            el.setAttribute("style", "");
        });
    }
};

/**
 *
 * @param {object} parameters The css parameters
 * @param {object} colorMapping A dictionary with the color corresponding to the position
 */
const makeCssString = function (parameters, colorMapping, ratioMapping) {
    /**
     * @type {object} an empty object to be filled with the new CSS parameters
     */
    const HTMLParameters = {};
    //TODO use array tools like map and filter
    for (let parameter in parameters) {
        parameters = JSON.parse(JSON.stringify(parameters));
        if (parameters[parameter].type === "color") {
            parameters[parameter] = colorMapping[JSON.stringify(parameters[parameter].data)];
        } else if (parameters[parameter].type === "ratio") {
            const sizes = ratioMapping[parameters[parameter].data];
            parameters[parameter] = makeRatio(sizes);
        }
        HTMLParameters[jsonToCss(parameter)] = parameters[parameter];
    }
    const string = JSON.stringify(HTMLParameters);
    return string.replace(/,/g, ";").replace(/["{}]/g, "");
};
/**
 *
 * @param {array} selectorCollection current selector collection
 * @param {array|false} previousSelectorCollection selector collection from the previous call of the method
 * @returns {array|false}
 */
const extractRemovedSelector = function (selectorCollection, previousSelectorCollection) {
    previousSelectorCollection = JSON.parse(JSON.stringify(previousSelectorCollection));

    const removedSelector = [];
    if (typeof previousSelectorCollection !== "object") {
        return false;
    }
    for (let key in previousSelectorCollection) {
        if (!(key in selectorCollection)) {
            removedSelector.push(key);
        }
    }
    return removedSelector;
};

/**
 *
 * @param {object} selectorCollection
 * @class
 */
const generateCss = function (selectorCollection) {
    selectorCollection = JSON.parse(JSON.stringify(selectorCollection));
    /**
     * @type {array|false}
     */
    let removedSelector = false;

    this.previousSelectorCollection = selectorCollection ? selectorCollection : false;

    /**
     * @param {array} selectorCollection
     * @param {object} colorMapping
     */
    this.apply = function (selectorCollection, colorMapping, ratioMapping) {
        removedSelector = extractRemovedSelector(selectorCollection, this.previousSelectorCollection);
        removeUnusedStyle(removedSelector);
        this.previousSelectorCollection = JSON.parse(JSON.stringify(selectorCollection));

        for (let selector in selectorCollection) {
            modifyTargetDOMStyle(selector, makeCssString(selectorCollection[selector], colorMapping, ratioMapping));
        }
    };
};
export default {
    generateCss: generateCss,
};