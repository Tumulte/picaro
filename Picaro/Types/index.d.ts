import layout from "@/src/components/layout/Layout.vue";
import {nanoid} from "nanoid";

export type Categories = { id: string, label: string }
export type Layout = { model: string, type: string, categories: Categories[] }
export type Filter = { id: string, label: string }
export type Model = { id: string, name: string, fieldCollection: ModelField[] }

export type RichTextContent = {
    type: string
    attrs?: {
        level?: number
    }
    content: {
        type: string
        text: string
    }
}

export type Settings = {
    id: string,
    styleSetId: string,
    language: string,
    devMode: boolean,
    categories: { label: string, id: string }[],
    messageTimeOut: number,
    applicationName: string,
    applicationType: "Picaro" | "Vue" | "Solid" | "React",
    navStructure: [],
    layoutCollection: { id: string, name: string, layout: Layout[] }[],
    LayoutLinkCollection: [],
    defaultLayout: string
    layoutCommonCollection: { [key: string]: Array<Layout[]> },
    modelCollection: Model[],
    filterCollection: { all: Record<string, string>, modelFilter: Filter[] },
}

export type ColorParameters = {
    hueVariation: number
    saturation?: number
    light?: number
}
export type CssParameters = {
    "font-size": string,
    "line-height": string,
    "margin-bottom"?: string,
    "margin-top"?: string
}

export type ColorGeneratorParams = {
    count: number,
    text: { variation: number, curve: number, move: number },
    hue: { variation: number, curve: number, move: number },
    light: { variation: number, move: number, curve: number },
    saturation: { variation: number, move: number, curve: number },
    full: boolean,
}

type RatioParams = {
    text: string,
    "margin-top": string,
    "margin-bottom": string,
    "font-size": string,
    "line-height": string
}

export type FontOrigin = "google" | "local" | "webSafe"

export type FontParams = { font: string, origin: FontOrigin }

export interface SettingsStore {
    currentAppSettings: Settings | undefined
    allSettings: Settings[]
    allStyleSets: StyleSet[]
    currentStyleSet: StyleSet | undefined
    rteImage: string
}

export type StyleSet = {
    dominant: string,
    colorParameterCollection: ColorParameters[],
    colorGeneratorParams: ColorGeneratorParams,
    selectorCollection: { html: CssParameters | {} },
    'font-size': string,
    id: string,
    setName: string,
    fontFamilyMain: FontParams,
    fontFamilyAlt: FontParams,
    fontFamilyTitle: FontParams,
    ratioCollection: {
        html: {
            "font-size": string,
            "line-height": string
        },
        h1: RatioParams,
        h2: RatioParams,
        h3: RatioParams,
        h4: RatioParams,
        h5: RatioParams,
        h6: RatioParams,
        p: RatioParams,
    },
    hiddenCombination: { dominant: Array<any>, sub: Array<any> },
}

export type FieldParams = {
    id: string,
    label: string,
    name: string,
    regex: string,
    required: boolean,
    hidden: boolean,
    template: string,
    attributes: string,
    extraParams: string,
    type: string
}

export type FieldContent = {
    fieldContent: null | string | RichTextContent[]
    fieldParamsId: string
    contentId: string
}

export type ModelContent = {
    categories: string[]
    content: FieldContent[]
    modelId: string
}

export type ModuleParam = {
    model: string
    categories: string[]
    type: string
}

export type Hue = { hue: number, saturation: number, light: number }

export type ModelState = "noModel" | "awaitingName" | "modelCreated" | "addingField" | "editingField"
