const {nanoid} = require('nanoid')

const styleSetId = nanoid(8)

const basicCss = {
    html: {
        'font-size': '16',
        'line-height': '1.6',
    },
    h1: {
        'font-size': '3.2',
        'line-height': '3.2',
        'margin-bottom': '1',
        'margin-top': '1.6',
    },
    h2: {
        'font-size': '2.8',
        'line-height': '2.8',
        'margin-bottom': '1',
        'margin-top': '1.6',
    },
    h3: {
        'font-size': '2.2',
        'line-height': '2.2',
        'margin-bottom': '1',
        'margin-top': '1.6',
    },
    h4: {
        'font-size': '1.8',
        'line-height': '1.8',
        'margin-bottom': '0.8',
        'margin-top': '1',
    },
    h5: {
        'font-size': '1.5',
        'line-height': '1.5',
        'margin-bottom': '0.8',
        'margin-top': '1',
    },
    h6: {
        'font-size': '1',
        'line-height': '1',
        'margin-bottom': '0.8',
        'margin-top': '1',
    },
}

const basicCssRem = {}
for (const [key, value] of Object.entries(basicCss)) {
    const cssValue = Object.entries(value).map(([key, value]) => [
        key,
        value + 'rem',
    ])
    basicCssRem[key] = Object.fromEntries(cssValue)
}
basicCssRem.html['font-size'] = basicCssRem.html['font-size'].replace(
    'rem',
    'px'
)
basicCssRem['.rf-module-container'] = {}
basicCssRem['.rf-module-container'].padding = {data: 'html', type: 'ratio'}
const defaultSettings = {
    id: "",
    styleSet: styleSetId,
    language: '',
    title: 'title',
    devMode: true,
    messageTimeOut: 10001,
    applicationName: '',
    navStructure: {},
    layoutCollection: [],
    layoutLinkCollection: {},
    categories: [],
    defaultLayout: '',
    layoutCommonCollection: [],
    modelCollection: [],
    availableFilterCollection: {
        tags: [],
    },
}
const defaultStyleSet = {
    dominant: '#707000',
    colorParameterCollection: [],
    colorGeneratorParams: {
        count: 10,
        text: {light: 50, saturation: 0, hue: 0},
        hue: {variation: 0, curve: 0, move: 0},
        light: {variation: 5, move: 0, curve: 0},
        saturation: {variation: 0, move: 0, curve: 0},
        full: true,
    },
    selectorCollection: basicCssRem,
    fontOrigin: 'local',
    'font-size': '16',
    id: styleSetId,
    setName: '',
    fontFamilyMain: '',
    fontFamilyAlt: '',
    fontFamilyTitle: '',
    ratioCollection: basicCss,
    hiddenCombination: {dominant: [], sub: []},
}
module.exports = {defaultStyleSet, defaultSettings}
