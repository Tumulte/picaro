<template lang="pug">
div(v-if="isEdit")
    v-select(v-model="selected" :items="categories.options" item-text="label" item-value="label" :label="categories.label" )
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "RfCategoryFilter",
  props: {
    fieldParams: {
      default() {
        return {};
      },
      type: Object
    },
    fieldData: { type: Object, default: null },
    isEdit: { type: Boolean, default: false }
  },
  data: function() {
    return {
      selected: ""
    };
  },
  watch: {
    selected() {
      this.$emit("updateData", {
        name: this.fieldParams.name,
        value: this.formatedData
      });
    }
  },
  computed: {
    ...mapGetters(["modelCollection"]),
    formatedData() {
      return { content: this.selected, fieldType: "category-filter" };
    },
    categories() {
      return this.modelCollection.appFilters.find(
        item => item.name === "categories"
      );
    }
  },
  created() {
    if (this.fieldData) {
      this.selected = this.fieldData.content;
    }
  }
};
</script>
