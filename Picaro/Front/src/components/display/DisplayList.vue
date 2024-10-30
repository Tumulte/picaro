<script lang="ts" setup>
import axios from 'axios'
import {applyFilter} from '@components/utils/filter'
import ModelField from "@components/dataConfig/ModelField.vue"
import {computed} from "vue";
import {Model, ModelContent, ModuleParam, Settings} from "@types";
import {useDataStore} from "@stores/data";


const props = defineProps<{
  moduleParams: ModuleParam
  displayAll?: boolean
  currentApp: Settings
}>()

const emit = defineEmits<{
  clickItem: [index: number]
}>()


const dataStore = useDataStore()

if (import.meta.env.VITE_BUILD_MODE !== "static") {
  axios
      .get(`/api/data/${props.currentApp.id}/${props.moduleParams.model}`)
      .then((result) => {
        dataStore.currentModelData = result.data
      })
} else {
  getBuiltData()
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
      <div class="pic-display-list-item">
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
    </div>
  </div>
</template>
