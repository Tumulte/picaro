<template lang="pug">
    div
        ul
            li
                a(@click="deleteLink")  all
            li(v-for="item in list" v-if="checkFilters(item)")
                component(:is="htmlTag" class="extraClass")
                    span(v-if="selectedId === item.id" class="selected") {{item[field].content}}
                    a(v-else @click="addFilter(item.id)" ) {{item[field].content}}
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import checkFilters from "./mixins/checkFilters";

export default {
  name: "FilterLink",
  mixins: [checkFilters],
  props: {
    field: { type: String, default: "title" },
    panelParams: { type: Object, required: true },
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
          models: [this.panelParams.model],
          type: "link",
          filterParams: { value: [id], field: "id", method: "eq" }
        });
      }
    },
    deleteLink() {
      this.deleteFromFilterCollection({
        models: JSON.stringify([this.panelParams.model]),
        type: "link"
      });
      this.selectedId = "";
    }
  },
  computed: {
    ...mapGetters(["selectedCategories", "filterCollectionExpanded"]),
    list: function() {
      return this.$store.getters.list[this.panelParams.model];
    }
  },
  mounted() {
    this.selectedId =
      this.filterCollectionExpanded[this.panelParams.model]?.link?.value[0] ||
      "";
  }
};
</script>
<style scoped>
.selected {
  text-decoration: underline;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
