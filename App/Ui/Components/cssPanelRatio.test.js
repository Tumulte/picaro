import {mount} from "@vue/test-utils";

import * as styleSetCollection from "../../Tests/testData.json";
import {colorSet, store, vuetify} from "../../Tests/testSetup";
import cssPanelRatio from "./cssPanelRatio.vue";

const wrapper =
    mount(cssPanelRatio, {
            vuetify, store,
            propsData: {
                miniVariant: false
            }
        }
    );


wrapper.vm.$store.commit("colorSet", colorSet);
wrapper.vm.$store.commit("styleSet", styleSetCollection[0]);
wrapper.vm.$store.commit("loaded", true);

describe("Creates a collection of sizes based on the text sizes", () => {
    it("changes the text size of the DOM when new value is entered", async () => {
        const fontSize = wrapper.find("[data-jest='main-font-size']");
        const lineHeight = wrapper.find("[data-jest='main-line-height']");

        fontSize.setValue("21");
        lineHeight.setValue("32");
        await wrapper.vm.$nextTick();

        let testDom = document.querySelector("html");
        let computedCss = window.getComputedStyle(testDom);
        expect(computedCss.getPropertyValue("font-size")).toBe("21px");
        expect(computedCss.getPropertyValue("line-height")).toBe("32px");

    });
    it("changes the header size of the DOM when new value is entered", async () => {
        wrapper.vm.selectTag("h3");
        await wrapper.vm.$nextTick();

        wrapper.find("[data-jest='ratio-fs']").setValue(2);
        wrapper.find("[data-jest='ratio-lh']").setValue(1.3);
        wrapper.find("[data-jest='ratio-mb']").setValue(3.2);
        wrapper.find("[data-jest='ratio-mt']").setValue(1);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.styleSet.selectorCollection.h3).toStrictEqual({
            "font-size": "2rem",
            "line-height": "1.3rem",
            "margin-bottom": "3.2rem",
            "margin-top": "1rem",
        });
        let testDom = document.querySelector("h3");
        let computedCss = window.getComputedStyle(testDom);
        expect(computedCss.getPropertyValue("font-size")).toBe("2rem");
        expect(computedCss.getPropertyValue("line-height")).toBe("1.3rem");
        expect(computedCss.getPropertyValue("margin-bottom")).toBe("3.2rem");
        expect(computedCss.getPropertyValue("margin-top")).toBe("1rem");

    });
});