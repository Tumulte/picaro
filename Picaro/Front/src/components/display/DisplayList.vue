<script lang="ts" setup>
import {applyFilter} from '@components/utils/filter'
import ModelField from "@components/dataConfig/ModelField.vue"
import {computed} from "vue";
import {useRoute} from "vue-router";
import ModelForm from "@components/dataConfig/ModelForm.vue";
import {Categories, Model, ModelContent, ModuleParam, Settings} from "@types";
import {useDataStore} from "@stores/data";
import {useSettingsStore} from "@stores/settings";

const settings = useSettingsStore()

const categories: Categories[] = settings.currentAppSettings?.categories || []

const route = useRoute();

const props = defineProps<{
  moduleParams: ModuleParam
  displayAll?: boolean
  currentApp: Settings
}>()

const emit = defineEmits<{
  clickItem: [index: number]
}>()


const dataStore = useDataStore()

if (import.meta.env.VITE_BUILD_MODE === "static") {
  getBuiltData().catch((error) => console.log(error))
} else {
  fetch(`/api/data/${props.currentApp.id}/${props.moduleParams.model}`)
      .then(res => res.json())
      .then((data) => {
        dataStore.currentModelData = data
      }).catch((error) => console.log(error))
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


  dataStore.currentModelData = data.default.filter(item =>
      item.modelId === props.moduleParams.model
  )
}


</script>
<template>
  <div>
    <div
      v-for="(fieldList, index) in filteredList"
      :key="index"
      @click="emit('clickItem', index)"
    >
      <div
        v-if="index !== parseInt(route.params.contentId as string)"
        class="pic-display-list-item"
      >
        <div
          v-for="(field, subIndex) in fieldList.content"
          :key="subIndex"
        >
          <model-field
            v-if="currentModel"
            :field-content="field"
            :field-params="currentModel.fieldCollection.find(item=> item.id === field.fieldParamsId)"
            :module-params="moduleParams"
          />
        </div>
      </div>

      <ModelForm
        v-else
        :categories="categories"
        :current-edit-model="currentModel"
        :model-content="fieldList"
      />
    </div>
  </div>
</template>
