import {createApp} from 'vue'
import App from './components/App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import {createPinia} from 'pinia'
import {createVuetify} from 'vuetify'
import {defaultRoutes} from "./routes";
import {adminRoutes} from "./adminRoutes";

let routes = defaultRoutes
if (process.env.NODE_ENV === 'development') {
    routes = defaultRoutes.concat(adminRoutes)
}

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    const fromId = from.params.appId
    const toId = to.params.appId

    if (fromId && !toId && to.name) {
        const toParams = {...to.params}
        toParams.appId = fromId
        return {name: to.name, params: toParams}
    }
})

const myCustomLightTheme = {
    dark: false,
    colors: {
        background: '#ffdd00',
        surface: '#FFFFFF',
        primary: '#d26147',
        'primary--text': '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#699eae',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)

if (process.env.NODE_ENV === 'development') {
    import('vuetify/styles')
    import('@mdi/font/css/materialdesignicons.css')
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            },
        },
    })
    app.use(vuetify)

}
app.mount('#app')
