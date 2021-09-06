<template lang="pug">
    div(:class="{'layout-is-edited': editLayout}")
        v-btn(fab small @click="editLayout = !editLayout;$store.commit('editCommonLayout', false)")
            v-icon mdi-cog-outline
        v-row(v-for="(layoutLine, index) in selectedLayout" v-if="selectedLayout" :key="index" class="rf-layout--container")
            v-col(v-for="(panel, columnIndex) in layoutLine" :key="panel.id" class="rf-layout--container" :cols="panel.cols")
                span(class="common-layout-settings")
                    v-text-field(type="number" v-if="editLayout" @input="$set(panel, 'cols', parseInt($event))" label="Width" min="0" max="11")
                    v-select(:items="availableLayout" label="Type" @change="$set(panel, 'type', $event)" :value="panel.type" v-if="editLayout")
                    v-select(:items="modelCollectionNames" label="Model" @change="$set(panel, 'model', $event)" :value="panel.model" v-if="editLayout")
                    filter-selector(type="categories" :savedFilters="panel.categories" @updateSelectedFilter="$set(panel, 'categories', $event.data)" v-if="editLayout")
                component(:is="panel.type ? panel.type : 'div'" :panelParams=" panel" :key="index + componentKey")
                v-btn(fab color="primary" v-if="editLayout" small @click="layoutLine.splice(index + 1,0 , initPanel(panel))" data-jest="add-column" class="rf-layout--add-column")
                    v-icon mdi-table-column-plus-after

            v-btn(fab color="primary" v-if="editLayout" small @click="selectedLayout.splice(index + 1, 0, [ initPanel(layoutLine[0])])" data-jest="add-row-inner" class="rf-layout--add-row-in-panel")
                v-icon mdi-table-row-plus-after
        v-btn(fab color="primary" small v-if="editLayout" @click="selectedLayout.push([{model:null, type:null, categories: null}])" data-jest="add-row" class="rf-layout--add-row")
            v-icon mdi-table-row-plus-after

</template>

<script>
import filterLayout from "./filterCategories.vue";
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import { mapActions, mapGetters } from "vuex";
import FilterSelector from "./partials/_filterSelector.vue";

export default {
  name: "Default",
  components: { FilterSelector, filterLayout, filterLink, list },
  props: {
    selectedEditLayout: {
      type: String,
      required: true
    },
    changingPanel: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      availableLayout: ["filterLink", "list"],
      componentKey: 0,
      editLayout: false
    };
  },
  computed: {
    ...mapGetters([
      "modelCollectionNames",
      "pendingLinkedPanel",
      "filterCollection",
      "settings"
    ]),
    selectedLayoutName() {
      return (
        this.selectedEditLayout ||
        this.filterCollection.all.layout ||
        this.settings.defaultLayout
      );
    },
    selectedLayout() {
      //Use manually selected layout (edit) or the one set in filters or the default layout (in that order)
      if (this.selectedLayoutName) {
        return this.settings.layoutCollection[this.selectedLayoutName] || [];
      } else {
        return null;
      }
    }
  },
  methods: {
    ...mapActions(["updateLinkedPanel"]),

    linkPanel(line, column) {
      if (!this.pendingLinkedPanel) {
        this.$store.commit(
          "pendingLinkedPanel",
          JSON.stringify([this.selectedLayoutName, line, column])
        );
      } else {
        this.updateLinkedPanel({
          coordinates: [line, column]
        });
        this.$store.commit("pendingLinkedPanel", "");
        this.componentKey += 1; //reload component
      }
    },
    getLinkedPanelParams(line, column, panel, type) {
      const linkedPanel = this.layoutLinkCollection[
        JSON.stringify([this.selectedLayoutName, line, column])
      ];
      if (linkedPanel) {
        return linkedPanel[type];
      } else {
        return panel[type];
      }
    },
    initPanel({ model, category }) {
      if (model && category) {
        return { model, type: "div", category };
      } else {
        return { model: null, type: "div", categories: null };
      }
    }
  }
};
</script>

<style scoped>
.v-btn {
  background: #555555;
}
.rf-layout--container {
  position: relative;
}
.edit-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.rf-layout--add-column {
  position: absolute;
  right: -8px;
  bottom: 50%;
  transform: translateY(16px);
}
.rf-layout--add-row {
  position: absolute;
  right: 0;
  bottom: 0;
}
.rf-layout--add-row-in-panel {
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translateY(50%);
}
.layout-is-edited {
  .col {
    margin: 0;
    margin: 0;
    border: 2px solid var(--secondaryDark);
  }
}
</style>
