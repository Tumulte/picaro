<template lang="pug">
    div
        v-row
            v-col(cols="10")
                v-expansion-panels(:key="componentKey" v-if="loaded")
                    v-expansion-panel(v-for="(propertyCollection, selector) in selectorCollection" :key="selector")
                        v-row(class="px-3")
                            v-col(class="px-3")
                                v-text-field(hide-details=true outlined=true data-jest="selector-card" @click:append="deleteSelector(selector)" :value="selector" @change="changeSelector(selector, $event)" append-icon="mdi-delete-outline")
                            v-col(cols="2")
                                v-expansion-panel-header(class="pa-0" data-jest="selector-accordion")
                        v-expansion-panel-content(class="pa-0")
                            v-row(class="align-items-center" data-jest="select-property" v-for="(value, property) in propertyCollection" :key="property" v-on:click="storeSelectorAndProperty(selector, property)" )
                                v-col(cols="9")
                                    v-row
                                        v-text-field(@change="changeProperty($event, selector, property)" :value="property" data-jest="property-edit")
                                    v-row
                                        span(v-if="property.type === 'ratio'") {{makeRatio(property)}}
                                        span(v-else contenteditable=true @keypress.enter.prevent.stop="saveEdit({selector:selector, property:property, value: true} , $event)" v-html="getProperty(value)")

                                v-col(cols="3")
                                    v-btn(class="w-auto pa-0" text=true @click="deleteProperty(selector,property)")
                                        v-icon mdi-delete-outline

                            v-text-field(type="text" label="Add new property" class="css-panel__input"  @keyup.enter="addProperty($event.target.value,selector)" data-jest="add-property")
            v-col(cols="2")
                ratio-palette
                color-palette
        v-text-field(label="Add new selector" type="text"  class="css-panel__input" v-model="newSelectorName" @keyup.enter="addSelector()" data-jest="add-selector")

</template>
<script>
import { colorHelper } from "../../Src/colorHelper";

import { isHexColor } from "../../Src/utils";
import messages from "../../Messages/messages.json";
import { mapGetters, mapActions } from "vuex";
import ColorPalette from "./colorPalette.vue";
import RatioPalette from "./ratioPalette.vue";

const colorUtils = new colorHelper();
const getColorFromCollection = function(instance, data) {
  if (
    ["dominant", "warning", "alert", "info", "gray", "success"].includes(
      data[0]
    )
  ) {
    const index = `${data[0]}SubCollection`;

    return instance.colorCollection[index][data[1]];
  } else if (
    data[0] === undefined ||
    data[1] === undefined ||
    !instance.colorCollection.combinationCollection[data[0]] // important for when you reduce the number of colors
  ) {
    return "";
  } else {
    return instance.colorCollection.combinationCollection[data[0]]
      .subCombination[data[1]];
  }
};
export default {
  name: "SelectorPanel",
  components: { ColorPalette, RatioPalette },
  data() {
    return {
      currentSelectorProperty: {},
      newSelector: "",
      newProperty: {},
      colorMapping: {},
      message: "",
      newSelectorName: "",
      componentKey: true
    };
  },
  methods: {
    ...mapActions(["addAlert", "triggerNewStyle"]),
    storeSelectorAndProperty: function(selector, property) {
      this.$store.commit("currentSelector", {
        selector: selector,
        property: property
      });
    },
    makeRatio(property) {
      if (property.data === "html") {
        return (
          this.ratioCollection[property.data]["line-height"] /
            this.ratioCollection[property.data]["font-size"] +
          "rem"
        );
      }
      return `${Math.round(
        (parseFloat(this.ratioCollection[property.data]["line-height"]) +
          parseFloat(this.ratioCollection[property.data]["margin-top"] || 0) +
          parseFloat(
            this.ratioCollection[property.data]["margin-bottom"] || 0
          )) *
          100
      ) / 100}rem`;
    },
    addSelector: function() {
      if (!this.newSelectorName) {
        this.addAlert({
          text: "You have to write a valid CSS selector",
          type: "info"
        });
        return;
      }

      if (this.newSelectorName in this.selectorCollection) {
        this.warningMessage = {
          text: messages.warnings.duplicateKey,
          type: "warning",
          textVariable: this.newSelectorName
        };
      } else {
        this.$store.dispatch("addSelector", this.newSelectorName);
        this.newSelectorName = "";
      }
    },
    addProperty: function(value, selector) {
      if (!value) {
        this.addAlert({
          text: "You have to write a valid CSS property",
          type: "info"
        });
      } else if (value in this.selectorCollection[selector]) {
        this.addAlert({
          text: `The property ${value} already exists in ${selector}`,
          type: "info"
        });
      } else {
        this.$store.dispatch("addProperty", {
          selector: selector,
          property: value
        });
        this.$store.commit("currentSelector", {
          selector: selector,
          property: value
        });
      }
    },
    getProperty: function(property) {
      if (isHexColor(property)) {
        return `<div style="width:10px; height:10px; background:${property}"></div>`;
      } else if (property.type === "color") {
        let selectedColor = getColorFromCollection(this, property.data);

        selectedColor = colorUtils.hslToHex(selectedColor).getString();
        this.colorMapping[JSON.stringify(property.data)] = selectedColor;
        return `<div style="width:10px; height:10px; background:${selectedColor}"></div>`;
      } else if (property.type === "ratio") {
        return this.makeRatio(property);
      } else {
        return property;
      }
    },
    async deleteProperty(selector, property) {
      await this.$store.dispatch("awaitConfirmation", {
        text: `Are you sure you want to delete ${property.toUpperCase()} from ${selector} ?`,
        type: "info"
      });

      this.$delete(this.selectorCollection[selector], property);
    },
    async deleteSelector(selector) {
      await this.$store.dispatch("awaitConfirmation", {
        text: `Are you sure you want to delete ${selector.toUpperCase()} and all it's properties ?`,
        type: "info"
      });
      this.$delete(this.selectorCollection, selector);
    },
    changeSelector(selector, event) {
      if (!(event in this.styleSet.selectorCollection)) {
        this.$store.dispatch("updateSelector", {
          old: selector,
          new: event
        });
      } else {
        this.componentKey = !this.componentKey; //cancel changes
        this.addAlert({
          type: "warning",
          text: `The selector ${event.toUpperCase()} already exists`
        });
      }
    },
    changeProperty(event, selector, property) {
      if (!(event in this.styleSet.selectorCollection[selector])) {
        this.$store.dispatch("updateProperty", {
          selector: selector,
          old: property,
          new: event
        });
      } else {
        this.componentKey = !this.componentKey; //cancel changes
        this.addAlert({
          type: "warning",
          text: `The property ${event.toUpperCase()} already exists`
        });
      }
    }
  },
  computed: {
    ...mapGetters(["styleSet", "colorSet", "ratioCollection", "loaded"]),
    selectorCollection() {
      return this.styleSet.selectorCollection;
    },
    colorCollection() {
      if (this.loaded) {
        return this.colorSet.colorCollection;
      } else {
        return [];
      }
    }
  }
};
</script>
