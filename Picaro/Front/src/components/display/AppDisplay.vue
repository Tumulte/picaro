w%
<script lang="ts" setup>
import {computed, onMounted, watch} from "vue";
import type {FilterCollection, Settings} from "@types";
import Layout from "@components/layout/Layout.vue";
import {RouteParams, useRoute} from "vue-router";
import {useSettingsStore} from "@stores/settings";
import {availableModules} from "@utils/modules";

const route = useRoute()


const settingsStore = useSettingsStore()

onMounted(() => {
  if (!currentApp.value?.styleSet) return;
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = `/api/css/baseStyle-${currentApp.value.styleSet}.css`
  document.head.appendChild(link)
})

const appID = computed<string>(() => {
  return settingsStore.allSettings.find((app: Settings) => app.applicationName === route.params.app)?.id ?? ''
})

const currentApp = computed<Settings | undefined>(() => {
  return settingsStore.allSettings.find((app: Settings) => app.id === appID.value)
})

watch(route, (to) => {
  if (to?.params.globalFilters && currentApp.value) {
    currentApp.value.filterCollection = filterRouteToStore(to.params)
  }
}, {immediate: true})

function filterRouteToStore({
                              globalFilters,
                              modelFilters,
                              globalParams,
                              modelFilterParams
                            }: RouteParams): Settings["filterCollection"] | undefined {
  if (!globalFilters) return;

  const filterParams: FilterCollection = {
    all: [],
    modelFilters: []
  };
  if (globalFilters !== "~") {
    globalFilters = decodeURI(globalFilters.toString()).split("::");
    globalParams = decodeURI(globalParams.toString()).split("::");

    globalFilters.forEach((item, index) => {
          const params = globalParams[index].split("++").map(subItem => {
            // first two letters item
            const method = subItem.slice(0, 2)
            const [field, value] = subItem.slice(2).split("..")

            return {method, field, value}
          })
          console.log(params)
          filterParams.all = params;
        }
    );
  }
  if (modelFilters !== "~") {
    const params = decodeURI(modelFilterParams.toString()).split("~");
    decodeURI(modelFilters.toString()).split("~").forEach((item, index) => {
      const [models, filters] = item.split("::");
      const modelsKey = JSON.stringify(models.split("++"));
      const filtersArray = filters.split("++");
      const paramsArray = params[index].split("::");
      console.log(modelsKey, 'mh')
      filterParams.modelFilters[modelsKey] = {};
      filtersArray.forEach((subItem, subIndex) => {
        filterParams.modelFilters[modelsKey][subItem] = paramsArray[subIndex].split("++");
      });
    });

  }
  return filterParams;
}
</script>

<template>
  <div v-if="currentApp" class="pic-layout--main-container pic-content-container">
    <v-row
      v-for="(layoutCommonLine, index) in currentApp.layoutCommonCollection"
      :key="index"
      class="pic-layout-container pic-row-container"
    >
      <v-col
        v-for="(layoutCommonColumn, subIndex) in layoutCommonLine"
        :key="`${layoutCommonColumn.type}${subIndex}`"
        :cols="layoutCommonColumn?.cols"
        class="pic-layout--container pic-layout--common-module pic-module-container pic-col"
      >
        <component
          :is="availableModules[layoutCommonColumn.type]"
          v-if="layoutCommonColumn.type !== 'Layout'"
          :current-app="currentApp"
          :module-params="layoutCommonColumn"
        />
        <span v-else>
          <Layout :current-app="currentApp" />
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
