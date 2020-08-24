import {mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import colorPanel from "./cssPanelColor.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";
import {generateColorSet} from "../colorGenerator";
import cssPanelSelector from "./cssPanelSelector";
import cssPanelMain from "./cssPanelMain";

process.env.ISTEST = true;

const app = document.createElement("div");
const container = document.createElement("div");
container.setAttribute("class", "rf-content-container");
const dummyClass = document.createElement("div");
dummyClass.setAttribute("class", "test-class");
dummyClass.textContent = "I am a test";
const dummyClass2 = document.createElement("div");
dummyClass2.setAttribute("class", "test-class2");
dummyClass2.textContent = "I am another test";
app.setAttribute("data-app", true);
document.body.appendChild(app);
document.body.appendChild(container);
container.appendChild(dummyClass);
container.appendChild(dummyClass2);


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
const mainPanelWrapper =
    mount(cssPanelMain, {
            vuetify, store,
            stubs: ["warning-component"]
        }
    );
const selectorWrapper =
    mount(cssPanelSelector, {
            vuetify, store,
            stubs: ["warning-component"]
        }
    );

const colorSet = new generateColorSet("#7094E1"); //hsl(221, 65%, 66%)
const colorSetParamString = "[{\"hueVariation\":-201},{\"hueVariation\":-188,\"saturation\":87,\"light\":58}]";
const colorSetParam = JSON.parse(colorSetParamString);
const variationLightAmt = "5";
const variationSatAmt = "8";

const colorCollection = colorSet.generate(
    colorSetParam,
    parseInt(variationLightAmt),
    parseInt(variationSatAmt)
);
const colorParameterCollection = {
    "dominant": "#7094E1",
    "colorSetParamString": colorSetParamString,
    "variationLightAmt": 5,
    "variationSatAmt": 8
};
wrapper.vm.$store.commit("colorCollection", colorCollection);
wrapper.vm.$store.commit("colorSet", colorSet);
wrapper.vm.$store.commit("colorParameterCollection", colorParameterCollection);
wrapper.vm.$store.commit("loaded", true);
wrapper.vm.$store.commit("selectorCollection", {
    "mkClsstest-class": {color: {data: [1, 2], type: "color"}},
    "mkClsstest-class2": {color: {data: [0, 4], type: "color"}}
});


describe("color css panel", () => {
    it("Display the right color", async () => {
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.bgColor(wrapper.vm.dominantColor)).toBe("background:hsl(221,65%,66%)");
        expect(mainPanelWrapper.find("[data-jest='color-param-main-dominant']").element.value).toBe("#7094E1");
        expect(mainPanelWrapper.find("[data-jest='color-param-main-dominant']").element.value).toBe(wrapper.vm.colorSet.colorCollection.dominant);

    });
    it("generates the right colors", async () => {
        wrapper.find("[data-jest='dominantExpansion']").trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorCollection.combinationCollection[0].hex).toBe("#E19670");
        expect(wrapper.vm.colorCollection.combinationCollection[0].hue).toBe(221 + colorSetParam[0].hueVariation);
        expect(wrapper.vm.colorCollection.combinationCollection[0].light).toBe(wrapper.vm.dominantColor.light);
        expect(wrapper.vm.colorCollection.combinationCollection[0].saturation).toBe(wrapper.vm.dominantColor.saturation);

        expect(wrapper.vm.colorCollection.combinationCollection[1].hue).toBe(221 + colorSetParam[1].hueVariation);
        expect(wrapper.vm.colorCollection.combinationCollection[1].light).toBe(58);
        expect(wrapper.vm.colorCollection.combinationCollection[1].saturation).toBe(87);
        expect(dummyClass.style.color).toBe("rgb(152, 114, 67)");

    });
    it("generates new colors when the hue slider is moved", async () => {
        wrapper.findComponent({ref: "dominantHue"}).vm.$emit("input", 100);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.dominantColor).toStrictEqual({"hue": 100, "light": 66, "saturation": 65});
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorCollection.combinationCollection[0].hex).toBe("#9470E1");
        expect(wrapper.vm.colorCollection.combinationCollection[0].hue).toBe(360 + (100 + colorSetParam[0].hueVariation));
        expect(wrapper.vm.colorCollection.combinationCollection[1].hex).toBe("#9A37F1");
        expect(wrapper.vm.colorCollection.combinationCollection[1].hue).toBe(360 + (100 + colorSetParam[1].hueVariation));
        expect(wrapper.vm.colorParameterCollection.colorSetParamString).toBe("[{\"hueVariation\":-201},{\"hueVariation\":-188,\"saturation\":87,\"light\":58}]");
        expect(wrapper.vm.colorParameterCollection.dominant).toBe("#96E170");
        expect(dummyClass.style.color).toBe("rgb(113, 67, 152)");

    });
    it("changes light when the slider is moved", () => {
        wrapper.findComponent({ref: "dominantLight"}).vm.$emit("input", 23);
        expect(wrapper.vm.colorCollection.combinationCollection[0].light).toBe(23);
        expect(wrapper.vm.colorCollection.combinationCollection[1].light).toBe(58);
        expect(dummyClass.style.color).toBe("rgb(113, 67, 152)");
        expect(dummyClass2.style.color).toBe("rgb(135, 99, 212)");

    });
    it("changes saturation when the slider is moved", () => {
        wrapper.findComponent({ref: "dominantSat"}).vm.$emit("input", 45);
        expect(wrapper.vm.colorCollection.combinationCollection[0].saturation).toBe(45);
        expect(wrapper.vm.colorCollection.combinationCollection[1].saturation).toBe(87);
        expect(dummyClass.style.color).toBe("rgb(113, 67, 152)");
        expect(dummyClass2.style.color).toBe("rgb(47, 26, 91)");
    });
    it("updates the param string", () => {
        expect(mainPanelWrapper.find("[data-jest='color-param-main-dominant']").element.value).toBe("#325520");
        expect(mainPanelWrapper.vm.colorParameterCollection.colorSetParamString).toBe(colorSetParamString);
    });
});

