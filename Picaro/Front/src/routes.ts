import {RouteRecordRaw} from "vue-router";
import dataConfig from "./components/dataConfig/DataConfig.vue";
import appConfig from "./components/picaroConfig.vue";
import modelEdit from "./components/dataConfig/ModelEdit.vue";
import contentEdit from "@components/dataConfig/ContentEdit.vue";
import CommonLayoutEdit from "@components/layout/CommonLayoutEdit.vue";
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
                    name: 'model',
                    path: ':modelId',
                    component: modelEdit
                },
                {
                    name: 'content',
                    path: ':modelId/content/:contentId?',
                    component: contentEdit
                },

            ]
    },
    {name: 'newApp', path: '/app/new', component: appConfig},
    {name: 'app', path: '/app/:appId?', component: appConfig},
    {name: 'layout', path: '/layout/:appId?', component: CommonLayoutEdit},
    {
        name: 'style',
        path: '/style/:appId?/:styleId?',
        component: StyleEdit
    },
]
