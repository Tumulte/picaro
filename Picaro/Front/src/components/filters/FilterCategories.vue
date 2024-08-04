<script lang="ts" setup>
import {computed} from "vue";
import {useUserStore} from "@stores/user";
import type {Layout, Settings} from "@types";

const userStore = useUserStore();
const props = defineProps<{
  currentApp: Settings
  module?: Layout
}>()
const availableCategories = computed(() => {
  return props.currentApp.categories;
});

function changeCategory(id?: string) {
  userStore.updateFilterCollection({
    models: props.module?.model ? [props.module?.model] : undefined,
    type: "categories",
    filterParams: {value: id ? [id] : undefined, field: "categories", method: "in"}
  });
}

</script>

<template>
  <div>
    <a @click="changeCategory()">All</a>
  </div>
  <div v-for="category in availableCategories" :key="category.id">
    <a @click="changeCategory(category.id)">{{ category.label }}</a>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
