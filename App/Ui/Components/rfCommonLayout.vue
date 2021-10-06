<template lang="pug">

    div(class="rf-common-layout--container" :class="{'common-layout-is-edited':editCommonLayout}")
        v-row(v-for="(layoutCommonLine, index) in layoutCommonCollection" :key="index" class="rf-common-layout--container")
            v-col(v-for="(layoutCommonColumn, subIndex) in layoutCommonLine" :key="subIndex" class="rf-common-layout--container rf-panel-container"  :class="{'is-default-layout': layoutCommonColumn.type === 'Layout'}" :cols="layoutCommonColumn.cols")
                span(class="common-layout-settings")
                    v-text-field(type="number" v-if="editCommonLayout" @input="$set(layoutCommonColumn, 'cols', parseInt($event))" label="Width" dense min="0" max="12" class="common-layout-panel-size")
                    v-select(:items="components" item-text="name" item-value="value" :value="layoutCommonColumn.type || null" @change="changePanel($event, index, subIndex)" v-if="editCommonLayout" outlined dense)
                    v-btn(@click="deleteColumn(index, subIndex)" data-jest="remove-common-column" fab small v-if="editCommonLayout")
                        v-icon mdi-delete-outline
                component(:is="layoutCommonColumn.type" v-if="layoutCommonColumn.type !== 'Layout'")
                span(v-else)
                    span(class="common-layout-settings")
                        v-select(label="Choose a Layout to edit" :items="layoutCollection" item-text="name" item-value="name" v-model="selectedLayout" v-if="layoutCollection.length > 0 && editCommonLayout")
                        v-select(label="Default Layout (index)" :items="layoutCollection" item-text="name" item-value="name" v-model="defaultLayout" v-if="layoutCollection.length > 0 && editCommonLayout")
                        v-text-field(label="Layout Name" v-model="createdLayoutName"  v-if="editCommonLayout")
                    layout(:selected-edit-layout="selectedLayout")
                    v-btn(@click="layoutCommonLine.splice(index + 1,0 , {})" data-jest="add-common-column" fab small v-if="editCommonLayout" class="rf-common-layout--add-column")
                        v-icon mdi-table-column-plus-after
            v-btn(@click="layoutCommonCollection.splice(index + 1, 0, [''] )" fab small data-jest="add-common-row-inner" v-if="editCommonLayout" class="rf-common-layout--add-row-in-panel")
                v-icon mdi-table-row-plus-after
        v-btn(@click="addRow" data-jest="add-common-row" v-if="editCommonLayout" fab small class="rf-common-layout--add-row")
            v-icon mdi-table-row-plus-after

</template>

<script>
import filterLayout from "./filterCategories.vue";
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import filterCategories from "./filterCategories.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Layout from "./layout.vue";
import axios from "axios";

export default {
  name: "RfLayout",
  components: { Layout, filterLayout, filterLink, list, filterCategories },
  data() {
    return {
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
    deleteColumn(line, column) {
      this.$store
        .dispatch("awaitConfirmation", {
          text: "Are you sure you want to delete the panel ?",
          type: "warning"
        })
        .then(() => {
          this.layoutCommonCollection[line].splice(column, 1);
        });
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
      this.$set(this.layoutCommonCollection[index], subIndex, { type: event });
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
  computed: {
    ...mapGetters(["settings"]),
    ...mapState({
      editCommonLayout: state => state.admin.editCommonLayout
    }),
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
.common-layout-is-edited {
  .col {
    margin: 0;
    margin: 0;
    border: 2px solid var(--secondary);
  }
}
.common-layout-panel-size,
.common-layout-panel-size /deep/ .v-input__control,
.common-layout-panel-size /deep/ .v-input__slot {
  width: 64px;
}
.common-layout-settings /deep/ .v-input {
  flex: initial;
  margin-right: 16px;
}
</style>
