import Vuetify from "vuetify";
import Vue from "vue";
import colorPanel from "./cssPanelColor.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";
import {generateColorSet} from "../colorGenerator";


const colorParameterCollection = {
    "dominant": "#7094E1",
    "colorSetParamString": "[{\"hueVariation\":-201,\"saturation\":73,\"light\":49},{\"hueVariation\":-188,\"saturation\":87,\"light\":58}]",
    "variationLightAmt": 5,
    "variationSatAmt": 8
};


const app = document.createElement("div");
app.setAttribute("data-app", true);
document.body.appendChild(app);

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        user: userStore,
        admin: adminStore
    }
});

const vuetify = new Vuetify();
Vue.use(Vuelidate);
const wrapper =
    mount(colorPanel, {
            vuetify, store,
            propsData: {
                miniVariant: false
            }
        }
    );

const colorSet = new generateColorSet("#7094E1");
const colorSetParamString = "[{\"hueVariation\":-201,\"saturation\":73,\"light\":49},{\"hueVariation\":-188,\"saturation\":87,\"light\":58}]";
const variationLightAmt = "5";
const variationSatAmt = "8";

const colorCollection = colorSet.generate(
    JSON.parse(colorSetParamString),
    parseInt(variationLightAmt),
    parseInt(variationSatAmt)
);

wrapper.vm.$store.commit("colorCollection", colorCollection);
wrapper.vm.$store.commit("colorSet", colorSet);
wrapper.vm.$store.commit("colorParameterCollection", colorParameterCollection);
wrapper.vm.$store.commit("loaded", true);

describe("color css panel", () => {
    it("Display the right color", async () => {
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.bgColor(wrapper.vm.dominantColor)).toBe("background:hsl(221,65%,66%)");


    });
    it("Changes color when it has to", async () => {
        wrapper.find("[data-jest='dominantExpansion']").trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorCollection.combinationCollection[0].hex).toBe("#D85F22");
        wrapper.findComponent({ref: "dominantHue"}).vm.$emit("input", 100);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.dominantColor).toStrictEqual({"hue": 100, "light": 66, "saturation": 65});
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorCollection.combinationCollection[0].hex).toBe("#5C22D8");


    });
});