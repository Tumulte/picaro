import {isUserLoggedIn} from "@components/utils/api";
import modelEdit from "@components/dataConfig/ModelEdit.vue";
import contentEdit from "@components/dataConfig/ContentEdit.vue";
import LayoutContainer from "@components/layout/LayoutContainer.vue";
import {RouteRecordRaw} from "vue-router";

export const adminRoutes: RouteRecordRaw[] = [
    {path: '/login', component: () => import("@components/Login.vue")},
    {
        path: '/admin',
        component: () => import("./components/Picaro.vue"),
        beforeEnter: async (to, from, next) => {
            const userStatus = await isUserLoggedIn()
            console.log('User status:', userStatus)
            if (userStatus) {
                console.log('User is logged in')
                next()
            } else {
                next('/login')
            }
        },
        children: [
            {name: 'picaroIndex', path: ':appId?', component: () => import("@components/PicaroConfig.vue")},
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
            {name: 'newApp', path: 'app/new', component: () => import("@components/PicaroConfig.vue")},
            {name: 'app', path: 'app/:appId?', component: () => import("@components/PicaroConfig.vue")},
            {name: 'layout', path: 'layout/:appId?', component: LayoutContainer},
            {
                name: 'style',
                path: 'style/:appId?/:styleId?',
                component: () => import("@components/styleSet/StyleEdit.vue")
            },
        ]
    }
]