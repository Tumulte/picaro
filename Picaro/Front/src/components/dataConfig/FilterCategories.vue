<script setup lang="ts">
import {computed} from "vue";
import {useUserStore} from "@stores/user";
import * as module from "module";

const userStore = useUserStore();
const props = defineProps<{
  currentApp: any
  module?: any
}>()
const availableCategories = computed(() => {
  return props.currentApp.categories;
});

function changeCategory(id: string) {
  userStore.updateFilterCollection({
    models: module?.model,
    type: "categories",
    filterParams: {value: [id], field: "categories", method: "in"}
  });
}
</script>

<template>
  <div v-for="category in availableCategories" :key="category.id">
    <a @click="changeCategory(category.id)">{{ category.label }}</a>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
