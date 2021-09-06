<template lang="pug">
    div(id="_color" class="_panel" v-if="loaded")
        v-card(v-if="!miniVariant" class="_container pa-3 ma-3" id="_range-light-container")
            v-slider(label="Light variation" ticks=true tick-size="3" min="0" max="10" name="variation-light-amt" v-model="styleSet.variationLightAmt" @change="updateVariationAmt()" )
            v-slider(label="Saturation variation" ticks=true tick-size="3" min="0" max="10" name="variation-sat-amt" v-model="styleSet.variationSatAmt" @change="updateVariationAmt()" )
        v-expansion-panels
            v-expansion-panel(:style="bgColor(dominantColorParams)" v-if="!miniVariant" data-jest="dominant-preview")
                v-expansion-panel-header(data-jest="dominantExpansion")
                v-expansion-panel-content(:style="bgColor(dominantColorParams)" class="mb-0")
                    v-slider(min="0" max="360" v-model="dominantColorParams.hue" @change="updateColor()" label="Hue" thumb-label="always" :thumb-color="getStringColor(dominantColorParams, true)" ref="dominantHue")
                    v-slider(min="0" label="light" max="100" thumb-label="always" @change="updateColor()" v-model="dominantColorParams.light" ref="dominantLight")
                    v-slider(min="0" max="100"  thumb-label="always" @change="updateColor()"  v-model="dominantColorParams.saturation" ref="dominantSat")
            v-row(class="px-3")
                v-card(v-for="(subColor, index) in colorSet.colorCollection.dominantSubCollection" :key="index" :class="{'__main':isMainColor(bgColor(subColor), bgColor(dominantColorParams))}" v-on:click="storeColorCoordinate(['dominant', index])" class="pa-3" v-bind:style="bgColor(subColor)")
            v-card(v-for="(color, index) in colorSet.colorCollection.combinationCollection" :key="index" class="sub-color-parameters")
                v-expansion-panel(v-bind:style="bgColor(color)"  v-if="!miniVariant"  :data-jest="`sub-preview${index}`")
                    v-expansion-panel-header
                    v-expansion-panel-content
                        v-slider(min="0" max="360" v-model="color.hue" label="Hue" ref="subHue" thumb-label="always" :thumb-color="getStringColor(color, true)" @change="updateCombinationColor(index)")
                        v-slider(label="Light" thumb-label="always" min="0" max="100"  v-model="color.light" @change="updateCombinationColor(index)")
                        v-btn(v-if="color.light !== dominantColorParams.light" @click.stop="resetSetting('light', index, color)" ) reset
                        v-slider(label="Sat." thumb-label="always" min="0" max="100"  v-model="color.saturation" @change="updateCombinationColor(index)")
                v-row(class="px-3")
                    v-card(v-for="(subColor, subIndex) in color.subCombination" :key="subIndex" v-on:click="storeColorCoordinate([index, subIndex])" :style="bgColor(subColor)" class="pa-3" data-jest="sub-combination-square")
                v-card-actions
                    v-btn(text=true @click="removeColor(index)" class="center" v-if="!miniVariant"  :data-jest="`remove-color-${index}`") Remove Color
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorSet.colorCollection.graySubCollection" v-on:click="storeColorCoordinate(['gray', index])")
                v-card(class="pa-3" :style="bgColor(subColor)")
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorSet.colorCollection.alertSubCollection" v-on:click="storeColorCoordinate(['alert', index])" class="sub-combination" )
                v-card(v-bind:style="bgColor(subColor)")
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorSet.colorCollection.warningSubCollection" v-on:click="storeColorCoordinate(['warning', index])" class="sub-combination")
                v-card(v-bind:style="bgColor(subColor)" )
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorSet.colorCollection.successSubCollection" v-on:click="storeColorCoordinate(['success', index])" class="sub-combination")
                v-card(v-bind:style="bgColor(subColor)")
        v-row(class="px-3")
            div(v-for="(subColor, index) in colorSet.colorCollection.infoSubCollection" v-on:click="storeColorCoordinate(['info', index])" class="sub-combination" )
                v-card(v-bind:style="bgColor(subColor)")
        v-card-actions
            v-btn(text=true @click="addColor" class="_color-button" v-if="!miniVariant" data-jest="addColor") Add Color
</template>
<script>
import { colorHelper } from "../colorHelper";
import { mapGetters } from "vuex";

const colorUtils = new colorHelper();

const generateNewColorSet = function(dominant, combination) {
  const newCombination = {};
  newCombination.hueVariation =
    parseInt(combination.hue) - parseInt(dominant.hue);
  if (parseInt(combination.saturation) !== parseInt(dominant.saturation)) {
    newCombination.saturation = parseInt(combination.saturation);
  }
  if (parseInt(combination.light) !== parseInt(dominant.light)) {
    newCombination.light = parseInt(combination.light);
  }
  return newCombination;
};

export default {
  props: ["panelOpened", "miniVariant"],
  data() {
    return {
      isMounted: false,
      dominantColorParams: null,
      ready: 0
    };
  },
  watch: {
    isMounted() {
      if (this.isMounted === true) {
        this.ready += 1;
      }
    },
    loaded() {
      if (this.loaded === true) {
        this.ready += 1;
      }
    },
    ready() {
      if (this.ready >= 2) {
        this.dominantColorParams = colorUtils
          .hexToHsl(this.styleSet.dominant)
          .getValueCollection();
      }
    }
  },
  mounted() {
    this.isMounted = true;
    if (this.loaded === true) {
      this.ready += 1;
    }
  },
  methods: {
    resetSetting(setting, index) {
      let newSettings = this.styleSet.colorParameterCollection[index];
      delete newSettings[setting];

      this.$set(this.styleSet.colorParameterCollection, index, newSettings);
      this.regenerateColorSet();
    },
    bgColor: function(color) {
      return `background:${colorUtils.getString(color)}`;
    },
    getStringColor(color, hueOnly) {
      if (hueOnly) {
        color = JSON.parse(JSON.stringify(color));
        color.light = 50;
        color.saturation = 100;
      }
      return colorUtils.hslToHex(color).getString();
    },
    checkNum: function(number, min, max) {
      min = min ? min : 0;
      number = number < min ? min : number;
      number = number > max ? max : number;
      return isNaN(parseInt(number)) ? min : number;
    },
    updateColor: function() {
      if (!this.isMounted && !this.loaded) {
        //prevent initial trigger
        return;
      }
      this.$set(
        this.styleSet,
        "dominant",
        colorUtils.hslToHex(this.dominantColorParams).getString()
      );
      this.colorSet
        .updateColor(this.dominantColorParams)
        .generate(
          this.styleSet.colorParameterCollection,
          parseInt(this.styleSet.variationLightAmt),
          parseInt(this.styleSet.variationSatAmt)
        );
    },

    updateCombinationColor: function(index) {
      this.$set(
        this.styleSet.colorParameterCollection,
        index,
        generateNewColorSet(
          this.dominantColorParams,
          this.colorSet.colorCollection.combinationCollection[index]
        )
      );

      this.regenerateColorSet();
    },
    regenerateColorSet: function() {
      this.colorSet.generate(
        this.styleSet.colorParameterCollection,
        parseInt(this.styleSet.variationLightAmt),
        parseInt(this.styleSet.variationSatAmt)
      );
    },
    isMainColor: function(color, subColor) {
      return color === subColor;
    },
    stringify: function(item) {
      return JSON.stringify(item);
    },
    addColor: function() {
      const newColorSet = this.styleSet.colorParameterCollection;
      newColorSet.push({
        hueVariation: 0
      });
      this.colorSet.generate(
        this.styleSet.colorParameterCollection,
        parseInt(this.styleSet.variationLightAmt),
        parseInt(this.styleSet.variationSatAmt)
      );
    },
    removeColor: function(index) {
      this.colorSet.colorCollection.combinationCollection.splice(index, 1);
      this.styleSet.colorParameterCollection.splice(index, 1);
    },
    updateVariationAmt: function() {
      this.colorSet.generate(
        this.styleSet.colorParameterCollection,
        parseInt(this.styleSet.variationLightAmt),
        parseInt(this.styleSet.variationSatAmt)
      );
    },
    storeColorCoordinate: function(coordinates) {
      this.$store.commit("currentColor", coordinates);
      this.$store.dispatch("triggerNewStyle");
    }
  },
  computed: {
    ...mapGetters(["loaded"]),
    styleSet() {
      return this.$store.getters.styleSet;
    },
    colorSet: {
      get() {
        return this.$store.getters.colorSet;
      },
      set(value) {
        this.$store.commit("colorSet", value);
      }
    }
  }
};
</script>
