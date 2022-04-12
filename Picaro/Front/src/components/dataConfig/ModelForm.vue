<script lang="ts" setup>
import {defineProps, ref, PropType} from "vue";
import {useRoute} from "vue-router";
import {Model, FieldData, FieldDataWithId} from "@picTypes/index";
import RichText from "@components/dataConfig/formElements/_richText.vue";
import TextLine from "@components/dataConfig/formElements/_textLine.vue";
import {useUtilsStore} from "@stores/utils";
import {useSettingsStore} from "@stores/settings";
import axios from "axios";
import {nanoid} from "nanoid";

const route = useRoute()
const utilsStore = useUtilsStore()
const settingsStore = useSettingsStore()
const emit = defineEmits(['reloadData'])

const componentMap = {
  text: TextLine,
  richText: RichText,
  select: 'Select',
  radio: 'Radio',
  checkbox: 'CheckBox',
  booleanSwitch: 'BooleanSwitch',
  categoryFilter: 'CategoryFilter',
}

const props = defineProps({currentEditModel: {type: Object as PropType<Model>, required: true}, categories: {type: Array as PropType<string[]>, required: true}})
const currentModelData = ref<FieldDataWithId>({content: {}, categories: []})
const temporaryCategories = ref<string[]>([])
const modelData = ref([])
const selectedCategories = ref([])

function updateData(data: [string, FieldData]) {
  const [key, value] = data

  currentModelData.value.content[key] = value
}


async function sendForm() {
  let action: "post" | "put" = "post";
  if (selectedCategories.value.length > 0) {
    console.debug("selectedCategories", selectedCategories.value, currentModelData.value)
    currentModelData.value.categories = selectedCategories.value;
  }
  if (Object.keys(modelData.value).length > 0) action = "put";
  try {
    await axios[action](
        `/api/${settingsStore.currentAppSettings.applicationName}/${route.params.modelId}`,
        {id: nanoid(8), modelId: route.params.modelId, modelData: currentModelData.value} // if an array is passed each entry creates a row in the DB
    )
    utilsStore.addAlert({
      type: "success",
      text: "Saved successfully"
    });
    emit("reloadData");
  } catch (e) {
    utilsStore.addAlert({
      type: "error",
      text: `Request failed.  Returned status of ${e}`
    });
  }
}

</script>
<template>
  <h2>Add</h2>
  <component
    :is="componentMap[field.type]"
    v-for="(field, index) in currentEditModel.fieldCollection"
    :key="field.id"
    :field-params="field"
    :index="index"
    @updateData="updateData($event)"
  />
  <v-select
    v-model="selectedCategories"
    :items="categories"
    item-value="id"
    item-title="label"
    label="category"
    :multiple="true"
  />
  <button @click="sendForm">
    Save
  </button>
</template>

