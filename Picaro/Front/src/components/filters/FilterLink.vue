<template lang="pug">
div
    ul
        li
            a(@click="deleteLink")  all
        li(v-for="item in filteredList")
            component(:is="htmlTag" class="extraClass")
                span(v-if="selectedId === item.id" class="selected") {{item[field].content}}
                a(v-else @click="addFilter(item.id)" ) {{item[field].content}}
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { applyFilter } from "./Utils/filter";

export default {
  name: "FilterLink",
  props: {
    field: { type: String, default: "title" },
    moduleParams: { type: Object, required: true },
    htmlTag: { type: String, default: "span" },
    extraClass: { type: String, default: "" }
  },
  data() {
    return { selectedId: "" };
  },
  methods: {
    ...mapActions(["updateFilterCollection", "deleteFromFilterCollection"]),
    addFilter(id) {
      if (this.selectedId !== id) {
        this.selectedId = id;
        this.selectedPath = this.updateFilterCollection({
          models: [this.moduleParams.model],
          type: "link",
          filterParams: { value: [id], field: "id", method: "eq" }
        });
      }
    },
    deleteLink() {
      this.deleteFromFilterCollection({
        models: JSON.stringify([this.moduleParams.model]),
        type: "link"
      });
      this.selectedId = "";
    }
  },
  computed: {
    ...mapGetters([
      "selectedCategories",
      "filterCollection",
      "filterCollectionExpanded"
    ]),
    list() {
      return this.$store.getters.list[this.moduleParams.model] || [];
    },
    filteredList() {
      return this.list.filter(item => {
        return applyFilter(
          item,
          [this.filterCollection.all],
          this.moduleParams
        );
      });
    },
    listFilters() {
      return this.filterCollectionExpanded[this.moduleParams.model];
    }
  },
  mounted() {
    this.selectedId =
      this.filterCollectionExpanded[this.moduleParams.model]?.link?.value[0] ||
      "";
  }
};
</script>
<style scoped>
.selected {
  text-decoration: underline;
}
.v-application ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
