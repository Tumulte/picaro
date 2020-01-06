<script>
var colorUtils = require("../colorHelper").colorUtils;
var template = require("./cssPanelSelector.pug").default;

colorUtils = new colorUtils();
var messages = require("../../Messages/messages.json");
var cssGenerator = require("../cssGenerator");
var generateCss = false;
var utils = require("../../utils");
var getColorFromCollection = function(instance, data) {
  if (
    ["dominant", "warning", "alert", "info", "gray", "success"].includes(
      data[0]
    )
  ) {
    var index = data[0] + "SubCollection";
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
var selectorComponent = {
  data: function() {
    return {
      currentSelectorProperty: {},
      newSelector: "",
      newProperty: {},
      colorMapping: {},
      warningMessage: ""
    };
  },
  template: template,
  methods: {
    storeSelectorAndProperty: function(selector, property) {
      selector = utils.cssToJson(selector);
      this.$store.commit("currentSelector", {
        selector: selector,
        property: property
      });
    },

    addSelector: function(value) {
      value = utils.cssToJson(value);

      if (value in this.selectorCollection) {
        this.warningMessage = {
          text: messages.warnings.duplicateKey,
          type: "warning",
          textVariable: value
        };
      } else {
        this.$store.dispatch("addSelector", value);
      }
      value = "";
    },
    addProperty: function(value, selector) {
      value = utils.cssToJson(value);
      selector = utils.cssToJson(selector);
      if (value in this.selectorCollection[selector]) {
        this.warningMessage = {
          text: messages.warnings.duplicateKey,
          type: "warning",
          textVariable: value
        };
      } else {
        this.$store.dispatch("addProperty", {
          selector: selector,
          property: value
        });
        this.$store.commit("currentSelector", {
          selector: selector,
          property: value
        });

        this.$store.commit("selectorIndex", value + selector);
      }
    },
    getProperty: function(property) {
      if (utils.isHexColor(property)) {
        return (
          '<div style="width:10px; height:10px; background:' +
          property +
          '"></div>'
        );
      } else if (property.type === "color") {
        var selectedColor = getColorFromCollection(this, property.data);
        selectedColor = colorUtils.hslToHex(selectedColor).getString();
        this.colorMapping[JSON.stringify(property.data)] = selectedColor;
        return (
          '<div style="width:10px; height:10px; background:' +
          selectedColor +
          '"></div>'
        );
      } else {
        return property;
      }
    },
    deleteProperty: function(selector, property) {
      this.warningMessage = {
        text: "Are you sure you want to delete ?",
        type: "warning",
        callback: () => {
          this.$delete(this.selectorCollection[selector], property);
        }
      };
    },
    deleteSelector: function(selector) {
      this.warningMessage = {
        text: "Are you sure you want to delete %s and all it's properties ?",
        type: "warning",
        textVariable: selector,
        callback: () => {
          this.$delete(this.selectorCollection, selector);
        }
      };
    },
    jsonToCss: function(text) {
      return utils.jsonToCss(text);
    },
    saveEdit: function(coordinates, event) {
      var value = utils.cssToJson(event.target.innerHTML);
      if (coordinates.value) {
        this.$set(
          this.selectorCollection[coordinates.selector],
          coordinates.property,
          event.target.innerHTML
        );
      } else if (coordinates.property) {
        this.$set(
          this.selectorCollection[coordinates.selector],
          value,
          this.selectorCollection[coordinates.selector][coordinates.property]
        );
        this.$delete(
          this.selectorCollection[coordinates.selector],
          coordinates.property
        );
      } else {
        this.$set(
          this.selectorCollection,
          value,
          this.selectorCollection[coordinates.selector]
        );
        this.$delete(this.selectorCollection, coordinates.selector);
      }
    }
  },
  mounted: function() {
    generateCss.apply(this.selectorCollection, this.colorMapping);
  },
  computed: {
    colorCollection: function() {
      return this.$store.getters.colorCollection;
    },
    selectorCollection: function() {
      generateCss = new cssGenerator.generateCss(
        this.$store.getters.selectorCollection
      );
      return this.$store.getters.selectorCollection;
    },
    selectorIndex: function() {
      return this.$store.getters.selectorIndex;
    }
  },
  //TODO : that's confusing to have the master style updater here
  updated: function() {
    var self = this;
    this.$nextTick(function() {
      generateCss.apply(self.selectorCollection, self.colorMapping);
    });
  }
};
module.exports = selectorComponent;
</script>