<script lang="ts" setup>
import {computed, onMounted, watch} from "vue";
import {Filter, FilterCollection, ModelFilter, Settings} from "@types";
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

watch(appID, () => {

  if (appID.value) {

    settingsStore.currentAppSettings = settingsStore.allSettings.find((app: Settings) => app.id === appID.value)
  }
}, {immediate: true})

const currentApp = computed(() => {
  return settingsStore.currentAppSettings
})

watch(route, (to) => {
  if (to?.params.globalFilters && currentApp.value) {
    currentApp.value.filterCollection = filterRouteToStore(to.params) as FilterCollection
  }
}, {immediate: true})

function getParams(params: string, type: string, modelIdCollection?: string[]): ModelFilter[] | Filter[] {
  return params.split("++").map(subItem => {
    // first two letters item
    const method = subItem.slice(0, 2)
    const [field, value] = subItem.slice(2).split("..")

    const valueArray = value.split('**')

    let paramObject
    if (modelIdCollection) {
      paramObject = {method, field, value: valueArray, type, modelIdCollection} as ModelFilter
    } else {
      paramObject = {method, field, value: valueArray, type} as Filter
    }
    return paramObject
  })
}

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

    //filter type
    globalFilters = decodeURI(globalFilters.toString()).split("~");
    //filter parameters
    globalParams = decodeURI(globalParams.toString()).split("~");


    globalFilters.forEach((item, index) => {
          const params = getParams(globalParams[index], item)
          filterParams.all = filterParams.all.concat(params);
        }
    );
  }
  if (modelFilters && modelFilters !== "~") {
    const params = decodeURI(modelFilterParams.toString()).split("~");
    decodeURI(modelFilters.toString()).split("~").forEach((item, index) => {

      const [models, filters] = item.split("::");
      const modelsId = models.split("++");
      const filtersArray = filters.split("++");
      const paramsArray = params[index].split("::");
      filtersArray.forEach((subItem, subIndex) => {
        filterParams.modelFilters = filterParams.modelFilters.concat(getParams(paramsArray[subIndex], subItem, modelsId) as ModelFilter[]);
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
