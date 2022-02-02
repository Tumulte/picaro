import { mount } from "@vue/test-utils";

import Vue from "vue";
import colorPanel from "./cssPanelColor.vue";
import * as styleSetCollection from "../../Tests/testData.json";
import { colorSet, store, vuetify } from "../../Tests/testSetup";

const styleSet = styleSetCollection[0];
const wrapper = mount(colorPanel, {
  vuetify,
  store,
  propsData: {
    miniVariant: false
  }
});
colorSet.generate(
  styleSet.colorParameterCollection,
  styleSet.colorGeneratorParams
);

wrapper.vm.$store.commit("styleSet", styleSet);
wrapper.vm.$store.commit("colorSet", colorSet);
wrapper.vm.$store.commit("loaded", true);

const colorSetParam = wrapper.vm.styleSet.colorParameterCollection;

describe("color css panel", () => {
  it("Display the right color", async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.bgColor(wrapper.vm.dominantColorParams)).toBe(
      "background:hsl(221,65%,66%)"
    );
  });
  it("generates the right colors", async () => {
    wrapper.find("[data-jest='dominantExpansion']").trigger("click");
    await wrapper.vm.$nextTick();
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].hex
    ).toBe("#E19670");
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].hue
    ).toBe(221 + colorSetParam[0].hueVariation);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].light
    ).toBe(wrapper.vm.dominantColorParams.light);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].saturation
    ).toBe(wrapper.vm.dominantColorParams.saturation);

    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].hue
    ).toBe(221 + colorSetParam[1].hueVariation);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].light
    ).toBe(58);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].saturation
    ).toBe(87);
  });
  it("generates new colors when the main hue slider is moved", async () => {
    wrapper.findComponent({ ref: "dominantHue" }).vm.$emit("input", 100);
    wrapper.findComponent({ ref: "dominantHue" }).vm.$emit("change");

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.dominantColorParams).toStrictEqual({
      hue: 100,
      light: 66,
      saturation: 65
    });
    await wrapper.vm.$nextTick();
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].hex
    ).toBe("#9470E1");
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].hue
    ).toBe(360 + (100 + colorSetParam[0].hueVariation));
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].hex
    ).toBe("#9A37F1");
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].hue
    ).toBe(360 + (100 + colorSetParam[1].hueVariation));
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1]
        .subCombination[5].hue
    ).toBe(360 + (100 + colorSetParam[1].hueVariation));

    expect(wrapper.vm.styleSet.colorParameterCollection).toStrictEqual([
      { hueVariation: -201 },
      {
        hueVariation: -188,
        saturation: 87,
        light: 58
      }
    ]);
    expect(wrapper.vm.styleSet.dominant).toBe("#96E170");
  });
  it("changes light when the slider is moved", async () => {
    wrapper.findComponent({ ref: "dominantLight" }).vm.$emit("input", 23);
    wrapper.findComponent({ ref: "dominantLight" }).vm.$emit("change");
    await wrapper.vm.$nextTick();
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].light
    ).toBe(23);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].light
    ).toBe(58);
  });
  it("changes saturation when the slider is moved", async () => {
    wrapper.findComponent({ ref: "dominantSat" }).vm.$emit("input", 45);
    wrapper.findComponent({ ref: "dominantSat" }).vm.$emit("change");
    await wrapper.vm.$nextTick();

    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].saturation
    ).toBe(45);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[1].saturation
    ).toBe(87);
  });
  it("resets the light when reset is clicked", async () => {
    wrapper.vm.resetSetting("light", 1);
    await wrapper.vm.$nextTick();
    expect(
      JSON.stringify(wrapper.vm.styleSet.colorParameterCollection)
    ).not.toContain('"light":58}');
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].light
    ).toBe(wrapper.vm.dominantColorParams.light);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].light
    ).toBe(wrapper.vm.dominantColorParams.light);
    wrapper.vm.resetSetting("saturation", 1);
    await wrapper.vm.$nextTick();
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].saturation
    ).toBe(wrapper.vm.dominantColorParams.saturation);
  });
  it("Moves light and saturation with the dominant when it is reset", async () => {
    wrapper.vm.dominantColorParams.light = 89;
    wrapper.vm.dominantColorParams.saturation = 9;
    wrapper.vm.updateColor();
    await wrapper.vm.$nextTick();
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].saturation
    ).toBe(wrapper.vm.dominantColorParams.saturation);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[0].light
    ).toBe(wrapper.vm.dominantColorParams.light);
  });
  it("adds colors to the list of colors", async () => {
    wrapper.find("[data-jest='addColor']").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.styleSet.colorParameterCollection[2].hueVariation).toBe(
      0
    );
    expect(wrapper.find("[data-jest='sub-preview2']").exists()).toBe(true);
    wrapper.find("[data-jest='addColor']").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.styleSet.colorParameterCollection[3].hueVariation).toBe(
      0
    );
    expect(wrapper.find("[data-jest='sub-preview3']").exists()).toBe(true);
    expect(wrapper.vm.styleSet.colorParameterCollection).toStrictEqual([
      { hueVariation: -201 },
      { hueVariation: -188 },
      { hueVariation: 0 },
      { hueVariation: 0 }
    ]);
  });
  it("changes the newly added color", async () => {
    expect(wrapper.find("[data-jest='sub-preview3']").exists()).toBe(true);
    wrapper.find("[data-jest='sub-preview2']").trigger("click");
    expect(
      wrapper
        .findAll(".v-slider--horizontal")
        .at(1)
        .exists()
    ).toBe(true);
    await wrapper.vm.$nextTick();
    Vue.set(
      wrapper.vm.colorSet.colorCollection.combinationCollection[3],
      "hue",
      30
    );
    await wrapper.vm.$nextTick();
    wrapper.vm.updateCombinationColor(3);

    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[3]
        .subCombination[5].hue
    ).toBe(30);
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.styleSet.colorParameterCollection).toStrictEqual([
      { hueVariation: -201 },
      { hueVariation: -188 },
      { hueVariation: 0 },
      { hueVariation: -70 }
    ]);
  });
  it("removes a color", async () => {
    expect(wrapper.findAll(".sub-color-parameters").length).toBe(4);
    wrapper.find("[data-jest='remove-color-1']").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.findAll(".sub-color-parameters").length).toBe(3);
  });
  it("changes a colors properly after", async () => {
    expect(wrapper.findAll(".sub-color-parameters").length).toBe(3);

    Vue.set(
      wrapper.vm.colorSet.colorCollection.combinationCollection[2],
      "hue",
      128
    );
    wrapper.vm.updateCombinationColor(2);
    expect(
      wrapper.vm.colorSet.colorCollection.combinationCollection[2]
        .subCombination[5].hue
    ).toBe(128);

    expect(wrapper.vm.styleSet.colorParameterCollection).toStrictEqual([
      { hueVariation: -201 },
      { hueVariation: 0 },
      { hueVariation: 28 }
    ]);
  });
});
