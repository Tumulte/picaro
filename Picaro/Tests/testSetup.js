//TODO clear that out
import Vuelidate from 'vuelidate'
/* user components */
import tagsList from '../Ui/Components/tagsList.vue'
import list from '../Ui/Components/displayList.vue'
import link from '../Ui/Components/filterLink.vue'
import tags from '../Ui/Components/tags.vue'
import nav from '../Ui/Components/nav.vue'
import alert from '../Ui/Components/Utils/alert.vue'
import rfApp from '../Ui/Components/rfApp.vue'
import rfSelect from '../Ui/Components/rfSelect.vue'

import modelField from '../Ui/Components/modelField.vue'
import 'vuetify/styles' // Global CSS has to be imported
import {createApp} from 'vue'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// TODO add webpack chunks to exclude that in production
import {createStore} from 'vuex'
import adminStore from '../Store/admin'
import userStore from '../Store/user'
import rfLayout from '../Ui/Components/rfCommonLayout.vue'

const appContainer = document.createElement('div')
const container = document.createElement('div')
const confirm = document.createElement('button')
const cssTestDiv = document.createElement('div')
const cssTestDiv2 = document.createElement('h3')
const mainConfigSubmit = document.createElement('div')
mainConfigSubmit.setAttribute('id', '_admin-form-ext-submit')
mainConfigSubmit.setAttribute('class', '__altfont')

cssTestDiv.innerHTML = 'test'
cssTestDiv2.innerHTML = 'test 2'

confirm.setAttribute('class', 'rf-alert-button')
cssTestDiv.setAttribute('class', 'css-test')
cssTestDiv2.setAttribute('class', 'css-test2')
container.setAttribute('id', 'rf-content-container')

appContainer.setAttribute('data-app', true)
document.body.appendChild(app)
document.body.appendChild(container)
document.body.appendChild(confirm)
container.appendChild(mainConfigSubmit)
container.appendChild(cssTestDiv)
container.appendChild(cssTestDiv2)
document.head.insertAdjacentHTML(
    'beforeend',
    "<style id='rf-live-styles' ></style>"
)

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(rfApp)

app.use(vuetify)
app.use(Vuelidate)

const store = createStore({
    modules: {
        user: userStore,
        admin: adminStore,
    },
})
app.use(store)

app.component('RfList', list)
app.component('RfTags', tags)
app.component('RfTagsList', tagsList)
app.component('RfLink', link)
app.component('RfNav', nav)
app.component('RfModelField', modelField)
app.component('RfLayout', rfLayout)
app.component('RfSelect', rfSelect)

app.component('RfAlert', alert)
app.mount('#rf-vue-container')
