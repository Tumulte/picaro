<script>
var settings = require("../../../rougeSettings.json");
var colors = require("../colorGenerator");
var template = require("./cssPanelMain.pug").default;

const axios = require("axios");
const shortid = require("shortid");
var utils = require("../../utils");

var getAllStyleSet = function(instance) {
  axios
    .get("/appapi/all")
    .then(response => {
      instance.styleSetCollection = response.data;
    })
    .catch(error => {
      instance.warningMessage = {
        type: "error",
        text: "Request failed.  Returned status of " + error
      };
    });
};

var fontTypes = ["fontFamilyMain", "fontFamilyTitle", "fontFamilyAlt"];
/**
 * @VueComponent
 */
var panelComponent = {
  /**
   * @type {function}
   */
  data: function() {
    return {
      fontCollection: [],
      styleSetCollection: [],
      styleSet: {},
      warningMessage: "",
      googleFontCollection: [],
      localFontCollection: []
    };
  },
  template: template,
  //TODO : organize that thing
  methods: {
    applyStyleSet: function(data, callback) {
      this.styleSet = data;

      this.$store.commit(
        "selectorCollection",
        JSON.parse(data.selectorSetParamString)
      );

      var colorSet = new colors.generateColorSet(data.dominant);

      var colorCollection = colorSet.generate(
        JSON.parse(data.colorSetParamString),
        parseInt(data.variationLightAmt),
        parseInt(data.variationSatAmt)
      );
      this.$store.commit("loaded", true);
      this.$store.commit("colorSet", colorSet);

      this.$store.commit("colorCollection", colorCollection);
      this.$store.commit(
        "ratioCollection",
        JSON.parse(data.ratioCollectionString)
      );

      this.$store.commit("styleSet", data);

      this.$store.commit("colorParameterCollection", {
        dominant: data.dominant,
        colorSetParamString: data.colorSetParamString,
        variationLightAmt: data.variationLightAmt,
        variationSatAmt: data.variationSatAmt
      });
      this.updateFontCollection();
      this.updateAllCssFont();
      this.toggleIndex("cssPanelIndex");
      if (callback) {
        callback();
      }
    },
    updateFontSize: function() {
      this.$store.dispatch("updateStyles", {
        selector: "body",
        property: "fontSize",
        value: this.styleSet.fontSize + "px"
      });
    },
    updateAllCssFont: function() {
      for (var i = 0; i < fontTypes.length; i++) {
        this.updateCssFont(fontTypes[i]);
      }
    },
    updateCssFont: function(fontType) {
      if (this.styleSet[fontType] === "none") {
        return;
      }
      var fontStyleImports = "";
      if (document.getElementById("app-font-style")) {
        document.getElementById("app-font-style").remove();
      }
      var fontStyle = document.createElement("style");
      fontStyle.id = "app-font-style";
      fontStyle.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(fontStyle);
      for (var i = 0; i < fontTypes.length; i++) {
        var currentFontType = fontTypes[i];
        if (this.styleSet[currentFontType] !== "none") {
          if (this.styleSet.fontOrigin === "google") {
            fontStyleImports +=
              '@import url("https://fonts.googleapis.com/css?family=' +
              encodeURI(this.styleSet[currentFontType]) +
              '&display=swap");\n';
          } else if (this.styleSet.fontOrigin === "local") {
            fontStyleImports +=
              "@font-face {\n" +
              'font-family:"' +
              utils.makeFontFamilyName(this.styleSet[currentFontType]) +
              '";\n' +
              'src:url("/fonts/' +
              encodeURI(this.styleSet[currentFontType]) +
              '");\n' +
              "}\n";
          }
        }
      }
      fontStyle.innerHTML = fontStyleImports;

      if (fontType === "fontFamilyMain") {
        this.$store.dispatch("updateStyles", {
          selector: "body",
          property: "fontFamily",
          value: this.styleSet[fontType]
        });
      } else if (fontType === "fontFamilyTitle") {
        var header = "h1_AND_h2_AND_h3_AND_h4_AND_h5_AND_h6";
        this.$store.dispatch("updateStyles", {
          selector: header,
          property: "fontFamily",
          value: this.styleSet[fontType]
        });
      } else if (fontType === "fontFamilyAlt") {
        this.$store.dispatch("updateStyles", {
          selector: "mkClss__altfont",
          property: "fontFamily",
          value: this.styleSet[fontType]
        });
      }
    },
    //TODO : remove
    stringify: function(jsonObject) {
      return JSON.stringify(jsonObject);
    },
    updateIndex: function() {
      this.cssPanelIndex = this.cssPanelIndex === 1 ? 0 : 1;
    },
    toggleIndex: function(index) {
      this[index] = this[index] === 1 ? 0 : 1;
    },
    updateFontCollection() {
      if (this.styleSet.fontOrigin === "google") {
        this.fontCollection = this.googleFontCollection;
      } else if (this.styleSet.fontOrigin === "local") {
        this.fontCollection = this.localFontCollection;
      }
    },
    updateStyleSet: function() {
      this.applyStyleSet(this.styleSet, function() {
        document.getElementById("_admin-form-ext-submit").click();
      });
    },
    submit: function(event) {
      if (this.styleSet.id !== "default") {
        this.checkSave(event);
      } else {
        this.saveNew(event);
      }
    },
    checkSave: function(event) {
      this.warningMessage = {
        text: "Are you sure you want to overwrite this style set ?",
        type: "warning",
        callback: () => {
          var form = event.target.form;
          var formData = new FormData(form);
          axios
            .post(event.target.getAttribute("formAction"), formData, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            })
            .then(() => {
              this.warningMessage = {
                type: "success",
                text: "Saved successfully"
              };
              getAllStyleSet(this);
              this.toggleIndex("cssPanelIndex");
            })
            .catch(errors => {
              this.warningMessage = {
                type: "error",
                text: "Request failed.  Returned status of " + errors
              };
            });
        }
      };
    },
    checkDelete: function(id) {
      this.warningMessage = {
        text: "Are you sure you want to delete this style set ?",
        type: "warning",
        callback: () => {
          axios
            .delete("/appapi/" + id)
            .then(() => {
              this.warningMessage = {
                type: "success",
                text: "This style set  was deleted"
              };

              getAllStyleSet(this);
              this.applyStyleSet(this.styleSetCollection[0]);
            })
            .catch(errors => {
              this.warningMessage = {
                type: "error",
                text: errors
              };
            });
        }
      };
    },
    saveNew: function(event) {
      var id = shortid.generate();
      var previousID = this.styleSet.id;
      this.styleSet.id = id;
      var form = event.target.form;
      var formData = new FormData(form);
      formData.set("id", id);
      axios
        .post(event.target.getAttribute("formAction"), formData)
        .then(() => {
          this.warningMessage = {
            type: "success",
            text: this.styleSet.setName + " saved successfully"
          };
        })
        .catch(errors => {
          this.warningMessage = {
            type: "error",
            text: "Request failed.  Returned status of " + errors
          };
          this.styleSet.id = previousID;
        });
      getAllStyleSet(this);
    }
  },
  watch: {
    "styleSet.fontOrigin"() {
      this.updateFontCollection();
    }
  },
  mounted: function() {
    // TODO : replace with axios for consistency
    //Google Fonts
    var request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=" +
        settings.googleFontKey
    );
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          var data = JSON.parse(request.responseText);

          this.googleFontCollection = data.items;
          this.updateFontCollection();
        }
      }
    };
    request.send();
    //Local Fonts
    axios
      .get("/appapi/fonts")
      .then(response => {
        this.localFontCollection = response.data;
        this.updateFontCollection();
      })
      .catch(error => {
        this.localFontCollection = [];
        this.warningMessage.push(error);
      });
    axios
      .get("/appapi")
      .then(response => {
        this.applyStyleSet(response.data);
      })
      .catch(error => {
        this.warningMessage = {
          type: "error",
          text: "Request failed.  Returned status of " + error
        };
      });
    getAllStyleSet(this);
  },
  computed: {
    selectorCollectionString: function() {
      return JSON.stringify(this.$store.getters.selectorCollection);
    },
    ratioCollectionString: function() {
      return JSON.stringify(this.$store.getters.ratioCollection);
    },
    cssPanelIndex: {
      get() {
        return this.$store.getters.cssPanelIndex;
      },
      set(newValue) {
        this.$store.commit("cssPanelIndex", newValue);
      }
    },
    selectorIndex: {
      get() {
        return this.$store.getters.selectorIndex;
      },
      set(newValue) {
        this.$store.commit("selectorIndex", newValue);
      }
    },
    colorParameterCollection: function() {
      return this.$store.getters.colorParameterCollection;
    }
  }
};

module.exports = panelComponent;
</script>