<script setup lang="ts">
import {computed, onMounted, watch} from "vue";
import type {Settings} from "@types";
import FilterCategories from "@components/filters/FilterCategories.vue";
import Layout from "@components/layout/Layout.vue";
import {useRoute} from "vue-router";
import {useSettingsStore} from "@stores/settings";


const route = useRoute()

const settingsStore = useSettingsStore()

const components = {
  Layout: Layout,
  FilterLayout: "FilterLayout",
  FilterLink: "FilterLink",
  List: "List",
  FilterCategories: FilterCategories,
}

onMounted(() => {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = `/css/baseStyle-${currentApp.value.styleSet}.css`
  document.head.appendChild(link)
})

const appID = computed<string>(() => {
  return settingsStore.allSettings.find((app: Settings) => app.applicationName === route.params.app)?.id
})

const currentApp = computed<Settings | undefined>(() => {
  return settingsStore.allSettings.find((app: Settings) => app.id === appID.value)
})
const layoutCommonCollection = computed<Settings["layoutCommonCollection"] | []>(() => {
  return currentApp.value?.layoutCommonCollection || [];
});

watch(route, (to) => {
  if (to.params.globalFilters && currentApp.value) {
    currentApp.value.filterCollection = filterRouteToStore(to.params)
  }
}, {immediate: true})

function filterRouteToStore({
                              globalFilters,
                              modelFilters,
                              globalParams,
                              modelFilterParams
                            }) {
  if (!globalFilters) return;
  const filterParams = {all: {}, modelFilters: {}};
  if (globalFilters !== "~") {
    globalFilters = decodeURI(globalFilters).split("::");
    globalParams = decodeURI(globalParams).split("::");
    globalFilters.forEach((item, index) => {
          const params = globalParams[index].split("++").map(subItem => {
            // first two letters item
            const method = subItem.slice(0, 2)
            const [field, id] = subItem.slice(2).split("..")
            return {method, field, id}
          })
          filterParams.all = params;
        }
    );
  }
  if (modelFilters !== "~") {
    const params = decodeURI(modelFilterParams).split("~");
    decodeURI(modelFilters).split("~").forEach((item, index) => {
      let [models, filters] = item.split("::");
      models = JSON.stringify(models.split("++"));
      filters = filters.split("++");
      const paramsArray = params[index].split("::");
      filterParams.modelFilters[models] = {};
      filters.forEach((subItem, subIndex) => {
        filterParams.modelFilters[models][subItem] = paramsArray[subIndex].split("++");
      });
    });

  }
  return filterParams;
}
</script>

<template>
  <div v-if="currentApp" class="pic-layout--main-container pic-content-container">
    <v-row
      v-for="layoutCommonLine in layoutCommonCollection"
      class="pic-layout-container pic-row-container"
    >
      <v-col
        v-for="layoutCommonColumn in layoutCommonLine"
        class="pic-layout--container pic-layout--common-module pic-module-container pic-col"
        :cols="layoutCommonColumn.cols"
      >
        <component
          :is="components[layoutCommonColumn.type]"
          v-if="layoutCommonColumn.type !== 'Layout'"
          :current-app="currentApp"
        />
        <span v-else>
          <Layout :current-app="currentApp" />
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
