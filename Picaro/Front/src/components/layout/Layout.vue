<script lang="ts" setup>
import {AvailableModulesComponentList, Layout, Settings} from "@types";
import {computed} from "vue";

const props = defineProps<{
  currentApp: Settings
}>()

const componentMap: Partial<AvailableModulesComponentList> = {
  List: "List",
}

const selectedLayout = computed<Layout[][]>(() => {
  return props.currentApp.layoutCollection.find(item => item.id === props.currentApp.defaultLayout)?.layout || []
})
</script>
<template>
  <v-row v-for="(layoutLine, index) in selectedLayout" :key="index" class="rf-layout--container pic-row-container">
    <v-col
      v-for="module in layoutLine"
      :key="module.type"
      :cols="module.cols"
      class="pic-layout--module"
    >
      <component
        :is="module.type ? componentMap[module.type] : 'div'"
        :key="index"
        :current-app="currentApp"
        :module-params="module"
      />
    </v-col>
  </v-row>
</template>
