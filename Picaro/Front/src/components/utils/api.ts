import axios from "axios";
import {Settings, StyleSet} from "@types";


export function updateSettings(currentSettings: Settings) {
    return axios.put('/api/setup/update/settings', currentSettings).catch((error) => {
        throw new Error(error);
    })
}

export function createStyleSet(styleSet: { styleSet: StyleSet, generatedCSS: string }) {
    return axios.post('/api/setup/create/styleset', styleSet).catch((error) => {
        throw new Error(error);
    })
}

export function updateStyleSet(currentSettings: { styleSet: StyleSet, generatedCSS: string }) {
    return axios.put('/api/setup/update/styleset', currentSettings).catch((error) => {
        throw new Error(error);
    })
}