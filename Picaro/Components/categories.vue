<template lang="pug">
  div
    h2 Categories
    div(v-if="categoryCollection.length > 0" class="rf-setting-sheet")
      h3  Available categories
      div(v-for="(category, index) in categoryCollection")
        v-text-field(:value="category.label" dense @change="$set(category,'label', $event)" append-icon="mdi-delete-outline" @click:append="remove(index)" class="rf-setting-category-list")
    .rf-side-button-container
      v-text-field(label="New category name" dense outlined v-model="newCategoryName" @keyup:enter="add" :error="categoryCollection.includes(newCategoryName)")
      v-btn(@click="add" :disabled="!newCategoryName" elevation="0" dark) add
</template>
<script>
import {mapGetters} from "vuex";
import {nanoid} from "nanoid";

export default {
  name: "ModelCategories",
  data() {
    return {
      newCategoryName: "",
      error: ""
    };
  },
  computed: {
    ...mapGetters(["settings"]),
    categoryCollection() {
      return this.settings.availableFilterCollection.categories;
    }
  },
  methods: {
    add() {
      this.categoryCollection.push({
        id: nanoid(6),
        label: this.newCategoryName
      });
      this.newCategoryName = "";
    },
    remove(index) {
      this.categoryCollection.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.rf-setting-category-list {
  margin: 0 20px;
}
</style>
