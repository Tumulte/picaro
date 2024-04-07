import {RouteRecordRaw} from "vue-router";
import modelEdit from "./components/dataConfig/ModelEdit.vue";
import contentEdit from "@components/dataConfig/ContentEdit.vue";
import CommonLayoutEdit from "@components/layout/CommonLayoutEdit.vue";
import AppDisplay from "@components/display/AppDisplay.vue";
import picaroSettings from "../picaroSettings.json"
import {isUserLoggedIn} from "@components/utils/api";

export const routes: RouteRecordRaw[] = [
    {path: '/login', component: () => import("@components/Login.vue")},
    {
        path: '/admin',
        component: () => import("./components/Picaro.vue"),
        beforeEnter: async (to, from, next) => {
            const userStatus = isUserLoggedIn()
            console.log('User status:', userStatus)
            if (userStatus) {
                console.log('User is logged in')
                next()
            } else {
                next('/login')
            }
        },
        children: [
            {name: 'picaroIndex', path: ':appId?', component: () => import("./components/picaroConfig.vue")},
            {
                name: 'data',
                path: 'data/:appId?',
                component: () => import("@components/dataConfig/DataConfig.vue"),
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
            {name: 'newApp', path: 'app/new', component: () => import("./components/picaroConfig.vue")},
            {name: 'app', path: 'app/:appId?', component: () => import("./components/picaroConfig.vue")},
            {name: 'layout', path: 'layout/:appId?', component: CommonLayoutEdit},
            {
                name: 'style',
                path: 'style/:appId?/:styleId?',
                component: () => import("@components/styleSet/StyleEdit.vue")
            },
        ]
    },
    {path: '/:app/:globalFilters?/:globalParams?/:modelFilters?/:modelFilterParams?', component: AppDisplay},
    {path: '/', redirect: picaroSettings.defaultApp},
]
