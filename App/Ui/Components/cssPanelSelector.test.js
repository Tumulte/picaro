import {mount} from "@vue/test-utils";
import * as styleSetCollection from "../../Tests/testData.json";
import selectorPanel from "./cssPanelselector.vue";
import {colorSet, store, vuetify} from "../../Tests/testSetup";
import cssPanelColor from "./cssPanelColor";

const styleSet = styleSetCollection[0];

const wrapper =
    mount(selectorPanel, {
            vuetify, store,
            propsData: {
                miniVariant: false
            }
        }
    );
const colorWrapper =
    mount(cssPanelColor, {
            vuetify, store,
            propsData: {
                miniVariant: false
            }
        }
    );
colorSet.generate(
    styleSet.colorParameterCollection,
    parseInt(styleSet.variationLightAmt),
    parseInt(styleSet.variationSatAmt)
);
wrapper.vm.$store.commit("colorSet", colorSet);
wrapper.vm.$store.commit("styleSet", styleSet);
wrapper.vm.$store.commit("loaded", true);

describe("The selector panel handles the CSS edition of the app", () => {

    it("it creates selectors", async () => {
        const selectorInput = wrapper.find("[data-jest='add-selector']");
        selectorInput.trigger("keyup.enter");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.selectorCollection).toStrictEqual({});
        expect(wrapper.vm.$store.getters.alertCollection[0].text).toContain("valid CSS");

        selectorInput.setValue(".css-test");
        selectorInput.trigger("keyup.enter");
        selectorInput.setValue("#a-id");
        selectorInput.trigger("keyup.enter");
        selectorInput.setValue("span, div.plout");
        selectorInput.trigger("keyup.enter");
        selectorInput.setValue("div:nth-of-type(odd)[type=\"disabled\"]");
        selectorInput.trigger("keyup.enter");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {},
            "#a-id": {},
            "span, div.plout": {},
            "div:nth-of-type(odd)[type=\"disabled\"]": {}

        });

    });
    it("edits existing selectors", async () => {
        wrapper.vm.changeSelector("span, div.plout", "span");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {},
            "#a-id": {},
            "span": {},
            "div:nth-of-type(odd)[type=\"disabled\"]": {}
        });
    });
    it("cancels edition if the selector already exists", () => {
        wrapper.vm.changeSelector("span", "#a-id");

        expect(wrapper.vm.$store.getters.alertCollection[1].text).toContain("exists");
        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {},
            "#a-id": {},
            "span": {},
            "div:nth-of-type(odd)[type=\"disabled\"]": {}
        });
    });
    it("deletes the selector when icon is clicked", async () => {
        wrapper.vm.deleteSelector("#a-id");
        const key = wrapper.vm.$store.getters.alertCallbackCollection[0].key;
        await wrapper.vm.$nextTick();
        wrapper.vm.$store.dispatch("addAlertConfirmation", {key: key, index: 0});
        await wrapper.vm.$nextTick();
        document.getElementsByClassName("rf-alert-button")[0].click();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {},
            "div:nth-of-type(odd)[type=\"disabled\"]": {},
            "span": {},

        });
    });
    it("creates properties for selectors", async () => {
        wrapper.findAll("[data-jest='selector-accordion']").at(2).trigger("click");
        await wrapper.vm.$nextTick();
        let propertyInput = wrapper.find("[data-jest='add-property']");
        propertyInput.setValue("");
        propertyInput.trigger("keyup.enter");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$store.getters.alertCollection[2].text).toContain("valid CSS property");
        propertyInput.setValue("color");
        propertyInput.trigger("keyup.enter");
        await wrapper.vm.$nextTick();
        propertyInput.setValue("color");
        propertyInput.trigger("keyup.enter");
        expect(wrapper.vm.$store.getters.alertCollection[3].text).toContain("The property color already exists ");
        propertyInput.setValue("padding");
        propertyInput.trigger("keyup.enter");
        await wrapper.vm.$nextTick();

        wrapper.find("[data-jest='selector-accordion']").trigger("click");
        await wrapper.vm.$nextTick();

        propertyInput = wrapper.find("[data-jest='add-property']");
        propertyInput.setValue("color");
        propertyInput.trigger("keyup.enter");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {color: ""},
            "div:nth-of-type(odd)[type=\"disabled\"]": {},
            "span": {color: "", padding: ""},
        });
    });
    it("modifies property", async () => {
        wrapper.vm.changeProperty("background", "span", "color");
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {color: ""},
            "div:nth-of-type(odd)[type=\"disabled\"]": {},
            "span": {background: "", padding: ""},
        });
    });
    it("deletes the property when icon is clicked", async () => {
        wrapper.vm.deleteProperty("span", "padding");
        const key = wrapper.vm.$store.getters.alertCallbackCollection[0].key;
        await wrapper.vm.$nextTick();
        wrapper.vm.$store.dispatch("addAlertConfirmation", {key: key, index: 0});
        await wrapper.vm.$nextTick();
        document.getElementsByClassName("rf-alert-button")[0].click();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {color: ""},
            "div:nth-of-type(odd)[type=\"disabled\"]": {},
            "span": {background: ""},

        });
    });

    it("adds the proper color to the selector", async () => {
        wrapper.find("[data-jest='select-property']").trigger("click");
        await wrapper.vm.$nextTick();
        let colorSquare = colorWrapper.findAll("[data-jest=\"sub-combination-square\"]").at(14);
        colorSquare.trigger("click");
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.selectorCollection).toStrictEqual({
            ".css-test": {
                color: {
                    "data": [1, 4],
                    "type": "color",
                },
            },
            "div:nth-of-type(odd)[type=\"disabled\"]": {},
            "span": {background: ""},

        });
        let testDom = document.querySelector(".css-test");
        let computedCss = window.getComputedStyle(testDom);
        expect(computedCss.getPropertyValue("color")).toBe("rgb(201, 142, 69)");

        colorSquare = colorWrapper.findAll("[data-jest=\"sub-combination-square\"]").at(8);
        colorSquare.trigger("click");
        await wrapper.vm.$nextTick();
        computedCss = window.getComputedStyle(testDom);
        expect(computedCss.getPropertyValue("color")).toBe("rgb(250, 192, 163)");

        wrapper.vm.changeSelector(".css-test", ".css-test2");
        await wrapper.vm.$nextTick();
        computedCss = window.getComputedStyle(testDom);
        expect(computedCss.getPropertyValue("color")).toBe("");
        testDom = document.querySelector(".css-test2");
        computedCss = window.getComputedStyle(testDom);
        expect(computedCss.getPropertyValue("color")).toBe("rgb(250, 192, 163)");


    });
});
