<script>
var template = require("./cssPanelRatio.pug").default;

var panelComponent = {
  template: template,

  /**
   * @type {function}
   */
  data: function() {
    return {
      selectedTag: ""
    };
  },
  methods: {
    makeHtml(text, tag) {
      return "<" + tag + ">" + text + "</" + tag + ">";
    },
    selectTag(tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = "";
      }
      this.selectedTag = tag;
    },
    updateTextParams(property, selector, unit) {
      if (!this.selectorCollection[selector]) {
        this.$store.dispatch("addSelector", selector);
      }
      this.$store.dispatch("addProperty", {
        selector: selector,
        property: property,
        value: this.textType[selector][property] + (unit ? unit : "rem")
      });
    },
    storeRatioCoordinate: function(coordinates) {
      this.$store.commit("currentColor", coordinates);
    }
  },
  computed: {
    selectorCollection() {
      return this.$store.getters.selectorCollection;
    },
    ratioCollection: {
      get() {
        return this.$store.getters.ratioCollection;
      },
      set(newValue) {
        this.$store.commit("ratioCollection", newValue);
      }
    }
  }
};

module.exports = panelComponent;
</script>
