<template lang="pug">

    div
        v-btn(class="edit-btn" @click="edit = !edit" fab small)
            v-icon mdi-table-edit
        div(v-if="edit")
        div(class="rf-common-layout--container" )
            v-row(v-for="(layoutCommonLine, index) in layoutCommonCollection" :key="index" class="rf-common-layout--container")
                v-col(v-for="(layoutCommonColumn, subIndex) in layoutCommonLine" :key="subIndex" class="rf-common-layout--container")
                    v-select(:items="components" item-text="name" item-value="value" :value="layoutCommonColumn || null" @change="changePanel($event, index, subIndex)")
                    component(:is="layoutCommonColumn" v-if="layoutCommonColumn !== 'Layout'")
                    div(v-else)
                        v-select(label="Choose a Layout to edit" :items="layoutCollection" item-text="name" item-value="name" v-model="selectedLayout" v-if="layoutCollection.length > 0")
                        v-select(label="Default Layout (index)" :items="layoutCollection" item-text="name" item-value="name" v-model="defaultLayout" v-if="layoutCollection.length > 0")
                        v-text-field(label="Layout Name" v-model="createdLayoutName")
                        v-btn(v-if="createdLayoutName" @click="createLayout") create new layout
                        layout(:selected-edit-layout="selectedLayout")
                    v-btn(@click="layoutCommonLine.splice(index + 1,0 , '')" data-jest="add-common-column" fab small v-if="edit" class="rf-common-layout--add-column")
                        v-icon mdi-table-column-plus-after
                v-btn(@click="layoutCommonCollection.splice(index + 1, 0, [''] )" fab small data-jest="add-common-row-inner" v-if="edit" class="rf-common-layout--add-row-in-panel")
                    v-icon mdi-table-row-plus-after
            v-btn(@click="addRow" data-jest="add-common-row" v-if="edit" fab small class="rf-common-layout--add-row")
                v-icon mdi-table-row-plus-after
            v-btn(@click="saveLayout" data-jest="add-common-row" v-if="edit" fab small class="rf-common-layout--save")
                v-icon mdi-content-save
</template>

<script>
import filterLayout from "./filterLayout.vue";
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import { mapActions, mapGetters } from "vuex";
import Layout from "./layout.vue";
import axios from "axios";

export default {
  name: "RfLayout",
  data() {
    return {
      edit: true,
      createdLayoutName: "",
      selectedLayout: "",
      defaultLayout: "",
      changingPanel: null
    };
  },
  methods: {
    ...mapActions(["updateSettings", "addLayoutToCollection"]),
    addRow() {
      this.layoutCommonCollection.push([""]);
    },
    createLayout() {
      this.addLayoutToCollection({ key: this.createdLayoutName, value: [] });
      if (this.layoutCollection.length === 1) {
        this.defaultLayout = this.createdLayoutName;
        this.selectedLayout = this.createdLayoutName;
        this.updateSettings({
          property: "defaultLayout",
          value: this.createdLayoutName
        });
      }
      this.createdLayoutName = "";
    },
    changePanel(event, index, subIndex) {
      this.$set(this.layoutCommonCollection[index], subIndex, event);
      this.updateSettings({
        property: "layoutCommonCollection",
        value: this.layoutCommonCollection
      });
    },
    saveLayout() {
      axios
        .put("/settingapi/", this.settings)
        .then(() => {
          this.$store.dispatch("addAlert", {
            type: "info",
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
  components: { Layout, filterLayout, filterLink, list },
  computed: {
    ...mapGetters(["settings"]),
    layoutCommonCollection() {
      return this.$store.getters.settings.layoutCommonCollection;
    },
    layoutCollection() {
      return Object.entries(this.$store.getters.settings.layoutCollection).map(
        ([key, value]) => {
          return { name: key, value: value };
        }
      );
    },
    components() {
      return Object.entries(this.$options.components).map(([key, value]) => {
        return { name: value.name, value: key };
      });
    }
  }
};
</script>

<style scoped>
.rf-common-layout--container {
  position: relative;
}
.edit-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.rf-common-layout--add-column {
  position: absolute;
  right: -8px;
  bottom: 50%;
  transform: translateY(16px);
}
.rf-common-layout--add-row {
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translate(50%, 100%);
}
.rf-common-layout--add-row-in-panel {
  position: absolute;
  right: 25%;
  bottom: 0;
  transform: translateY(50%);
}
.col {
  border: 4px solid skyblue;
}
.row {
  border: 4px solid palevioletred;
  margin: 0;
}
</style>
