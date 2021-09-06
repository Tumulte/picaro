import { mount } from "@vue/test-utils";

import * as styleSetCollection from "../../Tests/testData.json";
import { store, vuetify } from "../../Tests/testSetup";

const wrapper = mount(cssPanelMain, {
  vuetify,
  store,
  propsData: {
    miniVariant: false
  }
});
wrapper.vm.$store.commit("styleSet", styleSetCollection[0]);
wrapper.vm.styleSetCollection = styleSetCollection.default;
wrapper.vm.$store.commit("loaded", true);
wrapper.vm.localFontCollection = [
  { family: "InriaSans-Bold.otf" },
  { family: "EBGaramond-InitialsF1.otf" },
  { family: "Condensed.otf" }
];
wrapper.vm.googleFontCollection = [{ family: "google" }];

const genericFonts = [
  { family: "Arial" },
  { family: "Verdana" },
  { family: "Helvetica" },
  { family: "Tahoma" },
  { family: "Trebuchet MS" },
  { family: "Times New Roman" },
  { family: "Georgia" },
  { family: " Garamond" },
  { family: "Courier New" },
  { family: "Brush Script MT" }
];
describe("Handles the saveStyleSet and the fonts", () => {
  it("changes the styleset when another is selected", async () => {
    expect(wrapper.vm.fontCollection).toStrictEqual([
      ...genericFonts,
      { family: "InriaSans-Bold.otf" },
      { family: "EBGaramond-InitialsF1.otf" },
      { family: "Condensed.otf" }
    ]);

    wrapper.vm.selectedStyleSet = wrapper.vm.styleSetCollection[1];
    wrapper.vm.updateStyleSet();
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.styleSet.setName).toBe("Test Data Name 2");
    expect(wrapper.vm.fontCollection).toStrictEqual([
      ...genericFonts,
      { family: "google" }
    ]);

    expect(wrapper.vm.$store.getters.colorSet.colorCollection.dominant).toBe(
      "#F27F38"
    );
    expect(
      wrapper.vm.$store.getters.colorSet.colorCollection
        .combinationCollection[0].hex
    ).toBe("#F25E36");
    expect(document.getElementById("rf-live-styles").innerHTML).toContain(
      '@import url("https://fonts.googleapis.com/css?family=test2.otf&display=swap");'
    );
  });
  it("changes the font of the DOM", async () => {
    wrapper.vm.styleSet.fontFamilyTitle = "Condensed.otf";
    wrapper.vm.styleSet.fontFamilyMain = "EBGAramond-InitialsF1.otf";
    wrapper.vm.styleSet.fontFamilyAlt = "InriaSans-Bold.otf";

    wrapper.vm.updateCssFont("fontFamilyMain");
    wrapper.vm.updateCssFont("fontFamilyTitle");
    wrapper.vm.updateCssFont("fontFamilyAlt");

    await wrapper.vm.$nextTick();

    let testDom = document.querySelector("h3");
    let computedCss = window.getComputedStyle(testDom);
    expect(computedCss.getPropertyValue("font-family")).toBe("Condensed");
    testDom = document.querySelector(".rf-content-container");
    computedCss = window.getComputedStyle(testDom);
    expect(computedCss.getPropertyValue("font-family")).toBe(
      "EBGAramond-InitialsF1"
    );
    testDom = document.querySelector(".__altfont");
    computedCss = window.getComputedStyle(testDom);
    expect(computedCss.getPropertyValue("font-family")).toBe("InriaSans-Bold");
  });
});
