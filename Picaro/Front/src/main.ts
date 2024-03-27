import {createApp} from 'vue'
import './style.pcss'
import picHeader from './components/customUiElements/picHeader.vue'
import App from './components/App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import {createPinia} from 'pinia'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import {routes} from "./routes";


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

const pinia = createPinia()
const app = createApp(App)
app.component('PicHeader', picHeader)
app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
