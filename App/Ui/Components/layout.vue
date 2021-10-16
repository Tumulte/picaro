<template lang="pug">
    div(:class="{'layout-is-edited': editLayout}")
        v-btn(fab small @click="editLayout = !editLayout;$store.commit('editCommonLayout', false)" v-if="isLogged")
            v-icon mdi-cog-outline
        v-row(v-for="(layoutLine, index) in selectedLayout" v-if="selectedLayout" :key="index" class="rf-layout--container")
            v-col(v-for="(module, columnIndex) in layoutLine" :key="module.id" class="rf-layout--container rf-module-container" :cols="module.cols")
                span(class="common-layout-settings")
                    v-text-field(type="number" v-if="editLayout" @input="$set(module, 'cols', parseInt($event))" label="Width" min="0" max="11")
                    v-select(:items="availableLayout" label="Type" @change="$set(module, 'type', $event)" :value="module.type" v-if="editLayout")
                    v-select(:items="modelCollectionNames" label="Model" @change="$set(module, 'model', $event)" :value="module.model" v-if="editLayout")
                    filter-selector(type="categories" :savedFilters="module.categories" @updateSelectedFilter="$set(module, 'categories', $event.data)" v-if="editLayout")
                component(:is="module.type ? module.type : 'div'" :moduleParams=" module" :key="index + componentKey")
                v-btn(fab color="primary" v-if="editLayout" small @click="layoutLine.splice(index + 1,0 , initModule(module))" data-jest="add-column" class="rf-layout--add-column")
                    v-icon mdi-table-column-plus-after

            v-btn(fab color="primary" v-if="editLayout" small @click="selectedLayout.splice(index + 1, 0, [ initModule(layoutLine[0])])" data-jest="add-row-inner" class="rf-layout--add-row-in-module")
                v-icon mdi-table-row-plus-after
        v-btn(fab color="primary" small v-if="editLayout" @click="selectedLayout.push([{model:null, type:null, categories: null}])" data-jest="add-row" class="rf-layout--add-row")
            v-icon mdi-table-row-plus-after

</template>

<script>
import filterLink from "./filterLink.vue";
import list from "./displayList.vue";
import { mapActions, mapGetters } from "vuex";
import FilterSelector from "./partials/_filterSelector.vue";
import filterCategories from "./filterCategories.vue";

export default {
  name: "Default",
  components: {
    FilterSelector,
    filterLink,
    list,
    filterCategories
  },
  props: {
    selectedEditLayout: {
      type: String,
      required: true
    },
    changingModule: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      availableLayout: ["filterLink", "list", "filterCategories"],
      componentKey: 0,
      editLayout: false
    };
  },
  computed: {
    ...mapGetters([
      "modelCollectionNames",
      "pendingLinkedModule",
      "filterCollection",
      "settings",
      "isLogged"
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
    ...mapActions(["updateLinkedModule"]),

    linkModule(line, column) {
      if (!this.pendingLinkedModule) {
        this.$store.commit(
          "pendingLinkedModule",
          JSON.stringify([this.selectedLayoutName, line, column])
        );
      } else {
        this.updateLinkedModule({
          coordinates: [line, column]
        });
        this.$store.commit("pendingLinkedModule", "");
        this.componentKey += 1; //reload component
      }
    },
    getLinkedmoduleParams(line, column, module, type) {
      const linkedModule = this.layoutLinkCollection[
        JSON.stringify([this.selectedLayoutName, line, column])
      ];
      if (linkedModule) {
        return linkedModule[type];
      } else {
        return module[type];
      }
    },
    initModule({ model, category }) {
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
  right: 50%;
  bottom: 0;
}
.rf-layout--add-row-in-module {
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
