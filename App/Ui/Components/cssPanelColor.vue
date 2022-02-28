<template lang="pug">
    div(id="_color" class="_panel" v-if="displayPanel")
        v-card(class="_container pa-3 ma-3" id="_range-light-container")
            v-slider(label="Count" ticks=true tick-size="3" min="3" max="10" v-model="styleSet.colorGeneratorParams.count" @change="generateColors()" )
            h3 hue
            v-slider(label="variation" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.hue.variation" @change="generateColors()" )
            v-slider(label="curve" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.hue.curve" @change="generateColors()" )
            v-slider(label="move" ticks=true tick-size="3" min="-8" max="8"  v-model="styleSet.colorGeneratorParams.hue.move" @change="generateColors()" )
            h3 Light
            v-slider(label="variation" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.light.variation" @change="generateColors()" )
            v-slider(label="curve" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.light.curve" @change="generateColors()" )
            v-slider(label="move" ticks=true tick-size="3" min="-8" max="8"  v-model="styleSet.colorGeneratorParams.light.move" @change="generateColors()" )
            h3 Saturation
            v-slider(label="variation" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.saturation.variation" @change="generateColors()" )
            v-slider(label="curve" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.saturation.curve" @change="generateColors()" )
            v-slider(label="move" ticks=true tick-size="3" min="-8" max="8"  v-model="styleSet.colorGeneratorParams.saturation.move" @change="generateColors()" )
            h3 text
            v-slider(label="variation" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.text.variation" @change="generateColors()" )
            v-slider(label="curve" ticks=true tick-size="3" min="0" max="10"  v-model="styleSet.colorGeneratorParams.text.curve" @change="generateColors()" )
            v-slider(label="move" ticks=true tick-size="3" min="-8" max="8"  v-model="styleSet.colorGeneratorParams.text.move" @change="generateColors()" )

        div
            div(:style="bgColor(dominantColorParams)" data-jest="dominant-preview")
                div(:style="bgColor(dominantColorParams)" class="mb-0")
                    v-slider(min="0" max="360" v-model="dominantColorParams.hue" @change="updateColor()" label="Hue" thumb-label="always" :thumb-color="getStringColor(dominantColorParams, true)" ref="dominantHue")
                    v-slider(min="0" label="light" max="100" thumb-label="always" @change="updateColor()" v-model="dominantColorParams.light" ref="dominantLight")
                    v-slider(min="0" max="100" thumb-label="always" @change="updateColor()" v-model="dominantColorParams.saturation" ref="dominantSat")
                .color-panel--sample
                    v-card(v-for="(subColor, index) in colorSet.colorCollection.dominantSubCollection" :key="index" @click="toggleColor('dominant',index)" :class="{'__main':isMainColor(bgColor(subColor), bgColor(dominantColorParams)), '__is-hidden': colorIsHidden('dominant', index)}" class="pa-3" v-bind:style="bgColor(subColor)")
            v-card(v-for="(color, index) in colorSet.colorCollection.combinationCollection" :key="index" class="sub-color-parameters")
                div(:style="bgColor(color)" :data-jest="`sub-preview${index}`")
                    v-slider(min="0" max="360" v-model="color.hue" label="Hue" ref="subHue" thumb-label="always" :thumb-color="getStringColor(color, true)" @change="updateCombinationColor(index)")
                    v-slider(label="Light" thumb-label="always" min="0" max="100" v-model="color.light" @change="updateCombinationColor(index)")
                    v-btn(v-if="color.light !== dominantColorParams.light" @click.stop="resetSetting('light', index, color)" ) reset
                    v-slider(label="Sat." thumb-label="always" min="0" max="100" v-model="color.saturation" @change="updateCombinationColor(index)")
                .color-panel--sample
                    v-card(v-for="(subColor, subIndex) in color.subCombination" :key="subIndex" @click="toggleColor('sub', subIndex, index)" :style="bgColor(subColor)" class="pa-3" data-jest="sub-combination-square" :class="{'__is-hidden': colorIsHidden('sub',subIndex,index)}")
                v-card-actions
                    v-btn(text=true @click="removeColor(index)" class="center" :data-jest="`remove-color-${index}`") Remove Color
            .color-panel--sample
                div(v-for="(subColor, index) in colorSet.colorCollection.graySubCollection")
                    v-card(class="pa-3" :style="bgColor(subColor)")
            .color-panel--sample
                div(v-for="(subColor, index) in colorSet.colorCollection.alertSubCollection" class="sub-combination" )
                    v-card(v-bind:style="bgColor(subColor)")
            .color-panel--sample
                div(v-for="(subColor, index) in colorSet.colorCollection.warningSubCollection" class="sub-combination")
                    v-card(v-bind:style="bgColor(subColor)" )
            .color-panel--sample
                div(v-for="(subColor, index) in colorSet.colorCollection.successSubCollection" class="sub-combination")
                    v-card(v-bind:style="bgColor(subColor)")
            .color-panel--sample
                div(v-for="(subColor, index) in colorSet.colorCollection.infoSubCollection" class="sub-combination" )
                    v-card(v-bind:style="bgColor(subColor)")
            v-card-actions
                v-btn(text=true @click="addColor" class="_color-button" data-jest="addColor") Add Color
</template>
<script>
import { RfColorHelper } from "@picaro/colorhelper";
import { mapGetters, mapActions } from "vuex";
import { VSlider } from "vuetify/lib";

const colorUtils = new RfColorHelper();

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
  components: { VSlider },
  props: ["panelOpened", "miniVariant"],
  data() {
    return {
      isMounted: false,
      dominantColorParams: null,
      ready: 0
    };
  },
  watch: {
    styleSet: {
      deep: true,
      handler() {
        this.$store.dispatch("triggerNewStyle");
      }
    },
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
    ...mapActions(["updateSettings"]),
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
    updateColor() {
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
          this.styleSet.colorGeneratorParams
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
        this.styleSet.colorGeneratorParams
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
        this.styleSet.colorGeneratorParams
      );
      this.styleSet.hiddenCombination.sub.push([]);
    },
    removeColor: function(index) {
      this.colorSet.colorCollection.combinationCollection.splice(index, 1);
      this.styleSet.colorParameterCollection.splice(index, 1);
      this.styleSet.hiddenCombination.sub.splice(index, 1);
    },
    generateColors() {
      this.colorSet.generate(
        this.styleSet.colorParameterCollection,
        this.styleSet.colorGeneratorParams
      );
    },
    storeColorCoordinate: function(coordinates) {
      this.$store.commit("currentColor", coordinates);
    },
    toggleColor(location, index, locationIndex) {
      if (location === "dominant") {
        const existingItemIndex = this.styleSet.hiddenCombination[
          location
        ].findIndex(item => item === index);
        if (existingItemIndex === -1) {
          this.styleSet.hiddenCombination[location].push(index);
        } else {
          this.styleSet.hiddenCombination[location].splice(
            existingItemIndex,
            1
          );
        }
      } else if (location === "sub") {
        const existingItemIndex = this.styleSet.hiddenCombination[location][
          locationIndex
        ].findIndex(item => item === index);
        if (existingItemIndex === -1) {
          this.styleSet.hiddenCombination[location][locationIndex].push(index);
        } else {
          this.styleSet.hiddenCombination[location][locationIndex].splice(
            existingItemIndex,
            1
          );
        }
      }
    },
    colorIsHidden(location, index, subIndex) {
      let hiddenCombination;
      if (location === "dominant") {
        hiddenCombination = this.styleSet.hiddenCombination[location];
      } else if (location === "sub") {
        hiddenCombination = this.styleSet.hiddenCombination[location][subIndex];
      }
      return hiddenCombination.find(item => item === index) !== undefined;
    }
  },
  computed: {
    ...mapGetters(["loaded", "settings"]),
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
    },
    displayPanel() {
      return this.ready === 2;
    }
  }
};
</script>
<style>
#_color {
  display: flex;
}
.color-panel--sample {
  display: flex;
}
</style>
