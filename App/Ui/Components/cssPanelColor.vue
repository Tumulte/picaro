<script>
var colorUtils = require("../colorHelper").colorUtils;
var template = require("./cssPanelColor.pug").default;
colorUtils = new colorUtils();

var generateNewColorSet = function(dominant, combination) {
  var newCombination = {};
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

var colorComponent = {
  props: ["panelOpened"],
  data: function() {
    return {
      colorSetCollection: colorSetCollection
    };
  },
  template: template,
  methods: {
    bgColor: function(color) {
      return "background:" + colorUtils.getString(color);
    },
    getStringColor: function(color, hueOnly) {
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
      this.colorCollection.dominant = colorUtils
        .hslToHex(this.dominantColor)
        .getString();
      this.$set(
        this.colorParameterCollection,
        "dominant",
        this.colorCollection.dominant
      );
      this.colorCollection = this.colorSet
        .updateColor(this.colorCollection.dominant)
        .generate(
          this.colorSetParamCollection,
          parseInt(this.variationLightAmt),
          parseInt(this.variationSatAmt)
        );
    },

    updateCombinationColor: function(index) {
      this.$set(
        this.colorSetParamCollection,
        index,
        generateNewColorSet(
          this.dominantColor,
          this.colorCollection.combinationCollection[index]
        )
      );
      this.$set(
        this.colorParameterCollection,
        "colorSetParamString",
        JSON.stringify(this.colorSetParamCollection)
      );
      this.colorCollection = this.colorSet.generate(
        this.colorSetParamCollection,
        parseInt(this.variationLightAmt),
        parseInt(this.variationSatAmt)
      );
    },
    updatecolorSetParams: function() {
      this.colorSetParamCollection = JSON.parse(
        this.colorParameterCollection.colorSetParamString
      );
      this.colorCollection = this.colorSet.generate(
        this.colorSetParamCollection
      );
    },
    isMainColor: function(color, subColor) {
      return color === subColor;
    },
    stringify: function(item) {
      return JSON.stringify(item);
    },
    addColor: function() {
      this.colorSetParamCollection.push({
        hueVariation: this.dominantColor.hue
      });
      this.colorCollection = this.colorSet.generate(
        this.colorSetParamCollection,
        parseInt(this.variationLightAmt),
        parseInt(this.variationSatAmt)
      );
    },
    removeColor: function(index) {
      this.colorCollection.combinationCollection.splice(index, 1);
      this.colorSetParamCollection.splice(index, 1);
    },
    updateVariationAmt: function() {
      this.colorCollection = this.colorSet.generate(
        this.colorSetParamCollection,
        parseInt(this.variationLightAmt),
        parseInt(this.variationSatAmt)
      );
    },

    storeColorCoordinate: function(coordinates) {
      this.$store.commit("currentColor", coordinates);
    }
  },
  computed: {
    colorCollection: {
      get() {
        return this.$store.getters.colorCollection;
      },
      set(newValue) {
        this.$store.commit("colorCollection", newValue);
      }
    },
    colorSet: function() {
      return this.$store.getters.colorSet;
    },

    dominantColor: function() {
      if (this.$store.getters.colorCollection.dominant) {
        return colorUtils
          .hexToHsl(this.$store.getters.colorCollection.dominant)
          .getValueCollection();
      } else {
        return {};
      }
    },

    colorSetParamCollection: function() {
      return JSON.parse(this.colorParameterCollection.colorSetParamString);
    },
    colorParameterCollection: {
      get() {
        return this.$store.getters.colorParameterCollection;
      },
      set(newValue) {
        this.$store.commit("colorParameterCollection", newValue);
      }
    },
    variationLightAmt: {
      get() {
        return this.colorParameterCollection.variationLightAmt;
      },
      set(newValue) {
        var colorParameterCollection = this.colorParameterCollection;
        colorParameterCollection.variationLightAmt = newValue;
        this.$store.commit(
          "colorParameterCollection",
          colorParameterCollection
        );
      }
    },
    variationSatAmt: {
      get() {
        return this.colorParameterCollection.variationSatAmt;
      },
      set(newValue) {
        var colorParameterCollection = this.colorParameterCollection;
        this.$set(colorParameterCollection, "variationSatAmt", newValue);
        this.$store.commit(
          "colorParameterCollection",
          colorParameterCollection
        );
      }
    }
  }
};
module.exports = colorComponent;
</script>