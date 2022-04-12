<script setup lang="ts">
import {Settings} from "@types";
import {computed} from "vue";
import List from "@components/dataConfig/DisplayList.vue";

const props = defineProps<{
  currentApp: Settings
}>()

const componentMap = {
  list: List,
}

const selectedLayout = computed(() => {
  return props.currentApp.layoutCollection.find(item => item.id === props.currentApp.defaultLayout)?.layout || []
})
</script>
<template>
  <v-row v-for="(layoutLine, index) in selectedLayout" :key="index" class="rf-layout--container pic-row-container">
    <v-col
      v-for="(module, columnIndex) in layoutLine"
      class="pic-layout--module"
      :cols="module.cols"
    >
      {{ module.type }}
      <component
        :is="module.type ? componentMap[module.type] : 'div'"
        :key="index"
        :module-params="module"
        :current-app="currentApp"
      />
    </v-col>
  </v-row>
</template>
