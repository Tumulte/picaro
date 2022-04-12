import {RouteRecordRaw} from "vue-router";
import dataConfig from "./components/dataConfig/DataConfig.vue";
import appConfig from "./components/picaroConfig.vue";
import modelEdit from "./components/dataConfig/ModelEdit.vue";
import contentEdit from "@components/dataConfig/ContentEdit.vue";
import CommonLayoutEdit from "@components/dataConfig/CommonLayoutEdit.vue";
import StyleEdit from "@components/styleSet/StyleEdit.vue";

export const routes: RouteRecordRaw[] = [
    {name: 'index', path: '/:appId?', component: appConfig},
    {
        name: 'data',
        path: '/data/:appId?',
        component: dataConfig,
        children:
            [
                {
                    path: ':modelId?',
                    component: modelEdit
                },
                {
                    path: ':modelId?/content/:contentId?',
                    component: contentEdit
                },

            ]
    },
    {name: 'app', path: '/app/:appId?', component: appConfig},
    {name: 'layout', path: '/layout/:appId?', component: CommonLayoutEdit},
    {
        name: 'style',
        path: '/style/:appId?/:styleId?',
        component: StyleEdit
    },
]
