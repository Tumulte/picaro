/**
 * @param {import('express').Request} req
 * @returns {string} the table name
 */
export function makeTableName(req) {
    return `${req.params.app}_${req.params.table}`;
};

/**
 * Replace the string
 * @param {string} str
 * @returns {string}
 */
export function parseMessage(str) {
    /**
     * @type {Array}
     */
    const args = [].slice.call(arguments, 1);
    let i = 0;

    return str.replace(/%s/g, () => args[i++]);
};


/**
 *
 * @param {Object} formData a FormData() class
 */
export function urlencodeFormData(formData) {
    let value = "";

    /**
     *
     * @param {string} value
     */
    function encode(value) {
        return encodeURIComponent(value).replace(/%20/g, "+");
    }

    for (let pair of formData.entries()) {
        if (typeof pair[1] === "string") {
            value += `${value ? "&" : ""}${encode(pair[0])}=${encode(pair[1])}`;
        }
    }
    return value;
};

/**
 * @param {string} string
 * @returns {boolean}
 */
export function isHexColor(string) {
    return /^#([0-9a-f]{6})$/i.test(string);
};

export function makeFontFamilyName(name) {
    if (!name) {
        return;
    }
    return name.replace(/.otf/gm, "").replace(/.ttf/gm, "").replace(/.woff/gm, "").replace(/\"/g, "");
};

export function makeRatio(sizes) {
    const ratio = parseFloat(sizes["line-height"]) + parseFloat(sizes["margin-top"]) + parseFloat(sizes["margin-bottom"]);
    return `${Math.round(ratio * 100) / 100}rem`;
};

export const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
};
export const webSafeFonts = ["Arial",
    "Verdana",
    "Helvetica",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    " Garamond",
    "Courier New",
    "Brush Script MT"];