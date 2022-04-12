<script lang="ts" setup>
import axios from 'axios'
import {applyFilter} from '@components/utils/filter'
import Model from "./modelForm.vue"
import ModelItemEdit from "./modelItemEdit.vue"
import ModelField from "./ModelField.vue"
import {ref, computed, onMounted} from "vue";

const props = defineProps<{
  moduleParams: any
  displayAll?: boolean
  currentApp: any
}>()

const edit = ref(false)
const newItem = ref(false)
const key = ref(true)

const list = ref()

axios
    .get(`/api/${props.currentApp.applicationName}/${props.moduleParams.model}`)
    .then((result) => {
      const data = result.data.map((item) => {
        return {categories: item.modelData.categories, content: Object.values(item.modelData.content)}
      })
      list.value = data
    })

const filteredList = computed(() => {
  if (props.displayAll) {
    return list.value
  } else {
    return list.value?.filter(item => {
      return applyFilter(
          item,
          [props.currentApp.filterCollection?.all],
          props.moduleParams
      );
    });
  }

})

const tags = computed(() => {
  return []
})
const listFilters = computed(() => {
  return
})
const currentModel = computed(() => {
  return props.currentApp.modelCollection.find(
      (item) => item.id === props.moduleParams.model
  )
})


</script>
<template>
  <div :key="key">
    <div v-for="fieldList in filteredList">
      <template v-for="(field, index) in fieldList.content">
        <model-field
          v-if="field.fieldType && !edit"
          :key="index"
          :field-data="field"
          :field-name="field.id"
          :is-edit="edit"
          :field-params="currentModel.fieldCollection.find(item=> item.id === field.id)"
          :module-params="moduleParams"
        />
      </template>
      <div v-if="edit" class="pa-6 my-6">
        <Model
          :model-name="moduleParams.modelName"
          :model-data="fieldList"
          :is-edit="edit"
          :module-params="moduleParams"
          @reloadData="loadListData()"
        />
        <ModelItemEdit :id="item.id" :model-name="moduleParams.modelName" :is-edit="edit" @reloadData="loadListData()" />
      </div>
    </div>
  </div>
</template>
