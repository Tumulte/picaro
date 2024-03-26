<template lang="pug">
  div(class="rf-layout--container" :class="{'rf-common-layout-is-edited':editCommonLayout}")
    v-row(v-for="(layoutCommonLine, index) in layoutCommonCollection" :key="index" class="rf-layout--container rf-row-container")
      v-col(v-for="(layoutCommonColumn, subIndex) in layoutCommonLine" :key="subIndex" class="rf-layout--container rf-common-module-container rf-module-container"  :class="{'is-default-layout': layoutCommonColumn.type === 'Layout'}" :cols="layoutCommonColumn.cols")
        span(class="rf-layout-settings")
          v-text-field(type="number" v-if="editCommonLayout" @input="layoutCommonColumn.cols = $event.target.value" label="Width"  min="0" max="12" class="rf-layout-module-size" density="compact" variant="underlined")
          v-select(:items="components" :model-value="layoutCommonColumn.type || 'none'" @update:modelValue="changeModule($event, index, subIndex)" v-if="editCommonLayout" variant="outlined" density="compact")
          v-btn(@click="deleteColumn(index, subIndex)" data-jest="remove-common-column" small v-if="editCommonLayout")
            v-icon mdi-delete-outline
        component(:is="layoutCommonColumn.type" v-if="layoutCommonColumn.type !== 'Layout'")
        span(v-else)
          span(class="rf-layout-settings")
            v-select(label="Choose a Layout to edit" :items="layoutCollection" item-text="name" item-value="name" v-model="selectedLayout" v-if="layoutCollection.length > 0 && editCommonLayout")
            v-select(label="Default Layout (index)" :items="layoutCollection" item-text="name" item-value="name" v-model="defaultLayout" v-if="layoutCollection.length > 0 && editCommonLayout")
            v-text-field(label="Layout Name" v-model="createdLayoutName"  v-if="editCommonLayout"  density="compact" variant="underlined")
          layout(:selected-edit-layout="selectedLayout")
        div(@click="layoutCommonLine.splice(index + 1,0 , {})" data-jest="add-common-column" v-if="editCommonLayout" class="rf-layout--add-column")
          v-icon mdi-table-column-plus-after
      div(@click="layoutCommonCollection.splice(index + 1, 0, [''] )" data-jest="add-common-row-inner" v-if="editCommonLayout && layoutCommonCollection.length > 1" class="rf-layout--add-row")
        v-icon mdi-table-row-plus-after
    div(@click="addRow" data-test="add-common-row" v-if="editCommonLayout" class="rf-layout--add-row")
      v-icon mdi-table-row-plus-after
</template>
<script>
import filterLayout from "@/src/components/filters/FilterCategories.vue";
import filterLink from "@/src/components/filters/FilterLink.vue";
import list from "./displayList.vue";
import filterCategories from "@/src/components/filters/FilterCategories.vue";
import {mapActions, mapGetters, mapState} from "vuex";
import Layout from "@/src/components/layout/Layout.vue";
import axios from "axios";

export default {
  name: "RfLayout",
  components: {Layout, filterLayout, filterLink, list, filterCategories},
  data() {
    return {
      createdLayoutName: "",
      selectedLayout: "",
      defaultLayout: "",
      changingModule: null
    };
  },
  methods: {
    ...mapActions(["updateSettings", "addLayoutToCollection"]),
    addRow() {
      console.debug('ADD ROW')
      this.layoutCommonCollection.push([{}]);
    },
    deleteColumn(line, column) {
      this.$store
          .dispatch("awaitConfirmation", {
            text: "Are you sure you want to delete the module ?",
            type: "warning"
          })
          .then(() => {
            this.layoutCommonCollection[line].splice(column, 1);
          });
    },
    createLayout() {
      this.addLayoutToCollection({key: this.createdLayoutName, value: []});
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
    changeModule(event, index, subIndex) {
      console.debug(event, index, subIndex);
      this.layoutCommonCollection[index][subIndex] = {type: event};
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
            return {title: key, value: value};
          }
      );
    },
    components() {
      return [{title: "module...", value: "none"}, ...Object.entries(this.$options.components).map(([key, value]) => {
        return {title: value.name, value: key};
      })];
    }
  }
};
</script>
