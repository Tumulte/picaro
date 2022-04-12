<template lang="pug">
div(id="typography-panel")
    v-radio-group(dense v-model="styleSet.fontOrigin" hide-details)
        v-radio(label="Google Fonts" name="fontOrigin" value="google")
        v-radio(label="Local Fonts" name="fontOrigin" value="local")
    v-select(outlined hide-details dense v-model="styleSet.fontFamilyMain" label="Main Font" :items="fontCollection" item-text="family" item-value="family"  @change="updateCssFont('fontFamilyMain')")
    v-select(outlined hide-details dense v-model="styleSet.fontFamilyAlt" label="Alternative Font" item-text="family" item-value="family" :items="fontCollection" @change="updateCssFont('fontFamilyAlt')")
    v-select(outlined hide-details dense v-model="styleSet.fontFamilyTitle" label="Title Font" item-text="family" item-value="family" :items="fontCollection" @change="updateCssFont('fontFamilyTitle')")
</template>
<script>
import settings from "../../../rougeSettings.json";
import { generateColorSet } from "@picaro/colorgenerator";
import axios from "axios";
import { mapActions } from "vuex";
import { webSafeFonts } from "../../Src/utils";

const { googleFontKey } = settings;

const webSafeFontsFormatted = webSafeFonts.map(item => {
  return {
    family: item
  };
});

const fontTypes = ["fontFamilyMain", "fontFamilyTitle", "fontFamilyAlt"];

export default {
  name: "TypographyPanel",
  data() {
    return {
      fontCollection: [],
      styleSetCollection: [],
      selectedStyleSet: {},
      googleFontCollection: [],
      localFontCollection: [],
      loaded: false
    };
  },
  computed: {
    cssPanelIndex: {
      get() {
        return this.$store.getters.cssPanelIndex;
      },
      set(newValue) {
        this.$store.commit("cssPanelIndex", newValue);
      }
    },
    styleSet: {
      get() {
        return this.$store.getters.styleSet;
      },
      set(value) {
        this.$store.commit("styleSet", value);
      }
    }
  },
  watch: {
    "styleSet.fontOrigin"() {
      this.updateFontCollection();
    }
  },
  mounted() {
    // TODO : replace with axios for consistency
    //Google Fonts
    if (googleFontKey) {
      const request = new XMLHttpRequest();
      request.open(
        "GET",
        `https://www.googleapis.com/webfonts/v1/webfonts?sort=alpha&key=${googleFontKey}`
      );
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            this.googleFontCollection = data.items;
            this.updateFontCollection();
          }
        }
      };
      request.send();
    }
    axios
      .get("/settingapi/fonts")
      .then(response => {
        this.localFontCollection = response.data;
        this.updateFontCollection();
      })
      .catch(error => {
        this.localFontCollection = [];
        this.addAlert({ type: "error", text: error });
      });
  },
  //TODO : organize that thing
  methods: {
    ...mapActions(["triggerNewStyle", "addAlert", "awaitConfirmation"]),
    applyStyleSet: function(styleSet, callback) {
      this.styleSet = styleSet;

      const colorSet = new generateColorSet(styleSet.dominant);

      colorSet.generate(
        styleSet.colorParameterCollection,
        styleSet.colorGeneratorParams
      );
      this.$store.commit("loaded", true);
      this.$store.commit("colorSet", colorSet);

      this.$store.commit("styleSet", styleSet);

      this.toggleIndex("cssPanelIndex");
      if (callback) {
        callback();
      }
    },

    updateAllCssFont: function() {
      for (let i = 0; i < fontTypes.length; i++) {
        this.updateCssFont(fontTypes[i]);
      }
    },
    updateCssFont: function(fontType) {
      if (this.styleSet[fontType] === "none") {
        return;
      }
      if (fontType === "fontFamilyMain") {
        this.$store.dispatch("updateStyles", {
          selector: "body",
          property: "font-family",
          value: this.styleSet[fontType]
        });
      } else if (fontType === "fontFamilyTitle") {
        const header = "h1, h2, h3, h4, h5, h6";
        this.$store.dispatch("updateStyles", {
          selector: header,
          property: "font-family",
          value: this.styleSet[fontType]
        });
      } else if (fontType === "fontFamilyAlt") {
        this.$store.dispatch("updateStyles", {
          selector: ".__altfont",
          property: "font-family",
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
      this.fontCollection = [...webSafeFontsFormatted, ...this.fontCollection];
    },
    updateStyleSet: function() {
      this.applyStyleSet(this.selectedStyleSet);
    },
    submit: function(event) {
      if (this.styleSet.id !== "default") {
        this.checkSave(event);
      } else {
        this.saveNew(event);
      }
    }
  }
};
</script>
<style scoped>
#typography-panel {
  & :deep() .v-input {
    margin: 0 26px;
  }
  background: #fff;
  display: flex;
  padding: 16px 26px;
  align-items: center;
}
</style>
