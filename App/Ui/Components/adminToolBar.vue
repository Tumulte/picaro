<template lang="pug">
    .toolbar-container
        #rf-toolbar
            img(src="/public/svg/rflogo.svg" id="rf-logo" @click="toggleBar()")
            .toolbar-section(v-if="displayToolbar" id="rf-toolbar--design")
                .toolbar-section-title Design
                v-btn(@click="openPanel('css')" dark :outlined="openedPanel !== 'css'" :depressed="openedPanel === 'css'" class="ml-2" x-small) CSS
                v-btn(@click="openPanel('typography')" dark :outlined="openedPanel !== 'typography'" :depressed="openedPanel === 'typography'" class="ml-2" x-small) Typography
                v-btn(@click="openPanel('colors')" :dark="!editLayout" :outlined="!editLayout" :depressed="editLayout" class="ml-2" x-small) Colors
                v-btn(@click="openPanel('ratio')" dark :outlined="openedPanel !== 'ratio'" :depressed="openedPanel === 'ratio'" class="ml-2" x-small) Ratio & sizes
                .toolbar-save-button
                    v-btn(@click="saveStyleSet" data-jest="add-common-row" small class="ml-2 toolbar-save-button")
                        v-icon(color="white") mdi-content-save
                    v-btn( data-jest="add-common-row" small class="ml-2 toolbar-save-button")
                        v-icon(color="white") mdi-cog-outline
            .toolbar-section(v-if="displayToolbar" id="rf-toolbar--structure")
                .toolbar-section-title Data & Structure
                v-btn(@click="openPanel('upload')" :dark="openedPanel !== 'upload'" :outlined="openedPanel !== 'upload'" :depressed="openedPanel !== 'upload'" class="ml-2" x-small) Uploads
                v-btn(@click="editCommonLayout = !editCommonLayout;editLayout = false;openedPanel=''" dark :outlined="!editCommonLayout" :depressed="editCommonLayout" class="ml-2" x-small=true) Layout
                v-btn(@click="openPanel('models')" dark :outlined="openedPanel !== 'models'" :depressed="openedPanel === 'models'" class="ml-2" x-small=true) Models
                v-btn(@click="openPanel('users')" dark :outlined="openedPanel !== 'css'" :depressed="openedPanel !== 'css'" class="ml-2" x-small=true) Users
                v-btn(@click="saveDataAndStructure" data-jest="add-common-row" small class="rf-common-layout--save" class="ml-2 toolbar-save-button")
                    v-icon(color="white") mdi-content-save
        v-navigation-drawer(:value="openedPanel === 'css'" fixed=true width="450" right=true)
            css-panel-selector
        v-navigation-drawer(:value="openedPanel === 'ratio'" fixed=true width="450" right=true)
            css-panel-ratio
        v-navigation-drawer(:value="openedPanel === 'colors'" fixed=true width="auto" right=true)
            css-panel-color
        v-navigation-drawer(:value="openedPanel === 'upload'" right=true fixed=true width="300")
            upload-panel

        v-navigation-drawer(class="rf-vertical-panel --structure" :value="openedPanel === 'models'" right=true fixed=true width="400" hide-overlay)
            model-panel()
            v-btn(@click="saveDataAndStructure" small class="rf-settings--save-button_structure float-right mr-6")
                v-icon(color="white") mdi-content-save
        .horizontal-navigation-drawer(:class="{opened :openedPanel === 'typography'}")
            css-panel-typography
        .horizontal-navigation-drawer( v-if="false" :class="{opened :openedPanel === 'designSettings'}")
            v-select(outlined :items="styleSetCollection" v-model="selectedStyleSet" item-value="id" item-text="setName" label="Style Set" @change="updateStyleSet()" return-object=true)
            v-btn(text=true class="_container"  v-if="styleSet.id !== 'default'" @click.prevent="saveStyleSet()") Save
            v-text-field(type="text" class="css-panel__input" label="Config name" name="setName" v-model="styleSet.setName")
            v-btn(text=true @click.prevent="saveNewStyleSet()") Save a new Style Set
            v-btn(text=true class="_container"  @click.prevent="deleteStyleSet()"  v-if="styleSet.id !== 'default'" type="button") Delete Style Set

</template>
<script>
import axios from "axios";

const modelPanel = () => import("./modelPanel.vue");
const cssPanelSelector = () => import("./cssPanelSelector.vue");
const cssPanelRatio = () => import("./cssPanelRatio.vue");
const cssPanelColor = () => import("./cssPanelColor.vue");
const uploadPanel = () => import("./uploadPanel.vue");
const cssPanelTypography = () => import("./cssPanelTypography.vue");
import { nanoid } from "nanoid";
import { generateColorSet } from "@picaro/colorgenerator";
import { mapActions, mapGetters } from "vuex";
import { VNavigationDrawer } from "vuetify/lib";

export default {
  components: {
    uploadPanel,
    modelPanel,
    cssPanelSelector,
    cssPanelColor,
    cssPanelRatio,
    cssPanelTypography,
    VNavigationDrawer
  },
  props: {
    isLogged: { type: Boolean, default: false }
  },
  data: function() {
    return {
      displayToolbar: true,
      openedPanel: ""
    };
  },
  computed: {
    ...mapGetters(["settings"]),
    editCommonLayout: {
      get() {
        return this.$store.state.admin.editCommonLayout;
      },
      set(value) {
        this.$store.commit("editCommonLayout", value);
      }
    },
    editLayout: {
      get() {
        return this.$store.state.admin.editLayout;
      },
      set(value) {
        this.$store.commit("editLayout", value);
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
  mounted() {
    this.applyStyleSet(this.styleSet);
    this.$store.commit("styleSetLoaded", true);
    this.triggerNewStyle();
    this.getAllStyleSet();

    if (this.displayToolbar) {
      document.querySelector("#rf-vue-container").classList.add("toolbar-open");
    }
  },
  methods: {
    ...mapActions(["triggerNewStyle", "addAlert", "awaitConfirmation"]),
    openPanel(name) {
      if (name === this.openedPanel) {
        this.openedPanel = "";
      } else {
        this.openedPanel = name;
      }
      this.editCommonLayout = false;
      this.editLayout = false;
    },
    getAllStyleSet() {
      axios
        .get("/settingapi/styleset/all")
        .then(response => {
          this.styleSetCollection = response.data;
        })
        .catch(error => {
          this.addAlert({
            type: "error",
            text: `Request failed.  Returned status of ${error}`
          });
        });
    },
    setOpenPanel(type) {
      if (this.openPanel === type) {
        this.openPanel = "";
        return;
      }
      this.openPanel = type;
    },
    toggleBar() {
      if (this.displayToolbar) {
        this.displayToolbar = false;
        document
          .querySelector("#rf-vue-container")
          .classList.remove("toolbar-open");
      } else {
        this.displayToolbar = true;
        document
          .querySelector("#rf-vue-container")
          .classList.add("toolbar-open");
      }
    },
    async deleteStyleSet() {
      await this.awaitConfirmation({
        text: "Are you sure you want to delete this style set ?",
        type: "warning"
      });
      axios
        .delete(`/settingapi/${this.styleSet.id}`)
        .then(() => {
          this.addAlert({
            type: "success",
            text: "This style set  was deleted"
          });

          this.getAllStyleSet();
          this.applyStyleSet(this.styleSetCollection[0]);
          document.getElementById("_admin-form-ext-submit").click();
        })
        .catch(errors => {
          this.addAlert({
            type: "error",
            text: errors
          });
        });
    },
    saveNewStyleSet() {
      const id = nanoid();
      const previousID = this.styleSet.id;
      this.styleSet.id = id;
      axios
        .post("/settingapi/styleset", this.styleSet)
        .then(() => {
          this.addAlert({
            type: "success",
            text: `${this.styleSet.setName} saved successfully`
          });
          document.getElementById("_admin-form-ext-submit").click();
        })
        .catch(errors => {
          this.addAlert({
            type: "error",
            text: `Request failed.  Returned status of ${errors}`
          });
          this.styleSet.id = previousID;
        });
      this.getAllStyleSet();
    },
    async saveStyleSet() {
      await this.awaitConfirmation({
        text: "Are you sure you want to overwrite this style set ?",
        type: "warning"
      });
      axios
        .put("/settingapi/styleset/" + this.styleSet.id, this.styleSet)
        .then(() => {
          this.addAlert({
            type: "success",
            text: "Style Set saved successfully"
          });
          this.getAllStyleSet();
          document.getElementById("_admin-form-ext-submit").click();
        })
        .catch(errors => {
          this.addAlert({
            type: "error",
            text: `Request failed.  Returned status of ${errors}`
          });
        });
    },
    applyStyleSet(styleSet, callback) {
      this.styleSet = styleSet;

      const colorSet = new generateColorSet(styleSet.dominant);

      colorSet.generate(
        styleSet.colorParameterCollection,
        this.styleSet.colorGeneratorParams
      );
      this.$store.commit("loaded", true);
      this.$store.commit("colorSet", colorSet);

      this.$store.commit("styleSet", styleSet);
      if (callback) {
        callback();
      }
    },

    saveDataAndStructure() {
      axios
        .put("/settingapi/", this.settings)
        .then(() => {
          this.$store.dispatch("addAlert", {
            type: "success",
            text: `The layout have been updated`
          });
        })
        .catch(errors => {
          this.$store.dispatch("addAlert", {
            type: "error",
            text: `There was a problem : ${errors}`
          });
        });
    }
  },
  created() {
    this.$store.commit("isLogged", this.isLogged);
  }
};
</script>
<style scoped>
#rf-logo {
  height: 100%;
}
.toolbar-container /deep/ .v-toolbar__content {
  padding-left: 0;
}
.toolbar-container /deep/ .v-navigation-drawer {
  z-index: 10000;
}
.subpanels {
  width: 50px;
}
.toolbar-section {
  display: flex;
  align-items: center;
  border-top: 10px solid;
  position: relative;
  flex: 50%;
}
.toolbar-section-title {
  top: -15px;
  left: 0;
  position: absolute;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
}
.subpanels.__open {
  width: 300px;
}
#rf-toolbar {
  &.mini {
    width: 50px;
  }
  background-color: #fff;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  box-shadow: #aaa 0 0 5px;
  z-index: 9999;
}
.toolbar-save-button {
  margin-left: auto !important;
  margin-right: 10px;
}
.horizontal-navigation-drawer {
  &.opened {
    top: 48px;
  }
  top: -120px;
  position: fixed;
  z-index: 100000;
  left: 0px;
  width: 100%;
  transition: top 0.2s ease;
  box-shadow: #ddd 0 5px 5px;
  background: #fff;
}
</style>
