const fs = require("fs");
const path = require("path");

let configPath

const mainDir = path.join(__dirname, '../..');
if (fs.existsSync(`${mainDir}/picaro.json`)) {
    configPath = mainDir
}
let relativePath = ''
const pathArray = __dirname.split('/')
for (let i = 0; i < 5; i++) {
    const parentPath = pathArray.join('/')
    if (fs.existsSync(`${parentPath}/picaro.json`)) {
        configPath = relativePath
    }
    relativePath += '../'

    pathArray.splice(-1)
}

function addFontData(font, descr) {
    if (!descr) return
    if (descr.match(/italic/i)) {
        font.style = "italic"
    } else {
        font.style = "normal"
    }

    if (descr.match(/thin/i)) {
        font.weight = 100
    } else if (descr.match(/extra.?light/i)) {
        font.weight = 200
    } else if (descr.match(/light/i)) {
        font.weight = 300
    } else if (descr.match(/regular/i)) {
        font.weight = 400
    } else if (descr.match(/medium/i)) {
        font.weight = 500
    } else if (descr.match(/semi.?bold/i)) {
        font.weight = 600
    } else if (descr.match(/bold/i)) {
        font.weight = 700
    } else if (descr.match(/extra.?bold/i)) {
        font.weight = 800
    } else if (descr.match(/black/i)) {
        font.weight = 900
    } else if (descr.match(/extra.?black/i)) {
        font.weight = 950
    } else {
        font.weight = 400
    }
}

const configFile = 'picaro.json'

module.exports = {configFile, configPath, addFontData}
