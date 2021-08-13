<template lang="pug">
    div
        v-combobox(multiple small-chips :items="filterList" v-model="currentFilterList" item-text="label" item-value="id" @change="checkForNewElement")
        v-btn(v-if="displaySave" @click="saveFilterList") Save
</template>

<script>
import { mapGetters } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "FilterSelector",
  props: {
    type: { type: String, required: true },
    savedFilters: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return { currentFilterList: [], displaySave: false };
  },
  computed: {
    ...mapGetters(["availableFilterCollection"]),
    filterList() {
      return this.availableFilterCollection[this.type];
    }
  },
  watch: {
    currentFilterList() {
      if (this.type) {
        this.$emit("updateSelectedFilter", {
          type: this.type,
          data: this.currentFilterList
        });
      }
    }
  },
  mounted() {
    this.currentFilterList = this.savedFilters;
  },
  methods: {
    checkForNewElement() {
      if (this.currentFilterList.find(item => typeof item === "string"))
        this.displaySave = true;
    },
    saveFilterList() {
      for (let [index, item] of this.currentFilterList.entries()) {
        if (typeof item === "string") {
          this.currentFilterList[index] = {
            id: nanoid(),
            label: item
          };
          this.filterList.push(this.currentFilterList[index]);
          this.$store.dispatch("updateAvailableFilters", {
            property: this.type,
            value: this.filterList
          });
          this.displaySave = false;
          document.getElementById("_admin-form-ext-submit").click();
          this.$emit("updateSelectedFilter", {
            type: this.type,
            data: this.currentFilterList
          });
        }
      }
    }
  }
};
</script>

<style scoped></style>
