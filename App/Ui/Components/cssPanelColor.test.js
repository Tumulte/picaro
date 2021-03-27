import {mount} from "@vue/test-utils";

import Vuetify from "vuetify";
import Vue from "vue";
import colorPanel from "./cssPanelColor.vue";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import userStore from "../../Store/user";
import adminStore from "../../Store/admin";
import {generateColorSet} from "../colorGenerator";
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
    it("generates new colors when the main hue slider is moved", async () => {
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
    it("updates the main styleSet values", () => {
        expect(wrapper.vm.styleSet.dominant).toEqual("tst");
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
    it("resets the light when reset is clicked", async () => {

        wrapper.vm.resetSetting("light", 1);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorParameterCollection.colorSetParamString).not.toContain("\"light\":58}");
        expect(wrapper.vm.colorCollection.combinationCollection[0].light).toBe(wrapper.vm.dominantColor.light);

        expect(wrapper.vm.colorCollection.combinationCollection[0].light).toBe(wrapper.vm.dominantColor.light);

        wrapper.vm.resetSetting("saturation", 1);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorCollection.combinationCollection[0].saturation).toBe(wrapper.vm.dominantColor.saturation);
    });
    it("Moves light and saturation with the dominant when it is reset", async () => {

        wrapper.vm.dominantColor.light = 89;
        wrapper.vm.dominantColor.saturation = 9;
        wrapper.vm.updateColor();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorCollection.combinationCollection[0].saturation).toBe(wrapper.vm.dominantColor.saturation);
        expect(wrapper.vm.colorCollection.combinationCollection[0].light).toBe(wrapper.vm.dominantColor.light);

    });
    it("adds colors to the list of colors", async () => {
        wrapper.find("[data-jest='addColor']").trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorSetParamCollection[2].hueVariation).toBe(wrapper.vm.dominantColor.hue);
        expect(wrapper.find("[data-jest='sub-preview2']").exists()).toBe(true);
        wrapper.find("[data-jest='addColor']").trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.colorSetParamCollection[3].hueVariation).toBe(wrapper.vm.dominantColor.hue);
        expect(wrapper.find("[data-jest='sub-preview3']").exists()).toBe(true);
        await mainPanelWrapper.vm.$nextTick();

        expect(mainPanelWrapper.find("[data-jest='color-param-main-colorSetParamString']").element.value).toBe("[{\"hueVariation\":-201},{\"hueVariation\":-188},{\"hueVariation\":96},{\"hueVariation\":96}]");
    });
    it("changes the newly added color", async () => {


        wrapper.find("[data-jest='sub-preview2']").trigger("click");
        expect(wrapper.findAll(".v-slider--horizontal").at(1).exists()).toBe(true);
        Vue.set(wrapper.vm.colorCollection.combinationCollection[3], "hue", 101);

        wrapper.vm.updateCombinationColor(3);
        await wrapper.vm.$nextTick();


        expect(mainPanelWrapper.find("[data-jest='color-param-main-colorSetParamString']").element.value).toBe("[{\"hueVariation\":-201},{\"hueVariation\":-188},{\"hueVariation\":96},{\"hueVariation\":5}]");
    });
    it("removes a color", async () => {
        expect(wrapper.findAll(".sub-color-parameters").length).toBe(4);
        wrapper.find("[data-jest='remove-color-1']").trigger("click");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll(".sub-color-parameters").length).toBe(3);

        expect(mainPanelWrapper.find("[data-jest='color-param-main-colorSetParamString']").element.value).toBe("[{\"hueVariation\":-201},{\"hueVariation\":96},{\"hueVariation\":5}]");
    });
    it("changes a colors properly after", async () => {
        expect(wrapper.findAll(".sub-color-parameters").length).toBe(3);

        Vue.set(wrapper.vm.colorCollection.combinationCollection[2], "hue", 28);
        wrapper.vm.updateCombinationColor(2);

        await wrapper.vm.$nextTick();
        expect(mainPanelWrapper.find("[data-jest='color-param-main-colorSetParamString']").element.value).toBe("[{\"hueVariation\":-201},{\"hueVariation\":96},{\"hueVariation\":-68}]");
    });
});

