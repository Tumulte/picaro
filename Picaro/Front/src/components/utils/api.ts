import axios from "axios";
import {Settings, StyleSet} from "@types";


export async function updateSettings(currentSettings: Settings, oldName?: string) {
    try {
        return await axios.put('/api/setup/update/settings', {settings: currentSettings, oldName});
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
    }
}

export async function createStyleSet(styleSet: { styleSet: StyleSet, generatedCSS: string }) {
    try {
        return await axios.post('/api/setup/create/styleset', styleSet);
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
    }
}

export async function updateStyleSet(currentSettings: { styleSet: StyleSet, generatedCSS: string }) {
    try {
        return await axios.put('/api/setup/update/styleset', currentSettings);
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message);
        }
    }
}

export function isUserLoggedIn() {
    if(localStorage.getItem('accessToken')) {
        return axios.get('/api/auth/check').catch(() => {
            return false
        })
    }
}
