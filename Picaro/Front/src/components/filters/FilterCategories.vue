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
  if (id === 'section') {
    return
  }
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
    <component
      :is="category.id === 'section' ? 'div' : 'a'"
      :class="{
        'pic-section': category.id === 'section',
        'pic-section-empty': !category.label
      }"
      @click="changeCategory(category.id)"
    >
      {{ category.label }}
    </component>
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}

.pic-section {
  font-family: var(--font-alt);
  margin: 1rem 0;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
