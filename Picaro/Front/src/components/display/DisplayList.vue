<script lang="ts" setup>
import {applyFilter} from '@components/utils/filter'
import ModelField from "@components/dataConfig/ModelField.vue"
import {computed} from "vue";
import {useRoute} from "vue-router";
import ModelForm from "@components/dataConfig/ModelForm.vue";
import {Category, Layout, Model, ModelContent, Settings} from "@types";
import {useDataStore} from "@stores/data";
import {useSettingsStore} from "@stores/settings";

const settings = useSettingsStore()

const categories: Category[] = settings.currentAppSettings?.categories || []

const route = useRoute();

const props = defineProps<{
  moduleParams: Layout
  displayAll?: boolean
  currentApp: Settings
}>()

const emit = defineEmits<{
  clickItem: [index: number]
}>()


const dataStore = useDataStore()

if (import.meta.env.VITE_BUILD_MODE === "static") {
  getBuiltData().catch((error) => console.error(error))
} else {
  fetch(`/api/data/${props.currentApp.id}/${props.moduleParams.model}`)
      .then(res => res.json())
      .then((data) => {
        dataStore.currentModelData = data
      }).catch((error) => console.error(error))
}


const filteredList = computed<ModelContent[]>(() => {
  if (props.displayAll) {
    return dataStore.currentModelData
  } else {
    return dataStore.currentModelData?.filter(item => {
      return applyFilter(
          item,
          props.currentApp.filterCollection,
          props.moduleParams
      );
    });
  }

})

const currentModel = computed(() => {
  return props.currentApp.modelCollection.find(
      (item: Model) => item.id === props.moduleParams.model
  )
})

async function getBuiltData() {
  const data = await import(`./../../../../Data/build/${props.currentApp.id}.json`)


  dataStore.currentModelData = data.default.filter((item: ModelContent) =>
      item.modelId === props.moduleParams.model
  )
}


</script>
<template>
  <div data-testid="content-list">
    <div
      v-for="(fieldList, index) in filteredList"
      :key="index"
      @click="emit('clickItem', index)"
    >
      <div
        v-if="index !== parseInt(route.params.contentId as string) && currentModel"
        class="pic-display-list-item"
        data-testid="list-display"
      >
        <div
          v-for="(field, subIndex) in fieldList.content"
          :key="subIndex"
        >
          <model-field
            :current-model="currentModel"
            :field-content="field"
            :module-params="moduleParams"
            data-testid="content-display"
          />
        </div>
      </div>

      <ModelForm
        v-else-if="currentModel"
        :categories="categories"
        :current-edit-model="currentModel"
        :model-content="fieldList"
        data-testid="content-edit"
      />
    </div>
  </div>
</template>
