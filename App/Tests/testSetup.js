import Vuetify from "vuetify";
import Vue from "vue";
import { generateColorSet } from "../Ui/colorGenerator";

import * as styleSetCollection from "./testData.json";
import Vuex from "vuex";
import userStore from "../Store/user";
import adminStore from "../Store/admin";
import Vuelidate from "vuelidate";

const styleSet = styleSetCollection[0];

const app = document.createElement("div");
const container = document.createElement("div");
const confirm = document.createElement("button");
const cssTestDiv = document.createElement("div");
const cssTestDiv2 = document.createElement("h3");
const mainConfigSubmit = document.createElement("div");
mainConfigSubmit.setAttribute("id", "_admin-form-ext-submit");
mainConfigSubmit.setAttribute("class", "__altfont");

cssTestDiv.innerHTML = "test";
cssTestDiv2.innerHTML = "test 2";

confirm.setAttribute("class", "rf-alert-button");
cssTestDiv.setAttribute("class", "css-test");
cssTestDiv2.setAttribute("class", "css-test2");
container.setAttribute("class", "rf-content-container");

app.setAttribute("data-app", true);
document.body.appendChild(app);
document.body.appendChild(container);
document.body.appendChild(confirm);
container.appendChild(mainConfigSubmit);
container.appendChild(cssTestDiv);
container.appendChild(cssTestDiv2);
document.head.insertAdjacentHTML(
  "beforeend",
  "<style id='rf-live-styles' ></style>"
);

Vue.use(Vuetify);

export const colorSet = new generateColorSet(styleSet.dominant);

Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    user: userStore,
    admin: adminStore
  }
});

export const vuetify = new Vuetify();
Vue.use(Vuelidate);
