import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createVuetify} from 'vuetify'
import {VCol, VRow} from 'vuetify/components/VGrid'

const vuetify = createVuetify({
    components: {
        VCol,
        VRow
    },

})


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
