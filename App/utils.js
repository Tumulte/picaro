/**
 * @param {import('express').Request} req
 * @returns {string} the table name
 */
export function makeTableName(req) {
  return `${req.params.app}_${req.params.table}`;
}

/**
 * @param {string} string
 * @returns {boolean}
 */
export function isHexColor(string) {
  return /^#([0-9a-f]{6})$/i.test(string);
}

export function makeFontFamilyName(name) {
  if (!name) {
    return;
  }
  return name
    .replace(/.otf/gm, "")
    .replace(/.ttf/gm, "")
    .replace(/.woff/gm, "")
    .replace(/"/g, "");
}

export function makeRatio(sizes) {
  const ratio =
    parseFloat(sizes["line-height"]) +
    parseFloat(sizes["margin-top"]) +
    parseFloat(sizes["margin-bottom"]);
  return `${Math.round(ratio * 100) / 100}rem`;
}

export const debounce = (func, delay) => {
  let inDebounce;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

export const configModel = {
  id: { required: true, datatype: "string" },
  name: { required: true, datatype: "string" },
  styleSet: { required: true, datatype: "string" },
  language: { required: true, datatype: "string" },
  title: { required: true, datatype: "string" },
  devMode: { required: true, datatype: "boolean" },
  messageTimeOut: { required: true, datatype: "number" },
  applicationName: { required: true, datatype: "string" },
  navStructureString: { required: true, datatype: "string" },
  modelCollection: { required: true, datatype: "object" }
};

function isEmpty(data) {
  return (
    (!data && data !== false && data !== 0 && data !== "0") ||
    data === [] ||
    data === {}
  );
}

export function validateData(model, data) {
  let errorArray = [];
  for (const [key, value] of Object.entries(model)) {
    if (value.required && isEmpty(data[key])) {
      errorArray.push({ error: "required", item: key });
    } else if (value.datatype) {
      if (typeof data[key] !== value.datatype) {
        errorArray.push({ error: "type", item: key });
      }
    } else if (value.regex) {
      const re = new RegExp(value.regex);
      if (!re.test(data[key])) {
        errorArray.push({ error: "regex", item: key });
      }
    }
  }
  if (errorArray.length === 0) errorArray = null;
  return errorArray;
}
export function cleanData(data) {
  delete data.$loki;
  delete data.meta;
  //TODO add security
  return data;
}

export const webSafeFonts = [
  "Arial",
  "Verdana",
  "Helvetica",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  " Garamond",
  "Courier New",
  "Brush Script MT"
];
