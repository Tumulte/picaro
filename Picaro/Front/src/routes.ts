import {RouteRecordRaw} from "vue-router";
import AppDisplay from "@components/display/AppDisplay.vue";
import picaroSettings from "../picaroSettings.json"

export const defaultRoutes: RouteRecordRaw[] = [
    {
        path: '/:app/:globalFilters?/:globalParams?/:modelFilters?/:modelFilterParams?',
        component: AppDisplay
    },
    {path: '/', redirect: picaroSettings.defaultApp}
]

